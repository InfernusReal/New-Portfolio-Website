import React from 'react';
import { motion } from 'framer-motion';
import ContactHero from './ContactHero';
import ContactServices from './ContactServices';
import ContactForm from './ContactForm';
import ContactCTA from './ContactCTA';

const Contact = () => {
	return (
		<motion.div 
			className="contact-page"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.8 }}
		>
			<ContactHero />
			<ContactServices />
			<ContactForm />
			<ContactCTA />
		</motion.div>
	);
};

export default Contact;
