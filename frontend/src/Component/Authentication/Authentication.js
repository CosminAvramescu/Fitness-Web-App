import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Authentication extends Component {
    state = {
        value: this.props.value
    }
    render() {
        return (
            <div>
                <Container fluid="md" className="p-5">
                    {this.state.value === 1?
                        this.renderSignIn() : this.renderSignUp()
                    }
                </Container>
            </div>
        );
    }

    renderSignIn() {
        return (
            <Row className="justify-content-md-center">
                <Col><SignIn/></Col>
                <Col>"Image Here"</Col>
            </Row>
        );
    }

    renderSignUp() {
        return (
            <Row className="justify-content-md-center">
                <Col><SignUp/></Col>
                <Col>"Image Here"</Col>
            </Row>
        );
    }
}

export default Authentication;