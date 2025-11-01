import React from 'react';
import { motion } from 'framer-motion';

const ScrollForgeHero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black" data-section="hero">
			{/* Animated background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
			</div>

			{/* Glowing effects */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.3, 0.7, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.4, 0.6, 0.4],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.1, 1.4, 1.1],
						opacity: [0.2, 0.5, 0.2],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</div>

			<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					{/* Revolutionary Framework badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/40 rounded-full px-6 py-3 mb-8"
					>
						<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
						<span className="text-purple-300 font-inter font-medium text-lg">🔥 REVOLUTIONARY FRAMEWORK</span>
						<div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
					</motion.div>

					{/* Main title */}
					<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bungee font-bold mb-6 leading-none">
						<motion.span 
							className="block text-white"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.3 }}
						>
							SCROLL
						</motion.span>
						<motion.span 
							className="block bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.5 }}
						>
							FORGE
						</motion.span>
					</h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.7 }}
						className="font-lora text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed font-medium"
					>
						The Unified Reactive Framework
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.9 }}
						className="font-inter text-lg text-gray-400 max-w-3xl mx-auto mb-12"
					>
						Revolutionary framework implementing <strong>Causal Graph Programming</strong> - the first of its kind. 
						Three unified engines, enterprise-scale performance, published on NPM.
					</motion.p>

					{/* Philosophy Quote */}
					<motion.blockquote
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.1 }}
						className="font-lora text-xl italic text-purple-300 max-w-3xl mx-auto mb-12 border-l-4 border-purple-500 pl-6"
					>
						"Behavior is structure. Structure is style. Style is logic."
					</motion.blockquote>

					{/* Action buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.3 }}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
					>
						<a
							href="https://www.npmjs.com/package/scrollforge"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25"
						>
							<span className="relative z-10 flex items-center gap-3">
								<span>Install Now</span>
								<span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">📦</span>
							</span>
							<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
						</a>

						<a
							href="https://github.com/InfernusReal/ScrollForge-Unified-Framework"
							target="_blank"
							rel="noopener noreferrer"
							className="group bg-transparent border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center gap-3"
						>
							<span>View Source</span>
							<span className="text-2xl group-hover:translate-x-1 transition-transform duration-300">📖</span>
						</a>
					</motion.div>

					{/* Quick Install Command */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.5 }}
						className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-2xl mx-auto"
					>
						<div className="text-sm text-gray-400 mb-2">Quick Start:</div>
						<code className="text-purple-300 font-mono text-lg">npm install scrollforge</code>
					</motion.div>

					{/* Key Stats */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.7 }}
						className="flex flex-wrap justify-center gap-8 mt-16"
					>
						<div className="text-center">
							<div className="text-3xl font-bold text-green-400">10,000+</div>
							<div className="text-sm text-gray-400">Components @ 60fps</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-blue-400">3</div>
							<div className="text-sm text-gray-400">Core Engines</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-purple-400">v0.4.0</div>
							<div className="text-sm text-gray-400">Enterprise Scale</div>
						</div>
						<div className="text-center">
							<div className="text-3xl font-bold text-orange-400">NPM</div>
							<div className="text-sm text-gray-400">Published</div>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ScrollForgeHero;