import { Col, Container, Row } from "react-bootstrap";
import { darkred, white, midblue, lightred, lightblue } from "../../colors";
import { useHistory } from "react-router";
import {
	InputWrapper,
	InputText,
	ErorrLabel,
	HasTeamContainter,
	InputLabel,
	UploadBoxButton,
	SubmitButton,
	EditProfileHeader,
} from "./EditProfile-styles";
import Loading from "../../Loading/Loading";
import axios from "../../../helper/axiosInstance";
import { useState, useEffect, useRef } from "react";
import Swal from "sweetalert2";
import auth from "../../../helper/auth";
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

const laws = (message, type) => {
	return {
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#003459",
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

const EditProfile = () => {
	const [loading, setLoading] = useState(true);
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [first_name, setFirst_name] = useState("");
	const [last_name, setLast_name] = useState("");
	const [age, setAge] = useState();
	const [major, setMajor] = useState();
	const [uni, setUni] = useState();
	const [preResume, setPreResume] = useState("");
	const [phone_number, setPhone_number] = useState("");
	const [github, setGithub] = useState();
	const [linkedin, setLinkedin] = useState();
	const [password, setPassword] = useState();
	const [repassword, setRepassword] = useState();
	const [resume, setResume] = useState(undefined);
	const [error, setError] = useState({});
	const history = useHistory();
	useEffect(() => {
		axios.get("/accounts/user-info/").then(({ data }) => {
			setLoading(false);
			setFirst_name(data.first_name);
			setLast_name(data.last_name);
			setEmail(data.email);
			setAge(data.age);
			setMajor(data.major);
			setUni(data.university);
			setPhone_number(data.phone_number);
			setUsername(data.username);
			setGithub(data.github);
			setLinkedin(data.linkedin);
			setPreResume(data.resume);
		});
	}, []);
	const registerHandler = async () => {
		if (age === "" || major === "" || uni === "") {
			Swal.fire(
				config("خطا", "اطلاعات ضروری ثبت نام را وارد کنید", "error")
			);
			return;
		}
		setLoading(true);
		const datas = new FormData();
		if (age) datas.append("age", age);
		if (major) datas.append("major", major);
		if (uni) datas.append("university", uni);
		if (password) datas.append("password", password);
		if (repassword) datas.append("password_confirmation", repassword);
		if (github) datas.append("github", github);
		if (linkedin) datas.append("linkedin", linkedin);
		if(email) datas.append('email' , email);
		if (resume) datas.append("resume", resume);
		try {
			await axios.patch("/accounts/user-info/", datas, {
				headers: { "accept-language": "fa" },
			});
			await auth.getNewAccessToken(localStorage.getItem("refresh"));
			setLoading(false);
			Swal.fire(
				config("انجام شد", "پروفایل با موفقیت تغییر کرد", "success")
			).then(() => {
				window.location.reload();
			});
		} catch (e) {
			setLoading(false);
			setError(e.response.data);
			Swal.fire(config("ناموفق", "ثبت نام با مشکل مواجه شد", "error"));
		}
	};

	const showRules = () => {
		Swal.fire(
			laws(
				`
        حداکثر سن مجاز شرکت‌کنندگان برای مسابقه 30 سال بوده و شرکت‌کنندگان مقاطع بالاتر از کارشناسی‌ارشد حق شرکت در مسابقه را ندارند. 
        <br />
        در هنگام مسابقه هرگونه ارتباط و رد و بدل شدن کد بین شرکت‌کنندگان و تیم‌های مختلف غیرمجاز است و برگزارکننده می‌تواند تا در صورت اثبات شباهت غیر‌عادی بین  دو یا چند کد آنان را از ادامه مسابقه محروم کند
        <br />
        شرکت یک فرد با چند حساب کاربری در طی مسابقه ممنوع است و هر شرکت کننده تنها می‌تواند با یک حساب کاربری و تنها در یک تیم واحد وارد مسابقه شود (در صورت مشاهده تخلف برگزارکننده مجبور به حذف تمامی تیم‌های مربوط با کاربر خاطی می‌باشد.)
        <br />
        هر گونه تلاش برای ایجاد مشکل در سیستم مسابقه و سرور‌های بازی باعث حذف تیم از مسابقه می‌شود و تیم یا شخص خاطی تحت پیگرد قانونی قرار خواهند گرفت
        <br />
        تمامی کد‌های ارسالی باید تلاش مستقیم برای حل عادلانه چالش مسابقه باشند در غیر این صورت کد ثبت شده شده به صورت کامل از روند مسابقه حذف خواهد شد
        <br />
        برگزار کننده رویداد حق دارد تا با حفظ حریم شخصی شرکت‌کنندگان اطلاعات وارد شده آنان را در اختیار شرکت‌های حامی و اسپانسر مسابقات قرار دهد
        `,
				"success"
			)
		);
	};

	return (
		<>
			<EditProfileHeader>ویرایش پروفایل</EditProfileHeader>
			<HasTeamContainter>
				{loading ? (
					<Loading />
				) : (
					<>
						<Row className="pe-4">
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>نام</InputLabel>
									<InputText
										type="name"
										readOnly={true}
										value={first_name}
									/>
								</InputWrapper>
							</Col>
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>نام خانوادگی</InputLabel>
									<InputText
										type="name"
										readOnly={true}
										value={last_name}
									/>
								</InputWrapper>
							</Col>
						</Row>
						<Row className="pe-4">
							<Col sm={6}>
								<InputWrapper>
									<InputLabel
										style={{ color: !major ? "red" : "" }}
									>
										سن
									</InputLabel>
									<InputText
										onChange={(e) => {
											setAge(e.target.value);
										}}
										type="name"
										value={age}
									/>
									{error?.age &&
										error.age.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</InputWrapper>
							</Col>
							<Col sm={6}>
								<InputWrapper>
									<InputLabel
										style={{ color: !major ? "red" : "" }}
									>
										دانشگاه
									</InputLabel>
									<InputText
										onChange={(e) => {
											setUni(e.target.value);
										}}
										type="name"
										value={uni}
									/>
									{error?.university &&
										error.university.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</InputWrapper>
							</Col>
						</Row>
						<Row className="pe-4">
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>نام کاربری</InputLabel>
									<InputText
										type="name"
										readOnly={true}
										value={username}
									/>
								</InputWrapper>
							</Col>
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>ایمیل</InputLabel>
									<InputText
										type="name"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
									/>
								</InputWrapper>
							</Col>
						</Row>

						<Row className="pe-4">
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>رمز عبور</InputLabel>
									<InputText
										type="password"
										onChange={(e) => {
											setPassword(e.target.value);
										}}
									/>
								</InputWrapper>
								{error?.Password &&
									error.Password.map((e) => (
										<ErorrLabel>{e}</ErorrLabel>
									))}
							</Col>
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>تکرار رمز عبور</InputLabel>
									<InputText
										type="password"
										onChange={(e) => {
											setRepassword(e.target.value);
										}}
									/>
									{error?.password_confirmation &&
										error.password_confirmation.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</InputWrapper>
							</Col>
						</Row>

						<Row className="pe-4">
							<Col sm={6}>
								<InputWrapper>
									<InputLabel> شماره تماس</InputLabel>
									<InputText readOnly value={phone_number} />
									{error?.github &&
										error.github.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</InputWrapper>
							</Col>
							<Col sm={6}>
								<InputWrapper>
									<InputLabel
										style={{ color: !major ? "red" : "" }}
									>
										رشته تحصیلی
									</InputLabel>
									<InputText
										onChange={(e) => {
											setMajor(e.target.value);
										}}
										value={major}
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
									<InputLabel>گیتهاب</InputLabel>
									<InputText
										onChange={(e) => {
											setGithub(e.target.value);
										}}
										value={github}
									/>
									{error?.linkedin &&
										error.linkedin.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</InputWrapper>
							</Col>
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>
										<div>رزومه</div>
										{preResume && (
											<a
												href={`https://api.aicup.iut.ir${preResume}`}
												style={{
													color: "#FF00A4",
													textDecoration: "none",
													fontSize: "0.75em",
												}}
											>
												رزومه قبلی
											</a>
										)}
									</InputLabel>

									<UploadBoxButton
										type={"file"}
										id={"file"}
										onChange={(e) => {
											setResume(e.target.files[0]);
										}}
									/>
									{error?.resume &&
										error.resume.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</InputWrapper>
							</Col>
						</Row>
						<Row className="pe-4">
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>لینکدین</InputLabel>
									<InputText
										onChange={(e) => {
											setLinkedin(e.target.value);
										}}
										value={linkedin}
									/>
									{error?.linkedin &&
										error.linkedin.map((e) => (
											<ErorrLabel>{e}</ErorrLabel>
										))}
								</InputWrapper>
							</Col>
							<Col sm={6}>
								<InputWrapper>
									<InputLabel>
										<p></p>
									</InputLabel>
									<InputLabel>
										{" "}
										<br />
									</InputLabel>

									<SubmitButton onClick={registerHandler}>
										تغییر پروفایل
									</SubmitButton>
								</InputWrapper>
							</Col>
						</Row>
						<Row>
							<Col className="text-center pt-5">
								<p style={{ color: "white" }}>
									تکمیل پروفایل به منزله ی پذیرش{" "}
									<a
										style={{
											color: "#0293F6",
											cursor: "pointer",
										}}
										onClick={showRules}
									>
										{" "}
										قوانین{" "}
									</a>
									خواهد بود
								</p>
							</Col>
						</Row>
					</>
				)}
			</HasTeamContainter>
		</>
	);
};

export default EditProfile;
