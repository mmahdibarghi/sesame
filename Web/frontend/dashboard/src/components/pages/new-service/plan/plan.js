import { useEffect } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Card from "./card/card";

const plans = Array(24).fill({ cpu: 'core i5', ram: '6g', hdd: '1T', gpu: 'rtx 3050', price: 20});
const Plan = () => {
    return <Row style={{ paddingTop: '40px'}}>
        {plans.map((plan, index) => <Col xs={12} md={6} lg={4} xl={3}>
            <Card key={index} {...plan} />
        </Col>)}
    </Row>
}

export default Plan;