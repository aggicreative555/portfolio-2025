'use client';

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";


export function useMode() {
    const [theme, setTheme] = useState('light');
    const pathname = usePathname();

    const category = 
    pathname === '/uiux' ? 'uiux' : pathname === '/visualmerch' ? 'visualmerch' : 'frontend';


    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        const initialTheme = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';

        setTheme(initialTheme);
        document.documentElement.classList.toggle(
            'dark',
            initialTheme === 'dark'
        );
    }, []);

    function toggleTheme() {
        const nextTheme = theme === 'dark' ? 'light' : 'dark';

        setTheme(nextTheme);
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
        localStorage.setItem('theme', nextTheme);
    }

    return { theme, category, toggleTheme };

}
