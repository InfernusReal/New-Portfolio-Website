
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M8 12h8M8 16h6M8 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Full-Stack Development',
    description: 'End-to-end web applications built with modern frameworks. From React frontends to Node.js backends, I craft seamless digital experiences.',
    features: ['React/Next.js', 'Node.js/Express', 'Database Design', 'API Development']
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by machine learning. From predictive models to automated workflows, I bring AI capabilities to your projects.',
    features: ['Python/TensorFlow', 'Data Analysis', 'Model Training', 'API Integration']
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5"/>
        <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'User-centered design that converts. I create intuitive interfaces that not only look beautiful but drive engagement and business results.',
    features: ['Design Systems', 'User Research', 'Prototyping', 'Design Implementation']
  }
];

const Features = () => {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Services that drive
            <br />
            <span className="text-gray-500">real results</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I partner with ambitious teams to build products that users love and businesses need.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8 h-full hover:border-gray-700 transition-all duration-300">
                {/* Icon */}
                <div className="text-gray-400 group-hover:text-white transition-colors duration-200 mb-6">
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                        <span className="text-sm text-gray-500 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="w-8 h-8 border border-gray-600 rounded-full flex items-center justify-center group-hover:border-gray-500 transition-colors">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 3L11 8L6 13" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-gray-400 mb-8">
            Ready to build something amazing together?
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 border border-gray-700 text-white rounded-lg font-medium text-sm sm:text-base hover:border-gray-600 hover:bg-gray-800/50 transition-all duration-200 group"
            >
              Start a project
              <svg 
                className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-0.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
