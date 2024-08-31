import { styled } from "styled-components";
import { motion } from "framer-motion";

const Social = styled.a`
    & > svg {
        &:hover {
            fill: var(--brand);
        }
    }
`

export default ({ data }) => {
    return (
        <motion.div 
            className="flex flex-row items-center justify-center gap-6"
            variants={{
                initial: { opacity: 0 },
                show: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        when: "beforeChildren",
                    },
                },
            }}
            initial="initial"
            animate="show"
            >
            {data.map((social) => (
                <motion.div
                    key={social.name}
                    variants={{
                        initial: { opacity: 0, y: -75 },
                        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
                    }}
                >
                    <Social 
                        href={social.url} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-6 h-6 cursor-pointer"
                    >
                        {social.icon}
                    </Social>
                </motion.div>
            ))}
        </motion.div>
    )
}