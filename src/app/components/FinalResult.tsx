import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Gift, Heart, Download, Share2, RotateCcw, Mail, MessageSquare, Star } from 'lucide-react';
import { FeedbackForm } from './FeedbackForm';
import { ReviewsSection } from './ReviewsSection';

interface FinalResultProps {
  gift: any;
  cardId: string;
  message: string | null;
  recipientName: string;
  senderName: string;
  onStartOver: () => void;
}

export function FinalResult({ gift, cardId, message, recipientName, senderName, onStartOver }: FinalResultProps) {
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-lg border-b border-emerald-100 sticky top-0 z-50 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Gift className="text-white" size={24} />
              </div>
            </motion.div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
              Giftora
            </span>
          </div>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => setFeedbackOpen(true)}
              className="hover:bg-emerald-100"
            >
              <MessageSquare size={18} className="mr-2" />
              Feedback
            </Button>
            <Button
              onClick={onStartOver}
              className="bg-gradient-to-r from-emerald-600 to-cyan-600"
            >
              <RotateCcw size={18} className="mr-2" />
              New Gift
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Success Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl">
              <Gift className="text-white" size={48} />
            </div>
          </motion.div>
          <h1 className="text-6xl mb-4 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Your Gift is Perfect!
          </h1>
          <p className="text-gray-600 text-2xl">Everything is beautifully packaged and ready to share</p>
        </motion.div>

        {/* Gift Package Display */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border-4 border-emerald-100 mb-12"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {/* Wrapped Gift */}
            <motion.div
              whileHover={{ scale: 1.05, rotateY: 10 }}
              transition={{ type: 'spring' }}
              className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 shadow-xl relative overflow-hidden"
              style={{ perspective: '1000px' }}
            >
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-3xl" />
              
              <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                <Gift className="text-rose-600" size={28} />
                Your Gift
              </h3>
              
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-red-200 to-rose-300 rounded-2xl blur-xl opacity-50" />
                <div className="relative h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={gift.image}
                    alt={gift.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Ribbon overlay */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-12 -translate-x-1/2 bg-gradient-to-b from-red-500 to-red-600 opacity-80" />
                  <div className="absolute left-0 right-0 top-1/2 h-12 -translate-y-1/2 bg-gradient-to-r from-red-500 to-red-600 opacity-80" />
                  {/* Bow */}
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-lg" />
                </div>
              </div>
              
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-2">{gift.name}</h4>
                <p className="text-gray-600 mb-3">{gift.description}</p>
                <div className="inline-block bg-rose-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                  {gift.price}
                </div>
              </div>
            </motion.div>

            {/* Greeting Card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
              className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                <Mail className="text-amber-600" size={28} />
                Greeting Card
              </h3>
              
              <div className="bg-white rounded-2xl p-6 shadow-inner mb-4 min-h-[320px] flex flex-col justify-center border-4 border-amber-200">
                <div className="text-center mb-4">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-2xl font-bold mb-3">Dear {recipientName},</h4>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Wishing you joy and happiness on this special occasion. 
                    May every moment be filled with love and beautiful memories."
                  </p>
                </div>
                <div className="text-center mt-6 pt-6 border-t-2 border-amber-200">
                  <p className="text-gray-600 flex items-center justify-center gap-2">
                    With love, <span className="font-semibold">{senderName}</span> ❤️
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Personal Letter */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring' }}
              className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8 shadow-xl"
            >
              <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-2">
                <Heart className="text-emerald-600" size={28} />
                {message ? 'Personal Letter' : 'No Letter'}
              </h3>
              
              {message ? (
                <div className="bg-white rounded-2xl p-6 shadow-inner min-h-[320px] max-h-[320px] overflow-y-auto border-4 border-emerald-200">
                  <pre className="whitespace-pre-wrap font-serif text-gray-700 leading-relaxed text-sm">
                    {message}
                  </pre>
                </div>
              ) : (
                <div className="bg-white rounded-2xl p-6 shadow-inner min-h-[320px] flex items-center justify-center border-4 border-emerald-200">
                  <div className="text-center text-gray-400">
                    <Heart size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="italic">No letter added</p>
                    <p className="text-sm mt-2">The gift speaks for itself ✨</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          <Button
            size="lg"
            variant="outline"
            className="py-8 text-lg border-2 border-emerald-300 hover:bg-emerald-50"
            onClick={() => alert('Download feature coming soon!')}
          >
            <Download className="mr-2" size={24} />
            Download PDF
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="py-8 text-lg border-2 border-teal-300 hover:bg-teal-50"
            onClick={() => alert('Share via email feature coming soon!')}
          >
            <Mail className="mr-2" size={24} />
            Share via Email
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="py-8 text-lg border-2 border-cyan-300 hover:bg-cyan-50"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: 'Check out my gift!',
                  text: `I found the perfect gift: ${gift.name}`,
                }).catch(() => alert('Share feature coming soon!'));
              } else {
                alert('Share feature coming soon!');
              }
            }}
          >
            <Share2 className="mr-2" size={24} />
            Share
          </Button>
          
          <Button
            size="lg"
            className="py-8 text-lg bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 shadow-lg hover:shadow-emerald-500/50"
            onClick={onStartOver}
          >
            <RotateCcw className="mr-2" size={24} />
            Create Another Gift
          </Button>
        </motion.div>

        {/* Rate Your Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-white via-amber-50 to-yellow-50 rounded-3xl p-10 shadow-xl border-4 border-amber-100 text-center mb-16"
        >
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
            How was your experience?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">Your feedback helps us improve</p>
          
          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3, 4, 5].map((rating) => (
              <motion.button
                key={rating}
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => alert(`Thank you for rating ${rating} stars!`)}
                className="group"
              >
                <Star
                  size={48}
                  className="text-gray-300 group-hover:text-amber-400 group-hover:fill-amber-400 transition-colors"
                />
              </motion.button>
            ))}
          </div>

          <Button
            onClick={() => setFeedbackOpen(true)}
            variant="outline"
            className="border-2 border-amber-400 hover:bg-amber-50 px-8 py-6 text-lg"
          >
            <MessageSquare className="mr-2" size={20} />
            Leave Detailed Feedback
          </Button>
        </motion.div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Floating elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: typeof window !== 'undefined' ? window.innerHeight + 100 : 1000,
              rotate: 0,
            }}
            animate={{
              y: -100,
              rotate: 360,
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: 'linear',
            }}
          >
            {i % 4 === 0 ? (
              <Heart className="text-pink-300 opacity-40" size={20 + Math.random() * 25} />
            ) : i % 4 === 1 ? (
              <Gift className="text-emerald-300 opacity-40" size={20 + Math.random() * 25} />
            ) : i % 4 === 2 ? (
              <Star className="text-amber-300 opacity-40" size={20 + Math.random() * 25} />
            ) : (
              <div className="text-3xl opacity-40">✨</div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Feedback Form Modal */}
      <FeedbackForm isOpen={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </div>
  );
}
