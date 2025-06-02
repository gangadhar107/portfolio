import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    category: 'Data Analysis',
    items: [
      'SQL',
      'Python',
      'Excel',
    ],
  },
  {
    category: 'Visualization',
    items: [
      'Power BI',
      'Matplotlib',
      'Seaborn',
    ],
  },
  {
    category: 'Statistics',
    items: [
      'A/B Testing',
      'Regression',
      'Time Series',
      'Clustering',
    ],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: groupIndex * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-6 text-center">
                {skillGroup.category}
              </h3>
              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="text-gray-700 dark:text-gray-300 text-center"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills 