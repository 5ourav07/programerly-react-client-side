import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CourseDetailsCard = ({ course }) => {
    const { title, author, image, details } = course;

    return (
        <Container>
            <Card className="mb-5">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex'>
                        <Image
                            roundedCircle
                            className='me-2'
                            src={author?.img}
                            style={{ height: '60px' }}
                        ></Image>

                        <div>
                            <p className='mb-0'>{author?.name}</p>
                            <p>{author?.published_date}</p>
                        </div>
                    </div>
                </Card.Header>

                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img style={{ width: '100px', height: '100px' }} variant="top" src={image} />
                    <Card.Text>{details}</Card.Text>
                    <Button className='bg-light w-100' type="button">
                        <Link className='card-link text-dark'>Get Premium Access</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetailsCard;