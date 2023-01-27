import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { darkred, lightblue, yellow } from "../../colors";
import Timing from "./timing/timing";
import Events from "./events/events";
import AccessCard from "./access-cards/access-cards";
import ScoreBoard from "./score-board/scoreboard";
import DocsImage from "../../../assets/docs.png";
import TicketImage from "../../../assets/ticket.png";
import CodeImage from "../../../assets/code.png";
import LogoImage from "../../../assets/logo.png";

import { HomeContainerStyles } from "./home-styles";

function Home() {
	return (
		<Container fluid style={HomeContainerStyles}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* <img src={LogoImage} width={"35%"} />
				<div
					style={{
						color: "white",
						fontFamily: "Dana",
						fontSize: "3em",
					}}
				>
					خوش آمدید
				</div> */}
			</div>
		</Container>
	);
}

export default Home;
