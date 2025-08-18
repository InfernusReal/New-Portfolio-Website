import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const VideoShowcase = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isFullscreen, setIsFullscreen] = useState(false);
	const videoRef = useRef(null);

	const togglePlay = () => {
		if (videoRef.current) {
			if (isPlaying) {
				videoRef.current.pause();
			} else {
				videoRef.current.play();
			}
			setIsPlaying(!isPlaying);
		}
	};

	const toggleFullscreen = () => {
		setIsFullscreen(!isFullscreen);
	};

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-black" data-section="video">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						SEE IT IN ACTION
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						Experience the complete platform walkthrough showcasing all enterprise features
					</p>
				</motion.div>

				{/* Main Video Player */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="relative max-w-5xl mx-auto"
				>
					<div className="relative bg-gray-900 rounded-3xl overflow-hidden border border-gray-800 shadow-2xl">
						{/* Video Element */}
						<div className="relative aspect-video">
							<video
								ref={videoRef}
								className="w-full h-full object-cover"
								poster="/BnS-The Bedding Store/video-poster.jpg"
								onPlay={() => setIsPlaying(true)}
								onPause={() => setIsPlaying(false)}
								onEnded={() => setIsPlaying(false)}
								controls={false}
							>
								<source src="/BnS-The Bedding Store/Overview/Screen Recording 2025-06-26 082206.mp4" type="video/mp4" />
								Your browser does not support the video tag.
							</video>

							{/* Custom Controls Overlay */}
							<div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
								<div className="flex items-center gap-4">
									{/* Play/Pause Button */}
									<motion.button
										onClick={togglePlay}
										className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
									>
										{isPlaying ? (
											<svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
												<path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
											</svg>
										) : (
											<svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
												<path d="M8 5v14l11-7z"/>
											</svg>
										)}
									</motion.button>

									{/* Fullscreen Button */}
									<motion.button
										onClick={toggleFullscreen}
										className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
									>
										<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
										</svg>
									</motion.button>
								</div>
							</div>

							{/* Play Button Overlay (when paused) */}
							{!isPlaying && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									className="absolute inset-0 flex items-center justify-center bg-black/30"
								>
									<motion.button
										onClick={togglePlay}
										className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
										whileHover={{ scale: 1.1 }}
										whileTap={{ scale: 0.95 }}
									>
										<svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
											<path d="M8 5v14l11-7z"/>
										</svg>
									</motion.button>
								</motion.div>
							)}
						</div>

						{/* Video Info Bar */}
						<div className="p-6 bg-gray-900/50">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="text-xl font-inter font-bold text-white mb-2">
										Complete Platform Demonstration
									</h3>
									<p className="text-gray-400 font-lora">
										Full walkthrough of admin panel, e-commerce features, and user experience
									</p>
								</div>
								<div className="flex items-center gap-4">
									<div className="flex items-center gap-2 text-gray-400">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
										</svg>
										<span className="text-sm font-inter">~5 min demo</span>
									</div>
									<div className="flex items-center gap-2 text-gray-400">
										<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
										</svg>
										<span className="text-sm font-inter">HD Quality</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				{/* Video Features Grid */}
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					viewport={{ once: true }}
					className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6"
				>
					{[
						{
							icon: "🛒",
							title: "E-commerce Flow",
							description: "Complete shopping experience from browsing to checkout"
						},
						{
							icon: "⚙️",
							title: "Admin Dashboard",
							description: "Comprehensive management panel with all controls"
						},
						{
							icon: "💳",
							title: "Payment Process",
							description: "EasyPaisa integration and transaction handling"
						},
						{
							icon: "📊",
							title: "Analytics View",
							description: "Financial tracking and business insights"
						}
					].map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
							viewport={{ once: true }}
							className="bg-gray-900/50 rounded-2xl p-6 border border-gray-800 text-center hover:border-emerald-500/50 transition-all duration-300"
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
				</motion.div>
			</div>

			{/* Fullscreen Modal */}
			<AnimatePresence>
				{isFullscreen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 bg-black flex items-center justify-center"
						onClick={toggleFullscreen}
					>
						<motion.div
							initial={{ scale: 0.8 }}
							animate={{ scale: 1 }}
							exit={{ scale: 0.8 }}
							className="relative w-full h-full max-w-7xl max-h-full p-4"
							onClick={(e) => e.stopPropagation()}
						>
							<video
								className="w-full h-full object-contain rounded-lg"
								controls
								autoPlay
							>
								<source src="/BnS-The Bedding Store/Overview/Screen Recording 2025-06-26 082206.mp4" type="video/mp4" />
							</video>
							
							<button
								onClick={toggleFullscreen}
								className="absolute top-6 right-6 w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300"
							>
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default VideoShowcase;
