"use client";
import { motion } from "framer-motion";

function FadeInText({ as = 'p', children, delay = 0}) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, y:20 }}
      whileInView={{ opacity: 1, y:0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      >{children}
    </MotionTag>
  )
}

export default FadeInText