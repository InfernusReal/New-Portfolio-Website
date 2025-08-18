import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = () => {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" data-section="overview">
			<div className="max-w-7xl mx-auto">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold text-white mb-6">
						Project <span className="bg-gradient-to-r from-orange-400 to-blue-500 bg-clip-text text-transparent">Overview</span>
					</h2>
					<p className="text-xl text-gray-400 max-w-3xl mx-auto font-lora">
						Building a premium corporate website for IA-Labs, a cutting-edge software development company focused on innovation and excellence.
					</p>
				</motion.div>

				{/* Main Content Grid */}
				<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
					{/* Left - Project Description */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-8"
					>
						<div>
							<h3 className="text-2xl sm:text-3xl font-inter font-bold text-white mb-4">
								The Challenge
							</h3>
							<p className="text-lg text-gray-300 leading-relaxed font-lora">
								IA-Labs needed a sophisticated corporate website that would showcase their software development expertise, 
								attract enterprise clients, and establish their brand as a leader in innovative technology solutions.
							</p>
						</div>

						<div>
							<h3 className="text-2xl sm:text-3xl font-inter font-bold text-white mb-4">
								The Solution
							</h3>
							<p className="text-lg text-gray-300 leading-relaxed font-lora">
								I designed and developed a premium corporate website featuring modern aesthetics, 
								responsive design, interactive elements, and a professional portfolio showcase that positions IA-Labs 
								as a top-tier software development company.
							</p>
						</div>

						{/* Key Achievements */}
						<div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6">
							<h4 className="text-xl font-inter font-semibold text-white mb-4">Key Achievements</h4>
							<ul className="space-y-3">
								{[
									'Modern, professional corporate design',
									'Fully responsive across all devices',
									'Interactive animations and transitions',
									'Optimized performance and SEO',
									'Professional portfolio showcase',
									'Corporate branding integration'
								].map((achievement, index) => (
									<motion.li
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
										viewport={{ once: true }}
										className="flex items-center text-gray-300"
									>
										<div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
										{achievement}
									</motion.li>
								))}
							</ul>
						</div>
					</motion.div>

					{/* Right - Project Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
							{/* Browser chrome */}
							<div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
								<div className="flex gap-2">
									<div className="w-3 h-3 bg-red-500 rounded-full"></div>
									<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
								</div>
								<div className="bg-gray-700 text-gray-400 text-sm px-3 py-1 rounded font-mono ml-4">
									ia-labs.com
								</div>
							</div>
							
							{/* Website preview */}
							<div className="aspect-video bg-gradient-to-br from-gray-900 to-black p-8 flex items-center justify-center">
								<img 
									src="/IA-Labs/Screenshot 2025-07-08 033141.png" 
									alt="IA-Labs Website Preview"
									className="w-full h-full object-cover rounded-lg"
									onError={(e) => {
										e.target.style.display = 'none';
										e.target.nextElementSibling.style.display = 'flex';
									}}
								/>
								<div className="hidden w-full h-full bg-gray-800 rounded-lg items-center justify-center">
									<div className="text-center">
										<div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
											<span className="text-2xl font-bold text-white">IA</span>
										</div>
										<p className="text-gray-400">IA-Labs Website Preview</p>
									</div>
								</div>
							</div>
						</div>

						{/* Floating elements */}
						<motion.div
							animate={{ y: [-10, 10, -10] }}
							transition={{ duration: 4, repeat: Infinity }}
							className="absolute -top-4 -right-4 bg-orange-500 p-3 rounded-xl shadow-lg"
						>
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
							</svg>
						</motion.div>

						<motion.div
							animate={{ y: [10, -10, 10] }}
							transition={{ duration: 4, repeat: Infinity, delay: 2 }}
							className="absolute -bottom-4 -left-4 bg-blue-500 p-3 rounded-xl shadow-lg"
						>
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
							</svg>
						</motion.div>
					</motion.div>
				</div>

				{/* Project Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="grid grid-cols-2 md:grid-cols-4 gap-6"
				>
					{[
						{ label: 'Development Time', value: '3 Weeks', color: 'from-orange-400 to-orange-600' },
						{ label: 'Pages Created', value: '8+', color: 'from-blue-400 to-blue-600' },
						{ label: 'Responsive Design', value: '100%', color: 'from-purple-400 to-purple-600' },
						{ label: 'Performance Score', value: '95+', color: 'from-green-400 to-green-600' }
					].map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-gray-600 transition-colors"
						>
							<h4 className={`text-3xl font-bungee font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
								{stat.value}
							</h4>
							<p className="text-gray-400 font-inter">{stat.label}</p>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectOverview;
