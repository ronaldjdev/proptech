import roadmap from "@/assets/gifs/roadmap.gif"
import value from "@/assets/gifs/value.gif"
import way from "@/assets/gifs/way.gif"
import skyline from "@/assets/gifs/skyline.gif"
import moneyBag from "@/assets/gifs/money-bag.gif"
import growing from "@/assets/gifs/growing.gif"
import society from "@/assets/gifs/society.gif"

export let profesionales = [
  {
    nivel: "Maestría",
    specialty: "Urbanismo y paisaje sonoro",
    profesion: "Arquitecto",
    name: "Juan Camacho",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    score: "★★★★★",
    create: "2022-01-01"
  }
,
  {
    nivel: "Doctorado",
    specialty: "Bioquímica",
    profesion: "Investigador",
    name: "María González",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Soy un investigador apasionado por la bioquímica y la genética. He dedicado años de mi vida al estudio de la estructura y función de las proteínas.",
    score: "★★★★☆",
    create: "2023-05-15"
  }
,
  {
    nivel: "Licenciatura",
    specialty: "Diseño Gráfico",
    profesion: "Diseñador Gráfico",
    name: "Laura Pérez",
    image: "https://images.pexels.com/photos/1630890/pexels-photo-1630890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Me especializo en diseño de identidad visual y branding. Disfruto creando logotipos, tarjetas de visita y otros elementos gráficos para empresas y proyectos.",
    score: "★★★★★",
    create: "2022-09-20"
  }

];
export const itemsNav = [
  {
    name: "Proyectos",
    path: "#projects"
  },
  {
    name: "Acerca",
    path: "#how_work"
  },
  {
    name: "Equipo",
    path: "#team"
  },
  {
    name: "Testimonios",
    path: "#testimonials"
  },
  {
    name: "Contacto",
    path: "#contact"
  }
];
// export const itemsNav = [
//   {
//     name: "Proyectos",
//     path: "/projects"
//   },
//   {
//     name: "Comprar",
//     path: "/purchase"
//   },
//   {
//     name: "Acerca",
//     path: "/about"
//   },
//   {
//     name: "Prosmeter",
//     path: "/prosmeter"
//   },
//   {
//     name: "Invertir",
//     path: "/invest"
//   }
// ];
export const itemsHowWork = [
  {
    icon: way,
    title: "Registra tu Terreno",
    subtitle: "¡Haz que tu terreno cuente! Regístralo en nuestra plataforma y comienza a explorar las oportunidades."
  },
  {
    icon: skyline,
    title: "Explotar Potencial",
    subtitle: "Descubrimos proyectos inmobiliarios emocionantes que se ajusten a las características de tu terreno."
  },
  {
    icon: growing,
    title: "Invierte con Nosotros",
    subtitle: "Participa en proyectos inmobiliarios sin la necesidad de involucrarte en el proceso de diseño y desarrollo."
  },
  {
    icon: moneyBag,
    title: "Ganancias Garantizadas",
    subtitle: "Obtén una parte justa de las ganancias una vez que el proyecto esté en marcha, sin preocuparte por los detalles técnicos."
  },
  {
    icon: roadmap,
    title: "Sigue el Progreso",
    subtitle: "Mantente al tanto del progreso del proyecto y recibe actualizaciones regulares sobre tus inversiones"
  },
  {
    icon: society,
    title: "Únete a Nuestra Comunidad",
    subtitle: "Participa en nuestra comunidad de inversores y comparte ideas con otros miembros."
  }
]

export const linksData = [
  {
    title: "Colaborar",
    links: [
      { label: "¿Cómo colaborar?", url: "/how-to-collaborate" },
      { label: "Colabora con nosotros", url: "/collaborate-with-us" },
      { label: "Prosmeter", url: "/prosmeter" }
    ]
  },
  {
    title: "Proyectos",
    links: [
      { label: "¿Cómo comprar?", url: "/how-to-buy" },
      { label: "Conocer Proyectos", url: "/know-projects" }
    ]
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", url: "/blog" },
      { label: "Inversionistas", url: "/investors" },
      { label: "Agentes Inmoviliarios", url: "/real-estate-agents" },
      { label: "Ingreso o registro", url: "/sign-in-sign-up" }
    ]
  },
  {
    title: "Sobre Nosotros",
    links: [
      { label: "La empresa", url: "/the-company" },
      { label: "Centro de ayuda", url: "/help-center" },
      { label: "Nuestro equipo", url: "/our-team" },
      { label: "Trabaja con nosotros", url: "/work-with-us" }
    ]
  },
  {
    title: "Soporte",
    links: [
      { label: "Dudas o comentarios", url: "/questions-comments" },
      { label: "Correo", url: "/email" },
      { label: "Whatsapp", url: "/whatsapp" }
    ]
  }
];
