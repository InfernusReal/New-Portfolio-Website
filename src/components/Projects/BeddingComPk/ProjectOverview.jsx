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
						Building the future of e-commerce with enterprise-grade features and seamless user experience
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-16 mb-20">
					{/* Problem Statement */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="space-y-6"
					>
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center">
								<span className="text-2xl">🎯</span>
							</div>
							<h3 className="text-3xl font-bungee font-bold text-white">
								THE CHALLENGE
							</h3>
						</div>
						
						<p className="text-gray-300 font-lora text-lg leading-relaxed">
							Traditional e-commerce platforms lack comprehensive admin management, financial tracking, 
							and integrated communication systems. Store owners struggle with order management, customer 
							engagement, and security monitoring.
						</p>

						<div className="space-y-3">
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-red-500 rounded-full"></span>
								<span className="font-inter">Manual order processing</span>
							</div>
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-red-500 rounded-full"></span>
								<span className="font-inter">Limited payment gateway options</span>
							</div>
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-red-500 rounded-full"></span>
								<span className="font-inter">Poor admin security monitoring</span>
							</div>
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-red-500 rounded-full"></span>
								<span className="font-inter">Lack of customer engagement tools</span>
							</div>
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
						<div className="flex items-center gap-4 mb-6">
							<div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl flex items-center justify-center">
								<span className="text-2xl">💡</span>
							</div>
							<h3 className="text-3xl font-bungee font-bold text-white">
								THE SOLUTION
							</h3>
						</div>
						
						<p className="text-gray-300 font-lora text-lg leading-relaxed">
							Bedding.com.pk delivers a complete e-commerce ecosystem with automated order management, 
							integrated payment processing, comprehensive admin tools, and advanced security features.
						</p>

						<div className="space-y-3">
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
								<span className="font-inter">Automated email notifications</span>
							</div>
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
								<span className="font-inter">EasyPaisa payment integration</span>
							</div>
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
								<span className="font-inter">Advanced security logging</span>
							</div>
							<div className="flex items-center gap-3 text-gray-400">
								<span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
								<span className="font-inter">Social media-style announcements</span>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Key Innovation */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-3xl p-12 border border-emerald-500/20"
				>
					<div className="text-center mb-12">
						<h3 className="text-3xl sm:text-4xl font-bungee font-bold mb-6 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
							ENTERPRISE FEATURES
						</h3>
						<p className="text-gray-300 font-lora text-lg max-w-3xl mx-auto">
							Beyond traditional e-commerce - a complete business management platform
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{
								icon: "📧",
								title: "Smart Email System",
								description: "Automated order confirmations sent directly to admin Gmail with complete customer and order details"
							},
							{
								icon: "💳",
								title: "Payment Integration", 
								description: "Seamless EasyPaisa integration for secure and convenient payment processing"
							},
							{
								icon: "⚙️",
								title: "Dynamic Admin Panel",
								description: "Create collections, manage products, and control slug routes dynamically"
							},
							{
								icon: "⭐",
								title: "Review System",
								description: "Built-in customer review and rating system for each product"
							},
							{
								icon: "📊",
								title: "Financial Tracker",
								description: "Comprehensive tracking of users, orders, addresses, and revenue flow"
							},
							{
								icon: "📱",
								title: "Social Feed",
								description: "Instagram-style announcement system with likes, shares, and comments"
							},
							{
								icon: "🔐",
								title: "Security Monitoring",
								description: "Advanced IP logging system for failed admin login attempts"
							},
							{
								icon: "🎯",
								title: "Dynamic Routing",
								description: "Admin-controlled product slug management for SEO optimization"
							},
							{
								icon: "💰",
								title: "Revenue Analytics",
								description: "Real-time financial insights and money flow visualization"
							}
						].map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300"
							>
								<div className="text-3xl mb-4">{feature.icon}</div>
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

				{/* Impact Statement */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<blockquote className="text-2xl sm:text-3xl font-lora italic text-gray-300 max-w-5xl mx-auto leading-relaxed">
						"This isn't just an e-commerce store - it's a complete business management ecosystem 
						that transforms how online retailers operate, engage, and grow their business."
					</blockquote>
				</motion.div>
			</div>
		</section>
	);
};

export default ProjectOverview;
