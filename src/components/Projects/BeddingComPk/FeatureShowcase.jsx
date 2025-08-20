import React from 'react';
import { motion } from 'framer-motion';

const FeatureShowcase = () => {
	const features = [
		{
			category: "E-commerce Core",
			description: "Complete online shopping experience with modern interface",
			features: [
				{
					icon: "🛒",
					title: "Shopping Cart System",
					description: "Advanced cart management with real-time updates and persistence"
				},
				{
					icon: "🏷️",
					title: "Product Catalog",
					description: "Dynamic product management with categories and filtering"
				},
				{
					icon: "⭐",
					title: "Review System",
					description: "Customer reviews and ratings for each product"
				},
				{
					icon: "🔍",
					title: "Search & Filter",
					description: "Advanced search functionality with multiple filter options"
				}
			]
		},
		{
			category: "Payment & Orders",
			description: "Secure payment processing and order management",
			features: [
				{
					icon: "💳",
					title: "EasyPaisa Integration",
					description: "Seamless payment processing with popular Pakistani payment gateway"
				},
				{
					icon: "📧",
					title: "Automated Emails",
					description: "Instant order confirmations sent to admin with full details"
				},
				{
					icon: "📦",
					title: "Order Tracking",
					description: "Complete order lifecycle management from placement to delivery"
				},
				{
					icon: "💰",
					title: "Financial Tracking",
					description: "Real-time revenue tracking and financial analytics"
				}
			]
		},
		{
			category: "Admin Panel",
			description: "Comprehensive administration dashboard",
			features: [
				{
					icon: "⚙️",
					title: "Product Management",
					description: "Create, edit, and manage products with dynamic slug generation"
				},
				{
					icon: "📂",
					title: "Collection Manager",
					description: "Organize products into collections and categories"
				},
				{
					icon: "📊",
					title: "Analytics Dashboard",
					description: "Comprehensive insights into sales, users, and performance"
				},
				{
					icon: "🔐",
					title: "Security Logs",
					description: "IP tracking and monitoring for failed login attempts"
				}
			]
		},
		{
			category: "Social Features",
			description: "Community engagement and social interaction",
			features: [
				{
					icon: "📱",
					title: "Live Announcements",
					description: "Instagram-style feed for company announcements and updates"
				},
				{
					icon: "👍",
					title: "Like & Share System",
					description: "Social interaction features for announcements and products"
				},
				{
					icon: "💬",
					title: "Comment System",
					description: "Customer engagement through comments and discussions"
				},
				{
					icon: "📢",
					title: "Admin Broadcasting",
					description: "Direct communication channel from admin to customers"
				}
			]
		}
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" data-section="features">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						FEATURE POWERHOUSE
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						Every feature designed to deliver enterprise-grade e-commerce experience
					</p>
				</motion.div>

				<div className="space-y-20">
					{features.map((category, categoryIndex) => (
						<motion.div
							key={categoryIndex}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
							viewport={{ once: true }}
						>
							{/* Category Header */}
							<div className="text-center mb-12">
								<h3 className="text-3xl sm:text-4xl font-bungee font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
									{category.category}
								</h3>
								<p className="text-lg text-gray-400 font-lora max-w-2xl mx-auto">
									{category.description}
								</p>
							</div>

							{/* Features Grid */}
							<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
								{category.features.map((feature, featureIndex) => (
									<motion.div
										key={featureIndex}
										initial={{ opacity: 0, y: 30 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: featureIndex * 0.1 }}
										viewport={{ once: true }}
										className="group bg-gray-900/50 rounded-2xl p-6 border border-gray-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10"
									>
										<div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
											{feature.icon}
										</div>
										<h4 className="text-lg font-inter font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
											{feature.title}
										</h4>
										<p className="text-gray-400 font-lora text-sm leading-relaxed">
											{feature.description}
										</p>
									</motion.div>
								))}
							</div>
						</motion.div>
					))}
				</div>

				{/* CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-3xl p-12 border border-emerald-500/20">
						<h3 className="text-3xl font-bungee font-bold mb-6 text-white">
							READY TO SCALE YOUR BUSINESS?
						</h3>
						<p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-lora">
							Experience the power of enterprise e-commerce with advanced features that grow with your business.
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
								Explore Live Demo
							</motion.a>
							
							<motion.a
								href="https://github.com/infernusreal"
								target="_blank"
								rel="noopener noreferrer"
								className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 font-inter font-semibold text-lg rounded-2xl hover:bg-emerald-500/10 transition-all duration-300"
								whileHover={{ scale: 1.05, y: -2 }}
								whileTap={{ scale: 0.95 }}
							>
								View Source Code
							</motion.a>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FeatureShowcase;
