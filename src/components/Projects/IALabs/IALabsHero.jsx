import React from 'react';
import { motion } from 'framer-motion';

const IALabsHero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" data-section="hero">
			{/* Animated background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
			</div>

			{/* Glowing effects */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.5, 0.3, 0.5],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				{/* Logo/Brand */}
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mb-8"
				>
					<div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl mb-6">
						<span className="text-3xl font-bungee font-bold text-white">IA</span>
					</div>
				</motion.div>

				{/* Main Title */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bungee font-bold mb-6"
				>
					<span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
						IA-Labs
					</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-lora max-w-4xl mx-auto leading-relaxed"
				>
					Innovative Software Development Company Website
				</motion.p>

				{/* Key Features Tags */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="flex flex-wrap justify-center gap-3 mb-12"
				>
					{[
						'🚀 Modern Design',
						'💼 Corporate Identity',
						'📱 Responsive Layout',
						'⚡ Performance Optimized',
						'🔧 Custom Solutions',
						'🎯 User Experience'
					].map((tag, index) => (
						<span
							key={index}
							className="px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-full text-sm font-inter text-gray-300 hover:border-cyan-500/50 transition-colors duration-300"
						>
							{tag}
						</span>
					))}
				</motion.div>

				{/* CTA Buttons */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="flex flex-col sm:flex-row gap-6 justify-center"
				>
					<motion.a
						href="https://ia-labs-website.vercel.app/"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-inter font-semibold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						🚀 View Live Demo
					</motion.a>
					
					<motion.a
						href="https://github.com/yourusername/ia-labs-website"
						target="_blank"
						rel="noopener noreferrer"
						className="px-8 py-4 border-2 border-gray-600 text-gray-300 font-inter font-semibold text-lg rounded-2xl hover:border-cyan-500 hover:text-white transition-all duration-300"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						💻 View Source Code
					</motion.a>
				</motion.div>

				{/* Project Type & Status */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 1 }}
					className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400 font-inter"
				>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
						<span>Production Ready</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
						<span>Corporate Website</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
						<span>Software Company</span>
					</div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.8, delay: 1.2 }}
					className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="flex flex-col items-center gap-2 text-gray-400 bg-black/20 backdrop-blur-sm rounded-full px-4 py-2"
					>
						<span className="text-xs font-inter whitespace-nowrap">Scroll to explore</span>
						<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
						</svg>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default IALabsHero;
