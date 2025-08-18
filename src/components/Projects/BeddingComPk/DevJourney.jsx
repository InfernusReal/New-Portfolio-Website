import React from 'react';
import { motion } from 'framer-motion';

const DevJourney = () => {
	const journeyPhases = [
		{
			phase: "Research & Planning",
			duration: "Week 1",
			icon: "🔍",
			color: "from-blue-400 to-blue-600",
			tasks: [
				"Market research for Pakistani e-commerce landscape",
				"EasyPaisa API documentation study",
				"UI/UX design planning and wireframing",
				"Database schema design for scalability"
			],
			challenge: "Understanding local payment preferences and security requirements",
			solution: "Extensive research into Pakistani fintech ecosystem and user behavior"
		},
		{
			phase: "Foundation & Setup",
			duration: "Week 2",
			icon: "🏗️",
			color: "from-emerald-400 to-emerald-600",
			tasks: [
				"Project structure and repository setup",
				"React.js frontend initialization",
				"Node.js/Express backend architecture",
				"MongoDB database configuration"
			],
			challenge: "Setting up scalable project architecture from the start",
			solution: "Implemented modular design patterns and separation of concerns"
		},
		{
			phase: "Core Development",
			duration: "Week 3-4",
			icon: "⚙️",
			color: "from-purple-400 to-purple-600",
			tasks: [
				"E-commerce functionality implementation",
				"Product management system development",
				"Shopping cart and checkout process",
				"User authentication and authorization"
			],
			challenge: "Building complex product management with dynamic slug generation",
			solution: "Created flexible CMS-like admin panel with real-time slug updates"
		},
		{
			phase: "Payment Integration",
			duration: "Week 4-5",
			icon: "💳",
			color: "from-yellow-400 to-yellow-600",
			tasks: [
				"EasyPaisa API integration and testing",
				"Payment flow optimization",
				"Transaction security implementation",
				"Error handling and edge cases"
			],
			challenge: "Ensuring secure and reliable payment processing",
			solution: "Implemented comprehensive error handling and payment verification"
		},
		{
			phase: "Advanced Features",
			duration: "Week 5-6",
			icon: "🚀",
			color: "from-pink-400 to-pink-600",
			tasks: [
				"Automated email notification system",
				"Financial tracking dashboard",
				"Review and rating system",
				"Social announcement feed"
			],
			challenge: "Creating Instagram-like social features for e-commerce",
			solution: "Built custom social feed with likes, comments, and admin broadcasting"
		},
		{
			phase: "Security & Analytics",
			duration: "Week 6",
			icon: "🔐",
			color: "from-red-400 to-red-600",
			tasks: [
				"IP logging for failed login attempts",
				"Security audit and penetration testing",
				"Analytics dashboard implementation",
				"Performance optimization"
			],
			challenge: "Balancing user experience with security requirements",
			solution: "Implemented transparent security measures that enhance rather than hinder UX"
		},
		{
			phase: "Testing & Deployment",
			duration: "Week 6",
			icon: "🎯",
			color: "from-green-400 to-green-600",
			tasks: [
				"Comprehensive testing across devices",
				"Performance optimization and caching",
				"Production deployment on Vercel",
				"Monitoring and analytics setup"
			],
			challenge: "Ensuring 100% mobile responsiveness and fast load times",
			solution: "Implemented progressive enhancement and performance best practices"
		}
	];

	const technicalChallenges = [
		{
			title: "EasyPaisa Integration Complexity",
			description: "Pakistani payment gateways have unique requirements and documentation challenges",
			solution: "Built comprehensive testing environment and error handling system",
			impact: "Achieved 95%+ payment success rate"
		},
		{
			title: "Dynamic Slug Management",
			description: "Admin-controlled product URLs for SEO while maintaining data integrity",
			solution: "Created intelligent slug generation with conflict resolution",
			impact: "Improved SEO rankings and admin flexibility"
		},
		{
			title: "Real-time Financial Tracking",
			description: "Live revenue analytics with user privacy and accurate calculations",
			solution: "Implemented efficient aggregation pipelines and caching strategies",
			impact: "Sub-second dashboard load times with live data"
		},
		{
			title: "Security vs Usability Balance",
			description: "Strong security measures without compromising user experience",
			solution: "Transparent security with smart IP logging and session management",
			impact: "Zero security breaches with smooth user experience"
		}
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" data-section="dev-journey">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						DEVELOPMENT JOURNEY
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						From concept to production - the complete story of building enterprise e-commerce
					</p>
				</motion.div>

				{/* Development Timeline */}
				<div className="relative">
					{/* Timeline line */}
					<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-blue-500 to-purple-500 transform md:-translate-x-1/2"></div>

					<div className="space-y-16">
						{journeyPhases.map((phase, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: index * 0.1 }}
								viewport={{ once: true }}
								className={`relative flex items-center ${
									index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
								} flex-col md:gap-16`}
							>
								{/* Timeline dot */}
								<div className={`absolute left-8 md:left-1/2 w-6 h-6 bg-gradient-to-r ${phase.color} rounded-full transform md:-translate-x-1/2 z-10 shadow-lg`}></div>

								{/* Content card */}
								<div className={`flex-1 ml-20 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
									<div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 hover:border-emerald-500/50 transition-all duration-500">
										<div className="flex items-center gap-4 mb-6">
											<div className={`text-4xl p-3 bg-gradient-to-r ${phase.color} rounded-2xl`}>
												{phase.icon}
											</div>
											<div>
												<h3 className="text-2xl font-bungee font-bold text-white">
													{phase.phase}
												</h3>
												<p className="text-emerald-400 font-inter font-semibold">
													{phase.duration}
												</p>
											</div>
										</div>

										<div className="space-y-6">
											{/* Tasks */}
											<div>
												<h4 className="text-lg font-inter font-bold text-white mb-3">
													Key Tasks:
												</h4>
												<ul className="space-y-2">
													{phase.tasks.map((task, taskIndex) => (
														<li key={taskIndex} className="flex items-start gap-3 text-gray-300 font-lora">
															<span className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></span>
															{task}
														</li>
													))}
												</ul>
											</div>

											{/* Challenge & Solution */}
											<div className="bg-gray-800/50 rounded-2xl p-6">
												<div className="mb-4">
													<h5 className="text-sm font-inter font-bold text-red-400 mb-2">
														CHALLENGE:
													</h5>
													<p className="text-gray-300 font-lora text-sm">
														{phase.challenge}
													</p>
												</div>
												<div>
													<h5 className="text-sm font-inter font-bold text-emerald-400 mb-2">
														SOLUTION:
													</h5>
													<p className="text-gray-300 font-lora text-sm">
														{phase.solution}
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>

				{/* Technical Challenges Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-20"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
						MAJOR TECHNICAL CHALLENGES
					</h3>

					<div className="grid md:grid-cols-2 gap-8">
						{technicalChallenges.map((challenge, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300"
							>
								<h4 className="text-xl font-inter font-bold text-white mb-4">
									{challenge.title}
								</h4>
								
								<div className="space-y-4">
									<div>
										<h5 className="text-sm font-inter font-bold text-red-400 mb-2">PROBLEM:</h5>
										<p className="text-gray-300 font-lora text-sm leading-relaxed">
											{challenge.description}
										</p>
									</div>
									
									<div>
										<h5 className="text-sm font-inter font-bold text-emerald-400 mb-2">APPROACH:</h5>
										<p className="text-gray-300 font-lora text-sm leading-relaxed">
											{challenge.solution}
										</p>
									</div>
									
									<div className="bg-emerald-900/20 rounded-lg p-3 border border-emerald-500/20">
										<h5 className="text-sm font-inter font-bold text-emerald-400 mb-1">RESULT:</h5>
										<p className="text-emerald-300 font-lora text-sm">
											{challenge.impact}
										</p>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Lessons Learned */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-20 bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-3xl p-12 border border-emerald-500/20"
				>
					<h3 className="text-3xl font-bungee font-bold text-center mb-8 text-white">
						KEY LEARNINGS
					</h3>

					<div className="grid md:grid-cols-3 gap-8">
						{[
							{
								icon: "🎯",
								title: "User-Centric Design",
								lesson: "Every feature must solve a real user problem, not just showcase technical capability"
							},
							{
								icon: "🔒",
								title: "Security by Design",
								lesson: "Building security into the foundation is easier than retrofitting it later"
							},
							{
								icon: "📈",
								title: "Scalable Architecture",
								lesson: "Planning for growth from day one saves months of refactoring later"
							},
							{
								icon: "🤝",
								title: "Local Market Understanding",
								lesson: "Success requires deep understanding of local payment and user preferences"
							},
							{
								icon: "⚡",
								title: "Performance Matters",
								lesson: "Speed is a feature - every millisecond impacts user experience and conversion"
							},
							{
								icon: "🔄",
								title: "Iterative Development",
								lesson: "Regular testing and feedback loops prevent major issues down the line"
							}
						].map((learning, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="text-4xl mb-4">{learning.icon}</div>
								<h4 className="text-lg font-inter font-bold text-white mb-3">
									{learning.title}
								</h4>
								<p className="text-gray-300 font-lora text-sm leading-relaxed">
									{learning.lesson}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Final CTA */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<h3 className="text-3xl font-bungee font-bold mb-6 text-white">
						FROM VISION TO REALITY
					</h3>
					<p className="text-xl font-lora text-gray-300 mb-8 max-w-3xl mx-auto">
						Six weeks of intensive development, countless challenges overcome, and a platform that 
						transforms e-commerce for Pakistani businesses. 🇵🇰
					</p>
					
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<motion.a
							href="https://bedding.com.pk/"
							target="_blank"
							rel="noopener noreferrer"
							className="px-10 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-inter font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Experience the Platform
						</motion.a>
						
						<motion.a
							href="https://github.com/InfernusReal/BeddingStore-Frontend"
							target="_blank"
							rel="noopener noreferrer"
							className="px-10 py-4 border-2 border-emerald-500 text-emerald-400 font-inter font-bold text-lg rounded-2xl hover:bg-emerald-500/10 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Frontend Code
						</motion.a>
						
						<motion.a
							href="https://github.com/InfernusReal/BeddingStore-Backend"
							target="_blank"
							rel="noopener noreferrer"
							className="px-10 py-4 border-2 border-blue-500 text-blue-400 font-inter font-bold text-lg rounded-2xl hover:bg-blue-500/10 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Backend Code
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default DevJourney;
