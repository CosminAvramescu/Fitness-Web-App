import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import signImage from "../../Assets/gym_authenticate.png"

class Authentication extends Component {
    state = {

    }
    render() {
        return (
            <div>
                <Container fluid="md" className="p-5">
                    {this.props.value === 1?
                        this.renderSignIn() : this.renderSignUp()
                    }
                </Container>
            </div>
        );
    }

    renderSignIn() {
        return (
            <Row className="justify-content-md-center">
                <Col>{this.renderSignImage()}</Col>
                <Col><SignIn/></Col>
            </Row>
        );
    }

    renderSignUp() {
        return (
            <Row className="justify-content-md-center">
                <Col><SignUp/></Col>
                <Col>{this.renderSignImage()}</Col>
            </Row>
        );
    }

    renderSignImage() {
        return (
            <img src={signImage} alt="Gym"/>
        );
    }
}

export default Authentication;