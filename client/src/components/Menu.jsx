import { motion } from "framer-motion";

import { menuItems } from "../constants";

export default () => {
    const scrollToSection = (e, id) => {
        e.preventDefault();

        const element = document.getElementById(id);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const scrollToTop = () => {
        console.log("top")  ;
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    }

    return (
        <motion.ul 
            className="flex flex-row gap-x-6"
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
                >
                    <a onClick={(e) => item.id === 'home' ? scrollToTop() : scrollToSection(e, item.id)} className={`text-base font-medium ${item.name === "Resume" ? "text-brand border-brand border-2 rounded py-2 px-4" : ""}`} href={item.url}>{item.name}</a>
                </motion.li>
            ))}
        </motion.ul>
    )
}