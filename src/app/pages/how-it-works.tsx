import React from 'react';

export default function HowItWorks() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">How It Works</h1>
      <ol className="list-decimal pl-6 text-lg text-gray-700 mb-4">
        <li className="mb-2">Tell us about the recipient and occasion.</li>
        <li className="mb-2">Our AI recommends personalized gifts, cards, and letters.</li>
        <li className="mb-2">Preview virtual packaging and select your favorite options.</li>
        <li className="mb-2">Send or print your gift with a personal touch!</li>
      </ol>
      <p className="text-lg text-gray-700">
        Giftora makes gifting simple, smart, and heartfelt.
      </p>
    </div>
  );
}