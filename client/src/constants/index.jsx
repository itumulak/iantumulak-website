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
import { SiNextdotjs } from "react-icons/si";
import { FaCcStripe } from "react-icons/fa";
import { SiTraefikproxy } from "react-icons/si";

import upworkImg from "../assets/upwork.jpg";
import firekampImg from "../assets/firekamp.jpg";
import thecodecoImg from "../assets/thecodeco.jpg";
import trybpoImg from "../assets/trybpo.jpg";
import pdfFile from "../assets/resume.pdf";
import mernstackImg from "../assets/mern-stack.jpg";
import firebaseAuthImg from "../assets/firebase-auth.png";
import dockerImg from "../assets/docker.png";
import ecommerceImg from '../assets/ecommerce.png';

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
        id: "home",
        name: "Home",
        url: "/#home"
    },
    {
        id: "about",
        name: "About",
        url: "/#about"
    },
    {
        id: "projects",
        name: "Projects",
        url: "/#projects"
    },
    {
        id: "experience",
        name: "Experience",
        url: "/#experience"
    },
    {
        id: "contact",
        name: "Contact",
        url: "/#contact"
    },
    {
        id: "resume",
        name: "Resume",
        url: pdfFile
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
    },
    {
        name: "Stripe",
        icon: <FaCcStripe size={20} />
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
    },
    {
        name: "Traefik Proxy",
        icon: <SiTraefikproxy size={20} />
    }
]

export const projects = [
    {
        name: "E-commerce app",
        summary: "A Next.js e-commerce app that utilize multiple microservices. Sanity for storing product info, Firebase for sign-in/sign-up, Stripe for payments, and MongoDB for storing orders. This app combines multiple services to provide a coherent e-commerce experience.",
        links:[
            {
                type: "github",
                url: "https://github.com/itumulak/ecommerce-project"   
            }
        ],
        stacks: [
            {
                name: "Next.js",
                icon: <SiNextdotjs  size={20} />
            },
            {
                name: "React",
                icon: <IoLogoReact size={20} />
            },
            {
                name: "Redux",
                icon: <TbBrandRedux size={20} />
            },
            {
                name: "Firebase",
                icon: <IoLogoFirebase size={20} />
            },            
            {
                name: "MongoDB",
                icon: <BiLogoMongodb size={20} />
            },
            {
                name: "Sanity",
                icon: <SiSanity size={20} />
            },
            {
                name: "Stripe",
                icon: <FaCcStripe size={20} />
            }
        ],
        src: ecommerceImg
    },
    {
        name: "Twitter-like app",
        summary: "This is a MERN stack project completely functional from the sign in, sign up, to the creation, edit, and deletion of post. This showcase my full stack development capabilities.",
        links: [
            {
                type: "video",
                url: "https://youtu.be/stAdJjquk2Q?si=fGz8Y4XoZsI3Z_kh"
            },
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
            },
        ],
        src: mernstackImg
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
        ],
        src: firebaseAuthImg
    },
    // {
    //     name: "Sanity Flutter Demo",
    //     summary: "This is a demo that utilized Sanity's sample movie dataset and then built the mobile app with Dart/Flutter.",
    //     links: [
    //         {
    //             type: "github",
    //             url: "https://github.com/itumulak/sanity-flutter-demo",
    //         },
    //     ],
    //     stacks: [
    //         {
    //             name: "Flutter",
    //             icon: <SiFlutter size={20} />
    //         },
    //         {
    //             name: "Dart",
    //             icon: <SiDart size={20} />
    //         },
    //         {
    //             name: "Sanity",
    //             icon: <SiSanity size={20} />
    //         }
    //     ]
    // },
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
            },
            {
                name: "Traefik",
                icon: <SiTraefikproxy size={20} />
            }
        ],
        src: dockerImg
    },    
]

export const experience  = [
    {
        company: "Upwork",
        url: "https://www.upwork.com/freelancers/~015f9c0c1d82983486",
        position: "WordPress Contractor",
        started: "Apr 2010",
        ended: "Jul 2024",
        description: "I have taken odds jobs and long-term WordPress projects throughout the duration of my stay in the platform. The work spans from quick fixes, small-scale work, to the large-scale enterprise projects. I have built my whole career in UpWork. Sadly, I have to walk away from this platform since it is now overrun with bot applicants, fake job posts, and predatorial fees.",
        logo: upworkImg,
        work: [
            {
                name: "99banners",
                url: "https://99banners.com/"
            },
            {
                name: "Talk to walle",
                url: "https://talktowalle.com/"
            },
            {
                name: "Volt Edge",
                url: "https://www.voltedge.com.au/"
            },
            {
                name: "Wake-up World",
                url: "https://wakeupworld.com/"
            },
            {
                name: "in8sync",
                url: "https://in8sync.com/"
            },            
            {
                name: "HSC Coworks",
                url: "https://hsccoworks.com.au/"
            },
            {
                name: "Arrow Root Media",
                url: "https://arrowrootmedia.com/"
            },
            {
                name: "Distressed Pro",
                url: "https://www.distressedpro.com/"
            },
            {
                name: "The web craftsmen",
                url: "https://thewebcraftsmen.com/"
            },
            {
                name: "ND5 Media LLC",
                url: "https://www.linkedin.com/company/nd5-media-llc/"
            },
            {
                name: "Mosier Data",
                url: "https://mosierdata.com/"
            }
        ],
    },
    {
        company: "FireKamp",
        url: "https://www.firekamp.com/",
        position: "Web Engineer",
        started: "Oct 2022",
        ended: "Dec 2023",
        description: "I am engaged in diverse projects spanning WordPress, Shopify, Kajabi, and React applications. My primary responsibility is frontend development, with occasional involvement in the backend.",
        logo: firekampImg,
        work: [
            {
                name: "Network Chuck",
                url: "https://networkchuck.com/"
            },
            {
                name: "Network Chuck Academy",
                url: "https://academy.networkchuck.com/"
            },
            {
                name: "Weco Hosipitality",
                url: "https://wecohospitality.com/"
            }
        ]
    },
    {
        company: "The Code Co.",
        url: "https://thecode.co/",
        position: "Frontend Developer",
        started: "Feb 2021",
        ended: "Oct 2021",
        description: "I worked as a front developer, converting Figma/XD designs into WordPress themes. My responsibility involves working with Gutenberg blocks, ACF Blocks, mobile responsiveness, speed optimization, and data migration from Drupal to WordPress.",
        logo: thecodecoImg,
        work: [
            {
                name: "Her Campus",
                url: "https://hercampus.com/"
            },
            {
                name: "Games Hub",
                url: "https://gameshub.com/"
            },
            {
                name: "One Mile at a time",
                url: "https://onemileatatime.com/"
            }
        ]
    },
    {
        company: "IDX Web Designs",
        url: "",
        position: "Junior Web Developer",
        started: "Sep 2012",
        ended: "Aug 2011",
        description: "I work as a junior web developer for the company. As a junior level, my obligation was to familiarize myself with Soholaunch, Joomla, and WordPress. I was also given small roles in web design. After leaving the company, I opted to specialize as a WordPress developer and pursued my career in freelancing. NOTE: This company is no longer operating.",
        logo: "",
        work: [
            {
                name: "Carolina web consultants",
                url: "https://internetpeople.net/"
            }
        ]
    },
    {
        company: "Try BPO Outsourcing Solutions",
        url: "",
        position: "SEO Specialist, Part-time web developer",
        started: "Jun 2009",
        ended: "Aug 2010",
        description: "I work as their virtual assistant SEO specialist from their parent company, eLocal.com. During my tenure as an employee, I was given a web development project. This oppurtunity resulted in shifting my career as a web developer. NOTE: This company pivots into empireflippers.com.",
        logo: trybpoImg
    }
]