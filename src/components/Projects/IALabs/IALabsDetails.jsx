import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import IALabsHero from './IALabsHero';
import ProjectOverview from './ProjectOverview';
import VideoShowcase from './VideoShowcase';
import FeatureShowcase from './FeatureShowcase';
import TechStack from './TechStack';
import ProjectStats from './ProjectStats';
import DevJourney from './DevJourney';
import SectionNavigation from './SectionNavigation';

const IALabsDetails = () => {
	const navigate = useNavigate();

	return (
		<div className="min-h-screen bg-black text-white">
			{/* Section Navigation */}
			<SectionNavigation />

			{/* Back button */}
			<motion.button
				onClick={() => navigate('/projects')}
				className="fixed top-6 left-6 z-50 p-3 bg-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-xl hover:bg-gray-800 transition-all duration-300"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0, x: -20 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5 }}
			>
				<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
				</svg>
			</motion.button>

			{/* Hero Section */}
			<IALabsHero />

			{/* Project Overview */}
			<ProjectOverview />

			{/* Video Showcase */}
			<VideoShowcase />

			{/* Feature Showcase */}
			<FeatureShowcase />

			{/* Tech Stack */}
			<TechStack />

			{/* Project Stats */}
			<ProjectStats />

			{/* Development Journey */}
			<DevJourney />
		</div>
	);
};

export default IALabsDetails;
