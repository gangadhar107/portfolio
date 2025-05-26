import { motion } from 'framer-motion';

interface SkillBarProps {
  name: string;
  percentage: number;
  color: string;
}

const SkillBar = ({ name, percentage, color }: SkillBarProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{name}</h3>
          <p className="text-gray-600 dark:text-gray-300">{percentage}% Proficiency</p>
        </div>
      </div>
      
      <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color.replace('bg-opacity-20', '')} dark:bg-opacity-60`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar; 