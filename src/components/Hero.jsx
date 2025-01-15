import pic from '../img/arturo.jpg'
import {motion} from 'framer-motion'

function Hero() {
  return (
    <div id='home' className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col items-center justify-center gap-10 text-white'>
        <motion.div
          initial={{y:-50,opacity:0}}
          animate={{y:0,opacity:1}}
          transition={{duration:0.8,delay:0.2}}
        >
          <img 
            src={pic}
            alt=''
            className='w-[200px] cursor-pointer rounded-full shadow-md shadow-gray-900 transition-all duration-300 hover:-translate-y-2 hover:scale-100 hover:shadow-xl hover:shadow-gray-600 md:w-[250px]'
          />
        </motion.div>
        <motion.div 
        initial={{y:50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.2}}
        
        className='flex max-w-[700px] flex-col items-center justify-center gap-3 text-center'>
          <h1 className='bg-clip-text text-2xl font-light md:text-6xl'>Arturo Romero</h1>
          <h3 className='bg-clip-text text-xl font-light md:text-4xl'>Web Developer</h3>
          <p className='md:text-md text-pretty text-lg text-gray-400'>I'm a Full Stack MERN developer with a passion for creating clean, scalable applications. Currently, I'm pursuing a degree in Computer Science Engineering.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero