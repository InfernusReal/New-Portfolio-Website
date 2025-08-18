import React, { useState } from 'react';
import { motion } from 'framer-motion';

const technologies = [
  { 
    name: 'React',
    description: 'Component-based library for building interactive user interfaces',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
        <ellipse cx="12" cy="12" rx="7" ry="3" stroke="currentColor" strokeWidth="1" fill="none"/>
        <ellipse cx="12" cy="12" rx="7" ry="3" transform="rotate(60 12 12)" stroke="currentColor" strokeWidth="1" fill="none"/>
        <ellipse cx="12" cy="12" rx="7" ry="3" transform="rotate(120 12 12)" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    )
  },
  { 
    name: 'TypeScript',
    description: 'JavaScript with static type definitions for better code quality',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <text x="12" y="15" fontSize="8" fill="currentColor" textAnchor="middle" fontWeight="bold">TS</text>
      </svg>
    )
  },
  { 
    name: 'Node.js',
    description: 'JavaScript runtime for building scalable server-side applications',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 8v8l-10 6L2 16V8l10-6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 8v8M8 6l8 4M8 18l8-4" stroke="currentColor" strokeWidth="0.8"/>
      </svg>
    )
  },
  { 
    name: 'Express',
    description: 'Fast, minimalist web framework for Node.js applications',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18M3 8l18 4M3 16l18-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="21" cy="12" r="1" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: 'Next.js',
    description: 'React framework with SSR, routing, and optimization built-in',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 8l12 12M16 8v8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  { 
    name: 'Python',
    description: 'Versatile programming language for web development and AI',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M7 4c-1.5 0-3 1-3 3v2h6V8h4v2c0 2-1.5 3-3 3H7v2h4c1.5 0 3 1 3 3v2h-6v-1H4v1c0 2 1.5 3 3 3h6c1.5 0 3-1 3-3v-2h-6v-1h8v-1c0-2-1.5-3-3-3h-4V9h6V7c0-2-1.5-3-3-3H7z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    )
  },
  { 
    name: 'MongoDB',
    description: 'NoSQL database for flexible, document-based data storage',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 5 5.5 5 10c0 7 7 12 7 12s7-5 7-12c0-4.5-3-8-7-8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    )
  },
  { 
    name: 'Mongoose',
    description: 'Object modeling library for MongoDB and Node.js',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 5 5.5 5 10c0 7 7 12 7 12s7-5 7-12c0-4.5-3-8-7-8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 6v12M8 8l8 4M8 16l8-4" stroke="currentColor" strokeWidth="0.8"/>
      </svg>
    )
  },
  { 
    name: 'MySQL',
    description: 'Popular relational database management system',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 8h8M8 12h6M8 16h4" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        <circle cx="18" cy="6" r="1" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: 'Sequelize',
    description: 'Promise-based ORM for PostgreSQL, MySQL, and SQLite',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M7 7l10 10M17 7l-10 10" stroke="currentColor" strokeWidth="1"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    )
  },
  { 
    name: 'AWS',
    description: 'Cloud computing services for hosting and infrastructure',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M3 12h18M5 8l7-4 7 4M5 16l7 4 7-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="8" y="10" width="8" height="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      </svg>
    )
  },
  { 
    name: 'Docker',
    description: 'Containerization platform for consistent deployments',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="8" width="3" height="3" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="6" y="8" width="3" height="3" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="10" y="8" width="3" height="3" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="6" y="5" width="3" height="3" stroke="currentColor" strokeWidth="1" fill="none"/>
        <rect x="10" y="5" width="3" height="3" stroke="currentColor" strokeWidth="1" fill="none"/>
        <path d="M14 10c4 0 8-2 8-5M14 10v8c0 2-1 3-3 3H5c-2 0-3-1-3-3v-8h12z" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    )
  },
  { 
    name: 'GraphQL',
    description: 'Query language for APIs with flexible data fetching',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 22,8 22,16 12,22 2,16 2,8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 9V6M15 10.5l2.6-1.5M15 13.5l2.6 1.5M12 15v3M9 13.5l-2.6 1.5M9 10.5l-2.6-1.5" stroke="currentColor" strokeWidth="1"/>
      </svg>
    )
  },
  { 
    name: 'Tailwind',
    description: 'Utility-first CSS framework for rapid UI development',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M6 9c2.5-6 7.5-6 10 0 1.5 3.6-1.5 6-4.5 4.5C9 14.5 6 12 6 15c0 3 3 3 3 3h9" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    )
  },
  { 
    name: 'GSAP',
    description: 'High-performance animation library for web development',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 8l8 8M16 8l-8 8" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1" fill="none"/>
      </svg>
    )
  },
  { 
    name: 'Framer Motion',
    description: 'React animation library for smooth, declarative animations',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <rect x="14" y="14" width="6" height="6" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M10 7h4v10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 10v4h10" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  { 
    name: 'Puppeteer',
    description: 'Node.js library for browser automation and web scraping',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 11v10M8 14l4-3 4 3M6 18l6-4 6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="6" r="1" fill="currentColor"/>
        <circle cx="15" cy="6" r="1" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: 'Vite',
    description: 'Lightning-fast build tool for modern web development',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 8v8l-10 6L2 16V8l10-6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 2v20M6 5l12 7M18 5L6 12" stroke="currentColor" strokeWidth="1"/>
      </svg>
    )
  },
  { 
    name: 'Git',
    description: 'Distributed version control system for tracking code changes',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L12 9L15 12M12 9V21M3 7L12 3L21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="6" cy="10" r="1" fill="currentColor"/>
        <circle cx="18" cy="10" r="1" fill="currentColor"/>
        <circle cx="12" cy="15" r="1" fill="currentColor"/>
      </svg>
    )
  },
  { 
    name: 'GitHub',
    description: 'Platform for version control and collaborative development',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none">
        <path d="M15 22V18C15 16 16 14 18 14C20 14 21 16 21 18V22M9 22V18C9 16 8 14 6 14C4 14 3 16 3 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 18C9 15 10 12 12 12C14 12 15 15 15 18" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 3V7M8 5L12 7L16 5" stroke="currentColor" strokeWidth="1"/>
      </svg>
    )
  }
];

const Tooltip = ({ children, content, title, isVisible }) => (
  <div className="relative">
    {children}
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.8 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-3 bg-black/95 backdrop-blur-sm text-white text-sm rounded-xl border border-white/20 w-64 text-center z-50 shadow-xl"
      >
        <div className="font-black text-white mb-1 text-base tracking-wide" style={{ fontFamily: 'serif' }}>{title}</div>
        <div className="text-gray-300 text-xs leading-relaxed">{content}</div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/95"></div>
      </motion.div>
    )}
  </div>
);

const StackLogos = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const backgroundCircles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    isBlue: Math.random() > 0.5
  }));

  const floatingDots = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 15 + 10
  }));

  const shines = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 8 + 4
  }));

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Black Water Wave Effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden">
        <motion.div
          className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-black via-gray-900/50 to-transparent"
          animate={{
            background: [
              "linear-gradient(to top, #000 0%, rgba(17, 24, 39, 0.5) 50%, transparent 100%)",
              "linear-gradient(to top, #000 20%, rgba(17, 24, 39, 0.7) 60%, transparent 100%)",
              "linear-gradient(to top, #000 0%, rgba(17, 24, 39, 0.5) 50%, transparent 100%)"
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <motion.path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="rgba(0, 0, 0, 0.8)"
            animate={{
              d: [
                "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z",
                "M0,80 C150,40 350,120 600,80 C850,40 1050,100 1200,80 L1200,120 L0,120 Z",
                "M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </div>

      {/* Floating Blue Dots */}
      <div className="absolute inset-0">
        {floatingDots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute w-2 h-2 bg-blue-400/60 rounded-full blur-sm"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
            }}
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              opacity: [0.3, 0.8, 0.4, 0.3],
              scale: [1, 1.5, 0.8, 1]
            }}
            transition={{
              duration: dot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: dot.delay
            }}
          />
        ))}
      </div>

      {/* Blurred Shines */}
      <div className="absolute inset-0">
        {shines.map((shine) => (
          <motion.div
            key={shine.id}
            className="absolute w-32 h-32 rounded-full blur-3xl"
            style={{
              left: `${shine.x}%`,
              top: `${shine.y}%`,
              background: shine.id % 2 === 0 
                ? "radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)"
            }}
            animate={{
              scale: [1, 1.3, 0.8, 1],
              opacity: [0.2, 0.6, 0.3, 0.2],
              x: [0, 30, -20, 0],
              y: [0, -20, 25, 0]
            }}
            transition={{
              duration: shine.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shine.delay
            }}
          />
        ))}
      </div>

      {/* Subtle Background Circles */}
      <div className="absolute inset-0">
        {backgroundCircles.slice(0, 3).map((circle) => (
          <motion.div
            key={circle.id}
            className={`absolute rounded-full ${
              circle.isBlue ? 'bg-blue-500/3' : 'bg-white/2'
            } border ${
              circle.isBlue ? 'border-blue-500/5' : 'border-white/3'
            } blur-3xl`}
            style={{
              width: circle.size * 0.5,
              height: circle.size * 0.5,
              left: `${circle.x}%`,
              top: `${circle.y}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.05, 0.95, 1],
              rotate: [0, 90, 180]
            }}
            transition={{
              duration: circle.duration * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Technologies I work with
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cutting-edge tools and frameworks that power modern digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-6 items-center justify-items-center max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.03,
                ease: [0.25, 0.25, 0, 1]
              }}
              className="relative"
            >
              <Tooltip 
                content={tech.description} 
                title={tech.name}
                isVisible={hoveredTech === tech.name}
              >
                <motion.div
                  className="group flex flex-col items-center p-4 bg-gray-800/40 backdrop-blur-sm border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 cursor-pointer w-20 h-20 rounded-xl"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(55, 65, 81, 0.6)",
                    borderColor: "rgba(59, 130, 246, 0.5)",
                    boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setHoveredTech(tech.name)}
                  onHoverEnd={() => setHoveredTech(null)}
                >
                  <motion.div
                    className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-8 h-8 flex items-center justify-center scale-75">
                      {tech.icon}
                    </div>
                  </motion.div>
                </motion.div>
              </Tooltip>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackLogos;
