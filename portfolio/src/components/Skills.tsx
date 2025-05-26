import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skills = [
  {
    category: 'Data Analysis',
    items: [
      { name: 'SQL', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'Excel', level: 85 },
    ],
  },
  {
    category: 'Visualization',
    items: [
      { name: 'Power BI', level: 90 },
      { name: 'Matplotlib', level: 80 },
      { name: 'Seaborn', level: 80 },
    ],
  },
  {
    category: 'Statistics',
    items: [
      { name: 'A/B Testing', level: 85 },
      { name: 'Regression', level: 80 },
      { name: 'Time Series', level: 75 },
      { name: 'Clustering', level: 70 },
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
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-blue-600 dark:bg-blue-400 rounded-full"
                      />
                    </div>
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