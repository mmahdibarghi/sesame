import React, { useCallback, useState } from "react";
import { CloudUpload } from "react-bootstrap-icons";
import { useDropzone } from "react-dropzone";
import {
	UploadBoxContainter,
	UploadBoxIcon,
	UploadBoxText,
	UploadBoxButton,
	UploadBoxContainterLoading,
} from "./uploadbox-styles";
import axios from "../../../../helper/axiosInstance";
import Loading from "../../../Loading/Loading";
import Swal from "sweetalert2";
import { Row, Col } from "react-bootstrap";

const config = (title, message, type) => {
	return {
		title,
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#0B0044",
		text: message,
		confirmButtonColor: "#D30C7C",
		confirmButtonText: "تایید",
		color: "white",
		imageUrl:
			type == "error"
				? require("../../../../assets/faildLogo.png").default
				: require("../../../../assets/logo.png").default,
		imageHeight: 150,
	};
};

function UploadBox() {
	let datasToSend = { file: null, model: null };
	const [loading, setLoading] = useState(false);
	const [code, setCode] = useState();
	const onDrop = useCallback((acceptedFiles) => {
		const formData = new FormData();
		acceptedFiles.forEach((file) => {
			const reader = new FileReader();
			reader.onabort = () => {
				setLoading(false);
				Swal.fire(
					config("خطا", "آپلود فایل با خطا مواجه شد ", "error")
				).then(() => {
					window.location.reload();
				});
			};
			reader.onloadend = () => {
				// console.log(datasToSend);
			};
			reader.onerror = () => {
				setLoading(false);
				Swal.fire(
					config("خطا", "آپلود فایل با خطا مواجه شد ", "error")
				).then(() => {
					window.location.reload();
				});
			};
			reader.onprogress = () => {
				setLoading(true);
			};
			reader.onload = async () => {
				try {
					let fileName = file.name;
					
					if (
						fileName.split(".").at(-1) === "cpp" ||
						fileName.split(".").at(-1) === "py" ||
						fileName.split(".").at(-1) === "java"
					) {
						formData.append("file", file, fileName);
						datasToSend.file = file;
					} else {
						formData.append("model", file, fileName);
						datasToSend.model = file;
					}
					if (datasToSend.model && datasToSend.file) {
						const formData = new FormData();
						formData.append(
							"file",
							datasToSend.file,
							datasToSend.file.name
						);
						formData.append(
							"model",
							datasToSend.model,
							datasToSend.model.name
						);
						// console.log(formData);
						await axios.post("/codes/submit-code/", formData);
						setLoading(false);
						Swal.fire(
							"موفق",
							"کد شما با موفقیت آپلود شد",
							"success"
						).then(() => {
							window.location.reload();
						});
					} else if (
						!datasToSend.model &&
						datasToSend.file &&
						acceptedFiles.length === 1
					) {
						const formData = new FormData();
						formData.append(
							"file",
							datasToSend.file,
							datasToSend.file.name
						);

						await axios.post("/codes/submit-code/", formData);
						setLoading(false);
						Swal.fire(
							"موفق",
							"کد شما با موفقیت آپلود شد",
							"success"
						).then(() => {
							window.location.reload();
						});
					} else if (!datasToSend.file) {
						throw { response: { data: "فایل صحیح نیست" } };
					}
				} catch (e) {
					setLoading(false);
					Swal.fire(
						config(
							"خطا",
							e.response.data?.detail
								? e.response.data?.detail
								: e.response.data,
							"error"
						)
					).then(() => {
						window.location.reload();
					});
				}
			};
			reader.readAsArrayBuffer(file);
		});
	}, []);
	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	if (loading) {
		return (
			<UploadBoxContainterLoading {...getRootProps()}>
				<Loading />
				<span style={{ color: "white" }}>درحال آپلود</span>
			</UploadBoxContainterLoading>
		);
	}
	return (
		<UploadBoxContainter {...getRootProps()}>
			<input {...getInputProps()} type={"file"} />
			<UploadBoxIcon>
				<CloudUpload size={30} />
			</UploadBoxIcon>
			<Row>
				{/* <Col md={12} sm={0}> */}
				<UploadBoxText className={"d-sm-none d-xl-block"}>
					برای آپلود بکشید و رها کنید
				</UploadBoxText>
				{/* </Col> */}
			</Row>
			<UploadBoxButton>بارگذاری کد</UploadBoxButton>
		</UploadBoxContainter>
	);
}
export default UploadBox;
