import { IoLogoGithub } from "react-icons/io5";
import { IoGlobe } from "react-icons/io5";
import { IoIosPlayCircle } from "react-icons/io";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import Headline from "./Headline"
import imgPlaceholder from "../assets/project-placeholder.jpg"
import Reveal from "./Reveal";

const Img = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% 20%;
    transition: all .25s;
    border-radius: .4rem;
    width: 85%;
`

export default ({src, name, summary, links = [], stacks = []}) => {
    return (
        <div className="flex flex-col flex-nowrap gap-4">
            <motion.div 
                className="w-full aspect-video bg-light-dark cursor-pointer relative rounded-lg overflow-hidden"
                initial="hidePlayer"
                whileHover="showPlayer"
            >
                <Img 
                    src={src ? src : imgPlaceholder} 
                    alt="project"
                />
                <motion.div 
                    className="absolute top-[60%] left-1/2 translate-x-[-50%] translate-y-[-50%] cursor-pointer"
                    variants={{
                        hidePlayer: {opacity: 0, y: 100, x: -40},
                        showPlayer: {opacity: 1, y: -40, transition: {duration: 0.2, ease: "easeInOut"}},
                    }}
                >
                    <IoIosPlayCircle size={80} color="black" />
                </motion.div>
            </motion.div>
            <div className="flex flex-row flex-nowrap items-center justify-between gap-3">
                <Headline text={name} sizes={{sm: "text-3xl", lg: "text-4xl"}} weight="bold" gap={3}/>
                <div className="flex flex-row gap-3">
                    {links.map((link, index) => (
                        <motion.a 
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            key={index}
                            className="hover:text-brand"   
                            whileHover={{ scale: 1.2 }} 
                        >
                            {link.type === "website" && <IoGlobe size={28} />}
                            {link.type === "github" && <IoLogoGithub size={28} />}
                        </motion.a>
                    ))}
                </div>
            </div>
            <Reveal>
                <div className="flex flex-row gap-3">                
                    Stack
                    {stacks.map((stack, index) => (
                        <span key={index} title={stack.name} className="text-brand">{stack.icon}</span>
                    ))}
                </div>
            </Reveal>                    
            <Reveal width="auto">
                <div>{summary}</div> 
            </Reveal>
        </div>
    )
}