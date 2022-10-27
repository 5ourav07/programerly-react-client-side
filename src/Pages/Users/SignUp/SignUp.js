import React, { useContext, useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {
    const { googleSignup } = useContext(AuthContext);
    const { githubSignup } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignup(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses');
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        githubSignup(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/courses');
            })
            .catch(error => console.error(error))
    }

    const [error, setError] = useState('');
    const { login, updateUserProfile, verifyEmail } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate('/login');
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

    return (
        <div>
            <Form className='px-5 mx-5 mt-5 w-50' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name="photoURL" type="text" placeholder="Phot URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        onClick={handleAccepted}
                        label={<>Accept <Link to="/terms">Terms and conditions</Link></>} />
                </Form.Group>

                <p>Already have an account? <Link to="/login">Please Login</Link></p>

                <Button variant="primary" type="submit" disabled={!accepted}>Sign Up</Button><br /><br />

                <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
            <ListGroup className='px-5 mx-5 w-50'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-danger">
                    <FaGoogle></FaGoogle> Login with Google
                </Button>

                <Button onClick={handleGithubSignIn} variant="outline-primary">
                    <FaGithub></FaGithub> Login with Github
                </Button>
            </ListGroup>
        </div>
    );
};

export default SignUp;