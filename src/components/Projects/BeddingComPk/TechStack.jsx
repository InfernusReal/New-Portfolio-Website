import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
	const technologies = {
		frontend: [
			{ name: 'React.js', icon: '⚛️', description: 'Modern UI with hooks and context' },
			{ name: 'Tailwind CSS', icon: '🎨', description: 'Utility-first CSS framework' },
			{ name: 'Framer Motion', icon: '🎭', description: 'Smooth animations and transitions' },
			{ name: 'React Router', icon: '🛣️', description: 'Client-side routing with dynamic slugs' }
		],
		backend: [
			{ name: 'Node.js', icon: '🟢', description: 'JavaScript runtime environment' },
			{ name: 'Express.js', icon: '🚀', description: 'Fast web application framework' },
			{ name: 'MongoDB', icon: '🍃', description: 'NoSQL database for scalability' },
			{ name: 'Mongoose', icon: '📊', description: 'MongoDB object modeling' }
		],
		integrations: [
			{ name: 'EasyPaisa API', icon: '💳', description: 'Pakistani payment gateway integration' },
			{ name: 'Nodemailer', icon: '📧', description: 'Automated email notifications' },
			{ name: 'JWT', icon: '🔐', description: 'Secure authentication tokens' },
			{ name: 'Bcrypt', icon: '🛡️', description: 'Password hashing and security' }
		],
		tools: [
			{ name: 'Cloud Deploy', icon: '▲', description: 'Frontend deployment platform' },
			{ name: 'Heroku', icon: '🟣', description: 'Backend hosting on hobby dyno' },
			{ name: 'Git', icon: '📝', description: 'Version control and collaboration' },
			{ name: 'VS Code', icon: '💻', description: 'Development environment' },
			{ name: 'Postman', icon: '📮', description: 'API testing and documentation' }
		]
	};

	const architectureFeatures = [
		{
			title: "Microservices Architecture",
			description: "Modular backend services for scalability",
			icon: "🏗️"
		},
		{
			title: "RESTful API Design",
			description: "Clean, documented API endpoints",
			icon: "🔄"
		},
		{
			title: "Real-time Updates",
			description: "Live financial tracking and notifications",
			icon: "⚡"
		},
		{
			title: "Security First",
			description: "IP logging and authentication systems",
			icon: "🔒"
		}
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" data-section="tech-stack">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						TECH ARSENAL
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						Enterprise-grade technology stack built for performance, scalability, and security
					</p>
				</motion.div>

				{/* Technology Categories */}
				<div className="space-y-16">
					{Object.entries(technologies).map(([category, techs], categoryIndex) => (
						<motion.div
							key={category}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
							viewport={{ once: true }}
						>
							<h3 className="text-2xl sm:text-3xl font-bungee font-bold mb-8 text-center capitalize bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
								{category.replace('_', ' ')}
							</h3>
							
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								{techs.map((tech, techIndex) => (
									<motion.div
										key={techIndex}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: techIndex * 0.1 }}
										viewport={{ once: true }}
										className="group bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 text-center"
									>
										<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
											{tech.icon}
										</div>
										<h4 className="text-lg font-inter font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
											{tech.name}
										</h4>
										<p className="text-gray-400 font-lora text-sm">
											{tech.description}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Architecture Overview */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-20"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold mb-12 text-center bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
						SYSTEM ARCHITECTURE
					</h3>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{architectureFeatures.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gradient-to-br from-emerald-900/30 to-blue-900/30 rounded-2xl p-6 border border-emerald-500/20 text-center"
							>
								<div className="text-4xl mb-4">{feature.icon}</div>
								<h4 className="text-lg font-inter font-bold text-white mb-3">
									{feature.title}
								</h4>
								<p className="text-gray-400 font-lora text-sm">
									{feature.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Technical Highlights */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-20 bg-gray-900/50 rounded-3xl p-12 border border-gray-800"
				>
					<h3 className="text-3xl font-bungee font-bold mb-8 text-center text-white">
						TECHNICAL ACHIEVEMENTS
					</h3>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							"🚀 Optimized for 99.9% uptime",
							"⚡ Sub-second page load times",
							"🔒 End-to-end encryption",
							"📱 100% mobile responsive",
							"💾 Automated data backups",
							"🔄 CI/CD deployment pipeline",
							"📊 Real-time analytics",
							"🛡️ Advanced security logging",
							"💳 PCI DSS compliant payments"
						].map((achievement, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								viewport={{ once: true }}
								className="flex items-center gap-3 text-gray-300 font-lora"
							>
								<span className="text-lg">{achievement.split(' ')[0]}</span>
								<span>{achievement.substring(achievement.indexOf(' ') + 1)}</span>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.8 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<h3 className="text-3xl font-bungee font-bold mb-6 text-white">
						BUILT FOR THE FUTURE
					</h3>
					<p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-lora">
						Every technology choice was made with scalability, performance, and maintainability in mind.
					</p>
					
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<motion.a
							href="https://bedding.com.pk/"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-500 text-white font-inter font-semibold text-lg rounded-2xl hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Experience the Platform
						</motion.a>
						
						<motion.a
							href="https://github.com/yourusername/bedding-com-pk"
							target="_blank"
							rel="noopener noreferrer"
							className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-inter font-semibold text-lg rounded-2xl hover:bg-emerald-500/10 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Explore the Code
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStack;
