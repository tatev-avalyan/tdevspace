'use client';
import CourseDetails from '@/components/sections/CourseDetails';
import {useParams} from "next/navigation";

const Course = () => {
  const params = useParams();
  return (
    <CourseDetails params={params} />
  );
};

export default Course;