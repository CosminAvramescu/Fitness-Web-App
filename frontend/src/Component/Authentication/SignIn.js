import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Cookies, useCookies } from "react-cookie";
import axios from "axios";

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
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    login = async () =>{
        const user=new User(this.state.email, this.state.password)
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

    render() {
        return (
            <Form>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Control type="email"
                                  placeholder="Enter Email"
                                  name="email"
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Control type="password"
                                  placeholder="Password"
                                  name="password"
                                  required onChange={this.handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me"/>
                </Form.Group>

                <Button variant="primary" onClick={this.login} style={{width: '50%'}} type="submit">
                    SIGN IN
                </Button>
            </Form>
        );
    }
}

export default SignIn;