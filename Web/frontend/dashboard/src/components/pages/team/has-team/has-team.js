import { Col, Container, Row } from "react-bootstrap";
import {
	HasTeamContainter,
	Dot,
	ExitButton,
	NameText,
	InputText,
	CopyBtn,
} from "./has-team-styles";
import axios from "../../../../helper/axiosInstance";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
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
function HasTeam({ team }) {
	const code = useRef(null);

	// const showHash = () => {
	// 	Swal.fire({
	// 		...config("کد ورود", team.joining_code, "success"),
	// 		html: `<p>fff</p><i class="fas fa-copy"></i><script>alert('fff')</script>`,
	// 	});
	// };
	const exitHandler = () => {
		Swal.fire({
			...config("آیا از خروج خود اطمینان دارید؟", "", "success"),
			showCancelButton: true,
			confirmButtonText: `بله`,
			cancelButtonText: `خیر`,
		}).then((res) => {
			if (res.isConfirmed) {
				axios
					.delete("/accounts/leaveTeam/")
					.then((res) => {
						Swal.fire(
							config("با موفقیت از تیم خارج شدید", "", "success")
						).then((_) => {
							window.location.reload();
						});
					})
					.catch((e) => {
						Swal.fire(config("e", "", "success"));
					});
			}
		});
	};
	return (
		<HasTeamContainter>
			<h1>{team.name}</h1>
			{team.user_set.map((user) => (
				<>
					<Dot /> <NameText> {user} </NameText> <br />
				</>
			))}
			{/* <Row>
				<Col md={12} lg={6} className="text-center">
					<span>کد ورود به تیم شما</span>
					<CopyBtn
						onClick={() => {
							code.current.select();
							code.current.setSelectionRange(0, 99999);
							navigator.clipboard.writeText(code.current.value);
						}}
					>
						copy <i className="fas fa-copy"></i>
					</CopyBtn>
					<InputText value={team.joining_code} readOnly ref={code} />
				</Col>
				<Col
					md={12}
					lg={6}
					className="text-center"
					style={{ alignSelf: "flex-end" }}
				>
					<ExitButton onClick={exitHandler}> خروج از تیم</ExitButton>
				</Col>
			</Row> */}
			
		</HasTeamContainter>
	);
}

export default HasTeam;
