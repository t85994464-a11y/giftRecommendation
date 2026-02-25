import { motion, useAnimation } from 'motion/react';
import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface PackagingAnimationProps {
  gift: any;
  onComplete: () => void;
}

type Stage = 'intro' | 'box-appear' | 'place-gift' | 'close-lid' | 'wrap-paper' | 'add-ribbon-1' | 'add-ribbon-2' | 'tie-bow' | 'final-touches' | 'complete';

export function PackagingAnimation({ gift, onComplete }: PackagingAnimationProps) {
  const [stage, setStage] = useState<Stage>('intro');
  
  const giftControls = useAnimation();
  const boxBottomControls = useAnimation();
  const boxLidControls = useAnimation();
  const paperControls = useAnimation();
  const ribbon1Controls = useAnimation();
  const ribbon2Controls = useAnimation();
  const bowControls = useAnimation();

  useEffect(() => {
    const animate = async () => {
      // Stage 1: Intro - Show gift
      setStage('intro');
      await giftControls.start({
        scale: [0, 1.1, 1],
        rotate: [0, 5, -5, 0],
        transition: { duration: 1, ease: 'easeOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 800));

      // Stage 2: Box appears from bottom
      setStage('box-appear');
      await boxBottomControls.start({
        y: [100, 0],
        opacity: [0, 1],
        transition: { duration: 0.8, ease: 'easeOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 400));

      // Stage 3: Gift goes into box
      setStage('place-gift');
      await giftControls.start({
        scale: [1, 0.7, 0.65],
        y: [0, 15],
        transition: { duration: 1, ease: 'easeInOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 500));

      // Stage 4: Lid closes
      setStage('close-lid');
      await boxLidControls.start({
        y: [- 150, 0],
        rotateX: [45, 0],
        opacity: [0, 1],
        transition: { duration: 1.2, ease: 'easeInOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 600));

      // Stage 5: Wrapping paper - unfolds naturally
      setStage('wrap-paper');
      await paperControls.start({
        scale: [0, 1],
        opacity: [0, 1],
        rotateZ: [90, 0],
        transition: { duration: 1.5, ease: 'easeOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 400));

      // Stage 6: First ribbon (vertical)
      setStage('add-ribbon-1');
      await ribbon1Controls.start({
        scaleY: [0, 1],
        opacity: [0, 1],
        transition: { duration: 0.8, ease: 'easeOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 300));

      // Stage 7: Second ribbon (horizontal)
      setStage('add-ribbon-2');
      await ribbon2Controls.start({
        scaleX: [0, 1],
        opacity: [0, 1],
        transition: { duration: 0.8, ease: 'easeOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 400));

      // Stage 8: Tie bow on top
      setStage('tie-bow');
      await bowControls.start({
        scale: [0, 1.3, 1],
        rotateZ: [180, 0],
        opacity: [0, 1],
        transition: { duration: 1, ease: 'easeOut' },
      });
      await new Promise(resolve => setTimeout(resolve, 500));

      // Stage 9: Final celebration
      setStage('final-touches');
      await Promise.all([
        boxBottomControls.start({
          y: [0, -15, 0],
          rotateZ: [0, -3, 3, 0],
          transition: { duration: 1.5, ease: 'easeInOut' },
        }),
        boxLidControls.start({
          y: [0, -15, 0],
          rotateZ: [0, -3, 3, 0],
          transition: { duration: 1.5, ease: 'easeInOut' },
        }),
      ]);

      setStage('complete');
      await new Promise(resolve => setTimeout(resolve, 2000));
      onComplete();
    };

    animate();
  }, [giftControls, boxBottomControls, boxLidControls, paperControls, ribbon1Controls, ribbon2Controls, bowControls, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated particles */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1000,
            y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 1000,
            opacity: 0,
          }}
          animate={{
            y: [null, typeof window !== 'undefined' ? Math.random() * window.innerHeight - 300 : Math.random() * 700],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        >
          <Sparkles className="text-white" size={20 + Math.random() * 25} />
        </motion.div>
      ))}

      <div className="relative">
        {/* Status text */}
        <motion.div
          key={stage}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-5xl text-white mb-4 font-bold"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {stage === 'intro' && '✨ Preparing your gift...'}
            {stage === 'box-appear' && '📦 Getting the box ready...'}
            {stage === 'place-gift' && '🎁 Placing gift carefully...'}
            {stage === 'close-lid' && '📋 Closing the box...'}
            {stage === 'wrap-paper' && '🎀 Wrapping with love...'}
            {stage === 'add-ribbon-1' && '🎗️ Adding ribbon...'}
            {stage === 'add-ribbon-2' && '🎗️ Decorating beautifully...'}
            {stage === 'tie-bow' && '🎀 Tying the perfect bow...'}
            {stage === 'final-touches' && '✨ Adding final touches...'}
            {stage === 'complete' && '🎉 Perfect! Your gift is ready!'}
          </motion.h2>
          <p className="text-white/90 text-xl">Making it extra special just for you</p>
        </motion.div>

        {/* Main packaging scene */}
        <div 
          className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center"
          style={{ perspective: '1500px' }}
        >
          {/* Gift Item (starts visible, then goes into box) */}
          <motion.div
            animate={giftControls}
            className="absolute z-20"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="w-60 h-60 rounded-xl shadow-2xl overflow-hidden">
              <img
                src={gift.image}
                alt={gift.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Box Bottom */}
          {(stage !== 'intro') && (
            <motion.div
              animate={boxBottomControls}
              className="absolute z-10"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative">
                {/* Main box structure */}
                <div className="w-80 h-48 bg-gradient-to-br from-amber-700 via-yellow-800 to-amber-900 rounded-lg shadow-2xl" style={{
                  boxShadow: 'inset 0 -10px 20px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.4)'
                }}>
                  {/* Box texture */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
                  }} />
                </div>
                {/* Box sides for 3D effect */}
                <div className="absolute top-0 -left-2 w-2 h-48 bg-gradient-to-r from-amber-900 to-amber-800" style={{ transform: 'rotateY(-10deg)' }} />
                <div className="absolute -bottom-2 left-0 w-80 h-2 bg-gradient-to-b from-amber-900 to-amber-950" style={{ transform: 'rotateX(10deg)' }} />
              </div>
            </motion.div>
          )}

          {/* Box Lid */}
          {(stage !== 'intro' && stage !== 'box-appear' && stage !== 'place-gift') && (
            <motion.div
              animate={boxLidControls}
              initial={{ y: -150, rotateX: 45, opacity: 0 }}
              className="absolute z-30"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative">
                <div className="w-80 h-12 bg-gradient-to-br from-amber-600 via-yellow-700 to-amber-800 rounded-t-lg shadow-2xl" style={{
                  boxShadow: '0 -5px 15px rgba(0,0,0,0.3), 0 10px 30px rgba(0,0,0,0.4)'
                }}>
                  {/* Lid texture */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)'
                  }} />
                </div>
              </div>
            </motion.div>
          )}

          {/* Wrapping Paper Overlay */}
          {(stage !== 'intro' && stage !== 'box-appear' && stage !== 'place-gift' && stage !== 'close-lid') && (
            <motion.div
              animate={paperControls}
              initial={{ scale: 0, opacity: 0, rotateZ: 90 }}
              className="absolute z-15"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div 
                className="w-80 h-64 rounded-lg"
                style={{
                  background: 'linear-gradient(135deg, #fecaca 0%, #fca5a5 25%, #fecaca 50%, #fca5a5 75%, #fecaca 100%)',
                  backgroundSize: '40px 40px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.2)',
                }}
              >
                {/* Paper pattern */}
                <div className="absolute inset-0 opacity-30" style={{
                  backgroundImage: 'radial-gradient(circle, #dc2626 2px, transparent 2px)',
                  backgroundSize: '30px 30px'
                }} />
                {/* Folded edges effect */}
                <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-red-300 to-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-t from-red-300 to-transparent opacity-50" />
              </div>
            </motion.div>
          )}

          {/* Ribbon 1 (Vertical) */}
          {(stage === 'add-ribbon-1' || stage === 'add-ribbon-2' || stage === 'tie-bow' || stage === 'final-touches' || stage === 'complete') && (
            <motion.div
              animate={ribbon1Controls}
              initial={{ scaleY: 0, opacity: 0 }}
              className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ transformOrigin: 'center', transformStyle: 'preserve-3d' }}
            >
              <div 
                className="w-16 h-96"
                style={{
                  background: 'linear-gradient(to right, #b91c1c, #dc2626, #ef4444, #dc2626, #b91c1c)',
                  boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.3), inset 2px 0 4px rgba(255,255,255,0.3), 0 0 15px rgba(220, 38, 38, 0.5)',
                  borderRadius: '2px',
                }}
              />
            </motion.div>
          )}

          {/* Ribbon 2 (Horizontal) */}
          {(stage === 'add-ribbon-2' || stage === 'tie-bow' || stage === 'final-touches' || stage === 'complete') && (
            <motion.div
              animate={ribbon2Controls}
              initial={{ scaleX: 0, opacity: 0 }}
              className="absolute z-40 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90"
              style={{ transformOrigin: 'center', transformStyle: 'preserve-3d' }}
            >
              <div 
                className="w-16 h-96"
                style={{
                  background: 'linear-gradient(to right, #b91c1c, #dc2626, #ef4444, #dc2626, #b91c1c)',
                  boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.3), inset 2px 0 4px rgba(255,255,255,0.3), 0 0 15px rgba(220, 38, 38, 0.5)',
                  borderRadius: '2px',
                }}
              />
            </motion.div>
          )}

          {/* Bow */}
          {(stage === 'tie-bow' || stage === 'final-touches' || stage === 'complete') && (
            <motion.div
              animate={bowControls}
              initial={{ scale: 0, rotateZ: 180, opacity: 0 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="relative">
                {/* Left loop */}
                <motion.div
                  animate={{ rotateY: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -left-20 -top-10 w-20 h-20 rounded-full transform -rotate-45"
                  style={{
                    background: 'radial-gradient(ellipse at top left, #ef4444, #dc2626, #b91c1c)',
                    boxShadow: 'inset -3px -3px 8px rgba(0,0,0,0.4), inset 3px 3px 8px rgba(255,255,255,0.2), 0 5px 15px rgba(220, 38, 38, 0.6)',
                  }}
                />
                
                {/* Right loop */}
                <motion.div
                  animate={{ rotateY: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.1 }}
                  className="absolute -right-20 -top-10 w-20 h-20 rounded-full transform rotate-45"
                  style={{
                    background: 'radial-gradient(ellipse at top right, #ef4444, #dc2626, #b91c1c)',
                    boxShadow: 'inset 3px -3px 8px rgba(0,0,0,0.4), inset -3px 3px 8px rgba(255,255,255,0.2), 0 5px 15px rgba(220, 38, 38, 0.6)',
                  }}
                />
                
                {/* Center knot */}
                <div 
                  className="w-16 h-16 rounded-full relative"
                  style={{
                    background: 'radial-gradient(circle at 30% 30%, #ef4444, #dc2626, #b91c1c)',
                    boxShadow: 'inset -4px -4px 8px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(255,255,255,0.2), 0 8px 20px rgba(220, 38, 38, 0.7)',
                  }}
                >
                  {/* Knot highlight */}
                  <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-white/30 blur-sm" />
                </div>
                
                {/* Ribbon tails */}
                <div className="absolute left-1/2 top-full -translate-x-3/4 mt-2">
                  <div 
                    className="w-8 h-28 transform rotate-12 rounded-b-lg"
                    style={{
                      background: 'linear-gradient(to bottom, #dc2626, #ef4444, #dc2626)',
                      boxShadow: 'inset -2px 0 4px rgba(0,0,0,0.3), 2px 2px 8px rgba(0,0,0,0.3)',
                      clipPath: 'polygon(0 0, 100% 0, 80% 100%, 50% 85%, 20% 100%)'
                    }}
                  />
                </div>
                <div className="absolute left-1/2 top-full translate-x-1/4 mt-2">
                  <div 
                    className="w-8 h-28 transform -rotate-12 rounded-b-lg"
                    style={{
                      background: 'linear-gradient(to bottom, #dc2626, #ef4444, #dc2626)',
                      boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.3), -2px 2px 8px rgba(0,0,0,0.3)',
                      clipPath: 'polygon(0 0, 100% 0, 80% 100%, 50% 85%, 20% 100%)'
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Completion sparkles burst */}
          {stage === 'complete' && (
            <>
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 z-50"
                  initial={{ scale: 0, x: 0, y: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.5, 0],
                    x: Math.cos((i * Math.PI * 2) / 20) * 300,
                    y: Math.sin((i * Math.PI * 2) / 20) * 300,
                    opacity: [1, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 2,
                    ease: 'easeOut',
                  }}
                >
                  <Sparkles className="text-yellow-300" size={40} />
                </motion.div>
              ))}
            </>
          )}
        </div>

        {/* Progress dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex justify-center gap-3"
        >
          {['intro', 'box-appear', 'place-gift', 'close-lid', 'wrap-paper', 'add-ribbon-1', 'add-ribbon-2', 'tie-bow', 'final-touches', 'complete'].map((s, index) => {
            const stageOrder = ['intro', 'box-appear', 'place-gift', 'close-lid', 'wrap-paper', 'add-ribbon-1', 'add-ribbon-2', 'tie-bow', 'final-touches', 'complete'];
            const currentIndex = stageOrder.indexOf(stage);
            const isActive = index <= currentIndex;

            return (
              <motion.div
                key={s}
                className={`w-3 h-3 rounded-full ${isActive ? 'bg-white' : 'bg-white/30'}`}
                animate={index === currentIndex ? { scale: [1, 1.5, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
