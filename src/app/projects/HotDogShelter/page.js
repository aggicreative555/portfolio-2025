import AnimatedImage from "@/components/AnimatedImage";
import AnimatedLinks from "@/components/AnimatedLinks";
import AnimatedTags from "@/components/AnimatedTags";
import BackButton from "@/components/buttons/BackButton";
import FadeInText from "@/components/FadeInText";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://aggi-cieplak.com"),
  title: "Aggi Cieplak | Hot Dog Shelter",
  description: "Enter Hot Dog Shelter, a pet adoption website where you can view pets, create and edit your pet post using Vanilla Js and API CRUD operations. Styled with Tailwind CSS.",
  openGraph: {
    title: "Aggi Cieplak | Front-end Portfolio",
    description: "Enter Hot Dog Shelter, a pet adoption website where you can view pets, create and edit your pet post using Vanilla Js and API CRUD operations. Styled with Tailwind CSS.",
    url: "https://aggi-cieplak.com",
    images: ["/assets/portfolio-mini.jpg"],
  },
};

const linkData = [
  { title: 'Github', href: 'https://github.com/aggicreative555/hot-dog-shelter'},
  { title: 'Github Project', href: 'https://github.com/users/aggicreative555/projects/10/views/1'},
]

const tags = [ 'Pet Adoption','Javascript', 'TailwindCSS', 'API','CRUD','Figma', ]

export default function HotDogShelter() {
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
                      href="https://hotdogshelter.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Deployed website on Netlify"
                      aria-label="Deployed webiste on Netlify (opens in a new tab)"
                      className="text-crimson uppercase inline-flex flex-wrap items-baseline font-semibold tracking-wider leading-tight hover:text-red-800 hover:-translate-y-1 duration-300 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl md:mb-4 "
                    >
                      Hot Dog Shelter |
                      <span className="pl-1 inline-block">
                        Pet Adoption
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                          <ArrowUpRight/>
                        </span>
                      </span>
                    </Link>
                </FadeInText>
                <FadeInText as='p' delay={.4}>
                  <CopyLinkButton link="http://localhost:3000/projects/HotDogShelter" />
                </FadeInText>
                <FadeInText as='p' delay={0.4}>
                  <span className="cursor-default">
                    Enter Hot Dog Shelter, <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">a rustic vintage</span> styled website to find your pet match. This website let's you <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">login, register with validation, view pets, and create or edit a pet post</span> yourself. This semester project uses Tailwind CSS, Vanilla Javascript and API CRUD operations.
                  </span>
                  
                </FadeInText>
                <AnimatedLinks links={linkData}/>
              </div>
              {/* Technologies */}
              <AnimatedTags tags={tags}/>
            </aside>
            <main className="pt-24 lg:w-[52%] lg:py-24">
              <section
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Project Images"
                id="images"
              >
                <div className="space-y-12">
                  <AnimatedImage
                    src="/projects/hotdogshelter/hot-dog-shelter-full-h.png"
                    alt="Website screenshot"
                    width={1200}
                    height={800}
                    placeholder="blur"
                    blurDataURL="/projects/hot-dog-shelter-blur.jpg"
                    className="object-cover w-full h-auto border border-slate-200/10 shadow-sm"
                  />
                  <div className="flex md:flex-row gap-4 w-full items-start md:justify-between">
                    <AnimatedImage
                      src="/projects/hotdogshelter/hotdogshelter-mobile-1.png"
                      alt="Mobile screenshot"
                      width={400}
                      height={800}
                      placeholder="blur"
                      blurDataURL="/projects/hot-dog-shelter-blur.jpg"
                      className="object-cover w-[300px] h-auto transition-transform duration-700 rounded-2xl border border-slate-200/10 shadow-sm"
                      loading='lazy'
                    />
                    <div className="flex flex-col gap-10 items-start">
                      <AnimatedImage
                        src="/projects/hotdogshelter/hotdogshelter-mobile-2.png"
                        alt="Mobile screenshot"
                        width={400}
                        height={800}
                        placeholder="blur"
                        blurDataURL="/projects/hot-dog-shelter-blur.jpg"
                        className="object-cover w-[300px] h-auto transition-transform duration-700 rounded-2xl border border-slate-200/10 shadow-sm"
                        loading='lazy'
                      />
                      <AnimatedImage
                        src="/projects/hotdogshelter/hotdogshelter-mobile-2.png"
                        alt="Mobile screenshot"
                        width={400}
                        height={800}
                        placeholder="blur"
                        blurDataURL="/projects/hot-dog-shelter-blur.jpg"
                        className="object-cover w-[300px] h-auto transition-transform duration-700 rounded-2xl border border-slate-200/10 shadow-sm"
                        loading='lazy'
                      />
                      <AnimatedImage
                        src="/projects/hotdogshelter/hotdogshelter-mobile-2.png"
                        alt="Mobile screenshot"
                        width={400}
                        height={800}
                        placeholder="blur"
                        blurDataURL="/projects/hot-dog-shelter-blur.jpg"
                        className="object-cover w-[300px] h-auto transition-transform duration-700 rounded-2xl border border-slate-200/10 shadow-sm"
                        loading='lazy'
                      />
                    </div>
                  </div>
                </div>
              </section>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
}
