import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EasterEggs = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSecret, setShowSecret] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [typedKeys, setTypedKeys] = useState("");
  const [matrixMode, setMatrixMode] = useState(false);

  // Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  // Console hints on mount
  useEffect(() => {
    console.log("%c🎮 Easter Eggs disponibles:", "color: #915EFF; font-size: 20px; font-weight: bold;");
    console.log("%c1. Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A", "color: #61DAFB; font-size: 14px;");
    console.log("%c2. Escribe 'devniico' en cualquier momento", "color: #47A248; font-size: 14px;");
    console.log("%c3. Escribe 'matrix' para Matrix Mode", "color: #E0234E; font-size: 14px;");
    console.log("%c¡Diviértete explorando! 🚀", "color: #F7DF1E; font-size: 16px; font-weight: bold;");
  }, []);

  const triggerKonamiEffect = () => {
    console.log("🎉 Konami Code activated!");
    setShowConfetti(true);

    // Create party effect
    const colors = ["#915EFF", "#61DAFB", "#47A248", "#E0234E", "#F7DF1E"];

    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        createConfetti(colors[Math.floor(Math.random() * colors.length)]);
      }, i * 30);
    }

    setTimeout(() => setShowConfetti(false), 5000);
  };

  const createConfetti = (color) => {
    const confetti = document.createElement("div");
    confetti.style.position = "fixed";
    confetti.style.width = "10px";
    confetti.style.height = "10px";
    confetti.style.backgroundColor = color;
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = "-10px";
    confetti.style.borderRadius = "50%";
    confetti.style.pointerEvents = "none";
    confetti.style.zIndex = "9999";
    confetti.style.boxShadow = `0 0 10px ${color}`;

    document.body.appendChild(confetti);

    const animation = confetti.animate(
      [
        {
          transform: "translateY(0) rotate(0deg)",
          opacity: 1,
        },
        {
          transform: `translateY(${window.innerHeight + 10}px) rotate(${
            Math.random() * 360
          }deg)`,
          opacity: 0,
        },
      ],
      {
        duration: Math.random() * 2000 + 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }
    );

    animation.onfinish = () => {
      confetti.remove();
    };
  };

  const triggerMatrixMode = () => {
    console.log("💻 Matrix Mode activated!");
    setMatrixMode(true);

    // Create matrix rain effect
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9998";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    const columns = Math.floor(canvas.width / 20);
    const drops = Array(columns).fill(1);

    const matrixChars = "DEVNIICO01";

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#915EFF";
      ctx.font = "15px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    setTimeout(() => {
      clearInterval(interval);
      canvas.remove();
      setMatrixMode(false);
    }, 5000);
  };

  const triggerSecretMessage = () => {
    console.log("✨ Secret message discovered!");
    setShowSecret(true);
    setTimeout(() => setShowSecret(false), 4000);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      const key = e.key.toLowerCase();

      // Konami Code detection
      if (e.key === konamiCode[konamiIndex]) {
        const newIndex = konamiIndex + 1;
        if (newIndex === konamiCode.length) {
          triggerKonamiEffect();
          setKonamiIndex(0);
        } else {
          setKonamiIndex(newIndex);
        }
      } else {
        setKonamiIndex(0);
      }

      // Update typed keys
      setTypedKeys((prev) => {
        const newTyped = (prev + key).slice(-8); // Keep last 8 characters

        // Check for "matrix" (6 characters)
        if (newTyped.slice(-6) === "matrix") {
          triggerMatrixMode();
          return "";
        }

        // Check for "devniico" (8 characters)
        if (newTyped === "devniico") {
          triggerSecretMessage();
          return "";
        }

        return newTyped;
      });
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [konamiIndex]);

  return (
    <>
      {/* Konami Code Success Message */}
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] p-8 rounded-3xl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(145, 94, 255, 0.95), rgba(97, 218, 251, 0.95))",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(145, 94, 255, 0.5)",
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1, 1.1, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">🎉 KONAMI CODE! 🎉</h2>
              <p className="text-xl text-white">¡Encontraste el código secreto!</p>
              <p className="text-lg text-white/80 mt-2">You found the secret code!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Matrix Mode Message */}
      <AnimatePresence>
        {matrixMode && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-10 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-3 rounded-full"
            style={{
              background: "rgba(0, 0, 0, 0.9)",
              border: "2px solid #915EFF",
              boxShadow: "0 0 20px #915EFF",
            }}
          >
            <p className="text-lg font-mono text-[#915EFF]">
              MATRIX MODE ACTIVATED 💻
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Secret Message */}
      <AnimatePresence>
        {showSecret && (
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] p-8 rounded-3xl text-center max-w-md"
            style={{
              background: "linear-gradient(135deg, rgba(230, 57, 70, 0.95), rgba(241, 250, 238, 0.95))",
              backdropFilter: "blur(20px)",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 8px 32px 0 rgba(230, 57, 70, 0.5)",
            }}
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              <h2 className="text-3xl font-bold mb-4">✨ ¡Secreto Descubierto! ✨</h2>
              <p className="text-lg mb-2">
                ¡Gracias por explorar mi portfolio! 🚀
              </p>
              <p className="text-base opacity-80">
                Thanks for exploring my portfolio! 🚀
              </p>
              <p className="text-sm mt-4 opacity-70">
                Pssst... intenta teclear "matrix" 🤫
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default EasterEggs;
