import React from "react";
import {Navbar, NavDropdown, Container, Nav} from "react-bootstrap";
// import SearchBar from './SearchBar';
import logo from "../assets/logo.png";
import '../App.css';

const NavBar = (props) => {
    return(
        <Navbar background-color="#ffd24d" expand="xl">
        <Container>
            <Navbar.Brand href="home">
                <img
                    src={logo}
                    width="100"
                    height="70"
                    className="d-inline-block align-left"
                    alt=""
                />
            </Navbar.Brand>
            
            <Navbar.Brand href="home">WhatSupper?</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
                <Nav.Link href="calendar">Calendar</Nav.Link>
                <Nav.Link href="voting">Voting</Nav.Link>
                <Nav.Link href="recipesPage">Recipes</Nav.Link>
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
