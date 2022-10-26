import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CourseCard from '../../Shared/CourseCard/CourseCard';
import './Courses.css'

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h1 className='text-center'>Categories: {categories.length}</h1>
                        <div className="btn-group-vertical w-100 mt-3" role="group" aria-label="Vertical button group">
                            {
                                categories.map(category =>
                                    <Button className='my-2 bg-secondary' type="button" key={category.id}>
                                        <Link className='link text-white' to={`/courses/${category.id}`}>{category.name}</Link>
                                    </Button>
                                )
                            }
                        </div>

                    </Col>

                    <Col lg='9'>
                        <h1 className='text-center'>Courses</h1>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-2 gy-4 mt-0'>
                            {
                                categories.map(category =>
                                    <CourseCard key={category.id} category={category}></CourseCard>
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;