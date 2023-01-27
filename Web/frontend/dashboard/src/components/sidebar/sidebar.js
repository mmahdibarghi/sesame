import {
	SideBarContainer,
	Logo,
	NavItem,
	NavList,
	NavItemIcon,
	NavItemText,
	NavUserIcon,
} from "./sidebar-styles";
import LogoImage from "../../assets/logo.png";
import UserImage from "../../assets/user.png";
import LogoutImage from "../../assets/logout.png";
import HomeImage from "../../assets/home.png";
import DocsImage from "../../assets/verify.png";


import CodeImage from "../../assets/group.png";
import newGroup from "../../assets/add-group.png";
import ChangeLogo from "../../assets/change.png";

import companyIcon from "../../assets/enterprise.png";
import activeService from "../../assets/technical-support (1).png";
import acceptUser from "../../assets/add-user (1).png";
import { useLocation } from "react-router";
import serverIcon from "../../assets/servers.png";
import { Link } from "react-router-dom";
import auth from "../../helper/auth";
import { decode } from "jsonwebtoken";
import Auth from "../../helper/auth";
function SideBar(props) {
	const location = useLocation();
	const checkRoute = (route) => {
		return location.pathname === route;
	};
	return (
		<SideBarContainer open={props.navOpen}>
			<Logo className="logo-details">
				<a href="https://hpc.iut.ac.ir/">
					<img src={LogoImage} style={{ width: "100%"}} />
				</a>
			</Logo>
			<NavList>
				<NavItem selected={checkRoute("/edit-profile")}>
					<Link to="/edit-profile">
						<NavUserIcon src={UserImage} />
						<NavItemText>
							{" "}
							سلام
							
							{` ${JSON.parse(localStorage.getItem("loggedinUser")).first_name}`}
						</NavItemText>
						<NavItemIcon src={ChangeLogo} />
					</Link>
					{console.log("code",JSON.parse(localStorage.getItem("loggedinUser")))}
					
				</NavItem>

				<Link to="/">
					<NavItem
						selected={checkRoute("/")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={HomeImage} />
						<NavItemText>داشبورد</NavItemText>
					</NavItem>
				</Link>
				 <Link to="/">
					<NavItem
						selected={checkRoute("/document")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={acceptUser} />
						<NavItemText>تایید کاربران جدید</NavItemText>
					</NavItem>
				</Link>

				<Link to="/new-service">
					<NavItem
						selected={checkRoute("/new-service")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={DocsImage} />
						<NavItemText>درخواست های سرویس جدید</NavItemText>
					</NavItem>
				</Link>

				<Link to="/">
					<NavItem
						selected={checkRoute("/new-group")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={newGroup} />
						<NavItemText>گروه های جدید</NavItemText>
					</NavItem>
				</Link>

				<Link to="/send-code">
					<NavItem
						selected={checkRoute("/send-code")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={CodeImage} />
						<NavItemText>کاربران سیستم</NavItemText>
					</NavItem>
				</Link>
				
				<Link to="/">
					<NavItem
						selected={checkRoute("/active-service")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={activeService} />
						<NavItemText>سرویس های فعال</NavItemText>
					</NavItem>
				</Link>


				<Link to="/">
					<NavItem
						selected={checkRoute("/companies")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={companyIcon} />
						<NavItemText>گروه ها و شرکت ها</NavItemText>
					</NavItem>
				</Link>


				<Link to="/">
					<NavItem
						selected={checkRoute("/center-info")}
						onClick={props.handleNavClose}
					>
						<NavItemIcon src={serverIcon} />
						<NavItemText>کنترل وضعیت مرکز</NavItemText>
					</NavItem>
				</Link>
				<Link to="/register">
					<NavItem
						
						onClick={() => {
							localStorage.setItem("access", ""); //there is no test in "" 
							localStorage.setItem("refresh", "");//there is no test in "" 
							localStorage.setItem("loggedinUser", "");
							window.location.reload();
						}}
					>
						<NavItemIcon src={LogoutImage} />
						<NavItemText>خروج از سیستم</NavItemText>
					</NavItem>
				</Link>
				
			</NavList>
		</SideBarContainer>
	);
}

export default SideBar;
