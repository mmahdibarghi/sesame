import { useState, useRef } from "react";
import axios from "axios";
// import axiosInstance from "../../../helper/axiosInstance";
import { darkblue, darkred, lightred, midblue, white } from "../../colors";
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
} from "./LoginStyles";
import Loading from "../../Loading/Loading";
import LogoImage from "../../../assets/logo-white2.png";
import GithubImage from "../../../assets/github.png";
import LinkedinImage from "../../../assets/linkedin.png";
import GoogleImage from "../../../assets/google.png";

const config = (title, message, type) => {
	return {
		title,
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#003459",
		text: message,		
		confirmButtonColor: lightred,
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
	const recaptchaRef = useRef();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [captcha, setCaptcha] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const registerHandler = async () => {
		if (!username || !password) {
			Swal.fire(
				config("فرم کامل نیست", "ورودی های الزامی را پر کنید", "error")
			);
			return;
		}
		setLoading(true);
		const datas = new FormData();
		datas.append("username", username);
		datas.append("password", password);
		datas.append("captchaResponse", captcha);

		try {
			// const sendData = await axios.post(baseURL + "/accounts/login/", datas);
			const { data } = await axios.post(
				"https://api.aicup.iut.ac.ir/accounts/login/",
				datas
			);

			auth.setAccessToken(data.access);
			auth.setRefreshToken(data.refresh);
			setLoading(false);
			Swal.fire(config("موفق", "با موفقیت وارد شدی", "success")).then(
				(_) => {
					window.location.reload();
				}
			);
		} catch (e) {
			recaptchaRef.current.reset();
			setLoading(false);
			Swal.fire(
				config(
					"خطا",
					e.response.status === 401
						? "اکانتی با این اطلاعات وجود ندارد"
						: "لطفا فرم را کامل کنید",
					"error"
				)
			);
		}
	};
	return (
		<WholeContainer>
			<Col md={8} xs={11} lg={3}>
				<Logo>
					<img src={LogoImage} style={{ width: "100%" }} />
				</Logo>
				<DocumentsContainer>
					<HeaderText>صفحه ورود</HeaderText>
					<InputWrapper>
						<InputText
							placeholder="نام کاربری"
							onChange={(e) => {
								setUsername(e.target.value);
							}}
						/>
					</InputWrapper>

					<InputWrapper>
						<InputText
							placeholder="رمز عبور"
							type="password"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</InputWrapper>
					<InputWrapper top>
						<ReCAPTCHA
							ref={recaptchaRef}
							size={"normal"}
							sitekey={"6Ldk3v8bAAAAANN-HEBzmkgltijmZc6qsCkERNGA"}
							onChange={(value) => {
								setCaptcha(value);
							}}
						/>
					</InputWrapper>

					<InputWrapper>
						<SubmitBtn onClick={registerHandler} disabled={loading}>
							{loading ? (
								<Loading color={"white"} />
							) : (
								"ورود"
							)}
						</SubmitBtn>
						<ForgotButton>
							<Link
								to="/reset-password"
								style={{
									textDecoration: "none",
									color: "#e71939",
								}}
							>
								ثبت نام در سامانه
							</Link>
						</ForgotButton>
						<a href="/reset-password">
							<RegisterLink>فراموشی رمز عبور</RegisterLink>
						</a>
					</InputWrapper>
				</DocumentsContainer>
			</Col>
		</WholeContainer>
	);
}

export default Documents;
