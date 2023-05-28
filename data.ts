import { RiComputerLine } from "react-icons/ri";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode, MdOutlineKeyboard } from "react-icons/md";
import { IProject, Service, Skill } from "./type";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>, <b>CSS</b>, <b>Javascript</b>, <b>React.js</b>   and <b>Next.js</b> ",
  },

  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about:
      "A daily problem solver particularly in <b>LeetCode</b> and <b>CodeForces</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "Stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: MdOutlineKeyboard,
    title: "Hard Worker",
    about:
      "I am a dedicated and relentless worker, always striving for excellence and going the extra mile",
  },
];
export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "React.js",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Javascript",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Next.js",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Typescript",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "GitHub",
    level: "90",
  },
  {
    Icon: BsCircleFill,
    name: "Material UI",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "60",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Nile Mart",
    description:
      "Nile Mart is a fully responsive ecommerce website that allows users to browse, search, and purchase products. It was built using React.js and Redux, and is integrated with the Fake Store API to fetch products, cart, and user data.",
    image_path: "/images/nile-mart.png",
    deployed_url: "https://myelmasry.github.io/Nile-Mart/",
    github_url: "https://github.com/MYElmasry/Nile-Mart",
    category: ["react"],
    key_techs: [
      "React.js",
      "Redux",
      "Material UI",
      "Tailwind CSS",
      "DevExtreme",
    ],
  },
  {
    id: 2,
    name: "Gym Web Application",
    description:
      "A web application built using React and TypeScript for a gym website. The website has 4 sections: Home, Benefits, Our Classes, and Contact Us.",
    image_path: "/images/gym-typescript.png",
    deployed_url: "https://myelmasry.github.io/gym-typescript/",
    github_url: "https://github.com/MYElmasry/gym-typescript",
    category: ["react", "typescript"],
    key_techs: ["React.js", "Typescript", "Framer Motion", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Memory Game",
    description:
      "Uncover two matching symbols at once to eliminate them from the game. Eliminate all cards as fast as you can to win the game.",
    image_path: "/images/memory-game.png",
    deployed_url: "https://myelmasry.github.io/Memory-Game/",
    github_url: "https://github.com/MYElmasry/Memory-Game",
    category: ["javascript"],
    key_techs: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 4,
    name: "Football Hangman",
    description:
      "Football Hangman is a simple footballer name guessing game. Players try to figure out an unknown footballer name by guessing letters. If too many letters which do not appear in the footballer name are guessed, the player is hanged (and loses).",
    image_path: "/images/football-hangman.png",
    deployed_url: "https://myelmasry.github.io/football-hangman/",
    github_url: "https://github.com/MYElmasry/football-hangman",
    category: ["javascript"],
    key_techs: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 5,
    name: "Quiz Application",
    description: "Quiz application with random questions",
    image_path: "/images/quiz-app.png",
    deployed_url: "https://myelmasry.github.io/Quiz-Application/",
    github_url: "https://github.com/MYElmasry/Quiz-Application",
    category: ["javascript"],
    key_techs: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    id: 6,
    name: "ToDo List",
    description:
      "To-do List is a list of tasks that an individual needs to complete or accomplish.",
    image_path: "/images/To-Do List.png",
    deployed_url: "https://myelmasry.github.io/To-Do-List/",
    github_url: "https://github.com/MYElmasry/To-Do-List",
    category: ["javascript"],
    key_techs: ["HTML", "CSS", "Bootstrap", "JavaScript", "Darg Events"],
  },
  {
    id: 7,
    name: "Typing Speed Test",
    description:
      "The faster you type, the faster you communicate with others. With my free typing speed test, you can practice on typing faster.",
    image_path: "/images/typing-speed-test.png",
    deployed_url: "https://myelmasry.github.io/Typing-Speed-Test/",
    github_url: "https://github.com/MYElmasry/Typing-Speed-Test",
    category: ["javascript"],
    key_techs: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];
