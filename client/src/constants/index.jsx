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
        summary: "This is a MERN stack project completely functional from the sign in, sign up, to the creation, edit, and deletion of post. This showcase my full-stack capability. This showcase my full stack capabilities to handle both frontend and backend work.",
        links: [
            {
                type: "website",
                url: "https://itumulak-mern-stack.vercel.app/"
            },
            {
                type: "github",
                url: "https://github.com/itumulak/memories-mern-stack",
                icon: <IoLogoGithub size={28} />    
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