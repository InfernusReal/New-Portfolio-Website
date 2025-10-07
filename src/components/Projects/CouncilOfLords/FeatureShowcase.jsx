import React from 'react';
import { motion } from 'framer-motion';

const FeatureShowcase = () => {
  const features = [
    {
      title: "Supreme Telescope Converter",
      description: "Revolutionary preprocessing powerhouse that transforms raw telescope data into clean NASA catalog parameters",
      icon: "🔧",
      color: "from-blue-400 to-cyan-400",
      phases: [
        "Data cleaning & quality assessment",
        "Systematic trend removal",
        "Stellar variability removal", 
        "4-method period detection",
        "Transit characterization",
        "False positive detection",
        "NASA catalog conversion"
      ]
    },
    {
      title: "V-Shape vs U-Shape Detection",
      description: "Revolutionary binary star identification through eclipse curvature analysis",
      icon: "📐",
      color: "from-purple-400 to-pink-400",
      phases: [
        "Transit/eclipse region identification",
        "Curvature calculation at eclipse bottom",
        "Sharp V-shapes = Binary stars",
        "Smooth U-shapes = Exoplanets",
        "Physics-based threshold detection",
        "Perfect binary rejection"
      ]
    },
    {
      title: "Secondary Eclipse Detection",
      description: "Smoking gun identification of binary systems through phase 0.5 eclipses",
      icon: "🌙",
      color: "from-yellow-400 to-orange-400",
      phases: [
        "Data folding at detected period",
        "Secondary eclipse window analysis",
        "Phase 0.5 dimming detection",
        "Signal-to-noise validation",
        "Definitive binary confirmation",
        "False positive elimination"
      ]
    },
    {
      title: "Instrumental Correlation Analysis",
      description: "Comprehensive detection of spacecraft and systematic artifacts",
      icon: "🛰️",
      color: "from-green-400 to-teal-400",
      phases: [
        "Known systematic period database",
        "Kepler, TESS, Spitzer correlation",
        "5% tolerance matching",
        "Instrumental artifact flagging",
        "Systematic contamination removal",
        "Clean signal isolation"
      ]
    },
    {
      title: "4-Method Period Detection",
      description: "Ensemble approach using four independent period finding algorithms",
      icon: "⚡",
      color: "from-red-400 to-pink-400",
      phases: [
        "Box Least Squares (BLS)",
        "Autocorrelation analysis",
        "Transit timing method",
        "Lomb-Scargle periodogram",
        "Weighted average consensus",
        "Robust period determination"
      ]
    },
    {
      title: "Enhanced Council Voting",
      description: "Intelligent weighted voting system with consensus-aware penalties",
      icon: "🏛️",
      color: "from-indigo-400 to-blue-400",
      phases: [
        "Dynamic specialist weights",
        "Signal-based adjustments",
        "Consensus strength analysis",
        "Smart penalty application",
        "Multi-path decision logic",
        "Conservative final verdict"
      ]
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
            🚀 Revolutionary Feature Showcase
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Advanced technical innovations that enable the Council of Lords to achieve 
            professional-grade astronomical performance on real telescope data.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}>
              </div>
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{feature.icon}</div>
                  <div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent mb-2`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-4">🔧 Process Phases:</h4>
                  <ul className="space-y-2">
                    {feature.phases.map((phase, phaseIndex) => (
                      <motion.li
                        key={phaseIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + phaseIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center text-gray-400 text-sm"
                      >
                        <span className={`w-2 h-2 bg-gradient-to-r ${feature.color} rounded-full mr-3 flex-shrink-0`}></span>
                        {phase}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technical Achievement Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              💎 Technical Innovation Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">🔬</div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Signal Analysis</h4>
                <p className="text-gray-400 text-sm">
                  Advanced physics-based detection vs parameter cuts with real astronomical understanding
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">🧠</div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">AI Innovation</h4>
                <p className="text-gray-400 text-sm">
                  Custom loss functions and ensemble intelligence for superhuman astronomical judgment
                </p>
              </div>
              
              <div className="text-center">
                <div className="text-3xl mb-4">⚡</div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Real-Time Processing</h4>
                <p className="text-gray-400 text-sm">
                  Millisecond analysis of professional telescope data with instant deployment capability
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-xl p-6 inline-block">
                <h4 className="text-lg font-bold text-yellow-400 mb-2">🏆 Performance Transformation</h4>
                <p className="text-yellow-200">
                  From <span className="font-bold">~50% survival</span> to <span className="font-bold">100% legendary performance</span>
                </p>
                <p className="text-yellow-200/80 text-sm mt-1">
                  Revolutionary technical breakthroughs achieving astronomical AI supremacy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcase;