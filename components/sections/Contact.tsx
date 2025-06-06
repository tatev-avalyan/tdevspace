'use client';
import { EnvironmentOutlined, LinkedinOutlined, FacebookOutlined, InstagramOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const { t } = useTranslation();

  return (
    <div className="min-h-[75vh] max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
        {t("contact.title")}
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Contact Form */}
        <div className="md:w-1/2 space-y-6 h-full">
          {submitted ? (
            <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-4 rounded-lg text-center">
              ✅{t("contact.success")}
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xoqgllzy"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              />
              <textarea
                name="message"
                placeholder="How can we help you?"
                rows={5}
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold text-base py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out"
              >
                {t("contact.form.submit")}
              </button>

            </form>
          )}
        </div>

        {/* Contact Info + Map */}
        <div className="md:w-1/2 space-y-6 text-sm text-gray-700 dark:text-gray-300 h-full">
          <div className="space-y-2">
            <div className="flex items-center gap-4 text-2xl">
              <a
                href="https://instagram.com/tdevspace"
                target="_blank"
              >
                <InstagramOutlined className="text-orange-400 w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/tdevspace.2025"
                target="_blank"
              >
                <FacebookOutlined className="text-orange-400 w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/107448219/admin/dashboard/"
                target="_blank"
              >
                <LinkedinOutlined className="text-orange-400 w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-3 text-white text-sm">
              <PhoneOutlined className="text-orange-400 w-5 h-5" />
              <a href="tel:+37494174874" className="hover:underline">+374 94 174 874</a>
            </div>
            <div className="flex items-center gap-3 text-white text-sm">
              <MailOutlined className="text-orange-400 w-5 h-5" />
              <a href="tatevavalyan050@gmail.com" className="hover:underline">tatevavalyan050@gmail.com</a>
            </div>

            <div className="flex items-center gap-3 text-white text-sm">
              <EnvironmentOutlined className="text-orange-400 w-5 h-5" />
              <p className='m-0'>4/36 Hatis Street, Abovyan, Armenia</p>
            </div>
          </div>
          <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600 shadow">
            <iframe
              title="TDevSpace Location"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1161924169353!2d44.6249817!3d40.2759134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041f2b88d8e33ab%3A0x6a42b3f12139c637!2s4%2F36%20Hatis%20St%2C%20Abovyan%2C%20Armenia!5e0!3m2!1sen!2sam!4v1717085555555"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
