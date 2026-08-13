'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const customEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: customEase,
      delay: 0.2,
    },
  },
};

const letterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: customEase,
      delay: i * 0.04,
    },
  }),
};

const underlineVariants = {
  hidden: {
    scaleX: 0,
    opacity: 0,
  },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: customEase,
      delay: 0.7,
    },
  },
};

const pulseTransition = {
  duration: 2,
  ease: 'easeInOut' as const,
  repeat: Infinity,
  repeatDelay: 0.5,
};

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const firmName = 'Shreya Gupta & Co.';

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
          style={{ width: '100vw', height: '100vh' }}
          variants={containerVariants}
          initial="visible"
          exit="exit"
        >
          <div className="flex flex-col items-center">
            {/* Firm name with letter-by-letter reveal */}
            <motion.div
              className="flex overflow-hidden"
              animate={{ scale: [1, 1.02, 1] }}
              transition={pulseTransition}
            >
              <h1 className="font-heading text-3xl tracking-wide text-primary sm:text-4xl md:text-5xl">
                {firmName.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    custom={index}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{ whiteSpace: 'pre' }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>
            </motion.div>

            {/* Animated underline */}
            <motion.div
              className="mt-4 h-[2px] w-24 origin-center bg-secondary sm:w-32"
              variants={underlineVariants}
              initial="hidden"
              animate="visible"
            />

            {/* Subtle tagline dot animation */}
            <motion.div
              className="mt-6 flex gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="block h-1.5 w-1.5 rounded-full bg-secondary/60"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
