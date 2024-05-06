import {
  mobile,
  backend,
  creator,
  web,
  html,
  css,
  Heinsohn,
  celuweb,
  postobon,
  postobonB2C,
  assed,
  Angular,
  React,
  Node,
  Nest,
  Docker,
  Git,
  Mongo,
  Postgres,
  Python,
  Ts,
  js,
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
  {
    name: "Javascritp",
    icon: js,
  },
  {
    name: "Angular",
    icon: Angular,
  },
  {
    name: "React",
    icon: React,
  },
  {
    name: "Nodejs",
    icon: Node,
  },
  {
    name: "Nest",
    icon: Nest,
  },
  {
    name: "Docker",
    icon: Docker,
  },
  {
    name: "Git",
    icon: Git,
  },
  {
    name: "Mongo",
    icon: Mongo,
  },
  {
    name: "Postgres",
    icon: Postgres,
  },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Typescript",
    icon: Ts,
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
    name: "Assed ",
    description:
      "Proyecto desarrollado como freelance para la construccion de la api en un modelo de negocio SAS ",
    tags: [
      {
        name: "Nest.js",
        color: "red-text-gradient",
      },
      {
        name: "Mongo",
        color: "green-text-gradient",
      },
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
    ],
    image: assed,
    // source_code_link: "https://github.com/",
  },
  {
    name: "B2B Negocios ",
    description:
      "Proyecto desarrollado en Celuweb para el cliente Postobon, donde se construye un modelo B2B",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Sql",
        color: "white-text-gradient",
      },
    ],
    image: postobon,
    // source_code_link: "https://github.com/",
  },
  {
    name: "B2C Hogares ",
    description:
      "Proyecto desarrollado en Celuweb para el cliente Postobon, donde se construye un modelo B2C",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Sql",
        color: "white-text-gradient",
      },
    ],
    image: postobonB2C,
    // source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
