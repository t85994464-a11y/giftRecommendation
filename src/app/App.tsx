import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AuthModal } from './components/AuthModal';
import { RecommendationForm } from './components/RecommendationForm';
import { GreetingCardSelector } from './components/GreetingCardSelector';
import { LetterTemplate } from './components/LetterTemplate';
import { GiftRecommendation } from './components/GiftRecommendation';
import { PackagingAnimation } from './components/PackagingAnimation';
import { FinalResult } from './components/FinalResult';

type Step = 'landing' | 'form' | 'card' | 'letter' | 'gift' | 'packaging' | 'result';

interface FormData {
  age: string;
  relation: string;
  occasion: string;
  hobbies: string;
  gender: string;
  budget: string;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState<Step>('landing');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');
  const [userName, setUserName] = useState('');
  
  const [formData, setFormData] = useState<FormData | null>(null);
  const [selectedCard, setSelectedCard] = useState('');
  const [recipientName, setRecipientName] = useState('');
  const [senderName, setSenderName] = useState('');
  const [personalMessage, setPersonalMessage] = useState<string | null>(null);
  const [selectedGift, setSelectedGift] = useState<any>(null);

  const handleGetStarted = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleSignIn = () => {
    setAuthMode('signin');
    setAuthModalOpen(true);
  };

  const handleSignUp = () => {
    setAuthMode('signup');
    setAuthModalOpen(true);
  };

  const handleAuthSuccess = (name: string) => {
    setUserName(name);
    setAuthModalOpen(false);
    setCurrentStep('form');
  };

  const handleFormComplete = (data: FormData) => {
    setFormData(data);
    setCurrentStep('card');
  };

  const handleCardComplete = (cardId: string, recipient: string, sender: string) => {
    setSelectedCard(cardId);
    setRecipientName(recipient);
    setSenderName(sender);
    setCurrentStep('letter');
  };

  const handleLetterComplete = (message: string | null, skipLetter: boolean) => {
    setPersonalMessage(message);
    setCurrentStep('gift');
  };

  const handleGiftComplete = (gift: any) => {
    setSelectedGift(gift);
    setCurrentStep('packaging');
  };

  const handlePackagingComplete = () => {
    setCurrentStep('result');
  };

  const handleStartOver = () => {
    setCurrentStep('landing');
    setFormData(null);
    setSelectedCard('');
    setRecipientName('');
    setSenderName('');
    setPersonalMessage(null);
    setSelectedGift(null);
  };

  return (
    <div className="min-h-screen">
      {currentStep === 'landing' && (
        <>
          <LandingPage
            onGetStarted={handleGetStarted}
            onSignIn={handleSignIn}
            onSignUp={handleSignUp}
          />
          <AuthModal
            isOpen={authModalOpen}
            onClose={() => setAuthModalOpen(false)}
            mode={authMode}
            onSuccess={handleAuthSuccess}
          />
        </>
      )}

      {currentStep === 'form' && (
        <RecommendationForm
          onComplete={handleFormComplete}
          onBack={() => setCurrentStep('landing')}
        />
      )}

      {currentStep === 'card' && formData && (
        <GreetingCardSelector
          onComplete={handleCardComplete}
          onBack={() => setCurrentStep('form')}
          occasion={formData.occasion}
        />
      )}

      {currentStep === 'letter' && (
        <LetterTemplate
          onComplete={handleLetterComplete}
          onBack={() => setCurrentStep('card')}
          recipientName={recipientName}
          senderName={senderName}
        />
      )}

      {currentStep === 'gift' && formData && (
        <GiftRecommendation
          onComplete={handleGiftComplete}
          onBack={() => setCurrentStep('letter')}
          formData={formData}
        />
      )}

      {currentStep === 'packaging' && selectedGift && (
        <PackagingAnimation
          gift={selectedGift}
          onComplete={handlePackagingComplete}
        />
      )}

      {currentStep === 'result' && selectedGift && (
        <FinalResult
          gift={selectedGift}
          cardId={selectedCard}
          message={personalMessage}
          recipientName={recipientName}
          senderName={senderName}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}
