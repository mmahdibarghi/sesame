import { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import axiosInstance from "../../../../helper/axiosInstance";
import axios from "axios";
import { ReactComponent as CheckLogo } from "../../../../assets/check.svg";
import { ReactComponent as DeleteLogo } from "../../../../assets/delete2.svg";
import {
	SendBoardContainer,
	SendBoardHeaderText,
	FiltersButton,
	SendBoardTable,
	SendBoardRow,
	SendBoardItem,
	SendBoardHeader,
	ShowGameButton,
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
			await axios.get("http://127.0.0.1:8000/users/list-all-accounts/")
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
		<SendBoardContainer>
			<Row>
				<Col xs={4}>
					<SendBoardHeaderText>کاربران سیستم</SendBoardHeaderText>
				</Col>
			</Row>

			<SendBoardTable>
				<SendBoardRow>
					<SendBoardHeader>نام</SendBoardHeader>
					{/* <SendBoardHeader> نتیجه</SendBoardHeader>
					<SendBoardHeader> امتیاز</SendBoardHeader> */}
					<SendBoardHeader>نام خانوادگی</SendBoardHeader>
					<SendBoardHeader>تاریخ ایجاد اکانت</SendBoardHeader>
					<SendBoardHeader>تایید کاربر</SendBoardHeader>
					<SendBoardHeader>حذف کاربر</SendBoardHeader>
					<SendBoardHeader>وضعیت کاربر</SendBoardHeader>
				</SendBoardRow>
				{entries.map((entry) => (
					<SendBoardRow>
						<SendBoardItem>{entry.first_name}</SendBoardItem>
						{/* <SendBoardItem>f</SendBoardItem>
						<SendBoardItem></SendBoardItem> */}
						<SendBoardItem>{entry.last_name}</SendBoardItem>
						<SendBoardItem>
							{new Date(entry.created_at).toLocaleString(
								"fa-IR"
							)}
						</SendBoardItem>
						<SendBoardItem>{<CheckLogo
									style={{ cursor: "pointer" }}
									onClick={() => {
										activeHandler(entry.id);
									}}
								/>}
						</SendBoardItem>
						<SendBoardItem>{<DeleteLogo
									style={{ cursor: "pointer" }}
									onClick={() => {
										deleteHandler(entry.id);
									}}
								/>}</SendBoardItem>
						<SendBoardItem>{entry.status?"تایید شده":"تایید نشده"}</SendBoardItem>
					</SendBoardRow>
				))}{" "}
			</SendBoardTable>
		</SendBoardContainer>
	);
}

export default Sends;
