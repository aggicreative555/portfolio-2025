"use client";
import Link from "next/link"
import { motion } from 'framer-motion';

const Nav = () => {
     const container = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        ease: 'easeOut',
        }
    }
    }

    const item = {
        hidden: { opacity: 0, y: 40 },
        show: { 
        opacity: 1, 
        y: 0,
        transition: {
        duration: 0.6,
        ease: 'easeOut',
        } },
    }

    return (
        <nav className="hidden lg:block">
            <motion.ul
            className="mt-16 w-max"
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount:0.2}}>
                <motion.li
                variants={item}>
                    <Link href='#about' className="group flex items-center py-3 active">
                        <span className="mr-4 h-px w-8 bg-[#3B2D21] transition-all group-hover:w-16 group-hover:bg-red-800 group-focus-visible:w-16 group-focus-visible:bg-red-800 motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-red-800 group-focus-visible:text-red-800 font-garamond ">About</span>
                    </Link>
                </motion.li>
                <motion.li
                    variants={item}>
                    <Link href='#experience' className="group flex items-center py-3 active">
                        <span className="mr-4 h-px w-8 bg-[#3B2D21] transition-all group-hover:w-16 group-hover:bg-red-800 group-focus-visible:w-16 group-focus-visible:bg-red-800 motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-red-800 group-focus-visible:text-red-800 font-garamond ">Experience</span>
                    </Link>
                </motion.li>
                <motion.li
                    variants={item}>
                    <Link href='#projects' className="group flex items-center py-3 active">
                        <span className="mr-4 h-px w-8 bg-[#3B2D21] transition-all group-hover:w-16 group-hover:bg-red-800 group-focus-visible:w-16 group-focus-visible:bg-red-800 motion-reduce:transition-none"></span>
                        <span className="text-xs font-bold uppercase tracking-widest group-hover:text-red-800 group-focus-visible:text-red-800 font-garamond ">Projects</span>
                    </Link>
                </motion.li>
            </motion.ul>
            </nav>
    )
}

export default Nav