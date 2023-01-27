import { useState, useRef } from "react";
import axios from "axios";
import { darkblue,lightred, darkred, midblue, white } from "../../colors";
// import ReCAPTCHA from "react-google-recaptcha";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import {
	DocumentsContainer,
	RegisterLink,
	DocumentText,
	ResourcesContainer,
	Resource,
	ResourceLogo,
	UploadBoxButton,
	InputWrapper,
	InputText,
	SubmitBtn,
	LogoContainter,
	Logo,
	InputLabel,
	HeaderText,
	ErorrLabel,
	WholeContainer,
	Red,
} from "./RegisterStyles";
import { Link } from "react-router-dom";
import LogoImage from "../../../assets/add-user.png";
import Teamlogo from "../../../assets/logo.png";
import colorlogo from "../../../assets/logoColor.png";
import Loading from "../../Loading/Loading";
const config = (title, message, type) => {
	return {
		title,
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#ffff",
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
	// const recaptchaRef = useRef();

	const [loading, setLoading] = useState(false);
	const [carModel, setCar] = useState("");
	const [ownerName, setOwner] = useState("");
	const [carColor, setColor] = useState("");
	const [plateNum, setPlate] = useState();
	const [plateType, setPlateType] = useState("");
	
	const [error, setError] = useState({});
	const history = useHistory();
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

    const laws = (message, type) => {
		return {
			customClass: {
				title: "text-white",
				htmlContainer: "text-white",
			},
			background: "#00171f",
			html: message,
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

	const registerHandler = async () => {
		const baseURL = "http://127.0.0.1:4500";
		if (
			!carModel ||
			!ownerName ||
			!carColor ||
			!plateNum ||
			!plateType
		) {
			Swal.fire(
				config("فرم کامل نیست", "ورودی های الزامی را پر کنید", "error")
			);
			return;
		}
		// setLoading(true);

		// const datas=
		// {
		//   "name":"Negar",
		//   "car":"Dena",
		//   "color":"Gray",
		//   "plateNum":"HH07194",
		//   "plateTypeplateType":"Normal"
		// }
		let datas = {};
		console.log(ownerName)
		datas["name"] = ownerName;
		datas["color"] = carColor;
		datas["car"] = carModel;
		datas["plateType"] = plateType;
		datas["plateNum"] = plateNum;
		// datas.push({"car": carModel});
		// datas.push({"color": carColor});
		// datas.push({"plateNum": plateNum});
		// datas.push({"plateType": plateType});
		// console.log("here you will see datas")
		console.log(datas)


		// const datas = new FormData();
		// datas.append("name", ownerName);
		// datas.append("car", carModel);
		// datas.append("color", carColor);
		// datas.append("plateNum", plateNum);
		// datas.append("plateType", plateType);

		// datas.append("captchaResponse", captcha);


		axios
			.post(baseURL + "/api/plates/", datas)
			.then((res) => {
				setLoading(false);
				Swal.fire(
					config(
						"ممنون از ثبت نام شما",
						"پلاک با موفقیت ثبت شد",
						"success"
					)
				).then((data) => {
					history.push("/login");
				});
			})
			.catch((e) => {
				console.log("ayyyyyyyyyyyyy")
				setLoading(false);
				setError(e.response);
				// recaptchaRef.current.reset();
				Swal.fire(
					config("ناموفق", "ثبت نام با مشکل مواجه شد", "error")
				);
			});
	};

	const showRules = () => {
		Swal.fire(laws(`
        نباید کار بد کنین
		<br />
		نباید به چیزی دست بزنین!`, "success"));
	};

	return (
		<WholeContainer style={{ height: "100vh" }} >
			<Container fluid>
				<Row style={{ height: "100vh" }}>
					<Col className="d-none d-md-block p-0" style = {{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						
    					}}>
						<LogoContainter>
							<Logo src={colorlogo} />
						</LogoContainter>
					</Col>
					<Col md={7} xs={12} style = {{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						
    					}}>
						<DocumentsContainer style={{width: "100%", }}>
							<Row className="pe-4">
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
											 نام صاحب ماشین 
											<Red> *</Red>
										</InputLabel>
										<InputText
											onChange={(e) => {
												setOwner(e.target.value);
											}}
										/>
										
									</InputWrapper>
								</Col>
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
											پلاک متقاضی
											<Red> *</Red>
										</InputLabel>
										<InputText
											onChange={(e) => {
												setPlate(e.target.value);
											}}
											style={{ direction: "ltr" }}
										/>

									</InputWrapper>
								</Col>
							</Row>
							<Row className="pe-4">
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
											 ماشین
											<Red> *</Red>
										</InputLabel>
										<InputText
											onChange={(e) => {
												setCar(e.target.value);
											}}
										/>

									</InputWrapper>
								</Col>
								<Col sm={6}>
									
								<InputWrapper>
										<InputLabel>
										رنگ ماشین
										<Red> *</Red>
										</InputLabel>
										<InputText
											onChange={(e) => {
												setColor(e.target.value);
											}}
                                            
										/>

									</InputWrapper>
									
								</Col>
							</Row>
							<Row className="pe-4">
								<Col sm={6}>
								<InputWrapper>
										<InputLabel>
											نوع پلاک
											<Red> *</Red>
										</InputLabel>
										<InputText
											onChange={(e) => {
												setPlateType(e.target.value);
											}}
                                            
										/>

									</InputWrapper>
									
								</Col>

							</Row>


							
						

							<Row>
								<Col sm={2}></Col>
								<Col className="text-center">
									<InputWrapper>
										<SubmitBtn
											onClick={registerHandler}
											disabled={loading}
										>
											{loading ? (
												<Loading color="white" />
											) : (
												"ثبت پلاک"
											)}
										</SubmitBtn>
										<br/>
										<br/>
										{/* <br/> */}
										<Link
															to="/login"
															style={{
																textDecoration: "center",
																margin: '20px',
																color: "#e71939",
																
															}}
														>
															بازگشت به صفحه کنترل
										</Link>

										
										
									</InputWrapper>
								</Col>
							</Row>
						</DocumentsContainer>
					</Col>
				</Row>
			</Container>
		</WholeContainer>
	);
}

export default Documents;
