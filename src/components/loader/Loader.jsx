"use client";

export default function Loader({ isLoading = true, className = "" }) {
    if (!isLoading) return null;

    return (
        <div
            aria-live="polite"
            aria-busy="true"
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        >
            <div className="media-loader" />
        </div>
    );
}