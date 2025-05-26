import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Hero from './components/Hero';
import { useActiveSection } from './hooks/useActiveSection';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import CertificateCard from './components/CertificateCard';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const sections = ['About', 'Projects', 'Skills', 'Certifications', 'Contact'];
  const { activeSection, scrollToSection } = useActiveSection(sections);
  
  // Initialize dark mode from localStorage or system preference
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      if (savedMode !== null) {
        return savedMode === 'true';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Update class and localStorage when dark mode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const projects = [
    {
      title: "Sales Analysis Project",
      description: "Built an interactive Power BI dashboard to visualize and analyze sales performance and customer trends.",
      techStack: ["Power BI", "DAX"],
      githubLink: "https://github.com/gangadhar107/Sales-Analysis-Report-using-Power-BI",
      image: "/images/projects/imagesprojects1.png"
    },
    {
      title: "Codebasics Resume Project Challenge #13",
      description: "Solved real-world business problems using advanced SQL to extract insights on ride-sharing operations.",
      techStack: ["SQL", "Power BI", "DAX"],
      githubLink: "https://github.com/gangadhar107/codebasics-resume-challenge-13",
      image: "/images/projects/imagesprojects2.jpg"
    },
    {
      title: "Facial Emotion Detector",
      description: "Developed a deep learning model to classify facial emotions from images using OpenCV and CNN.",
      techStack: ["Python", "OpenCV", "CNN", "Deep Learning"],
      githubLink: "https://github.com/gangadhar107/Facial-Emotion-Detector-using-OpenCV-and-Deep-Learning",
      image: "/images/projects/imagesprojects3.png"
    }
  ];

  const skills = [
    {
      name: "SQL",
      percentage: 80,
      color: "bg-blue-500 bg-opacity-20"
    },
    {
      name: "Excel",
      percentage: 70,
      color: "bg-green-500 bg-opacity-20"
    },
    {
      name: "Power BI",
      percentage: 70,
      color: "bg-yellow-500 bg-opacity-20"
    },
    {
      name: "Python",
      percentage: 75,
      color: "bg-purple-500 bg-opacity-20"
    },
    {
      name: "Statistics",
      percentage: 75,
      color: "bg-red-500 bg-opacity-20"
    }
  ];

  const certificates = [
    {
      name: "Data Science for Engineers",
      organization: "NPTEL",
      link: "https://drive.google.com/file/d/1y5BoQjXtrBmtbUaoI2QwY6QochNXBVeV/view?usp=sharing",
      logo: "/images/certifications/nptel.jpg"
    },
    {
      name: "Database Management Systems",
      organization: "NPTEL",
      link: "https://drive.google.com/file/d/1jnBZ9PK_Z9GZ2L6-FADfcTeZPgh-l_mt/view?usp=sharing",
      logo: "/images/certifications/nptel.jpg"
    },
    {
      name: "Basic SQL",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/525a200c90a4",
      logo: "/images/certifications/HackerRank_logo.png"
    },
    {
      name: "Intermediate SQL",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/8dab442753f2",
      logo: "/images/certifications/HackerRank_logo.png"
    },
    {
      name: "Basic Python Programming",
      organization: "HackerRank",
      link: "https://www.hackerrank.com/certificates/cd2845b611cd",
      logo: "/images/certifications/HackerRank_logo.png"
    },
    {
      name: "Career Essentials in Data Analysis by Microsoft and LinkedIn",
      organization: "LinkedIn",
      link: "https://www.linkedin.com/learning/certificates/a324c4b5e9dd3fc69e915286b6c83559b41278b8f076a62139a3fea674ffe0db",
      logo: "/images/certifications/LinkedIn_logo.png"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar 
        activeSection={activeSection} 
        onSectionClick={scrollToSection} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Hero />
      
      <Section id="about" title="About Me">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Hey there, I'm Gangadhar 👋
            </motion.h3>
            
            <motion.div 
              className="prose prose-lg text-gray-600 dark:text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p>
                I recently graduated from NIT Andhra Pradesh and have a strong interest in data analytics. I enjoy working with data, finding patterns, and turning them into insights using tools like SQL, Python, and Power BI.
              </p>
              
              <p>
                I'm eager to begin my career and contribute to real-world projects where I can learn and grow as a data analyst.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-4"
            >
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                Download CV
              </a>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-6 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">Data Analysis</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">SQL, Python, Power BI</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">Recent Graduate</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">NIT Andhra Pradesh</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-white">Problem Solver</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Data-Driven Solutions</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="projects" title="My Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
              githubLink={project.githubLink}
              image={project.image}
            />
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills.map((skill) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              percentage={skill.percentage}
              color={skill.color}
            />
          ))}
        </motion.div>
        
        <motion.div
          className="mt-12 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
            Additional Skills & Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "Data Analysis",
              "Data Visualization",
              "Dashboard Design",
              "Problem Solving",
              "Critical Thinking",
              "Data Cleaning",
              "ETL",
              "Pandas",
              "NumPy",
              "Matplotlib"
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      <Section id="certifications" title="Certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert) => (
            <CertificateCard
              key={cert.name}
              name={cert.name}
              organization={cert.organization}
              link={cert.link}
              logo={cert.logo}
            />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400">
            These certifications represent my commitment to continuous learning and professional development in the field of data analysis.
          </p>
        </motion.div>
      </Section>

      <Section id="contact" title="Contact Me">
        <Contact />
      </Section>

      <ScrollToTop />
    </div>
  );
}

export default App; 