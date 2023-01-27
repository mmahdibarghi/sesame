
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
						fontSize: "3em",
					}}
				>
					لطفا نوع اکانت خود را انتخاب کنید
				</div>
                <Link to="/">
                    <SubmitBtn 
                    >
							
                            اکانت عادی
                        
                    </SubmitBtn>
				</Link>
                <Link to="/student-account">
                    <SubmitBtn 
                    >
							
                            اکانت دانشجویی
                        
                    </SubmitBtn>
				</Link>
                <Link to="/professor-account">
                    <SubmitBtn 
                    >
							
                            اکانت ویژه هیات علمی
                        
                    </SubmitBtn>
				</Link>
                <Link to="http://www.google.com">
                    <SubmitBtn 
                    >
							
                            اکانت ویژه موسسات، دانشگاه ها و شرکت ها
                        
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
