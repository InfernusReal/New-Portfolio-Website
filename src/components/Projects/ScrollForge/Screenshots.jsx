import React from 'react';
import { motion } from 'framer-motion';

const Screenshots = () => {
	// Placeholder screenshots data - would be replaced with actual ScrollForge screenshots
	const screenshots = [
		{
			title: "Causal Graph Visualization",
			description: "Real-time visualization of dependency graphs and causal relationships",
			category: "Core Engine",
			mockContent: "🕸️ Interactive Node Graph"
		},
		{
			title: "Performance Dashboard",
			description: "Live performance monitoring with 60fps tracking",
			category: "Performance",
			mockContent: "📊 60fps Performance"
		},
		{
			title: "State Management",
			description: "Unified state management across ScrollScript engine",
			category: "State Engine",
			mockContent: "⚡ State Inspector"
		},
		{
			title: "Style Engine Live",
			description: "Runtime CSS control with ScrollWeave engine",
			category: "Style Engine",
			mockContent: "🎨 Live CSS Editor"
		},
		{
			title: "Component Architecture",
			description: "ScrollMesh component lifecycle and dependency management",
			category: "Component System",
			mockContent: "🏗️ Component Tree"
		},
		{
			title: "NPM Integration",
			description: "Ready-to-use package installation and setup",
			category: "Developer Experience",
			mockContent: "📦 NPM Package"
		}
	];

	return (
		<section className="relative py-24 bg-black" data-section="screenshots">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
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
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl lg:text-5xl xl:text-6xl font-bungee font-bold text-white mb-6">
						Framework <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-lora">
						Explore the revolutionary capabilities of ScrollForge through interactive demonstrations and real-world implementations
					</p>
				</motion.div>

				{/* Main feature showcase */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-16"
				>
					<div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-3xl p-8 lg:p-12">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h3 className="text-3xl font-bold text-white mb-6 font-inter">
									<span className="text-purple-400">Causal Graph</span> Programming
								</h3>
								<p className="text-gray-300 text-lg leading-relaxed mb-6 font-lora">
									The world's first implementation of Causal Graph Programming. Watch as every interaction creates traceable causal relationships across your entire application.
								</p>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 bg-purple-400 rounded-full"></div>
										<span className="text-gray-300">Real-time dependency tracking</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 bg-blue-400 rounded-full"></div>
										<span className="text-gray-300">Visual causal relationship mapping</span>
									</div>
									<div className="flex items-center gap-3">
										<div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
										<span className="text-gray-300">Predictable side-effect management</span>
									</div>
								</div>
							</div>
							
							<div className="relative">
								<div 
									className="bg-gray-900/60 border border-gray-700/40 rounded-2xl p-8 min-h-[300px] flex items-center justify-center cursor-pointer hover:border-purple-500/60 transition-all duration-300"
									onClick={() => window.open('https://github.com/InfernusReal/ScrollForge', '_blank')}
								>
									<div className="relative w-full h-full flex items-center justify-center">
										{/* Graph Nodes */}
										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.8, delay: 0.2 }}
											className="absolute top-1/4 left-1/4 w-14 h-14 bg-purple-500/20 border-2 border-purple-400 rounded-full flex items-center justify-center"
										>
											<motion.div
												animate={{ scale: [1, 1.3, 1] }}
												transition={{ duration: 2.5, repeat: Infinity }}
												className="w-3 h-3 bg-purple-400 rounded-full"
											/>
											<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-purple-300 font-medium">State</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.8, delay: 0.4 }}
											className="absolute top-1/4 right-1/4 w-14 h-14 bg-blue-500/20 border-2 border-blue-400 rounded-full flex items-center justify-center"
										>
											<motion.div
												animate={{ scale: [1, 1.3, 1] }}
												transition={{ duration: 2.5, repeat: Infinity, delay: 0.8 }}
												className="w-3 h-3 bg-blue-400 rounded-full"
											/>
											<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-blue-300 font-medium">Effect</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.8, delay: 0.6 }}
											className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center"
										>
											<motion.div
												animate={{ scale: [1, 1.3, 1] }}
												transition={{ duration: 2.5, repeat: Infinity, delay: 1.6 }}
												className="w-3 h-3 bg-green-400 rounded-full"
											/>
											<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-green-300 font-medium">Action</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.8, delay: 0.8 }}
											className="absolute bottom-1/4 right-1/3 w-14 h-14 bg-orange-500/20 border-2 border-orange-400 rounded-full flex items-center justify-center"
										>
											<motion.div
												animate={{ scale: [1, 1.3, 1] }}
												transition={{ duration: 2.5, repeat: Infinity, delay: 2.4 }}
												className="w-3 h-3 bg-orange-400 rounded-full"
											/>
											<div className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-orange-300 font-medium">View</div>
										</motion.div>

										{/* Connection Lines with Data Flow */}
										<motion.svg
											initial={{ pathLength: 0, opacity: 0 }}
											whileInView={{ pathLength: 1, opacity: 1 }}
											transition={{ duration: 2, delay: 1 }}
											className="absolute inset-0 w-full h-full pointer-events-none"
											viewBox="0 0 400 300"
										>
											{/* State to Effect */}
											<motion.path
												d="M 120 80 Q 200 60 280 80"
												stroke="rgba(147, 51, 234, 0.8)"
												strokeWidth="3"
												fill="none"
												strokeDasharray="6 6"
												animate={{ strokeDashoffset: [0, -12] }}
												transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
											/>
											{/* Effect to View */}
											<motion.path
												d="M 280 80 Q 340 140 320 200"
												stroke="rgba(59, 130, 246, 0.8)"
												strokeWidth="3"
												fill="none"
												strokeDasharray="6 6"
												animate={{ strokeDashoffset: [0, -12] }}
												transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.6 }}
											/>
											{/* Action to State */}
											<motion.path
												d="M 140 200 Q 100 140 120 80"
												stroke="rgba(34, 197, 94, 0.8)"
												strokeWidth="3"
												fill="none"
												strokeDasharray="6 6"
												animate={{ strokeDashoffset: [0, -12] }}
												transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.2 }}
											/>
											{/* View to Action */}
											<motion.path
												d="M 320 200 Q 200 220 140 200"
												stroke="rgba(251, 146, 60, 0.8)"
												strokeWidth="3"
												fill="none"
												strokeDasharray="6 6"
												animate={{ strokeDashoffset: [0, -12] }}
												transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 1.8 }}
											/>
										</motion.svg>

										{/* Center Title */}
										<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
											<div className="text-center bg-gray-900/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-gray-700/50">
												<h4 className="text-xl font-bold text-white mb-1">Interactive Causal Graph</h4>
												<p className="text-gray-400 text-sm">Live visualization of framework internals</p>
											</div>
										</div>
									</div>
								</div>
								<div className="absolute -inset-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Screenshots grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{screenshots.map((screenshot, index) => (
						<motion.div
							key={screenshot.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/40 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all duration-300 cursor-pointer"
							onClick={() => window.open('https://github.com/InfernusReal/ScrollForge', '_blank')}
						>
							{/* Interactive Visualization */}
							<div className="relative aspect-video bg-gray-900/60 border-b border-gray-700/40 flex items-center justify-center p-6">
								{screenshot.title === "Causal Graph Visualization" && (
									<div className="relative w-full h-full flex items-center justify-center">
										{/* Graph Nodes */}
										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.8, delay: 0.2 }}
											className="absolute top-8 left-8 w-12 h-12 bg-purple-500/20 border-2 border-purple-400 rounded-full flex items-center justify-center"
										>
											<motion.div
												animate={{ scale: [1, 1.2, 1] }}
												transition={{ duration: 2, repeat: Infinity }}
												className="w-2 h-2 bg-purple-400 rounded-full"
											/>
											<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-purple-300">Node A</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.8, delay: 0.4 }}
											className="absolute top-8 right-8 w-12 h-12 bg-blue-500/20 border-2 border-blue-400 rounded-full flex items-center justify-center"
										>
											<motion.div
												animate={{ scale: [1, 1.2, 1] }}
												transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
												className="w-2 h-2 bg-blue-400 rounded-full"
											/>
											<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-blue-300">Node B</div>
										</motion.div>

										<motion.div
											initial={{ opacity: 0, scale: 0 }}
											whileInView={{ opacity: 1, scale: 1 }}
											transition={{ duration: 0.8, delay: 0.6 }}
											className="absolute bottom-8 left-1/2 -translate-x-1/2 w-12 h-12 bg-green-500/20 border-2 border-green-400 rounded-full flex items-center justify-center"
										>
											<motion.div
												animate={{ scale: [1, 1.2, 1] }}
												transition={{ duration: 2, repeat: Infinity, delay: 1 }}
												className="w-2 h-2 bg-green-400 rounded-full"
											/>
											<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-green-300">Node C</div>
										</motion.div>

										{/* Connection Lines */}
										<motion.svg
											initial={{ pathLength: 0, opacity: 0 }}
											whileInView={{ pathLength: 1, opacity: 1 }}
											transition={{ duration: 1.5, delay: 0.8 }}
											className="absolute inset-0 w-full h-full pointer-events-none"
										>
											<motion.path
												d="M 80 56 Q 160 40 280 56"
												stroke="rgba(147, 51, 234, 0.6)"
												strokeWidth="2"
												fill="none"
												strokeDasharray="4 4"
												animate={{ strokeDashoffset: [0, -8] }}
												transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
											/>
											<motion.path
												d="M 80 56 Q 120 120 200 152"
												stroke="rgba(59, 130, 246, 0.6)"
												strokeWidth="2"
												fill="none"
												strokeDasharray="4 4"
												animate={{ strokeDashoffset: [0, -8] }}
												transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
											/>
											<motion.path
												d="M 280 56 Q 240 120 200 152"
												stroke="rgba(34, 197, 94, 0.6)"
												strokeWidth="2"
												fill="none"
												strokeDasharray="4 4"
												animate={{ strokeDashoffset: [0, -8] }}
												transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
											/>
										</motion.svg>
									</div>
								)}

								{screenshot.title === "Performance Dashboard" && (
									<div className="relative w-full h-full flex items-center justify-center">
										<div className="flex items-end space-x-2 h-20">
											{[40, 65, 45, 80, 70, 60, 75].map((height, i) => (
												<motion.div
													key={i}
													initial={{ height: 0 }}
													whileInView={{ height: `${height}%` }}
													transition={{ duration: 0.8, delay: i * 0.1 }}
													className="w-6 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-sm"
													style={{ maxHeight: '80px' }}
												/>
											))}
										</div>
										<div className="absolute bottom-4 text-purple-300 text-sm font-mono">60 FPS</div>
									</div>
								)}

								{screenshot.title === "State Management" && (
									<div className="relative w-full h-full flex items-center justify-center">
										<div className="grid grid-cols-3 gap-4">
											{[1, 2, 3, 4, 5, 6].map((item, i) => (
												<motion.div
													key={i}
													initial={{ opacity: 0, scale: 0 }}
													whileInView={{ opacity: 1, scale: 1 }}
													transition={{ duration: 0.5, delay: i * 0.1 }}
													className="w-12 h-8 bg-gradient-to-r from-blue-500/20 to-blue-600/20 border border-blue-400/40 rounded flex items-center justify-center"
												>
													<motion.div
														animate={{ opacity: [0.5, 1, 0.5] }}
														transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
														className="w-2 h-2 bg-blue-400 rounded-full"
													/>
												</motion.div>
											))}
										</div>
									</div>
								)}

								{screenshot.title === "Style Engine Live" && (
									<div className="relative w-full h-full flex items-center justify-center">
										<div className="space-y-3">
											<motion.div
												animate={{ backgroundColor: ['rgba(147, 51, 234, 0.2)', 'rgba(59, 130, 246, 0.2)', 'rgba(34, 197, 94, 0.2)', 'rgba(147, 51, 234, 0.2)'] }}
												transition={{ duration: 3, repeat: Infinity }}
												className="w-24 h-6 rounded border-2 border-white/20"
											/>
											<motion.div
												animate={{ width: ['60%', '100%', '80%', '60%'] }}
												transition={{ duration: 2.5, repeat: Infinity }}
												className="h-4 bg-gradient-to-r from-pink-500 to-orange-500 rounded"
											/>
											<motion.div
												animate={{ height: ['12px', '20px', '16px', '12px'] }}
												transition={{ duration: 2, repeat: Infinity }}
												className="w-20 bg-gradient-to-t from-cyan-500 to-blue-500 rounded"
											/>
										</div>
									</div>
								)}

								{screenshot.title === "Component Architecture" && (
									<div className="relative w-full h-full flex items-center justify-center">
										<div className="relative">
											<motion.div
												initial={{ scale: 0 }}
												whileInView={{ scale: 1 }}
												transition={{ duration: 0.8 }}
												className="w-16 h-12 bg-gray-700/50 border-2 border-gray-500 rounded-lg flex items-center justify-center"
											>
												<div className="text-gray-300 text-xs">Root</div>
											</motion.div>
											<div className="flex mt-4 space-x-4">
												{[1, 2].map((child, i) => (
													<motion.div
														key={i}
														initial={{ scale: 0, y: -20 }}
														whileInView={{ scale: 1, y: 0 }}
														transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
														className="w-12 h-8 bg-purple-700/30 border border-purple-500 rounded flex items-center justify-center"
													>
														<div className="text-purple-300 text-xs">C{i + 1}</div>
													</motion.div>
												))}
											</div>
											<motion.svg
												initial={{ pathLength: 0 }}
												whileInView={{ pathLength: 1 }}
												transition={{ duration: 1, delay: 0.8 }}
												className="absolute inset-0 w-full h-full pointer-events-none"
											>
												<path d="M 32 24 L 20 40" stroke="rgba(147, 51, 234, 0.6)" strokeWidth="2" />
												<path d="M 32 24 L 44 40" stroke="rgba(147, 51, 234, 0.6)" strokeWidth="2" />
											</motion.svg>
										</div>
									</div>
								)}

								{screenshot.title === "NPM Integration" && (
									<div className="relative w-full h-full flex items-center justify-center">
										<div className="relative bg-gray-900/60 rounded-lg p-4 border border-gray-700">
											<div className="text-green-400 text-xs font-mono mb-2">$ npm install scrollforge</div>
											<motion.div
												initial={{ width: 0 }}
												whileInView={{ width: '100%' }}
												transition={{ duration: 2, delay: 0.5 }}
												className="h-1 bg-green-400 rounded mb-2"
											/>
											<motion.div
												initial={{ opacity: 0 }}
												whileInView={{ opacity: 1 }}
												transition={{ delay: 2.5 }}
												className="text-green-300 text-xs"
											>
												✓ Package installed successfully
											</motion.div>
										</div>
									</div>
								)}
								
								{/* Overlay on hover */}
								<div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="text-white text-lg font-semibold">View Github</div>
								</div>
							</div>
							
							{/* Content */}
							<div className="p-6">
								<div className="text-sm text-purple-400 font-medium mb-2">{screenshot.category}</div>
								<h4 className="text-lg font-bold text-white mb-2 font-inter">{screenshot.title}</h4>
								<p className="text-gray-400 text-sm">{screenshot.description}</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Call to action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mt-16 text-center"
				>
					<div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-white mb-4 font-inter">
							Experience the <span className="text-purple-400">Revolution</span>
						</h3>
						<p className="text-gray-300 mb-6 font-lora">
							Ready to implement Causal Graph Programming in your next project?
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.npmjs.com/package/scrollforge"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
							>
								Install ScrollForge
							</a>
							<a
								href="https://github.com/InfernusReal/ScrollForge-Unified-Framework"
								target="_blank"
								rel="noopener noreferrer"
								className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
							>
								View Documentation
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default Screenshots;