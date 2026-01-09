import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative w-14 h-7 rounded-full flex items-center transition-colors duration-300"
      style={{
        background: "linear-gradient(135deg, rgba(145, 94, 255, 0.2), rgba(10, 10, 35, 0.5))",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(145, 94, 255, 0.3)",
      }}
    >
      {/* Sliding indicator */}
      <motion.div
        className="absolute w-5 h-5 rounded-full"
        style={{
          background: "linear-gradient(135deg, #915EFF, #61DAFB)",
          boxShadow: "0 2px 8px rgba(145, 94, 255, 0.5)",
        }}
        animate={{
          x: language === "es" ? 3 : 30,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      {/* Labels */}
      <div className="w-full flex justify-between items-center px-1.5 relative z-10">
        <span
          className={`text-[10px] font-bold transition-colors duration-300 ${
            language === "es" ? "text-white" : "text-secondary"
          }`}
        >
          ES
        </span>
        <span
          className={`text-[10px] font-bold transition-colors duration-300 ${
            language === "en" ? "text-white" : "text-secondary"
          }`}
        >
          EN
        </span>
      </div>
    </motion.button>
  );
};

export default LanguageToggle;
