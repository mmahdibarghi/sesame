import { PageContainer } from "./account-changer-styles";
import Home from "./home/home";
import TmpHome from "./home/TempHome";
import { useEffect } from "react";
import ScoreBoardPage from "./score-board/scoreboard-page";
import SendCode from "./send-code/sendcode";
import Documents from "./documents/documents";
import Team from "./team/team";
import { Switch, Route, Link, Redirect, useLocation } from "react-router-dom";
import EditProfile from "./EditProfile/EditProfile";
import auth from "../../helper/auth";
import Swal from "sweetalert2";
import FriendlyMatch from "./friendly-match/friendly-match";
import Roles from "./roles";
import Studentregister from "./Student-register"
import ProfessorRegister from "./Professor-register"

function AccountChanger() {
	const location = useLocation();

	return (
		<PageContainer navOpen>
			<Switch>
				{/* <Route path="/" exact component={Home} /> */}
				{/* <Route path="/score-board" exact component={ScoreBoardPage} /> */}

				<Route path="/" exact component={Roles} />
				<Route path="/student-account" exact component={Studentregister} />
				<Route path="/professor-account" exact component={ProfessorRegister} />
				<Route path="/team" exact component={Team} />
				<Route path="/send-code" exact component={SendCode} />
				<Route path="/friendly-match" exact component={FriendlyMatch} />
			</Switch>
		</PageContainer>
	);
}

export default AccountChanger;
