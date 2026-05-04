"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function UXToggle({ setValue }) {
  const [selectedRole, setSelectedRole] = useState('frontEnd');

  useEffect(() => {
    setValue(selectedRole === 'frontEnd');
  }, [selectedRole, setValue]);

  return (
    <div className="relative mb-8 flex gap-2 p-1 justify-center w-fit h-full bg-amber-950/10 rounded-full font-medium">
      <button
        onClick={() => setSelectedRole("frontEnd")}
        className="relative px-6 py-2 rounded-full"
      >
        {selectedRole === "frontEnd" && (
          <motion.div
            layoutId="pill"
            className="absolute inset-0 rounded-full bg-crimson"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
              mass: 0.5,
            }}
          />
        )}
        <span
          className={`relative z-10 transition-colors duration-200 ${
            selectedRole === "frontEnd"
              ? "text-white"
              : "text-amber-900 cursor-pointer"
          }`}
        >
          Frontend
        </span>
      </button>
      <button
        onClick={() => setSelectedRole("UX")}
        className="relative px-6 py-2 rounded-full"
      >
        {selectedRole === "UX" && (
          <motion.div
            layoutId="pill"
            className="absolute inset-0 rounded-full bg-crimson"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
          />
        )}

        <span
          className={`relative z-10 transition-colors duration-200 ${
            selectedRole === "UX"
              ? "text-white"
              : "text-amber-900 cursor-pointer"
          }`}
        >
          UX design
        </span>
      </button>
    </div>
  );
}

export default UXToggle;
