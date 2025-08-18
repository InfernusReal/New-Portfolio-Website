import React from 'react';
import { motion } from 'framer-motion';

const ProdigiousHubHero = () => {
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
			</div>

			<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					{/* Project badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-2 mb-8"
					>
						<div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
						<span className="text-purple-300 font-inter font-medium">Featured Project</span>
					</motion.div>

					{/* Main title */}
					<h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bungee font-bold mb-6 leading-none">
						<motion.span 
							className="block text-white"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.3 }}
						>
							PRODIGIOUS
						</motion.span>
						<motion.span 
							className="block bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.5 }}
						>
							HUB
						</motion.span>
					</h1>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.7 }}
						className="font-lora text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed font-medium"
					>
						The Gamified Revolution of Team Collaboration
					</motion.p>

					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.9 }}
						className="font-inter text-lg text-gray-400 max-w-3xl mx-auto mb-12"
					>
						Transforming boring project management into an epic RPG experience. 
						Level up, earn XP, unlock achievements, and collaborate like never before.
					</motion.p>

					{/* Action buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.1 }}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
					>
						<motion.a
							href="https://github.com/InfernusReal/ProdigiousHub-V3"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative px-10 py-4 bg-white text-black font-inter font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="relative z-10 flex items-center gap-3">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
								View Code
							</span>
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-600"
								initial={{ x: "100%" }}
								whileHover={{ x: "0%" }}
								transition={{ duration: 0.3 }}
							/>
						</motion.a>
						
						<motion.a
							href="https://devpost.com/software/the-prodigious-hub"
							target="_blank"
							rel="noopener noreferrer"
							className="group px-10 py-4 border-2 border-gray-600 text-white font-inter font-bold text-lg rounded-2xl hover:border-purple-500 hover:bg-purple-900/20 transition-all duration-300 backdrop-blur-sm"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="flex items-center gap-3">
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								DevPost
							</span>
						</motion.a>
					</motion.div>

					{/* Key stats */}
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 1.3 }}
						className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
					>
						{[
							{ number: "15K+", label: "Lines of Code", color: "from-purple-400 to-purple-600" },
							{ number: "4", label: "Weeks Built", color: "from-blue-400 to-blue-600" },
							{ number: "50+", label: "Features", color: "from-cyan-400 to-cyan-600" },
							{ number: "100%", label: "Passion", color: "from-pink-400 to-pink-600" }
						].map((stat, index) => (
							<motion.div
								key={index}
								className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
								whileHover={{ y: -5, scale: 1.02 }}
								initial={{ opacity: 0, y: 30 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
							>
								<h3 className={`text-2xl sm:text-3xl font-bungee font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
									{stat.number}
								</h3>
								<p className="text-gray-400 font-inter font-medium text-sm">
									{stat.label}
								</p>
							</motion.div>
						))}
					</motion.div>
				</motion.div>

				{/* Scroll indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
					className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center cursor-pointer hover:border-purple-400 transition-colors bg-black/20 backdrop-blur-sm"
						onClick={() => {
							const nextSection = document.querySelector('[data-section="overview"]');
							if (nextSection) {
								nextSection.scrollIntoView({ behavior: 'smooth' });
							}
						}}
					>
						<motion.div
							animate={{ y: [0, 12, 0] }}
							transition={{ duration: 2, repeat: Infinity }}
							className="w-1 h-3 bg-gray-400 rounded-full mt-2"
						/>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProdigiousHubHero;
