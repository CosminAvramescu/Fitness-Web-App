import React, {Component} from 'react';
import {BrowserRouter, Routes, Route, Navigate, Link} from "react-router-dom/dist";
import Homepage from "./Homepage/Homepage";
import Authentication from "./Authentication/Authentication";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UploadFile from "./UploadFile/UploadFile";
import Search from "./Search/Search";
import Profile from "./Profile/Profile";


class NavbarComp extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Navbar collapseOnSelect expand="lg" variant="dark" style={{backgroundColor: "#212121"}}>
                        <Container fluid>
                            <Navbar.Brand href="#home">FitnessFussion</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                            <Navbar.Collapse id="responsive-navbar-nav">

                                <Nav justify className="flex-grow-1 " activeKey="#Home">
                                    <Nav.Link as={Link} to="/Home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/Home">About</Nav.Link>
                                    <Nav.Link as={Link} to="/Home">Contact</Nav.Link>
                                    <Nav.Link as={Link} to="/Search">Search</Nav.Link>
                                </Nav>

                                <Nav className="justify-content-end flex-grow-1 pe-3" activeKey="#Authentication">
                                    <Nav.Link as={Link} to="/signIn">Sing In</Nav.Link>
                                    <Nav.Link as={Link} to="/signUp">Sign Up</Nav.Link>
                                </Nav>

                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>

                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/Home"/>}/>
                        <Route path="/Home" element={<Homepage/>}/>
                        <Route path="/signIn" element={<Authentication value={1}/>}/>
                        <Route path="/signUp" element={<Authentication value={0}/>}/>
                        <Route path="/UploadFile" element={<UploadFile/>}/>
                        <Route path="/Search" element={<Search/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="*" element={<Homepage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        );
    }
}

export default NavbarComp;
