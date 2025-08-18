import React from 'react';
import { motion } from 'framer-motion';

const ProjectOverview = () => {
	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" data-section="overview">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						THE VISION
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						What happens when you combine RPG mechanics with real-world project management?
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
					{/* Problem Statement */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-8">
							<h3 className="text-2xl font-inter font-bold text-red-400 mb-4 flex items-center gap-3">
								<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.664-.833-2.464 0L4.35 15.5c-.77.833.192 2.5 1.732 2.5z" />
								</svg>
								The Problem
							</h3>
							<p className="text-gray-300 font-lora leading-relaxed">
								Developers spend hours grinding in games for XP and achievements, but the same energy 
								dies when they switch to work projects. Traditional project management tools feel like 
								<span className="text-red-400 font-semibold"> digital prisons</span> that demotivate brilliant minds.
							</p>
						</div>
					</motion.div>

					{/* Solution */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-8">
							<h3 className="text-2xl font-inter font-bold text-green-400 mb-4 flex items-center gap-3">
								<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
								</svg>
								The Solution
							</h3>
							<p className="text-gray-300 font-lora leading-relaxed">
								ProdigiousHub transforms boring tasks into <span className="text-green-400 font-semibold">epic quests</span>. 
								Every bug fix, feature implementation, and code review generates XP. Contributing to real projects 
								now feels as rewarding as defeating a boss in Dark Souls.
							</p>
						</div>
					</motion.div>
				</div>

				{/* Core Concept */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-12 text-center"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
						THE GAMIFICATION ENGINE
					</h3>
					<p className="text-xl text-gray-300 font-lora mb-8 max-w-4xl mx-auto leading-relaxed">
						"What if contributing to real projects felt as rewarding as defeating a boss in Dark Souls?"
					</p>
					
					<div className="grid md:grid-cols-3 gap-8 mt-12">
						{[
							{
								icon: "⚡",
								title: "XP System",
								description: "Earn experience points for every contribution - from bug fixes to feature implementations"
							},
							{
								icon: "🏆",
								title: "Achievements",
								description: "Unlock 50+ achievements that encourage best practices and collaboration"
							},
							{
								icon: "👥",
								title: "Team Dynamics",
								description: "Real-time collaboration with Discord integration and social features"
							}
						].map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gray-900/50 border border-gray-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
								whileHover={{ y: -5 }}
							>
								<div className="text-4xl mb-4">{feature.icon}</div>
								<h4 className="text-xl font-inter font-bold text-white mb-3">{feature.title}</h4>
								<p className="text-gray-400 font-lora">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Inspiration Quote */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<blockquote className="text-2xl sm:text-3xl font-lora italic text-gray-300 max-w-4xl mx-auto leading-relaxed">
						"Picture this: I'm sitting in yet another boring team meeting, watching brilliant developers 
						get demotivated by endless project management tools that feel like digital prisons. 
						That's when it hit me like a lightning bolt ⚡"
					</blockquote>
					<cite className="block mt-6 text-lg text-purple-400 font-inter font-semibold">
						— The Moment ProdigiousHub Was Born
					</cite>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectOverview;
