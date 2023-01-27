import { useState } from "react";
import axios from "axios";
// import axiosInstance from "../../../helper/axiosInstance";
import { darkblue, darkred, midblue, white } from "../../colors";
import ReCAPTCHA from "react-google-recaptcha";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import auth from "../../../helper/auth";
import { Link } from "react-router-dom";
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
} from "./ChangePassword-styles";
import LogoImage from "../../../assets/logo.png";
import GithubImage from "../../../assets/github.png";
import LinkedinImage from "../../../assets/linkedin.png";
import GoogleImage from "../../../assets/google.png";
import { useParams, useHistory } from "react-router";
import Loading from "../../Loading/Loading";
const config = (title, message, type) => {
	return {
		title,
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#007ea7",
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
	const [loading, setLoading] = useState(false);
	const [password, setPassword] = useState("");
	const [rePassword, setRePassword] = useState("");
	const { uid, token } = useParams();
	const history = useHistory();
	const registerHandler = async () => {
		if (!password || !rePassword) {
			Swal.fire(
				config("فرم کامل نیست", "ورودی های الزامی را پر کنید", "error")
			);
			return;
		}
		if (password !== rePassword) {
			Swal.fire(config("فرم کامل نیست", "فیلد ها یکسان نیستند", "error"));
			return;
		}
		setLoading(true);
		const datas = new FormData();
		datas.append("new_password1", password);
		datas.append("new_password2", rePassword);
		datas.append("uid", uid);
		datas.append("token", token);

		try {
			const { data } = await axios.post(
				"https://api.aicup.iut.ac.ir/rest/auth/password/reset/confirm/",
				datas,
				{
					headers: { "accept-language": "fa" },
				}
			);
			setLoading(false);
			Swal.fire(config("موفق", "پسورد شما تغییر کرد", "success")).then(
				(_) => {
					history.push("/login");
					window.location.reload();
				}
			);
		} catch (e) {
			console.log(e.response.data);
			Swal.fire(
				config(
					"خطا",
					e.response.data.new_password2.join(" ، "),
					"error"
				)
			);
			setLoading(false);
		}
	};
	return (
		<WholeContainer>
			<Col md={8} xs={11} lg={4}>
				<Logo>
					<img src={LogoImage} style={{ width: "100%" }} />
				</Logo>
				<DocumentsContainer>
					<HeaderText>تغییر رمز عبور</HeaderText>
					<InputWrapper>
						<InputText
							type={"password"}
							placeholder="رمز جدید"
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</InputWrapper>
					<InputWrapper>
						<InputText
							type={"password"}
							placeholder="تکرار رمز جدید"
							onChange={(e) => {
								setRePassword(e.target.value);
							}}
						/>
					</InputWrapper>

					<InputWrapper>
						<ForgotButton
							onClick={registerHandler}
							disabled={loading}
						>
							{loading ? (
								<Loading color={"blue"} />
							) : (
								"بازیابی رمز عبور"
							)}
						</ForgotButton>
					</InputWrapper>
					<Line />
				</DocumentsContainer>
			</Col>
		</WholeContainer>
	);
}

export default Documents;
