import { Row, Col } from "react-bootstrap";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import {
  TimingContainer,
  ScrollButton,
  ScrollButtons,
  TimesStyle,
  TimingText,
  ClocksStyle,
} from "./timing-styles";
function Timing() {
  return (
    <TimingContainer>
      <TimingText>زمانبندی</TimingText>
      <ScrollButtons>
        <ScrollButton>
          <ChevronUp />
        </ScrollButton>
        <ScrollButton>
          <ChevronDown />
        </ScrollButton>
      </ScrollButtons>
      <br />
      <br />

      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          8am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          8:30am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          9am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          9:30am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          10am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          10:30am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          11am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          11:30am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          12am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          12:30am
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
      <Row style={TimesStyle}>
        <Col xs={3} style={ClocksStyle}>
          1pm
        </Col>
        <Col xs={9}>
          <hr />
        </Col>
      </Row>
    </TimingContainer>
  );
}

export default Timing;
