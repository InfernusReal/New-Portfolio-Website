
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section data-section="cta" className="relative py-32 bg-black overflow-hidden">
      {/* Flowing Wavy Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
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

        <motion.div
          className="absolute bottom-40 left-16 w-40 h-40 bg-white/5 rounded-full blur-xl"
          animate={{ 
            x: [-70, 110, -70],
            y: [35, -50, 35],
            scale: [0.9, 1.4, 0.9]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 14,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Tiny Floating Particles */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-16 h-16 bg-blue-300/10 rounded-full blur-md"
          animate={{ 
            x: [-30, 50, -30],
            y: [-20, 30, -20],
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut",
            delay: 6
          }}
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Main CTA */}
          <div className="space-y-8 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Ready to build
              <br />
              <span className="text-gray-500">something amazing?</span>
            </h2>
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Let's turn your ideas into reality. I'm available for new projects and excited to collaborate with forward-thinking teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-4 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-100 transition-all duration-200 group w-auto"
                >
                  Start a project
                  <svg 
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.button>
              </Link>
              
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-8 py-4 border border-gray-700 text-white rounded-lg font-semibold text-lg hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200"
                >
                  View my work
                </motion.button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-8">
              <motion.a
                href="https://github.com/InfernusReal"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-gray-700 hover:bg-gray-800/70 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  GitHub
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                </div>
              </motion.a>

              <motion.a
                href="https://wa.me/923238507347?text=Hello%20Saif!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [-5, 5, -5, 0],
                  transition: { duration: 0.6 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 bg-green-600/20 backdrop-blur border border-green-600/30 rounded-xl hover:border-green-500 hover:bg-green-600/30 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-green-400 group-hover:text-green-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  WhatsApp
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.a>
            </div>
          </div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              {
                label: 'Email',
                value: 'hello@portfolio.dev',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )
              },
              {
                label: 'LinkedIn',
                value: '/in/portfolio',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M16 8A6 6 0 0 1 22 14V21H18V14A2 2 0 0 0 14 14V21H10V9H14V11A4 4 0 0 1 16 8Z" stroke="currentColor" strokeWidth="1.5"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )
              },
              {
                label: 'Schedule',
                value: 'Cal.com/portfolio',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="1.5"/>
                    <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all duration-200 cursor-pointer"
              >
                <div className="text-gray-400 mb-3 flex justify-center">
                  {contact.icon}
                </div>
                <div className="text-sm text-gray-500 mb-1">{contact.label}</div>
                <div className="text-white font-medium">{contact.value}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mt-12"
          >
            Currently available for freelance projects and full-time opportunities
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
