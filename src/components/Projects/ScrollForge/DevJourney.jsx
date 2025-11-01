import React from 'react';
import { motion } from 'framer-motion';

const DevJourney = () => {
	const journeySteps = [
		{
			phase: "Conceptualization",
			title: "The Revolutionary Idea",
			period: "Initial Vision",
			description: "The concept of Causal Graph Programming emerged from the need to unify reactive systems. Traditional frameworks treat state, style, and behavior as separate concerns - but what if they were unified?",
			achievements: [
				"Identified the core philosophy: 'Behavior is structure. Structure is style. Style is logic.'",
				"Designed the theoretical foundation for causal relationship mapping",
				"Outlined the three-engine architecture",
				"Established performance targets: 10,000+ components at 60fps"
			],
			icon: "💡",
			gradient: "from-yellow-500 to-orange-500"
		},
		{
			phase: "Architecture Design",
			title: "Building the Foundation",
			period: "Core Development",
			description: "Designing the three core engines that would work in perfect harmony to create the world's first truly unified reactive framework.",
			achievements: [
				"Architected ScrollScript: Universal state management engine",
				"Designed ScrollWeave: Runtime CSS control with GPU acceleration",
				"Developed ScrollMesh: Component lifecycle and dependency management",
				"Created the causal graph mapping algorithms"
			],
			icon: "🏗️",
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			phase: "Implementation",
			title: "The 25,000+ Line Journey",
			period: "Intensive Development",
			description: "Months of intensive development, bringing the revolutionary concept to life with enterprise-grade performance and reliability.",
			achievements: [
				"Implemented causal graph dependency tracking",
				"Built cross-environment synchronization (client + server)",
				"Developed intelligent batching algorithms for performance",
				"Created comprehensive TypeScript definitions"
			],
			icon: "⚡",
			gradient: "from-purple-500 to-pink-500"
		},
		{
			phase: "Optimization",
			title: "Enterprise Performance",
			period: "Performance Tuning",
			description: "Rigorous optimization to ensure the framework could handle enterprise-scale applications with consistent 60fps performance.",
			achievements: [
				"Achieved 10,000+ component capacity with stable performance",
				"Implemented intelligent memory management",
				"Optimized GPU-accelerated transitions",
				"Built comprehensive performance monitoring tools"
			],
			icon: "🚀",
			gradient: "from-green-500 to-blue-500"
		},
		{
			phase: "Publication",
			title: "NPM Release",
			period: "v0.4.0 Launch",
			description: "The framework is now production-ready and available on NPM for developers worldwide to experience the revolution in reactive programming.",
			achievements: [
				"Published ScrollForge v0.4.0 on NPM",
				"Created comprehensive documentation",
				"Established developer community",
				"Prepared for enterprise adoption"
			],
			icon: "📦",
			gradient: "from-cyan-500 to-purple-500"
		}
	];

	const technicalChallenges = [
		{
			challenge: "Unifying Three Reactive Systems",
			solution: "Created a unified causal graph that maps relationships between state, style, and behavior",
			impact: "Eliminated the complexity of managing separate reactive systems"
		},
		{
			challenge: "Enterprise-Scale Performance",
			solution: "Developed intelligent batching algorithms and GPU-accelerated optimizations",
			impact: "Achieved 10,000+ components at consistent 60fps performance"
		},
		{
			challenge: "Cross-Environment Synchronization",
			solution: "Built a universal dispatcher that works seamlessly across client and server",
			impact: "Enabled true universal reactive applications"
		},
		{
			challenge: "Memory Management at Scale",
			solution: "Implemented automatic memory optimization with lifecycle management",
			impact: "Zero memory leaks even in long-running enterprise applications"
		}
	];

	const philosophicalEvolution = [
		{
			insight: "Traditional Separation is Artificial",
			realization: "State, style, and behavior are not separate concerns - they are expressions of the same underlying relationships."
		},
		{
			insight: "Causality is Traceable",
			realization: "Every interaction creates a causal relationship that can be mapped, predicted, and optimized."
		},
		{
			insight: "Performance Through Understanding",
			realization: "By understanding causal relationships, we can optimize performance at the framework level, not just the application level."
		},
		{
			insight: "Developer Experience Through Unification",
			realization: "When systems are truly unified, complexity decreases and developer productivity increases exponentially."
		}
	];

	return (
		<section className="relative py-24 bg-black" data-section="dev-journey">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.1, 0.3, 0.1],
					}}
					transition={{
						duration: 15,
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
						Development <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-lora">
						The story behind the world's first Causal Graph Programming framework - from revolutionary concept to production reality
					</p>
				</motion.div>

				{/* Journey Timeline */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-20"
				>
					<div className="space-y-12">
						{journeySteps.map((step, index) => (
							<motion.div
								key={step.phase}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className={`flex flex-col lg:flex-row gap-8 items-center ${
									index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
								}`}
							>
								{/* Timeline node */}
								<div className="flex-shrink-0 relative">
									<div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-3xl shadow-2xl`}>
										{step.icon}
									</div>
									{index < journeySteps.length - 1 && (
										<div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-1 h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
									)}
								</div>

								{/* Content */}
								<div className={`flex-1 bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8 ${
									index % 2 === 0 ? '' : 'lg:text-right'
								}`}>
									<div className="flex items-center gap-4 mb-4">
										<h3 className="text-2xl font-bold text-white font-inter">{step.title}</h3>
										<span className="text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">{step.period}</span>
									</div>
									<p className="text-gray-300 mb-6 font-lora">{step.description}</p>
									
									<div className="space-y-3">
										{step.achievements.map((achievement, idx) => (
											<div key={idx} className={`flex items-start gap-3 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse lg:text-right'}`}>
												<div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
												<span className="text-gray-300">{achievement}</span>
											</div>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Technical Challenges */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Technical <span className="text-red-400">Challenges</span>
					</h3>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{technicalChallenges.map((item, index) => (
							<motion.div
								key={item.challenge}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/20 rounded-2xl p-8"
							>
								<h4 className="text-xl font-bold text-red-400 mb-4 font-inter">{item.challenge}</h4>
								<div className="mb-4">
									<h5 className="text-lg font-semibold text-white mb-2">Solution:</h5>
									<p className="text-gray-300 font-lora">{item.solution}</p>
								</div>
								<div>
									<h5 className="text-lg font-semibold text-white mb-2">Impact:</h5>
									<p className="text-green-300 font-lora">{item.impact}</p>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Philosophical Evolution */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Philosophical <span className="text-cyan-400">Evolution</span>
					</h3>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{philosophicalEvolution.map((item, index) => (
							<motion.div
								key={item.insight}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
							>
								<h4 className="text-xl font-bold text-cyan-400 mb-4 font-inter">{item.insight}</h4>
								<p className="text-gray-300 text-lg font-lora italic">"{item.realization}"</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Current Status & Future */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="text-center"
				>
					<div className="relative bg-black/40 border border-gray-800/50 rounded-3xl p-8 lg:p-12 overflow-hidden">
						{/* Subtle animated background */}
						<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-cyan-500/5 opacity-50"></div>
						
						<div className="relative z-10">
							<div className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8">
								<span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
								Framework Status: Live & Production Ready
							</div>

							<h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 font-inter">
								Causal Graph Programming is <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">Here</span>
							</h3>
							
							<p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-lora leading-relaxed">
								What started as a revolutionary idea has become reality. ScrollForge v0.4.0 represents 
								a fundamental shift in how we build reactive applications. The paradigm has evolved.
							</p>
							
							{/* Minimalist stats */}
							<div className="flex flex-wrap justify-center gap-8 mb-8 text-center">
								<div>
									<div className="text-2xl font-mono text-cyan-400 mb-1">v0.4.0</div>
									<div className="text-xs text-gray-500 uppercase tracking-wider">Current</div>
								</div>
								<div>
									<div className="text-2xl font-mono text-green-400 mb-1">25K+</div>
									<div className="text-xs text-gray-500 uppercase tracking-wider">Lines</div>
								</div>
								<div>
									<div className="text-2xl font-mono text-purple-400 mb-1">NPM</div>
									<div className="text-xs text-gray-500 uppercase tracking-wider">Published</div>
								</div>
							</div>

							{/* Clean action buttons */}
							<div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
								<a
									href="https://github.com/InfernusReal/ScrollForge-Unified-Framework"
									target="_blank"
									rel="noopener noreferrer"
									className="group px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white rounded-lg font-medium transition-all duration-300 text-center"
								>
									<span className="flex items-center justify-center gap-2">
										<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
											<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
										</svg>
										Explore Source
									</span>
								</a>
								<a
									href="https://www.npmjs.com/package/scrollforge"
									target="_blank"
									rel="noopener noreferrer"
									className="group px-6 py-3 bg-gradient-to-r from-purple-600/80 to-blue-600/80 hover:from-purple-600 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300 text-center"
								>
									<span className="flex items-center justify-center gap-2">
										<span className="text-red-400 font-bold text-sm">npm</span>
										Install Now
									</span>
								</a>
							</div>
							
							{/* Subtle closing message */}
							<div className="mt-8 pt-6 border-t border-gray-800/50">
								<p className="text-sm text-gray-500 font-mono">
									// The future of reactive programming starts here
								</p>
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default DevJourney;