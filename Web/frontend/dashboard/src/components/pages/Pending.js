
import Container from "react-bootstrap/Container";
import {  PageContainer,HomeContainerStyles, SubmitBtn } from "./roles-styles";
import { Link } from "react-router-dom";

function Roles() {
	
	return (
		<PageContainer >
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					height: "100%",
				}}
			>
				{/* <img src={LogoImage} width={"35%"} /> */}
				<div
					style={{
						color: "white",
						fontFamily: "Dana",
						fontSize: "2em",
					}}
				>
					درخواست شما با موفقیت ثبت شده است

				</div>
				<div
					style={{
						color: "white",
						fontFamily: "Dana",
						fontSize: "2em",
					}}
				>
					
					لطفا منتظر تایید ادمین سامانه بمانید
				</div>
                <Link to="mailto: barghi@ec.iut.ac.ir">
                    <SubmitBtn 
                    >
							
                            ارتباط با ادمین سامانه
                        
                    </SubmitBtn>
				</Link>
                
				<Link to="/">
                    <SubmitBtn  onClick={() => {
							localStorage.setItem("access", ""); //there is no test in "" 
							localStorage.setItem("refresh", "");//there is no test in "" 
							localStorage.setItem("loggedinUser", "");
							window.location.reload();
						}}
                    >
							
                           خروج
                        
                    </SubmitBtn>
				</Link>

                
			</div>
		</PageContainer>
	);
}

export default Roles;
