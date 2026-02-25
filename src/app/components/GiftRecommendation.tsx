import { motion } from 'motion/react';
import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

interface Gift {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

interface GiftRecommendationProps {
  onComplete: (gift: Gift) => void;
  onBack: () => void;
  formData: any;
}

export function GiftRecommendation({ onComplete, onBack, formData }: GiftRecommendationProps) {
  const [selectedGift, setSelectedGift] = useState<Gift | null>(null);

  // Generate recommendations based on form data
  const gifts: Gift[] = [
    {
      id: '1',
      name: 'Luxury Watch',
      description: 'Elegant timepiece perfect for any occasion',
      price: '$250',
      image: 'https://images.unsplash.com/photo-1704961211864-b20364cade61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd2F0Y2h8ZW58MXx8fHwxNzcxOTM3Mzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'accessories',
    },
    {
      id: '2',
      name: 'Premium Headphones',
      description: 'High-quality sound for music lovers',
      price: '$180',
      image: 'https://images.unsplash.com/photo-1658927420987-488ade098001?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkcGhvbmVzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzE5Mjg5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'tech',
    },
    {
      id: '3',
      name: 'Designer Perfume',
      description: 'Exquisite fragrance that lasts all day',
      price: '$120',
      image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MjAwMDMyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'beauty',
    },
    {
      id: '4',
      name: 'Gold Necklace',
      description: 'Stunning jewelry piece for special moments',
      price: '$340',
      image: 'https://images.unsplash.com/photo-1643300866907-032b3baeeb1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdlbHJ5JTIwbmVja2xhY2V8ZW58MXx8fHwxNzcxOTc3NDk2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'jewelry',
    },
    {
      id: '5',
      name: 'Leather Wallet',
      description: 'Handcrafted leather wallet with RFID protection',
      price: '$85',
      image: 'https://images.unsplash.com/photo-1601592996763-f05c9c80a7f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWF0aGVyJTIwd2FsbGV0fGVufDF8fHx8MTc3MjAyOTM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'accessories',
    },
    {
      id: '6',
      name: 'Luxury Gift Box',
      description: 'Curated collection of premium items',
      price: '$200',
      image: 'https://images.unsplash.com/photo-1759563876829-47c081a2afd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBnaWZ0JTIwYm94fGVufDF8fHx8MTc3MjAwMDQzMnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'gift-sets',
    },
  ];

  const handleContinue = () => {
    if (selectedGift) {
      onComplete(selectedGift);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 px-6 py-3 rounded-full mb-4">
            <Sparkles className="text-purple-600" size={20} />
            <span className="text-purple-600">AI Recommendations</span>
          </div>
          <h2 className="text-4xl mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Perfect Gifts for {formData.relation}
          </h2>
          <p className="text-gray-600">
            Based on age {formData.age}, interests: {formData.hobbies}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {gifts.map((gift, index) => (
            <motion.div
              key={gift.id}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedGift(gift)}
              className={`cursor-pointer rounded-2xl overflow-hidden bg-white shadow-lg transition-all ${
                selectedGift?.id === gift.id ? 'ring-4 ring-purple-500 shadow-2xl' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={gift.image}
                  alt={gift.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                {selectedGift?.id === gift.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 right-4 bg-purple-600 text-white rounded-full px-4 py-2"
                  >
                    Selected ✓
                  </motion.div>
                )}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl">{gift.name}</h3>
                  <span className="text-purple-600">{gift.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{gift.description}</p>
                <div className="mt-3 inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs">
                  {gift.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex gap-4 max-w-2xl mx-auto"
        >
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            className="flex-1"
          >
            <ArrowLeft className="mr-2" size={18} />
            Back
          </Button>
          <Button
            onClick={handleContinue}
            disabled={!selectedGift}
            className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 disabled:opacity-50"
          >
            Continue to Packaging
            <ArrowRight className="ml-2" size={18} />
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
