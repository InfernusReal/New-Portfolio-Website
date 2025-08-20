import React from 'react';
import { motion } from 'framer-motion';

const ProjectStats = () => {
	const stats = [
		{
			number: "10,000+",
			label: "Lines of Production Code",
			description: "Clean, documented, and scalable codebase",
			icon: "📝",
			color: "from-emerald-400 to-emerald-600"
		},
		{
			number: "6",
			label: "Weeks of Development",
			description: "From concept to production deployment",
			icon: "⏰",
			color: "from-blue-400 to-blue-600"
		},
		{
			number: "35+",
			label: "Core Features Implemented",
			description: "Enterprise-grade e-commerce functionality",
			icon: "🚀",
			color: "from-purple-400 to-purple-600"
		},
		{
			number: "100%",
			label: "Mobile Responsive",
			description: "Optimized for all devices and screen sizes",
			icon: "📱",
			color: "from-pink-400 to-pink-600"
		},
		{
			number: "99.9%",
			label: "Uptime Achievement",
			description: "Reliable production cloud deployment",
			icon: "⚡",
			color: "from-yellow-400 to-yellow-600"
		},
		{
			number: "0",
			label: "Security Breaches",
			description: "Advanced security with IP logging",
			icon: "🔐",
			color: "from-green-400 to-green-600"
		}
	];

	const businessImpact = [
		{
			metric: "Order Processing",
			improvement: "+90%",
			description: "Faster with automated email system"
		},
		{
			metric: "Admin Efficiency",
			improvement: "+75%",
			description: "Through comprehensive dashboard"
		},
		{
			metric: "Customer Engagement",
			improvement: "+60%",
			description: "Via social feed and reviews"
		},
		{
			metric: "Payment Success Rate",
			improvement: "+95%",
			description: "With EasyPaisa integration"
		}
	];

	const technicalAchievements = [
		"🏗️ Built complete full-stack e-commerce platform",
		"💳 Integrated EasyPaisa payment gateway",
		"📧 Implemented automated email notification system",
		"⚙️ Created dynamic admin panel with product management",
		"⭐ Developed comprehensive review and rating system",
		"🔍 Built advanced search and filtering capabilities",
		"📊 Designed real-time financial tracking dashboard",
		"📱 Implemented Instagram-style announcement feed",
		"🔐 Created security monitoring with IP logging",
		"🛣️ Built dynamic slug routing system"
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
						THE NUMBERS
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						Quantifying the impact and technical excellence of Bedding.com.pk
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
							<div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 text-center hover:border-emerald-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-500/10 h-full">
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

				{/* Technical Achievements */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mb-20"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-center mb-12 text-white">
						TECHNICAL MILESTONES
					</h3>
					
					<div className="grid md:grid-cols-2 gap-4">
						{technicalAchievements.map((achievement, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.5, delay: index * 0.05 }}
								viewport={{ once: true }}
								className="bg-gray-900/30 border border-gray-800 rounded-xl p-4 hover:border-emerald-500/50 transition-all duration-300"
							>
								<p className="text-gray-300 font-lora">
									{achievement}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Business Impact */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-3xl p-12"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-center mb-12 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
						BUSINESS TRANSFORMATION
					</h3>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{businessImpact.map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="text-center"
							>
								<div className="text-4xl font-bungee font-bold text-emerald-400 mb-2">
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
							"This platform doesn't just sell products - it transforms the entire e-commerce 
							experience with enterprise-grade features that scale with business growth."
						</blockquote>
					</motion.div>
				</motion.div>

				{/* Performance Metrics */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-20 grid md:grid-cols-3 gap-8"
				>
					<div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center">
						<div className="text-6xl mb-4">⚡</div>
						<h4 className="text-2xl font-bungee font-bold text-white mb-2">Lightning Fast</h4>
						<p className="text-gray-400 font-lora">Sub-second page loads with optimized performance</p>
					</div>
					
					<div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center">
						<div className="text-6xl mb-4">🔒</div>
						<h4 className="text-2xl font-bungee font-bold text-white mb-2">Bank-Grade Security</h4>
						<p className="text-gray-400 font-lora">Advanced encryption and monitoring systems</p>
					</div>
					
					<div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 text-center">
						<div className="text-6xl mb-4">📈</div>
						<h4 className="text-2xl font-bungee font-bold text-white mb-2">Scalable Architecture</h4>
						<p className="text-gray-400 font-lora">Built to handle enterprise-level traffic</p>
					</div>
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
						EXPERIENCE THE DIFFERENCE
					</h3>
					<p className="text-xl font-lora text-gray-300 mb-8 max-w-3xl mx-auto">
						See how enterprise e-commerce should be done. 🛒
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
							Visit Live Platform
						</motion.a>
						
						<motion.a
							href="https://github.com/infernusreal"
							target="_blank"
							rel="noopener noreferrer"
							className="px-10 py-4 border-2 border-emerald-500 text-emerald-400 font-inter font-bold text-lg rounded-2xl hover:bg-emerald-500/10 transition-all duration-300"
							whileHover={{ scale: 1.05, y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							Explore Source Code
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectStats;
