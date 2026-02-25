import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-lg text-gray-700 mb-4">
        Your privacy is important to us. Giftora is committed to protecting your personal information and ensuring transparency in how we use it.
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li className="mb-2">We do not share your data with third parties.</li>
        <li className="mb-2">All information is securely stored and encrypted.</li>
        <li className="mb-2">You can request data deletion at any time.</li>
      </ul>
      <p className="text-lg text-gray-700 mt-4">
        For more details, contact us at hello@giftora.com.
      </p>
    </div>
  );
}