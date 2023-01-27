import { useState, useRef } from "react";
import axios from "axios";
import { darkblue,lightred, darkred, midblue, white } from "../colors";
// import ReCAPTCHA from "react-google-recaptcha";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import { useHistory } from "react-router";
import Combobox from "react-widgets/Combobox";
import DropdownList from "react-widgets/DropdownList";
import Select from 'react-select';

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
} from "./Professor-register-styles";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/teachings.png";
import Loading from "../Loading/Loading";
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
				? require("../../assets/faildLogo.png").default
				: require("../../assets/logo.png").default,
		imageHeight: 150,
	};
};

function Documents() {
	// const recaptchaRef = useRef();

	const [loading, setLoading] = useState(false);
	const [studentCode, setstudentCode] = useState();
	const [major, setMajor] = useState("");
	const [grade, setgrade] = useState();
	const [doreh, setDoreh] = useState("");
	const [university, setuniversity] = useState("");
	const [department, setDepartment] = useState("");
	const [vaziat, setVaziat] = useState("");
	const [professor, setProfessor] = useState("");
	const [studentCardScan, setstudentCardScan] = useState(null);
	

	const [error, setError] = useState({});
	const history = useHistory();
	
	
	// TODO: add values
	  const dorehOptions  = [
		{ value: 'chocolate', label: 'کارشناسی - روزانه' },
		{ value: 'strawberry', label: 'کارشناسی - شبانه' },
		{ value: 'vanilla', label: 'کارشناسی ارشد - روزانه' },
		{ value: 'vanilla', label: 'کارشناسی ارشد - شبانه' },
		{ value: 'vanilla', label: 'دکتری - روزانه' },
		{ value: 'vanilla', label: 'دکتری - شبانه' },
	  ];
	  
	  const universityOptions  = [
		{ value: 'chocolate', label: 'دانشگاه صنعتی اصفهان' },
		{ value: 'strawberry', label: 'دانشگاه سمنان' },
		{ value: 'vanilla', label: 'دانشگاه صنعتی شریف' },
		{ value: 'vanilla', label: 'دانشگاه صنعتی امیرکبیر' },
		{ value: 'vanilla', label: 'دانشگاه تهران' },
		{ value: 'vanilla', label: 'دانشگاه علم و صنعت' },
	  ];
	  
	  
	  const departmenrOption  = [
		{ value: 'chocolate', label: 'برق و کامپیوتر' },
		{ value: 'strawberry', label: 'کامپیوتر' },
		{ value: 'vanilla', label: 'برق' },
		{ value: 'vanilla', label: 'ریاضی' },
		{ value: 'vanilla', label: 'شیمی' },
		{ value: 'vanilla', label: 'فیزیک' },
		{ value: 'vanilla', label: 'عمران' },
		{ value: 'vanilla', label: 'مکانیک' },
		{ value: 'vanilla', label: 'مواد' },
	  ];
	  
	  	  
	  const vaziatOptions  = [
		{ value: 'chocolate', label: 'مشغول به تحصیل' },
		{ value: 'strawberry', label: 'فارغ التحصیل' },
		{ value: 'vanilla', label: 'پایان نامه' },
	  ];
	  
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
					? require("../../assets/faildLogo.png").default
					: require("../../assets/logo.png").default,
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
					? require("../../assets/faildLogo.png").default
					: require("../../assets/logo.png").default,
			imageHeight: 150,
		};
	};

	const registerHandler = async () => {
		const baseURL = "http://127.0.0.1:8000";
		if (
			!studentCode ||
			!major ||
			!doreh ||
			!university ||
			!department ||
			!vaziat ||
			!studentCardScan
		) {
			Swal.fire(
				config("فرم کامل نیست", "ورودی های الزامی را پر کنید", "error")
				);
			console.log(studentCode,major,doreh,university,department,vaziat,studentCardScan,professor)
			return;
		}
		setLoading(true);
		const datas = new FormData();
		datas.append("student_number", studentCode);
		datas.append("major", major);
		datas.append("grade", grade);
		datas.append("doreh", doreh);
		datas.append("university", university);
		datas.append("department", department);
		datas.append("student_card_scan", studentCardScan, studentCardScan.name);
		datas.append("vaziat_tahsili", vaziat);
		datas.append("guide_master", professor);
		
		// datas.append("captchaResponse", captcha);

		axios
			.post(baseURL + "/users/update-to-student/", datas, {
				headers: { 'Authorization': `Bearer ${localStorage.getItem("access")}`,
				"accept-language": "fa" },
			})
			.then((res) => {
				setLoading(false);

				Swal.fire(
					config(
						"اطلاعات دانشچویی شما با موفقیت ثبت شد",
						"",
						"success"
					)
				).then((data) => {
					history.push("/");
				});
			})
			.catch((e) => {
				console.log(e)
				console.log("ayyyyyyyyyyyyy")
				setLoading(false);
				setError(e.response.data);
				// recaptchaRef.current.reset();
				Swal.fire(
					config("ناموفق", "ثبت نام با مشکل مواجه شد", "error")
				);
			});
	};

	
	function setDorehFunction(data){
		setDoreh(data.value)
	}
	function setUniversityFunction(data){
		setuniversity(data.value)
	}
	function setDepartmentFunction(data){
		setDepartment(data.value)
	}
	function setVaziatFunction(data){
		setVaziat(data.value)
	}
	return (
		<WholeContainer style={{ height: "100%" }}>
			<Container fluid style={{ height: "100%" }} >
				<Row style={{ height: "100%" }}>
					<Col className="d-none d-md-block p-0">
						<LogoContainter style={{ height: "100%"}}>
							<Logo src={LogoImage} />
						</LogoContainter>
					</Col>
					<Col md={7} xs={12}>
						<DocumentsContainer>
							<HeaderText>ثبت نام هیات علمی</HeaderText>
							<Row className="pe-4">
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
											کد پرسنلی
											<Red> *</Red>
										</InputLabel>
										<InputText
											type="number"
											onChange={(e) => {
												setstudentCode(e.target.value);
											}}
										/>
										{error?.studentCode &&
											error.studentCode.map((e) => (
												<ErorrLabel>{e}</ErorrLabel>
											))}
									</InputWrapper>
								</Col>
								
								
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
											 رشته 
											<Red> *</Red>
										</InputLabel>
										<InputText
											onChange={(e) => {
												setMajor(e.target.value);
											}}
										/>
										{error?.major &&
											error.major.map((e) => (
												<ErorrLabel>{e}</ErorrLabel>
											))}
									</InputWrapper>
								</Col>
								
							</Row>
							
							<Row className="pe-4">
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
											دانشگاه
											<Red> *</Red>
										</InputLabel>
										<div className="dropdown-container">
											<Select
												options={universityOptions}
												placeholder="انتخاب کنید"
												isSearchable={true}
												onChange={setUniversityFunction}
											/>
										</div>
										{error?.university &&
											error.university.map((e) => (
												<ErorrLabel>{e}</ErorrLabel>
											))}
									</InputWrapper>
									
								</Col>
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
											دانشکده
											<Red> *</Red>
										</InputLabel>
										<div className="dropdown-container">
											<Select
												options={departmenrOption}
												placeholder="انتخاب کنید"
												isSearchable={true}
												onChange={setDepartmentFunction}
											/>
										</div>
										{error?.email &&
											error.email.map((e) => (
												<ErorrLabel>{e}</ErorrLabel>
											))}
									</InputWrapper>
								</Col>
							</Row>
						
						



							<Row
								className="mt-2 pe-4"
								style={{ alignItems: "flex-end" }}
							>
								<Col sm={6}>
									<InputWrapper>
										<InputLabel>
										اسکن کارت استادی
										<Red> *</Red>
										</InputLabel>

										<UploadBoxButton
											type={"file"}
											id={"file"}
											onChange={(e) => {
												setstudentCardScan(e.target.files[0]);
											}}
										/>
										{error?.studentCardScan &&
											error.studentCardScan.map((e) => (
												<ErorrLabel>{e}</ErorrLabel>
											))}
									</InputWrapper>


								</Col>

								
								{/* <Col sm={6}>
									<ReCAPTCHA
										size={"normal"}
										ref={recaptchaRef}
										sitekey={
											"6Ldk3v8bAAAAANN-HEBzmkgltijmZc6qsCkERNGA"
										}
										onChange={(value) => {
											setCaptcha(value);
										}}
									/>
									{error?.captcha &&
										error.captcha.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</Col> */}


								<Col></Col>
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
												"ثبت اطلاعات "
											)}
										</SubmitBtn>
										<Link
											to="/"
											style={{
												textDecoration: "none",
											}}
										>
											<RegisterLink>
												{" "}
												بازگشت
											</RegisterLink>
										</Link>
										<a href="https://hpc.iut.ac.ir/">
											<RegisterLink>
												{" "}
												بازگشت به صفحه اصلی
											</RegisterLink>
										</a>
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
