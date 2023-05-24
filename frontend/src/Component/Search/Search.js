import React, {Component} from 'react';
import TrainerCard from "./TrainerCard";
import {InputGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {BiSearch} from 'react-icons/bi';
import Container from "react-bootstrap/Container";
import WNCard from "./WNCard";

class Search extends Component {
    state = {
        step: 1
    }

    handleStepChange = (selectedRole) => {
        this.setState({
            step: selectedRole
        });
    }

    render() {
        return (
            <div className={'p-5'}>
                <Container className={'p-1'}>
                    <ToggleButtonGroup type="radio" className="mb-3 d-flex" name="filter" defaultValue={this.state.step}
                                       onChange={this.handleStepChange}>
                        <ToggleButton id="tbg-trainer"
                                      variant="default"
                                      style={{
                                          color: this.state.step === 1 ? "green" : "gray",
                                          backgroundColor: 'transparent',
                                          border: 'none',
                                          borderBottom: '3px solid',
                                          borderRadius: '0',
                                          boxShadow: 'none',
                                      }}
                                      value={1}
                                      className="w-100">
                            TRAINER
                        </ToggleButton>

                        <ToggleButton id="tbg-workout" variant="default"
                                      style={{
                                          color: this.state.step === 2 ? "green" : "gray",
                                          backgroundColor: 'transparent',
                                          border: 'none',
                                          borderBottom: '3px solid',
                                          borderRadius: '0',
                                          boxShadow: 'none',
                                      }} value={2} className="w-100">
                            WORKOUT
                        </ToggleButton>

                        <ToggleButton id="tbg-nutritions" variant="default"
                                      style={{
                                          color: this.state.step === 3 ? "green" : "gray",
                                          backgroundColor: 'transparent',
                                          border: 'none',
                                          borderBottom: '3px solid',
                                          borderRadius: '0',
                                          boxShadow: 'none',
                                      }} value={3} className="w-100">
                            NUTRITIONS
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Container>

                <Container className="p-0">
                    <InputGroup>
                        <Form.Control className="me-auto" placeholder="Search..."
                                      style={{
                                          color: 'gray',
                                          backgroundColor: 'transparent',
                                          border: 'none',
                                          borderBottom: '3px solid',
                                          borderRadius: '0',
                                          boxShadow: 'none',
                                      }}/>
                        <InputGroup.Text id="search-icon"
                                         style={{
                                             color: 'gray',
                                             backgroundColor: 'transparent',
                                             boxShadow: 'none',
                                             border: 'none',
                                             borderBottom: '3px solid',
                                             borderRadius: '0',
                                         }}>
                            <BiSearch style={{color: 'gray'}}/>
                        </InputGroup.Text>
                    </InputGroup>
                </Container>

                {this.renderSwitch()}
            </div>
        );
    }

    renderSwitch() {
        switch (this.state.step) {
            case 1:
                return this.renderTrainers();
            case 2:
                return this.renderWorkouts();
            case 3:
                return this.renderNutritions();
            default:
                return this.renderTrainers();
        }
    }

    renderTrainers() {
        return (
            [...Array(5)].map(() => {
                return (
                    <TrainerCard auto/>
                );
            })
        )
    }

    renderWorkouts() {
        return (
            [...Array(5)].map(() => {
                return (
                    <WNCard auto/>
                );
            })
        )
    }

    renderNutritions() {
        return (
            [...Array(5)].map(() => {
                return (
                    <WNCard auto/>
                );
            })
        )
    }
}

export default Search;