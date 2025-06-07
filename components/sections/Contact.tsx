'use client';
import { EnvironmentOutlined, LinkedinOutlined, FacebookOutlined, InstagramOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation();
  const [status, setStatus] = useState('');
  const [formData, setFormData] = useState({
    to: '',
    phone: '',
    name: '',
    text: ''
  });
  console.log(status, "status")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    console.log(formData);
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: formData.to,
        subject: "Contact us",
        phone: formData.phone,
        text: `Name: ${formData.name} send contact email ${formData.text}`,
      }),
    });

    if (res.ok) {
      setStatus('Email sent successfully!');
    } else {
      setStatus('Failed to send email.');
    }

    setSubmitted(true)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-[75vh] max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold  text-center mb-8">
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
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.name')}
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                required
              />
              <input
                type="email"
                name="to"
                value={formData.to}
                onChange={handleChange}
                placeholder={t('contact.form.email')}
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t('contact.form.phone')}
                className="w-full px-4 py-3 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
              />
              <textarea
                name="message"
                value={formData.text}
                onChange={handleChange}
                placeholder={t('contact.form.message')}
                rows={5}
                className="w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-800 text-gray-800 dark: border-gray-300 dark:border-gray-600"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400  font-semibold text-white py-3 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out"
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
            <div className="flex items-center gap-3  text-sm">
              <PhoneOutlined className="text-orange-400 w-5 h-5" />
              <a href="tel:+37494174874" className="hover:underline">+374 94 174 874</a>
            </div>
            <div className="flex items-center gap-3  text-sm">
              <MailOutlined className="text-orange-400 w-5 h-5" />
              <a href="mailto:tatevavalyan050@gmail.com" className="hover:underline">tatevavalyan050@gmail.com</a>
            </div>

            <div className="flex items-center gap-3  text-sm">
              <EnvironmentOutlined className="text-orange-400 w-5 h-5" />
              <p className='m-0'>{t("contact.info.address")}</p>
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
              src="https://www.google.com/maps?q=40.275156,44.624629&z=15&output=embed"            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
