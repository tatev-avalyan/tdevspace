'use client';

// ✅ 1. Framework core
import Link from "next/link";
// ✅ 2. Navigation utilities
import { notFound } from "next/navigation";
// ✅ 3. Internationalization
import { useTranslation } from "react-i18next";
import { use, useState } from "react";
import GradientButton from "@/components/ui/GradientButton";
import CourseApplyModal from "@/components/ui/CourseApplyModal";
import {Params} from "next/dist/server/request/params";

// ✅ Constant data
import { COURSES } from "@/constants/courses";

const CourseDetails = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const { slug } = use(params);
  const course = COURSES.find((c) => c.slug === slug);

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
          <h1 className="text-xl sm:text-4xl md:text-5xl font-bold leading-snug">
            {t(title)}
            <span className="block text-base sm:text-xl font-normal mt-3 opacity-90">
              {t(description)}
            </span>
          </h1>
        </div>

        {/* Course Content */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-xl shadow-xl p-6 sm:p-10 space-y-8">
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
            <GradientButton
              label={t("course.applyNow")}
              onClick={() => setShowModal(true)}
              className="shadow-xl bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-base py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            />
          </div>
        </div>
      </div>

      {showModal && (
        <CourseApplyModal
          onClose={() => setShowModal(false)}
          courseName={t(title)}
        />
      )}
    </div>
  );
};

export default CourseDetails;
