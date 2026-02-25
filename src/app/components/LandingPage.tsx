import { motion } from 'motion/react';
import { Gift, Sparkles, Heart, Star, Zap, Award, Users, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

interface LandingPageProps {
  onGetStarted: () => void;
  onSignIn: () => void;
  onSignUp: () => void;
}

export function LandingPage({ onGetStarted, onSignIn, onSignUp }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              scale: 0,
              opacity: 0,
            }}
            animate={{
              y: [null, Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000)],
              scale: [0, 1, 0],
              opacity: [0, 0.7, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 5 === 0 ? (
              <Sparkles className="text-amber-400" size={24} />
            ) : i % 5 === 1 ? (
              <Heart className="text-coral-400" size={24} />
            ) : i % 5 === 2 ? (
              <Star className="text-emerald-400" size={24} />
            ) : i % 5 === 3 ? (
              <Gift className="text-teal-400" size={24} />
            ) : (
              <Zap className="text-cyan-400" size={24} />
            )}
          </motion.div>
        ))}
      </div>

      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10 flex justify-between items-center px-8 py-6 bg-white/40 backdrop-blur-lg border-b border-emerald-100"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ 
              rotate: [0, 15, -15, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Gift className="text-white" size={28} />
            </div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl"
            />
          </motion.div>
          <div>
            <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
              Giftora
            </span>
            <p className="text-xs text-gray-600">Thoughtful Gifting Made Easy</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            onClick={onSignIn}
            className="hover:bg-emerald-100 hover:text-emerald-700 transition-all"
          >
            Sign In
          </Button>
          <Button 
            onClick={onSignUp} 
            className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:shadow-lg hover:shadow-emerald-500/50 transition-all"
          >
            Get Started
          </Button>
        </div>
      </motion.header>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-full mb-6"
          >
            <Sparkles className="text-emerald-600" size={20} />
            <span className="text-emerald-700 font-medium">AI-Powered Gift Discovery</span>
          </motion.div>

          <motion.h1
            className="text-7xl md:text-8xl mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover{' '}
            <motion.span
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% auto' }}
            >
              Perfect Gifts
            </motion.span>
            <br />
            With Heart ❤️
          </motion.h1>
          
          <motion.p
            className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Let our AI create personalized gift recommendations with beautiful greeting cards,
            heartfelt letters, and stunning virtual packaging.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={onGetStarted}
              className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-xl px-14 py-8 rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all transform hover:scale-105"
            >
              <Gift className="mr-3" size={28} />
              Start Your Journey
              <ArrowRight className="ml-3" size={24} />
            </Button>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-4 gap-6 mt-24"
        >
          {[
            {
              icon: <Sparkles className="text-amber-500" size={36} />,
              title: 'Smart AI',
              description: 'Advanced algorithms analyze preferences for perfect matches',
              color: 'from-amber-400 to-orange-400'
            },
            {
              icon: <Heart className="text-rose-500" size={36} />,
              title: 'Personal Touch',
              description: 'Custom greeting cards and heartfelt letter templates',
              color: 'from-rose-400 to-pink-400'
            },
            {
              icon: <Gift className="text-emerald-500" size={36} />,
              title: 'Virtual Magic',
              description: 'Watch gifts wrapped with stunning 3D animations',
              color: 'from-emerald-400 to-teal-400'
            },
            {
              icon: <Award className="text-cyan-500" size={36} />,
              title: 'Premium Quality',
              description: 'Curated selection of high-quality gift options',
              color: 'from-cyan-400 to-blue-400'
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-white/50"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                className="mb-5"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl mb-3 font-semibold">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              <div className={`mt-4 h-1 bg-gradient-to-r ${feature.color} rounded-full`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mt-24 grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '50K+', label: 'Happy Customers', icon: <Users size={32} /> },
            { number: '100K+', label: 'Gifts Recommended', icon: <Gift size={32} /> },
            { number: '4.9/5', label: 'Average Rating', icon: <Star size={32} /> },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl p-8"
            >
              <div className="flex justify-center mb-3 text-emerald-600">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.5 }}
        className="relative z-10 bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white mt-24"
      >
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                  <Gift className="text-white" size={28} />
                </div>
                <span className="text-3xl font-bold">Giftora</span>
              </div>
              <p className="text-emerald-200 leading-relaxed mb-6">
                Making every gift special with AI-powered recommendations, 
                personalized cards, and beautiful presentation. Your one-stop 
                solution for thoughtful gifting.
              </p>
              <div className="flex gap-4">
                <a href="/facebook" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors" aria-label="Facebook">
                  <span className="text-sm">F</span>
                </a>
                <a href="/twitter" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors" aria-label="Twitter">
                  <span className="text-sm">T</span>
                </a>
                <a href="/instagram" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors" aria-label="Instagram">
                  <span className="text-sm">I</span>
                </a>
                <a href="/linkedin" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors" aria-label="LinkedIn">
                  <span className="text-sm">L</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/about" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowRight size={16} />
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/how-it-works" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowRight size={16} />
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="/gift-guide" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowRight size={16} />
                    Gift Guide
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowRight size={16} />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/faqs" className="text-emerald-200 hover:text-white transition-colors flex items-center gap-2">
                    <ArrowRight size={16} />
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-emerald-200">
                  <Mail size={18} />
                  <span>info@giftora.com</span>
                </li>
                <li className="flex items-center gap-3 text-emerald-200">
                  <Phone size={18} />
                  <span>Phone Number</span>
                </li>
                <li className="flex items-center gap-3 text-emerald-200">
                  <MapPin size={18} />
                  <span>Location</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-emerald-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-emerald-300">© 2026 Giftora. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-emerald-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="text-emerald-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="/cookie-policy" className="text-emerald-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
