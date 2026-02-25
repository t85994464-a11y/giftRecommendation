import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from './components/LandingPage';
import { ThemedPage } from './components/ThemedPage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage 
          onGetStarted={() => {}}
          onSignIn={() => {}}
          onSignUp={() => {}}
        />} />
  <Route path="/about" element={<ThemedPage title="About Giftora" description="Giftora is your trusted companion for thoughtful gifting. Our AI-powered platform helps you discover the perfect gift for any occasion, offering personalized recommendations, beautiful greeting cards, and heartfelt letter templates." />} />
  <Route path="/how-it-works" element={<ThemedPage title="How It Works" description="Tell us about the recipient and occasion. Our AI recommends personalized gifts, cards, and letters. Preview virtual packaging and select your favorite options. Send or print your gift with a personal touch!" />} />
  <Route path="/gift-guide" element={<ThemedPage title="Gift Guide" description="Explore our curated gift guides for every occasion and recipient. Whether it's birthdays, anniversaries, holidays, or just because, Giftora has you covered with unique and thoughtful ideas." />} />
  <Route path="/blog" element={<ThemedPage title="Giftora Blog" description="Stay updated with the latest gifting trends, tips, and stories. Our blog features expert advice, creative ideas, and inspiring experiences from the Giftora community." />} />
  <Route path="/faqs" element={<ThemedPage title="Frequently Asked Questions" description="Find answers to common questions about Giftora, our AI recommendations, customization options, and support." />} />
  <Route path="/privacy-policy" element={<ThemedPage title="Privacy Policy" description="Your privacy is important to us. Giftora is committed to protecting your personal information and ensuring transparency in how we use it." />} />
  <Route path="/terms-of-service" element={<ThemedPage title="Terms of Service" description="By using Giftora, you agree to our terms and conditions. Please read them carefully to understand your rights and responsibilities." />} />
  <Route path="/cookie-policy" element={<ThemedPage title="Cookie Policy" description="Giftora uses cookies to enhance your experience. Cookies help us remember your preferences and improve our services." />} />
      </Routes>
    </BrowserRouter>
  );
}
