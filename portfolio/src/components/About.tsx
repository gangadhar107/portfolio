import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  return (
    <section id="about" className="section-container">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="max-w-4xl mx-auto"
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-8"
        >
          About Me
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center"
        >
          I am an aspiring Data Analyst with a strong foundation in data analysis fundamentals.
          Currently seeking opportunities to apply my knowledge of SQL, Python, and visualization tools
          in a professional setting. I am passionate about transforming data into meaningful insights
          and eager to contribute to data-driven decision-making in a dynamic organization.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default About 