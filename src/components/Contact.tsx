import { motion } from 'framer-motion';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const Contact = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get in Touch</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out using the form below
          or connect with me on social media.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <ContactForm />
        
        <div className="mt-12">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-gray-600 dark:text-gray-300 mb-6"
          >
            Or connect with me on social media:
          </motion.p>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact; 