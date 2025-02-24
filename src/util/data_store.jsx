import Html from "../assets/html.png";
import Css from "../assets/css.jpg";
import Java_Script from "../assets/javascript.png";
import ReactJs from "../assets/reactjs.png";
import Java_Spring from "../assets/spring.png";
import Next from "../assets/NextJs.png";
import Git from "../assets/Github.png";
import Redux from "../assets/Redux.png";
import Bootstrap from "../assets/Bootstrap.png";
import Tailwind from "../assets/Tailwind Css.png";
import { FaHtml5, FaSquareJs } from "react-icons/fa6";
import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaCss3Alt, FaBootstrap, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TiHome } from "react-icons/ti";
import { IoIosPerson } from "react-icons/io";
import { PiProjectorScreenFill } from "react-icons/pi";
import { BsBookmarksFill } from "react-icons/bs";
import { MdPermPhoneMsg } from "react-icons/md";


import {
  FaFacebookSquare,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";
import { FaHandPointDown } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa6";

const icon_style = "w-16 h-16 text-red-600";

export const Skills = [
  {
    id: 1,
    name: "HTML5",
    img: Html,
    icon: <FaHtml5 className={icon_style} />,
  },
  {
    id: 2,
    name: "CSS3",
    img: Css,
    icon: <FaCss3Alt className={icon_style} />,
  },
  {
    id: 3,
    name: "JavaScript",
    img: Java_Script,
    icon: <FaSquareJs className={icon_style} />,
  },
  {
    id: 4,
    name: "React.js",
    img: ReactJs,
    icon: <RiReactjsLine className={icon_style} />,
  },
  {
    id: 5,
    name: "Bootstrap",
    img: Bootstrap,
    icon: <FaBootstrap className={icon_style} />,
  },
  {
    id: 6,
    name: "Tailwind Css",
    img: Tailwind,
    icon: <SiTailwindcss className={icon_style} />,
  },
  {
    id: 7,
    name: "Next Js",
    img: Next,
    icon: null,
  },
  {
    id: 8,
    name: "Git Hub",
    img: Git,
    icon: <FaGithub className={icon_style} />,
  },
  {
    id: 9,
    name: "Redux",
    img: Redux,
    icon: null,
  },
  {
    id: 10,
    name: "Express.js",
    img: null,
    icon: <SiExpress className={icon_style} />,
  },
  {
    id: 11,
    name: "Node.js",
    img: null,
    icon: <RiNodejsLine className={icon_style} />,
  },
  {
    id: 12,
    name: "Mongo DB",
    img: null,
    icon: <SiMongodb className={icon_style} />,
  },
];

const iconStyle =
  "w-6 h-6 cursor-pointer text-2xl hover:scale-110 duration-200 hover:shadow-xl hover:shadow-red-800";
const techIconStyle =
  "cursor-pointer text-2xl hover:scale-110 duration-150 hover:shadow-xl hover:shadow-red-800";

export const socialLinks = [
  {
    id: 1,
    icon: <FaFacebookSquare className={iconStyle} />,
    link: "https://www.facebook.com/share/1DuSP3D4Kw/",
  },
  {
    id: 2,
    icon: <FaLinkedin className={iconStyle} />,
    link: "https://www.linkedin.com/in/shaik-azeez",
  },
  {
    id: 3,
    icon: <FaYoutube className={iconStyle} />,
    link: "https://youtube.com/@shaikazeez0217?si=p7vpip2p_6Cl5CQi",
  },
  {
    id: 4,
    icon: <FaTelegram className={iconStyle} />,
    link: "https://t.me/+918247017662~",
  },
];

export const technoloyIcon = [
  {
    id: 1,
    icon: <FaHtml5 className={techIconStyle} title="Html" />,
  },
  {
    id: 2,
    icon: (
      <FaCss3Alt className={techIconStyle} title="Cascading Style Sheetcls" />
    ),
  },
  {
    id: 3,
    icon: <FaSquareJs className={techIconStyle} title="Java Script" />,
  },
  {
    id: 4,
    icon: <RiReactjsLine className={techIconStyle} title="React js" />,
  },
  {
    id: 5,
    icon: <RiNodejsLine className={techIconStyle} title="Node Js" />,
  },
  //  {
  //   id:6,
  //   icon: <SiExpress className={techIconStyle} title="Html"/>,
  //  },
];

const nav_style = "w-5 h-5"
export const navItems = [
    {
      id: 1,
      text: "Home",
      icon: <TiHome className={nav_style} />,
    },
    {
      id: 2,
      text: "About",
      icon: <IoIosPerson className={nav_style} />,
    },
    {
      id: 3,
      text: "Portfolio",
      icon: <PiProjectorScreenFill className={nav_style} />,
    },
    {
      id: 4,
      text: "Experience",
      icon: <BsBookmarksFill className={nav_style} />,
    },
    {
      id: 5,
      text: "Contact Me",
      icon: <MdPermPhoneMsg className={nav_style} />,
    },
    {
      id: 6,
      text: "Git Hub",
      git: "https://github.com/azeez0217",
      icon: <FaGithub className={nav_style} />,
    },
  ];
