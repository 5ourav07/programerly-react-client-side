import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../../Assets/logo.png';
import { AuthContext } from '../../Contexts/AuthProvider';
import { FaUser } from 'react-icons/fa';
import './Header.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className='header' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link className="navbar-brand" to="/">
                    <img style={{ height: 40 }} src={Logo} alt="Logo" className="logo" />
                    ProgramerLy
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <div className="toggle-theme-wrapper">
                            <span>☀️</span>
                            <label className="toggle-theme" htmlFor="checkbox">
                                <input type="checkbox" id="checkbox" />
                                <div className="slider round"></div>
                            </label>
                            <span>🌒</span>
                        </div>
                    </Nav>

                    <Nav className='d-flex align-items-center'>
                        <>
                            {
                                user?.uid
                                    ?
                                    <>
                                        <span className='display-name'>{user?.displayName}</span>
                                        <Link to='/' className='link p-0 mx-3' onClick={handleLogOut}>Log Out</Link>
                                    </>
                                    :
                                    <>
                                        <Link className='link me-3' to="/login">Login</Link>
                                        <Link className='link' to="/signup">Sign Up</Link>
                                    </>
                            }
                        </>

                        <>
                            {
                                user?.photoURL
                                    ?
                                    <Image style={{ height: '30px' }} src={user?.photoURL} roundedCircle></Image>
                                    :
                                    <FaUser></FaUser>
                            }
                        </>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;