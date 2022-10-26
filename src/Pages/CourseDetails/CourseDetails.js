import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseDetailsCard from '../../Shared/CourseDetailsCard/CourseDetailsCard';

const CourseDetails = () => {
    const courses = useLoaderData();

    return (
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-2 gy-2 mt-5'>
            {
                courses.map(c =>
                    <CourseDetailsCard key={c._id} course={c}></CourseDetailsCard>
                )
            }
        </div>
    );
};

export default CourseDetails;