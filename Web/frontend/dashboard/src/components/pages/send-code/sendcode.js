import { Col, Container, Row } from "react-bootstrap";
import Sends from "./sends/sends";
import UploadBox from "./upload-box/uploadbox";

function SendCode() {
	return (
		<Container fluid>
			{/* <Row>
				<Col>
					<UploadBox />
				</Col>
			</Row> */}
			
			<Sends />
		</Container>
	);
}

export default SendCode;
