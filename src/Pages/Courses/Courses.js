import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <Col lg='3'>
                        <h1>Categories: {categories.length}</h1>
                        {
                            categories.map(category =>
                                <p key={category.id}>
                                    <Link to={`/courses/category/${category.id}`}>{category.name}</Link>
                                </p>
                            )
                        }
                    </Col>

                    <Col lg='9'>
                        <Row>
                            <Col>
                                <h1>Course</h1>
                                {
                                    categories.map(category =>
                                        <p key={category.id}>
                                            <Link to={`/courses/category/${category.id}`}>{category.image}</Link><br></br>
                                            <Link to={`/courses/category/${category.id}`}>{category.name}</Link><br></br>
                                            <Link to={`/courses/category/${category.id}`}>{category.details}</Link>
                                        </p>
                                    )
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;