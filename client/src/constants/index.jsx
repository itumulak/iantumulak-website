import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoNodejs } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoWordpress } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { SiMysql } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiComposer } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { SiDart } from "react-icons/si";
import { IoLogoSass } from "react-icons/io5";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { RiNpmjsFill } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { IoLogoDocker } from "react-icons/io5";

import upworkImg from "../assets/upwork.jpg";
import firekampImg from "../assets/firekamp.jpg";
import thecodecoImg from "../assets/thecodeco.jpg";
import trybpoImg from "../assets/trybpo.jpg";

export const socials = [
    { 
        name: "LinkedIn", 
        url: "https://www.linkedin.com/in/itumulak",
        icon: <IoLogoLinkedin size={20} />
    },
    { 
        name: "Github", 
        url: "https://github.com/itumulak",
        icon: <IoLogoGithub size={20} />
    }
]

export const menuItems = [
    {
        name: "Home",
        url: "#"
    },
    {
        name: "About",
        url: "/#about"
    },
    {
        name: "Projects",
        url: "/#projects"
    },
    {
        name: "Contact",
        url: "/#contact"
    },
    {
        name: "Resume",
        url: "#"
    }
]

export const languageStack = [
    {
        name: "JavaScript",
        icon: <IoLogoJavascript size={20} />
    },
    {
        name: "PHP",
        icon: <SiPhp size={20} />
    },
    {
        name: "HTML",
        icon: <IoLogoHtml5 size={20} />
    },
    {
        name: "CSS",   
        icon: <IoLogoCss3 size={20} />     
    },
    {
        name: "Dart",
        icon: <SiDart size={20} />
    }
]

export const libraryStack = [
    {
        name: "React",
        icon: <IoLogoReact size={20} />
    },
    {
        name: "Flutter",
        icon: <SiFlutter size={20} />
    },
    {
        name: "Node.js",
        icon: <IoLogoNodejs size={20} />
    },
    {
        name: "Express.js",
        icon: <SiExpress size={20} />
    },
    {
        name: "Tailwind CSS",
        icon: <BiLogoTailwindCss size={20} />
    },
    {
        name: "Framer Motion",
        icon: <TbBrandFramerMotion size={20} />
    },
    {
        name: "Redux",
        icon: <TbBrandRedux size={20} />
    },
    {
        name: "Axios",
        icon: <SiAxios size={20} />
    },
    {
        name: "Sass",   
        icon: <IoLogoSass size={20} />
    }
]

export const databaseStack = [
    {
        name: "MySQL",
        icon: <SiMysql size={20} />
    },
    {
        name: "MongoDB",
        icon: <BiLogoMongodb size={20} />
    },
    {
        name: "Firebase",
        icon: <IoLogoFirebase size={20} />
    },
]

export const cmsStack = [
    {
        name: "Wordpress",
        icon: <IoLogoWordpress size={20} />
    },
    {
        name: "Sanity",
        icon: <SiSanity size={20} />
    }
]

export const toolStack = [
    {
        name: "VS Code",
        icon: <VscVscode size={20} />
    },
    {
        name: "Docker",
        icon: <IoLogoDocker size={20} />
    },
    {
        name: "Git",
        icon: <FaGitAlt size={20} />
    },
    {
        name: "NPM",
        icon: <RiNpmjsFill size={20} />
    },
    {
        name: "Composer",
        icon: <SiComposer size={20} />
    }
]

export const projects = [
    {
        name: "Twitter-like app",
        summary: "This is a MERN stack project completely functional from the sign in, sign up, to the creation, edit, and deletion of post. This showcase my full stack development capabilities.",
        links: [
            {
                type: "website",
                url: "https://itumulak-mern-stack.vercel.app/"
            },
            {
                type: "github",
                url: "https://github.com/itumulak/memories-mern-stack"   
            }
        ],
        stacks: [
            {
                name: "MongoDB",
                icon: <BiLogoMongodb size={20} />
            },
            {
                name: "Express.js",
                icon: <SiExpress size={20} />
            },
            {
                name: "React",
                icon: <IoLogoReact size={20} />
            },
            {
                name: "Node.js",
                icon: <IoLogoNodejs size={20} />
            },
            {
                name: "Axios",
                icon: <SiAxios size={20} />
            },
            {
                name: "Redux",
                icon: <TbBrandRedux size={20} />
            },
            {
                name: "Tailwind CSS",
                icon: <BiLogoTailwindCss size={20} />
            }
        ]
    },
    {
        name: "Single Sign-on with Firebase",
        summary: "This is a WordPress plugin that lets you sign in or sign up with Social media such as Google and Facebook. Firebase acts as the middleware for authentication.",
        links: [
            {
                type: "github",
                url: "https://github.com/itumulak/firebase-sso"
            }
        ],
        stacks: [
            {
                name: "WordPress",
                icon: <IoLogoWordpress size={20} />
            },
            {
                name: "Firebase",
                icon: <IoLogoFirebase size={20} />
            },
            {
                name: "MySQL",
                icon: <SiMysql size={20} />
            },
            {
                name: "PHP",
                icon: <SiPhp size={20} />
            }, 
            {
                name: "HTML",
                icon: <IoLogoHtml5 size={20} />
            },           
            {
                name: "CSS",
                icon: <IoLogoCss3 size={20} />
            },
            {
                name: "Sass",
                icon: <IoLogoSass size={20} />
            },
            {
                name: "React",   
                icon: <IoLogoReact size={20} />
            }
        ]
    },
    {
        name: "Sanity Flutter Demo",
        summary: "This is a demo that utilized Sanity's sample movie dataset and then built the mobile app with Dart/Flutter.",
        links: [
            {
                type: "github",
                url: "https://github.com/itumulak/sanity-flutter-demo",
            },
        ],
        stacks: [
            {
                name: "Flutter",
                icon: <SiFlutter size={20} />
            },
            {
                name: "Dart",
                icon: <SiDart size={20} />
            },
            {
                name: "Sanity",
                icon: <SiSanity size={20} />
            }
        ]
    },
    {
        name: "WordPress Instance with Docker",
        summary: "This is a template starter for WordPress projects with Docker compose. Let's you spin up WordPress, MySQL, and PHPMyAdmin. Traefik serves as a middleware for url proxy.",
        links: [
            {
                type: "github",
                url: "https://github.com/itumulak/wordpress-traefik-docker-swarm",
            }
        ],
        stacks: [
            {
                name: "WordPress",
                icon: <IoLogoWordpress size={20} />
            },
            {
                name: "Docker",
                icon: <IoLogoDocker size={20} />
            }
        ]
    },    
]

export const experience  = [
    {
        company: "Upwork",
        position: "WordPress Contractor",
        started: "Apr 2010",
        ended: "Jul 2024",
        description: "As an Upwork contractor, over the years I have taken odds jobs and long-term projects throughout the duration of my career as a contractor in the platform. The work spans from quick fixes, small-scale work, to the large-scale enterprise projects. In Upwork, I marketed myself as a WordPress specialist who handles both no-code development and web development.",
        logo: upworkImg
    },
    {
        company: "FireKamp",
        position: "Web Engineer",
        started: "Oct 2020",
        ended: "Dec 2023",
        description: "I am engaged in diverse projects spanning WordPress, Shopify, Kajabi, and React applications. My primary responsibility is frontend development, with occasional involvement in no-code development.",
        logo: firekampImg
    },
    {
        company: "The Code Co.",
        position: "Frontend Developer",
        started: "Feb 2021",
        ended: "Oct 2021",
        description: "I worked as a front developer, converting Figma/XD designs into WordPress themes. My responsibility involves working with Gutenberg blocks, ACF Blocks, mobile responsiveness, speed optimization, and data migration from Drupal to WordPress.",
        logo: thecodecoImg
    },
    {
        company: "IDX Web Designs",
        position: "Junior Web Developer",
        started: "Sep 2012",
        ended: "Aug 2011",
        description: "I work as a junior web developer for the company. As a junior level, my obligation was to familiarize myself with Soholaunch, Joomla, and WordPress. I was also tasked with web design. After leaving the company, I opted to specialize as a WordPress developer. NOTE: This company is no longer operating.",
        logo: ""
    },
    {
        company: "Try BPO Outsourcing Solutions",
        position: "SEO Specialist, Part-time web developer",
        started: "Jun 2009",
        ended: "Aug 2010",
        description: "I work as their virtual assistant SEO specialist from their parent company, eLocal.com. During my tenure as an employee, I was given a web development project. This outcome resulted in pivoting my career as a web developer. NOTE: This company pivots into empireflippers.com.",
        logo: trybpoImg
    }
]