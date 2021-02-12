import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavbarComponent() {
    return (
        <Navbar bg="light" expanded="sm">
            <Navbar.Brand as={Link} to='/'>
                HrriodyV2 Drive
            </Navbar.Brand>
            <Nav.Link as={Link} to='/user'>
                Profile
            </Nav.Link>
            
        </Navbar>
    )
}

export default NavbarComponent
