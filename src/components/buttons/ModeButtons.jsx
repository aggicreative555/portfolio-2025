'use client'
import { useMode } from "@/hooks/useMode";
import { CategoryButton } from "./CategoryButton";

export function ModeButtons () {
    const {theme, category, changeCategory } = useMode();

    return (
        <div aria-label='Portfolio categories'
        className="md:mb-10 mb-2 flex md:flex-row flex-wrap gap-4">
           <CategoryButton
                label="frontend"
                value="frontend"
                href="/frontend"
                currentCategory={category}
                theme={theme}
                onChange={changeCategory}
           />
           <CategoryButton
                label="uiux"
                value="uiux"
                href="/uiux"
                currentCategory={category}
                theme={theme}
                onChange={changeCategory}
           />
           <CategoryButton
                label="visualmerch"
                value="visualmerch"
                href="/visualmerch"
                currentCategory={category}
                theme={theme}
                onChange={changeCategory}
           />
        </div>
    )
}
