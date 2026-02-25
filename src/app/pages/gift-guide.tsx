import React from 'react';

export default function GiftGuide() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6">Gift Guide</h1>
      <p className="text-lg text-gray-700 mb-4">
        Explore our curated gift guides for every occasion and recipient. Whether it's birthdays, anniversaries, holidays, or just because, Giftora has you covered with unique and thoughtful ideas.
      </p>
      <ul className="list-disc pl-6 text-lg text-gray-700">
        <li className="mb-2">Birthday Gifts</li>
        <li className="mb-2">Anniversary Surprises</li>
        <li className="mb-2">Holiday Specials</li>
        <li className="mb-2">Gifts for Friends & Family</li>
        <li className="mb-2">Corporate & Appreciation Gifts</li>
      </ul>
    </div>
  );
}