'use client';
import { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-[75vh] max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10 text-center">
        Get in Touch with TDevSpace
      </h2>

      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Contact Form */}
        <div className="md:w-1/2 space-y-6 h-full">
          {submitted ? (
            <div className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 p-4 rounded-lg text-center">
              ✅ Thank you! We’ll get back to you soon.
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
                  className="w-full py-2 px-6 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-foreground-light"
                >
                  Send Request
                </button>
            </form>
          )}
        </div>

        {/* Contact Info + Map */}
        <div className="md:w-1/2 space-y-6 text-sm text-gray-700 dark:text-gray-300 h-full">
          <div className="space-y-2">
            <p><strong>Email:</strong> <a href="mailto:tatevavalyan050@gmail.com" className="text-dark hover:underline">tatevavalyan050@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+37494174874" className="text-dark hover:underline">+374 94 174 874</a></p>
            <p><strong>Address:</strong> 4/36 Hatis Street, Abovyan, Armenia</p>
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
