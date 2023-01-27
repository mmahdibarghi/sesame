import { PageContainer } from "./pages-styles";
import Home from "./home/home";
import TmpHome from "./home/TempHome";
import { useEffect } from "react";
import ScoreBoardPage from "./score-board/scoreboard-page";
import SendCode from "./send-code/sendcode";
import Documents from "./documents/documents";
import Team from "./team/team";
import NewService from "./new-service/new-service"
import { Switch, Route, Link, Redirect, useLocation } from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile";
import auth from "../../helper/auth";
import Swal from "sweetalert2";
import FriendlyMatch from "./friendly-match/friendly-match";
const config = (title, message, type) => {
	return {
		title,
		customClass: {
			title: "text-white",
			htmlContainer: "text-white",
		},
		background: "#003459",
		text: message,
		confirmButtonColor: "#D30C7C",
		confirmButtonText: "تایید",
		color: "white",
		imageUrl:
			type == "error"
				? require("../../assets/faildLogo.png").default
				: require("../../assets/logo.png").default,
		imageHeight: 150,
	};
};
function Pages() {
	const location = useLocation();

	// useEffect(() => {
		
	// 	if (
	// 		location.pathname !== "/edit-profile" &&
	// 		!auth.checkHasConfirmed()
	// 	) {
			
	// 		Swal.fire(
	// 			config(
	// 				"پروفایل ناقص",
	// 				"ابتدا پروفایل خود را کامل کنید",
	// 				"error"
	// 			)
	// 		).then(() => {
	// 			window.location.href = "/edit-profile";
	// 		});
	// 	}
	// }, []);
	return (
		<PageContainer navOpen>
			<Switch>
				{/* <Route path="/" exact component={Home} /> */}
				{/* <Route path="/score-board" exact component={ScoreBoardPage} /> */}

				<Route path="/" exact component={TmpHome} />
				<Route path="/edit-profile" exact component={EditProfile} />
				<Route path="/document" exact component={Documents} />
				<Route path="/new-service" exact component={NewService} />
				<Route path="/team" exact component={Team} />
				<Route path="/send-code" exact component={SendCode} />
				<Route path="/friendly-match" exact component={FriendlyMatch} />
			</Switch>
		</PageContainer>
	);
}

export default Pages;
