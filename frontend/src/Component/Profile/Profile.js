import React, {useState} from 'react';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import {Stack} from "react-bootstrap";
import ImageComponent from "../Image/Image";
import ProfileMenu from "./ProfileMenu";
import {Navigate} from "react-router-dom";
import ContentMenu from "./ContentMenu";

const Profile = () => {
    const [role, setRole] = useState(0);
    const [step, setStep] = useState(1);
    const [canLogout, setCanLogout] = useState(false);

    const handleStepChange = (selectedRole) => {
        setStep(selectedRole);
        console.log(this.state.step)
    }

    const handleLogout = async () => {
        setCanLogout(true);
    }

    const handleSaveChanges = async () => {
        console.log("Changes Saved")
    }

    const handleCancelChanges = () => {
        console.log("Cancel")
    }

    const checkChangePage = () => {
        if (canLogout) {
            return <Navigate to="/home" replace={true}/>;
        }
    };

    const renderMenu = () => {
        return (
            <Stack>
                <Row>
                    <Col>
                        <ImageComponent width={'75px'} height={'75px'}/>
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

                <ProfileMenu step={step} role={role}
                             handleStep={handleStepChange}
                             handleLogout={handleLogout}/>
            </Stack>
        );
    }

    return (
        <Container fluid="True" className="m-4">
            {checkChangePage()}


            <Row>
                <Col className="m-5" xs={{order: "first"}} lg="3" style={{
                    backgroundColor: "#212121",
                    color: "#FAFAFA"
                }}>
                    {renderMenu()}
                </Col>

                <Col className="m-5" style={{
                    backgroundColor: step > 1 ? "#111111" : "#212121",
                    color: "#FAFAFA"
                }}>
                    <ContentMenu step={step}
                                 role={role}
                                 saveChanges={handleSaveChanges}
                                 cancelChanges={handleCancelChanges}/>
                </Col>
            </Row>
        </Container>
    );
}

export default Profile;