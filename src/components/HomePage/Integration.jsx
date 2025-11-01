
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const services = [
	{
		title: 'Purpose-built for full-stack development',
		mockup: (
			<div className="relative w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden">
				<div className="absolute inset-4">
					<div className="bg-gray-700 rounded p-2 mb-2">
						<div className="flex space-x-1 mb-2">
							<div className="w-2 h-2 bg-red-500 rounded-full"></div>
							<div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
							<div className="w-2 h-2 bg-green-500 rounded-full"></div>
						</div>
						<div className="space-y-1">
							<div className="h-2 bg-blue-400 rounded w-3/4"></div>
							<div className="h-2 bg-green-400 rounded w-1/2"></div>
							<div className="h-2 bg-purple-400 rounded w-2/3"></div>
						</div>
					</div>
					<div className="bg-gray-600 rounded-full w-20 h-20 flex items-center justify-center">
						<div className="w-8 h-8 bg-white rounded-full"></div>
					</div>
				</div>
			</div>
		)
	},
	{
		title: 'Designed to move fast',
		mockup: (
			<div className="relative w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
				<div className="space-y-3 w-full px-8">
					{[...Array(6)].map((_, i) => (
						<motion.div
							key={i}
							className="h-1 bg-gray-400 rounded"
							style={{ width: `${60 + i * 8}%` }}
							initial={{ scaleX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ delay: i * 0.1, duration: 0.3 }}
						/>
					))}
				</div>
				<div className="absolute top-4 right-4 text-gray-400 text-sm font-mono">50ms</div>
			</div>
		)
	},
	{
		title: 'Crafted to perfection',
		mockup: (
			<div className="relative w-full h-48 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
				<div className="relative">
					<div className="w-24 h-16 bg-gray-700 rounded-lg transform rotate-12 shadow-lg"></div>
					<div className="absolute top-2 left-2 w-20 h-12 bg-gray-600 rounded transform -rotate-6"></div>
					<div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
						<svg width="12" height="12" viewBox="0 0 12 12" fill="none">
							<path d="M3 6L5 8L9 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</div>
					<div className="absolute -bottom-1 -left-1 text-gray-400 text-xs">Create</div>
				</div>
			</div>
		)
	}
];

const Integration = () => {
	const sectionRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 40 },
			{ opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
		);
	}, []);

	return (
		<section ref={sectionRef} data-section="projects" className="py-32 bg-black">
			<div className="max-w-7xl mx-auto px-6">
				{/* Main Content - Centered */}
				<div className="text-center space-y-16">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
							Powering innovative
							<br />
							<span className="text-white">SaaS solutions.</span>
						</h2>
						
						<p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
							From no-code e-commerce platforms to comprehensive business hubs.
						</p>
					</motion.div>

					{/* SaaS Projects Grid */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="space-y-16"
					>
						{/* Featured ScrollForge - Revolutionary Framework */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1 }}
							viewport={{ once: true }}
							className="max-w-5xl mx-auto"
						>
							<Link to="/projects/scroll-forge" className="block">
								<div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-3xl p-8 lg:p-12 hover:border-purple-500/50 transition-all duration-300 group">
									{/* Revolutionary Badge */}
									<div className="flex justify-center mb-6">
										<div className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/40 rounded-full px-6 py-3">
											<div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
											<span className="text-purple-300 font-inter font-semibold text-lg">🔥 REVOLUTIONARY FRAMEWORK</span>
											<div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
										</div>
									</div>

									<div className="text-center mb-8">
										<h3 className="text-5xl lg:text-6xl font-bungee font-bold mb-4">
											<span className="text-white">SCROLL</span>
											<span className="bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">FORGE</span>
										</h3>
										<p className="text-2xl text-gray-300 mb-4 font-lora">
											The Unified Reactive Framework
										</p>
										<p className="text-lg text-gray-400 max-w-3xl mx-auto font-inter">
											World's first framework implementing <strong className="text-purple-300">Causal Graph Programming</strong>. 
											Three unified engines, enterprise-scale performance, published on NPM.
										</p>
									</div>

									{/* Philosophy Quote */}
									<div className="text-center mb-8">
										<blockquote className="text-xl italic text-purple-300 font-lora">
											"Behavior is structure. Structure is style. Style is logic."
										</blockquote>
									</div>

									{/* Key Metrics */}
									<div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
										<div>
											<div className="text-2xl font-bold text-green-400">25K+</div>
											<div className="text-sm text-gray-400">Lines of Code</div>
										</div>
										<div>
											<div className="text-2xl font-bold text-blue-400">10K+</div>
											<div className="text-sm text-gray-400">Components @ 60fps</div>
										</div>
										<div>
											<div className="text-2xl font-bold text-purple-400">3</div>
											<div className="text-sm text-gray-400">Unified Engines</div>
										</div>
										<div>
											<div className="text-2xl font-bold text-orange-400">NPM</div>
											<div className="text-sm text-gray-400">Published</div>
										</div>
									</div>

									{/* Hover effect indicator */}
									<motion.div 
										className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded mt-8 opacity-0 group-hover:opacity-100"
										initial={{ width: 0 }}
										whileInView={{ width: "100%" }}
										transition={{ duration: 1, delay: 0.5 }}
									/>
								</div>
							</Link>
						</motion.div>

						{/* First Project Row */}
						<div className="grid grid-cols-1 gap-12 items-start justify-center max-w-6xl mx-auto mb-16">
							{/* ScrollForge Framework - REVOLUTIONARY FEATURED */}
							<motion.div
								initial={{ opacity: 0, y: -40 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.02, y: -10 }}
								className="group cursor-pointer w-full"
							>
								<Link to="/projects/scroll-forge" className="block">
									<div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border-2 border-purple-500/30 rounded-3xl overflow-hidden group-hover:border-purple-400/50 transition-all duration-300 relative">
										{/* Revolutionary Badge */}
										<div className="absolute top-4 right-4 z-10">
											<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
												🔥 REVOLUTIONARY
											</div>
										</div>
										
										{/* Background Pattern */}
										<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
										
										<div className="relative p-12 text-center">
											{/* Framework Icon */}
											<div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-3xl mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
												<span className="text-4xl">🕸️</span>
											</div>
											
											<h3 className="text-4xl lg:text-5xl font-bungee font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
												ScrollForge
											</h3>
											
											<p className="text-xl text-purple-300 font-semibold mb-4">
												The Unified Reactive Framework
											</p>
											
											<p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
												World's first <strong className="text-purple-400">Causal Graph Programming</strong> framework. 
												Three unified engines, 25,000+ lines of enterprise code, published on NPM.
											</p>
											
											{/* Key Features */}
											<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
												<div className="bg-black/20 border border-purple-500/20 rounded-xl p-4">
													<div className="text-2xl mb-2">⚡</div>
													<div className="text-purple-300 font-semibold">ScrollScript</div>
													<div className="text-gray-400 text-sm">State Engine</div>
												</div>
												<div className="bg-black/20 border border-blue-500/20 rounded-xl p-4">
													<div className="text-2xl mb-2">🎨</div>
													<div className="text-blue-300 font-semibold">ScrollWeave</div>
													<div className="text-gray-400 text-sm">Style Engine</div>
												</div>
												<div className="bg-black/20 border border-cyan-500/20 rounded-xl p-4">
													<div className="text-2xl mb-2">🏗️</div>
													<div className="text-cyan-300 font-semibold">ScrollMesh</div>
													<div className="text-gray-400 text-sm">Behavior Engine</div>
												</div>
											</div>
											
											{/* Philosophy Quote */}
											<blockquote className="text-xl italic text-purple-300 mb-8 border-l-4 border-purple-500 pl-6 max-w-2xl mx-auto">
												"Behavior is structure. Structure is style. Style is logic."
											</blockquote>
											
											{/* CTA Buttons */}
											<div className="flex flex-col sm:flex-row gap-4 justify-center">
												<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold group-hover:from-purple-700 group-hover:to-blue-700 transition-all duration-300">
													Explore Framework
												</div>
												<div className="border border-purple-500/40 text-purple-300 px-6 py-3 rounded-xl font-semibold group-hover:border-purple-400 group-hover:text-purple-200 transition-all duration-300">
													View on NPM
												</div>
											</div>
										</div>
									</div>
								</Link>
							</motion.div>
						</div>

						{/* Second Project Row */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start justify-center max-w-4xl mx-auto">
							{/* NASA Council of Lords */}
							<motion.div
								initial={{ opacity: 0, x: -40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.1 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05, y: -5 }}
								className="group cursor-pointer w-full"
							>
								<Link to="/projects/council-of-lords" className="block">
									<div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden group-hover:border-gray-600 transition-all duration-300 h-[450px] w-full flex flex-col">
									{/* Project Image */}
									<div className="relative h-48 w-full overflow-hidden bg-gray-800">
										<img 
											src="/nasa/Screenshot 2025-10-05 222808.png" 
											alt="NASA Council of Lords AI System"
											className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
									</div>
									
									<div className="p-8 flex-1 flex flex-col justify-between">
										{/* Icon */}
										<div className="flex items-center justify-center w-16 h-16 bg-blue-500/10 rounded-xl mb-6 group-hover:bg-blue-500/20 transition-colors">
											<svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-blue-400">
												<path d="M12 2L13.09 8.26L22 9L13.09 15.74L12 22L10.91 15.74L2 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
										
										<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
											Council of Lords
										</h3>
										<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
											Advanced AI ensemble conquering NASA's toughest space challenges
										</p>
										
										{/* Animated bar */}
										<motion.div 
											className="h-1 bg-blue-500/30 rounded mt-6"
											initial={{ width: 0 }}
											whileInView={{ width: "100%" }}
											transition={{ duration: 1, delay: 0.5 }}
										/>
									</div>
								</div>
								</Link>
							</motion.div>

							{/* The Prodigious Hub */}
							<motion.div
								initial={{ opacity: 0, x: 40 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.8, delay: 0.3 }}
								viewport={{ once: true }}
								whileHover={{ scale: 1.05, y: -5 }}
								className="group cursor-pointer w-full"
							>
								<Link to="/projects/prodigious-hub" className="block">
									<div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl overflow-hidden group-hover:border-gray-600 transition-all duration-300 h-[450px] w-full flex flex-col">
									{/* Project Image */}
									<div className="relative h-48 w-full overflow-hidden bg-gray-800">
										<img 
											src="/The-Prodigious-Hub/Screenshot 2025-07-30 135752.png" 
											alt="The Prodigious Hub Platform Showcase"
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
									</div>
									
									<div className="p-8 flex-1 flex flex-col justify-between">
										{/* Icon */}
										<div className="flex items-center justify-center w-16 h-16 bg-purple-500/10 rounded-xl mb-6 group-hover:bg-purple-500/20 transition-colors">
											<svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-purple-400">
												<path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
										
										<h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
											The Prodigious Hub
										</h3>
										<p className="text-gray-400 group-hover:text-gray-300 transition-colors">
											Comprehensive business management platform for modern enterprises
										</p>
										
										{/* Animated bar */}
										<motion.div 
											className="h-1 bg-purple-500/30 rounded mt-6"
											initial={{ width: 0 }}
											whileInView={{ width: "100%" }}
											transition={{ duration: 1, delay: 0.7 }}
										/>
									</div>
								</div>
								</Link>
							</motion.div>
						</div>

						{/* Floating Animation Elements */}
						<div className="relative">
							<motion.div
								className="absolute -top-8 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
								animate={{ 
									y: [-10, 10, -10],
									opacity: [0.5, 1, 0.5]
								}}
								transition={{ 
									repeat: Infinity, 
									duration: 3,
									delay: 0.5
								}}
							/>
							<motion.div
								className="absolute -top-4 right-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full"
								animate={{ 
									y: [10, -10, 10],
									opacity: [0.3, 0.8, 0.3]
								}}
								transition={{ 
									repeat: Infinity, 
									duration: 4,
									delay: 1
								}}
							/>
							<motion.div
								className="absolute top-4 left-1/2 w-1 h-1 bg-gray-400 rounded-full"
								animate={{ 
									y: [-5, 15, -5],
									x: [-5, 5, -5],
									opacity: [0.4, 0.9, 0.4]
								}}
								transition={{ 
									repeat: Infinity, 
									duration: 5,
									delay: 0.2
								}}
							/>
						</div>
					</motion.div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
						viewport={{ once: true }}
						className="pt-8"
					>
						<Link to="/projects">
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="inline-flex items-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 group"
							>
								Explore my work
								<svg 
									className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" 
									fill="none" 
									viewBox="0 0 24 24" 
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</motion.button>
						</Link>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Integration;

