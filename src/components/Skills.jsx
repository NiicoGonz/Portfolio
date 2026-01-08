import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const SkillCard = ({ technology, index }) => {
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
            className="text-sm font-semibold text-center tracking-wide"
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
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider text-center">
          Mi Stack Tecnológico
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center">
          Skills.
        </h2>
      </motion.div>

      <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {technologies.map((technology, index) => (
          <SkillCard
            key={technology.name}
            technology={technology}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "");
