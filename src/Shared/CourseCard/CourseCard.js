import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ category }) => {
    const { name, duration } = category;

    return (
        <div>
            <Card className="bg-secondary text-white">
                <Card.Body>
                    <Card.Title className='mb-3'>Course Name: {name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-white">Course Duration: {duration}</Card.Subtitle>
                    <Button className='button bg-light w-100' type="button">
                        <Link className='link' to={`/courses/${category.id}`}>Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;