import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {BsFillPersonFill} from "react-icons/bs";
import {InputGroup, Stack} from "react-bootstrap";
import {AiFillPhone, AiOutlineFieldNumber, AiTwotoneMail} from "react-icons/ai";
import {BiSearch, BiWorld} from "react-icons/bi";
import {MdDateRange, MdLocationCity, MdStreetview} from "react-icons/md";
import {GiBodyHeight, GiWeightScale} from "react-icons/gi";
import {CgGym} from "react-icons/cg";
import Container from "react-bootstrap/Container";
import TrainerCard from "../Search/TrainerCard";
import WNCard from "../Search/WNCard";
import TraineeCard from "../Search/TraineeCard";

class ContentMenu extends Component {
    handleChange = (place, event) => {
        console.log(event.target.value)
        switch (place){
            case 'firstName':
                this.props.u.firstName=event.target.value;
                break;
            case 'lastName':
                this.props.u.lastName=event.target.value;
                break;
            case 'username':
                this.props.u.username=event.target.value;
                break;
            case 'email':
                this.props.u.email=event.target.value;
                break;
            case 'contactPhone':
                this.props.u.contactPhone=event.target.value;
                break;
            case 'county':
                this.props.u.county=event.target.value;
                break;
            case 'city':
                this.props.u.city=event.target.value;
                break;
            case 'street':
                this.props.u.street=event.target.value;
                break;
            case 'age':
                this.props.u.age=event.target.value;
                break;
            case 'height':
                this.props.u.height=event.target.value;
                break;
            case 'weight':
                this.props.u.weight=event.target.value;
                break;
            case 'birthday':
                this.props.u.birthday=event.target.value;
                break;
            default:
                break;
        }
    };


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
            case 5:
                return this.renderTrainee();
        }
    }

    renderTrainee() {
        return(
            <Container fluid="True">
                <Stack gap={4}>
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
                            <TraineeCard/>
                        );
                    })}
                </Stack>
            </Container>
        )
    }

    renderTrainers() {
        return (
            <Container fluid="True">
                <Stack gap={4}>
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
                            <TrainerCard/>
                        );
                    })}
                </Stack>
            </Container>
        )
    }

    renderWorkouts() {
        return(
            <Container fluid="True">
                <Stack gap={4}>
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
                            <WNCard/>
                        );
                    })}
                </Stack>
            </Container>
        )
    }

    renderNutrition() {
        return(
            <Container fluid="True">
                <Stack gap={4}>
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
                            <WNCard auto id={5}
                                    path={'workout/downloadW'}
                                    role={this.props.role}/>
                        );
                    })}
                </Stack>
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
                                      defaultValue={this.props.user.firstName}
                                      name="firstName"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      onChange={(event)=>this.handleChange('firstName', event)}
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
                                      defaultValue={this.props.user.lastName}
                                      name="lastName"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('lastName', event)}
                        />
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
                                      defaultValue={this.props.user.username}
                                      name="username"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('username', event)}/>
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
                                      defaultValue={this.props.user.contactPhone}
                                      name="contactPhone"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('contactPhone', event)}/>
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
                                  defaultValue={this.props.user.email}
                                  name="email"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                    onChange={(event)=>this.handleChange('email', event)}/>
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
                                      defaultValue={this.props.user.county}
                                      name="county"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('county', event)}/>
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
                                      defaultValue={this.props.user.city}
                                      name="city"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('city', event)}/>
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
                                  defaultValue={this.props.user.street}
                                  name="street"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                    onChange={(event)=>this.handleChange('street', event)}/>
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
                                      defaultValue={this.props.user.age}
                                      name="age"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('age', event)}/>
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
                                      defaultValue={this.props.user.height}
                                      name="height"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('height', event)}/>
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
                                      defaultValue={this.props.user.weight}
                                      name="weight"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('weight', event)}/>
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
                                      defaultValue={this.props.user.birthday}
                                      name="birthday"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                        onChange={(event)=>this.handleChange('birthday', event)}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Button as={Col} className={"m-3"} variant={"outline-danger"} style={{width: "30%"}}
                            onClick={this.props.cancelChanges}>
                        Cancel
                    </Button>

                    <Button as={Col} className={"m-3"} variant={"success"} style={{color: "black", width: "30%"}}
                            onClick={() =>this.props.saveChanges(this.props.u)}>
                        Save Changes
                    </Button>
                </Row>
            </Form>
        )
    }
}

export default ContentMenu;