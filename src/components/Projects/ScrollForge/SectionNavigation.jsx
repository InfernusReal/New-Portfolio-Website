import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SectionNavigation = () => {
	const [activeSection, setActiveSection] = useState('hero');
	const [isVisible, setIsVisible] = useState(false);

	const sections = [
		{ id: 'hero', label: 'Hero', icon: '🏠' },
		{ id: 'overview', label: 'Overview', icon: '📋' },
		{ id: 'framework-impact', label: 'Impact', icon: '🚀' },
		{ id: 'how-to-use', label: 'Guide', icon: '�' },
		{ id: 'features', label: 'Features', icon: '⭐' },
		{ id: 'core-components', label: 'Core', icon: '🔧' },
		{ id: 'dev-journey', label: 'Journey', icon: '✨' }
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
			initial={{ opacity: 0, x: -30 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: -30 }}
			className="fixed left-6 top-24 z-50 hidden lg:block"
		>
			<div className="bg-black/60 backdrop-blur-xl border border-gray-700/30 rounded-2xl px-3 py-4 shadow-2xl">
				<div className="flex flex-col items-center space-y-4">
					{sections.map((section, index) => (
						<motion.button
							key={section.id}
							onClick={() => scrollToSection(section.id)}
							className={`group relative flex flex-col items-center w-12 h-12 justify-center transition-all duration-300 rounded-xl ${
								activeSection === section.id
									? 'text-white bg-purple-500/20 border border-purple-500/30'
									: 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
							}`}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							initial={{ opacity: 0, x: -10 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: index * 0.1 }}
							title={section.label}
						>
							{/* Icon */}
							<div className={`text-lg transition-all duration-300 ${
								activeSection === section.id 
									? 'transform scale-110 text-purple-400' 
									: ''
							}`}>
								{section.icon}
							</div>
							
							{/* Active indicator */}
							{activeSection === section.id && (
								<motion.div
									layoutId="activeIndicator"
									className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"
									initial={{ scale: 0 }}
									animate={{ scale: 1 }}
									transition={{ type: "spring", stiffness: 400, damping: 30 }}
								/>
							)}
						</motion.button>
					))}
				</div>
			</div>
		</motion.div>
	);
};

export default SectionNavigation;