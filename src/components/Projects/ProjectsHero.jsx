import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
			{/* Animated grid background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
			</div>

			{/* Glowing orbs */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div
					className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.4, 0.7, 0.4],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
			</div>

			<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					{/* Main heading */}
					<h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bungee font-bold mb-8 leading-none">
						<motion.span 
							className="block text-white"
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.2 }}
						>
							MY
						</motion.span>
						<motion.span 
							className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 1, delay: 0.4 }}
						>
							PROJECTS
						</motion.span>
					</h1>
					
					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.6 }}
						className="font-lora text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed font-medium"
					>
						Dive into my digital playground where code meets creativity. Each project is a testament to 
						<span className="text-white font-semibold"> innovation</span>, 
						<span className="text-blue-400 font-semibold"> problem-solving</span>, and 
						<span className="text-purple-400 font-semibold"> technical mastery</span>.
					</motion.p>

					{/* Action buttons */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 1, delay: 0.8 }}
						className="flex flex-col sm:flex-row gap-6 justify-center items-center"
					>
						<motion.button
							onClick={() => {
								const projectsSection = document.querySelector('[data-section="projects-grid"]');
								if (projectsSection) {
									projectsSection.scrollIntoView({ behavior: 'smooth' });
								}
							}}
							className="group relative px-10 py-4 bg-white text-black font-inter font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="relative z-10">Explore Projects</span>
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600"
								initial={{ x: "100%" }}
								whileHover={{ x: "0%" }}
								transition={{ duration: 0.3 }}
							/>
						</motion.button>
						
						<motion.a
							href="https://github.com/InfernusReal"
							target="_blank"
							rel="noopener noreferrer"
							className="group px-10 py-4 border-2 border-gray-600 text-white font-inter font-bold text-lg rounded-2xl hover:border-gray-400 hover:bg-gray-900/20 transition-all duration-300 backdrop-blur-sm"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							<span className="flex items-center gap-3">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
								GitHub
							</span>
						</motion.a>
					</motion.div>
				</motion.div>

				{/* Stats/Info cards */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1 }}
					className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
				>
					{[
						{ number: "10+", label: "Projects Built", color: "from-blue-400 to-blue-600" },
						{ number: "5+", label: "Technologies", color: "from-purple-400 to-purple-600" },
						{ number: "100%", label: "Passion Driven", color: "from-pink-400 to-pink-600" }
					].map((stat, index) => (
						<motion.div
							key={index}
							className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-600 transition-all duration-300"
							whileHover={{ y: -5, scale: 1.02 }}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
						>
							<h3 className={`text-3xl sm:text-4xl font-bungee font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
								{stat.number}
							</h3>
							<p className="text-gray-400 font-inter font-medium">
								{stat.label}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Scroll indicator - positioned on the right side */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 2, duration: 1 }}
					className="absolute right-6 top-1/2 -translate-y-1/2 z-20"
				>
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ duration: 2, repeat: Infinity }}
						className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center cursor-pointer bg-black/20 backdrop-blur-sm hover:border-gray-400 transition-colors"
						onClick={() => {
							const projectsSection = document.querySelector('[data-section="projects-grid"]');
							if (projectsSection) {
								projectsSection.scrollIntoView({ behavior: 'smooth' });
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

export default ProjectsHero;
