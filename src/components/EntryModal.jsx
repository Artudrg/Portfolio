import { motion } from "framer-motion";

function EntryModal({ onSelectPath }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex bg-gray-900/70 backdrop-blur-sm"
    >
      {/* WEB */}
      <div
        onClick={() => onSelectPath("web")}
        className="flex w-1/2 cursor-pointer items-center justify-center transition-all duration-300 hover:bg-gray-800/60"
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-light text-white md:text-6xl"
        >
          Desarrollo Web
        </motion.h1>
      </div>

      {/* DATA */}
      <div
        onClick={() => onSelectPath("data")}
        className="flex w-1/2 cursor-pointer items-center justify-center transition-all duration-300 hover:bg-gray-800/60"
      >
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-light text-white md:text-6xl"
        >
          Análisis de Datos
        </motion.h1>
      </div>
    </motion.div>
  );
}

export default EntryModal;
