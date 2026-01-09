import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useModal } from "../context/ModalContext";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isModalOpen } = useModal();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && !isModalOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 100 }}
          transition={{ duration: 0.3, type: "spring" }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer group"
          style={{
            background: "linear-gradient(135deg, rgba(145, 94, 255, 0.8), rgba(145, 94, 255, 0.5))",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            border: "2px solid rgba(145, 94, 255, 0.6)",
            boxShadow: "0 8px 32px 0 rgba(145, 94, 255, 0.4)",
          }}
        >
          {/* Arrow Icon */}
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M5 15l7-7 7 7"
              initial={{ y: 0 }}
              animate={{ y: [-2, 2, -2] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </svg>

          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full blur-xl opacity-50"
            style={{
              background: "radial-gradient(circle, rgba(145, 94, 255, 0.8), transparent)",
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Ripple effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              background: "rgba(145, 94, 255, 0.3)",
            }}
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.5,
              opacity: 0,
              transition: { duration: 0.6 },
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
