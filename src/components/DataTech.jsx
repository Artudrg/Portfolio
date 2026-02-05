import { BiLogoPostgresql } from "react-icons/bi";
import { SiMysql, SiSqlite } from "react-icons/si";
import { motion } from "framer-motion";
import PowerBiIcon from "../img/powerbi.svg";
import PythonIcon from "../img/python.svg";

function DataTech() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      id="data-tech"
      className="flex min-h-[70vh] w-full flex-col items-center justify-center gap-16"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-2xl font-light text-white md:text-5xl"
      >
        Herramientas y Tecnologías
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={PythonIcon}
            alt="Python"
            className="cursor-pointer w-[80px] transition-all duration-300 hover:-translate-y-2 md:w-[100px]"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiSqlite className="cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-2 md:text-[100px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={PowerBiIcon}
            alt="Power BI"
            className="cursor-pointer w-[80px] transition-all duration-300 hover:-translate-y-2 md:w-[100px]"
          />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoPostgresql className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:-translate-y-2 md:text-[100px]" />
        </motion.div>
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiMysql className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-2 md:text-[100px]" />
        </motion.div>
      </div>
    </div>
  );
}

export default DataTech;
