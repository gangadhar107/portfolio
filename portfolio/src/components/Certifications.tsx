import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const certifications = [
  {
    title: 'Data Science for Engineers',
    issuer: 'NPTEL',
    date: 'November 2023',
    logo: '/components/nptel.jpg',
    link: 'https://drive.google.com/file/d/1y5BoQjXtrBmtbUaoI2QwY6QochNXBVeV/view?usp=sharing',
  },
  {
    title: 'Database Management Systems',
    issuer: 'NPTEL',
    date: 'November 2022',
    logo: '/components/nptel.jpg',
    link: 'https://drive.google.com/file/d/1jnBZ9PK_Z9GZ2L6-FADfcTeZPgh-l_mt/view?usp=sharing',
  },
  {
    title: 'Basics SQL',
    issuer: 'HackerRank',
    date: 'January 2023',
    logo: '/components/HackerRank_logo.png',
    link: 'https://www.hackerrank.com/certificates/525a200c90a4',
  },
  {
    title: 'Intermediate SQL',
    issuer: 'HackerRank',
    date: 'September 2022',
    logo: '/components/HackerRank_logo.png',
    link: 'https://www.hackerrank.com/certificates/8dab442753f2',
  },
  {
    title: 'Basics of Python Programming',
    issuer: 'HackerRank',
    date: 'January 2023',
    logo: '/components/HackerRank_logo.png',
    link: 'https://www.hackerrank.com/certificates/cd2845b611cd',
  },
  {
    title: 'Career Essentials in Data Analysis by Microsoft and LinkedIn',
    issuer: 'LinkedIn',
    date: 'September 2022',
    logo: '/components/LinkedIn logo.png',
    link: 'https://www.linkedin.com/learning/certificates/a324c4b5e9dd3fc69e915286b6c83559b41278b8f076a62139a3fea674ffe0db',
  },
]

const Certifications = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="certifications" className="section-container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-center mb-4 h-16">
                <img
                  src={cert.logo}
                  alt={`${cert.issuer} logo`}
                  className="h-12 object-contain"
                />
              </div>

              <div className="text-center">
                <h3 className="font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">
                  {cert.date}
                </p>
                <a
                  href={cert.link}
                  className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                >
                  View Certificate →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Certifications 
