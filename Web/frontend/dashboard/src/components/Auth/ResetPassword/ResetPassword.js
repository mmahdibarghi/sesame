import { useState } from "react";
import axios from "axios";
// import axiosInstance from "../../../helper/axiosInstance";
import { darkblue, darkred, midblue, white } from "../../colors";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import auth from "../../../helper/auth";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import {
	DocumentsContainer,
	DocumentText,
	Dot,
	ResourcesContainer,
	Resource,
	ResourceLogo,
	WholeContainer,
	UploadBoxButton,
	InputWrapper,
	InputText,
	SubmitBtn,
	HeaderText,
	ForgotButton,
	RegisterLink,
	Line,
	Logo,
	LoginIcon,
} from "./ResetPassword-styles";
import LogoImage from "../../../assets/logo.png";
import GithubImage from "../../../assets/github.png";
import LinkedinImage from "../../../assets/linkedin.png";
import GoogleImage from "../../../assets/google.png";
import Loading from "../../Loading/Loading";

const config = (title, message, type) => {
	return {
		title,
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#003459",
		text: message,
		confirmButtonColor: darkred,
		confirmButtonText: "تایید",
		color: "white",
		imageUrl:
			type == "error"
				? require("../../../assets/faildLogo.png").default
				: require("../../../assets/logo.png").default,
		imageHeight: 150,
	};
};

function Documents() {
	const [email, setEmail] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const registerHandler = async () => {
		if (!email) {
			Swal.fire(
				config("فرم کامل نیست", "ورودی های الزامی را پر کنید", "error")
			);
			return;
		}
		const datas = new FormData();
		datas.append("email", email);
		setLoading(true);
		try {
			const { data } = await axios.post(
				"http://127.0.0.1:8000/users/password-reset/",
				datas
			);
			setLoading(false);
			Swal.fire(
				config(
					"ارسال شد",
					"درخواست بازیابی به ایمیل شما ارسال شد",
					"success"
				)
			).then((_) => {
				window.location.reload();
			});
		} catch (e) {
			setLoading(false);
			Swal.fire(config("خطا", e, "error"));
		}
	};
	return (
		<WholeContainer>
			<Col md={8} xs={11} lg={3}>
				<Logo>
					<img src={LogoImage} style={{ width: "100%" }} />
				</Logo>
				<DocumentsContainer>
					<HeaderText>بازیابی رمز عبور</HeaderText>
					<InputWrapper>
						<InputText
							placeholder="ایمیل"
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</InputWrapper>

					<InputWrapper>
						<ForgotButton
							onClick={registerHandler}
							disabled={loading}
						>
							{loading ? (
								<Loading color="blue" />
							) : (
								"بازیابی رمز عبور"
							)}
						</ForgotButton>
					</InputWrapper>
					<InputWrapper>
						<SubmitBtn>
							<Link
								to="/login"
								style={{
									textDecoration: "none",
									color: "white",
								}}
							>
								بازگشت به صفحه ورود
							</Link>
						</SubmitBtn>
					</InputWrapper>
					<Line />
				</DocumentsContainer>
			</Col>
		</WholeContainer>
	);
}

export default Documents;
