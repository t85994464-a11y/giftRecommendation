import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    review: 'Absolutely love Giftora! The AI recommendations were spot-on, and the packaging animation was delightful. Made gift-giving so much easier!',
    avatar: '👩‍💼',
    date: 'February 2026'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    review: 'The personalized letters and greeting cards are such a nice touch. My mom was so happy with her birthday gift package!',
    avatar: '👨‍💻',
    date: 'February 2026'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 4,
    review: 'Great service! The gift recommendations matched my budget perfectly. The virtual packaging experience was beautiful and fun.',
    avatar: '👩‍🎨',
    date: 'January 2026'
  },
  {
    id: 4,
    name: 'David Park',
    rating: 5,
    review: 'This app is a game-changer! No more stress about finding the perfect gift. The whole experience is smooth and enjoyable.',
    avatar: '👨‍🔬',
    date: 'January 2026'
  },
  {
    id: 5,
    name: 'Jessica Williams',
    rating: 5,
    review: 'I used Giftora for my anniversary and it helped me find the most thoughtful gift. The letter template made it extra special!',
    avatar: '👩‍🏫',
    date: 'December 2025'
  },
  {
    id: 6,
    name: 'Alex Thompson',
    rating: 4,
    review: 'Very impressed with the variety of options and the beautiful presentation. Will definitely use again for future occasions!',
    avatar: '👨‍🎤',
    date: 'December 2025'
  },
];

export function ReviewsSection() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
              >
                <Star className="text-amber-400 fill-amber-400" size={32} />
              </motion.div>
            ))}
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            Loved by Thousands
          </h2>
          <p className="text-xl text-gray-600">See what our happy customers have to say</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-lg border-2 border-emerald-100 relative"
            >
              <Quote className="absolute top-6 right-6 text-emerald-200" size={40} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-5xl">{review.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-lg">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`${
                        i < review.rating
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-gray-300'
                      }`}
                      size={20}
                    />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">{review.review}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-lg px-8 py-4 rounded-full shadow-lg border-2 border-emerald-100">
            <div className="flex -space-x-2">
              {['👨', '👩', '👴', '👵', '👦', '👧'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-200 to-teal-200 flex items-center justify-center border-2 border-white text-xl"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="ml-4 text-left">
              <p className="text-lg font-semibold text-emerald-700">50,000+ Happy Customers</p>
              <p className="text-sm text-gray-600">Join our growing community</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
