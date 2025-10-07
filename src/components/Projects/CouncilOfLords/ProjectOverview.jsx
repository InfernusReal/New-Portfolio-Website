import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = () => {
  return (
    <section id="project-overview" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Revolutionary Exoplanet Detection System
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            The Council of Lords is a groundbreaking AI ensemble system that achieves professional-grade 
            exoplanet detection using actual NASA telescope data, revolutionizing astronomical discovery.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Project Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">🌌 The Challenge</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              NASA's Space Apps Challenge tasked participants with creating an AI/ML model to automatically 
              analyze large datasets from space-based exoplanet missions. Most existing exoplanets were 
              identified manually - we needed to change that.
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-6">⚔️ Our Solution</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We created an ensemble of 5 specialized AI networks, each trained on different aspects of 
              exoplanet detection. The "Council" votes democratically on each detection, achieving 
              superhuman accuracy while maintaining perfect false positive rejection.
            </p>
            
            <h3 className="text-2xl font-bold text-white mb-6">🧠 Innovation: Custom "Mavs" Paradigm</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I developed my own revolutionary AI paradigm called <span className="font-bold text-blue-400">"Mavs"</span> - 
              a specialized ensemble architecture that combines individual AI specialist networks with democratic 
              voting mechanisms. This paradigm revolutionizes how AI systems can collaborate to solve complex 
              astronomical challenges with unprecedented accuracy.
            </p>

            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-400/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-green-400 mb-2">🎯 Mission Accomplished</h4>
              <p className="text-green-200">
                Successfully competed in NASA Space Apps Challenge 2025, creating a system that 
                <span className="font-bold"> processes real telescope data</span> and achieves 
                <span className="font-bold"> professional astronomical standards</span>.
              </p>
            </div>
          </motion.div>

          {/* Achievement Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-purple-300">100% Brutal Reality Survival</h4>
                  <p className="text-purple-200/80">Perfect performance on impossible test scenarios</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-400/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-blue-300">100% False Positive Rejection</h4>
                  <p className="text-blue-200/80">Perfect detection of binary stars and systematic artifacts</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-yellow-300">Millisecond Processing</h4>
                  <p className="text-yellow-200/80">Instant analysis of real NASA telescope data</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 border border-green-400/30 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-2xl">🔭</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-green-300">Professional-Grade Pipeline</h4>
                  <p className="text-green-200/80">Handles Kepler, TESS, and ground-based telescope data</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* NASA Certificate Display */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">NASA Space Apps Challenge Recognition</h3>
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-8 max-w-6xl mx-auto">
            <div className="bg-white/5 rounded-lg p-4 inline-block mb-6">
              <img 
                src="/nasa/Screenshot 2025-10-05 222808.png" 
                alt="NASA Space Apps Challenge Certificate - Saif Malik"
                className="max-w-full h-auto rounded-lg shadow-2xl"
                style={{ maxHeight: '400px' }}
              />
            </div>
            
            <p className="text-blue-200 text-lg mb-2">
              Official NASA Space Apps Challenge 2025 Certificate
            </p>
            <p className="text-blue-200/80 text-sm mb-6">
              "Galactic Problem Solver" recognition for outstanding participation in addressing challenges we face on Earth and in space
            </p>
            
            {/* Embedded YouTube Video */}
            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">🎥 Live Platform Demonstration</h4>
              <div className="relative w-full max-w-4xl mx-auto" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/rJm8YlMURX8?si=VUtSrnuKrcgJbbqq"
                  title="Council of Lords - NASA Space Apps Challenge Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
                ></iframe>
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Watch the complete demonstration of the Council of Lords system processing real NASA telescope data
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectOverview;