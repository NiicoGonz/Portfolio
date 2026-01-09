import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useEffect } from "react";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

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
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
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
        <div className="relative w-full h-[200px] sm:h-[230px] overflow-hidden rounded-t-3xl">
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
        <div className="relative z-10 p-4 sm:p-6">
          {/* Title */}
          <h3
            className="text-white font-bold text-[20px] sm:text-[24px] mb-2 sm:mb-3"
            style={{
              textShadow: `0 0 20px ${primaryColor}60`,
            }}
          >
            {name}
          </h3>

          {/* Description */}
          <p className="text-secondary text-[13px] sm:text-[14px] leading-relaxed mb-3 sm:mb-4">
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
                  className="px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-[12px] font-semibold"
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
  const { language } = useLanguage();
  const t = translations[language].works;
  const [activeFilter, setActiveFilter] = useState(t.all);

  // Actualizar el filtro activo cuando cambia el idioma
  useEffect(() => {
    setActiveFilter(t.all);
  }, [language, t.all]);

  // Combinar datos estáticos (imágenes, tags) con traducciones
  const translatedProjects = useMemo(() => {
    return t.projects.map((translatedProject, index) => ({
      ...translatedProject,
      image: projects[index]?.image,
      tags: projects[index]?.tags || [],
      source_code_link: projects[index]?.source_code_link,
    }));
  }, [language]);

  // Extraer todas las tecnologías únicas de los proyectos
  const allTags = useMemo(() => {
    const tagsSet = new Set();
    translatedProjects.forEach((project) => {
      project.tags.forEach((tag) => tagsSet.add(tag.name));
    });
    return [t.all, ...Array.from(tagsSet)];
  }, [t.all, translatedProjects]);

  // Filtrar proyectos basado en el filtro activo
  const filteredProjects = useMemo(() => {
    if (activeFilter === t.all) return translatedProjects;
    return translatedProjects.filter((project) =>
      project.tags.some((tag) => tag.name === activeFilter)
    );
  }, [activeFilter, t.all, translatedProjects]);

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
        {t.description}{" "}
        <span className="text-white font-semibold">{t.complexProblems}</span>,{" "}
        {t.descriptionEnd}
      </motion.p>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-8 sm:mt-12 flex flex-wrap gap-3 justify-center"
      >
        {allTags.map((tag, index) => (
          <motion.button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[13px] sm:text-[14px] font-semibold transition-all duration-300"
            style={{
              background:
                activeFilter === tag
                  ? "linear-gradient(135deg, rgba(145, 94, 255, 0.8), rgba(145, 94, 255, 0.5))"
                  : "linear-gradient(135deg, rgba(145, 94, 255, 0.1), rgba(10, 10, 35, 0.5))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border:
                activeFilter === tag
                  ? "1px solid rgba(145, 94, 255, 0.6)"
                  : "1px solid rgba(145, 94, 255, 0.2)",
              boxShadow:
                activeFilter === tag
                  ? "0 4px 15px rgba(145, 94, 255, 0.4)"
                  : "0 2px 10px rgba(145, 94, 255, 0.1)",
              color: activeFilter === tag ? "#FFFFFF" : "#AAA6C3",
            }}
          >
            {tag}
            {activeFilter === tag && tag !== t.all && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="ml-2 inline-block w-2 h-2 rounded-full bg-white"
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Counter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 text-center"
      >
        <span className="text-secondary text-sm">
          {t.showing} <span className="text-white font-semibold">{filteredProjects.length}</span> {t.of}{" "}
          <span className="text-white font-semibold">{translatedProjects.length}</span> {t.projectsText}
        </span>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.name} index={index} {...project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <p className="text-secondary text-lg">
            {t.noProjects} <span className="text-white font-semibold">{activeFilter}</span>
          </p>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Works, "projects");
