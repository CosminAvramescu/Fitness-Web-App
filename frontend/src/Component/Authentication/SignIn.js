import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";
import { Navigate } from "react-router-dom";

const InitCookie = () => {
    const [cookies, setCookie, removeCookie] = useCookies([
        "userId",
        "email",
        "role",
    ]);
}

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    toString() {
    }
}

class SignIn extends Component {
    state = {
        email: '',
        password: '',
        canSign: false
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    login = async () =>{
        const user=new User(this.state.email, this.state.password)

        // TODO: check Sign succesful, move it at the end
        this.setState({ canSign: true })

        console.log(user.email, user.password)
        let url = "http://localhost:8082/api/v1/login"
        let response = await axios.post(url, user,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

        console.log(response)
    }

    checkChangePage() {
        if (this.state.canSign === true) {
            return (<Navigate to='/Profile' replace={true} />)
        }
    }

    render() {
        return (
            <Form>
                {this.checkChangePage()}

                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email"
                                  placeholder="Enter Email"
                                  name="email"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control type="password"
                                  placeholder="Password"
                                  name="password"
                                  style={{
                                      backgroundColor: "#424242",
                                      border: 'none',
                                      boxShadow: 'none',
                                      color: 'white'
                                  }}
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className="d-flex" type="checkbox" label="Remember me"/>
                </Form.Group>

                <Button variant="success" onClick={this.login} style={{width: '50%'}} type="submit">
                    SIGN IN
                </Button>
            </Form>
        );
    }
}

export default SignIn;