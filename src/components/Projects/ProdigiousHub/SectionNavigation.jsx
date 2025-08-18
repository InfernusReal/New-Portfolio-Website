import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SectionNavigation = () => {
	const [activeSection, setActiveSection] = useState('hero');
	const [isVisible, setIsVisible] = useState(false);

	const sections = [
		{ id: 'hero', label: 'Hero', icon: '🏠' },
		{ id: 'overview', label: 'Overview', icon: '📋' },
		{ id: 'screenshots', label: 'Gallery', icon: '📸' },
		{ id: 'features', label: 'Features', icon: '⭐' },
		{ id: 'tech-stack', label: 'Tech', icon: '🔧' },
		{ id: 'stats', label: 'Impact', icon: '📊' },
		{ id: 'dev-journey', label: 'Journey', icon: '🚀' }
	];

	useEffect(() => {
		const handleScroll = () => {
			// Show navigation after scrolling past hero
			setIsVisible(window.scrollY > 500);

			// Update active section based on scroll position
			const sectionElements = sections.map(section => 
				document.querySelector(`[data-section="${section.id}"]`)
			);

			const currentSection = sectionElements.find((el, index) => {
				if (!el) return false;
				const rect = el.getBoundingClientRect();
				return rect.top <= 100 && rect.bottom >= 100;
			});

			if (currentSection) {
				const sectionId = currentSection.getAttribute('data-section');
				setActiveSection(sectionId);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (sectionId) => {
		const element = document.querySelector(`[data-section="${sectionId}"]`);
		if (element) {
			element.scrollIntoView({ 
				behavior: 'smooth',
				block: 'start'
			});
		}
	};

	if (!isVisible) return null;

	return (
		<motion.div
			initial={{ opacity: 0, x: 50 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 50 }}
			className="fixed right-6 top-1/3 transform -translate-y-1/4 z-40 hidden lg:block"
		>
			<div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-3 shadow-2xl">
				<div className="space-y-2">
					{sections.map((section, index) => (
						<motion.button
							key={section.id}
							onClick={() => scrollToSection(section.id)}
							className={`group relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
								activeSection === section.id
									? 'bg-purple-500 text-white shadow-lg shadow-purple-500/25'
									: 'text-gray-400 hover:text-white hover:bg-gray-800'
							}`}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.05 }}
						>
							<span className="text-lg">{section.icon}</span>
							
							{/* Tooltip */}
							<div className="absolute right-full mr-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
								{section.label}
								<div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-800 border-y-4 border-y-transparent"></div>
							</div>
						</motion.button>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default SectionNavigation;
