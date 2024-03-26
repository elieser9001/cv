import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
  MediumIcon,
} from "@/components/icons";

export const RESUME_DATA = {
  name: "Elieser Reyes",
  initials: "ER",
  location: "Bogotá, Colombia.",
  about:
    "Desarrollador Full Stack interesado en construir aplicaciones innovadoras y de alta calidad.",
  summary:
    "Me especializo en la creación de sistemas y aplicaciones, abordando los desafíos técnicos de una forma creativa e innovadora.",
  avatarUrl:
    "https://media.licdn.com/dms/image/D4E03AQGAX8OaNUi30g/profile-displayphoto-shrink_800_800/0/1686766117499?e=1717027200&v=beta&t=ir5mH2bdoQYe6pPHKGqlafgcB9EPzQrLkKL1Nooe7dM",
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
            "• Llevé a cabo todo el Core en formato de Extensión de Chrome para el proyecto de comunicación entre la extensión y la interfaz usando la API interna del Whatsapp Web.",
          repository: null,
        },
        {
          description:
            "• Desarrollé y mantuve un sistema de gestión y log de mensajes, mejorando la eficiencia de los recursos del VPS.",
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
            "• Desarrollé con Python y Django un servidor para la  dministración de documentos y la creación de bot para telegram donde los conductores pueden desde el grupo hacer uso del bot para la administración de documentos importantes de la empresa Cabo Safe Ride.",
          repository:
            "https://github.com/elieser9001/CaboSafeRide-Telegram-Bot",
        },
      ],
    },
    {
      company: "9Deck",
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
      title: "Watsi",
      techStack: ["Side Project", "TypeScript", "React.js"],
      description:
        "Una extensión Google Chrome, para enviar de manera programada mensajes de Whatsapp a una lista de contactos y no contactos usando Whatsapp Web.",
      link: {
        label: "Watsi",
        href: "https://github.com/elieser9001/Watsi",
      },
    },
    {
      title: "ADB Helper",
      techStack: ["Side Project", "Javascript", "Electron"],
      description:
        "Aplicación para Escritorio en Linux la desarrollé con el fin de poder administrar de manera remota dispositivos Android por medio de una interfaz gráfica y usando la comunicación en red local, con NodeJS y ElectronJS.",
      link: {
        label: "ADB Helper",
        href: "https://github.com/elieser9001/adb-helper",
      },
    },
    {
      title: "Android Raptor (Stealth Android Remote Manager)",
      techStack: ["Side Project", "Golang"],
      description:
        "Desarrollé en Go este software ejecutable como proceso oculto Linux arm64 para la administración remota de dispositivos Android. El teléfono móvil Android puede ser controlado remotamente desde cualquier parte del mundo. Todas las funciones son aplicadas remotamente y en tiempo real en el teléfono Android.",
      link: {
        label: "Android Raptor",
        href: "https://github.com/elieser9001/AndroidRaptor",
      },
    },
    {
      title: "Validador de Licencia para Cri1.com",
      techStack: ["Python"],
      description:
        "Recibe peticiones http desde las extensiones de chrome de cri1.com y hace la conexión a la API oficial de woocommerce en el server de wordpress de Cri1.com y con GraphQL para los datos de usuario de Wordpress segun el correo proporcionado desde las extensiones. Hice el despliegue en un VPS Linux y lo he configurado con un proxy inverso Nginx con certificado SSL.",
      link: {
        label: "Validador de Licencia para Cri1.com",
        href: "https://github.com/elieser9001/cri1b",
      },
    },
    {
      title: "Bot para Telegram que proporciona documentos en grupo.",
      techStack: ["Python", "Django"],
      description:
        "Bot con interfaz web para la administracion y servicio del control de documentos en el grupo de Telegram de CaboSafeRide. Cuenta con una implementacion de interface administrativa web para gestionar la asignacion de comandos y vincularlos con los documentos para que el bot de telegram pueda servirlos en el grupo,",
      link: {
        label: "CaboSafeRide Telegram Bot",
        href: "https://github.com/elieser9001/CaboSafeRide-Telegram-Bot",
      },
    },
  ],
} as const;
