import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index }) => {
	const [imageError, setImageError] = useState(false);
	const [imageLoaded, setImageLoaded] = useState(false);

	const CardContent = () => (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			className="group relative h-full"
		>
			<div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col relative">
				
				{/* Project Image/Preview */}
				{project.image && (
					<div className="relative h-48 overflow-hidden bg-gray-800 flex-shrink-0">
						{!imageLoaded && !imageError && (
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
							</div>
						)}
						
						{imageError ? (
							<div className="w-full h-full flex items-center justify-center bg-gray-800">
								<div className="text-center">
									<svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
									</svg>
									<p className="text-gray-500 text-sm">Image not found</p>
								</div>
							</div>
						) : (
							<img 
								src={project.image} 
								alt={project.title}
								className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
									imageLoaded ? 'opacity-100' : 'opacity-0'
								}`}
								onLoad={() => setImageLoaded(true)}
								onError={() => {
									console.log('Failed to load image:', project.image);
									setImageError(true);
								}}
							/>
						)}
						
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
						
						{/* Status badge */}
						{project.status && (
							<div className="absolute top-4 right-4">
								<span className={`text-white text-xs font-semibold px-3 py-1 rounded-full ${
									project.status === 'Production' ? 'bg-green-500' :
									project.status === 'In Progress' ? 'bg-yellow-500' :
									'bg-blue-500'
								}`}>
									{project.status}
								</span>
							</div>
						)}

						{/* Year badge */}
						{project.year && (
							<div className="absolute top-4 left-4">
								<span className="bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
									{project.year}
								</span>
							</div>
						)}
					</div>
				)}

				{/* Project Content */}
				<div className="p-6 flex flex-col h-full">
					<div className="flex items-start justify-between mb-4">
						<h3 className="text-xl sm:text-2xl font-inter font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
							{project.title}
						</h3>
						
						{/* Featured star */}
						{project.featured && (
							<div className="text-yellow-400">
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
								</svg>
							</div>
						)}
					</div>

					<p className="text-gray-400 text-sm sm:text-base mb-4 font-lora flex-grow">
						{project.description}
					</p>

					{/* Highlights */}
					{project.highlights && project.highlights.length > 0 && (
						<div className="mb-4">
							<h4 className="text-sm font-inter font-semibold text-gray-300 mb-2">Key Highlights:</h4>
							<ul className="text-xs text-gray-400 space-y-1">
								{project.highlights.slice(0, 3).map((highlight, idx) => (
									<li key={idx} className="flex items-center">
										<span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
										{highlight}
									</li>
								))}
							</ul>
						</div>
					)}

					{/* Tech stack */}
					{project.technologies && (
						<div className="flex flex-wrap gap-2 mb-4">
							{project.technologies.map((tech, techIndex) => (
								<span
									key={techIndex}
									className="text-xs font-inter font-medium bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
								>
									{tech}
								</span>
							))}
						</div>
					)}

					{/* Category and external links */}
					<div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
						<span className="capitalize">{project.category || 'Web Development'}</span>
						
						{/* External links */}
						<div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							{project.githubUrl && (
								<motion.a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1 bg-gray-800 hover:bg-gray-700 rounded transition-colors duration-200"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={(e) => e.stopPropagation()}
								>
									<svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
									</svg>
								</motion.a>
							)}
							
							{project.liveUrl && (
								<motion.a
									href={project.liveUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="p-1 bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-200"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									onClick={(e) => e.stopPropagation()}
								>
									<svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
									</svg>
								</motion.a>
							)}
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);

	// If it's an internal link, wrap in Link component
	if (project.link && project.link.startsWith('/')) {
		return (
			<Link to={project.link} className="block h-full">
				<CardContent />
			</Link>
		);
	}

	// If it's an external link or no link, render as div
	return project.link ? (
		<a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
			<CardContent />
		</a>
	) : (
		<CardContent />
	);
};

export default ProjectCard;
