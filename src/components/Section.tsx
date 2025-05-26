import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({ id, title, children }: SectionProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        {children}
      </div>
    </motion.section>
  );
};

export default Section; 