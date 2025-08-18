import React from 'react';
import { motion } from 'framer-motion';

const ContactHero = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
			{/* Animated background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
			</div>

			{/* Glowing effects */}
			<div className="absolute inset-0">
				<motion.div
					className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div
					className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
					animate={{
						scale: [1.2, 1, 1.2],
						opacity: [0.5, 0.3, 0.5],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 2
					}}
				/>
			</div>

			{/* Content */}
			<div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
				{/* Badge */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="mb-8"
				>
					<div className="inline-flex items-center px-4 py-2 bg-green-900/30 border border-green-500/30 rounded-full text-sm text-green-300 font-medium">
						<div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
						Available for new projects
					</div>
				</motion.div>

				{/* Main Title */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bungee font-bold mb-6 leading-none"
				>
					<span className="block text-white">LET'S BUILD</span>
					<span className="block bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
						TOGETHER
					</span>
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-lora max-w-4xl mx-auto leading-relaxed"
				>
					Transform your business with cutting-edge SaaS solutions, stunning websites, and custom software that drives real results.
				</motion.p>

				{/* Stats */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
					className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
				>
					{[
						{ number: "50+", label: "Projects Delivered", color: "from-green-400 to-green-600" },
						{ number: "100%", label: "Client Satisfaction", color: "from-blue-400 to-blue-600" },
						{ number: "24/7", label: "Support Available", color: "from-purple-400 to-purple-600" }
					].map((stat, index) => (
						<motion.div
							key={index}
							className="text-center"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
						>
							<h3 className={`text-3xl sm:text-4xl font-bungee font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
								{stat.number}
							</h3>
							<p className="text-gray-400 font-inter font-medium text-sm">
								{stat.label}
							</p>
						</motion.div>
					))}
				</motion.div>

				{/* Quick Contact CTA */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 1 }}
					className="flex flex-col sm:flex-row gap-6 justify-center items-center"
				>
					<motion.a
						href="https://wa.me/923238507347?text=Hi%20Saif!%20I'm%20interested%20in%20discussing%20a%20project%20with%20you."
						target="_blank"
						rel="noopener noreferrer"
						className="group relative px-8 py-4 bg-green-500 text-white font-inter font-bold text-lg rounded-2xl overflow-hidden transition-all duration-300 flex items-center"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						<svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
							<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
						</svg>
						Let's Chat on WhatsApp
					</motion.a>
					
					<motion.button
						onClick={() => {
							const servicesSection = document.querySelector('[data-section="services"]');
							if (servicesSection) {
								servicesSection.scrollIntoView({ behavior: 'smooth' });
							}
						}}
						className="group px-8 py-4 border-2 border-gray-600 text-white font-inter font-bold text-lg rounded-2xl hover:border-green-500 hover:bg-green-900/20 transition-all duration-300 backdrop-blur-sm"
						whileHover={{ scale: 1.05, y: -2 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className="flex items-center">
							<svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
							Learn More
						</span>
					</motion.button>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactHero;
