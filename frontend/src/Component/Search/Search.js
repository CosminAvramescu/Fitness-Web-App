import React, {useState, useEffect} from 'react';
import TrainerCard from "./TrainerCard";
import {InputGroup, Stack, ToggleButton, ToggleButtonGroup} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {BiSearch} from 'react-icons/bi';
import Container from "react-bootstrap/Container";
import WNCard from "./WNCard";
import axios from "axios";

let uList = [];

const Search = () => {
    const [step, setStep] = useState(1);
    const [users, setUsers] = useState([]);
    const [workoutList, setWorkoutList] = useState([]);
    const [nutritionList, setNutritionList] = useState([]);

    useEffect(() => {
        fetchUserList();
        fetchWorkoutList();
        fetchNutritionList();
    }, []);

    const handleStepChange = (selectedRole) => {
        setStep(selectedRole);
    };

    const fetchUserList = async () => {
        try {
            const response = await axios.get('http://localhost:8082/user/all');
            setUsers(response.data);
            uList=response.data
        } catch (error) {
            console.error('Error fetching user list:', error);
        }

        const renderWorkouts = () => {
            return (
                <Stack gap={5} className={"m-5"}>
                    {[...Array(workoutList.length)].map((value, index) => {
                        //console.log(workoutList)
                        return (
                            <WNCard auto id={workoutList[index].trainerId - 1}
                                    path={'workout/downloadW'} workout={workoutList[index]}
                                    role={0}/>
                        );
                    })}
                </Stack>
            );
        };

        const renderNutritions = () => {
            return (
                <Stack gap={5} className={"m-5"}>
                    {[...Array(5)].map(() => {
                        return (
                            <WNCard auto role={0}/>
                        );
                    })}
                </Stack>
            )
        }

    const fetchNutritionList = async () => {
        try {
            const response = await axios.get('http://localhost:8082/nutrition/all');
            setNutritionList(response.data);
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };

    const renderTrainers = () => {
        return (
            [...Array(users.length)].map((value, index) => {
                return (
                    <TrainerCard auto id={users[index].id} path={'user/download'} user={users[index]}/>
                );
            })
        );
    };
        const renderSwitch = () => {
            switch (step) {
                case 1:
                    return renderTrainers();
                case 2:
                    return renderWorkouts();
                case 3:
                    return renderNutritions();
                default:
                    return renderTrainers();
            }
        };

        return (
            [...Array(workoutList.length)].map((value, index) => {
                return (
                    <WNCard auto id={workoutList[index].trainerId-1}
                            path={'workout/downloadW'} workout={workoutList[index]}/>
                );
            })
        );
    };

    const renderNutritions = () => {
        return (
            [...Array(
              
              ist.length)].map((value, index) => {
                return (
                    <WNCard auto id={nutritionList[index].trainerId-1}
                            path={'nutrition/downloadN'} workout={nutritionList[index]}/>
                );
            })
        );
    };


    return (
        <div className={'p-5'}>
            <Container className={'p-1'}>
                <ToggleButtonGroup type="radio" className="mb-3 d-flex" name="filter" defaultValue={step}
                                   onChange={handleStepChange}>
                    <ToggleButton id="tbg-trainer" variant="default" style={{
                        color: step === 1 ? "green" : "gray",
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '3px solid',
                        borderRadius: '0',
                        boxShadow: 'none',
                    }} value={1} className="w-100">
                        TRAINERS
                    </ToggleButton>

                    <ToggleButton id="tbg-workout" variant="default" style={{
                        color: step === 2 ? "green" : "gray",
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '3px solid',
                        borderRadius: '0',
                        boxShadow: 'none',
                    }} value={2} className="w-100">
                        WORKOUTS
                    </ToggleButton>

                    <ToggleButton id="tbg-nutritions" variant="default" style={{
                        color: step === 3 ? "green" : "gray",
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
                    <Form.Control className="me-auto" placeholder="Search..." style={{
                        color: 'gray',
                        backgroundColor: 'transparent',
                        border: 'none',
                        borderBottom: '3px solid',
                        borderRadius: '0',
                        boxShadow: 'none',
                    }}/>
                    <InputGroup.Text id="search-icon" style={{
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

            {renderSwitch()}
        </div>
    );
};

export default Search;
export {uList};
