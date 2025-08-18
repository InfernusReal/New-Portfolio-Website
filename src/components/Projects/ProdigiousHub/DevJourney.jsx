import React from 'react';
import { motion } from 'framer-motion';

const DevJourney = () => {
	const phases = [
		{
			week: "Week 1",
			title: "The Foundation",
			color: "from-blue-400 to-blue-600",
			challenges: [
				"Monorepo structure setup",
				"React 18 + Vite configuration",
				"Express.js REST API design",
				"MySQL database schema optimization"
			],
			breakthrough: "Mastered the core architecture decisions that would scale."
		},
		{
			week: "Week 2", 
			title: "The Gamification Engine",
			color: "from-purple-400 to-purple-600",
			challenges: [
				"XP calculation algorithm design",
				"Achievement system architecture",
				"Database optimization for read-heavy operations",
				"Strategic indexing implementation"
			],
			breakthrough: "Created the mathematical foundation that makes every contribution rewarding."
		},
		{
			week: "Week 3",
			title: "Discord Bot Revolution", 
			color: "from-green-400 to-green-600",
			challenges: [
				"Discord API rate limiting hell",
				"Slash commands with autocomplete",
				"Real-time WebSocket architecture",
				"OAuth2 flow implementation"
			],
			breakthrough: "Built a digital nervous system connecting Discord to the platform."
		},
		{
			week: "Week 4",
			title: "The UI/UX Revolution",
			color: "from-pink-400 to-pink-600", 
			challenges: [
				"Mobile responsiveness nightmare",
				"Performance optimization",
				"AWS Amplify deployment complexity",
				"WCAG 2.1 AA compliance"
			],
			breakthrough: "Crafted an interface that doesn't suck and works everywhere."
		}
	];

	const majorChallenges = [
		{
			title: "The Great Database Optimization Crisis",
			problem: "Initial queries were slower than Internet Explorer",
			solution: "Implemented query optimization, connection pooling, and efficient aggregation queries"
		},
		{
			title: "Real-Time Synchronization Nightmare", 
			problem: "Keeping multiple users synchronized was harder than herding cats",
			solution: "Conflict resolution algorithms, optimistic concurrency control, and event sourcing"
		},
		{
			title: "Discord API Rate Limiting Hell",
			problem: "Discord's rate limits were stricter than airport security", 
			solution: "Intelligent request queuing, exponential backoff, and batch operations"
		},
		{
			title: "AWS Deployment Complexity",
			problem: "Deploying a monorepo on AWS Amplify was like solving a Rubik's cube blindfolded",
			solution: "Mastered monorepo configuration, custom build specs, and CI/CD pipelines"
		}
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" data-section="dev-journey">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						THE JOURNEY
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						Four weeks of intensive development, countless challenges, and breakthrough moments
					</p>
				</motion.div>

				{/* Development Phases */}
				<div className="space-y-12 mb-20">
					{phases.map((phase, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8, delay: index * 0.1 }}
							viewport={{ once: true }}
							className={`flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
						>
							<div className="lg:w-1/2 space-y-6">
								<div className="flex items-center gap-4">
									<span className={`px-4 py-2 bg-gradient-to-r ${phase.color} text-white font-inter font-bold rounded-full text-sm`}>
										{phase.week}
									</span>
									<h3 className="text-2xl sm:text-3xl font-bungee font-bold text-white">
										{phase.title}
									</h3>
								</div>
								
								<div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
									<h4 className="text-lg font-inter font-semibold text-purple-400 mb-4">
										Key Challenges:
									</h4>
									<ul className="space-y-2">
										{phase.challenges.map((challenge, cIndex) => (
											<li key={cIndex} className="flex items-start gap-3 text-gray-300 font-lora">
												<span className="text-purple-400 mt-1">•</span>
												{challenge}
											</li>
										))}
									</ul>
								</div>

								<div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
									<h4 className="text-lg font-inter font-semibold text-green-400 mb-3">
										💡 Breakthrough:
									</h4>
									<p className="text-gray-300 font-lora">
										{phase.breakthrough}
									</p>
								</div>
							</div>

							<div className="lg:w-1/2">
								<div className={`w-32 h-32 mx-auto bg-gradient-to-br ${phase.color} rounded-full flex items-center justify-center text-4xl font-bungee font-bold text-white shadow-2xl`}>
									{index + 1}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Major Challenges Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-16"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-center mb-12 text-white">
						CHALLENGES THAT NEARLY BROKE ME
					</h3>

					<div className="grid md:grid-cols-2 gap-8">
						{majorChallenges.map((challenge, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300"
							>
								<h4 className="text-xl font-inter font-bold text-red-400 mb-4 flex items-center gap-3">
									<span className="text-2xl">💀</span>
									{challenge.title}
								</h4>
								
								<div className="space-y-4">
									<div>
										<h5 className="text-sm font-inter font-semibold text-red-300 mb-2 uppercase tracking-wide">
											The Problem:
										</h5>
										<p className="text-gray-300 font-lora text-sm">
											{challenge.problem}
										</p>
									</div>
									
									<div>
										<h5 className="text-sm font-inter font-semibold text-green-300 mb-2 uppercase tracking-wide">
											The Solution:
										</h5>
										<p className="text-gray-300 font-lora text-sm">
											{challenge.solution}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Learning Outcomes */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-12 text-center"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
						KNOWLEDGE GAINED
					</h3>
					
					<div className="grid md:grid-cols-2 gap-8 text-left">
						<div>
							<h4 className="text-xl font-inter font-bold text-purple-400 mb-4">
								🧠 Technical Mastery:
							</h4>
							<ul className="space-y-2 text-gray-300 font-lora">
								<li>• Full-stack architecture design patterns</li>
								<li>• Real-time application development</li>
								<li>• Database optimization techniques</li>
								<li>• API design following RESTful principles</li>
								<li>• Cloud deployment strategies</li>
								<li>• Security implementation</li>
							</ul>
						</div>
						
						<div>
							<h4 className="text-xl font-inter font-bold text-blue-400 mb-4">
								🚀 Industry Insights:
							</h4>
							<ul className="space-y-2 text-gray-300 font-lora">
								<li>• Gamification psychology</li>
								<li>• Team dynamics optimization</li>
								<li>• Developer tools market gaps</li>
								<li>• Scalability planning</li>
								<li>• User experience design</li>
								<li>• Performance debugging</li>
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default DevJourney;
