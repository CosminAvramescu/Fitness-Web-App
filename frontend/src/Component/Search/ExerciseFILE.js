import React, { Component } from 'react';
import ExercisesWK from "./ExercisesWK";
import { Row, Col, Stack } from 'react-bootstrap';
import Container from "react-bootstrap/Container";
import testImage from "../../Assets/durata-antrenament-fitness.jpg";
import testImage1 from "../../Assets/icon.jpg";
import RatingStar from "../Utilities/RatingStar";
import { FaCalendar, FaDollarSign } from 'react-icons/fa';


const formattedText = (
    <div>
        <p>
            Step 1: Dynamic Warm-up
            <br />
            Start with a light jog or brisk walk for about 5 minutes to increase your heart rate and warm up your muscles.
            <br />
            Perform dynamic stretches such as arm circles, leg swings, and torso twists to loosen up your joints and improve flexibility.
            <br />
            Incorporate exercises like high knees, butt kicks, and jumping jacks to further activate your muscles and increase blood flow.
            <br />
            Gradually increase the intensity and range of motion as you progress through the warm-up routine.
        </p>

        <p>
            Step 2: Abdominal Activation
            <br />
            Lie on your back with your knees bent and feet flat on the ground.
            <br />
            Engage your core by drawing your navel in towards your spine.
            <br />
            Perform exercises such as crunches, reverse crunches, or bicycle crunches to specifically target the abdominal muscles.
            <br />
            Focus on maintaining proper form and breathing throughout each repetition.
            <br />
            Start with a set of 10-15 repetitions and gradually increase as you build strength in your core.
        </p>

        <p>
            Step 3: Plank Power
            <br />
            To perform plank exercises for core strength, follow these steps:
            <br />
            Start in a push-up position with your hands directly beneath your shoulders and your body in a straight line from head to toe.
            <br />
            Lower down onto your forearms, keeping your elbows directly beneath your shoulders.
            <br />
            Engage your core muscles by drawing your belly button towards your spine.
            <br />
            Hold the plank position for as long as you can maintain proper form, aiming for at least 30 seconds to start.
            <br />
            To challenge yourself, try variations such as side planks, plank jacks, or mountain climbers while maintaining a strong core.
        </p>
    </div>
);

class ExerciseFILE extends Component {
    state = {
        step: 1,
        role: 0
    }

    renderExercises() {
        return (
            [...Array(10)].map((_, index) => {
                return (
                    <ExercisesWK
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
                        {this.state.role === 0 ?
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
                        </Col> :
                            <Col className={"p-6"}>
                            <Row>
                                <Col><button className="btn btn-primary" style={{backgroundColor: '#4CAF50', color: 'white', width: "45%"}}>Statistics</button></Col>
                                <Col><button className="btn btn-primary" style={{backgroundColor: '#4CAF50', color: 'white', width: "45%"}}>Edit</button></Col>
                            </Row>
                            </Col>}
                        </Row>


                {this.renderExercises()}
            </div>
        );
    }
}

export default ExerciseFILE;
