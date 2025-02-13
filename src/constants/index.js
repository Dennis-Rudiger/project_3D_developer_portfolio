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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Software engineer",
    company_name: "Podii",
    icon: podii,
    iconBg: "#383E56",
    date: "May 2021 - Sept 2021",
    points: [
      "Developing and maintaining web applications using Laravel, REST APIs, and front-end technologies like React.js.",
      "Collaborating with cross-functional teams to integrate backend and front-end components.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and learning best practices from senior developers.",
    ],
  },
  {
    title: "Intern Electrical Engineer",
    company_name: "R & R Plastics LTD",
    icon: randr,
    iconBg: "#E6DEDD",
    date: "May 2022 - Sept 2022",
    points: [
      "Building web applications using Laravel for backend services and React.js for the front-end.",
      "Developing RESTful APIs to support dynamic data interactions.",
      "Working closely with designers and product managers to refine user experiences.",
      "Enhancing skills through mentorship and collaborative problem-solving.",
    ],
  },
  {
    title: "Intern Engineer",
    company_name: "KenGen",
    icon: kengen,
    iconBg: "#383E56",
    date: "May 2023 - Sept 2023",
    points: [
      "Contributing to full-stack development projects with a focus on Laravel and REST API integration.",
      "Utilizing React.js to build interactive and user-friendly front-end interfaces.",
      "Collaborating with agile teams to optimize performance and delivery.",
      "Continuously learning and applying best practices in fullstack development.",
    ],
  },
  {
    title: "Junior Fullstack Engineer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developing scalable web applications by combining Laravel backends with modern front-end frameworks.",
      "Implementing and consuming RESTful APIs to manage complex data flows.",
      "Working in cross-functional teams to deliver seamless end-to-end solutions.",
      "Participating in mentorship programs to further enhance fullstack development skills.",
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
    name: '',
    icon: github,
    link: 'https://github.com',
  },
  {
    name: '',
    icon: linkedin,
    link: 'https://linkedin.com',
  },
  {
    name: '',
    icon: twitter,
    link: 'https://twitter.com',
  },
];

export { services, technologies, experiences, testimonials, projects };
