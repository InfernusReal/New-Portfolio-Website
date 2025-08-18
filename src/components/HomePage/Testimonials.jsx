
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Manager at TechFlow Solutions",
    quote: "Working with this developer was exceptional. They delivered a complex SaaS platform ahead of schedule with incredible attention to detail.",
    avatar: "SC",
    company: "TechFlow Solutions"
  },
  {
    name: "Marcus Rodriguez",
    title: "CTO at InnovateLabs",
    quote: "Their technical expertise and design sensibility are rare. The React application they built for us performs flawlessly at scale.",
    avatar: "MR", 
    company: "InnovateLabs"
  },
  {
    name: "Emma Thompson",
    title: "Engineering Lead at DataStream Corp",
    quote: "Outstanding full-stack development skills. They understood our requirements perfectly and delivered a product that exceeded expectations.",
    avatar: "ET",
    company: "DataStream Corp"
  }
];

const Testimonials = () => {
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
            Trusted by teams
            <br />
            <span className="text-gray-500">at world-class companies</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
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
                {/* Quote */}
                <div className="mb-8">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-gray-600 mb-4">
                    <path d="M3 21C3 17.5 6 13 10 13C6 13 3 9.5 3 6H7C7 9.5 4 13 4 16.5V21H3ZM13 21C13 17.5 16 13 20 13C16 13 13 9.5 13 6H17C17 9.5 14 13 14 16.5V21H13Z" fill="currentColor"/>
                  </svg>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  {/* Avatar */}
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                    <span className="text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </span>
                  </div>
                  
                  {/* Info */}
                  <div>
                    <div className="text-white font-semibold">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <p className="text-center text-gray-500 text-sm font-medium mb-8 tracking-wider uppercase">
            Trusted by industry leaders
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="text-gray-400 font-semibold">
                {testimonial.company}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
