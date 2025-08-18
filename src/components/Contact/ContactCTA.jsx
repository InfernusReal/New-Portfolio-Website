import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactCTA = () => {
	const [showPopup, setShowPopup] = useState(null);

	const handlePopupClose = () => {
		setShowPopup(null);
	};
	const contactMethods = [
		{
			icon: (
				<svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
				</svg>
			),
			title: "WhatsApp",
			description: "+92 3238507347 (Preferred)",
			action: "Chat Now",
			link: "https://wa.me/923238507347?text=Hi%20Saif!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you.",
			gradient: "from-green-500 to-green-600",
			isExternal: true,
			type: "link"
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			),
			title: "Email",
			description: "Infernusrm@gmail.com",
			action: "View Email",
			link: "",
			gradient: "from-blue-500 to-blue-600",
			isExternal: false,
			type: "popup",
			popupContent: "email"
		},
		{
			icon: (
				<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
				</svg>
			),
			title: "Schedule Call",
			description: "15-min consultation",
			action: "Book Now",
			link: "",
			gradient: "from-purple-500 to-purple-600",
			isExternal: false,
			type: "popup",
			popupContent: "schedule"
		}
	];

	const faqs = [
		{
			question: "How quickly can you start my project?",
			answer: "Most projects can start within 1-2 days. I can deliver websites and SaaS applications within half a week to a week, depending on complexity."
		},
		{
			question: "Do you work with startups or only established companies?",
			answer: "I work with businesses of all sizes - from solo entrepreneurs to Fortune 500 companies. I offer flexible pricing and payment terms for startups."
		},
		{
			question: "What's included in your development process?",
			answer: "Complete project lifecycle: planning, design, development, testing, deployment, and cheap ongoing support for a full year. You own all code and assets."
		},
		{
			question: "Can you help with existing projects or only new ones?",
			answer: "Both! I can optimize existing applications, add new features, fix bugs, or completely rebuild legacy systems with modern technology - usually within 3-5 days."
		}
	];

	return (
		<section className="relative py-20 bg-black">
			{/* Background effects */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					transition={{ duration: 2 }}
					viewport={{ once: true }}
				/>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Main CTA Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6">
						<span className="text-white">READY TO </span>
						<span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
							GET STARTED?
						</span>
					</h2>
					<p className="text-xl text-gray-300 font-lora max-w-3xl mx-auto leading-relaxed mb-12">
						Don't let another day pass with outdated technology holding your business back. Let's build something amazing together.
					</p>
				</motion.div>

				{/* Contact Methods */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
					{contactMethods.map((method, index) => {
						// Direct link card (WhatsApp)
						if (method.type === "link") {
							return (
								<motion.a
									key={index}
									href={method.link}
									target={method.isExternal ? "_blank" : "_self"}
									rel={method.isExternal ? "noopener noreferrer" : ""}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="group relative block"
								>
									<div className={`relative p-6 bg-gray-900/50 border border-gray-800 rounded-2xl transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/70 text-center`}>
										{/* Gradient border effect */}
										<div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
										
										{/* Icon */}
										<div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
											{method.icon}
										</div>

										{/* Content */}
										<h3 className="text-xl font-bungee font-bold text-white mb-2">
											{method.title}
										</h3>
										<p className="text-gray-400 font-inter mb-4 text-sm">
											{method.description}
										</p>
										<div className={`inline-flex items-center text-sm font-inter font-medium bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
											{method.action}
											<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</div>

										{/* Hover effect overlay */}
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
									</div>
								</motion.a>
							);
						}
						
						// Popup card (Email, Schedule Call)
						if (method.type === "popup") {
							return (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 30 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									viewport={{ once: true }}
									className="group relative cursor-pointer"
									onClick={() => setShowPopup(method.popupContent)}
								>
									<div className={`relative p-6 bg-gray-900/50 border border-gray-800 rounded-2xl transition-all duration-500 hover:border-gray-600 hover:bg-gray-900/70 text-center`}>
										{/* Gradient border effect */}
										<div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
										
										{/* Icon */}
										<div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${method.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
											{method.icon}
										</div>

										{/* Content */}
										<h3 className="text-xl font-bungee font-bold text-white mb-2">
											{method.title}
										</h3>
										<p className="text-gray-400 font-inter mb-4 text-sm">
											{method.description}
										</p>
										<div className={`inline-flex items-center text-sm font-inter font-medium bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
											{method.action}
											<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</div>

										{/* Hover effect overlay */}
										<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
									</div>
								</motion.div>
							);
						}

						return null;
					})}
				</div>

				{/* WhatsApp Note */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-center mb-20"
				>
					<p className="text-gray-400 font-inter text-lg">
						💬 <span className="text-green-400 font-medium">I'm most available on WhatsApp</span> for quick responses and real-time communication
					</p>
				</motion.div>

				{/* FAQ Section */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="max-w-4xl mx-auto"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold text-white text-center mb-12">
						FREQUENTLY ASKED QUESTIONS
					</h3>
					<div className="space-y-6">
						{faqs.map((faq, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="p-6 bg-gray-900/30 border border-gray-800 rounded-2xl"
							>
								<h4 className="text-xl font-bungee font-bold text-white mb-3">
									{faq.question}
								</h4>
								<p className="text-gray-300 font-inter leading-relaxed">
									{faq.answer}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Final CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<motion.a
						href="https://wa.me/923238507347?text=Hi%20Saif!%20I'm%20ready%20to%20start%20my%20project.%20Let's%20discuss%20the%20details!"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white font-inter font-bold text-xl rounded-3xl transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/25"
						whileHover={{ scale: 1.05, y: -3 }}
						whileTap={{ scale: 0.95 }}
					>
						<svg className="w-8 h-8 mr-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
						</svg>
						Start Your Project Today
						<svg className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</motion.a>
					<p className="text-gray-400 font-inter text-sm mt-6">
						🚀 Free consultation • 💰 Transparent pricing • ⚡ Fast delivery
					</p>
				</motion.div>
			</div>

			{/* Popup Modals */}
			<AnimatePresence>
				{showPopup && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
						onClick={handlePopupClose}
					>
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							className="bg-gray-900 border border-gray-700 rounded-3xl p-8 max-w-md w-full relative"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Close button */}
							<button
								onClick={handlePopupClose}
								className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>

							{/* Email Popup */}
							{showPopup === 'email' && (
								<div className="text-center">
									<div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-6">
										<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bungee font-bold text-white mb-4">
										Send Me an Email
									</h3>
									<p className="text-gray-300 font-inter mb-6">
										Get in touch via email for detailed project discussions
									</p>
									<div className="bg-gray-800 rounded-xl p-4 mb-6">
										<p className="text-green-400 font-inter font-medium text-lg">
											Infernusrm@gmail.com
										</p>
									</div>
									<div className="flex flex-col sm:flex-row gap-3 justify-center">
										<a
											href="mailto:Infernusrm@gmail.com?subject=Project Inquiry&body=Hi Saif! I'm interested in discussing a project with you."
											className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-inter font-medium rounded-xl hover:scale-105 transition-transform duration-300"
										>
											Open Email App
											<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
											</svg>
										</a>
										<button
											onClick={() => {
												navigator.clipboard.writeText('Infernusrm@gmail.com');
												// Simple feedback - you could add a toast notification here
												const btn = event.target.closest('button');
												const originalText = btn.innerHTML;
												btn.innerHTML = '✓ Copied!';
												setTimeout(() => {
													btn.innerHTML = originalText;
												}, 2000);
											}}
											className="inline-flex items-center justify-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-inter font-medium rounded-xl transition-colors duration-300"
										>
											Copy Email
											<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
											</svg>
										</button>
									</div>
								</div>
							)}

							{/* Schedule Call Popup */}
							{showPopup === 'schedule' && (
								<div className="text-center">
									<div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white mb-6">
										<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
										</svg>
									</div>
									<h3 className="text-2xl font-bungee font-bold text-white mb-4">
										Schedule a Call
									</h3>
									<p className="text-gray-300 font-inter mb-6">
										Let's hop on a quick 15-minute call to discuss your project
									</p>
									<div className="bg-gray-800 rounded-xl p-4 mb-6">
										<div className="flex items-center justify-center mb-3">
											<svg className="w-6 h-6 text-green-400 mr-2" fill="currentColor" viewBox="0 0 24 24">
												<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
											</svg>
											<span className="text-green-400 font-inter font-medium">WhatsApp Call</span>
										</div>
										<p className="text-gray-300 font-inter text-sm">
											Send me a message and I'll call you right back
										</p>
									</div>
									<a
										href="https://wa.me/923238507347?text=Hi%20Saif!%20I'd%20like%20to%20schedule%20a%2015-minute%20call%20to%20discuss%20my%20project."
										target="_blank"
										rel="noopener noreferrer"
										className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-inter font-medium rounded-xl hover:scale-105 transition-transform duration-300"
									>
										Schedule via WhatsApp
										<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
										</svg>
									</a>
								</div>
							)}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default ContactCTA;
