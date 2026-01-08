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
    color: "#E34F26" // Naranja HTML5
  },
  {
    name: "CSS 3",
    icon: css,
    color: "#1572B6" // Azul CSS3
  },
  {
    name: "Javascritp",
    icon: js,
    color: "#F7DF1E" // Amarillo JavaScript
  },
  {
    name: "Angular",
    icon: Angular,
    color: "#DD0031" // Rojo Angular
  },
  {
    name: "React",
    icon: React,
    color: "#61DAFB" // Cyan React
  },
  {
    name: "Nodejs",
    icon: Node,
    color: "#339933" // Verde Node.js
  },
  {
    name: "Nest",
    icon: Nest,
    color: "#E0234E" // Rojo NestJS
  },
  {
    name: "Docker",
    icon: Docker,
    color: "#2496ED" // Azul Docker
  },
  {
    name: "Git",
    icon: Git,
    color: "#F05032" // Naranja Git
  },
  {
    name: "Mongo",
    icon: Mongo,
    color: "#47A248" // Verde MongoDB
  },
  {
    name: "Postgres",
    icon: Postgres,
    color: "#4169E1" // Azul PostgreSQL
  },
  {
    name: "Python",
    icon: Python,
    color: "#3776AB" // Azul Python
  },
  {
    name: "Typescript",
    icon: Ts,
    color: "#3178C6" // Azul TypeScript
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
    date: "March 2020 - actualidad",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    degree: "Ingeniería de Software",
    institution: "Universidad Nacional",
    period: "2016 - 2020",
    description: "Formación integral en desarrollo de software, arquitectura de sistemas, bases de datos y metodologías ágiles.",
    icon: web,
    color: "#915EFF"
  },
  {
    degree: "Certificación React Developer",
    institution: "Meta (Facebook)",
    period: "2021",
    description: "Certificación profesional en desarrollo con React, incluyendo hooks, context API y mejores prácticas.",
    icon: React,
    color: "#61DAFB"
  },
  {
    degree: "Certificación Node.js",
    institution: "OpenJS Foundation",
    period: "2020",
    description: "Especialización en desarrollo backend con Node.js, Express y arquitecturas de microservicios.",
    icon: Node,
    color: "#339933"
  },
  {
    degree: "Certificación AWS Solutions Architect",
    institution: "Amazon Web Services",
    period: "2022",
    description: "Certificación en diseño y despliegue de aplicaciones escalables en AWS.",
    icon: backend,
    color: "#FF9900"
  }
];

const testimonials = [
  {
    testimonial:
      "Trabajar con Nico fue una experiencia excepcional. Su capacidad para entender los requisitos del negocio y traducirlos en soluciones técnicas innovadoras es impresionante. Entregó el proyecto antes de tiempo y superó todas nuestras expectativas.",
    name: "Carlos Rodríguez",
    designation: "CEO",
    company: "Assed SAS",
    rating: 5,
  },
  {
    testimonial:
      "Nicolas demostró un profundo conocimiento en arquitectura de microservicios y desarrollo full-stack. Su código es limpio, bien documentado y fácil de mantener. Un profesional que realmente se preocupa por la calidad.",
    name: "María González",
    designation: "Tech Lead",
    company: "Celuweb",
    rating: 5,
  },
  {
    testimonial:
      "La implementación del modelo B2B para Postobón fue un éxito rotundo gracias a la experiencia y dedicación de Nicolas. Su capacidad de trabajo en equipo y resolución de problemas complejos es sobresaliente.",
    name: "Andrés Martínez",
    designation: "Project Manager",
    company: "Postobón",
    rating: 5,
  },
  {
    testimonial:
      "Nico no solo es un excelente desarrollador, sino también un gran comunicador. Siempre estuvo disponible para explicar conceptos técnicos de manera clara y proponer mejoras al proyecto. Altamente recomendado.",
    name: "Laura Sánchez",
    designation: "Product Owner",
    company: "Heinsohn",
    rating: 5,
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

export { services, technologies, experiences, education, testimonials, projects };
