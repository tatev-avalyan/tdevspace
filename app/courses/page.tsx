'use client';
import { useState } from 'react';

const courses = [
  {
    title: 'JavaScript Fundamentals',
    description: 'Master JS basics — variables, loops, DOM, and logic building.',
  },
  {
    title: 'React & Redux Mastery',
    description: 'Build real-world SPAs with React, Context API, and Redux Toolkit.',
  },
  {
    title: 'Web Dev for Kids',
    description: 'Intro to HTML, CSS, JavaScript for children with fun projects.',
  },
  {
    title: 'Math Enrichment',
    description: 'Boost logic, critical thinking, and math skills through engaging activities.',
  },
];

export default function Courses() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6">Courses We Offer</h2>
      <div className="space-y-4">
        {courses.map((course, i) => (
          <div
            key={i}
            className="border border-gray-300 dark:border-gray-700 rounded-md"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full text-left px-4 py-3 font-medium bg-gray-100 dark:bg-gray-800 rounded-t-md"
            >
              {course.title}
            </button>
            {activeIndex === i && (
              <div className="px-4 py-2 text-sm bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 rounded-b-md">
                {course.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}