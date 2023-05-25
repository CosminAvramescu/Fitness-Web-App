import React, { Component } from 'react';
import ExercisesWK from "./ExercisesWK";
import { Row, Col, Stack } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import testImage from "../../Assets/durata-antrenament-fitness.jpg";
import testImage1 from "../../Assets/icon.jpg";
import RatingStar from "../Utilities/RatingStar";
import { FaCalendar, FaDollarSign } from 'react-icons/fa';
import ComponentAdd from "./ComponentAdd";

class AddWKfile extends Component {
    state = {
        step: 1
    }

    handleStepChange = (selectedRole) => {
        this.setState({
            step: selectedRole
        });
    }

    renderComponent() {
        return (
            [...Array(10)].map((_, index) => {
                return (
                    <ComponentAdd
                        key={index}
                        name={`Exercise ${index + 1}`}
                        imageSrc={testImage}
                        text={formattedText}
                    />
                );
            })
        );
    }

    render() {
        return (
            <div className="p-5">
                <Row className="align-items-center, text-white">
                    <Col>
                        <Stack>
                            <div className="h2">Workout Name</div>
                            <Row>
                                <Col className="h6" style={{color: 'green'}}> Rating</Col>
                                <Col> <RatingStar className='h4'/></Col>
                            </Row>
                            <Row className="m-2">
                                <Col> <FaCalendar className='h4'/></Col>
                                <Col> Weeks</Col>
                                <Col className="h5" style={{color: 'green'}}>12</Col>
                            </Row>
                            <Row className="m-2">
                                <Col> <FaDollarSign className='h4'/></Col>
                                <Col> Price</Col>
                                <Col className="h5" style={{color: 'green'}}>280</Col>
                            </Row>
                        </Stack>
                    </Col>

                    <Col>
                        <Stack>
                            <div className="h4">Owned by</div>
                            <Row className="align-items-center">
                                <Col>
                                    <Row className="align-items-center">
                                        <Col className="m-2">
                                            <img
                                                src={testImage1}
                                                alt="Exercise"
                                                className="rounded-circle"
                                                style={{ width: '90px', height: '90px' }}
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col className="m-2">
                                    <Stack fluid>
                                        <Row className="m-2 align-items-center">
                                            <Col>Trainer Name</Col>
                                        </Row>
                                        <div style={{ color: 'green'}}>Rating</div>
                                        <RatingStar className='h6'/>
                                    </Stack>
                                </Col>
                            </Row>
                            <button className="btn btn-primary" style={{backgroundColor: '#4CAF50', color: 'white'}}>BUY</button>
                        </Stack>
                    </Col>
                </Row>


                {this.renderExercises()}
            </div>
        );
    }
}

export default AddWKfile;
