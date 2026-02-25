import React from 'react';

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-lg text-gray-700 mb-4">
        By using Giftora, you agree to our terms and conditions. Please read them carefully to understand your rights and responsibilities.
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li className="mb-2">Use Giftora for lawful purposes only.</li>
        <li className="mb-2">Respect intellectual property and privacy of others.</li>
        <li className="mb-2">We reserve the right to update terms at any time.</li>
      </ul>
      <p className="text-lg text-gray-700 mt-4">
        For questions, contact us at hello@giftora.com.
      </p>
    </div>
  );
}