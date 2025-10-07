import React from 'react';
import { motion } from 'framer-motion';

const AISpecialists = () => {
  const specialists = [
    {
      name: "CELESTIAL ORACLE",
      role: "Cosmic Pattern Recognition Specialist",
      expertise: "Deep celestial pattern analysis and cosmic signal interpretation",
      icon: "🔮",
      color: "from-purple-400 to-pink-400",
      specialty: "Exceptional at identifying genuine exoplanet transits",
      performance: "99.9% confidence on clear exoplanets",
      architecture: "Multi-layered dense network with cosmic-tuned activation functions"
    },
    {
      name: "ATMOSPHERIC WARRIOR",
      role: "Atmospheric Signature Detection Expert",
      expertise: "Planetary atmosphere analysis and transit characterization",
      icon: "🌬️",
      color: "from-blue-400 to-cyan-400",
      specialty: "Expert at characterizing transit signatures",
      performance: "99.8% confidence on gas giants",
      architecture: "Dense neural network optimized for atmospheric signal processing"
    },
    {
      name: "BACKYARD GENIUS",
      role: "Amateur Astronomy Data Specialist",
      expertise: "Ground-based telescope data and modest equipment optimization",
      icon: "🏠",
      color: "from-green-400 to-teal-400",
      specialty: "Outstanding performance with noisy data",
      performance: "Excellent false positive rejection",
      architecture: "Robust network designed for noisy, ground-based observations"
    },
    {
      name: "CHAOS MASTER",
      role: "Non-Linear Dynamics and Complex Signal Expert",
      expertise: "Chaotic stellar systems and complex orbital mechanics",
      icon: "🌀",
      color: "from-red-400 to-orange-400",
      specialty: "Expert at complex multi-body systems",
      performance: "Advanced non-linear signal processing",
      architecture: "Advanced non-linear network with chaos-theory inspired design"
    },
    {
      name: "COSMIC CONDUCTOR",
      role: "Harmonic Analysis and Frequency Domain Expert",
      expertise: "Spectral analysis and harmonic signal processing",
      icon: "🎵",
      color: "from-yellow-400 to-orange-400",
      specialty: "Exceptional harmonic analysis",
      performance: "Superior performance on periodic signals",
      architecture: "Unique harmonic activation functions and frequency-domain optimization"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            🏛️ The Council Members
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Meet the five specialized AI networks that form the Council of Lords. Each specialist 
            brings unique expertise to achieve unprecedented exoplanet detection accuracy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {specialists.map((specialist, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${specialist.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}>
              </div>
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{specialist.icon}</div>
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${specialist.color} bg-clip-text text-transparent mb-2`}>
                    {specialist.name}
                  </h3>
                  <p className="text-gray-300 font-semibold text-sm">
                    {specialist.role}
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-white font-semibold mb-2">🎯 Expertise</h4>
                    <p className="text-gray-400 text-sm">
                      {specialist.expertise}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">⚡ Specialty</h4>
                    <p className="text-gray-400 text-sm">
                      {specialist.specialty}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">📊 Performance</h4>
                    <p className="text-gray-400 text-sm">
                      {specialist.performance}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-2">🧠 Architecture</h4>
                    <p className="text-gray-400 text-sm">
                      {specialist.architecture}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Voting System */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              🗳️ Democratic Ensemble Voting System
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-indigo-300 mb-4">How the Council Decides</h4>
                <ul className="space-y-3">
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-semibold">Individual Analysis:</span> Each specialist analyzes NASA catalog parameters
                    </div>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-semibold">Confidence Scoring:</span> Individual confidence scores calculated (0-1 scale)
                    </div>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-semibold">Democratic Vote:</span> Binary votes cast: EXOPLANET or NOT_EXOPLANET
                    </div>
                  </li>
                  <li className="flex items-start text-gray-300">
                    <span className="w-2 h-2 bg-pink-400 rounded-full mr-3 mt-2"></span>
                    <div>
                      <span className="font-semibold">Final Verdict:</span> Majority consensus with weighted confidence
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-purple-300 mb-4">Consensus Rules</h4>
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-400/30 rounded-lg p-4">
                    <div className="font-semibold text-green-400">≥60% EXOPLANET votes</div>
                    <div className="text-green-200 text-sm">Final verdict = EXOPLANET</div>
                  </div>
                  <div className="bg-red-500/10 border border-red-400/30 rounded-lg p-4">
                    <div className="font-semibold text-red-400">≤40% EXOPLANET votes</div>
                    <div className="text-red-200 text-sm">Final verdict = NOT_EXOPLANET</div>
                  </div>
                  <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-4">
                    <div className="font-semibold text-yellow-400">40-60% EXOPLANET votes</div>
                    <div className="text-yellow-200 text-sm">Final verdict = UNCERTAIN</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AISpecialists;