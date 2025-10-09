"use client";
import Link from "next/link"
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import AnimatedTags from "./AnimatedTags";
import { useState } from "react";

function ProjectsSection() {
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

    const hotDogShelterTags = [ 'Javascript', 'TailwindCSS', 'API', 'CRUD', 'Accessibility', 'HTML&CSS']
    const cosmTags = [ 'HTML', 'CSS', 'Accessibility', 'UI/UX']
    const cosmJsTags = [ 'Javascript', 'E-commerce', 'HTML', 'CSS', 'Accessibility', 'UI/UX']
    const [hoveredIndex, setHoveredIndex] = useState(null);
  
  return (
    <motion.ul 
    className="group/list"
    variants={container}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount:0.2}}>
        <motion.li className="mb-12"
        onHoverStart={() => setHoveredIndex(0)}
        onHoverEnd={() => setHoveredIndex(null)}
        variants={item}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6 relative">
                <h3>
                <Link href='/projects/HotDogShelter/' target='_blank' aria-label='My First CSS assignment (opens in a new tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800  group/link text-base uppercase">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>Hot Dog Shelter |
                    <span className="pl-1 inline-block">API
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'><ArrowUpRight size={16} /></span>
                    </span>
                    </span>
                </Link>
                </h3>
                <p className="mt-2 text-sm leading-loose">
                    Enter my a pet adoption website, where I use the Noroff Api and CRUD operations in Vanilla JS to fetch, display and transform data. 
                </p>
                <motion.div className="z-20 relative"
                style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter'}}
                animate={hoveredIndex === 0 ? "hover" : "show"}>
                    <AnimatedTags tags={hotDogShelterTags} parentHover={hoveredIndex === 0 ? "hover" : ""}/>
                </motion.div>
            </div>
            <Image 
            src="/projects/hot-dog-shelter.jpg"
            alt='Website screenshot'
            loading="lazy"
            width={200}
            height={48}
            placeholder="blur"
            blurDataURL="/projects/hot-dog-shelter-blur.jpg"
            quality={85}
            className="aspect-video bg-black object-cover rounded drop-shadow-sm transition group-hover:border-foreground/20 sm:order-1 sm:col-span-2 sm:translate-y-1">
            </Image>
            </div>
        </motion.li>
        <motion.li className="mb-12"
        onHoverStart={() => setHoveredIndex(1)}
        onHoverEnd={() => setHoveredIndex(null)}
        variants={item}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                <Link href='/projects/COSMJS/' target='_blank' aria-label='My First CSS assignment (opens in a new tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800  group/link text-base uppercase">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>COSM |
                    <span className="pl-1 inline-block">JS Interactions
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'><ArrowUpRight size={16}/></span>
                    </span>
                    </span>
                </Link>
                </h3>
            <p className="mt-2 text-sm leading-loose">
                Enter one of my first coding projects, where I dove deep into understanding CSS and HTML accessibility. 
            </p>
            <motion.div className="z-20 relative"
                style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter'}}
                animate={hoveredIndex === 1 ? "hover" : "show"}>
                    <AnimatedTags tags={cosmJsTags} parentHover={hoveredIndex === 1 ? "hover" : ""}/>
            </motion.div>
            </div>
            <Image alt='Project img'
            loading="lazy"
            width={200}
            height={48}
            decoding="async"
            className="aspect-video bg-black object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            srcSet=''>
            </Image>
            </div>
        </motion.li>
        <motion.li className="mb-12"
        onHoverStart={() => setHoveredIndex(2)}
        onHoverEnd={() => setHoveredIndex(null)}
        variants={item}>
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                <Link href='/projects/COSM/' target='_blank' aria-label='My First CSS assignment (opens in a new tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800  group/link text-base uppercase">
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>COSM Community Museum
                    <span className="pl-1 inline-block">CSS Project
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:tracking-widest group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'><ArrowUpRight size={16}/></span>
                    </span>
                    </span>
                </Link>
                </h3>
            <p className="mt-2 text-sm leading-loose">
                Enter one of my first coding projects, where I dove deep into understanding CSS and HTML accessibility. 
            </p>
            <motion.div className="z-20 relative"
                style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter'}}
                animate={hoveredIndex === 2 ? "hover" : "show"}>
                    <AnimatedTags tags={cosmTags} parentHover={hoveredIndex === 2 ? "hover" : ""}/>
            </motion.div>
            </div>
            <Image alt='Project img'
            loading="lazy"
            width={200}
            height={48}
            decoding="async"
            className="aspect-video bg-black object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
            srcSet=''>
            </Image>
            </div>
        </motion.li>
    </motion.ul>
  )
}

export default ProjectsSection