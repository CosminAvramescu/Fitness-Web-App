import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
class SignIn extends Component {
    render() {
        return (
            <div>
                <Container fluid="md" className="p-5">
                    <Row className="justify-content-md-center">
                        <Col>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email or Profile" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember me" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    SIGN IN
                                </Button>
                            </Form>
                        </Col>
                        <Col>"Image Here"</Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

export default SignIn;