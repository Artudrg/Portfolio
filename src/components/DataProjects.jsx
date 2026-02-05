import {motion} from 'framer-motion'

const dataProjectsData = [
  {
    title: "Proyecto 1",
    description:
      "Descripción del proyecto de análisis de datos",
    technologies: ["Python", "Tableau"],
    link: '#'
  },
  {
    title: "Proyecto 2",
    description:
      "Descripción del proyecto de análisis de datos",
    technologies: ["Power BI", "SQL"],
    link: '#'
  },
];

const ScrollReveal = ({ children }) => {
  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className='flex flex-col items-center gpa-8 md:flex-row md:gap-24'>
        <div className='flex flex-col gap-5'>
          <div className='flex flex-col gap-3'>
            <div className='text-2xl font-semibold'>
              {project.title}
            </div>
            <p className='text-gray-400 text-lg md:text-md'>{project.description}</p>
          </div>
          <div className='flex flex-wrap gap-5'>
            {
              project.technologies.map((tech, index) => (
                <span key={index} className='rounded-lg bg-black p-3'>
                  {tech}
                </span>
              ))
            }
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-block rounded-lg bg-purple-700 px-5 py-2 text-center text-white transition-all duration-300 hover:bg-purple-500 w-[150px]"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}

function DataProjects() {
  return (
    <div id='data-projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <ScrollReveal>
      <h1 className='text-2xl font-light text-white md:text-5xl'>Proyectos de Análisis de Datos</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {dataProjectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default DataProjects