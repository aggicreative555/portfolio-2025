'use client';
import { useState } from "react";
import { Clipboard, Check } from "lucide-react";

export default function CopyLinkButton({ link, className = "" }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`text-[.7rem] flex items-center gap-2 pb-6 rounded-md font-medium uppercase tracking-wider transition-all duration-300 hover:bg-red-800 hover:text-white ${className}`}
      aria-label="Copy link to clipboard"
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 text-crimson animate-bounce" size={16}/>
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Clipboard className="w-4 h-4" size={16} />
          <span>Share</span>
        </>
      )}
    </button>
  );
}
