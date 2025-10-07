import React from 'react';
import { motion } from 'framer-motion';

const DevJourney = () => {
  const milestones = [
    {
      phase: "Challenge Discovery",
      title: "NASA Space Apps 2025",
      description: "Encountered the Exoplanet Detection challenge requiring AI/ML models to analyze space telescope data",
      icon: "🚀",
      color: "from-blue-400 to-cyan-400",
      achievements: [
        "Studied NASA's exoplanet detection requirements",
        "Analyzed existing manual detection limitations", 
        "Researched Kepler and TESS mission data",
        "Identified opportunity for AI automation"
      ]
    },
    {
      phase: "System Design",
      title: "Council Architecture",
      description: "Designed revolutionary ensemble system with 5 specialized AI networks working democratically",
      icon: "🏛️",
      color: "from-purple-400 to-pink-400",
      achievements: [
        "Created 5 specialist AI architectures",
        "Designed democratic voting system",
        "Built custom loss functions for each specialist",
        "Established ensemble consensus rules"
      ]
    },
    {
      phase: "Data Pipeline",
      title: "Supreme Converter",
      description: "Built professional-grade preprocessing pipeline handling real telescope data from any format",
      icon: "🔧",
      color: "from-green-400 to-teal-400",
      achievements: [
        "7-phase data conversion system",
        "Universal format support (FITS, CSV, DAT)",
        "4-method period detection ensemble",
        "Advanced false positive filtering"
      ]
    },
    {
      phase: "AI Training",
      title: "Neural Networks",
      description: "Trained 5 specialist networks on NASA catalog parameters with custom loss functions",
      icon: "🧠",
      color: "from-yellow-400 to-orange-400",
      achievements: [
        "5000+ confirmed exoplanet training data",
        "Custom astronomical loss functions",
        "Specialist expertise optimization",
        "Real parameter distribution modeling"
      ]
    },
    {
      phase: "Testing & Validation",
      title: "Brutal Reality Tests",
      description: "Validated system on impossible test scenarios achieving 100% survival rate",
      icon: "💀",
      color: "from-red-400 to-pink-400",
      achievements: [
        "100% brutal reality survival",
        "100% false positive rejection",
        "Perfect binary star detection",
        "Instrumental artifact elimination"
      ]
    },
    {
      phase: "Mission Success",
      title: "NASA Recognition",
      description: "Successfully completed NASA Space Apps Challenge with revolutionary exoplanet detection system",
      icon: "🏆",
      color: "from-indigo-400 to-blue-400",
      achievements: [
        "NASA Space Apps Challenge completion",
        "Galactic Problem Solver certificate",
        "Professional-grade astronomical AI",
        "Open-source contribution to astronomy"
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
            🌌 Development Journey
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            From NASA challenge discovery to revolutionary AI system - the complete story 
            of creating professional-grade exoplanet detection technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:flex-row`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-black rounded-full border-4 border-white/20 flex items-center justify-center z-10">
                  <div className="text-lg">{milestone.icon}</div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-16 ml-16 md:ml-0' : 'md:pl-16 ml-16 md:ml-0'}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-br ${milestone.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}>
                    </div>
                    
                    <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{milestone.icon}</div>
                        <div>
                          <div className="text-sm text-gray-400 mb-1">{milestone.phase}</div>
                          <h3 className={`text-xl font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent`}>
                            {milestone.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {milestone.description}
                      </p>

                      <div>
                        <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                        <ul className="space-y-2">
                          {milestone.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 + achievementIndex * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-center text-gray-400 text-sm"
                            >
                              <span className={`w-2 h-2 bg-gradient-to-r ${milestone.color} rounded-full mr-3 flex-shrink-0`}></span>
                              {achievement}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-2/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8">
              🔗 Project Resources
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <a
                href="https://github.com/InfernusReal/Council-Of-Lords"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                <div className="text-2xl mr-3">💻</div>
                <div>
                  <div className="font-bold">GitHub Repository</div>
                  <div className="text-sm opacity-80">Complete source code & documentation</div>
                </div>
              </a>
              
              <a
                href="https://youtu.be/rJm8YlMURX8?si=VUtSrnuKrcgJbbqq"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
              >
                <div className="text-2xl mr-3">🎥</div>
                <div>
                  <div className="font-bold">Live Demo Video</div>
                  <div className="text-sm opacity-80">Working platform demonstration</div>
                </div>
              </a>
              
              <a
                href="https://www.spaceappschallenge.org/2025/find-a-team/perseverance5/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-2xl mr-3">🚀</div>
                <div>
                  <div className="font-bold">NASA Space Apps Project</div>
                  <div className="text-sm opacity-80">Official challenge submission</div>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-400/30 rounded-xl p-6 inline-block">
                <h4 className="text-lg font-bold text-yellow-400 mb-2">🌟 Impact & Recognition</h4>
                <p className="text-yellow-200 mb-2">
                  Successfully completed <span className="font-bold">NASA Space Apps Challenge 2025</span>
                </p>
                <p className="text-yellow-200/80 text-sm">
                  Creating professional-grade AI that democratizes exoplanet discovery for astronomers worldwide
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DevJourney;