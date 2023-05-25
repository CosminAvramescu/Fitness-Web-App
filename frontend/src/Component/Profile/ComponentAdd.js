import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Stack} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import RatingStar from "../Utilities/RatingStar";
import {CgGym} from "react-icons/cg";
import {FaAppleAlt, FaMapMarkerAlt} from "react-icons/fa";
import {AiFillCaretDown, AiFillCaretUp} from "react-icons/ai";
import UploadFile from "../UploadFile/UploadFile";
import Form from "react-bootstrap/Form";

class ComponentAdd extends Component {
    state = {
        expand: false
    }

    handleExpand = (event) => {
        event.preventDefault();
        const expandState = this.state.expand
        this.setState({
            expand: !expandState
        });
    }

    handleFileChange = (event) => {
        console.log( event.target.files[0]);
    }
    render() {
        return (
            <Container className="m-5" style={{backgroundColor: "#212121", color: "#FAFAFA"}}>
                            <Row>
                                <Col>
                                    <Row>
                                        <Col>
                                            <Stack>
                                                <div className="h3 m-2" style={{ textAlign: "left" }}>Component</div>
                                            </Stack>
                                        </Col>
                                        <Col className='col-auto'>
                                            <Button style={{backgroundColor: '#4CAF50', color: 'white'}} onClick={this.handleDelete}>
                                                DELETE
                                            </Button>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <div className="m-2" style={{ textAlign: "left" }}>Upload Images</div>
                                            <Form.Group as={Col} className="mb-4" controlId="formImage">
                                                <Form.Label>Image</Form.Label>
                                                <Form.Control style={{ backgroundColor: "#212121", color: 'white' }}
                                                              type="file"
                                                              name="image"
                                                              onChange={this.handleFileChange}/>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Button style={{backgroundColor: '#4CAF50', color: 'white'}}>
                                            Upload
                                        </Button>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Form.Group as={Col} className="m-2" style={{ textAlign: "left" }}>
                                    <Form.Label>Workout Exercise</Form.Label>
                                    <Form.Control style={{ backgroundColor: "#212121", color: 'white' }} type="text"/>
                                </Form.Group>
                            </Row>
                        </Container>
                    );
                }
};

export default ComponentAdd;