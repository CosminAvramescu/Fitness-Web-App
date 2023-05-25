import React, {Component, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Stack} from "react-bootstrap";
import RatingStar from "../Utilities/RatingStar";
import {FaMoneyBillWaveAlt} from "react-icons/fa";
import {AiFillCaretDown, AiFillCaretUp, AiFillCalendar} from "react-icons/ai";
import {uList} from "./Search";

//TODO:Delete Later
import testImage from "../../Assets/first_chanV4.png";
import Button from "react-bootstrap/Button";
import ImageComponent from "../Image/Image";
import axios from "axios";


const WNCard = (props) => {
    const [expand, setExpand] = useState(false);

    const handleExpand = (event) => {
        event.preventDefault();
        setExpand(!expand)
    }

    return (
        <Container fluid="True" style={{backgroundColor: "#212121", color: "#FAFAFA"}}>
            <Row className="align-items-center">
                <Col>
                    <Row className="align-items-center">
                        <Col className="m-2">
                            <ImageComponent width={'100px'} height={'100px'} id={props.workout.id}
                                            path={props.path}/>
                        </Col>
                        <Col className="m-2">
                            <Stack>
                                <div className="h4">{props.workout.title}</div>
                                <div><RatingStar/></div>
                            </Stack>
                        </Col>
                    </Row>
                </Col>

                <Col className="m-2">
                    <Stack fluid>
                        <Row className="m-2 align-items-center">
                            <Col><AiFillCalendar className='h2' style={{color: 'green'}}/></Col>
                            <Col>Weeks</Col>
                            <Col className="h5" style={{color: 'green'}}>{props.workout.timeToComplete}</Col>
                        </Row>

                        <Row className="m-2">
                            <Col><FaMoneyBillWaveAlt className='h3' style={{color: 'green'}}/></Col>
                            <Col>Price</Col>
                            <Col className="h5" style={{color: 'green'}}>{props.workout.price}</Col>
                        </Row>
                    </Stack>
                </Col>

                <Col>
                    {
                        props.role === 0 ?
                            <Stack className="align-items-center">
                                <Row className="m-2">
                                    <Col className='col-auto'>
                                        <ImageComponent width={'50px'} height={'50px'} id={props.id + 1}
                                                        path={'user/download'}/>
                                    </Col>
                                    <Col className='col-auto h2'>TRAINER</Col>
                                </Row>
                                <div className='h6'
                                     style={{color: 'green'}}>{uList[props.id].firstName} {uList[props.id].lastName}</div>
                            </Stack>
                            :
                            <Stack className="align-items-center" gap={2}>
                                <Button style={{
                                    backgroundColor: "transparent",
                                    color: "white",
                                    border: "none",
                                    boxShadow: "none"}}>
                                    View
                                </Button>
                                <Button style={{
                                    backgroundColor: "transparent",
                                    color: "white",
                                    border: "none",
                                    boxShadow: "none"}}>
                                    Edit
                                </Button>
                            </Stack>
                    }
                </Col>

                <Col className='col-auto mb-5'>
                    <Button onClick={handleExpand} style={{
                        backgroundColor: 'transparent',
                        border: 'none',
                        boxShadow: 'none'
                    }}>
                        {expand === false ? <AiFillCaretDown style={{color: 'green'}}/> :
                            <AiFillCaretUp style={{color: 'green'}}/>}
                    </Button>
                </Col>
            </Row>

            {expand === true ?
                <div className="p-3">{props.workout.description}</div> :
                null}
        </Container>
    )

};

export default WNCard;