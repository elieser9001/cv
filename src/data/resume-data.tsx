import { GitHubIcon, LinkedInIcon, MediumIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Elieser R. Reyes",
  initials: "ER",
  location: "Bogotá, Colombia.",
  about: "",
  summary:
    "Soy un desarrollador de software que disfruta haciendo ingeniería inversa a todo lo que atrae mi atención para estudiar su funcionamiento y usar el desarrollo de software para expandir su funcionamiento aún más allá.",
  avatarUrl:
    "https://megalicencia.com/ereyes.jpeg",
  personalWebsiteUrl: "https://medium.com/santori2600",
  contact: {
    email: "programatica@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/elieser9001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/linuxc/",
        icon: LinkedInIcon,
      },
      {
        name: "Medium",
        url: "https://medium.com/@santori2600",
        icon: MediumIcon,
      },
    ],
  },
  education: [
    {
      school: "Instituto universitario de tecnología UNIR.",
      degree: "Técnico Superior en Informática",
    },
  ],
  work: [
    {
      company: "Etivi.com",
      link: "https://etivi.com",
      badges: ["Remoto"],
      title: "Desarollador Full Stack",
      start: "Diciembre 2022",
      end: "Actualidad",
      achievements: [
        {
          description:
            "• Configuré e hice el despliegue de la infraestructura VPS (Linux) en la plataforma de Digital Ocean.",
          repository: null,
        },
        {
          description:
            "• Desarrollé todo el núcleo de comunicación entre la extensión y la interfaz usando la API interna del Whatsapp Web.",
          repository: null,
        },
        {
          description:
            "• Mantuve un sistema de gestión y log de mensajes, mejorando la eficiencia de los recursos del VPS.",
          repository: null,
        },
        {
          description:
            "• Implementé una API RESTful JWT escalable y segura utilizando Node.js, Express.js y MongoDB.",
          repository: null,
        },
        {
          description:
            "• Trabajé en la migración de la base de datos de MySQL a MongoDB para optimizar la performance de la aplicación y garantizar la integridad de los datos.",
          repository: null,
        },
        {
          description:
            "• Desarrollé un Dashboard interno en PHP usando Laravel y Vue.js para la administración y estadísticas del funcionamiento de la plataforma.",
          repository: null,
        },
      ],
      techStack: [
        "Javascript",
        "Typescript",
        "React.js",
        "MongoDB",
        "Laravel",
        "MySql",
        "NodeJs",
        "Linux",
      ],
    },
    {
      company: "Cabo Safe Ride",
      link: "https://cabosaferide.com/",
      badges: ["Remoto"],
      title: "Freelance Full Stack Developer",
      start: "Enero 2022",
      end: "Octubre 2022",
      achievements: [
        {
          description:
            "• Realicé e hice el despliegue en VPS de la plataforma de administración y control de citas para el transporte de turistas y un panel con diseño para móviles para que los conductores puedan administrar sus viajes en tiempo real. https://cabosaferide.net/",
          repository: null,
        },
        {
          description:
            "• Desarrollé con Python y Django un servidor para la administración de documentos y la creación de un bot para telegram donde los conductores pueden desde el grupo hacer uso del bot para la administración de documentos importantes de la empresa Cabo Safe Ride.",
          repository: {
            description: "Cabo Safe Ride Telegram Bot",
            link: "https://github.com/elieser9001/CaboSafeRide-Telegram-Bot",
          },
        },
        {
          description:
            "• Lleve a cabo el desarrollo de un webhook que procesa la informacion proveniente de las reservaciones que se hacen en el sition principal, para clasificarlas de manera automática.",
          repository: null,
        },
      ],
      techStack: [
        "PHP",
        "Laravel",
        "Vue.js",
        "Tailwind",
        "Python",
        "Django",
        "Linux",
      ],
    },
    {
      company: "9Deck",
      link: null,
      badges: ["Presencial"],
      title: "Freelance Full Stack Developer",
      start: "Junio de 2017",
      end: "Octubre de 2019",
      achievements: [
        {
          description:
            "• Desarrollé y mantuve una aplicación web en tiempo real utilizando Node.js y Socket.IO, mejorando la experiencia de usuario.",
          repository: null,
        },
        {
          description:
            "• Implementé un sistema de autenticación y autorización seguro y escalable.",
          repository: null,
        },
        {
          description:
            "• Trabajé en el desarrollo front-end para integrar la aplicación con la interfaz de usuario y garantizar una experiencia fluida para los usuarios usando Vue.js.",
          repository: null,
        },
        {
          description:
            "• Diseñé e implementé una arquitectura de software modular y escalable, usando un patrón de eventos, mejorando la mantenibilidad y la capacidad de expansión de la aplicación.",
          repository: null,
        },
        {
          description:
            "• Configuré e hice el despliegue de la infraestructura VPS (Linux) en la plataforma de Digital Ocean.",
          repository: null,
        },
      ],
      techStack: ["Socket.IO", "Javascript", "Electron", "NodeJs", "Linux"],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Django",
    "PHP",
    "Laravel",
    "Vue.js",
    "React/Next.js",
    "Node.js",
    "Web Scraping",
    "Linux",
  ],
  projects: [
    {
      title: "Watsi (proyecto personal)",
      techStack: ["Javascript", "TypeScript", "React.js"],
      description:
        "Una extensión para Google Chrome, que permite enviar de manera programada mensajes de Whatsapp a una lista de contactos y no contactos usando las funciones internas de Whatsapp Web.",
      link: {
        label: "Watsi",
        href: "https://chromewebstore.google.com/detail/watsi/jjmpolanogoifpcppmalpdcfkjlicoai",
      },
    },
    {
      title: "ADB Helper (proyecto personal)",
      techStack: ["Javascript", "Electron", "NodeJs", "Linux"],
      description:
        "Aplicación para Escritorio en Linux la desarrollé con el fin de poder administrar de manera remota dispositivos Android por medio de una interfaz gráfica y usando la comunicación en red local, con NodeJS y ElectronJS.",
      link: {
        label: "ADB Helper",
        href: "https://github.com/elieser9001/adb-helper",
      },
    },
    {
      title:
        "Android Raptor - Stealth Android Remote Manager (proyecto personal)",
      techStack: ["Golang", "Linux"],
      description:
        "Desarrollé en Go este software ejecutable como proceso oculto Linux Android con arquitectura arm64, para la administración remota de dispositivos Android. El teléfono móvil Android puede ser controlado remotamente desde cualquier parte del mundo. Todas las funciones son aplicadas remotamente y en tiempo real en el teléfono Android.",
      link: {
        label: "Android Raptor",
        href: "https://github.com/elieser9001/AndroidRaptor",
      },
    },
    {
      title: "Validador de Licencia para Cri1.com",
      techStack: ["Python", "GraphQL", "Linux", "Nginx"],
      description:
        "Recibe peticiones http desde las extensiones de chrome de cri1.com y hace la conexión a la API oficial de woocommerce en el server de wordpress de Cri1.com y con GraphQL para los datos de usuario de Wordpress segun el correo proporcionado desde las extensiones. Hice el despliegue en un VPS Linux y lo he configurado con un proxy inverso Nginx con certificado SSL.",
      link: {
        label: "Validador de Licencia para Cri1.com",
        href: "https://github.com/elieser9001/cri1b",
      },
    },
    {
      title: "Bot para Telegram que proporciona documentos en grupo.",
      techStack: ["Python", "Django", "Linux"],
      description:
        "Bot con interfaz web para la administracion y servicio del control de documentos en el grupo de Telegram de CaboSafeRide. Cuenta con una implementacion de interface administrativa web para gestionar la asignacion de comandos y vincularlos con los documentos para que el bot de telegram pueda servirlos en el grupo,",
      link: {
        label: "CaboSafeRide Telegram Bot",
        href: "https://github.com/elieser9001/CaboSafeRide-Telegram-Bot",
      },
    },
    {
      title: "LabStar Systems Webscraper.",
      techStack: ["Python", "Linux"],
      description:
        "Webscraping a el sistema de LabStar y despliegue de una interface web para automatizar la obtención de datos. Entre sus funciones está: Logeo automático de peticiones con usuario y contraseña, y comprobacion automática del estado de la sesión para renovarla en caso de que este expirada",
      link: {
        label: "LabStar Systems Webscraper",
        href: "https://github.com/elieser9001/LabStar-Scrapper-y-API-Gateway",
      },
    },
  ],
} as const;
