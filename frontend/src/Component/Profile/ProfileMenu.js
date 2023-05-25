import React, {Component} from 'react';
import {Stack, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class ProfileMenu extends Component {

    render() {
        return (
            <Stack className={'p-3'}>
                <ToggleButtonGroup vertical type="radio" className="mb-3 d-flex" name="filter" defaultValue={1}
                                   onChange={this.props.handleStep}>
                    <ToggleButton id="tbg-profile" variant="default" value={1} className="w-100 mb-3"
                                  style={{
                                      color: this.props.step === 1 ? "green" : "white",
                                      backgroundColor: 'transparent',
                                  }}>
                        Profile
                    </ToggleButton>

                    {
                        this.props.role === 0?
                            <ToggleButton id="tbg-trainers" variant="default" value={2} className="w-100 mb-3"
                                          style={{
                                              color: this.props.step === 2 ? "green" : "white",
                                              backgroundColor: 'transparent',
                                          }}>
                                My Trainers
                            </ToggleButton> :
                            <ToggleButton id="tbg-subscribers" variant="default" value={5} className="w-100 mb-3"
                                          style={{
                                              color: this.props.step === 5 ? "green" : "white",
                                              backgroundColor: 'transparent',
                                          }}>
                                My Subscribers
                            </ToggleButton>
                    }



                    <ToggleButton id="tbg-workouts" variant="default" value={3} className="w-100 mb-3"
                                  style={{
                                      color: this.props.step === 3 ? "green" : "white",
                                      backgroundColor: 'transparent',
                                  }}>
                        My Workouts
                    </ToggleButton>

                    <ToggleButton id="tbg-nutritions" variant="default" value={4} className="w-100 mb-3"
                                  style={{
                                      color: this.props.step === 4 ? "green" : "white",
                                      backgroundColor: 'transparent',
                                  }}>
                        My Nutrition Plans
                    </ToggleButton>
                </ToggleButtonGroup>

                <Button variant="success" style={{color: 'black'}} onClick={this.props.handleLogout}>
                    Logout
                </Button>
            </Stack>
        );
    }
}

export default ProfileMenu;