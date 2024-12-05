import PropTypes from 'prop-types';
import { IoLogoGithub } from "react-icons/io5";
import { IoGlobe } from "react-icons/io5";
import { IoIosPlayCircle } from "react-icons/io";
import { styled } from "styled-components";
import { motion } from "framer-motion";

import Headline from "./Headline"
import imgPlaceholder from "../assets/project-placeholder.jpg"
import Reveal from "./Reveal";

const Img = styled.img`
    transition: all .25s;
    border-top-left-radius: .4rem;
    border-top-right-radius: .4rem;
    width: 85%;
    margin: auto;
`

const Card  = ({src, name, summary, links = [], stacks = []}) => {
    return (
        <div className="flex flex-col flex-nowrap gap-4 max-w-[432px]">
            <div 
                className={`w-full pt-16 aspect-video bg-light-dark relative rounded-lg overflow-hidden`}
            >
                <Img 
                    src={src ? src : imgPlaceholder} 
                    alt="project"
                />              
            </div>
            <div className="flex flex-row flex-nowrap items-center justify-between gap-3">
                <Headline text={name} sizes={{xs: "14px", md: "19px"}} weight="bold" gap={3}/>
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
                            {link.type === "video" && <IoIosPlayCircle size={28} />}
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

Card.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    links: PropTypes.array,
    stacks: PropTypes.array
}

export default Card;