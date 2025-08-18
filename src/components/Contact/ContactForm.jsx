import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		company: '',
		projectType: '',
		budgetMin: '',
		budgetMax: '',
		timeline: '',
		description: ''
	});

	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Format budget range
		const budgetRange = formData.budgetMin && formData.budgetMax 
			? `$${formData.budgetMin} - $${formData.budgetMax}`
			: formData.budgetMin 
				? `$${formData.budgetMin}+`
				: formData.budgetMax 
					? `Up to $${formData.budgetMax}`
					: 'To be discussed';

		// Format the message for WhatsApp
		const message = `Hi Saif! I'm interested in working with you.

📋 Project Details:
• Name: ${formData.name}
• Email: ${formData.email}
• Company: ${formData.company || 'Not specified'}
• Project Type: ${formData.projectType}
• Budget Range: ${budgetRange}
• Timeline: ${formData.timeline}

📝 Project Description:
${formData.description}

Let's discuss this project!`;

		// Encode the message for URL
		const encodedMessage = encodeURIComponent(message);
		const whatsappUrl = `https://wa.me/923238507347?text=${encodedMessage}`;

		// Open WhatsApp
		window.open(whatsappUrl, '_blank');

		setTimeout(() => {
			setIsSubmitting(false);
			// Reset form
			setFormData({
				name: '',
				email: '',
				company: '',
				projectType: '',
				budgetMin: '',
				budgetMax: '',
				timeline: '',
				description: ''
			});
		}, 1000);
	};

	const projectTypes = [
		'SaaS Application',
		'Business Website',
		'E-commerce Store',
		'Mobile App',
		'Custom Software',
		'Performance Optimization',
		'Other'
	];

	const timelines = [
		'ASAP (Rush job)',
		'1-2 weeks',
		'1 month',
		'2-3 months',
		'3+ months',
		'Flexible'
	];

	return (
		<section className="relative py-20 bg-black">
			{/* Background elements */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
				<motion.div
					className="absolute top-1/3 left-1/6 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						opacity: [0.3, 0.6, 0.3],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut"
					}}
				/>
				<motion.div
					className="absolute bottom-1/3 right-1/6 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
					animate={{
						scale: [1.3, 1, 1.3],
						opacity: [0.6, 0.3, 0.6],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: "easeInOut",
						delay: 4
					}}
				/>
			</div>

			<div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bungee font-bold mb-6">
						<span className="text-white">START YOUR </span>
						<span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
							PROJECT
						</span>
					</h2>
					<p className="text-xl text-gray-300 font-lora max-w-2xl mx-auto leading-relaxed">
						Ready to transform your business? Fill out the form below and I'll get back to you within 24 hours with a detailed proposal.
					</p>
				</motion.div>

				{/* Form */}
				<motion.form
					onSubmit={handleSubmit}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					viewport={{ once: true }}
					className="relative"
				>
					{/* Form background */}
					<div className="absolute inset-0 bg-gradient-to-r from-gray-900/30 via-gray-800/20 to-gray-900/30 rounded-3xl backdrop-blur-sm border border-gray-800"></div>
					
					<div className="relative p-8 sm:p-12">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
							{/* Name */}
							<div>
								<label className="block text-white font-inter font-medium mb-3">
									Full Name *
								</label>
								<input
									type="text"
									name="name"
									value={formData.name}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
									placeholder="John Doe"
								/>
							</div>

							{/* Email */}
							<div>
								<label className="block text-white font-inter font-medium mb-3">
									Email Address *
								</label>
								<input
									type="email"
									name="email"
									value={formData.email}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
									placeholder="john@company.com"
								/>
							</div>

							{/* Company */}
							<div>
								<label className="block text-white font-inter font-medium mb-3">
									Company/Organization
								</label>
								<input
									type="text"
									name="company"
									value={formData.company}
									onChange={handleChange}
									className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
									placeholder="Your Company Ltd."
								/>
							</div>

							{/* Project Type */}
							<div>
								<label className="block text-white font-inter font-medium mb-3">
									Project Type *
								</label>
								<select
									name="projectType"
									value={formData.projectType}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-green-500 focus:outline-none transition-colors appearance-none cursor-pointer"
									style={{
										backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
										backgroundPosition: 'right 0.75rem center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1.5em 1.5em'
									}}
								>
									<option value="">Select project type</option>
									{projectTypes.map((type, index) => (
										<option key={index} value={type} className="bg-gray-900 text-white">{type}</option>
									))}
								</select>
							</div>

							{/* Budget Range */}
							<div>
								<label className="block text-white font-inter font-medium mb-3">
									Budget Range (USD) *
								</label>
								<div className="flex items-center space-x-3">
									<div className="flex-1">
										<input
											type="number"
											name="budgetMin"
											value={formData.budgetMin}
											onChange={handleChange}
											required
											placeholder="5,000"
											className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
										/>
									</div>
									<span className="text-gray-400 font-inter text-lg">—</span>
									<div className="flex-1">
										<input
											type="number"
											name="budgetMax"
											value={formData.budgetMax}
											onChange={handleChange}
											placeholder="15,000"
											className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors"
										/>
									</div>
								</div>
								<p className="text-gray-500 text-sm mt-2 font-inter">
									Leave max empty if you have an open budget
								</p>
							</div>

							{/* Timeline */}
							<div>
								<label className="block text-white font-inter font-medium mb-3">
									Timeline *
								</label>
								<select
									name="timeline"
									value={formData.timeline}
									onChange={handleChange}
									required
									className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white focus:border-green-500 focus:outline-none transition-colors appearance-none cursor-pointer"
									style={{
										backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
										backgroundPosition: 'right 0.75rem center',
										backgroundRepeat: 'no-repeat',
										backgroundSize: '1.5em 1.5em'
									}}
								>
									<option value="">Select timeline</option>
									{timelines.map((timeline, index) => (
										<option key={index} value={timeline} className="bg-gray-900 text-white">{timeline}</option>
									))}
								</select>
							</div>
						</div>

						{/* Description */}
						<div className="mb-8">
							<label className="block text-white font-inter font-medium mb-3">
								Project Description *
							</label>
							<textarea
								name="description"
								value={formData.description}
								onChange={handleChange}
								required
								rows={6}
								className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:border-green-500 focus:outline-none transition-colors resize-none"
								placeholder="Tell me about your project goals, requirements, and any specific features you need..."
							></textarea>
						</div>

						{/* Submit Button */}
						<motion.button
							type="submit"
							disabled={isSubmitting}
							className={`w-full px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-inter font-bold text-lg rounded-2xl transition-all duration-300 flex items-center justify-center ${
								isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-green-600 hover:to-blue-700 hover:shadow-lg hover:shadow-green-500/25'
							}`}
							whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
							whileTap={!isSubmitting ? { scale: 0.98 } : {}}
						>
							{isSubmitting ? (
								<>
									<svg className="w-6 h-6 mr-3 animate-spin" fill="none" viewBox="0 0 24 24">
										<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
										<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
									</svg>
									Opening WhatsApp...
								</>
							) : (
								<>
									<svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
										<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
									</svg>
									Send Project Details via WhatsApp
								</>
							)}
						</motion.button>

						{/* Additional info */}
						<p className="text-center text-gray-400 font-inter text-sm mt-6">
							🔒 Your information is secure and will only be used to discuss your project requirements.
						</p>
					</div>
				</motion.form>
			</div>
		</section>
	);
};

export default ContactForm;
