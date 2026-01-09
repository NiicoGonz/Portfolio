import { motion } from "framer-motion";
import { useState } from "react";

import { styles } from "../styles";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const StarRating = ({ rating, color }) => {
  return (
    <div className="flex gap-0.5 sm:gap-1">
      {[...Array(5)].map((_, index) => (
        <motion.svg
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1, duration: 0.3 }}
          whileHover={{ scale: 1.2, rotate: 15 }}
          className="w-4 h-4 sm:w-5 sm:h-5"
          fill={index < rating ? color : "rgba(255, 255, 255, 0.2)"}
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial, name, designation, company, rating, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Color palette for cards
  const colors = [
    "#915EFF", // Purple
    "#61DAFB", // Cyan
    "#E0234E", // Red
    "#339933", // Green
  ];

  const cardColor = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.05,
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group"
    >
      {/* Glassmorphism Card */}
      <div
        className="relative w-full rounded-3xl overflow-hidden cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${cardColor}15, ${cardColor}05)`,
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)",
          border: `1px solid ${cardColor}30`,
          boxShadow: `0 8px 32px 0 ${cardColor}20`,
          minHeight: "320px",
        }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `radial-gradient(circle at top, ${cardColor}30, transparent 70%)`,
          }}
        />

        {/* Gradient border on hover */}
        <motion.div
          className="absolute inset-0 rounded-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: `linear-gradient(135deg, ${cardColor}, ${cardColor}50)`,
            padding: "2px",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Content */}
        <div className="relative z-10 py-6 px-4 sm:py-8 sm:px-6 flex flex-col h-full">
          {/* Quote Icon */}
          <motion.div
            className="mb-3 sm:mb-4"
            animate={{
              rotate: isHovered ? [0, 5, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 opacity-40"
              fill={cardColor}
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </motion.div>

          {/* Testimonial Text */}
          <p className="text-white text-[14px] sm:text-[15px] leading-relaxed mb-4 sm:mb-6 flex-1">
            {testimonial}
          </p>

          {/* Divider */}
          <motion.div
            className="h-[1px] mb-3 sm:mb-4"
            style={{
              background: `linear-gradient(90deg, transparent, ${cardColor}60, transparent)`,
            }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          />

          {/* Author Info */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <h4
                className="text-white text-[16px] sm:text-[18px] font-bold"
                style={{
                  textShadow: `0 0 15px ${cardColor}60`,
                }}
              >
                {name}
              </h4>
              <p
                className="text-[12px] sm:text-[13px] font-medium"
                style={{
                  color: cardColor,
                  opacity: 0.9,
                }}
              >
                {designation}
              </p>
              <p className="text-secondary text-[11px] sm:text-[12px]">{company}</p>
            </div>

            {/* Star Rating */}
            <div className="flex flex-col items-end flex-shrink-0">
              <StarRating rating={rating} color={cardColor} />
            </div>
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

const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  // Combinar datos estáticos (rating) con traducciones
  const translatedTestimonials = t.items.map((testimonial, index) => ({
    ...testimonial,
    rating: testimonials[index]?.rating || 5,
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
        {t.description}{" "}
        <span className="text-white font-semibold">{t.pleasure}</span>,{" "}
        {t.descriptionEnd}{" "}
        <span className="text-[#915EFF] font-semibold">{t.impact}</span>.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-6">
        {translatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`testimonial-${index}`} index={index} {...testimonial} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
