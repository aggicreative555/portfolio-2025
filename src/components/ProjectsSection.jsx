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

    const vinterestTags = [ 'Javascript', 'HTML&CSS', 'WCAG', 'Blog', 'UI/UX', 'Responsive','MPA']
    const holidazeTags = ['React', 'Zustand', 'TailwindCSS', 'Vite', 'API', 'CRUD', 'WCAG', 'Postman', 'Git', 'SPA']
    const swanComTags = [ 'React','Zustand', 'Vite', 'E-commerce', 'API', 'SPA', 'HTML&CSS', 'WCAG','Responsive']
    const emailTags = [ 'MJML','HTML', 'CSS', 'Nodemailer', 'Client', 'WCAG','Responsive']
    const woodlandTags = [ 'Figma','Prototype', 'Wireframing', 'UX Interviews', 'Case Study', 'Low Fidelity Wirefames']
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    const projects = [
        {
            href: '/Projects/woodland/',
            ariaLabel: 'My Woodland Trust project (opens in the same window)',
            title: 'Woodland | Trail and Tree ID App',
            desc: 'Have You ever wanted to learn more about the tree species on Your trail? The Woodland Trust app is a tree identification app that helps You identify trees and find trails near You. ',
            src:'/projects/woodland/woodland-thumbnail.png',
            blur:'/projects/woodland/woodland-thumbnail-blur.png',
            alt:'Woodland Trust landing page screenshot',
            projectTags: woodlandTags,
        },
        {
            href: '/Projects/holidaze/',
            ariaLabel: 'My Holidaze project (opens in the same window)',
            title: 'Holidaze | Holiday Booking',
            desc: 'Need a vacation that feels like a vintage postcard? Enter the Holidaze booking website, where you can sell and order your destination.',
            src:'/projects/holidaze/holidaze-thumbnail-dark.jpg',
            blur:'/projects/holidaze/holidaze-thumbnail-darkblur.jpg',
            alt:'Holidaze landing page screenshot',
            projectTags: holidazeTags,
        },
        {
            href: '/Projects/swan/',
            ariaLabel: 'My SwanCom project (opens in the same window)',
            title: 'SwanCom | E-commerce',
            desc: 'Enter the SwanCom e-commerce, where you go through the add to cart flow on a pixel perfect and clean setup. ',
            src:'/projects/swancom/swancom-thumbnail-1.jpg',
            blur:'/projects/swancom/swancom-thumbnail-blur.jpg',
            alt:'SwanCom landing page screenshot',
            projectTags: swanComTags,
        },
        {
            href: '/Projects/vinterest/',
            ariaLabel: 'My Vinterst project (opens in the same window)',
            title: 'Vinterest | Vintage blog',
            desc: 'Ever wondered what is behind vintage design, fashion and beauty? Take a look at Vinterest and write your own post on. ',
            src:'/projects/vinterest/vinterest-thumbnail.jpg',
            blur:'/projects/vinterest/vinterest-thumbnail-blur.jpg',
            alt:'Vinterest landing page screenshot',
            projectTags: vinterestTags,
        },
        {
            href: '/Projects/email/',
            ariaLabel: 'My email template project (opens in the same window)',
            title: 'Brand Email | MJML Template',
            desc: 'A marketing email template for a content creator.',
            src:'/projects/brandmail/brandmail-thumbnail.jpg',
            blur:'/projects/brandmail/brandmail-thumbnail-blur.jpg',
            alt:'Brandmail email template',
            projectTags: emailTags,
        },
    ]
  
  return (
    <motion.ul 
    className="group/list"
    variants={container}
    initial='hidden'
    whileInView='show'
    viewport={{once: true, amount:0.2}}>
        {projects.map((itemData, index) => (
            <motion.li 
            key={index}
            className="mb-12"
            onHoverStart={() => setHoveredIndex(1)}
            onHoverEnd={() => setHoveredIndex(null)}
            variants={item}>
                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                    <Link href={itemData.href} aria-label={itemData.ariaLabel} className="inline-flex items-baseline text-xl font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800  group/link uppercase">
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                        <span>
                        <span className="pl-1 inline-block">{itemData.title} 
                            <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'><ArrowUpRight size={16}/></span>
                        </span>
                        </span>
                    </Link>
                    </h3>
                    <p className="mt-2 text-sm w-fit leading-loose">
                        {itemData.desc} 
                    </p>
                    <motion.div className="z-20 relative"
                        style={{ pointerEvents: 'none', willChange: 'transform, opacity, filter'}}
                        animate={hoveredIndex === 1 ? "hover" : "show"}>
                            <AnimatedTags tags={itemData.projectTags} parentHover={hoveredIndex === 1 ? "hover" : ""}/>
                    </motion.div>
                    </div>
                    <div className="relative w-full aspect-video overflow-hidden rounded-lg shadow-sm transition group-hover:border-slate-200/30 col-span-8 md:col-span-6 sm:translate-y-1">
                        <Image 
                        src={itemData.src} 
                        alt={itemData.alt} 
                        loading="lazy"
                        width={600}
                        height={400}
                        placeholder="blur"
                        blurDataURL={itemData.blur} 
                        quality={100}
                        className="h-full w-full bg-black object-cover">
                        </Image>
                    </div>
                </div>
            </motion.li>
        ))}
    </motion.ul>
  )
}

export default ProjectsSection