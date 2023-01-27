import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axiosInstance from "../../../../helper/axiosInstance";
import axios from "axios";
import { ReactComponent as CheckLogo } from "../../../../assets/check.svg";
import { ReactComponent as DeleteLogo } from "../../../../assets/delete2.svg";
import { Link } from "react-router-dom";
import {
	SendBoardContainer,
	SendBoardHeaderText,
	FiltersButton,
	SendBoardTable,
	SendBoardRow,
	SendBoardItem,
	SendBoardHeader,
	ShowGameButton,
	WholeContainer,
	SubmitBtn,
} from "./sends-styles";
import Swal from "sweetalert2";
import Loading from "../../../Loading/Loading";
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
function Sends() {
	const [loading, setLoading] = useState(true);
	const [entries, setEntries] = useState([]);
	const [error, setError] = useState("");
	const showLogs = (message) => {
		Swal.fire(
			config(
				message === "Done" ? "بدون خطا" : "خطاها",
				message,
				message === "Done" ? "success" : "error"
			)
		);
	};
	const activeHandler = async (id) => {
		setLoading(true);
		const formData = new FormData();
		formData.append("code-id", id);
		try {
			const { data } = await axios.post("/codes/active-code/", formData);
			Swal.fire(config("موفق", "با موفقیت تغییر یافت", "success")).then(
				() => {
					window.location.reload();
				}
			);
		} catch (e) {
			Swal.fire(config("خطا", e.response.data.detail, "error")).then(
				() => {
					window.location.reload();
				}
			);
		}
		setLoading(false);
	};
	const deleteHandler = async (id) => {
		setLoading(true);

		try {
			const { data } = await axios.delete("/codes/delete-code/", {
				data: { "code-id": id },
			});
			window.location.reload();
		} catch (e) {
			Swal.fire(config("خطا", e.response.data, "error")).then(() => {
				window.location.reload();
			});
		}
		setLoading(false);
	};
	useEffect(async () => {
		
			console.log("tryyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy")
			await axios.get("http://localhost:4500/api/plates/")
			  .then(function (response) {
				console.log(response);
				setEntries(response.data);
			  })
			  .catch(function (error) {
				console.log("waaaaaaaaaaaaaaaaaaaaaaaaaaaaay")
				console.log(error);
				console.log("waaaaaaaaaaaaaaaaaaaaaaaaaaaaay")
			  })
			  .then(function () {
				console.log("khaaaaaaaaaaaaaaasteh shodam")
			  });  
			
			
		setLoading(false);
	}, []);
	return loading ? (
		<div
			style={{ margin: "2em", display: "flex", justifyContent: "center" }}
		>
			<Loading />
		</div>
	) : (
		<WholeContainer>
			<SendBoardContainer >
				<Row>
					<Col xs={4}>
						<SendBoardHeaderText>پلاک های ثبت شده</SendBoardHeaderText>
					</Col>
				</Row>

				<SendBoardTable>
					<SendBoardRow>
						<SendBoardHeader>نام صاحب ماشین</SendBoardHeader>
						{/* <SendBoardHeader> نتیجه</SendBoardHeader>
						<SendBoardHeader> امتیاز</SendBoardHeader> */}
						<SendBoardHeader>نوع خودرو</SendBoardHeader>
						<SendBoardHeader>رنگ خودرو</SendBoardHeader>
						<SendBoardHeader>پلاک خودرو</SendBoardHeader>
						<SendBoardHeader>نوع پلاک</SendBoardHeader>
						{/* <SendBoardHeader>وضعیت کاربر</SendBoardHeader> */}
					</SendBoardRow>
					{entries.map((entry) => (
						<SendBoardRow>
							<SendBoardItem>{entry.name}</SendBoardItem>
							{/* <SendBoardItem>f</SendBoardItem>
							<SendBoardItem></SendBoardItem> */}
							<SendBoardItem>{entry.car}</SendBoardItem>
							<SendBoardItem>{entry.color}</SendBoardItem>
							<SendBoardItem>{entry.plateNum}</SendBoardItem>
							<SendBoardItem>{entry.plateType}</SendBoardItem>




						</SendBoardRow>
					))}{" "}
				</SendBoardTable>


				<Link
								to="/login"
								style={{
									textDecoration: "none",
									color: "#e71939",
								}}
							>
									<SubmitBtn to="/login" disabled={loading}>
										{loading ? (
											<Loading color={"white"} />
										) : (
											"بازگشت به صفحه کنترل"
										)}
									</SubmitBtn>
								

				</Link>
						


			</SendBoardContainer>
			
		</WholeContainer>
	);
}

export default Sends;
