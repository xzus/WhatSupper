import React from "react";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
// import SearchBar from './SearchBar';
// import logo from "../assets/logo.png";

const NavBar = (props) => {
    return(
        <Navbar bg="#FFD24D" expand="lg">
        <Container>
        {/* <Navbar.Brand href="#home">
            <img
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
            />
        </Navbar.Brand> */}
            <Navbar.Brand href="home">WhatSupper?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="calendar">Calendar</Nav.Link>
                <Nav.Link href="voting">Voting</Nav.Link>
                <Nav.Link href="pastrecipes">Past Recipes</Nav.Link>
                <Nav.Link href="groceries">Groceries</Nav.Link>
                <Nav.Link href="pantry">Pantry</Nav.Link>
            </Nav>
            {/* <SearchBar></SearchBar> */}

            </Navbar.Collapse>


        </Container>
        </Navbar>
    )
}

export default NavBar;
