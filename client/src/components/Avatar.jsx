import { useEffect, useRef } from 'react';
import Avatar from '@mui/material/Avatar';
import { motion, useInView, useAnimation } from "framer-motion";

export default ({src, name}) => {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})
    const viewControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            viewControl.start("visible")
            console.log("avatar in view");
            
        }        
    }, [isInView])

    return (
        <div ref={ref}>
            <motion.div
                className="w-full flex justify-center lg:w-max lg:absolute -top-10 right-0 lg:right-20 lg:-top-10"
                variants={{
                    hidden: {scale: 0, opacity: 0},
                    visible: {scale: 1, opacity: 1},
                }}
                initial="hidden"
                animate={viewControl}
                transition={{duration: 0.5, delay: 0.25, ease: "easeInOut"}}
            >
                <Avatar className="border-solid border-8 border-brand" src={src} alt={name} sx={{ width: 200, height: 200 }} />
            </motion.div>
        </div>
    )
}