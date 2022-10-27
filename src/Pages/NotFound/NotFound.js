import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className='text-center m-8 mt-5'>
        <h1>Page Not Found!</h1>
        <Link to="/" className='text-red fw-bolder'>
            <u>Home</u>
        </Link>
    </div>
);

export default NotFound;