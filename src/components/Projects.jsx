import p1 from '../img/p1.png'
import p2 from '../img/p2.png'
import p3 from '../img/p3.png'
import p4 from '../img/p4.png'
import {motion} from 'framer-motion'

const projectsData = [
  {
    image: p1,
    title: "WeInnovate",
    description:
      "Custom development of a Landing Page tailored to all the company's needs, covering every stage of the process, from initial planning to launch and final hosting management.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: 'https://weinnovatepy.com/'
  },
  {
    image: p2,
    title: "Puro Limpio",
    description:
      "Complete creation of a personalized landing page for the client, managing every stage of the project, from initial planning to final delivery and hosting setup.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: 'https://www.purolimpio.com.py/'
  },
  {
    image: p3,
    title: "FumiDrone",
    description:
      "Design and development of a landing page tailored to the client's needs, encompassing all phases of the project, from the initial meeting to launch and final hosting management.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    link: 'https://fumidronepy.com/'
  },
  {
    image: p4,
    title: "Formula 1",
    description:
      "Personal project about Formula 1 using knowledge of high-performance animations with GSAP.",
    technologies: ["React", "Tailwind", "GSAP"],
    link: 'https://f1-jade.vercel.app/'
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
        <img
          src={project.image}
          alt=''
          className='w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[400px]'
        />

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
            className="mt-1 inline-block rounded-lg bg-blue-700 px-5 py-2 text-center text-white transition-all duration-300 hover:bg-blue-500 w-[150px]"
          >
            Visit Project
          </a>
        </div>
      </div>
    </ScrollReveal>
  )
}


function Projects() {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <ScrollReveal>
      <h1 className='text-2xl font-light text-white md:text-5xl'>My Projects</h1>
      </ScrollReveal>
      <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
          />
        ))}
      </div>
    </div>
  )
}

export default Projects