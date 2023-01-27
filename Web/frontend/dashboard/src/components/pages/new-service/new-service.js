import { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";

import Plan from "./plan/plan";
import Customized from "./customized/customized";

import { CustomizedTab, CustomizedTabs, NewServiceContainer } from "./new-service-styles";

const NewService = () => {
    const [key, setKey] = useState('plan');
    console.log('NewService');
    return (
        <Container fluid>
            <NewServiceContainer>
                <Row>
                    <Col >
                        <CustomizedTabs
                            activeKey={key}
                            onSelect={key=>setKey(key)}
                        >
                            <Tab eventKey="plan" title="پلن های سرور">
                                <Plan />
                            </Tab>
                            <Tab eventKey="customized" title="سرورهای سفارشی">
                                <Customized />
                            </Tab>
                        </CustomizedTabs>
                    </Col>
                </Row>
            </NewServiceContainer>
        </Container>
    )
}

export default NewService;