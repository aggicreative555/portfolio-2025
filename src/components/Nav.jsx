import Link from "next/link"

const Nav = () => {
  return (
    <nav className="hidden lg:block">
        <ul className="mt-16 w-max">
            <li>
                <Link href='#about' className="group flex items-center py-3 active">
                    <span className="mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-gray-500 group-focus-visible:w-16 group-focus-visible:bg-black motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black group-focus-visible:text-gray-500">About</span>
                </Link>
            </li>
            <li>
                <Link href='#experience' className="group flex items-center py-3 active">
                    <span className="mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-gray-500 group-focus-visible:w-16 group-focus-visible:bg-black motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black group-focus-visible:text-gray-500">Experience</span>
                </Link>
            </li>
            <li>
                <Link href='#projects' className="group flex items-center py-3 active">
                    <span className="mr-4 h-px w-8 bg-black transition-all group-hover:w-16 group-hover:bg-gray-500 group-focus-visible:w-16 group-focus-visible:bg-black motion-reduce:transition-none"></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black group-focus-visible:text-gray-500">Projects</span>
                </Link>
            </li>
        </ul>
        </nav>
  )
}

export default Nav