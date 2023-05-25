import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Stack} from 'react-bootstrap';
import {CgGym} from 'react-icons/cg';
import {FaAppleAlt} from 'react-icons/fa';
import ImageComponent from '../Image/Image';

const TraineeCard = (props) => {
    return (
        <Container fluid="True" style={{backgroundColor: '#212121', color: '#FAFAFA'}}>
            <Row className="align-items-center">
                <Col>
                    <Row className="align-items-center">
                        <Col className="m-2">
                            <ImageComponent width={'100px'} height={'100px'} id={props.id} path={props.path}/>
                        </Col>
                        <Col className="m-2">
                            <Stack>
                                <div className="h4">{props.user.firstName} {props.user.lastName}</div>
                            </Stack>
                        </Col>
                    </Row>
                </Col>

                <Col className="m-2">
                    <Stack fluid>
                        <Row className="m-2 align-items-center">
                            <Col>
                                <CgGym className="h2" style={{color: 'green'}}/>
                            </Col>
                            <Col>Workouts</Col>
                            <Col className="h5" style={{color: 'green'}}>
                                {props.user.workoutNo}
                            </Col>
                        </Row>

                        <Row className="m-2">
                            <Col>
                                <FaAppleAlt className="h3" style={{color: 'green'}}/>
                            </Col>
                            <Col>Nutrition Plans</Col>
                            <Col className="h5" style={{color: 'green'}}>
                                {props.user.nutritionNo}
                            </Col>
                        </Row>
                    </Stack>
                </Col>
            </Row>
        </Container>
    );
};

export default TraineeCard;