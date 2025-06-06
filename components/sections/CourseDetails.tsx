'use client';

// ✅ 1. Framework core
import Link from "next/link";
// ✅ 2. Navigation utilities
import { notFound } from "next/navigation";
// ✅ 3. Internationalization
import { useTranslation } from "react-i18next";
import GradientButton from "../ui/GradientButton";

const courses = [
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

const CourseDetails = ({ params }: { params: { slug: string } }) => {
  const { t } = useTranslation();
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return notFound();

  const { title, description, details } = course;

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-10">
        <Link
          href="/courses"
          className="inline-block text-sm text-brand hover:text-brand-light mb-6"
        >
          ← {t("course.backToCourses")}
        </Link>

        {/* Hero Section */}
        <div className="w-full h-64 sm:h-72 md:h-80 flex items-center justify-center text-center rounded-xl bg-gradient-to-br from-brand to-brand-dark text-white px-4 shadow mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
            {t(title)}
            <span className="block text-lg sm:text-xl font-normal mt-3 opacity-90">
              {t(description)}
            </span>
          </h1>
        </div>

        {/* Course Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-brand">
              {t("course.overview")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base">
              {t(details.summary)}
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-3 text-brand">
              {t("course.learningPoints")}
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
              {details.points.map((key, idx) => (
                <li key={idx}>{t(key)}</li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/30 p-4 rounded-lg">
              <div className="text-2xl">📅</div>
              <div>
                <p className="font-medium">{t("course.duration")}</p>
                <p className="text-gray-600 dark:text-gray-300">{t(details.duration)}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-900/30 p-4 rounded-lg">
              <div className="text-2xl">💰</div>
              <div>
                <p className="font-medium">{t("course.tuition")}</p>
                <p className="text-gray-600 dark:text-gray-300">{t(details.tuition)}</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <GradientButton label={t("course.applyNow")} href="/contact" />
          </div>


        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
