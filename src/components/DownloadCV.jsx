import { motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const DownloadCV = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].nav;

  const handleDownload = () => {
    setIsDownloading(true);

    // Simular descarga
    setTimeout(() => {
      // Crear un link temporal y hacer click en él
      const link = document.createElement("a");
      link.href = "/cv/Nicolas_Gonzalez_CV.pdf"; // Pon tu CV en public/cv/
      link.download = "Nicolas_Gonzalez_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setIsDownloading(false);
    }, 500);
  };

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="relative px-6 py-3 rounded-xl font-bold overflow-hidden group flex items-center gap-2"
      style={{
        background: "linear-gradient(135deg, rgba(145, 94, 255, 0.8), rgba(145, 94, 255, 0.5))",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "2px solid rgba(145, 94, 255, 0.6)",
        boxShadow: "0 4px 15px rgba(145, 94, 255, 0.4)",
      }}
    >
      {/* Icon */}
      {isDownloading ? (
        <motion.svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </motion.svg>
      ) : (
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      )}

      {/* Text */}
      <span className="relative z-10 text-white text-sm sm:text-base">
        {isDownloading ? t.downloading : t.downloadCV}
      </span>

      {/* Shine effect */}
      <div
        className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:left-full transition-all duration-700 ease-out"
        style={{ transform: "skewX(-20deg)" }}
      />

      {/* Pulse effect */}
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
        style={{
          background: "rgba(145, 94, 255, 0.3)",
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </motion.button>
  );
};

export default DownloadCV;
