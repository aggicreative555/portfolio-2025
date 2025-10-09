"use client";
import { motion} from "framer-motion";

/**
 * AnimatedTags — animates a list of tags (e.g., skills or tools)
 * @param {Array} tags - array of strings (e.g., ["JavaScript", "Figma", "Tailwind CSS"])
*/

export default function AnimatedTags({ tags = [], parentHover = '' }) {

    const listVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, 
                ease: 'easeInOut',
            },
        },
        hover: {
            opacity: 1,
            transition: {
            staggerChildren: 0.12,
            ease: "easeInOut",
            },
        },
        
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut",
            },
        },
        hover: {
            y: [-0, -8, 0],           
            opacity: 1,      
            transition: { duration: 0.45, ease: "easeInOut" },
            backgroundColor: [
            "rgba(68, 50, 28, 0.1)", 
            "rgba(255, 250, 230, 0.5)",
            "rgba(68, 50, 28, 0.1)", 
            ],
            boxShadow: [
            "0 0 0px rgba(255,255,255,0)",
            "0 0 12px rgba(255,255,255,0.6)",
            "0 0 0px rgba(255,255,255,0)",
            ],
        },
    };

    return (
        <motion.ul
        aria-label="Technologies used"
        variants={listVariants}
        initial="hidden"
        animate={parentHover || "show"}
        whileHover='hover'
        whileFocus='hover'
        role='list'
        className="mt-6 flex flex-wrap gap-2 font-garamond tracking-wider cursor-default"
        >
        {tags.map((tag, index) => (
            <motion.li
            key={index}
            variants={itemVariants}
            role='list-item'
            className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase"
            >
            {tag}
            </motion.li>
        ))}
        </motion.ul>
    );
}
