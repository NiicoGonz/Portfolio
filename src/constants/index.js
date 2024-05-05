import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  Heinsohn,
  celuweb
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "projects",
    title: "Proyectos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
  
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Microservicios",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Creador de contenido",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  

];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Heinsohn",
    icon: Heinsohn,
    iconBg: "#f3f3f3",
    date: "March 2020 - April 2021",
    points: [
      "Desarrollando y manteniendo aplicaciones web utilizando Angular.js, Salesforce (Apex)  y otras tecnologías relacionadas.",
      "Colaborando con equipos multifuncionales que incluyen diseñadores, gerentes de producto y otros desarrolladores para crear productos de alta calidad.",
      "Implementando diseño responsivo y asegurando compatibilidad entre navegadores.",
      "Participando en revisiones de código y proporcionando retroalimentación constructiva a otros desarrolladores.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "Celuweb",
    icon: celuweb,
    iconBg: "#f3f3f3",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "",
  },
  
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "",
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
