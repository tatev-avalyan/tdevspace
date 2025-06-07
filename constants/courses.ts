// src/constants/courses.ts

export const COURSES = [
  {
    title: "course.js.title",
    slug: "javascript-fundamentals",
    description: "course.js.description",
    details: {
      summary: "course.js.summary",
      points: [
        "course.js.point1",
        "course.js.point2",
        "course.js.point3",
        "course.js.point4",
      ],
      duration: "course.js.duration",
      tuition: "course.js.tuition",
    },
  },
  {
    title: "course.react.title",
    slug: "react-redux-mastery",
    description: "course.react.description",
    details: {
      summary: "course.react.summary",
      points: [
        "course.react.point1",
        "course.react.point2",
        "course.react.point3",
        "course.react.point4",
      ],
      duration: "course.react.duration",
      tuition: "course.react.tuition",
    },
  },
  {
    title: "course.kids.title",
    slug: "web-dev-for-kids",
    description: "course.kids.description",
    details: {
      summary: "course.kids.summary",
      points: [
        "course.kids.point1",
        "course.kids.point2",
        "course.kids.point3",
        "course.kids.point4",
      ],
      duration: "course.kids.duration",
      tuition: "course.kids.tuition",
    },
  },
  {
    title: "course.math.title",
    slug: "math-enrichment",
    description: "course.math.description",
    details: {
      summary: "course.math.summary",
      points: [
        "course.math.point1",
        "course.math.point2",
        "course.math.point3",
        "course.math.point4",
      ],
      duration: "course.math.duration",
      tuition: "course.math.tuition",
    },
  },
];

export const AVAILABLE_COURSES = COURSES.map((course) => course.title);
