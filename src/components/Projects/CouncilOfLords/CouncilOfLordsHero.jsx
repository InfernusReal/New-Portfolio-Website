import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CouncilOfLordsHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pb-16">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        
        {/* NASA Space theme background */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto text-center">
        {/* NASA Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full">
            <div className="w-8 h-8 mr-3">
              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400" fill="currentColor">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
            <span className="text-blue-300 font-semibold">NASA SPACE APPS CHALLENGE CONTENDER</span>
            <div className="w-8 h-8 ml-3">
              <svg viewBox="0 0 24 24" className="w-full h-full text-blue-400" fill="currentColor">
                <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            COUNCIL OF LORDS
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto"
        >
          NASA-Native AI Ensemble for Professional Exoplanet Detection
        </motion.p>

        {/* Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12"
        >
          <div className="bg-gradient-to-r from-yellow-400/10 to-orange-400/10 backdrop-blur-sm border border-yellow-400/30 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">🏆 LEGENDARY BREAKTHROUGH</h3>
            <p className="text-yellow-200 text-lg">
              <span className="font-bold text-yellow-300">100% Accuracy</span> on brutal reality test scenarios with 
              <span className="font-bold text-yellow-300"> PERFECT false positive rejection</span>
            </p>
            <p className="text-yellow-200/80 mt-2">
              Revolutionary AI ensemble detecting exoplanets in milliseconds with professional-grade precision
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="https://youtu.be/rJm8YlMURX8?si=VUtSrnuKrcgJbbqq"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
          >
            🎥 Watch Live Demo
          </a>
          
          <a
            href="https://github.com/InfernusReal/Council-Of-Lords"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            View GitHub Repository
          </a>
          
          <a
            href="https://www.spaceappschallenge.org/2025/find-a-team/perseverance5/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            NASA Space Apps Project
          </a>
        </motion.div>

        {/* Tech Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-2">🧠</div>
            <h4 className="text-lg font-semibold text-white mb-2">5 AI Specialists</h4>
            <p className="text-gray-400 text-sm">Ensemble of specialized neural networks for perfect detection</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-2">🔭</div>
            <h4 className="text-lg font-semibold text-white mb-2">NASA Data Ready</h4>
            <p className="text-gray-400 text-sm">Processes real Kepler, TESS, and ground-based telescope data</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="text-lg font-semibold text-white mb-2">Millisecond Detection</h4>
            <p className="text-gray-400 text-sm">Instant professional-grade exoplanet classification</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => {
          document.querySelector('#project-overview')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full bg-black/20 backdrop-blur-sm flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
        <p className="text-white/60 text-sm mt-2 rotate-90 origin-center whitespace-nowrap">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
};

export default CouncilOfLordsHero;