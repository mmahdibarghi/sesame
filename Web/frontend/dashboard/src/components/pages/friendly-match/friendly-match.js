
import {
	HasTeamContainter,
	Dot,
	ExitButton,
	NameText,
	InputText,
	CopyBtn,
	SendBoardContainer,
	ShowGameButton,
	ShowGameContainer,
	SendBoardHeaderText,
	FiltersButton,
	SendBoardTable,
	SendBoardRow,
	SendBoardItem,
	SendBoardHeader,
	HeaderContainer,
} from "./friendLy-matchStyls";
import { useState , useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "../../../helper/axiosInstance";
import Swal from "sweetalert2";
const config = (title, message, type) => {
	return {
		title,
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#003459",
		text: message,
		confirmButtonColor: "#D30C7C",
		confirmButtonText: "تایید",
		color: "white",
		imageUrl:
			type == "error"
				? require("../../../assets/faildLogo.png").default
				: require("../../../assets/logo.png").default,
		imageHeight: 150,
	};
};
const FriendlyMatch = () => {
	const [loading, setLoading] = useState(false);
	const [entries, setEntries] = useState([]);
	const requestGame = async () => {
		setLoading(true);
		try {
			const { data } = await axios.post("/match/match-request/");
			Swal.fire(config("موفق", "درخواست بازی شما ثبت شد ", "success"));
		} catch (e) {
			Swal.fire(config("خطا", e.response.data.detail, "error"));
		}
		setLoading(false);
	};


	useEffect(async () => {
		try {
			const { data } = await axios.get("/match/get-matches/");
			setEntries(data);
			
		} catch (e) {
			console.log(e);
		}
		setLoading(false);
	}, []);
	   
	
	return (
		<>
			<HasTeamContainter>
				<HeaderContainer>
					<h2> بازی دوستانه</h2>
					<ExitButton disabled={loading} onClick={requestGame}>
						{loading ? "صبر کنید" : "درخواست بازی دوستانه"}
					</ExitButton>
				</HeaderContainer>
				<NameText>
					<Dot /> درصورت داشتن حداقل یک کد فعال و کامپایل شده
					می‌توانید از این قسمت درخواست بازی دوستانه خود را ثبت کنید.
					سامانه داوری ما به صورت خودکار کد شمارا در مقابل یک تیم دیگر
					قرار داده و بازی را برگزار می‌کند.{" "}
				</NameText>{" "}
				<br />
				<NameText>
					<Dot /> هر تیم قادر است هر نیم ساعت تنها یک بازی دوستانه را به صورت کامل انجام دهد.{" "}
				</NameText>{" "}
				<br />
			</HasTeamContainter>
			<SendBoardContainer>
				<Row>
					<Col xs={4}>
						<SendBoardHeaderText>
							{" "}
							وضعیت ارسال ها{" "}
						</SendBoardHeaderText>
					</Col>
					<Col className="text-start">
						
					</Col>
				</Row>

				<SendBoardTable>
					<SendBoardRow>
						<SendBoardHeader>تیم اول</SendBoardHeader>
						<SendBoardHeader> تیم دوم</SendBoardHeader>
						<SendBoardHeader>تیم برنده</SendBoardHeader>
						<SendBoardHeader>زمان مسابقه</SendBoardHeader>
						<SendBoardHeader>لاگ گرافیکی بازی</SendBoardHeader>
						<SendBoardHeader>لاگ سرور</SendBoardHeader>
						
					</SendBoardRow>
					{entries.map((entry) => (
					<SendBoardRow>

						<SendBoardItem>
							{entry.match["first_team"]}
						</SendBoardItem>
						<SendBoardItem>
							{entry.match["second_team"]}
						</SendBoardItem>
						<SendBoardItem>
							{entry.winner_team}
						</SendBoardItem>
						
						
						<SendBoardItem>
							{new Date(entry.date_time_create).toLocaleString(
								"fa-IR"
							)}
						</SendBoardItem>


						
						<SendBoardItem>
							<ShowGameButton
									onClick={async() => {
										window.open("https://api.aicup.iut.ac.ir/"+entry.game_log, "Download");
										

									}}							
								>
								
									
									دانلود لاگ بازی
								
								
							</ShowGameButton>
							
						</SendBoardItem>
						
						
						<SendBoardItem>
							<ShowGameButton
									onClick={() => {
										window.open("https://api.aicup.iut.ac.ir/"+entry.server_log);
										
									}}
								>
									دانلود لاگ سرور
							</ShowGameButton>
						</SendBoardItem>

						
						
					</SendBoardRow>
					
				))}{" "}

				</SendBoardTable>
			</SendBoardContainer>
		</>
	);
};

export default FriendlyMatch;
