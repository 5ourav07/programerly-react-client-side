import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const course = useLoaderData();

    return (
        <div>
            <h1>Course Details: {course.length}</h1>
        </div>
    );
};

export default CourseDetails;