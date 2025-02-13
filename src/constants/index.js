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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  podii,
  kengen,
  randr,
  upwork,
} from "../assets";

import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";

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
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Podii",
    icon: podii,
    iconBg: "#383E56",
    date: "May 2021 - Sept 2021",
    points: [
      "Developed and maintained various software applications using modern web technologies.",
      "Collaborated with cross-functional teams to design, test, and deliver quality features.",
      "Utilized best coding practices to ensure clean, maintainable, and efficient code.",
      "Participated in code reviews, contributing ideas for continuous codebase improvement.",
    ],
  },
  {
    title: "Intern Electrical Engineer",
    company_name: "R & R Plastics LTD",
    icon: randr,
    iconBg: "#E6DEDD",
    date: "May 2022 - Sept 2022",
    points: [
      "Assisted in the maintenance and troubleshooting of electrical systems in a production environment.",
      "Collaborated with senior engineers to test and optimize electrical equipment performance.",
      "Documented findings and recommended improvements for equipment reliability.",
      "Gained hands-on experience in electrical safety and regulatory standards.",
    ],
  },
  {
    title: "Intern Engineer",
    company_name: "KenGen",
    icon: kengen,
    iconBg: "#383E56",
    date: "May 2023 - Sept 2023",
    points: [
      "Supported engineering teams with system inspections, data collection, and analysis.",
      "Helped identify and resolve mechanical and electrical issues to maintain efficient operations.",
      "Shadowed senior engineers to gain exposure to power generation and safety protocols.",
      "Contributed to improving processes through continuous learning and problem-solving.",
    ],
  },
  {
    title: "Junior Fullstack Engineer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Built and maintained full-stack web applications using Laravel and React.js.",
      "Implemented RESTful APIs and ensured smooth integration with front-end features.",
      "Collaborated with cross-functional teams to develop and deploy scalable solutions.",
      "Refined coding practices through mentorship, code reviews, and continuous feedback.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Dennis proved me wrong.",
    name: "Sara Wanja",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Dennis does.",
    name: "Kevin Kamotho",

    image: "https://randomuser.me/api/portraits/men/59.jpg",
  },
  {
    testimonial:
      "After Dennis optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Clarissa Wendo",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export const socialLinks = [
  {
    name: 'github',
    icon: github,
    link: 'https://github.com',
  },
  {
    name: 'linkedin',
    icon: linkedin,
    link: 'https://linkedin.com',
  },
  {
    name: 'twitter',
    icon: twitter,
    link: 'https://twitter.com',
  },
];

export { services, technologies, experiences, testimonials, projects };
