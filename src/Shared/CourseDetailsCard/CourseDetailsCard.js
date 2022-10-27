import React from 'react';
import { Button, Container, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const CourseDetailsCard = ({ course }) => {
    const { title, author, image, details } = course;

    return (
        <Container>
            <Card ref={ref} className="mb-5">
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
                        <Pdf targetRef={ref} filename="course-details.pdf">
                            {({ toPdf }) => <p className='text-dark pt-2' onClick={toPdf}>Download Details</p>}
                        </Pdf>
                    </Button>
                    <Button className='bg-light w-100' type="button">
                        <Link to={`/courses/${course._id}`} className='card-link text-dark'>Get Premium Access</Link>
                    </Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default CourseDetailsCard;