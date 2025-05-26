import { motion } from 'framer-motion';

interface NavItemProps {
  section: string;
  activeSection: string;
  onClick: (section: string) => void;
}

const NavItem = ({ section, activeSection, onClick }: NavItemProps) => (
  <motion.button
    onClick={() => onClick(section)}
    className={`px-4 py-2 rounded-md transition-colors ${
      activeSection === section
        ? 'text-blue-600 dark:text-blue-400 font-medium'
        : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {section}
  </motion.button>
);

interface NavbarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar = ({ activeSection, onSectionClick, darkMode, setDarkMode }: NavbarProps) => {
  const sections = ['About', 'Projects', 'Skills', 'Certifications', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.h1 
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.h1>
          
          <div className="flex items-center space-x-2">
            {sections.map((section) => (
              <NavItem
                key={section}
                section={section}
                activeSection={activeSection}
                onClick={onSectionClick}
              />
            ))}
            
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 