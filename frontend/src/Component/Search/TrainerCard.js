import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Stack} from "react-bootstrap";
import RatingStar from "../Utilities/RatingStar";

//TODO:Delete Later
import testImage from "../../Assets/first_chanV4.png";

class TrainerCard extends Component {
    render () {
        return (
            <Container fluid="True" className="m-5" style={{ backgroundColor: "#212121", color: "#FAFAFA"}}>
                <Row>
                    <Col>
                        <Row>
                            <Col className="m-2">
                                <img
                                    src={testImage}
                                    alt="Trainer"
                                    className="rounded-circle"
                                    style={{ width: '100px', height: '100px' }}
                                />
                            </Col>
                            <Col className="m-2">
                                <Stack gap={2}>
                                    <div className="h4">Insert A very long name</div>
                                    <div><RatingStar/></div>
                                </Stack>
                            </Col>
                        </Row>
                    </Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        )
    }
};

export default TrainerCard;