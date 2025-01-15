import { BiLogoBootstrap, BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoReact, BiLogoTailwindCss } from "react-icons/bi"
import { SiMysql } from "react-icons/si";
import {motion} from 'framer-motion'


function Tech() {

  const variants = {
    hidden:{opacity:0, y:50},
    visible:{opacity:1, y:0}
  }



  return (
    <div id="tech" className="flex min-h-[70h] w-full flex-col items-center justify-center gap-16">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}

      className="text-2xl font-light text-white md:text-5xl">
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div 
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoHtml5
            className="cursor-pointer text-[70px] text-orange-600 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoCss3
            className="cursor-pointer text-[80px] text-sky-600 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoJavascript
            className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoBootstrap
            className="cursor-pointer text-[80px] text-purple-800 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoReact
            className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoTailwindCss
            className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoNodejs
            className="cursor-pointer text-[80px] text-green-400 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoMongodb
            className="cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <SiMysql
            className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
        <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{duration:0.5}}
        >
          <BiLogoPostgresql
            className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-2 md:text-[100px]"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Tech