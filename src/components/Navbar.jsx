import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300`}
      style={{
        background: scrolled
          ? "rgba(10, 10, 35, 0.85)"
          : "rgba(10, 10, 35, 0.3)",
        backdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(10px)",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.1)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 8px 32px 0 rgba(0, 0, 0, 0.37)" : "none",
      }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2 group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="relative">
            <img
              src={logo}
              alt="logo"
              className="w-9 h-9 object-contain transform group-hover:scale-110 transition-transform duration-300"
            />
            <div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: "radial-gradient(circle, rgba(138, 43, 226, 0.4), transparent)",
                filter: "blur(8px)",
              }}
            />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex group-hover:text-purple-400 transition-colors duration-300">
            Devniico &nbsp;
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="relative group"
              onClick={() => setActive(nav.title)}
            >
              <a
                href={`#${nav.id}`}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } text-[16px] font-medium cursor-pointer transition-all duration-300 group-hover:text-white`}
              >
                {nav.title}
              </a>
              {/* Underline effect */}
              <div
                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                  active === nav.title ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 hover:bg-white/10"
            onClick={() => setToggle(!toggle)}
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain"
            />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl transition-all duration-300`}
            style={{
              background: "rgba(10, 10, 35, 0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              boxShadow: "0 8px 32px 0 rgba(138, 43, 226, 0.3)",
            }}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] transition-all duration-300 ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white hover:translate-x-1`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
