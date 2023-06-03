import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  gaming,
  vanlife,
  quizzical,
  movielist,
  threejs,
  springboot,
  vue,
  reactrouter,
  chakraui,
  python,
  firebase,
  postgres,
  framermotion,
  axios,
  stomp,
  remix,
  vim
} from "../assets"

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
]

const services = [
  {
    title: "Frontend Technologies",
    icon: web,
    techs: [
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "Axios",
        icon: axios,
      },
      {
        name: "Chakra UI",
        icon: chakraui,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "React Router 6",
        icon: reactrouter,
      },
    ],
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Backend & Database Technologies",
    icon: backend,
    techs: [
      {
        name: "Springboot",
        icon: springboot,
      },
      {
        name: "PostgreSQL",
        icon: postgres,
      },
      {
        name: "Firebase",
        icon: firebase,
      },
    ],
  },
  {
    title: "Miscellaneous",
    icon: creator,
    techs: [
      {
        name: "Figma",
        icon: figma,
      },
      {
        name: "Git",
        icon: git,
      },
      {
        name: "Python",
        icon: python,
      },
      {
        name: "Stomp JS",
        icon: stomp,
      },
      {
        name: "Framer Motion",
        icon: framermotion,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
    ],
  },
]

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "React JS",
  //   icon: reactjs,
  // },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
  {
    name: "Remix JS",
    icon: remix,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Vim",
    icon: vim
  }
]

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]

const projects = [
  {
    name: "Multiplayer Battleship",
    id: 1,
    description:
      "A digital spinoff of the classic Hasbro strategy game. Players can either join or host a game session and also view their Profile. The application showcases a clean user interface and has in-built animations and sound effects to enhance the gaming experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "chakra UI",
        color: "pink-text-gradient",
      },
      {
        name: "context API",
        color: "orange-text-gradient"
      }, 
      {
        name: "websockets",
        color: "yellow-text-gradient"
      },
      {
        name: "framer motion",
        color: "white"
      }
    ],
    image: gaming,
    source_code_link: "https://github.com/sopra-fs23-group-11/sopra-fs23-group-11-client",
    demo_link: "https://sopra-fs23-group-11-client.oa.r.appspot.com/"
  },
  {
    name: "Van Life",
    id: 2,
    description:
      "A comprehensive car rental platform that allows users to search and rent vans depending on their needs. In addition to that, users can also check their rental statistics such as how many vans have been rented and total income generated",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react router",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: vanlife,
    source_code_link: "https://github.com/kalilsub/Van-Life",
    demo_link: "https://darling-cranachan-4ba055.netlify.app"
  },
  {
    name: "Quizzical",
    id: 3,
    description:
      "An online trivia application where users can test their general knowledge on particular topics. The questions are externally fetched from the openTrivia database",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "responsive design",
        color: "pink-text-gradient",
      },
    ],
    image: quizzical,
    source_code_link: "https://github.com/kalilsub/Quizzical-App",
    demo_link: "https://clinquant-croissant-aa268c.netlify.app"
  },
  {
    name: "Movie Watchlist",
    id: 2,
    description:
      "A IMBd-like website where you can search for movies and save them in your watchlist. The data is directly fetched from the open movie database api",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "responsive design",
        color: "pink-text-gradient",
      },
    ],
    image: movielist,
    source_code_link: "https://github.com/kalilsub/Movie-WatchList",
    demo_link: "https://dashing-lolly-3b1df3.netlify.app"
  },

]

export { services, technologies, experiences, testimonials, projects }
