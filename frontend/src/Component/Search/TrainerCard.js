import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Stack} from "react-bootstrap";
import RatingStar from "../Utilities/RatingStar";
import {CgGym} from "react-icons/cg";
import {FaAppleAlt, FaMapMarkerAlt} from "react-icons/fa";

//TODO:Delete Later
import testImage from "../../Assets/first_chanV4.png";

class TrainerCard extends Component {
    render() {
        return (
            <Container fluid="True" className="m-5" style={{backgroundColor: "#212121", color: "#FAFAFA"}}>
                <Row>

                    <Col>
                        <Row className="align-items-center">
                            <Col className="m-2">
                                <img
                                    src={testImage}
                                    alt="Trainer"
                                    className="rounded-circle"
                                    style={{width: '100px', height: '100px'}}
                                />
                            </Col>
                            <Col className="m-2">
                                <Stack>
                                    <div className="h4">Insert A very long name</div>
                                    <div><RatingStar/></div>
                                </Stack>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="m-2">
                        <Stack fluid>
                            <Row className="m-2 align-items-center">
                                <Col><CgGym className='h2' style={{color: 'green'}}/></Col>
                                <Col>Workouts</Col>
                                <Col className="h5" style={{color: 'green'}}>35</Col>
                            </Row>

                            <Row className="m-2">
                                <Col><FaAppleAlt className='h3' style={{color: 'green'}}/></Col>
                                <Col>Nutrition Plans</Col>
                                <Col className="h5" style={{color: 'green'}}>35</Col>
                            </Row>
                        </Stack>
                    </Col>

                    <Col className="m-2 align-items-center">
                        <Stack>
                            <Row className="m-2 align-items-center">
                                <Col className='col-auto'><FaMapMarkerAlt className='h3'
                                                                          style={{color: 'green'}}/></Col>
                                <Col className='col-auto'>Gym Address</Col>
                            </Row>
                            <div className='col-auto'> Bucharest, Sector 6, Splaiul Independentei, nr 290
                            </div>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default TrainerCard;