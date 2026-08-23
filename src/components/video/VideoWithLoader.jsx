"use client";

import { useState } from "react";
import Loader from "../loader/Loader";

export default function VideoWithLoader({
    src,
    poster,
    alt,
    className = "",
}) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className={`relative overflow-hidden rounded-2xl bg-slate-100 ${className}`}>
            <Loader isLoading={isLoading} />

            <video
                src={src}
                poster={poster}
                alt={alt}
                preload="metadata"
                muted
                playsInline
                autoPlay
                loop
                onLoadedData={() => setIsLoading(false)}
                onCanPlay={() => setIsLoading(false)}
                className="block h-full w-fit object-cover"
            />
        </div>
    );
}