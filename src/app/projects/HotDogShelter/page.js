import AnimatedLinks from "@/components/AnimatedLinks";
import AnimatedTags from "@/components/AnimatedTags";
import FadeInText from "@/components/FadeInText";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Aggi Cieplak | Hot Dog Shelter",
  description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
  openGraph: {
    title: "Aggi Cieplak | Front-end Portfolio",
    description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
    url: "https://aggicieplak.com",
    images: ["/assets/portfolio-mini.jpg"],
  },
};

const linkData = [
  { title: 'Github', href: '/'},
  { title: 'Github Project', href: '/'},
]

const tags = [ 'Javascript', 'Tailwind', 'React' ]

export default function HotDogShelter() {
  return (
    <main className="flex flex-col items-center justify-center px-6 py-12 lg:flex-row lg:justify-between lg:px-20 lg:py-24">
      
      {/* Content */}
      <div className="max-w-xl flex-1">
        <div>
          <button className="flex gap-2 flex-row uppercase text-sm font-medium hover:text-red-800 group font-garamond cursor-pointer ">
                <span className=" flex shrink-0 transition-transform group-hover:-translate-x-1 ml-1 mb-20">
                  <ArrowLeft/>
                </span>
                <span className="group-hover:-translate-x-1 duration-300">
                  Go Back
                </span>
          </button>
        </div>
        <div className="relative cursor-pointer font-garamond">
          <FadeInText as='h3' delay={0.2} >
              <Link 
                href="/" 
                target="_blank" 
                rel="noopener noreferrer"
                title="Deployed website on Netlify"
                aria-label="Deployed webiste on Netlify (opens in a new tab)"
                className="text-crimson uppercase inline-flex items-baseline font-semibold tracking-wider leading-tight hover:text-red-800 hover:-translate-y-1 duration-300 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl md:mb-4"
              >
                Hot Dog Shelter | 
                <span className="pl-1 inline-block">
                  API
                  <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                    <ArrowUpRight/>
                  </span>
                </span>
              </Link>
          </FadeInText>
          <FadeInText as='p' delay={0.4} className='mt-4 text-sm leading-loose tracking-wider '>
            Enter my pet adoption website, where I use the Noroff API and CRUD operations in Vanilla JS to fetch, display and transform data.
          </FadeInText>
          <AnimatedLinks links={linkData}/>
         
        </div>

        {/* Technologies */}
       <AnimatedTags tags={tags}/>
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
