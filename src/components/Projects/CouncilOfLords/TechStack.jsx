import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      icon: "🧠",
      color: "from-purple-400 to-pink-400",
      techs: [
        { name: "TensorFlow 2.x", description: "Deep learning framework for custom neural networks" },
        { name: "Custom Neural Networks", description: "5 specialized architectures built from scratch" },
        { name: "Ensemble Learning", description: "Democratic voting system with weighted consensus" },
        { name: "Custom Loss Functions", description: "Exoplanet-specific optimization algorithms" }
      ]
    },
    {
      category: "Astronomical Processing",
      icon: "🔭",
      color: "from-blue-400 to-cyan-400",
      techs: [
        { name: "AstroPy", description: "Professional astronomical data handling" },
        { name: "Box Least Squares", description: "Transit-optimized period detection" },
        { name: "Lomb-Scargle", description: "Frequency domain analysis for uneven data" },
        { name: "Phase Folding", description: "Signal amplification through temporal stacking" }
      ]
    },
    {
      category: "Data Science & Analysis",
      icon: "📊",
      color: "from-green-400 to-teal-400",
      techs: [
        { name: "NumPy", description: "High-performance numerical computing" },
        { name: "SciPy", description: "Scientific computing and signal processing" },
        { name: "Pandas", description: "Data manipulation and NASA catalog handling" },
        { name: "Scikit-learn", description: "Feature scaling and preprocessing utilities" }
      ]
    },
    {
      category: "Signal Processing",
      icon: "📡",
      color: "from-red-400 to-orange-400",
      techs: [
        { name: "Fourier Analysis", description: "Frequency domain decomposition" },
        { name: "Autocorrelation", description: "Statistical period detection methods" },
        { name: "Gaussian Filtering", description: "Noise reduction and smoothing" },
        { name: "Polynomial Detrending", description: "Systematic removal algorithms" }
      ]
    },
    {
      category: "Data Formats & I/O",
      icon: "💾",
      color: "from-yellow-400 to-orange-400",
      techs: [
        { name: "FITS Files", description: "Professional astronomical data format" },
        { name: "CSV/DAT/TXT", description: "Universal data format support" },
        { name: "JSON/Pickle", description: "Model weights and configuration storage" },
        { name: "HDF5", description: "Large dataset efficient storage" }
      ]
    },
    {
      category: "Development & Testing",
      icon: "⚙️",
      color: "from-indigo-400 to-blue-400",
      techs: [
        { name: "Python 3.8+", description: "Modern Python development environment" },
        { name: "Jupyter Notebooks", description: "Interactive development and analysis" },
        { name: "Git Version Control", description: "Collaborative development workflow" },
        { name: "Automated Testing", description: "Comprehensive validation pipeline" }
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
            🛠️ Technology Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Professional-grade astronomical computing stack combining cutting-edge AI with 
            established scientific computing libraries for reliable exoplanet detection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {technologies.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300`}>
              </div>
              
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group-hover:transform group-hover:scale-105 h-full">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{category.icon}</div>
                  <h3 className={`text-lg font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.techs.map((tech, techIndex) => (
                    <motion.div
                      key={techIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + techIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="border-l-2 border-white/20 pl-4"
                    >
                      <h4 className="text-white font-semibold text-sm mb-1">
                        {tech.name}
                      </h4>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {tech.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-400/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              🏗️ System Architecture
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-xl p-6 mb-4">
                  <div className="text-3xl mb-2">📥</div>
                  <h4 className="text-lg font-semibold text-blue-300">Data Ingestion</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• Raw telescope data (any format)</li>
                  <li>• FITS file processing</li>
                  <li>• Quality assessment</li>
                  <li>• Automatic format detection</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-500/20 rounded-xl p-6 mb-4">
                  <div className="text-3xl mb-2">🔧</div>
                  <h4 className="text-lg font-semibold text-purple-300">Processing Pipeline</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• 7-phase conversion system</li>
                  <li>• Signal analysis & validation</li>
                  <li>• False positive detection</li>
                  <li>• NASA catalog formatting</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500/20 rounded-xl p-6 mb-4">
                  <div className="text-3xl mb-2">🏛️</div>
                  <h4 className="text-lg font-semibold text-green-300">AI Ensemble</h4>
                </div>
                <ul className="text-gray-400 text-sm space-y-1">
                  <li>• 5 specialist neural networks</li>
                  <li>• Democratic voting system</li>
                  <li>• Consensus validation</li>
                  <li>• Final classification</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6 inline-block">
                <h4 className="text-lg font-bold text-cyan-400 mb-2">⚡ Performance Specs</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-cyan-300 font-semibold">Processing Speed:</span>
                    <span className="text-cyan-200"> &lt;1ms detection</span>
                  </div>
                  <div>
                    <span className="text-cyan-300 font-semibold">Memory Usage:</span>
                    <span className="text-cyan-200"> &lt;2GB RAM</span>
                  </div>
                  <div>
                    <span className="text-cyan-300 font-semibold">Model Size:</span>
                    <span className="text-cyan-200"> ~50MB total</span>
                  </div>
                  <div>
                    <span className="text-cyan-300 font-semibold">Dependencies:</span>
                    <span className="text-cyan-200"> Standard Python</span>
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

export default TechStack;