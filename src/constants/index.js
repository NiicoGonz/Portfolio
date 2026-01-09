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
    color: "#E34F26", // Naranja HTML5
    description: "Lenguaje de marcado estándar para crear páginas web. Define la estructura y el contenido de las páginas web mediante elementos y etiquetas semánticas.",
    implementation: "Lo uso para estructurar todas mis aplicaciones web, utilizando elementos semánticos como <header>, <nav>, <main>, <section> para mejorar la accesibilidad y SEO. También implemento APIs modernas como Canvas, Web Storage y Geolocation."
  },
  {
    name: "CSS 3",
    icon: css,
    color: "#1572B6", // Azul CSS3
    description: "Lenguaje de hojas de estilo usado para describir la presentación de documentos HTML. Permite crear diseños responsivos y animaciones complejas.",
    implementation: "Utilizo CSS3 avanzado con Flexbox, Grid Layout, animaciones y transiciones. Combino CSS modules con preprocesadores como SASS para crear sistemas de diseño escalables y maintainables. También aplico metodologías BEM para organizar el código."
  },
  {
    name: "Javascritp",
    icon: js,
    color: "#F7DF1E", // Amarillo JavaScript
    description: "Lenguaje de programación interpretado, orientado a objetos y basado en eventos. Es el lenguaje principal para desarrollo web interactivo del lado del cliente.",
    implementation: "Lo utilizo para crear lógica de aplicaciones complejas, manipulación del DOM, manejo de eventos asíncronos con Promises y async/await, y consumo de APIs REST. Implemento patrones de diseño modernos y ES6+ features."
  },
  {
    name: "Angular",
    icon: Angular,
    color: "#DD0031", // Rojo Angular
    description: "Framework de desarrollo web de Google basado en TypeScript. Proporciona una arquitectura completa para aplicaciones empresariales de gran escala.",
    implementation: "He desarrollado aplicaciones empresariales complejas usando Angular, implementando arquitectura modular, servicios con RxJS, state management con NgRx, y componentes reutilizables. Lo uso especialmente en proyectos B2B que requieren robustez y escalabilidad."
  },
  {
    name: "React",
    icon: React,
    color: "#61DAFB", // Cyan React
    description: "Biblioteca de JavaScript para construir interfaces de usuario mediante componentes reutilizables. Desarrollada y mantenida por Meta (Facebook).",
    implementation: "Mi framework favorito para desarrollo frontend. Implemento hooks personalizados, Context API, React Router, y estado global con Redux o Zustand. Creo componentes optimizados con memo y useMemo, e integro con librerías como Framer Motion para animaciones."
  },
  {
    name: "Nodejs",
    icon: Node,
    color: "#339933", // Verde Node.js
    description: "Entorno de ejecución de JavaScript del lado del servidor construido sobre el motor V8 de Chrome. Permite crear aplicaciones de red escalables.",
    implementation: "Lo uso para construir APIs RESTful y GraphQL, servidores web con Express, y microservicios. Implemento autenticación JWT, middleware personalizados, websockets para comunicación en tiempo real, y gestión de eventos asíncronos con Event Emitters."
  },
  {
    name: "Nest",
    icon: Nest,
    color: "#E0234E", // Rojo NestJS
    description: "Framework progresivo de Node.js para construir aplicaciones del lado del servidor eficientes y escalables, inspirado en Angular y construido con TypeScript.",
    implementation: "Mi framework preferido para backend. Implemento arquitectura modular con dependency injection, guards para autenticación y autorización, pipes para validación de datos, interceptors para transformación de respuestas, y decoradores personalizados. Ideal para microservicios."
  },
  {
    name: "Docker",
    icon: Docker,
    color: "#2496ED", // Azul Docker
    description: "Plataforma de contenedorización que permite empaquetar aplicaciones con todas sus dependencias en contenedores portátiles y aislados.",
    implementation: "Uso Docker para crear ambientes de desarrollo consistentes, dockerizar aplicaciones completas con docker-compose, crear imágenes optimizadas multi-stage, y desplegar microservicios. Implemento CI/CD con Docker en pipelines de GitHub Actions y GitLab."
  },
  {
    name: "Git",
    icon: Git,
    color: "#F05032", // Naranja Git
    description: "Sistema de control de versiones distribuido para rastrear cambios en el código fuente durante el desarrollo de software.",
    implementation: "Uso Git diariamente para control de versiones, siguiendo Git Flow para ramas (feature, develop, main), creando commits atómicos y descriptivos, realizando code reviews con pull requests, y resolviendo conflictos de merge. Trabajo con GitHub y GitLab."
  },
  {
    name: "Mongo",
    icon: Mongo,
    color: "#47A248", // Verde MongoDB
    description: "Base de datos NoSQL orientada a documentos que almacena datos en formato JSON. Flexible y escalable, ideal para aplicaciones modernas.",
    implementation: "Implemento MongoDB en proyectos que requieren flexibilidad de esquema. Uso Mongoose para modelado de datos, creación de schemas con validaciones, índices para optimización de queries, agregaciones complejas, y transacciones para operaciones atómicas."
  },
  {
    name: "Postgres",
    icon: Postgres,
    color: "#4169E1", // Azul PostgreSQL
    description: "Sistema de gestión de bases de datos relacional y objeto-relacional de código abierto. Conocido por su robustez, extensibilidad y cumplimiento de estándares SQL.",
    implementation: "Mi base de datos relacional preferida. Diseño esquemas normalizados, implemento relaciones complejas con foreign keys, creo índices compuestos para optimización, uso triggers y stored procedures, y manejo transacciones ACID. Trabajo con TypeORM y Prisma."
  },
  {
    name: "Python",
    icon: Python,
    color: "#3776AB", // Azul Python
    description: "Lenguaje de programación de alto nivel, interpretado y de propósito general. Conocido por su sintaxis clara y legible.",
    implementation: "Lo utilizo para scripting, automatización de tareas, análisis de datos con Pandas y NumPy, creación de APIs con FastAPI y Flask, y desarrollo de scripts ETL para procesamiento de datos. También implemento web scraping con BeautifulSoup y Selenium."
  },
  {
    name: "Typescript",
    icon: Ts,
    color: "#3178C6", // Azul TypeScript
    description: "Superset de JavaScript que añade tipado estático opcional. Desarrollado por Microsoft, compila a JavaScript puro y mejora la calidad del código.",
    implementation: "Mi lenguaje principal para desarrollo. Implemento tipos estrictos, interfaces, generics, utility types, y decoradores. Uso TypeScript en todos mis proyectos de React, Node.js y NestJS para detectar errores en tiempo de compilación y mejorar la experiencia de desarrollo."
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
