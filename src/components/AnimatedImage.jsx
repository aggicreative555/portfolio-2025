'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedImage({ src, alt, width, height, className = "", ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="overflow-hidden rounded-[1.25rem] border border-slate-200/10 bg-slate-100"
    >
      <motion.div
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`block h-full w-full object-cover ${className}`}
          {...props}
        />
      </motion.div>
    </motion.div>
  );
}
