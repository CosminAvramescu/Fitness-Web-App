import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {Stack} from "react-bootstrap";
import ImageComponent from "../Image/Image";
import ProfileMenu from "./ProfileMenu";
import { Navigate } from "react-router-dom";

class Profile extends Component {
    state = {
        step : 1,
        canLogout: false
    }

    handleStepChange = (selectedRole) => {
        this.setState({
            step: selectedRole
        });

        console.log(this.state.step)
    }

    handleLogout = async () => {
        this.setState({ canLogout: true })
    }

    checkChangePage() {
        if (this.state.canLogout === true) {
            return (<Navigate to='/home' replace={true} />)
        }
    }

    render() {
        return (
            <Container fluid="True" className="m-4">
                {this.checkChangePage()}

                <Row>
                    <Col className="m-5" xs={{order: "first"}} lg="3" style={{
                        backgroundColor: "#212121",
                        color: "#FAFAFA"
                    }}>
                        {this.renderMenu()}
                    </Col>

                    <Col className="m-5" style={{
                        backgroundColor: "#212121",
                        color: "#FAFAFA"
                    }}>
                        Content
                    </Col>
                </Row>
            </Container>
        );
    }

    renderMenu() {
        return(
            <Stack>
                <Row>
                    <Col>
                        <ImageComponent width={'75px'} height={'75px'} />
                    </Col>

                    <Col className="m-1 align-items-center">
                        <Stack>
                            <div className="h5">
                                {/*TODO: Take Name from backend*/}
                                Long Name Here
                            </div>
                            <div style={{
                                color: "green"
                            }}>
                                {/*TODO: Take Data from backend*/}
                                Member Since 20-04-2023
                            </div>
                        </Stack>
                    </Col>
                </Row>

                <ProfileMenu step={this.state.step} handleStep={this.handleStepChange} handleLogout={this.handleLogout}/>
            </Stack>
        );
    }
}

export default Profile;