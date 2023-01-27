import { useState, useRef,useEffect  } from "react";
import axios from 'axios';
import Switch from '@material-ui/core/Switch';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { darkblue, darkred, lightred, midblue, white } from "../../colors";
import { Col, Container, Row } from "react-bootstrap";
import Swal from "sweetalert2";
import auth from "../../../helper/auth";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 
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
	// const recaptchaRef = useRef();

	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	// const [captcha, setCaptcha] = useState("");
	const [loading, setLoading] = useState(false);
	const history = useHistory();
	const [manual, setManual] = useState(false);
	const [openDoor, setDoorStatus] = useState(false);
  
	useEffect(() => {
		const fetchData = async () => {
		  try {
			const manualResponse = await axios.get('http://dweet.io/get/latest/dweet/for/manualSesame');
			if (manualResponse.data['with'][0]['content']['manual'] === 'fo32FNLV64KL913VRN16FELn'){
				setManual(true);
				
			}
			else {
				setManual(false);
				
			}


			const gateDoorResponse = await axios.get('http://dweet.io/get/latest/dweet/for/gateDoorChecker');
			if (manualResponse.data['with'][0]['content']['gate'] === 'oTBBTSemsadrvmervvGate140220222023BTBBTBn'){
				setDoorStatus(true);
				
			}
			else {
				setDoorStatus(false);
				
			}


		  } catch (error) {
			console.error(error);
		  }
		};
		fetchData();
	  }, []);

	  const handleClick = async () => {
		try {
		  const response = await axios.get('http://dweet.io/dweet/for/manualSesame', {
			params: {
			  manual: "fo32FNLV64KL913VRN16FELn"
			}
		  });
		  setManual(true);
		//   console.log(manual)
		  
		// setDoorStatus(!openDoor);
		} catch (error) {
		  console.error(error);
		}
	  };
	
	const automateHandler = async () => {
		if (openDoor === false)
		{
			try {
				const response = await axios.get('http://dweet.io/dweet/for/manualSesame', {
				  params: {
					manual: "noaMEE1234ffSes5VFV6"
				  }
				});
				setManual(false);
			  //   console.log(manual)
				
			  // setDoorStatus(!openDoor);
			  } catch (error) {
				console.error(error);
			  }

		}
		else
		{
			alert("please close the gate")
		}
	};
	const openHandler = async () => {
		axios.get('http://dweet.io/dweet/for/gateDoorChecker', {
			params: {
			  gate: "oTBBTSemsadrvmervvGate140220222023BTBBTBn"
			}
		  })
		  .then(function (response) {
			console.log(response);
			setDoorStatus(true)
		  })
		  .catch(function (error) {
			console.log(error);
		  })
	};
	const closeHandler = async () => {
		axios.get('http://dweet.io/dweet/for/gateDoorChecker', {
			params: {
				gate: "cCVBHSeVDVCD244677saYHYNTTB1235lome1379se"
			}
		  })
		  .then(function (response) {
			console.log(response);
			setDoorStatus(false)
		  })
		  .catch(function (error) {
			console.log(error);
		  })
	};
	return (
		<WholeContainer>
			{console.log("teeeeeeeeest")}
			<Col md={8} xs={11} lg={3}>
				<Logo>
					<img src={LogoImage} style={{ width: "100%" }} />
				</Logo>
				<DocumentsContainer>
					<HeaderText>کنترل ورودی</HeaderText>

					<InputWrapper>
						
						<div>
							{!manual && (
							<SubmitBtn onClick={handleClick} disabled={loading}>
								{loading ? (
									<Loading color={"white"} />
								) : (
									"ورود به کنترل دستی"
								)}
							</SubmitBtn>
							)}	
							{manual && (
								<div>
									<SubmitBtn onClick={openHandler} disabled={loading}>
										{loading ? (
											<Loading color={"white"} />
										) : (
											"باز کردن گیت"
										)}
									</SubmitBtn>
									<SubmitBtn onClick={closeHandler} disabled={loading}>
										{loading ? (
											<Loading color={"white"} />
										) : (
											"بستن گیت"
										)}
									</SubmitBtn>
									<SubmitBtn onClick={automateHandler} disabled={loading}>
										{loading ? (
											<Loading color={"white"} />
										) : (
											"بازگشت به کنترل هوشمند"
										)}
									</SubmitBtn>
								</div>
							)}
						</div>
						<Link
								to="/register"
								style={{
									textDecoration: "none",
									margin: '10px',
									color: "#e71939",
								}}
							>
								ثبت پلاک جدید
						</Link>
						<Link
								to="/board"
								style={{
									textDecoration: "none",
									color: "#e71939",
								}}
							>
								مشاهده پلاک ها ثبت شده
						</Link>
						
					</InputWrapper>
				</DocumentsContainer>
			</Col>
		</WholeContainer>
	);
}

export default Documents;







