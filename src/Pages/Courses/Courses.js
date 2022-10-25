import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='4'>
                        <h1>Course Categories: {categories.length}</h1>
                        {
                            categories.map(category =>
                                <p key={category.id}>
                                    <Link to={`/categories/${category.id}`}>{category.name}</Link>
                                </p>
                            )
                        }
                    </Col>

                    <Col lg='8'>
                        <h1>Course Categories: {courses.length}</h1>
                        {
                            courses.map(course =>
                                <p key={course.id}>
                                    <Link to={`/courses/${course.id}`}>{course.name}</Link>
                                </p>
                            )
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;