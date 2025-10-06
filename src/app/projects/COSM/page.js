import Link from "next/link";

export const metadata = {
  title: "Aggi Cieplak | COSM",
  description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
  openGraph: {
    title: "Aggi Cieplak | Front-end Portfolio",
    description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
    url: "https://aggicieplak.com",
    images: ["/assets/portfolio-mini.jpg"],
  },
};

export default function Cosm() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 lg:flex-row lg:justify-between lg:px-20 lg:py-24">
      
      {/* Content */}
      <div className="max-w-xl flex-1">
        <div>
          <button className=" flex gap-2 flex-row uppercase items-baseline text-sm font-medium text-black hover:text-red-800 group/goback">
                <span className=" flex shrink-0 transition-transform group-hover/goback:-translate-y-1 group-hover/goback:-translate-x-1 ml-1 mb-20">
                  Arrow
                </span>
                <span>
                  Go Back
                </span>
          </button>
        </div>
        <div className="relative cursor-pointer">
          <h3>
            <Link 
              href="/" 
              target="_blank" 
              rel="noopener noreferrer"
              className=" uppercase inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl"
            >
              COSM | 
              <span className="pl-1 inline-block">
                CSS & accessibility
                <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px">
                  Arrow
                </span>
              </span>
            </Link>
          </h3>
          <p className="mt-4 text-sm leading-loose">
            Enter my pet adoption website, where I use the Noroff API and CRUD operations in Vanilla JS to fetch, display and transform data.
          </p>

          {/* Additional links */}
          <ul className="mt-4 flex flex-col space-y-2 sm:space-x-4 sm:space-y-0">
            <li>
              <Link 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex uppercase items-baseline text-sm font-medium text-black hover:text-red-800 group/github"
              >
                GitHub
                <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/github:-translate-y-1 group-hover/github:translate-x-1 ml-1">
                  Arrow
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex uppercase items-baseline text-sm font-medium text-black hover:text-red-800 group/githubp"
              >
                GitHub Projects
                <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/githubp:-translate-y-1 group-hover/githubp:translate-x-1 ml-1">
                  Arrow
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Technologies */}
        <ul className="mt-6 flex flex-wrap gap-2">
          <li className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase">JavaScript</li>
          <li className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase">Figma</li>
          <li className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase">Tailwind CSS</li>
        </ul>
      </div>

      {/* Image placeholder */}
      <div className="mt-8 w-[80%] sm:w-[80%] md:w-[50%] lg:w-[50%] flex-shrink-0 lg:mt-0 lg:ml-12">
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <img
            src="/"
            alt="Hot Dog Shelter project walkthrough"
            className="absolute top-0 left-0 w-full h-full object-cover rounded border-2 border-slate-200/10"
          />
        </div>
      </div>

    </main>
  );
}

