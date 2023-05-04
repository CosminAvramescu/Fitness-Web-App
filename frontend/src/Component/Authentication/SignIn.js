import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
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

                <Button variant="primary" style={{width: '50%'}} type="submit">
                    SIGN IN
                </Button>
            </Form>
        );
    }
}

export default SignIn;