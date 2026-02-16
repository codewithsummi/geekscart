import React from "react";
import { Link } from "react-router-dom";
import CourseCard from "./CourseCard";
import { useGetCourseData } from "../Hooks";
const ProductGrid = () => {
  const courseData=useGetCourseData();
  console.log(courseData)
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Courses</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courseData && courseData.map((course)=>
            <CourseCard  key={course.id} course={course}/>
         )} 
      </div>
    </div>
  );
};

export default ProductGrid;


