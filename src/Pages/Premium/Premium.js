import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import Card from 'react-bootstrap/Card';
import toast from 'react-hot-toast';
import { Button } from 'react-bootstrap';

const notify = () => toast('Thank You');

const Premium = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);

    return (
        <div>
            <Card className='w-25 mt-5 mx-5'>
                <Card.Body>
                    <Card.Title>User Name: {
                        user?.uid
                            ?
                            <>
                                <span className='display-name'>{user?.displayName}</span>
                            </>
                            :
                            <>
                                <span>Please Log In</span>
                            </>
                    }
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Course Name: {data.title}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Course Cost: {data.cost}</Card.Subtitle>
                    <Button onClick={notify}>Purchase</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Premium;