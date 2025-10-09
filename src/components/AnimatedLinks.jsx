"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

function AnimatedLinks({ links = []}) {
    return (
         <motion.ul 
            className="mt-6 flex flex-col space-y-2 sm:space-x-4 sm:space-y-0 font-garamond tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>
            {links.map((link, index) => (
                <motion.li
                key={index}>
                <Link 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Link to ${link.aria}`}
                    className="inline-flex uppercase items-baseline text-sm font-medium  hover:text-red-800 hover:-translate-y-[.5px] duration-300 group/github hover:tracking-widest mb-2"
                >
                   {link.title}
                    <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/github:-translate-y-[.5px] translate-y-1 group-hover/github:translate-x-[.5px] ml-1">
                    <ArrowUpRight size={16}/>
                    </span>
                </Link>
                </motion.li>

            ))}
          </motion.ul>
    )
}

export default AnimatedLinks