import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Stack} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import RatingStar from '../Utilities/RatingStar';
import {CgGym} from 'react-icons/cg';
import {FaAppleAlt, FaMapMarkerAlt} from 'react-icons/fa';
import {AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai';
import ImageComponent from '../Image/Image';

const TrainerCard = (props) => {
    const [expand, setExpand] = useState(false);

    const handleExpand = (event) => {
        event.preventDefault();
        setExpand(!expand);
    };

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
                                <div>
                                    <RatingStar/>
                                </div>
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

                <Col className="m-2 align-items-center">
                    <Stack>
                        <Row className="m-2 align-items-center">
                            <Col className="col-auto">
                                <FaMapMarkerAlt className="h3" style={{color: 'green'}}/>
                            </Col>
                            <Col className="col-auto">Gym Address</Col>
                        </Row>
                        <div className="col-auto">County: {props.user.county}, City: {props.user.city},
                            Street: {props.user.street}</div>
                    </Stack>
                </Col>

                <Col className="col-auto mb-5">
                    <Button
                        onClick={handleExpand}
                        style={{backgroundColor: 'transparent', border: 'none', boxShadow: 'none'}}
                    >
                        {expand === false ? <AiFillCaretDown style={{color: 'green'}}/> :
                            <AiFillCaretUp style={{color: 'green'}}/>}
                    </Button>
                </Col>
            </Row>

            {expand === true ? (
                <div className="p-3">
                    {props.user.personalDescription}
                </div>
            ) : (
                null
            )}
        </Container>
    );
};

export default TrainerCard;