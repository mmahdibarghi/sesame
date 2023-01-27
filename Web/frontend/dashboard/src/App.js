import { useEffect, useState } from "react";
import Main from "./components/main";
import Auth from "./helper/auth";
import Login from "./components/Auth/Login/Login";
import PlateBoard from "./components/pages/home/score-board/sends";
import Register from "./components/Auth/Register/Register";
import Loading from "./components/Loading/LoadingContainer";
import ResetPassword from "./components/Auth/ResetPassword/ResetPassword";
import ChangePassword from "./components/Auth/ChangePassword/ChangePassword";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		setLoading(true);
		Auth.checkLogin()
			.then((token) => {
				setIsLoggedIn(token ? token : false);
				setLoading(false);
			})
			.catch((e) => console.log(e));
	}, []);
	return (
		<Router>
			<Switch>

				<Route path="/register">
					{loading ? (
						<Loading />
					) : !isLoggedIn ? (
						<Register />
					) : (
						<Redirect to="/" />
					)}
				</Route>

				<Route path="/reset-password" exact>
					{loading ? (
						<Loading />
					) : !isLoggedIn ? (
						<ResetPassword />
					) : (
						<Redirect to="/" />
					)}
				</Route>

				<Route
					path="/reset-password/:uid/:token"
					component={ChangePassword}
				/>
				<Route path="/login">
					{loading ? (
						<Loading />
					) : !isLoggedIn ? (
						<Login />
					) : (
						<Redirect to="/" />
					)}
				</Route>

				<Route path="/board" exact>
					{loading ? (
						<Loading />
					) : !isLoggedIn ? (
						<PlateBoard />
					) : (
						<Redirect to="/" />
					)}
				</Route>


				<Route path="/" >
					{loading ? (
						<Loading />
					) : isLoggedIn ? (
						<Main />
					) : (
						<Redirect to="/login" />
					)}
				</Route>

				

			</Switch>
		</Router>
	);
}

export default App;
