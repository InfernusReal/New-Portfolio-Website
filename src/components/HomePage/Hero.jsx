import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

const Hero = () => {
	const heroRef = useRef(null);
	const dashboardRef = useRef(null);
	const leftSidebarRef = useRef(null);
	const topIssuesRef = useRef(null);
	const codeEditorsRef = useRef(null);
	const mainContentRef = useRef(null);
	const chatPanelRef = useRef(null);
	const metricsCardsRef = useRef(null);

	useEffect(() => {
		gsap.fromTo(
			heroRef.current,
			{ opacity: 0, y: 30 },
			{ opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
		);

		// Dashboard staggered animation
		const tl = gsap.timeline({ delay: 1.2 });
		
		// Set initial states
		gsap.set([leftSidebarRef.current, topIssuesRef.current, codeEditorsRef.current, mainContentRef.current, chatPanelRef.current], {
			opacity: 0,
			y: 50,
			rotationX: 15
		});

		gsap.set(metricsCardsRef.current?.children || [], {
			opacity: 0,
			y: 30,
			scale: 0.8
		});

		// Animate dashboard components in sequence
		tl.to(leftSidebarRef.current, {
			opacity: 1,
			y: 0,
			rotationX: 0,
			duration: 0.8,
			ease: "power2.out"
		})
		.to(topIssuesRef.current, {
			opacity: 1,
			y: 0,
			rotationX: 0,
			duration: 0.6,
			ease: "power2.out"
		}, "-=0.4")
		.to(codeEditorsRef.current, {
			opacity: 1,
			y: 0,
			rotationX: 0,
			duration: 0.6,
			ease: "power2.out"
		}, "-=0.3")
		.to(mainContentRef.current, {
			opacity: 1,
			y: 0,
			rotationX: 0,
			duration: 0.7,
			ease: "power2.out"
		}, "-=0.4")
		.to(metricsCardsRef.current?.children || [], {
			opacity: 1,
			y: 0,
			scale: 1,
			duration: 0.5,
			stagger: 0.1,
			ease: "back.out(1.7)"
		}, "-=0.3")
		.to(chatPanelRef.current, {
			opacity: 1,
			y: 0,
			rotationX: 0,
			duration: 0.6,
			ease: "power2.out"
		}, "-=0.2");

	}, []);

	return (
		<section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
			{/* Flowing Wavy Background Shines */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Large Blue Flowing Wave */}
				<motion.div
					className="absolute top-10 left-0 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"
					animate={{ 
						x: [-100, 200, -100],
						y: [-50, 50, -50],
						scale: [0.8, 1.2, 0.8]
					}}
					transition={{ 
						repeat: Infinity, 
						duration: 15,
						ease: "easeInOut"
					}}
				/>
				
				{/* Medium Blue Wave */}
				<motion.div
					className="absolute top-1/3 right-10 w-64 h-64 bg-blue-400/12 rounded-full blur-2xl"
					animate={{ 
						x: [100, -150, 100],
						y: [30, -30, 30],
						scale: [1, 0.7, 1]
					}}
					transition={{ 
						repeat: Infinity, 
						duration: 12,
						ease: "easeInOut",
						delay: 2
					}}
				/>

				{/* White Flowing Waves */}
				<motion.div
					className="absolute top-1/2 left-1/3 w-80 h-80 bg-white/4 rounded-full blur-2xl"
					animate={{ 
						x: [-120, 180, -120],
						y: [-40, 60, -40],
						scale: [1, 0.6, 1]
					}}
					transition={{ 
						repeat: Infinity, 
						duration: 20,
						ease: "easeInOut",
						delay: 3
					}}
				/>

				<motion.div
					className="absolute bottom-32 right-1/4 w-72 h-72 bg-white/6 rounded-full blur-3xl"
					animate={{ 
						x: [150, -200, 150],
						y: [-60, 40, -60],
						scale: [0.7, 1.1, 0.7]
					}}
					transition={{ 
						repeat: Infinity, 
						duration: 16,
						ease: "easeInOut",
						delay: 7
					}}
				/>
			</div>

			{/* Subtle grid pattern */}
			<div className="absolute inset-0 opacity-[0.02] z-5">
				<div className="w-full h-full" style={{
					backgroundImage: `
						linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
						linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
					`,
					backgroundSize: '32px 32px'
				}}></div>
			</div>

			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
				<motion.div
					ref={heroRef}
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className="text-center space-y-12"
				>
					{/* Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.2 }}
						className="inline-flex items-center px-4 py-2 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-full text-sm text-gray-400"
					>
						<span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
						Available for hire
					</motion.div>

					{/* Main Headline */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="space-y-4"
					>
						<h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tight">
							I build products
							<br />
							<span className="text-gray-500">that matter.</span>
						</h1>
					</motion.div>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5 }}
						className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
					>
						Full-stack developer crafting exceptional digital experiences with modern technologies and design-first thinking.
					</motion.p>

					{/* NASA Space Apps Badge */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: 0.6, duration: 0.8 }}
						className="pt-6"
					>
						<Link 
							to="/projects/council-of-lords"
							className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full hover:border-blue-400/50 transition-all duration-300 group"
						>
							<div className="w-8 h-8 mr-3">
								<svg viewBox="0 0 24 24" className="w-full h-full text-blue-400" fill="currentColor">
									<path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
								</svg>
							</div>
							<div className="text-left">
								<div className="text-blue-300 font-semibold text-sm">NASA SPACE APPS CONTENDER</div>
								<div className="text-blue-200/80 text-xs">Revolutionary AI exoplanet detection system</div>
							</div>
							<div className="w-8 h-8 ml-3">
								<svg viewBox="0 0 24 24" className="w-full h-full text-blue-400 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</div>
						</Link>
					</motion.div>

					{/* CTA */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.7 }}
						className="pt-4"
					>
						<Link to="/contact">
							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								className="inline-flex items-center px-8 py-4 bg-white text-black rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 group"
							>
								Let's work together
								<svg 
									className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-0.5" 
									fill="none" 
									viewBox="0 0 24 24" 
									stroke="currentColor"
								>
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
								</svg>
							</motion.button>
						</Link>
					</motion.div>

					{/* Portfolio Preview - Detailed 2.5D Dashboard */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.9, duration: 1 }}
						className="pt-24 md:pt-32 lg:pt-40"
					>
						<div className="relative max-w-7xl mx-auto">
							{/* Desktop Dashboard (hidden on mobile/tablet) */}
							<motion.div 
								className="hidden lg:block relative bg-black rounded-2xl border border-gray-800 overflow-hidden shadow-2xl"
								style={{
									transform: 'perspective(1200px) rotateX(0deg) rotateY(0deg)',
									transformStyle: 'preserve-3d'
								}}
							>
								{/* Browser Chrome */}
								<div className="flex items-center justify-between px-6 py-3 bg-gray-900 border-b border-gray-800">
									<div className="flex items-center space-x-4">
										<div className="flex space-x-2">
											<div className="w-3 h-3 bg-red-500 rounded-full"></div>
											<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
											<div className="w-3 h-3 bg-green-500 rounded-full"></div>
										</div>
										<div className="bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-400 font-mono">
											infernusreal.dashboard.app
										</div>
									</div>
									<div className="flex items-center space-x-3">
										<div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
										<span className="text-xs text-gray-500">Connected</span>
									</div>
								</div>
								
								{/* Dashboard Layout */}
								<div className="flex h-[500px] xl:h-[600px] bg-black">
									{/* Left Sidebar */}
									<motion.div 
										ref={leftSidebarRef}
										className="w-64 bg-gray-950 border-r border-gray-900 flex flex-col"
										style={{ transform: 'translateZ(30px)' }}
									>
										{/* Profile Header */}
										<div className="p-6 border-b border-gray-900">
											<div className="flex items-center space-x-3">
												<div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
													SR
												</div>
												<div>
													<h3 className="text-white font-semibold text-sm">Saif ur Rehman</h3>
													<p className="text-gray-500 text-xs">@InfernusReal</p>
												</div>
											</div>
										</div>

										{/* Navigation */}
										<div className="flex-1 px-4 py-6 space-y-1">
											<div className="mb-4">
												<h4 className="text-gray-600 text-xs uppercase tracking-wider font-medium mb-3">Workspace</h4>
											</div>
											<div className="space-y-1">
												{[
													{ icon: '📥', label: 'Inbox', count: '3', active: true },
													{ icon: '🔍', label: 'My Issues', count: null },
													{ icon: '📋', label: 'Projects', count: null },
													{ icon: '👁️', label: 'Views', count: null },
													{ icon: '👥', label: 'Teams', count: null }
												].map((item, i) => (
													<motion.div
														key={item.label}
														className={`flex items-center justify-between px-3 py-2 rounded-md text-sm cursor-pointer transition-all ${
															item.active 
																? 'bg-gray-900 text-white border border-gray-800' 
																: 'text-gray-500 hover:text-gray-300 hover:bg-gray-900'
														}`}
														whileHover={{ x: 2 }}
													>
														<div className="flex items-center space-x-3">
															<span className="text-xs">{item.icon}</span>
															<span>{item.label}</span>
														</div>
														{item.count && (
															<span className="bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full">
																{item.count}
															</span>
														)}
													</motion.div>
												))}
											</div>

											<div>
												<h4 className="text-gray-600 text-xs uppercase tracking-wider font-medium mb-3">Initiatives</h4>
												{['🚀 Engineering', '🎯 SaaS Projects', '⚡ Automation'].map((item, i) => (
													<div key={i} className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-500 hover:text-gray-400 cursor-pointer">
														<span className="text-xs">{item.split(' ')[0]}</span>
														<span>{item.split(' ').slice(1).join(' ')}</span>
													</div>
												))}
											</div>
										</div>
									</motion.div>

									{/* Center Content Area */}
									<div className="flex-1 flex flex-col">
										{/* Top Header */}
										<motion.div 
											className="px-6 py-4 bg-black border-b border-gray-900"
											style={{ transform: 'translateZ(20px)' }}
										>
											<div className="flex items-center justify-between">
												<div>
													<h1 className="text-white text-lg font-semibold">Inbox</h1>
													<p className="text-gray-500 text-sm">Full-Stack Web/Software Dev • SaaS Engineer • AI Engineer</p>
												</div>
												<div className="flex items-center space-x-3">
													<div className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium">
														Automation Engineer
													</div>
													<div className="bg-purple-600 text-white px-3 py-1.5 rounded-md text-sm font-medium">
														DevOps Engineer
													</div>
												</div>
											</div>
										</motion.div>

										{/* Issues List */}
										<div ref={topIssuesRef} className="flex-1 p-6 space-y-3 overflow-hidden bg-black">
											{[
												{ id: 'ENG-135', title: 'Refactor sonic crawler', type: 'Engineering', status: 'In Progress', priority: 'High' },
												{ id: 'ENG-159', title: 'Error uploading images via API', type: 'Engineering', status: 'Todo', priority: 'Medium' },
												{ id: 'DES-168', title: 'Redesign users settings', type: 'Design', status: 'In Review', priority: 'Low' },
												{ id: 'ENG-160', title: 'Holtzmann engine', type: 'Engineering', status: 'Done', priority: 'High' }
											].map((issue, i) => (
												<motion.div
													key={issue.id}
													initial={{ opacity: 0, y: 20 }}
													animate={{ opacity: 1, y: 0 }}
													transition={{ delay: 1.2 + i * 0.1 }}
													className="flex items-center justify-between p-4 bg-gray-950 border border-gray-900 rounded-lg hover:border-gray-800 transition-colors cursor-pointer group"
													whileHover={{ scale: 1.01, transform: 'translateZ(10px)' }}
												>
													<div className="flex items-center space-x-4">
														<div className={`w-2 h-2 rounded-full ${
															issue.priority === 'High' ? 'bg-red-500' : 
															issue.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
														}`}></div>
														<div>
															<div className="flex items-center space-x-2">
																<span className="text-gray-500 text-sm font-mono">{issue.id}</span>
																<span className="text-white font-medium">{issue.title}</span>
															</div>
															<div className="flex items-center space-x-3 mt-1">
																<span className="text-gray-600 text-xs">{issue.type}</span>
																<span className={`px-2 py-0.5 rounded-full text-xs ${
																	issue.status === 'Done' ? 'bg-green-900 text-green-400' :
																	issue.status === 'In Progress' ? 'bg-blue-900 text-blue-400' :
																	issue.status === 'In Review' ? 'bg-purple-900 text-purple-400' :
																	'bg-gray-800 text-gray-400'
																}`}>
																	{issue.status}
																</span>
															</div>
														</div>
													</div>
													<div className="text-gray-600 group-hover:text-gray-500">
														<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
															<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
														</svg>
													</div>
												</motion.div>
											))}
										</div>
									</div>

									{/* Right Code Panel */}
									<motion.div 
										ref={codeEditorsRef}
										className="w-80 bg-gray-950 border-l border-gray-800 flex flex-col"
										style={{ transform: 'translateZ(15px)' }}
									>
										<div className="p-4 border-b border-gray-800">
											<h3 className="text-white font-semibold text-sm mb-2">Refactor sonic crawler</h3>
											<p className="text-gray-400 text-xs">SaaS automation project optimization</p>
										</div>
										
										<div className="flex-1 p-4 font-mono text-sm overflow-hidden">
											<div className="space-y-2">
												<div className="text-gray-500">// Sonic crawler refactor</div>
												<div className="text-blue-400">const <span className="text-white">crawler</span> = {'{'}</div>
												<div className="pl-4 text-gray-300">
													<div>async <span className="text-blue-400">crawl</span>() {'{'}</div>
													<div className="pl-4">
														<div className="text-gray-500">// Optimized crawling logic</div>
														<div>const <span className="text-yellow-400">results</span> = await</div>
														<div className="pl-4 text-green-400">this.fetchData();</div>
														<div>return <span className="text-yellow-400">results</span>;</div>
													</div>
													<div>{'}'}</div>
												</div>
												<div className="text-blue-400">{'};'}</div>
											</div>
										</div>
									</motion.div>
								</div>
							</motion.div>

							{/* Mobile/Tablet Dashboard (visible on mobile/tablet only) */}
							<motion.div 
								className="block lg:hidden relative bg-black rounded-2xl border border-gray-800 overflow-hidden shadow-2xl mx-4"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.9, duration: 1 }}
								style={{
									transform: 'perspective(800px) rotateX(0deg) rotateY(0deg)',
									transformStyle: 'preserve-3d'
								}}
							>
								{/* Mobile Browser Chrome */}
								<div className="flex items-center justify-between px-4 py-3 bg-gray-900 border-b border-gray-800">
									<div className="flex items-center space-x-3">
										<div className="flex space-x-2">
											<div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
											<div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
											<div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
										</div>
										<div className="bg-gray-800 rounded-md px-3 py-1 text-xs text-gray-400 font-mono">
											infernusreal.app
										</div>
									</div>
									<div className="flex items-center space-x-2">
										<div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
									</div>
								</div>
								
								{/* Mobile Dashboard Layout */}
								<div className="bg-black p-4 space-y-4">
									{/* Mobile Header */}
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3">
											<div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
												SR
											</div>
											<div>
												<h3 className="text-white font-semibold text-sm">Saif ur Rehman</h3>
												<p className="text-gray-500 text-xs">@InfernusReal</p>
											</div>
										</div>
										<div className="flex space-x-2">
											<div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">SaaS Dev</div>
											<div className="bg-purple-600 text-white px-2 py-1 rounded text-xs">AI Eng</div>
										</div>
									</div>

									{/* Mobile Stats Cards */}
									<div className="grid grid-cols-2 gap-3">
										<div className="bg-gray-950 border border-gray-800 rounded-lg p-3">
											<div className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-green-500 rounded-full"></div>
												<span className="text-gray-400 text-xs">Active Projects</span>
											</div>
											<div className="text-white font-bold text-lg mt-1">12</div>
										</div>
										<div className="bg-gray-950 border border-gray-800 rounded-lg p-3">
											<div className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-blue-500 rounded-full"></div>
												<span className="text-gray-400 text-xs">Deployments</span>
											</div>
											<div className="text-white font-bold text-lg mt-1">47</div>
										</div>
									</div>

									{/* Mobile Issues List */}
									<div className="space-y-2">
										<h4 className="text-white font-semibold text-sm">Recent Work</h4>
										{[
											{ id: 'ENG-135', title: 'Refactor sonic crawler', status: 'In Progress', priority: 'High' },
											{ id: 'ENG-159', title: 'Error uploading images', status: 'Todo', priority: 'Medium' },
											{ id: 'DES-168', title: 'Redesign users settings', status: 'Review', priority: 'Low' }
										].map((issue, i) => (
											<motion.div
												key={issue.id}
												initial={{ opacity: 0, y: 10 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ delay: 1.2 + i * 0.1 }}
												className="bg-gray-950 border border-gray-900 rounded-lg p-3"
											>
												<div className="flex items-center justify-between">
													<div className="flex items-center space-x-2">
														<div className={`w-2 h-2 rounded-full ${
															issue.priority === 'High' ? 'bg-red-500' : 
															issue.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
														}`}></div>
														<div>
															<div className="text-white font-medium text-sm">{issue.title}</div>
															<div className="text-gray-500 text-xs font-mono">{issue.id}</div>
														</div>
													</div>
													<span className={`px-2 py-1 rounded text-xs ${
														issue.status === 'In Progress' ? 'bg-blue-900 text-blue-400' :
														issue.status === 'Review' ? 'bg-purple-900 text-purple-400' :
														'bg-gray-800 text-gray-400'
													}`}>
														{issue.status}
													</span>
												</div>
											</motion.div>
										))}
									</div>

									{/* Mobile Code Preview */}
									<div className="bg-gray-950 border border-gray-800 rounded-lg p-3">
										<div className="flex items-center justify-between mb-2">
											<h4 className="text-white font-semibold text-sm">Latest Code</h4>
											<div className="text-green-400 text-xs">● Active</div>
										</div>
										<div className="font-mono text-xs space-y-1">
											<div className="text-gray-500">// SaaS automation</div>
											<div className="text-blue-400">const <span className="text-white">deploy</span> = async () =&gt; &#123;</div>
											<div className="pl-2 text-green-400">await build();</div>
											<div className="pl-2 text-yellow-400">return success;</div>
											<div className="text-blue-400">&#125;;</div>
										</div>
									</div>
								</div>
							</motion.div>

						</div>
					</motion.div>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.4 }}
					className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
				>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ repeat: Infinity, duration: 2 }}
						className="text-gray-500 bg-black/20 backdrop-blur-sm rounded-full p-2"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none">
							<path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							<path d="M7 6L12 11L17 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default Hero;
