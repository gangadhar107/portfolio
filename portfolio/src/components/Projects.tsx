import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const projects = [
  {
    title: 'Sales Analytics Report',
    description: 'Interactive Power BI dashboard analyzing sales trends and customer behavior.',
    image: './src/components/imagesprojects1.png',
    tags: ['Power BI', 'DAX'],
    link: 'https://github.com/gangadhar107/Sales-Analysis-Report-using-Power-BI',
  },
  {
    title: 'Codebasics resume project challenge #13',
    description: 'Analyzed and developed an interactive dashboard using Power BI',
    image: './src/components/imgagesprojects2.jpg',
    tags: ['Power BI', 'DAX', 'SQL'],
    link: 'https://github.com/gangadhar107/codebasics-resume-challenge-13',
  },
  {
    title: 'Facial Emotion Recognition',
    description: 'Developed a facial emotion recognition system using Convolutional Neural Networks (CNNs).',
    image: './src/components/imagesprojects3.png',
    tags: ['Python', 'CNN', 'TensorFlow'],
    link: 'https://github.com/gangadhar107/Facial-Emotion-Detector-using-OpenCV-and-Deep-Learning',
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="projects" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-blue-600 opacity-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects