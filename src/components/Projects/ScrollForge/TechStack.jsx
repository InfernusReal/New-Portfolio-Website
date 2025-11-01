import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
	const coreEngines = [
		{
			name: "ScrollScript",
			type: "State Engine",
			description: "Universal state management with single dispatcher architecture",
			technologies: ["Event-driven Architecture", "Cross-environment Sync", "Conflict Resolution"],
			icon: "⚡",
			gradient: "from-yellow-500 to-orange-500"
		},
		{
			name: "ScrollWeave",
			type: "Style Engine", 
			description: "Runtime CSS control with GPU-accelerated transitions",
			technologies: ["Runtime CSS Injection", "GPU Acceleration", "Design Tokens"],
			icon: "🎨",
			gradient: "from-pink-500 to-purple-500"
		},
		{
			name: "ScrollMesh",
			type: "Behavior Engine",
			description: "Component lifecycle and dependency management",
			technologies: ["Lifecycle Management", "Memory Optimization", "Performance Monitoring"],
			icon: "🏗️",
			gradient: "from-blue-500 to-cyan-500"
		}
	];

	const frameworks = [
		{
			name: "Causal Graph Programming",
			category: "Core Paradigm",
			description: "Revolutionary programming paradigm that maps causal relationships",
			features: ["Dependency Mapping", "Predictable Side Effects", "Graph Optimization"],
			icon: "🧠"
		},
		{
			name: "Reactive Architecture",
			category: "System Design",
			description: "Event-driven reactive system with intelligent batching",
			features: ["Event Batching", "Reactive Streams", "Automatic Updates"],
			icon: "🔄"
		},
		{
			name: "Performance Optimization",
			category: "Enterprise Scale",
			description: "Built-in optimization for 10,000+ component applications",
			features: ["Intelligent Batching", "Memory Management", "60fps Guarantee"],
			icon: "🚀"
		}
	];

	const developmentTools = [
		{
			name: "NPM Package",
			description: "Production-ready package available on NPM registry",
			version: "v0.4.0",
			status: "Published",
			icon: "📦"
		},
		{
			name: "TypeScript Support", 
			description: "Full TypeScript definitions and type safety",
			version: "Built-in",
			status: "Complete",
			icon: "🔷"
		},
		{
			name: "Development Tools",
			description: "Comprehensive debugging and performance tools",
			version: "Integrated",
			status: "Available",
			icon: "🛠️"
		},
		{
			name: "Documentation",
			description: "Extensive documentation and examples",
			version: "Complete",
			status: "Available",
			icon: "📚"
		}
	];

	const performanceMetrics = [
		{
			metric: "Components",
			value: "10,000+",
			description: "Simultaneous active components",
			icon: "🧩"
		},
		{
			metric: "Performance",
			value: "60fps",
			description: "Guaranteed frame rate",
			icon: "⚡"
		},
		{
			metric: "Memory",
			value: "Optimized",
			description: "Intelligent memory management",
			icon: "💾"
		},
		{
			metric: "Scale",
			value: "Enterprise",
			description: "Production-ready architecture",
			icon: "🏢"
		}
	];

	return (
		<section className="relative py-24 bg-black" data-section="core-components">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.2, 0.4, 0.2],
					}}
					transition={{
						duration: 12,
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
						Core <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Components</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-lora">
						The revolutionary three-engine architecture that powers ScrollForge's unified reactive system
					</p>
				</motion.div>

				{/* Core Engines */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						The Three <span className="text-purple-400">Core Engines</span>
					</h3>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{coreEngines.map((engine, index) => (
							<motion.div
								key={engine.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300"
							>
								<div className="text-center mb-6">
									<div className={`w-20 h-20 bg-gradient-to-br ${engine.gradient} rounded-3xl mx-auto mb-4 flex items-center justify-center text-3xl`}>
										{engine.icon}
									</div>
									<h4 className="text-2xl font-bold text-white mb-2 font-inter">{engine.name}</h4>
									<div className="text-sm text-purple-400 font-medium mb-3">{engine.type}</div>
									<p className="text-gray-300 font-lora">{engine.description}</p>
								</div>
								
								<div className="space-y-3">
									{engine.technologies.map((tech, idx) => (
										<div key={idx} className="flex items-center gap-3">
											<div className="w-2 h-2 bg-purple-400 rounded-full flex-shrink-0"></div>
											<span className="text-gray-300 text-sm">{tech}</span>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Framework Architecture */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Framework <span className="text-blue-400">Architecture</span>
					</h3>

					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{frameworks.map((framework, index) => (
							<motion.div
								key={framework.name}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-2xl p-8"
							>
								<div className="flex items-start gap-4 mb-6">
									<div className="text-4xl">{framework.icon}</div>
									<div>
										<h4 className="text-xl font-bold text-white mb-1 font-inter">{framework.name}</h4>
										<div className="text-sm text-blue-400 font-medium mb-3">{framework.category}</div>
										<p className="text-gray-300 font-lora">{framework.description}</p>
									</div>
								</div>
								
								<ul className="space-y-2">
									{framework.features.map((feature, idx) => (
										<li key={idx} className="flex items-center gap-3">
											<div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
											<span className="text-gray-300 text-sm">{feature}</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Development Tools */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Developer <span className="text-green-400">Experience</span>
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{developmentTools.map((tool, index) => (
							<motion.div
								key={tool.name}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6 text-center"
							>
								<div className="text-4xl mb-4">{tool.icon}</div>
								<h4 className="text-lg font-bold text-white mb-2 font-inter">{tool.name}</h4>
								<p className="text-gray-300 text-sm mb-3 font-lora">{tool.description}</p>
								<div className="flex justify-between text-xs">
									<span className="text-green-400">{tool.version}</span>
									<span className="text-gray-400">{tool.status}</span>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Performance Metrics */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="mb-12"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Performance <span className="text-orange-400">Metrics</span>
					</h3>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
						{performanceMetrics.map((metric, index) => (
							<motion.div
								key={metric.metric}
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/20 rounded-xl p-6 text-center"
							>
								<div className="text-4xl mb-3">{metric.icon}</div>
								<div className="text-2xl font-bold text-orange-400 mb-1">{metric.value}</div>
								<div className="text-sm text-gray-300 mb-1">{metric.metric}</div>
								<div className="text-xs text-gray-500">{metric.description}</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Installation CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 1 }}
					className="text-center"
				>
					<div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-white mb-4 font-inter">
							Ready to Install <span className="text-purple-400">ScrollForge</span>?
						</h3>
						<p className="text-gray-300 mb-6 font-lora">
							Get started with the revolutionary framework in seconds
						</p>
						<div className="bg-black/40 border border-purple-500/30 rounded-xl p-6 max-w-lg mx-auto mb-6">
							<code className="text-purple-300 font-mono text-lg">npm install scrollforge</code>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.npmjs.com/package/scrollforge"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
							>
								View on NPM
							</a>
							<a
								href="https://github.com/InfernusReal/ScrollForge-Unified-Framework"
								target="_blank"
								rel="noopener noreferrer"
								className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
							>
								GitHub Repository
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStack;