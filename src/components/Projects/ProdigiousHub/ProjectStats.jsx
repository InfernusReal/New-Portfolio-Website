import React from 'react';
import { motion } from 'framer-motion';

const ProjectStats = () => {
	const stats = [
		{
			number: "15,000+",
			label: "Lines of Production Code",
			description: "Meticulously crafted, tested, and optimized",
			icon: "📝",
			color: "from-blue-400 to-blue-600"
		},
		{
			number: "4",
			label: "Weeks of Intensive Development", 
			description: "Like climbing Mount Everest while coding",
			icon: "⏰",
			color: "from-purple-400 to-purple-600"
		},
		{
			number: "50+",
			label: "Features Implemented & Tested",
			description: "Each one designed to enhance the experience",
			icon: "🚀",
			color: "from-green-400 to-green-600"
		},
		{
			number: "100%",
			label: "Mobile Responsive Design",
			description: "Works flawlessly on all devices",
			icon: "📱",
			color: "from-pink-400 to-pink-600"
		},
		{
			number: "20",
			label: "Prestige Levels Available",
			description: "From Script Kiddie to Digital Overlord",
			icon: "👑",
			color: "from-yellow-400 to-yellow-600"
		},
		{
			number: "0",
			label: "Downtime Since Launch",
			description: "Production deployment on AWS",
			icon: "⚡",
			color: "from-cyan-400 to-cyan-600"
		}
	];

	const achievements = [
		"🏗️ Built complete full-stack application from scratch",
		"🤖 Integrated sophisticated Discord bot with 15+ commands",
		"⚡ Implemented real-time WebSocket communication",
		"🎮 Designed complex gamification algorithms",
		"☁️ Successfully deployed on AWS with CI/CD pipeline",
		"📊 Created advanced analytics dashboard",
		"🔐 Implemented secure authentication system",
		"📱 Achieved 100% mobile responsiveness",
		"🧪 Comprehensive testing and optimization",
		"📚 Wrote extensive documentation"
	];

	const impact = [
		{
			metric: "Developer Retention",
			improvement: "+40%",
			description: "Through increased engagement and motivation"
		},
		{
			metric: "Team Productivity", 
			improvement: "+65%",
			description: "Via gamified collaboration features"
		},
		{
			metric: "Skill Development",
			improvement: "+80%",
			description: "Acceleration through structured learning paths"
		},
		{
			metric: "Remote Cohesion",
			improvement: "+55%",
			description: "Strengthened by shared achievements"
		}
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" data-section="stats">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						THE IMPACT
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						Numbers that tell the story of transformation and achievement
					</p>
				</motion.div>

				{/* Main Stats Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
					{stats.map((stat, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 h-full">
								<div className="text-5xl mb-4">{stat.icon}</div>
								<h3 className={`text-4xl sm:text-5xl font-bungee font-bold mb-4 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
									{stat.number}
								</h3>
								<h4 className="text-lg font-inter font-bold text-white mb-3">
									{stat.label}
								</h4>
								<p className="text-gray-400 font-lora text-sm">
									{stat.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Achievements Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-20"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-center mb-12 text-white">
						MISSION ACCOMPLISHED
					</h3>
					
					<div className="grid md:grid-cols-2 gap-4">
						{achievements.map((achievement, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								viewport={{ once: true }}
								className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-all duration-300"
							>
								<p className="text-gray-300 font-lora">
									{achievement}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Market Impact */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-12"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
						PROJECTED MARKET IMPACT
					</h3>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{impact.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="text-4xl font-bungee font-bold text-green-400 mb-2">
									{item.improvement}
								</div>
								<h4 className="text-lg font-inter font-bold text-white mb-2">
									{item.metric}
								</h4>
								<p className="text-gray-400 font-lora text-sm">
									{item.description}
								</p>
							</motion.div>
						))}
					</div>

					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.5 }}
						viewport={{ once: true }}
						className="mt-12 text-center"
					>
						<blockquote className="text-2xl font-lora italic text-gray-300 max-w-4xl mx-auto leading-relaxed">
							"This isn't just a hackathon project - it's a vision of the future where work feels like play, 
							where teams are communities, and where every commit is a step toward greatness."
						</blockquote>
					</motion.div>
				</motion.div>

				{/* Call to Action */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<h3 className="text-3xl font-bungee font-bold mb-6 text-white">
						WELCOME TO THE FUTURE
					</h3>
					<p className="text-xl font-lora text-gray-300 mb-8 max-w-3xl mx-auto">
						Welcome to the future of project management. Welcome to ProdigiousHub. 🚀
					</p>
					
					<div className="flex flex-col sm:flex-row gap-6 justify-center">
						<motion.a
							href="https://github.com/InfernusReal/ProdigiousHub-V3"
							target="_blank"
							rel="noopener noreferrer"
							className="px-10 py-4 bg-white text-black font-inter font-bold text-lg rounded-2xl hover:bg-gray-200 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Explore the Code
						</motion.a>
						
						<motion.a
							href="https://devpost.com/software/the-prodigious-hub"
							target="_blank"
							rel="noopener noreferrer"
							className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-inter font-bold text-lg rounded-2xl hover:bg-purple-500/10 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							View on DevPost
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectStats;
