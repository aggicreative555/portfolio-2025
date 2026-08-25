'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function AnimatedImage({ src, alt, width, height, className = "", ...props }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: .1}}
      className="relative overflow-hidden rounded-[1.25rem] border border-slate-200/10 bg-slate-100"
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <motion.div
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="relative block h-full w-full"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          onLoad={() => setIsLoading(false)}
          className={`block h-full w-full object-cover ${className}`}
          {...props}
        />

        {isLoading && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="media-loader" />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
