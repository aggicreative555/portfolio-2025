"use client";
import Link from "next/link"
import { motion } from "framer-motion";
import Image from "next/image";

function SvgStack() {
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

    const stack = [
        {
            src: '/stack/react-logo-programming-2-svgrepo-com (3).svg',
            alt: 'React logo'
        },
        {
            src: '/stack/next-dot-js-svgrepo-com.svg',
            alt: 'Next.js logo'
        },
        {
            src: '/stack/javascript-155-svgrepo-com.svg',
            alt: 'Javascript logo'
        },
        {
            src: '/stack/astro-svgrepo-com.svg',
            alt: 'Astro logo'
        },
        {
            src: '/stack/html5-01-svgrepo-com.svg',
            alt: 'HTML logo'
        },
        {
            src: '/stack/css3-01-svgrepo-com.svg',
            alt: 'CSS logo'
        },
        {
            src: '/stack/figma-svgrepo-com.svg',
            alt: 'Figma logo'
        },
        {
            src: '/stack/adobe-cloud-131-svgrepo-com.svg',
            alt: 'Adobe Creative Suite logo'
        }
    ]
  
    return (
        <motion.ul 
            className="ml-1 w-full flex flex-row flex-wrap items-center gap-y-4 mb-6"
            variants={container}
            initial='hidden'
            whileInView='show'
            viewport={{once: true, amount:0.2}}>
                {stack.map((itemData, index) => (
                    <motion.li 
                        key={index}
                        className="mr-5 shrink-0 text-xs"
                        variants={item}>
                        <Image
                            src={itemData.src}
                            alt={itemData.alt}
                            width={32}
                            height={32} >
                        </Image>
                    </motion.li>
                ))}
        </motion.ul>
    )
}

export default SvgStack