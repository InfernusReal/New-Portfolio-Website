import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Screenshots = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [currentCategory, setCurrentCategory] = useState('dashboard');

	const imageCategories = {
		dashboard: {
			title: "Dashboard Views",
			images: [
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 135752.png", title: "Main Dashboard", description: "Real-time project overview with XP tracking" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152817.png", title: "Analytics Dashboard", description: "Comprehensive performance metrics" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152832.png", title: "Team Dashboard", description: "Collaborative workspace overview" },
			]
		},
		features: {
			title: "Core Features",
			images: [
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152839.png", title: "XP System", description: "Experience points and leveling mechanics" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152843.png", title: "Achievements", description: "Unlock badges and rewards" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152849.png", title: "Leaderboards", description: "Competitive rankings and stats" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152901.png", title: "Project Management", description: "Gamified task tracking" },
			]
		},
		collaboration: {
			title: "Team Collaboration",
			images: [
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152912.png", title: "Team Profiles", description: "Member skill tracking and stats" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152924.png", title: "Real-time Updates", description: "Live collaboration features" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152936.png", title: "Activity Feed", description: "Team progress notifications" },
			]
		},
		discord: {
			title: "Discord Integration",
			images: [
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152945.png", title: "Discord Bot", description: "Seamless Discord integration" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 152954.png", title: "Slash Commands", description: "Quick access via Discord" },
				{ src: "/The-Prodigious-Hub/Screenshot 2025-07-30 153004.png", title: "Notifications", description: "Real-time Discord alerts" },
			]
		},
		mobile: {
			title: "Mobile Experience",
			images: [
				{ src: "/The-Prodigious-Hub/device-mockups/Screenshot 2025-07-30 232735-front.png", title: "Mobile Frontend", description: "Responsive mobile interface" },
				{ src: "/The-Prodigious-Hub/device-mockups/Screenshot 2025-07-30 232735-side.png", title: "Mobile Profile", description: "Mobile-optimized user profiles" },
			]
		}
	};

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" data-section="screenshots">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						LIVE SCREENSHOTS
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						Explore the interface that transforms project management into an epic gaming experience
					</p>
				</motion.div>

				{/* Category Navigation */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="flex flex-wrap justify-center gap-4 mb-12"
				>
					{Object.entries(imageCategories).map(([key, category]) => (
						<motion.button
							key={key}
							onClick={() => setCurrentCategory(key)}
							className={`px-6 py-3 rounded-xl font-inter font-semibold transition-all duration-300 ${
								currentCategory === key
									? 'bg-purple-600 text-white'
									: 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{category.title}
						</motion.button>
					))}
				</motion.div>

				{/* Image Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={currentCategory}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.5 }}
						className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
					>
						{imageCategories[currentCategory].images.map((image, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="group cursor-pointer"
								onClick={() => setSelectedImage(image)}
							>
								<div className="bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
									<div className="relative overflow-hidden">
										<img
											src={image.src}
											alt={image.title}
											className="w-full h-48 object-cover object-top transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
											<svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
											</svg>
										</div>
									</div>
									<div className="p-6">
										<h3 className="text-lg font-inter font-bold text-white mb-2">{image.title}</h3>
										<p className="text-gray-400 font-lora text-sm">{image.description}</p>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Modal for enlarged image */}
				<AnimatePresence>
					{selectedImage && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
							onClick={() => setSelectedImage(null)}
						>
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden max-w-4xl max-h-[90vh] w-full"
								onClick={(e) => e.stopPropagation()}
							>
								<div className="relative">
									<img
										src={selectedImage.src}
										alt={selectedImage.title}
										className="w-full h-auto max-h-[70vh] object-contain"
									/>
									<button
										onClick={() => setSelectedImage(null)}
										className="absolute top-4 right-4 p-2 bg-black/70 text-white rounded-lg hover:bg-black transition-colors"
									>
										<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
										</svg>
									</button>
								</div>
								<div className="p-6">
									<h3 className="text-2xl font-inter font-bold text-white mb-2">{selectedImage.title}</h3>
									<p className="text-gray-400 font-lora">{selectedImage.description}</p>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default Screenshots;
