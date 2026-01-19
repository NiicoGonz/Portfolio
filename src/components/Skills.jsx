import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import { useModal } from "../context/ModalContext";

const TechnologyModal = ({ technology, isOpen, onClose, language = "es" }) => {
  const { openModal, closeModal } = useModal();

  // Sincronizar con el contexto del modal
  useEffect(() => {
    if (isOpen) {
      openModal();
    } else {
      closeModal();
    }
  }, [isOpen, openModal, closeModal]);

  if (!technology) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.3, type: "spring" }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] w-[95%] sm:w-[90%] max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-y-auto overscroll-contain"
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div
              className="relative rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10"
              style={{
                background: `linear-gradient(135deg, ${technology.color}20, rgba(10, 10, 35, 0.95))`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: `2px solid ${technology.color}60`,
                boxShadow: `0 20px 60px 0 ${technology.color}40`,
                minHeight: 'fit-content',
              }}
            >
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10"
                style={{
                  background: `${technology.color}30`,
                  border: `1px solid ${technology.color}60`,
                }}
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke={technology.color}
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>

              {/* Header with icon and title */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 mb-4 sm:mb-6 md:mb-8 pr-8 sm:pr-0">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="flex-shrink-0"
                >
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${technology.color}40, ${technology.color}10)`,
                      border: `2px solid ${technology.color}60`,
                      boxShadow: `0 0 30px ${technology.color}60`,
                    }}
                  >
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                      style={{
                        filter: `drop-shadow(0 0 10px ${technology.color}80)`,
                      }}
                    />
                  </div>
                </motion.div>

                <div className="flex-1 text-center sm:text-left">
                  <h3
                    className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 notranslate"
                    translate="no"
                    style={{
                      color: technology.color,
                      textShadow: `0 0 30px ${technology.color}80`,
                    }}
                  >
                    {technology.name}
                  </h3>
                  <div
                    className="h-1 w-16 sm:w-20 md:w-32 rounded-full mx-auto sm:mx-0"
                    style={{
                      background: `linear-gradient(90deg, ${technology.color}, transparent)`,
                    }}
                  />
                </div>
              </div>

              {/* Description section */}
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h4 className="text-white text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: technology.color }}
                  />
                  {translations[language].skills.whatIs}
                </h4>
                <p className="text-secondary text-[13px] sm:text-[14px] md:text-[15px] leading-relaxed pl-4 sm:pl-5">
                  {translations[language].skills.technologies[technology.name]?.description || technology.description}
                </p>
              </div>


              {/* Decorative glow */}
              <div
                className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${technology.color}, transparent)`,
                }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SkillCard = ({ technology, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="relative group"
      onClick={onClick}
    >
      {/* Glassmorphism Card */}
      <div
        className="relative w-full h-32 rounded-2xl overflow-hidden cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${technology.color}15, ${technology.color}05)`,
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: `1px solid ${technology.color}30`,
          boxShadow: `0 8px 32px 0 ${technology.color}20`,
        }}
      >
        {/* Glow effect on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at center, ${technology.color}30, transparent 70%)`,
          }}
        />

        {/* Gradient border on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${technology.color}80, transparent)`,
            padding: '1px',
            WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
          {/* Icon */}
          <div className="mb-3 transform group-hover:scale-110 transition-transform duration-300">
            <img
              src={technology.icon}
              alt={technology.name}
              className="w-16 h-16 object-contain drop-shadow-lg"
              style={{
                filter: `drop-shadow(0 0 8px ${technology.color}60)`
              }}
            />
          </div>

          {/* Name */}
          <p
            className="text-sm font-semibold text-center tracking-wide notranslate"
            translate="no"
            style={{
              color: technology.color,
              textShadow: `0 0 10px ${technology.color}60`
            }}
          >
            {technology.name}
          </p>
        </div>

        {/* Shine effect */}
        <div
          className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-20 group-hover:left-full transition-all duration-700 ease-out"
          style={{ transform: 'skewX(-20deg)' }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language].skills;
  const [selectedTechnology, setSelectedTechnology] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { openModal, closeModal } = useModal();

  const handleSkillClick = (technology) => {
    setSelectedTechnology(technology);
    setIsModalOpen(true);
    openModal();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    closeModal();
    setTimeout(() => setSelectedTechnology(null), 300);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          {t.subtitle}
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          {t.title}
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {technologies.map((technology, index) => (
          <SkillCard
            key={technology.name}
            technology={technology}
            index={index}
            onClick={() => handleSkillClick(technology)}
          />
        ))}
      </div>

      <TechnologyModal
        technology={selectedTechnology}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        language={language}
      />
    </>
  );
};

export default SectionWrapper(Skills, "");
