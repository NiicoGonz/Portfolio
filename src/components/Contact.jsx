import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nicolas Gonzalez",
          from_email: form.email,
          to_email: "devniico@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Gracias. Te responderé tan pronto como sea posible. 🙏✉️");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("¡Ah, algo salió mal! Por favor, inténtalo de nuevo. 😔🔄");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] p-8 rounded-3xl relative group'
        style={{
          background: "linear-gradient(135deg, rgba(145, 94, 255, 0.1), rgba(10, 10, 35, 0.8))",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(145, 94, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(145, 94, 255, 0.2)",
        }}
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle at top left, rgba(145, 94, 255, 0.4), transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <p className={styles.sectionSubText}>Ponte en contacto</p>
          <h3 className={styles.sectionHeadText}>Contacto.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Nombre</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                className='py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none font-medium transition-all duration-300'
                style={{
                  background: "linear-gradient(135deg, rgba(145, 94, 255, 0.05), rgba(10, 10, 35, 0.5))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(145, 94, 255, 0.2)",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid rgba(145, 94, 255, 0.6)";
                  e.target.style.boxShadow = "0 0 20px rgba(145, 94, 255, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(145, 94, 255, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="PruebaEmail@dominio.com"
                className='py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none font-medium transition-all duration-300'
                style={{
                  background: "linear-gradient(135deg, rgba(145, 94, 255, 0.05), rgba(10, 10, 35, 0.5))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(145, 94, 255, 0.2)",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid rgba(145, 94, 255, 0.6)";
                  e.target.style.boxShadow = "0 0 20px rgba(145, 94, 255, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(145, 94, 255, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Mensaje</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='Ejemplo: Hola buenos días, me gustaria contactar contigo para solicitar información '
                className='py-4 px-6 placeholder:text-secondary text-white rounded-2xl outline-none font-medium transition-all duration-300 resize-none'
                style={{
                  background: "linear-gradient(135deg, rgba(145, 94, 255, 0.05), rgba(10, 10, 35, 0.5))",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(145, 94, 255, 0.2)",
                }}
                onFocus={(e) => {
                  e.target.style.border = "1px solid rgba(145, 94, 255, 0.6)";
                  e.target.style.boxShadow = "0 0 20px rgba(145, 94, 255, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "1px solid rgba(145, 94, 255, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
              />
            </label>

            <motion.button
              type='submit'
              className='py-4 px-10 rounded-2xl outline-none w-fit text-white font-bold relative overflow-hidden group'
              style={{
                background: "linear-gradient(135deg, rgba(145, 94, 255, 0.8), rgba(145, 94, 255, 0.5))",
                border: "1px solid rgba(145, 94, 255, 0.4)",
                boxShadow: "0 4px 15px rgba(145, 94, 255, 0.3)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(145, 94, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
            >
              {/* Shine effect */}
              <div
                className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 group-hover:left-full transition-all duration-700 ease-out"
                style={{ transform: "skewX(-20deg)" }}
              />
              <span className="relative z-10">
                {loading ? "Enviando..." : "Enviar"}
              </span>
            </motion.button>
          </form>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
