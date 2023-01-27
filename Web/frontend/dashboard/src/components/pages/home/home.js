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

import { HomeContainerStyles } from "./home-styles";

function Home() {
	return (
		<Container fluid style={HomeContainerStyles}>
			<Row>
				<Col lg={8}>
					<Row>
						<Col className="d-flex justify-content-center">
							<AccessCard image={CodeImage} color={darkred}>
								ارسال کد
							</AccessCard>
						</Col>
						<Col className="d-flex justify-content-center">
							<AccessCard image={TicketImage} color={yellow}>
								ارسال تیکت
							</AccessCard>
						</Col>
						<Col className="d-flex justify-content-center">
							<AccessCard image={DocsImage} color={lightblue}>
								راهنمای بازی
							</AccessCard>
						</Col>
					</Row>
					<Row>
						<ScoreBoard />
					</Row>
				</Col>
				<Col lg={4}>
					<Events />
					<Timing />
				</Col>
			</Row>
		</Container>
	);
}

export default Home;
