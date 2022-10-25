import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img style={{ height: 40 }} src={Logo} alt="Logo" className="logo" />
                    ProgramerLy
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#courses">Courses</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                        <div className="toggle-theme-wrapper">
                            <span>☀️</span>
                            <label className="toggle-theme" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                            <span>🌒</span>
                        </div>
                    </Nav>

                    <Nav>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;