import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Hero from './Hero';
import StackLogos from '../StackLogos';
import Features from './Features';
import Integration from './Integration';
import Testimonials from './Testimonials';
import CTA from './CTA';

const HomePage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP scroll-triggered animations
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  return (
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-black text-white"
      >
        <Hero />
        <StackLogos />
        <Features />
        <Integration />
        <Testimonials />
        <CTA />
      </motion.div>
  );
};

export default HomePage;
