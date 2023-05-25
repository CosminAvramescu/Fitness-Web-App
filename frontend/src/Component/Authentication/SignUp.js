import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {InputGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import axios from "axios";
import {BsFillPersonFill} from "react-icons/bs";
import {CgGym} from "react-icons/cg";
import {AiFillPhone, AiOutlineFieldNumber, AiTwotoneMail} from "react-icons/ai";
import {RiLockPasswordFill} from "react-icons/ri";
import {BiWorld} from "react-icons/bi";
import {MdDateRange, MdLocationCity, MdStreetview} from "react-icons/md";
import {GiBodyHeight, GiWeightScale} from "react-icons/gi";
import {FaCertificate} from "react-icons/fa";

class SignUp extends Component {
    state = {
        step: 1,
        role: 1,
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        contactPhone: '',
        password: '',
        confirmPassword: '',
        county: '',
        city: '',
        street: '',
        age: 0,
        height: 0,
        weight: 0,
        birthday: '',
        certificate: null
    }

    nextStep = (e) => {
        e.preventDefault();
        const {step} = this.state
        this.setState({
            step: step + 1
        })
    }

    prevStep = (e) => {
        e.preventDefault();
        const {step} = this.state
        this.setState({
            step: step - 1
        })
    }

    handleChange = (event) => {
        event.preventDefault();
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleRoleChange = (selectedRole) => {
        this.setState({
            role: selectedRole
        });
    }

    handleCreateAccount = async (event) => {
        event.preventDefault();

        const user = new User(
            this.state.role,
            this.state.firstName,
            this.state.lastName,
            this.state.username,
            this.state.email,
            this.state.contactPhone,
            this.state.password,
            this.state.county,
            this.state.city,
            this.state.street,
            this.state.age,
            this.state.height,
            this.state.weight,
            this.state.birthday,
            this.state.certificate
        )

        let url = "http://localhost:8082/api/v1/register"
        let response = await axios.post(url, user,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        user.toString()
        console.log(response)

    };

    render() {
        const {
            step, firstName, lastName, username, email, contactPhone, password, confirmPassword,
            role, county, city, street, age, height, weight, birthday, certificate
        } = this.state;

        const inputValues = {
            firstName, lastName, email, username, contactPhone, password, confirmPassword,
            role, county, city, street, age, height, weight, birthday, certificate
        };

        switch (step) {
            case 1:
                return this.renderUserData();
            case 2:
                return this.renderRoleData();
            default:
                return this.renderUserData();
        }
    }

    renderRoleData() {
        return (
            <Form>
                <ToggleButtonGroup type="radio" className="mb-3"
                                   value={this.state.role}
                                   name="role"
                                   style={{width: "100%"}}
                                   onChange={this.handleRoleChange}>

                    <ToggleButton id="tbg-trainer" variant="light" value={1} style={{
                        color: this.state.role === 1 ? "green" : "gray",
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '3px solid',
                        borderRadius: '0',
                        boxShadow: 'none',
                    }}>
                        TRAINER
                    </ToggleButton>

                    <ToggleButton id="tbg-trainee" variant="light" value={2} style={{
                        color: this.state.role === 2 ? "green" : "gray",
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '3px solid',
                        borderRadius: '0',
                        boxShadow: 'none',
                    }}>
                        TRAINEE
                    </ToggleButton>
                </ToggleButtonGroup>

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
                                      defaultValue={this.state.county}
                                      name="county"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                      defaultValue={this.state.city}
                                      name="city"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                  defaultValue={this.state.street}
                                  name="street"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                                  required onChange={this.handleChange}/>
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
                                      defaultValue={this.state.age}
                                      name="age"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                      defaultValue={this.state.height}
                                      name="height"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                      defaultValue={this.state.weight}
                                      name="weight"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                      defaultValue={this.state.birthday}
                                      name="birthday"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
                    </Form.Group>
                </Row>

                {this.state.role === 1 ?
                    <Form.Group as={Col} className="mb-4" controlId="formBasicCertificate">
                        <InputGroup.Text id="certificate-icon"
                                         style={{
                                             backgroundColor: 'transparent',
                                             border: 'none',
                                             color: 'white'
                                         }}>
                            <FaCertificate className={"h4"} style={{color: 'green'}}/>
                            <Form.Label>Certificate</Form.Label>
                        </InputGroup.Text>
                        <Form.Control type="file"
                                      defaultValue={null}
                                      required onChange={this.handleChange}
                                      name="certificate"
                                      style={{
                                          backgroundColor: "#212121",
                                          color: "white"
                                      }}/>
                    </Form.Group> : null
                }

                <Row className="mb-4">
                    <Col xs={6}>
                        <Button variant="success" style={{width: '100%'}} type="submit"
                                onClick={this.handleCreateAccount}>
                            CREATE ACCOUNT
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-success" onClick={this.prevStep} style={{width: '100%'}}>
                            Back
                        </Button>
                    </Col>
                </Row>
            </Form>
        )
    }

    renderUserData() {
        return (
            <Form>
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
                                      defaultValue={this.state.firstName}
                                      name="firstName"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}
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
                                      defaultValue={this.state.lastName}
                                      name="lastName"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                      defaultValue={this.state.username}
                                      name="username"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                      defaultValue={this.state.contactPhone}
                                      name="contactPhone"
                                      style={{
                                          backgroundColor: "#424242",
                                          border: 'none',
                                          boxShadow: 'none',
                                          color: 'white'
                                      }}
                                      required onChange={this.handleChange}/>
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
                                  defaultValue={this.state.email}
                                  name="email"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup.Text id="password-icon"
                                     style={{
                                         backgroundColor: 'transparent',
                                         border: 'none',
                                         color: 'white'
                                     }}>
                        <RiLockPasswordFill className={"h4"} style={{color: 'green'}}/>
                        <Form.Label>Password</Form.Label>
                    </InputGroup.Text>
                    <Form.Control type="password"
                                  defaultValue={this.state.password}
                                  name="password"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formConfirmPassword">
                    <InputGroup.Text id="conf-password-icon"
                                     style={{
                                         backgroundColor: 'transparent',
                                         border: 'none',
                                         color: 'white'
                                     }}>
                        <RiLockPasswordFill className={"h4"} style={{color: 'green'}}/>
                        <Form.Label>Confirm Password</Form.Label>
                    </InputGroup.Text>
                    <Form.Control type="password"
                                  defaultValue={this.state.confirmPassword}
                                  name="password"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Button className="mb-3" variant="success" style={{width: '50%'}} onClick={this.nextStep}>
                    NEXT
                </Button>
            </Form>
        );
    }
}

export default SignUp;

class User {
    constructor(role,
                firstName,
                lastName,
                username,
                email,
                contactPhone,
                password,
                county,
                city,
                street,
                age,
                height,
                weight,
                birthday,
                certificate,
                userPicture) {
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.contactPhone = contactPhone;
        this.password = password;
        this.county = county;
        this.city = city;
        this.street = street;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.birthday = birthday;
        this.certificate = certificate;
        this.userPicture = userPicture;
    }

    toString() {
        console.log("Role:", this.role);
        console.log("First Name:", this.firstName);
        console.log("Last Name:", this.lastName);
        console.log("Username:", this.username);
        console.log("Email:", this.email);
        console.log("Contact Phone:", this.contactPhone);
        console.log("Password:", this.password);
        console.log("County:", this.county);
        console.log("City:", this.city);
        console.log("Street:", this.street);
        console.log("Age:", this.age);
        console.log("Height:", this.height);
        console.log("Weight:", this.weight);
        console.log("Birthday:", this.birthday);
        console.log("Certificate:", this.certificate);
    }
}