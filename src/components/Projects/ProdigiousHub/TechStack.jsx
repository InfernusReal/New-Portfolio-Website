import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
	const techCategories = {
		frontend: {
			title: "Frontend Arsenal",
			color: "from-blue-400 to-cyan-400",
			technologies: [
				{ name: "React 18", description: "Hooks & Context for state management", icon: "⚛️" },
				{ name: "TypeScript", description: "Type-safe development", icon: "🔷" },
				{ name: "Vite", description: "Blazing-fast build tool", icon: "⚡" },
				{ name: "Tailwind CSS", description: "Utility-first styling", icon: "🎨" },
				{ name: "Framer Motion", description: "Smooth animations", icon: "🎬" },
				{ name: "React Query", description: "Server state management", icon: "🔄" }
			]
		},
		backend: {
			title: "Backend Powerhouse",
			color: "from-green-400 to-emerald-400",
			technologies: [
				{ name: "Node.js 18+", description: "JavaScript runtime", icon: "🟢" },
				{ name: "Express.js", description: "Web framework", icon: "🚀" },
				{ name: "MySQL 8.0", description: "Relational database", icon: "🗄️" },
				{ name: "Sequelize ORM", description: "Database modeling", icon: "🔗" },
				{ name: "Socket.IO", description: "Real-time communication", icon: "📡" },
				{ name: "Redis", description: "Caching & sessions", icon: "⚡" }
			]
		},
		discord: {
			title: "Discord Integration",
			color: "from-purple-400 to-pink-400",
			technologies: [
				{ name: "Discord.js v14", description: "Bot framework", icon: "🤖" },
				{ name: "Slash Commands", description: "Modern interactions", icon: "⚔️" },
				{ name: "OAuth2", description: "Seamless authentication", icon: "🔐" },
				{ name: "Webhooks", description: "Real-time notifications", icon: "📢" },
				{ name: "Rich Embeds", description: "Beautiful messages", icon: "💎" },
				{ name: "Auto Roles", description: "Dynamic permissions", icon: "👑" }
			]
		},
		devops: {
			title: "DevOps & Deployment",
			color: "from-orange-400 to-red-400",
			technologies: [
				{ name: "AWS Amplify", description: "Full-stack hosting", icon: "☁️" },
				{ name: "AWS RDS", description: "Managed database", icon: "🗃️" },
				{ name: "CloudFront CDN", description: "Global content delivery", icon: "🌐" },
				{ name: "CloudWatch", description: "Monitoring & logging", icon: "📊" },
				{ name: "GitHub Actions", description: "CI/CD pipeline", icon: "🔄" },
				{ name: "Docker", description: "Containerization", icon: "🐳" }
			]
		}
	};

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
						The powerful technologies that bring ProdigiousHub to life
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{Object.entries(techCategories).map(([key, category], categoryIndex) => (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
							viewport={{ once: true }}
							className="space-y-6"
						>
							<div className="text-center mb-8">
								<h3 className={`text-2xl sm:text-3xl font-bungee font-bold mb-2 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
									{category.title}
								</h3>
							</div>

							<div className="grid gap-4">
								{category.technologies.map((tech, techIndex) => (
									<motion.div
										key={techIndex}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
										viewport={{ once: true }}
										className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition-all duration-300 group"
										whileHover={{ scale: 1.02, y: -2 }}
									>
										<div className="flex items-center gap-4">
											<div className="text-3xl">{tech.icon}</div>
											<div className="flex-1">
												<h4 className="text-lg font-inter font-bold text-white mb-1">
													{tech.name}
												</h4>
												<p className="text-gray-400 font-lora text-sm">
													{tech.description}
												</p>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* Architecture Highlight */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
					className="mt-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-700 rounded-3xl p-12"
				>
					<h3 className="text-3xl font-bungee font-bold text-center mb-8 text-white">
						MONOREPO ARCHITECTURE
					</h3>
					<div className="bg-gray-900/70 border border-gray-600 rounded-2xl p-8">
						<code className="text-green-400 font-mono text-left block whitespace-pre-wrap">
{`ProdigiousHub/
├── frontend/          # React + Vite + Tailwind CSS
├── backend/           # Node.js + Express + Sequelize  
├── discord-bot/       # Discord.js integration
└── database/          # MySQL with optimized schemas`}
						</code>
					</div>
					<p className="text-gray-400 font-lora text-center mt-6 max-w-3xl mx-auto">
						Strategic monorepo structure designed for maximum efficiency and seamless development workflow
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default TechStack;
