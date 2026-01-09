import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useState } from "react";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const ExperienceCard = ({ experience, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Color for each card (alternating)
  const colors = ["#915EFF", "#61DAFB", "#E0234E", "#339933"];
  const cardColor = colors[index % colors.length];

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: `linear-gradient(135deg, ${cardColor}10, rgba(10, 10, 35, 0.8))`,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${cardColor}30`,
        boxShadow: `0 8px 32px 0 ${cardColor}20`,
        color: "#fff",
        borderRadius: "24px",
      }}
      contentArrowStyle={{
        borderRight: `7px solid ${cardColor}40`,
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        border: `3px solid ${cardColor}`,
        boxShadow: `0 0 20px ${cardColor}60`,
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at top left, ${cardColor}40, transparent 70%)`,
          }}
        />

        <div className="relative z-10">
          <h3
            className='text-white text-[24px] font-bold'
            style={{
              textShadow: `0 0 20px ${cardColor}60`,
            }}
          >
            {experience.title}
          </h3>
          <p
            className='text-[16px] font-semibold mt-1'
            style={{
              margin: 0,
              color: cardColor,
            }}
          >
            {experience.company_name}
          </p>

          {/* Decorative line */}
          <motion.div
            className="mt-4 mb-5 h-[2px] rounded-full"
            style={{
              background: `linear-gradient(90deg, ${cardColor}, transparent)`,
            }}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          <ul className='mt-5 list-none space-y-3'>
            {experience.points.map((point, pointIndex) => (
              <motion.li
                key={`experience-point-${pointIndex}`}
                className='text-white-100 text-[14px] pl-1 tracking-wider flex items-start gap-3'
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: pointIndex * 0.1 }}
              >
                <span
                  className="mt-1 flex-shrink-0 w-2 h-2 rounded-full"
                  style={{
                    background: cardColor,
                    boxShadow: `0 0 10px ${cardColor}`,
                  }}
                />
                <span className="flex-1">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  // Combinar datos estáticos (iconos) con traducciones
  const translatedExperiences = t.experiences.map((exp, index) => ({
    ...exp,
    icon: experiences[index]?.icon,
    iconBg: experiences[index]?.iconBg,
  }));

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          {t.subtitle}
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          {t.title}
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {translatedExperiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
              index={index}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
