'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

// ✅ Constant data
import { AVAILABLE_COURSES } from "@/constants/courses";

const CourseApplyModal = ({ onClose, courseName }: { onClose: () => void; courseName?: string }) => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    to: '',
    phone: '',
    name: '',
    course: courseName || "",
  });
  const [status, setStatus] = useState('');
  console.log(status)
  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log(formData);
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: formData.to,
        subject: "Course Apply",
        phone: formData.phone,
        text: `Name: ${formData.name} applied to ${formData.course}`,
      }),
    });

    if (res.ok) {
      setStatus('Email sent successfully!');
    } else {
      setStatus('Failed to send email.');
    }

    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log(e.target.value, "e.target.value")
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div
        ref={modalRef}
        className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl shadow-xl max-w-md w-full p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-800 dark:hover:text-white"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-center mb-6">
          {courseName ? t('apply.headingWithCourse') : t('apply.heading')}
        </h2>

        {submitted ? (
          <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-4 rounded-lg text-center">
            ✅ {t('apply.success')}
          </div>
        ) : (
          <form
            action="https://formspree.io/f/xoqgllzy"
            method="POST"
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input type="hidden" name="subject" value={`${t('apply.subject')} - ${courseName || ''}`} />
            <input
              type="text"
              name="name"
              placeholder={t('apply.name')}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              required
            />
            <input
              type="email"
              name="to"
              placeholder={t('apply.email')}
              value={formData.to}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t('apply.phone')}
              className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
            />
            {courseName ? (
              <input
                type="text"
                name="course"
                readOnly
                value={courseName}
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              />
            ) : (
              <select
                name="course"
                required
                value={formData.course}
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                onChange={handleSelectChange}
              >
                <option value="">{t('apply.selectCourse')}</option>
                {AVAILABLE_COURSES.map((course, index) => (
                  <option key={index} value={course}>
                    {t(course)}
                  </option>
                ))}
              </select>
            )}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-base py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
            >
              {t('apply.submit')}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CourseApplyModal;
