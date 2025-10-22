import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import ProjectsHero from './ProjectsHero';

const Projects = () => {
	// Project data including NASA Space Apps
	const projects = [
		{
			id: 'council-of-lords',
			title: 'Council of Lords',
			description: 'NASA Space Apps Challenge 2025: Revolutionary AI ensemble system for professional-grade exoplanet detection using real telescope data.',
			technologies: ['TensorFlow', 'Python', 'AstroPy', 'NumPy', 'SciPy', 'Machine Learning'],
			image: '/nasa/Screenshot 2025-10-05 222808.png',
			category: 'AI & Space Technology',
			status: 'NASA Challenge',
			featured: true,
			link: '/projects/council-of-lords',
			year: '2025',
			githubUrl: 'https://github.com/InfernusReal/Council-Of-Lords',
			liveUrl: 'https://www.spaceappschallenge.org/2025/find-a-team/perseverance5/',
			highlights: [
				'NASA Space Apps Challenge 2025',
				'87.5% accuracy on brutal test scenarios',
				'5 specialized AI neural networks',
				'Perfect false positive rejection',
				'Real Kepler & TESS data processing',
				'Professional astronomical standards'
			]
		},
		{
			id: 'prodigious-hub',
			title: 'ProdigiousHub',
			description: 'A gamified project management platform that transforms software development into an engaging RPG experience.',
			technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Discord.js'],
			image: '/The-Prodigious-Hub/Screenshot%202025-07-30%20135752.png',
			category: 'Full Stack',
			status: 'Production',
			featured: true,
			link: '/projects/prodigious-hub',
			year: '2025',
			highlights: [
				'15,000+ lines of production code',
				'Real-time collaboration features', 
				'Advanced gamification algorithms',
				'Discord bot integration',
				'AWS deployment with CI/CD'
			]
		}
		// More projects will be added here
	];

	return (
		<div className="min-h-screen bg-black text-white">
			<ProjectsHero />
			
			<section className="py-20 px-4 sm:px-6 lg:px-8" data-section="projects-grid">
				<div className="max-w-7xl mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center mb-16"
					>
						<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
							Featured Work
						</h2>
						<p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto font-lora">
							A curated collection of projects that showcase my passion for creating exceptional digital experiences.
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.length > 0 ? (
							projects.map((project, index) => (
								<ProjectCard 
									key={project.id} 
									project={project} 
									index={index} 
								/>
							))
						) : (
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								className="col-span-full text-center py-20"
							>
								<div className="bg-gray-900/50 rounded-2xl p-12 border border-gray-800">
									<h3 className="text-2xl font-bungee font-semibold text-white mb-4">
										Coming Soon
									</h3>
									<p className="text-gray-400 font-lora">
										Incredible projects are in development. Get ready for something amazing!
									</p>
								</div>
							</motion.div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Projects;
