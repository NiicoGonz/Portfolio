/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const ServiceCard = ({ index, title, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Colores dinámicos por índice de servicio (independiente del idioma)
  const colors = ["#61DAFB", "#E0234E", "#339933", "#8B5CF6"];

  const color = colors[index] || "#915EFF";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="xs:w-[250px] w-full group relative"
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
          minHeight: "280px",
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at center, ${color}40, transparent 70%)`,
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
        <div className="relative z-10 py-5 px-6 sm:px-8 md:px-12 flex justify-evenly items-center flex-col h-full">
          {/* Icon with floating animation */}
          <motion.div
            className="mb-4 sm:mb-6"
            animate={{
              y: isHovered ? [-5, 5, -5] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="relative">
              <img
                src={icon}
                alt={title}
                className="w-20 h-20 object-contain transform group-hover:scale-110 transition-transform duration-300"
                style={{
                  filter: `drop-shadow(0 0 20px ${color}80)`,
                }}
              />
              {/* Glow circle behind icon */}
              <div
                className="absolute inset-0 rounded-full blur-2xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle, ${color}, transparent)`,
                }}
              />
            </div>
          </motion.div>

          {/* Title */}
          <h3
            className="text-white text-[20px] font-bold text-center tracking-wide"
            style={{
              textShadow: `0 0 20px ${color}80`,
            }}
          >
            {title}
          </h3>

          {/* Decorative line */}
          <motion.div
            className="mt-4 h-1 rounded-full"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            }}
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : "50%" }}
            transition={{ duration: 0.3 }}
          />
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

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t.subtitle}</p>
        <h2 className={styles.sectionHeadText}>{t.title}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]"
      >
        {t.intro}
      </motion.p>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            title={t.cards[index]?.title || service.title}
            icon={service.icon}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
