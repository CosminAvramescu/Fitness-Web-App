import React, {Component} from 'react';
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import signImage from "../../Assets/gym_authenticate.png"

class Authentication extends Component {
    render() {
        return (
            <div>
                <Container className="p-5" style={{ color: "#00C853" }}>
                    {this.props.value === 1?
                        this.renderSignIn() : this.renderSignUp()
                    }
                </Container>
            </div>
        );
    }

    renderSignIn() {
        return (
            <Row>
                <Col>{this.renderSignImage()}</Col>
                <Col className="m-auto align-items-center justify-content-center"><SignIn/></Col>
            </Row>
        );
    }

    renderSignUp() {
        return (
            <Row>
                <Col className="m-5"><SignUp/></Col>
                <Col className="m-auto align-items-center justify-content-center">{this.renderSignImage()}</Col>
            </Row>
        );
    }

    renderSignImage() {
        return (
            <div className={"p-5"}>
                <img src={signImage} className='img-fluid' alt="Gym"/>
            </div>
        );
    }
}

export default Authentication;