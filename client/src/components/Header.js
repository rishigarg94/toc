import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';

const Header = (props) => {
    const toggle = !!props.location.pathname[1] ? (props.location[1] === "b" ? false : true) : true;
    return (
        <header>
            {toggle ?
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
                :
                <Navbar
                    sticky="top"
                    collapseOnSelect
                    expand="lg"
                    variant="dark"
                    bg='dark'
                    className="style top-bottom"
                    id="navbar"
                >
                    <Navbar.Brand href="/" className="title-nav">
                        E-Administration
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link eventKey="blogs" hresname="nav-items" href="/blogs">
                                Home
                            </Nav.Link>
                            <Nav.Link eventKey="sponsors" href="/sponsors" className="nav-items">
                                Sponsors
                            </Nav.Link>
                        </Nav>
                        {
                            account ?
                                <Button className='mr-sm-2 my-2 right-btn btn-danger' size='lg' onClick={handleLogout}>Logout</Button>
                                :
                                <Button className='mr-sm-2 my-2 right-btn btn-danger' size='lg' onClick={connectToPortis}>Portis</Button>
                        }
                    </Navbar.Collapse>
                </Navbar>
            }
        </header>
    )
}

export default Header;