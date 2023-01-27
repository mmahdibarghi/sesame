import { Col, Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import HasTeam from "./has-team/has-team";
import Loading from "../../Loading/LoadingContainer";
import NoTeam from "./no-team/no-team";
import axios from "../../../helper/axiosInstance";
import auth from "../../../helper/auth";
import Swal from "sweetalert2";
function Team() {
	const [hasTeam, setHasTeam] = useState(false);
	const [loading, setLoading] = useState(true);
	const [team, setTeam] = useState({
		joining_code: "",
		losses: 0,
		matches: 0,
		name: "",
		score: "",
		wins: 0,
		user_set: [],
	});
	useEffect(async () => {
		setLoading(true);
		try {
			const { data } = await axios.get("/teams/get-team/");
			if (data) {
				setHasTeam(true);
				setTeam({ ...data });
				setLoading(false);
			}
		} catch (e) {
			setHasTeam(false);
			setLoading(false);
		}
	}, []);

	return (
		<Container fluid>
			{loading ? (
				<Loading />
			) : hasTeam ? (
				<HasTeam team={team} />
			) : (
				<NoTeam />
			)}
		</Container>
	);
}

export default Team;
