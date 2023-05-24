import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {BsFillPersonFill} from "react-icons/bs";
import {InputGroup} from "react-bootstrap";
import {AiFillPhone, AiOutlineFieldNumber, AiTwotoneMail} from "react-icons/ai";
import {BiSearch, BiWorld} from "react-icons/bi";
import {MdDateRange, MdLocationCity, MdStreetview} from "react-icons/md";
import {GiBodyHeight, GiWeightScale} from "react-icons/gi";
import {CgGym} from "react-icons/cg";
import Container from "react-bootstrap/Container";
import TrainerCard from "../Search/TrainerCard";
import WNCard from "../Search/WNCard";

class ContentMenu extends Component {
    render() {
        switch (this.props.step) {
            case 1:
                return this.renderProfileData();
            case 2:
                return this.renderTrainers();
            case 3:
                return this.renderWorkouts();
            case 4:
                return this.renderNutrition();
        }
    }

    renderTrainers() {
        return (
            <Container className={"p-3"}>
                <InputGroup>
                    <Form.Control className="me-auto" placeholder="Search..."
                                  style={{
                                      color: 'gray',
                                      backgroundColor: 'transparent',
                                      border: 'none',
                                      borderBottom: '3px solid',
                                      borderRadius: '0',
                                      boxShadow: 'none',
                                  }}/>
                    <InputGroup.Text id="search-icon"
                                     style={{
                                         color: 'gray',
                                         backgroundColor: 'transparent',
                                         boxShadow: 'none',
                                         border: 'none',
                                         borderBottom: '3px solid',
                                         borderRadius: '0',
                                     }}>
                        <BiSearch style={{color: 'gray'}}/>
                    </InputGroup.Text>
                </InputGroup>

                {[...Array(5)].map(() => {
                    return (
                        <TrainerCard auto/>
                    );
                })}
            </Container>
        )
    }

    renderWorkouts() {
        return(
            <Container className={"p-3"}>
                <InputGroup>
                    <Form.Control className="me-auto" placeholder="Search..."
                                  style={{
                                      color: 'gray',
                                      backgroundColor: 'transparent',
                                      border: 'none',
                                      borderBottom: '3px solid',
                                      borderRadius: '0',
                                      boxShadow: 'none',
                                  }}/>
                    <InputGroup.Text id="search-icon"
                                     style={{
                                         color: 'gray',
                                         backgroundColor: 'transparent',
                                         boxShadow: 'none',
                                         border: 'none',
                                         borderBottom: '3px solid',
                                         borderRadius: '0',
                                     }}>
                        <BiSearch style={{color: 'gray'}}/>
                    </InputGroup.Text>
                </InputGroup>

                {[...Array(5)].map(() => {
                    return (
                        <WNCard auto />
                    );
                })}
            </Container>
        )
    }

    renderNutrition() {
        return(
            <Container className={"p-3"}>
                <InputGroup>
                    <Form.Control className="me-auto" placeholder="Search..."
                                  style={{
                                      color: 'gray',
                                      backgroundColor: 'transparent',
                                      border: 'none',
                                      borderBottom: '3px solid',
                                      borderRadius: '0',
                                      boxShadow: 'none',
                                  }}/>
                    <InputGroup.Text id="search-icon"
                                     style={{
                                         color: 'gray',
                                         backgroundColor: 'transparent',
                                         boxShadow: 'none',
                                         border: 'none',
                                         borderBottom: '3px solid',
                                         borderRadius: '0',
                                     }}>
                        <BiSearch style={{color: 'gray'}}/>
                    </InputGroup.Text>
                </InputGroup>

                {[...Array(5)].map(() => {
                    return (
                        <WNCard auto />
                    );
                })}
            </Container>
        )
    }

    renderProfileData() {
        return (
            <Form className="m-5">
                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formFirstName">
                        <InputGroup.Text id="first-name-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <BsFillPersonFill className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>First Name</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="text"
                                      defaultValue="TODO: Name From Back"
                                      name="firstName"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        />
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formLastName">
                        <InputGroup.Text id="last-name-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <BsFillPersonFill className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Last Name</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="text"
                                      defaultValue="TODO: Last Name From Back"
                                      name="lastName"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicUsername">
                        <InputGroup.Text id="username-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <CgGym className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Username</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="text"
                                      defaultValue="TODO: Username From Back"
                                      name="username"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicContactPhone">
                        <InputGroup.Text id="phone-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <AiFillPhone className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Contact Phone</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="tel"
                                      defaultValue="TODO: Phone From Back"
                                      name="contactPhone"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <InputGroup.Text id="email-icon"
                                     style={{
                                         backgroundColor: 'transparent',
                                         border: 'none',
                                         color: 'white'
                                     }}>
                        <AiTwotoneMail className={"h4"} style={{color: 'green'}}/>
                        <Form.Label>Email Address</Form.Label>
                    </InputGroup.Text>
                    <Form.Control type="email"
                                  defaultValue="TODO: Email From Back"
                                  name="email"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}/>
                </Form.Group>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicCounty">
                        <InputGroup.Text id="county-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <BiWorld className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>County</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="text"
                                      defaultValue="TODO: County From Back"
                                      name="county"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicCity">
                        <InputGroup.Text id="city-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <MdLocationCity className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>City</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="text"
                                      defaultValue="TODO: City From Back"
                                      name="city"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} className="mb-3" controlId="formBasicStreet">
                    <InputGroup.Text id="street-icon"
                                     style={{
                                         backgroundColor: 'transparent',
                                         border: 'none',
                                         color: 'white'
                                     }}>
                        <MdStreetview className={"h4"} style={{color: 'green'}}/>
                        <Form.Label>Street</Form.Label>
                    </InputGroup.Text>
                    <Form.Control type="text"
                                  defaultValue="TODO: Street From Back"
                                  name="street"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}/>
                </Form.Group>

                <Row className="mb-4">
                    <Form.Group as={Col} className="mb-2" controlId="formBasicAge">
                        <InputGroup.Text id="age-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <AiOutlineFieldNumber className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Age</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="number"
                                      defaultValue="-1"
                                      name="age"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>


                    <Form.Group as={Col} className="mb-2" controlId="formBasicHeight">
                        <InputGroup.Text id="height-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <GiBodyHeight className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Height</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="number"
                                      defaultValue="-1"
                                      name="height"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-2" controlId="formBasicWeight">
                        <InputGroup.Text id="weight-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <GiWeightScale className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Weight</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="number"
                                      defaultValue="-1"
                                      name="weight"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>

                    <Form.Group as={Col} xs={5} className="mb-2" controlId="formBasicBirthday">
                        <InputGroup.Text id="birthday-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <MdDateRange className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Birthday</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="date"
                                      defaultValue="25/04/2001"
                                      name="birthday"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Button as={Col} className={"m-3"} variant={"outline-danger"} style={{width: "30%"}}
                            onClick={this.props.cancelChanges}>
                        Cancel
                    </Button>

                    <Button as={Col} className={"m-3"} variant={"success"} style={{color: "black", width: "30%"}}
                            onClick={this.props.saveChanges}>
                        Save Changes
                    </Button>
                </Row>
            </Form>
        )
    }
}

export default ContentMenu;