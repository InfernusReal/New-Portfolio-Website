
import { motion } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

const Dashboard = () => {
  const cardRef = useRef(null);
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.animate([
        { opacity: 0, transform: 'translateY(80px) scale(0.92) rotate(-8deg)' },
        { opacity: 1, transform: 'translateY(0) scale(1) rotate(-8deg)' }
      ], { duration: 1200, fill: 'forwards', easing: 'cubic-bezier(.4,2,.3,1)' });
    }
  }, []);
  return (
    <section className="py-36 bg-black flex flex-col items-center overflow-hidden min-h-[80vh]">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-24 px-6 relative z-10">
        {/* Floating, angled dashboard mockup */}
        <div className="relative w-full md:w-3/5 flex justify-center items-center">
          <motion.div ref={cardRef} initial={{ opacity: 0, y: 80, scale: 0.92, rotate: -8 }} animate={{ opacity: 1, y: 0, scale: 1, rotate: -8 }} transition={{ duration: 1.2, delay: 0.2 }}
            className="relative bg-white rounded-3xl shadow-2xl p-0 w-[520px] max-w-full flex flex-col overflow-hidden border border-black/10"
            style={{ boxShadow: '0 24px 80px 0 #000c, 0 2px 12px 0 #0002', transform: 'rotate(-8deg)' }}
          >
            {/* Fake dashboard header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-black/10 bg-gray-50">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-black rounded-full" />
                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                <div className="w-3 h-3 bg-gray-400 rounded-full" />
                <span className="ml-4 text-gray-700 text-xs font-bold tracking-wide">Dashboard.js</span>
              </div>
              <span className="text-xs text-gray-400">v2025</span>
            </div>
            {/* Fake dashboard content */}
            <div className="px-6 py-8 bg-white flex flex-col gap-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-black">Active Projects</span>
                <span className="text-2xl font-extrabold text-black">7</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-lg font-bold text-black">Clients</span>
                <span className="text-2xl font-extrabold text-black">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-black">AI Models</span>
                <span className="text-2xl font-extrabold text-black">4</span>
              </div>
              <div className="flex items-center justify-between mt-6">
                <span className="text-xs text-gray-500">Last updated: Aug 2025</span>
                <span className="text-xs text-gray-700">Personal Portfolio</span>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Description */}
        <div className="w-full md:w-2/5 flex flex-col items-start md:items-end text-white">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">A Real<br />Dashboard</h2>
          <p className="text-gray-300 mb-8 text-xl max-w-md">A floating, angled dashboard mockup—just like the best product sites. This is the kind of modern, interactive UI I can build for you: fast, beautiful, and scalable.</p>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;

