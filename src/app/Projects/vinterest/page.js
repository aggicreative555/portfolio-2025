import AnimatedImage from "@/components/AnimatedImage";
import AnimatedLinks from "@/components/AnimatedLinks";
import AnimatedTags from "@/components/AnimatedTags";
import BackButton from "@/components/buttons/BackButton";
import FadeInText from "@/components/FadeInText";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://aggi-cieplak.com"),
  title: "Aggi Cieplak | Woodland Trust",
  description: "Enter Woodland Trust, an app that lets you find your trail, and identify trees on the way.",
  openGraph: {
    title: "Aggi Cieplak | Front-end Portfolio",
    description: "Enter Woodland Trust, an app that lets you find your trail, and identify trees on the way.",
    url: "https://aggi-cieplak.com",
    images: ["/assets/portfolio-mini.jpg"],
  },
};  

const linkData = [
  { title: 'GitHub', href: 'https://github.com/NoroffFEU/FED1-PE1-aggicreative555'},
  { title: 'Figma', href: 'https://www.figma.com/design/JjniKx9OufQOqA9HZIkQq4/vinterest?node-id=0-1&t=QzJ9KGmpTH7NxQbO-1'},
]

const tags = ['Javascript', 'HTML&CSS', 'WCAG', 'Blog', 'UI/UX', 'Responsive','MPA']

export default function Vinterest() {
  return (
    <div className="mx-4 md:mx-0">
      <div className="container mx-auto">
        <div className="min-h-screen w-full px-6 py-12 md:px-12 md:py-16 lg:py-8">
          <div className="lg:flex items-start lg:justify-between md:gap-32">
            <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col md:gap-10 gap-4 lg:py-24">
              <BackButton className="flex gap-2 flex-row uppercase text-sm font-medium hover:text-red-800 group font-garamond cursor-pointer "/>
              <div className="relative cursor-pointer font-garamond">
                <FadeInText as='h3' delay={0.2} >
                    <Link 
                      href="https://vinterest.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Netlify Link"
                      aria-label="Netlify Link (opens in a new tab)"
                      className="text-crimson uppercase inline-flex flex-wrap items-baseline font-semibold tracking-wider leading-tight hover:text-red-800 hover:-translate-y-1 duration-300 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl md:mb-4 "
                    >
                      Vinterest |
                      <span className="pl-1 inline-block">
                        Blog Website
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                          <ArrowUpRight/>
                        </span>
                      </span>
                    </Link>
                </FadeInText>
                <FadeInText as='p' delay={.4}>
                </FadeInText>
                  <FadeInText as='p' delay={0.4} className='mt-4 text-sm leading-loose tracking-wider '>
                    Imagine a blog only dedicated to vintage fun-facts and trinkets, that's Vinterest. This is a pure  <span aria-hidden='true' className="font-semibold 
                     duration-300">JavaScript</span> project, featuring a <span aria-hidden='true' className="font-semibold 
                     duration-300">picture carousel, API authentication, create post, edit post and delete post </span> functionalities. Since I used JS and CSS only, this is an <span aria-hidden='true' className="font-semibold 
                     duration-300"> MPA site </span> using the <span aria-hidden='true' className="font-semibold 
                     duration-300">Noroff API.</span>
                </FadeInText>
                <AnimatedLinks links={linkData}/>
              </div>
              {/* Technologies */}
              <AnimatedTags tags={tags}/>
            </aside>
            <main className="pt-24 lg:w-[52%] lg:py-24">
              <section
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 md:space-y-6 "
                aria-label="Project Images"
                id="images"
                
              >
                <div className="overflow-hidden h-[500px]">
                 <AnimatedImage
                    src="/projects/vinterest/vinterest-full-1.png"
                    alt="Website screenshot"
                    width={1521}
                    height={4038}
                    className="border-round-md w-full overflow-hidden"
                  />

                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 h-[800px] mt-10">
                  <AnimatedImage
                    src="/projects/vinterest/vinterest-mobile-2.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover object-top"
                  />
                  <AnimatedImage
                    src="/projects/vinterest/vinterest-mobile-3.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover object-top"
                  />
                </div>
                <div className="overflow-hidden h-fit mt-10">
                 <AnimatedImage
                    src="/projects/vinterest/vinterest-full-3.png"
                    alt="Website screenshot"
                    width={1521}
                    height={4038}
                    className="border-round-md w-full overflow-hidden object-top"
                  />
                </div>
                <div className="overflow-hidden h-fit">
                 <AnimatedImage
                    src="/projects/vinterest/vinterest-full-4.png"
                    alt="Website screenshot"
                    width={1521}
                    height={4038}
                    className="border-round-md w-full overflow-hidden object-top"
                  />
                </div>
                <div className="overflow-hidden h-fit">
                 <AnimatedImage
                    src="/projects/vinterest/vinterest-full-2.png"
                    alt="Website screenshot"
                    width={1521}
                    height={4038}
                    className="border-round-md w-full overflow-hidden object-top"
                  />
                </div>
              </section>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
}
