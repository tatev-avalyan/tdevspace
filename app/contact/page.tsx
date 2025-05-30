'use client';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="max-w-xl mx-auto py-12 space-y-6">
      <h2 className="text-3xl font-bold mb-6 text-brand">Request a Callback</h2>
      {submitted ? (
        <p className="text-green-600 dark:text-green-400 font-medium">
          Thank you! We will get back to you as soon as possible.
        </p>
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
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
          />
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 bg-brand text-white rounded-md hover:bg-brand-light transition-all duration-300 transform hover:scale-105"
          >
            Send Request
          </button>
        </form>
      )}

      <div className="pt-6 border-t border-gray-300 dark:border-gray-700 space-y-4 text-sm text-gray-600 dark:text-gray-400">
        <p><strong>Email:</strong> <a href="mailto:tatevavalyan050@gmail.com" className="text-brand hover:underline">tatevavalyan050@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+37400000000" className="text-brand hover:underline">+374 00 000000</a></p>
        <div>
          <strong>Location:</strong>
          <div className="mt-2 w-full h-64 rounded-md overflow-hidden border border-gray-300 dark:border-gray-700">
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
}
