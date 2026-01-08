import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Color dinámico basado en el primer tag
  const primaryColor = tags[0]?.color?.includes("blue")
    ? "#61DAFB"
    : tags[0]?.color?.includes("green")
    ? "#47A248"
    : tags[0]?.color?.includes("red")
    ? "#E0234E"
    : "#915EFF";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.3 },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="sm:w-[360px] w-full group"
    >
      {/* Glassmorphism Card */}
      <div
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}10, rgba(10, 10, 35, 0.9))`,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: `1px solid ${primaryColor}30`,
          boxShadow: `0 8px 32px 0 ${primaryColor}25`,
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at 50% 0%, ${primaryColor}30, transparent 70%)`,
          }}
        />

        {/* Image Container */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-t-3xl">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `linear-gradient(to bottom, transparent, ${primaryColor}40)`,
            }}
          />

          {/* GitHub Button */}
          {source_code_link && (
            <motion.div
              className="absolute top-3 right-3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110"
                style={{
                  background: `rgba(0, 0, 0, 0.7)`,
                  backdropFilter: "blur(10px)",
                  border: `1px solid ${primaryColor}50`,
                }}
              >
                <img
                  src={github}
                  alt="github"
                  className="w-6 h-6 object-contain"
                />
              </div>
            </motion.div>
          )}
        </div>

        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Title */}
          <h3
            className="text-white font-bold text-[24px] mb-3"
            style={{
              textShadow: `0 0 20px ${primaryColor}60`,
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p className="text-secondary text-[14px] leading-relaxed mb-4">
            {description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
              const tagColors = {
                "blue-text-gradient": "#61DAFB",
                "green-text-gradient": "#47A248",
                "red-text-gradient": "#E0234E",
                "white-text-gradient": "#FFFFFF",
                "pink-text-gradient": "#EC4899",
              };

              const tagColor = tagColors[tag.color] || "#915EFF";

              return (
                <motion.span
                  key={`${name}-${tag.name}`}
                  whileHover={{ scale: 1.1 }}
                  className="px-3 py-1 rounded-full text-[12px] font-semibold"
                  style={{
                    background: `${tagColor}20`,
                    color: tagColor,
                    border: `1px solid ${tagColor}40`,
                  }}
                >
                  #{tag.name}
                </motion.span>
              );
            })}
          </div>
        </div>

        {/* Shine effect */}
        <div
          className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-10 group-hover:left-full transition-all duration-1000 ease-out pointer-events-none"
          style={{ transform: "skewX(-20deg)" }}
        />
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Mi trabajo</p>
        <h2 className={styles.sectionHeadText}>Proyectos.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Los siguientes proyectos muestran mis habilidades y experiencia a
        través de ejemplos del mundo real de mi trabajo. Cada proyecto está
        brevemente descrito con enlaces a repositorios de código y
        demostraciones en vivo. Esto refleja mi capacidad para{" "}
        <span className="text-white font-semibold">resolver problemas complejos</span>,
        trabajar con diferentes tecnologías y gestionar proyectos de manera efectiva.
      </motion.p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
