import { DiMsqlServer } from "react-icons/di"; 
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
      id="tech"
      className="flex min-h-[60vh] w-full flex-col items-center justify-center gap-16"
    >
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-2xl font-light text-white md:text-5xl"
      >
        Tecnologías Principales
      </motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-16 p-5">
        
        {/* Python */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={PythonIcon}
            alt="Python"
            className="cursor-pointer w-[90px] transition-all duration-300 hover:-translate-y-2 md:w-[120px]"
          />
        </motion.div>

        {/* SQL Server */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center gap-2">
            <DiMsqlServer className="cursor-pointer text-[90px] text-red-600 transition-all duration-300 hover:-translate-y-2 md:text-[120px]" />
            <span className="text-sm text-gray-400 font-mono">SQL Server</span>
          </div>
        </motion.div>

        {/* Power BI */}
        <motion.div
          variants={variants}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={PowerBiIcon}
            alt="Power BI"
            className="cursor-pointer w-[90px] transition-all duration-300 hover:-translate-y-2 md:w-[120px]"
          />
        </motion.div>

      </div>
    </div>
  );
}

export default DataTech;