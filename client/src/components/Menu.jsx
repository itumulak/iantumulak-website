import { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";

import { menuItems } from "../constants";

export default () => {
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

    return (
        <>
            <button className="lg:hidden">
                <GiHamburgerMenu size={28}/>
            </button>
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