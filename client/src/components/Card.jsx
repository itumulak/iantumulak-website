import { IoLogoGithub } from "react-icons/io5";
import { IoGlobe } from "react-icons/io5";
import { styled } from "styled-components";

import Headline from "./Headline"
import imgPlaceholder from "../assets/project-placeholder.jpg"

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
            <div className="w-full aspect-video bg-light-dark cursor-pointer relative rounded-lg overflow-hidden">
                <Img 
                    src={src ? src : imgPlaceholder} 
                    alt="project"
                />
            </div>
            <div className="flex flex-row flex-nowrap items-center justify-between gap-3">
                <Headline text={name} size="1.2rem" weight="bold" gap={3}/>
                <div className="flex flex-row gap-3">
                    {links.map((link, index) => (
                        <a 
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            key={index}
                            className="hover:text-brand"    
                        >
                            {link.type === "website" && <IoGlobe size={28} />}
                            {link.type === "github" && <IoLogoGithub size={28} />}
                        </a>
                    ))}
                </div>
            </div>
            <div className="flex flex-row gap-3">
                Stack
                {stacks.map((stack, index) => (
                    <span key={index} title={stack.name} className="text-brand">{stack.icon}</span>
                ))}
            </div>
            <div>{summary}</div>
        </div>
    )
}