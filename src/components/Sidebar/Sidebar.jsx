import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../Logo';

const Sidebar = () => {
	const [hoveredItem, setHoveredItem] = useState(null);
	const navigate = useNavigate();
	const location = useLocation();

	const sidebarItems = [
		{
			id: 'home',
			name: 'Home',
			icon: (
				<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
				</svg>
			),
			action: () => {
				if (location.pathname !== '/') {
					navigate('/');
				} else {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}
			}
		},
		{
			id: 'projects',
			name: 'Projects',
			icon: (
				<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
				</svg>
			),
			action: () => {
				if (location.pathname !== '/projects') {
					navigate('/projects');
				} else {
					const projectsSection = document.querySelector('[data-section="projects-grid"]');
					if (projectsSection) {
						projectsSection.scrollIntoView({ behavior: 'smooth' });
					}
				}
			}
		},
		{
			id: 'contact',
			name: 'Contact',
			icon: (
				<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.83 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
				</svg>
			),
			action: () => {
				if (location.pathname !== '/contact') {
					navigate('/contact');
				} else {
					window.scrollTo({ top: 0, behavior: 'smooth' });
				}
			}
		},
		{
			id: 'whatsapp',
			name: 'WhatsApp',
			icon: (
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
				</svg>
			),
			action: () => {
				window.open('https://wa.me/923238507347?text=Hello%20Saif!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.', '_blank');
			},
			special: true
		}
	];

	return (
		<>
			{/* Desktop Sidebar - Hidden on mobile */}
			<motion.div
				initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
				className="hidden lg:block fixed left-4 xl:left-6 top-1/2 -translate-y-1/2 z-50"
			>
				<div className="bg-black/80 backdrop-blur-xl border border-gray-800 rounded-2xl p-2 shadow-2xl">
					{/* Logo Section */}
					<motion.div
						className="flex justify-center mb-3 pb-3 border-b border-gray-700"
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ delay: 1.8, duration: 0.5 }}
					>
						<motion.button
							onClick={() => {
								if (location.pathname !== '/') {
									navigate('/');
								} else {
									window.scrollTo({ top: 0, behavior: 'smooth' });
								}
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.95 }}
							className="transition-transform duration-200"
						>
							<Logo size={45} />
						</motion.button>
					</motion.div>
					
					<div className="flex flex-col space-y-2">
						{sidebarItems.map((item, index) => (
							<motion.button
								key={item.id}
								onClick={item.action}
								onMouseEnter={() => setHoveredItem(item.id)}
								onMouseLeave={() => setHoveredItem(null)}
								className={`relative p-3 rounded-xl transition-all duration-300 group ${
									item.special 
										? 'bg-green-600 hover:bg-green-500 text-white hover:scale-110' 
										: 'bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-white hover:scale-105'
								}`}
								whileHover={{ 
									scale: item.special ? 1.15 : 1.1,
									rotate: item.special ? [0, -5, 5, 0] : 0
								}}
								whileTap={{ scale: 0.95 }}
								transition={{ 
									duration: item.special ? 0.6 : 0.3,
									ease: "easeOut"
								}}
							>
								{item.icon}
								
								{/* Tooltip */}
								<motion.div
									initial={{ opacity: 0, x: -10, scale: 0.8 }}
									animate={{ 
										opacity: hoveredItem === item.id ? 1 : 0,
										x: hoveredItem === item.id ? 0 : -10,
										scale: hoveredItem === item.id ? 1 : 0.8
									}}
									transition={{ duration: 0.2 }}
									className="absolute left-full ml-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-xl border border-gray-200 pointer-events-none"
									style={{
										boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
									}}
								>
									{item.name}
									<div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-white"></div>
								</motion.div>

								{/* Special glow effect for WhatsApp */}
								{item.special && (
									<motion.div
										className="absolute inset-0 bg-green-400/20 rounded-xl blur-lg"
										animate={{
											opacity: [0.3, 0.6, 0.3],
											scale: [0.8, 1.2, 0.8]
										}}
										transition={{
											repeat: Infinity,
											duration: 2,
											ease: "easeInOut"
										}}
									/>
								)}
							</motion.button>
						))}
					</div>
				</div>
			</motion.div>

			{/* Mobile Bottom Navigation - Shows on tablet and mobile */}
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
				className="lg:hidden fixed bottom-4 inset-x-4 z-50"
			>
				<div className="bg-black/90 backdrop-blur-xl border border-gray-800 rounded-2xl p-2 shadow-2xl max-w-fit mx-auto">
					<div className="flex space-x-2">
						{sidebarItems.map((item, index) => (
							<motion.button
								key={`mobile-${item.id}`}
								onClick={item.action}
								onTouchStart={() => setHoveredItem(item.id)}
								onTouchEnd={() => setTimeout(() => setHoveredItem(null), 2000)}
								className={`relative p-1.5 sm:p-2 md:p-3 rounded-lg transition-all duration-300 group ${
									item.special 
										? 'bg-green-600 hover:bg-green-500 text-white' 
										: 'bg-gray-900/50 hover:bg-gray-800 text-gray-400 hover:text-white'
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								transition={{ duration: 0.2 }}
							>
								<div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5">
									{React.cloneElement(item.icon, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" })}
								</div>
								
								{/* Mobile Tooltip - Shows above button */}
								<motion.div
									initial={{ opacity: 0, y: 10, scale: 0.8 }}
									animate={{ 
										opacity: hoveredItem === item.id ? 1 : 0,
										y: hoveredItem === item.id ? 0 : 10,
										scale: hoveredItem === item.id ? 1 : 0.8
									}}
									transition={{ duration: 0.2 }}
									className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded-lg text-xs font-semibold whitespace-nowrap shadow-xl border border-gray-200 pointer-events-none"
								>
									{item.name}
									<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white"></div>
								</motion.div>

								{/* Special glow effect for WhatsApp on mobile */}
								{item.special && (
									<motion.div
										className="absolute inset-0 bg-green-400/20 rounded-xl blur-sm"
										animate={{
											opacity: [0.3, 0.6, 0.3],
											scale: [0.9, 1.1, 0.9]
										}}
										transition={{
											repeat: Infinity,
											duration: 2,
											ease: "easeInOut"
										}}
									/>
								)}
							</motion.button>
						))}
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default Sidebar;
