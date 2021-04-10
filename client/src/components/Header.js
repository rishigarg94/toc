import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
                <Navbar fixed="top" className="justify-content-between" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand className="navbar-b">
                        <NavLink to="/" className="nav-link" exact={true}>E-Administration</NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav>
                            <NavLink to="/" className="nav-item nav-link" exact={true}>Home</NavLink>
                            <NavLink to="/dashboard" className="nav-item nav-link">Dashbord</NavLink>
                            <NavLink to="/sign" className="nav-item nav-link">Login</NavLink>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-light">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </header>
    )
}

export default Header;