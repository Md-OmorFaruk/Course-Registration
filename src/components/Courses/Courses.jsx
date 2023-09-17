import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handleAddToCourseName}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('courses.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className="md:w-4/5">
            
            <div className="grid grid-cols-3 gap-10 m-10">
            {
               courses.map(course => <Course
                 key={course.id} 
                 course = {course}
                 handleAddToCourseName={handleAddToCourseName}
                 ></Course>)
            }
            </div>
        </div>
    );
};

export default Courses;