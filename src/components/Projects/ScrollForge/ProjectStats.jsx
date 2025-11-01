import React from 'react';
import { motion } from 'framer-motion';

const ProjectStats = () => {
	const coreStats = [
		{
			value: "25,000+",
			label: "Lines of Code",
			description: "Enterprise-grade codebase",
			icon: "💻",
			gradient: "from-blue-500 to-cyan-500"
		},
		{
			value: "10,000+",
			label: "Components",
			description: "@ 60fps performance",
			icon: "🧩",
			gradient: "from-purple-500 to-pink-500"
		},
		{
			value: "3",
			label: "Unified Engines",
			description: "State, Style, Behavior",
			icon: "⚡",
			gradient: "from-yellow-500 to-orange-500"
		},
		{
			value: "v0.4.0",
			label: "Current Version",
			description: "NPM Published",
			icon: "📦",
			gradient: "from-green-500 to-emerald-500"
		}
	];

	const performanceMetrics = [
		{
			metric: "Frame Rate",
			value: "60fps",
			benchmark: "Consistent performance",
			status: "Guaranteed",
			icon: "⚡"
		},
		{
			metric: "Memory Usage",
			value: "Optimized",
			benchmark: "Intelligent management",
			status: "Efficient",
			icon: "💾"
		},
		{
			metric: "Load Time",
			value: "< 100ms",
			benchmark: "Initial framework load",
			status: "Lightning fast",
			icon: "🚀"
		},
		{
			metric: "Bundle Size",
			value: "Minimal",
			benchmark: "Tree-shaken build",
			status: "Production ready",
			icon: "📦"
		}
	];

	const technicalAchievements = [
		{
			achievement: "First Causal Graph Programming Implementation",
			description: "Revolutionary paradigm that maps causal relationships in reactive systems",
			impact: "Game-changing approach to framework architecture",
			category: "Innovation"
		},
		{
			achievement: "Three-Engine Unification",
			description: "Successfully unified state, style, and behavior management",
			impact: "Eliminated complexity of managing separate reactive systems",
			category: "Architecture"
		},
		{
			achievement: "Enterprise-Scale Performance",
			description: "10,000+ components with consistent 60fps performance",
			impact: "Redefined what's possible in reactive framework performance",
			category: "Performance"
		},
		{
			achievement: "Cross-Environment Synchronization",
			description: "Universal dispatcher working across client and server",
			impact: "Enabled true universal reactive applications",
			category: "Functionality"
		},
		{
			achievement: "NPM Production Release",
			description: "Published and ready for enterprise adoption",
			impact: "Available for developers worldwide to implement",
			category: "Availability"
		}
	];

	const developmentMetrics = [
		{
			phase: "Conceptualization",
			duration: "Revolutionary Thinking",
			outcome: "Causal Graph Programming paradigm defined"
		},
		{
			phase: "Architecture",
			duration: "Foundation Building",
			outcome: "Three-engine unified system designed"
		},
		{
			phase: "Implementation",
			duration: "Intensive Development",
			outcome: "25,000+ lines of enterprise-grade code"
		},
		{
			phase: "Optimization",
			duration: "Performance Tuning",
			outcome: "10,000+ components @ 60fps achieved"
		},
		{
			phase: "Publication",
			duration: "Release Preparation",
			outcome: "NPM v0.4.0 published and available"
		}
	];

	const frameworkComparison = [
		{
			aspect: "Paradigm",
			scrollforge: "Causal Graph Programming",
			traditional: "Event-based reactive",
			advantage: "Predictable causal relationships"
		},
		{
			aspect: "Architecture",
			scrollforge: "Three unified engines",
			traditional: "Separate state/style/behavior",
			advantage: "Reduced complexity"
		},
		{
			aspect: "Performance",
			scrollforge: "10,000+ components @ 60fps",
			traditional: "Performance degradation at scale",
			advantage: "Enterprise-scale reliability"
		},
		{
			aspect: "Developer Experience",
			scrollforge: "Unified API surface",
			traditional: "Multiple learning curves",
			advantage: "Single paradigm to master"
		}
	];

	return (
		<section className="relative py-24 bg-black" data-section="project-stats">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute top-1/4 right-1/3 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
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
						Project <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Statistics</span>
					</h2>
					<p className="text-xl text-gray-300 max-w-3xl mx-auto font-lora">
						The numbers behind the world's first Causal Graph Programming framework
					</p>
				</motion.div>

				{/* Core Statistics */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="mb-20"
				>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{coreStats.map((stat, index) => (
							<motion.div
								key={stat.label}
								initial={{ scale: 0, opacity: 0 }}
								whileInView={{ scale: 1, opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 border border-gray-700/40 rounded-2xl p-8 text-center"
							>
								<div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl mx-auto mb-4 flex items-center justify-center text-2xl`}>
									{stat.icon}
								</div>
								<div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
								<div className="text-lg font-semibold text-gray-300 mb-1">{stat.label}</div>
								<div className="text-sm text-gray-500">{stat.description}</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Performance Metrics */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Performance <span className="text-green-400">Metrics</span>
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{performanceMetrics.map((metric, index) => (
							<motion.div
								key={metric.metric}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/20 rounded-xl p-6"
							>
								<div className="text-3xl mb-3 text-center">{metric.icon}</div>
								<h4 className="text-lg font-bold text-white mb-2 text-center font-inter">{metric.metric}</h4>
								<div className="text-2xl font-bold text-green-400 text-center mb-2">{metric.value}</div>
								<div className="text-sm text-gray-300 text-center mb-1">{metric.benchmark}</div>
								<div className="text-xs text-green-300 text-center">{metric.status}</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Technical Achievements */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Technical <span className="text-purple-400">Achievements</span>
					</h3>

					<div className="space-y-6">
						{technicalAchievements.map((achievement, index) => (
							<motion.div
								key={achievement.achievement}
								initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8"
							>
								<div className="flex flex-col lg:flex-row gap-6">
									<div className="flex-1">
										<div className="flex items-center gap-4 mb-4">
											<h4 className="text-xl font-bold text-white font-inter">{achievement.achievement}</h4>
											<span className="text-sm text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full">{achievement.category}</span>
										</div>
										<p className="text-gray-300 mb-4 font-lora">{achievement.description}</p>
										<p className="text-purple-300 font-semibold">{achievement.impact}</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Development Timeline */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.8 }}
					className="mb-20"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						Development <span className="text-blue-400">Timeline</span>
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-5 gap-6">
						{developmentMetrics.map((phase, index) => (
							<motion.div
								key={phase.phase}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: index * 0.2 }}
								className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-xl p-6 text-center"
							>
								<h4 className="text-lg font-bold text-blue-400 mb-2 font-inter">{phase.phase}</h4>
								<div className="text-sm text-gray-400 mb-3">{phase.duration}</div>
								<p className="text-gray-300 text-sm font-lora">{phase.outcome}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Framework Comparison */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 1 }}
					className="mb-12"
				>
					<h3 className="text-3xl font-bold text-white mb-12 text-center font-inter">
						ScrollForge vs <span className="text-orange-400">Traditional Frameworks</span>
					</h3>

					<div className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 border border-gray-700/40 rounded-2xl p-8">
						<div className="space-y-6">
							{frameworkComparison.map((comparison, index) => (
								<motion.div
									key={comparison.aspect}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.8, delay: index * 0.2 }}
									className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-center p-4 rounded-xl bg-black/20"
								>
									<div className="text-white font-semibold">{comparison.aspect}</div>
									<div className="text-green-400">{comparison.scrollforge}</div>
									<div className="text-gray-400">{comparison.traditional}</div>
									<div className="text-purple-300 font-medium">{comparison.advantage}</div>
								</motion.div>
							))}
						</div>
					</div>
				</motion.div>

				{/* Final CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 1.2 }}
					className="text-center"
				>
					<div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-white mb-4 font-inter">
							Experience the <span className="text-purple-400">Revolution</span>
						</h3>
						<p className="text-gray-300 mb-6 font-lora">
							ScrollForge v0.4.0 is available now. Join the Causal Graph Programming revolution.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href="https://www.npmjs.com/package/scrollforge"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
							>
								Install ScrollForge
							</a>
							<a
								href="https://github.com/InfernusReal/ScrollForge-Unified-Framework"
								target="_blank"
								rel="noopener noreferrer"
								className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
							>
								View Source Code
							</a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectStats;