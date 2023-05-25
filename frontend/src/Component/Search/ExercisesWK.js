import React, { Component } from 'react';
import { Container, Row, Col, Stack } from 'react-bootstrap';

//TODO: Delete Later
import testImage from "../../Assets/durata-antrenament-fitness.jpg";

class ExercisesWK extends Component {
    state = {
        expand: false
    }

    handleExpand = (event) => {
        event.preventDefault();
        const expandState = this.state.expand;
        this.setState({
            expand: !expandState
        });
    }

    render() {
        const { name, imageSrc, text } = this.props;
        const { expand } = this.state;

        return (
            <Container fluid className="m-5" style={{ backgroundColor: "#212121", color: "#FAFAFA" }}>
                <Row className="align-items-center">
                    <Col>
                        <Row className="align-items-center">
                            <Col className="m-2">
                                <img
                                    src={imageSrc}
                                    alt="Exercise"
                                    style={{ width: '500px', height: '500px' }}
                                />
                            </Col>
                        </Row>
                    </Col>

                    <Col className="m-2">
                        <Stack fluid>
                            <Row className="m-2 align-items-center">
                                <Col>{name} - Name</Col>
                            </Row>
                            <Row className="m-2 align-items-center">
                                <Col>{text}</Col>
                            </Row>
                        </Stack>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default ExercisesWK;
