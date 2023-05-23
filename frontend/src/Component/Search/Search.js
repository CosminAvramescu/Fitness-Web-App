import React, {Component} from 'react';
import TrainerCard from "./TrainerCard";
import {InputGroup, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {BiSearch} from 'react-icons/bi';
import Container from "react-bootstrap/Container";

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
                        <ToggleButton id="tbg-trainer" variant="dark" value={1} className="w-100">
                            TRAINER
                        </ToggleButton>

                        <ToggleButton id="tbg-workout" variant="dark" value={2} className="w-100">
                            WORKOUT
                        </ToggleButton>

                        <ToggleButton id="tbg-nutritions" variant="dark" value={3} className="w-100">
                            NUTRITIONS
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Container>

                <Container className="p-0">
                    <InputGroup>
                        <Form.Control className="me-auto" placeholder="Search..."/>
                        <InputGroup.Text id="search-icon"><BiSearch/></InputGroup.Text>
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
            <div>Hello</div>
        )
    }

    renderNutritions() {
        return (
            <div>Hello</div>
        )
    }
}

export default Search;