import { Col, Container, Row } from "react-bootstrap";
import { NoTeamContainter, InputText, TeamButton } from "./no-team-styles";
import { useState, useEffect } from "react";
import axios from "../../../../helper/axiosInstance";
import Swal from "sweetalert2";
import { findAllByDisplayValue } from "@testing-library/react";
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
function NoTeam() {
	const [joinLoading, setJoinLoading] = useState(false);
	const [createLoading, setCreateLoading] = useState(false);
	const [teamName, setTeamName] = useState("");
	const [joining_code, setJoining_code] = useState("");
	const createHandler = async () => {
		setCreateLoading(true);
		const formData = new FormData();
		formData.append("name", teamName);
		try {
			const { data } = await axios.post("/teams/", formData);
			Swal.fire(config("عالیه", "تیم ساخته شد", "success")).then((_) => {
				window.location.reload();
			});
			setCreateLoading(false);
		} catch (e) {
			Swal.fire(config("خطا", e.response.data.message, "error"));
			setCreateLoading(false);
		}
	};

	const joinHandler = async () => {
		setJoinLoading(true);
		const formData = new FormData();
		formData.append("joining_code", joining_code);
		try {
			const { data } = await axios.put("/accounts/join-team/", formData);
			Swal.fire(config("عالیه", "وارد تیم شدی", "success")).then((_) => {
				window.location.reload();
			});
			setJoinLoading(false);
		} catch (e) {
			setJoinLoading(false);
			Swal.fire(
				config(
					"خطا",
					e.response.data.message === "Error : Team Not found"
						? "کد وارد شده صحیح نیست"
						: e.response.data.message,
					"error"
				)
			);
		}
	};
	return (
		<NoTeamContainter>
			<Row>
				<Col>
					<h2> مهلت زمان ایجاد تیم تمام شده است. اگر مشکلی بابت تیم شما پیش آمده لطفا با پشتیبانی رویداد در میان بگذارید.</h2>
					{/* <Row>
						<Col lg={8}>
							<InputText
								placeholder="نام تیم"
								onChange={(e) => {
									setTeamName(e.target.value);
								}}
							/>
						</Col>
						<Col>
							<TeamButton
								onClick={createHandler}
								disabled={createLoading}
							>
								{createLoading ? (
									<Loading color="white" />
								) : (
									"ساختن تیم"
								)}
							</TeamButton>
						</Col>
					</Row> */}
				</Col>
			</Row>
			{/* <Row>
				<Col>
					<h2> ورود به تیم</h2>
					<Row>
						<Col lg={8}>
							<InputText
								placeholder="کد تیم"
								onChange={(e) => {
									setJoining_code(e.target.value);
								}}
							/>
						</Col>
						<Col>
							<TeamButton
								onClick={joinHandler}
								disabled={joinLoading}
							>
								{joinLoading ? (
									<Loading color="white" />
								) : (
									"ورود به تیم"
								)}
							</TeamButton>
						</Col>
					</Row>
				</Col>
			</Row> */}
		</NoTeamContainter>
	);
}

export default NoTeam;
