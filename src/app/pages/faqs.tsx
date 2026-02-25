import React from 'react';

export default function FAQs() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li className="mb-4">
          <strong>How does Giftora recommend gifts?</strong>
          <br />
          Our AI analyzes recipient preferences and occasion details to suggest personalized gifts.
        </li>
        <li className="mb-4">
          <strong>Can I customize greeting cards and letters?</strong>
          <br />
          Yes! You can personalize cards and letters for every gift.
        </li>
        <li className="mb-4">
          <strong>Is Giftora free to use?</strong>
          <br />
          Giftora offers both free and premium features. Explore and enjoy!
        </li>
        <li className="mb-4">
          <strong>How do I contact support?</strong>
          <br />
          Email us at hello@giftora.com or use the contact section in the footer.
        </li>
      </ul>
    </div>
  );
}