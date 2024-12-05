import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import { menuItems } from "../constants";

const Menu = () => {
    const [showMenu, setShowMenu] = useState(false);

    const scrollToSection = (e, id) => {
        e.preventDefault();

        const element = document.getElementById(id);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = (e) => {
        e.preventDefault()       

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    }

    const handleShowMobileMenu = () => {
        setShowMenu(!showMenu);
    }

    const handleMobileMenuClose = (e, id) => {
        e.preventDefault()

        if ( id === 'home' ) {
            scrollToTop(e)
        }
        else if ( id !== "resume" ) {
            scrollToSection(e, id)
        }

        setShowMenu(!showMenu);
    }

    return (
        <>
            <button className="lg:hidden" onClick={handleShowMobileMenu}>
                <GiHamburgerMenu size={28}/>
            </button>
            <motion.ul 
                className="absolute top-0 right-0 w-[50%] bg-[#22252b] h-svh flex flex-col gap-3 pl-8 pt-4 "
                variants={{
                    hide: {
                        display: "none",    
                        x: 400, 
                        opacity: 0
                    },
                    show: {
                        x: 0,
                        display: "flex",
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeInOut"
                        }
                    }
                }}
                animate={showMenu ? "show" : "hide"}
            >
                <li key="close" className="self-end pr-8">
                    <button onClick={handleShowMobileMenu}>
                        <IoClose size={28}/>
                    </button>
                </li>
                {menuItems.map(item => (
                    <li key={item.name} className={item.id === "resume" ? "mt-4" : ""}>
                        <a  target={item.id === "resume" ? "_blank" : ""} onClick={(e) => handleMobileMenuClose(e, item.id)} className={`text-base font-medium ${item.name === "Resume" ? "text-brand border-brand border-2 rounded py-2 px-4" : ""}`} href={item.url}>{item.name}</a>
                    </li>
                ))}
            </motion.ul>
            <motion.ul 
                className="hidden lg:flex flex-row gap-x-6"
                variants={{
                    initial: { opacity: 0 },
                    show: {
                        opacity: 1 ,
                        transition: {
                            delay: 0.3,
                            staggerChildren: 0.1,
                            when: "beforeChildren",
                        }
                    },
                }}
                initial="initial"
                animate="show"
            >
                {menuItems.map(item => (
                    <motion.li 
                        key={item.name}
                        variants={{
                            initial: { opacity: 0, y: -75 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                        }}
                        whileHover={{ scale: 1.1 }}
                    >
                        <a target={item.id === "resume" ? "_blank" : ""} onClick={(e) => item.id === 'home' ? scrollToTop(e) : item.id !== 'resume' ? scrollToSection(e, item.id) : null} className={`text-base font-medium ${item.name === "Resume" ? "text-brand border-brand border-2 rounded py-2 px-4" : ""}`} href={item.url}>{item.name}</a>
                    </motion.li>
                ))}
            </motion.ul>
        </>
    )
}

export default Menu