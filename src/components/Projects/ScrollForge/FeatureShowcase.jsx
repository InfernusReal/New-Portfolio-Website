import React from 'react';
import { motion } from 'framer-motion';

const FeatureShowcase = () => {
	const features = [
		{
			icon: "🧠",
			title: "Causal Graph Intelligence",
			description: "Revolutionary dependency tracking that maps every interaction to create predictable, optimizable reactive systems.",
			details: [
				"Real-time causal relationship mapping",
				"Automatic dependency resolution",
				"Conflict detection and prevention",
				"Performance optimization through graph analysis"
			],
			gradient: "from-purple-500 to-pink-500"
		},
		{
			icon: "⚡",
			title: "ScrollScript Engine",
			description: "Universal state management that works seamlessly across client and server environments.",
			details: [
				"Single dispatcher architecture",
				"Cross-environment synchronization",
				"Event-driven state updates",
				"Built-in conflict resolution"
			],
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			icon: "🎨",
			title: "ScrollWeave Styling",
			description: "Runtime-controlled CSS system with GPU-accelerated transitions and dynamic theme management.",
			details: [
				"Runtime CSS injection and control",
				"GPU-accelerated transitions",
				"Design token system",
				"Dynamic theme switching"
			],
			gradient: "from-cyan-500 to-green-500"
		},
		{
			icon: "🏗️",
			title: "ScrollMesh Architecture",
			description: "Intelligent component lifecycle management with automatic memory optimization.",
			details: [
				"Component dependency resolution",
				"Automatic memory management",
				"Performance monitoring",
				"Lifecycle optimization"
			],
			gradient: "from-green-500 to-yellow-500"
		},
		{
			icon: "🚀",
			title: "Enterprise Performance",
			description: "Built from the ground up for scale - 10,000+ components at consistent 60fps performance.",
			details: [
				"10,000+ component capacity",
				"Consistent 60fps performance",
				"Intelligent batching algorithms",
				"Memory-efficient operations"
			],
			gradient: "from-yellow-500 to-orange-500"
		},
		{
			icon: "📦",
			title: "Developer Experience",
			description: "Production-ready framework available on NPM with comprehensive tooling and documentation.",
			details: [
				"NPM package ready for production",
				"Comprehensive development tools",
				"TypeScript support",
				"Extensive documentation"
			],
			gradient: "from-orange-500 to-red-500"
		}
	];

	const philosophicalPrinciples = [
		{
			principle: "Behavior is Structure",
			explanation: "Every user interaction creates a structural change in the application graph.",
			example: "A button click doesn't just trigger an event - it reshapes the causal graph."
		},
		{
			principle: "Structure is Style",
			explanation: "The structural relationships determine how visual elements should respond.",
			example: "Component dependencies automatically generate appropriate styling relationships."
		},
		{
			principle: "Style is Logic",
			explanation: "Visual presentation becomes a logical expression of underlying relationships.",
			example: "Animations and transitions express the causal flow between states."
		}
	];

	return (
		<section className="relative py-24 bg-black" data-section="features">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.2, 0.4, 0.2],
					}}
					transition={{
						duration: 10,
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
						Feature <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-lora">
						Discover the revolutionary capabilities that make ScrollForge the first truly unified reactive framework
					</p>
				</motion.div>

				{/* Philosophical Foundation */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						The <span className="text-purple-400">Philosophy</span>
					</h3>
					
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{philosophicalPrinciples.map((item, index) => (
							<motion.div
								key={item.principle}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-6"
							>
								<h4 className="text-xl font-bold text-purple-300 mb-3 font-inter">{item.principle}</h4>
								<p className="text-gray-300 mb-4 font-lora">{item.explanation}</p>
								<div className="bg-black/40 border border-purple-500/30 rounded-lg p-3">
									<p className="text-sm text-purple-200 italic">"{item.example}"</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Core Features */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
					{features.map((feature, index) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							className="group bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
						>
							<div className="flex items-start gap-6 mb-6">
								<div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl flex-shrink-0`}>
									{feature.icon}
								</div>
								<div>
									<h4 className="text-2xl font-bold text-white mb-2 font-inter">{feature.title}</h4>
									<p className="text-gray-300 font-lora">{feature.description}</p>
								</div>
							</div>
							
							<ul className="space-y-3">
								{feature.details.map((detail, idx) => (
									<li key={idx} className="flex items-start gap-3">
										<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
										<span className="text-gray-300">{detail}</span>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Performance Showcase */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border border-green-500/20 rounded-3xl p-8 lg:p-12 mb-20"
				>
					<div className="text-center mb-12">
						<h3 className="text-3xl font-bold text-white mb-4 font-inter">
							<span className="text-green-400">Performance</span> That Speaks
						</h3>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto font-lora">
							Numbers don't lie. ScrollForge delivers enterprise-scale performance that redefines what's possible.
						</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						<div className="text-center">
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="text-4xl lg:text-5xl font-bold text-green-400 mb-2"
							>
								10K+
							</motion.div>
							<div className="text-gray-300">Components</div>
							<div className="text-sm text-gray-500">@ 60fps</div>
						</div>

						<div className="text-center">
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2"
							>
								3
							</motion.div>
							<div className="text-gray-300">Unified Engines</div>
							<div className="text-sm text-gray-500">One Framework</div>
						</div>

						<div className="text-center">
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.6 }}
								className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2"
							>
								25K+
							</motion.div>
							<div className="text-gray-300">Lines of Code</div>
							<div className="text-sm text-gray-500">Enterprise Ready</div>
						</div>

						<div className="text-center">
							<motion.div
								initial={{ scale: 0 }}
								whileInView={{ scale: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.8 }}
								className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2"
							>
								v0.4.0
							</motion.div>
							<div className="text-gray-300">Current Version</div>
							<div className="text-sm text-gray-500">NPM Published</div>
						</div>
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="text-center"
				>
					<div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-white mb-4 font-inter">
							Ready to <span className="text-purple-400">Revolutionize</span> Your Development?
						</h3>
						<p className="text-gray-300 mb-6 font-lora max-w-2xl mx-auto">
							Join the revolution. Implement Causal Graph Programming in your next project and experience the future of reactive systems.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.npmjs.com/package/scrollforge"
								target="_blank"
								rel="noopener noreferrer"
								className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
							>
								<span>Install ScrollForge</span>
								<span className="text-xl group-hover:translate-x-1 transition-transform duration-300">📦</span>
							</a>
							<a
								href="https://github.com/InfernusReal/ScrollForge-Unified-Framework"
								target="_blank"
								rel="noopener noreferrer"
								className="group border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5 flex items-center justify-center gap-3"
							>
								<span>Explore Source</span>
								<span className="text-xl group-hover:translate-x-1 transition-transform duration-300">🔍</span>
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FeatureShowcase;