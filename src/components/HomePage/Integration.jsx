
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
						{/* SaaS Projects Grid */}
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

