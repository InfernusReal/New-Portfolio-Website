import React from 'react';
import { motion } from 'framer-motion';

const ContactServices = () => {
	const services = [
		{
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			),
			title: "Custom SaaS Development",
			description: "Build scalable, cloud-native SaaS platforms that grow with your business. From MVP to enterprise-grade solutions.",
			features: ["Multi-tenant architecture", "API-first design", "Real-time collaboration", "Advanced analytics"],
			gradient: "from-blue-400 to-blue-600"
		},
		{
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
				</svg>
			),
			title: "Modern Web Applications",
			description: "Responsive, fast, and user-friendly websites that convert visitors into customers. Built with the latest technologies.",
			features: ["React/Next.js development", "Mobile-first design", "SEO optimization", "Performance optimization"],
			gradient: "from-green-400 to-green-600"
		},
		{
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
				</svg>
			),
			title: "Digital Transformation",
			description: "Modernize your business processes with custom software solutions that streamline operations and boost productivity.",
			features: ["Process automation", "System integration", "Data analytics", "Cloud migration"],
			gradient: "from-purple-400 to-purple-600"
		},
		{
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
				</svg>
			),
			title: "E-commerce Solutions",
			description: "Complete online stores with payment processing, inventory management, and customer analytics to boost your sales.",
			features: ["Shopify/WooCommerce", "Payment gateway integration", "Inventory management", "Customer insights"],
			gradient: "from-orange-400 to-orange-600"
		},
		{
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
				</svg>
			),
			title: "Performance Optimization",
			description: "Speed up your existing applications and websites. Faster load times mean better user experience and higher conversions.",
			features: ["Code optimization", "Database tuning", "CDN implementation", "Core Web Vitals improvement"],
			gradient: "from-yellow-400 to-yellow-600"
		},
		{
			icon: (
				<svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
				</svg>
			),
			title: "Ongoing Support & Maintenance",
			description: "Keep your systems running smoothly with 24/7 monitoring, regular updates, and quick issue resolution.",
			features: ["24/7 monitoring", "Security updates", "Performance monitoring", "Priority support"],
			gradient: "from-red-400 to-red-600"
		}
	];

	return (
		<section data-section="services" className="relative py-20 bg-black">
			{/* Grid background */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
			
			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6">
						<span className="text-white">WHAT I </span>
						<span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
							BUILD
						</span>
					</h2>
					<p className="text-xl text-gray-300 font-lora max-w-3xl mx-auto leading-relaxed">
						From concept to deployment, I create digital solutions that solve real business problems and drive measurable growth.
					</p>
				</motion.div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group relative"
						>
							{/* Card */}
							<div className="relative h-full p-8 bg-gray-900/50 border border-gray-800 rounded-3xl backdrop-blur-sm transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/70">
								{/* Gradient border effect */}
								<div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
								
								{/* Icon */}
								<div className={`inline-flex p-3 rounded-2xl bg-gradient-to-r ${service.gradient} text-white mb-6`}>
									{service.icon}
								</div>

								{/* Content */}
								<h3 className="text-2xl font-bungee font-bold text-white mb-4">
									{service.title}
								</h3>
								<p className="text-gray-300 font-inter mb-6 leading-relaxed">
									{service.description}
								</p>

								{/* Features */}
								<ul className="space-y-2">
									{service.features.map((feature, featureIndex) => (
										<li key={featureIndex} className="flex items-center text-sm text-gray-400 font-inter">
											<div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3 flex-shrink-0`}></div>
											{feature}
										</li>
									))}
								</ul>

								{/* Hover effect overlay */}
								<div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Why Choose Me Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="mt-20 text-center"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-white mb-8">
						WHY WORK WITH ME?
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{[
							{
								title: "Proven Track Record",
								description: "50+ successful projects delivered on time and within budget",
								icon: "🏆"
							},
							{
								title: "Modern Technology Stack",
								description: "Using cutting-edge tools and frameworks for future-proof solutions",
								icon: "⚡"
							},
							{
								title: "Direct Communication",
								description: "Work directly with me - no middlemen, faster decisions, better results",
								icon: "💬"
							}
						].map((benefit, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="p-6 bg-gray-900/30 border border-gray-800 rounded-2xl"
							>
								<div className="text-4xl mb-4">{benefit.icon}</div>
								<h4 className="text-xl font-bungee font-bold text-white mb-3">
									{benefit.title}
								</h4>
								<p className="text-gray-400 font-inter">
									{benefit.description}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactServices;
