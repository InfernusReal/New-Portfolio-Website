import React from 'react';
import { motion } from 'framer-motion';

const FeatureShowcase = () => {
	const features = [
		{
			icon: "🎮",
			title: "XP & Leveling System",
			subtitle: "The Core Engine",
			description: "Sophisticated algorithm generating XP for every action - from bug fixes (25-100 XP) to feature implementations (50-300 XP). Advance through 20 prestige levels from 'Script Kiddie' to 'Digital Overlord'.",
			highlights: ["Dynamic XP calculation", "20 prestige levels", "Collaboration bonuses", "Time-based multipliers"]
		},
		{
			icon: "🤖",
			title: "Discord Integration",
			subtitle: "The Social Nerve Center",
			description: "Full-fledged Discord ecosystem with real-time notifications, slash commands, automated role assignment, and voice channel integration for pair programming sessions.",
			highlights: ["Slash commands", "Auto role assignment", "Real-time notifications", "Voice integration"]
		},
		{
			icon: "⚡",
			title: "Real-Time Collaboration",
			subtitle: "Lightning-Fast Updates",
			description: "WebSocket architecture powering live dashboards, real-time cursors, collaborative editing with conflict resolution, and synchronized leaderboards.",
			highlights: ["Live dashboards", "Real-time cursors", "Conflict resolution", "Instant sync"]
		},
		{
			icon: "🏆",
			title: "Achievement System",
			subtitle: "The Dopamine Factory",
			description: "Over 50 unique achievements encouraging best practices: 'Merge Master', 'Bug Slayer', 'Code Ninja', 'Documentation Prophet', and many more special achievements.",
			highlights: ["50+ achievements", "Best practices focus", "Special unlocks", "Team achievements"]
		},
		{
			icon: "📊",
			title: "Advanced Analytics",
			subtitle: "Data-Driven Insights",
			description: "Interactive visualizations with productivity heatmaps, XP progression charts, team velocity metrics, and ML-powered performance predictions.",
			highlights: ["Productivity heatmaps", "Velocity metrics", "ML predictions", "Team analytics"]
		},
		{
			icon: "🧠",
			title: "Skills & Reputation",
			subtitle: "Comprehensive Profiles",
			description: "Technology proficiency levels, reputation scores, peer rating system, skill-based matchmaking, and personalized learning path recommendations.",
			highlights: ["Skill proficiency", "Peer ratings", "Smart matchmaking", "Learning paths"]
		}
	];

	return (
		<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-950" data-section="features">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6 text-white">
						EPIC FEATURES
					</h2>
					<p className="text-xl text-gray-400 max-w-4xl mx-auto font-lora">
						The arsenal of features that transforms project management into an RPG adventure
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-8">
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="group"
						>
							<div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 h-full hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10">
								<div className="flex items-start gap-6 mb-6">
									<div className="text-5xl">{feature.icon}</div>
									<div className="flex-1">
										<h3 className="text-2xl font-inter font-bold text-white mb-2">
											{feature.title}
										</h3>
										<p className="text-purple-400 font-inter font-semibold text-sm uppercase tracking-wide">
											{feature.subtitle}
										</p>
									</div>
								</div>

								<p className="text-gray-300 font-lora leading-relaxed mb-6">
									{feature.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{feature.highlights.map((highlight, hIndex) => (
										<span
											key={hIndex}
											className="bg-purple-900/30 border border-purple-500/30 text-purple-300 px-3 py-1 rounded-full text-sm font-inter font-medium"
										>
											{highlight}
										</span>
									))}
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Feature Highlight */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, delay: 0.5 }}
					viewport={{ once: true }}
					className="mt-20 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-12 text-center"
				>
					<h3 className="text-3xl sm:text-4xl font-bungee font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
						THE GAMIFICATION ALGORITHM
					</h3>
					<div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
						<code className="text-green-400 font-mono text-left block whitespace-pre-wrap">
{`// XP Calculation Algorithm
const calculateXP = (taskType, difficulty, timeRatio, collaborators) => {
  const baseXP = {
    'bug_fix': 25,
    'feature': 75, 
    'review': 20,
    'documentation': 30
  };

  const difficultyMultiplier = Math.pow(2, difficulty - 1);
  const timeBonus = Math.max(0.5, Math.min(2.0, 1/timeRatio));
  const collabBonus = 1 + (0.1 * Math.min(collaborators, 5));

  return Math.floor(baseXP[taskType] * difficultyMultiplier * timeBonus * collabBonus);
};`}
						</code>
					</div>
					<p className="text-gray-400 font-lora mt-6 max-w-3xl mx-auto">
						The mathematical foundation that makes every contribution feel rewarding and balanced
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default FeatureShowcase;
