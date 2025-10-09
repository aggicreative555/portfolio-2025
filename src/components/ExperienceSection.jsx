"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import AnimatedTags from "./AnimatedTags";

function ExperienceSection() {
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

    const uffTags = ['UX Design','Design Thinking', 'Visual Display', 'Store layout', 'Pricing', 'Customer Service', 'Pinterest', 'Canva']
    const stoTags = ['UI / UX Design', 'Design Thinking', 'Figma', 'Slack']
    const studVestTags = ['JavaScript', 'Astro', 'Discord', 'Figma', 'Tailwind CSS']

    const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <motion.ol 
    className="group/list"
    variants={container}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount:0.2}}>
        <motion.li 
        className="mb-16 h-fit"
        onHoverStart={() => setHoveredIndex(0)}
        onHoverEnd={() => setHoveredIndex(null)}
        variants={item}>
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 h-fit">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wider text-black sm:col-span-2" aria-label="2023-Present">
            2023 - Present
            </header>
            <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-black">
                <div>
                <Link href='/' target="_blank" aria-label='UI Designer, Sto Medial (opens in another tab)' className="inline-flex items-baseline font-medium leading-tight tracking-wider text-black hover:text-red-800 focus-visible:text-red-800 text-base uppercase">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                </span>
                <span>
                    Visual Merchandiser | 
                    <span className="pl-2 inline-block">UFF Bergen</span>
                    <span></span>

                </span>
                </Link>
                </div>
            </h3>
            <p className="mt-2 text-sm leading-loose">
                As a visual merchandiser, I work with product, mannequin & window displays in-store. I plan campaigns and build the layout and displays accordingly. I'm also in charge of pricing our clothing items and delivering a delightful customer service. 
            </p>
            <motion.div className="z-20 relative"
                style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter'}}
                animate={hoveredIndex === 0 ? "hover" : "show"}>
                    <AnimatedTags tags={uffTags} parentHover={hoveredIndex === 0 ? "hover" : ""}/>
            </motion.div>
            </div>
        </div>
        </motion.li>
        <motion.li 
        onHoverStart={() => setHoveredIndex(1)}
        onHoverEnd={() => setHoveredIndex(null)}
        className="mb-16 h-fit"
        variants={item}>
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 h-fit">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wider text-black sm:col-span-2" aria-label="2023-2024">
            AUG 2023 - JULY 2024
            </header>
            <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-black">
                <div>
                <Link href='/' target="_blank" aria-label='UI Designer, Sto Medial (opens in another tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800 text-base uppercase tracking-wider">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                </span>
                <span>
                    Development Intern | 
                    <span className="pl-2 inline-block">StudVest</span>
                    <span></span>

                </span>
                
                </Link>
                </div>
            </h3>
            <p className="mt-2 text-sm leading-loose">
                As a development intern, I was working in a team of IT students being in charge of debugging the website and taking on projects to improve the website, or to create article adjacent interactive media such as games. Unfortunately, the developement team and it's assets are as of now, deprecated. 
            </p>
            <motion.div className="z-20 relative"
                style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter'}}
                animate={hoveredIndex === 1 ? "hover" : "show"}>
                    <AnimatedTags tags={studVestTags} parentHover={hoveredIndex === 1 ? "hover" : ""}/>
            </motion.div>
            </div>
        </div>
        </motion.li>
        <motion.li 
        onHoverStart={() => setHoveredIndex(2)}
        onHoverEnd={() => setHoveredIndex(null)}
        className="mb-16 h-fit"
        variants={item}>
        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 h-fit">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wider text-black sm:col-span-2" aria-label="2024-Present">
            May 2023 - June 2023
            </header>
            <div className="z-10 sm:col-span-6">
            <h3 className="font-medium leading-snug text-black">
                <div>
                <Link href='/' target="_blank" aria-label='UI Designer, Sto Medial (opens in another tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800 text-base uppercase tracking-wider">
                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                </span>
                <span>
                    UI Design Project | 
                    <span className="pl-2 inline-block">STO Medical</span>
                    <span></span>
                </span>
                </Link>
                </div>
            </h3>
            <p className="mt-2 text-sm leading-loose">
                As a UI Designer at a startup, I had meetings with my team and was tasked with creating a UI Design for the website with the goal of making sale conversions and introducing a 'subscription' feature. I made the UI for the landing page, which is still used today.  
            </p>
            <motion.div className="z-20 relative"
                style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter'}}
                animate={hoveredIndex === 2 ? "hover" : "show"}>
                    <AnimatedTags tags={stoTags} parentHover={hoveredIndex === 2 ? "hover" : ""}/>
            </motion.div>
            </div>
        </div>
        </motion.li>
    </motion.ol>
  )
}

export default ExperienceSection