import { motion } from "framer-motion";
import "animate.css";

import { styles } from "../styles";
import { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Textos diferentes para móvil y desktop
  const toRotate = isMobile ? t.titlesMobile : t.titles;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(80);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(2000); // Pause 2 seconds when complete
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Animated floating orbs - responsive sizes */}
      <motion.div
        className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 rounded-full opacity-15 sm:opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #915EFF, transparent)" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-15 sm:opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #61DAFB, transparent)" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          {/* Animated circle */}
          <motion.div
            className="w-5 h-5 rounded-full bg-[#915EFF]"
            animate={{
              boxShadow: [
                "0 0 20px #915EFF",
                "0 0 40px #915EFF",
                "0 0 20px #915EFF",
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative"
        >
          {/* Glassmorphism container for text - responsive padding */}
          <div
            className="relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(145, 94, 255, 0.05), rgba(10, 10, 35, 0.3))",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(145, 94, 255, 0.2)",
              boxShadow: "0 8px 32px 0 rgba(145, 94, 255, 0.15)",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className={`${styles.heroHeadText} text-white`}>
                {t.greeting}{" "}
                <span
                  className="text-[#915EFF]"
                  style={{
                    textShadow: "0 0 30px rgba(145, 94, 255, 0.6)",
                  }}
                >
                  <span className="wrap">{text}</span>
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-[#915EFF]"
                  >
                    |
                  </motion.span>
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={`${styles.heroSubText} mt-4 sm:mt-6 md:mt-8 text-white-100`}
            >
              {t.description}
            </motion.p>

            {/* Decorative elements */}
            <motion.div
              className="absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-30 blur-2xl"
              style={{ background: "#915EFF" }}
              animate={{
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <motion.div
            className="w-[35px] h-[64px] rounded-3xl flex justify-center items-start p-2 relative"
            style={{
              background: "linear-gradient(135deg, rgba(145, 94, 255, 0.1), rgba(10, 10, 35, 0.5))",
              backdropFilter: "blur(10px)",
              border: "2px solid rgba(145, 94, 255, 0.4)",
              boxShadow: "0 4px 15px rgba(145, 94, 255, 0.3)",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 6px 20px rgba(145, 94, 255, 0.5)",
            }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full mb-1"
              style={{
                background: "#915EFF",
                boxShadow: "0 0 10px #915EFF",
              }}
            />
          </motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
