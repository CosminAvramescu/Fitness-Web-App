import React, {Component} from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class SignUp extends Component {
    state = {
        step: 1,
        role: 2,
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
        this.setState({[event.target.name]: event.target.value})
    }

    handleRoleChange = (selectedRole) => {
        this.setState({
            role: selectedRole
        });
    }

    render() {
        const {
            step, firstName, lastName, username, email, contactPhone, password, confirmPassword,
            role, county, city, street, age, height, weight, birthday
        } = this.state;

        const inputValues = {
            firstName, lastName, email, username, contactPhone, password, confirmPassword,
            role, county, city, street, age, height, weight, birthday
        };

        switch (step) {
            case 1:
                return this.renderUserData();
            case 2:
                return this.renderRoleData();
        }
    }

    renderRoleData() {
        return (
            <Form>
                <ToggleButtonGroup type="radio" className="mb-3"
                                   style={{width: '100%'}}
                                   value={this.state.role}
                                   name="role"
                                   onChange={this.handleRoleChange}>

                    <ToggleButton id="tbg-trainer" variant="light" value={1}>
                        TRAINER
                    </ToggleButton>

                    <ToggleButton id="tbg-trainee" variant="light" value={2}>
                        TRAINEE
                    </ToggleButton>
                </ToggleButtonGroup>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formBasicCounty">
                        <Form.Label>County</Form.Label>
                        <Form.Control type="text"
                                      defaultValue={this.state.county}
                                      name="county"
                                      required onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text"
                                      defaultValue={this.state.city}
                                      name="city"
                                      required onChange={this.handleChange}/>
                    </Form.Group>
                </Row>

                <Form.Group as={Col} className="mb-3" controlId="formBasicStreet">
                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text"
                                  defaultValue={this.state.street}
                                  name="street"
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Row className="mb-4">
                    <Form.Group as={Col} className="mb-2" controlId="formBasicAge">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number"
                                      defaultValue={this.state.age}
                                      name="age"
                                      required onChange={this.handleChange}/>
                    </Form.Group>


                    <Form.Group as={Col} className="mb-2" controlId="formBasicHeight">
                        <Form.Label>Height</Form.Label>
                        <Form.Control type="number"
                                      defaultValue={this.state.height}
                                      name="height"
                                      required onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-2" controlId="formBasicWeight">
                        <Form.Label>Weight</Form.Label>
                        <Form.Control type="number"
                                      defaultValue={this.state.weight}
                                      name="weight"
                                      required onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} xs={5} className="mb-2" controlId="formBasicBirthday">
                        <Form.Label>Birthday</Form.Label>
                        <Form.Control type="date"
                                      defaultValue={this.state.birthday}
                                      name="birthday"
                                      required onChange={this.handleChange}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Col xs={6}>
                        <Button variant="primary" style={{width: '100%'}} type="submit">
                            CREATE ACCOUNT
                        </Button>
                    </Col>
                    <Col>
                        <Button variant="outline-primary" onClick={this.prevStep} style={{width: '100%'}}>
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
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"
                                      defaultValue={this.state.firstName}
                                      name="firstName"
                                      required onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"
                                      defaultValue={this.state.lastName}
                                      name="lastName"
                                      required onChange={this.handleChange}/>
                    </Form.Group>
                </Row>

                <Row>
                    <Form.Group as={Col} className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text"
                                      defaultValue={this.state.username}
                                      name="username"
                                      required onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group as={Col} className="mb-3" controlId="formBasicContactPhone">
                        <Form.Label>Contact Phone</Form.Label>
                        <Form.Control type="text"
                                      defaultValue={this.state.contactPhone}
                                      name="contactPhone"
                                      required onChange={this.handleChange}/>
                    </Form.Group>

                </Row>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                                  defaultValue={this.state.email}
                                  name="email"
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                                  defaultValue={this.state.password}
                                  name="password"
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password"
                                  defaultValue={this.state.confirmPassword}
                                  name="confirmPassword"
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Button className="mb-3" variant="primary" style={{width: '50%'}} onClick={this.nextStep}>
                    NEXT
                </Button>
            </Form>
        );
    }
}

export default SignUp;