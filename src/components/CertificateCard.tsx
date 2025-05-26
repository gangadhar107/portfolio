import { motion } from 'framer-motion';

interface CertificateCardProps {
  name: string;
  organization: string;
  link: string;
  logo: string;
}

const CertificateCard = ({ name, organization, link, logo }: CertificateCardProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex-shrink-0 bg-white dark:bg-gray-700 rounded-lg p-2">
            <img
              src={logo}
              alt={`${organization} logo`}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{organization}</p>
          </div>
        </div>
        
        <div className="mt-4">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg
                     hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors w-full justify-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            View Certificate
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard; 