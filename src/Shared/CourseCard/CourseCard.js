import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './CourseCard.css';

const CourseCard = ({ category }) => {
    const { image, name, total_enrolled, duration } = category;

    return (
        <div>
            <Card className="bg-secondary text-white">
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='mb-3'>Course Name: {name}</Card.Title>
                    <Card.Subtitle className="mb-3 text-white">Course Duration: {duration}</Card.Subtitle>
                    <Card.Subtitle className="mb-3 text-white">Course Duration: {total_enrolled}</Card.Subtitle>
                    <Button className='bg-light w-100' type="button">
                        <Link className='card-link text-dark' to={`/categories/${category.id}`}>Details</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCard;