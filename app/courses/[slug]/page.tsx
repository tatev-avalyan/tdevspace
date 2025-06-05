'use client';
import CourseDetails from '@/components/sections/CourseDetails';

const Course = ({ params }: { params: { slug: string } }) => {
  return (
    <CourseDetails params={params} />
  );
};

export default Course;