import Link from "next/link";
import { usePathname } from "next/navigation";

export function CategoryButton({ label, href, value, changeCategory}) {
    const pathname = usePathname();
    const isActive = pathname === href;
    const title = isActive ? `${label} (current page)` : `Go to ${label}`;

    if (isActive) {
        return (
          <button
          disabled
          type="button"
          aria-current="page"
          aria-disabled="true"
          title={title}
           className="cursor-pointer flex items-center rounded-full bg-amber-950/10 px-4 py-2 text-md font-medium leading-5 text-amber-950/80 uppercase"
          >{label}</button>
        )
    }


    return (
        <Link        
        href={href}
        onClick={() => changeCategory(value)}>
            <button
            type="button"
            aria-pressed="false"
            aria-label={title}
            title={title}
            className="flex items-center rounded-full bg-amber-950 px-4 py-2 text-md font-medium leading-5 text-white uppercase hover:tracking-wider hover:drop-shadow-md hover:bg-red-800 transition-all ease-in-out duration-300 cursor-pointer">
                {label}
            </button>
        </Link>
    )
}
