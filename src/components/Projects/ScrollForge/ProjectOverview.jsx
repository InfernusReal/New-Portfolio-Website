import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = () => {
	const features = [
		{
			icon: "⚡",
			title: "ScrollScript",
			description: [
				"Single dispatcher (client + server)",
				"Universal state management",
				"Event-driven architecture",
				"Real-time synchronization"
			]
		},
		{
			icon: "🎨",
			title: "ScrollWeave",
			description: [
				"Runtime-controlled CSS",
				"Dynamic style injection",
				"GPU-accelerated transitions",
				"Design tokens & theme system"
			]
		},
		{
			icon: "🏗️",
			title: "ScrollMesh",
			description: [
				"Component lifecycle management",
				"Dependency resolution",
				"Memory optimization",
				"Performance monitoring"
			]
		}
	];

	const philosophies = [
		{
			title: "Causal Graph Programming",
			description: "Every interaction creates a causal relationship. ScrollForge maps these relationships to create predictable, optimizable reactive systems.",
			gradient: "from-purple-500 to-blue-500"
		},
		{
			title: "Unified Architecture",
			description: "State, Style, and Behavior engines work in perfect harmony, eliminating the complexity of managing separate systems.",
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			title: "Enterprise Performance",
			description: "Built from the ground up for scale. 10,000+ components at 60fps isn't just a target - it's a guarantee.",
			gradient: "from-cyan-500 to-green-500"
		}
	];

	return (
		<section className="relative py-24 bg-black" data-section="overview">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
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
						Project <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Overview</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-lora">
						The world's first framework implementing Causal Graph Programming - a revolutionary paradigm that unifies reactive systems
					</p>
				</motion.div>

				{/* Core Philosophy */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8 mb-16"
				>
					<h3 className="text-3xl font-bold text-white mb-6 text-center font-inter">
						The <span className="text-purple-400">Philosophy</span>
					</h3>
					<div className="text-center max-w-4xl mx-auto">
						<p className="text-gray-300 text-lg leading-relaxed mb-6 font-lora">
							<span className="text-purple-300 font-semibold">"Behavior is structure. Structure is style. Style is logic."</span>
						</p>
						<p className="text-gray-300 text-lg leading-relaxed mb-6 font-lora">
							ScrollForge introduces <strong className="text-purple-300">Causal Graph Programming</strong> - a paradigm where every interaction creates traceable causal relationships. This isn't just another framework; it's a fundamental reimagining of reactive systems.
						</p>
						<div className="bg-black/40 border border-purple-500/30 rounded-xl p-6">
							<p className="text-purple-300 font-mono text-lg">
								npm install scrollforge
							</p>
							<p className="text-gray-400 text-sm mt-2">Ready for production • v0.4.0 • 25,000+ lines</p>
						</div>
					</div>
				</motion.div>

				{/* Three Core Engines */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mb-16"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Three <span className="text-blue-400">Unified Engines</span>
					</h3>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={feature.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
							>
								<div className="text-center mb-6">
									<div className="text-5xl mb-4">{feature.icon}</div>
									<h4 className="text-2xl font-bold text-white mb-2 font-inter">{feature.title}</h4>
								</div>
								
								<ul className="space-y-3">
									{feature.description.map((item, idx) => (
										<li key={idx} className="flex items-center gap-3">
											<div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
											<span className="text-gray-300">{item}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Core Philosophies */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mb-16"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Core <span className="text-green-400">Principles</span>
					</h3>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{philosophies.map((philosophy, index) => (
							<motion.div
								key={philosophy.title}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
							>
								<h4 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${philosophy.gradient} bg-clip-text text-transparent font-inter`}>
									{philosophy.title}
								</h4>
								<p className="text-gray-300 text-lg leading-relaxed font-lora">
									{philosophy.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Impact metrics */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="text-center"
					data-section="framework-impact"
				>
					<h3 className="text-3xl font-bold text-white mb-8 font-inter">
						Framework <span className="text-orange-400">Impact</span>
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						<div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6">
							<div className="text-3xl font-bold text-green-400 mb-2">25,000+</div>
							<div className="text-sm text-gray-300">Lines of Code</div>
						</div>

						<div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/20 rounded-xl p-6">
							<div className="text-3xl font-bold text-blue-400 mb-2">60fps</div>
							<div className="text-sm text-gray-300">Performance Target</div>
						</div>

						<div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 border border-purple-500/20 rounded-xl p-6">
							<div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
							<div className="text-sm text-gray-300">Components</div>
						</div>

						<div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-xl p-6">
							<div className="text-3xl font-bold text-orange-400 mb-2">NPM</div>
							<div className="text-sm text-gray-300">Published</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectOverview;