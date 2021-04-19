import React from 'react'
import { Navbar,Nav } from 'react-bootstrap'
export default function NavComponent (){
    return(
    <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
        </Nav>
    </Navbar>
    )
}