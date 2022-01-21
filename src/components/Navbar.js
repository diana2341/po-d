import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import Logo from '../imgs/logo.png'
export default function NavComponent (){
    return(
    <Navbar expand='lg' fixed='top'bg="light" variant="light">
        <Navbar.Brand id='log'href="/"><img src={Logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}