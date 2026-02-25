import React from 'react';

export default function CookiePolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-lg text-gray-700 mb-4">
        Giftora uses cookies to enhance your experience. Cookies help us remember your preferences and improve our services.
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li className="mb-2">Cookies are used for analytics and personalization.</li>
        <li className="mb-2">You can manage cookie settings in your browser.</li>
        <li className="mb-2">We do not use cookies for advertising or tracking.</li>
      </ul>
      <p className="text-lg text-gray-700 mt-4">
        For more information, contact us at hello@giftora.com.
      </p>
    </div>
  );
}