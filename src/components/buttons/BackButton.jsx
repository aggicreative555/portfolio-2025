'use client';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export default function BackButton({ label = "Go Back", className = "" }) {
  const router = useRouter();

  const handleClick = () => {
    router.back(); 
    window.scrollTo({ top: 10, behavior: 'smooth' }); 
  };

  return (
    <button
      onClick={handleClick}
      className={`flex gap-2 flex-row uppercase text-sm font-medium hover:text-red-800 group font-garamond cursor-pointer ${className}`}
      aria-label="Go back to the previous page"
    >
      <span className="flex shrink-0 transition-transform group-hover:-translate-x-1 ml-1">
        <ArrowLeft className="w-4 h-4" />
      </span>
      <span className="group-hover:-translate-x-1 duration-300">
        {label}
      </span>
    </button>
  );
}
