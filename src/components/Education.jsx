import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const EducationCard = ({ degree, institution, period, description, icon, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        y: -8,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full group"
    >
      {/* Glassmorphism Card */}
      <div
        className="relative w-full rounded-3xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${color}15, ${color}05)`,
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: `1px solid ${color}30`,
          boxShadow: `0 8px 32px 0 ${color}20`,
          minHeight: "200px",
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at center, ${color}30, transparent 70%)`,
          }}
        />

        {/* Gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(135deg, ${color}, ${color}50)`,
            padding: "2px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Content */}
        <div className="relative z-10 py-6 px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 h-full">
          {/* Icon with floating animation */}
          <motion.div
            className="flex-shrink-0"
            animate={{
              y: isHovered ? [-3, 3, -3] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="relative">
              <div
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${color}30, ${color}10)`,
                  border: `1px solid ${color}40`,
                }}
              >
                <img
                  src={icon}
                  alt={degree}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain transform group-hover:scale-110 transition-transform duration-300"
                  style={{
                    filter: `drop-shadow(0 0 10px ${color}60)`,
                  }}
                />
              </div>
              {/* Glow circle behind icon */}
              <div
                className="absolute inset-0 rounded-2xl blur-xl -z-10 opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${color}, transparent)`,
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center sm:text-left">
            {/* Period Badge */}
            <motion.div
              className="inline-block mb-2"
              whileHover={{ scale: 1.05 }}
            >
              <span
                className="px-2 py-1 sm:px-3 rounded-full text-[10px] sm:text-xs font-semibold"
                style={{
                  background: `${color}20`,
                  border: `1px solid ${color}40`,
                  color: color,
                  textShadow: `0 0 10px ${color}60`,
                }}
              >
                {period}
              </span>
            </motion.div>

            {/* Degree */}
            <h3
              className="text-white text-[18px] sm:text-[20px] md:text-[22px] font-bold mb-1 tracking-wide"
              style={{
                textShadow: `0 0 20px ${color}60`,
              }}
            >
              {degree}
            </h3>

            {/* Institution */}
            <p
              className="text-[14px] sm:text-[16px] font-semibold mb-3"
              style={{
                color: color,
                opacity: 0.9,
              }}
            >
              {institution}
            </p>

            {/* Description */}
            <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Shine effect */}
        <div
          className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:left-full transition-all duration-1000 ease-out"
          style={{ transform: "skewX(-20deg)" }}
        />
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { language } = useLanguage();
  const t = translations[language].education;

  // Combinar datos estáticos (iconos, colores) con traducciones
  const translatedEducation = t.items.map((edu, index) => ({
    ...edu,
    icon: education[index]?.icon,
    color: education[index]?.color,
  }));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{t.title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px] mb-10"
      >
        {t.description}
      </motion.p>

      <div className="mt-12 flex flex-col gap-6">
        {translatedEducation.map((edu, index) => (
          <EducationCard key={`education-${index}`} index={index} {...edu} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
