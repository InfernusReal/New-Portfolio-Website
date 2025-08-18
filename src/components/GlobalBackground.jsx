import { motion } from 'framer-motion';

const GlobalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Large Blue Flowing Wave */}
      <motion.div
        className="absolute top-10 left-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
        animate={{ 
          x: [-100, 200, -100],
          y: [-50, 50, -50],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 15,
          ease: "easeInOut"
        }}
      />
      
      {/* Medium Blue Wave */}
      <motion.div
        className="absolute top-1/3 right-10 w-64 h-64 bg-blue-400/12 rounded-full blur-2xl"
        animate={{ 
          x: [100, -150, 100],
          y: [30, -30, 30],
          scale: [1, 0.7, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 12,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Small Blue Ripple */}
      <motion.div
        className="absolute bottom-20 left-1/4 w-48 h-48 bg-blue-600/6 rounded-full blur-xl"
        animate={{ 
          x: [-80, 120, -80],
          y: [20, -40, 20],
          scale: [0.9, 1.3, 0.9]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18,
          ease: "easeInOut",
          delay: 5
        }}
      />

      {/* White Flowing Waves */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-80 h-80 bg-white/4 rounded-full blur-2xl"
        animate={{ 
          x: [-120, 180, -120],
          y: [-40, 60, -40],
          scale: [1, 0.6, 1]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 20,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.div
        className="absolute bottom-32 right-1/4 w-72 h-72 bg-white/6 rounded-full blur-3xl"
        animate={{ 
          x: [150, -200, 150],
          y: [-60, 40, -60],
          scale: [0.7, 1.1, 0.7]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 16,
          ease: "easeInOut",
          delay: 7
        }}
      />

      {/* Small White Ripples */}
      <motion.div
        className="absolute top-20 right-1/3 w-32 h-32 bg-white/8 rounded-full blur-lg"
        animate={{ 
          x: [60, -90, 60],
          y: [25, -25, 25],
          scale: [1.2, 0.8, 1.2]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
};

export default GlobalBackground;
