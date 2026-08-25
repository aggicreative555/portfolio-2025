import AnimatedImage from "@/components/AnimatedImage";
import AnimatedLinks from "@/components/AnimatedLinks";
import AnimatedTags from "@/components/AnimatedTags";
import BackButton from "@/components/buttons/BackButton";
import FadeInText from "@/components/FadeInText";
import VideoWithLoader from "@/components/video/VideoWithLoader";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const linkData = [
  { title: 'Figma', href: 'https://www.figma.com/design/6fySpK1gDW12Hzi05SEdpX/EP-Android-App---Design-System?node-id=0-1&t=7gSjxzzkD79NFGJR-1'},
]

const tags = ['Figma','Prototype', 'Wireframing', 'UX Interviews', 'Case Study', 'Low Fidelity Wirefames']

export default function WoodlandTrust() {
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
                      href="https://www.figma.com/design/6fySpK1gDW12Hzi05SEdpX/EP-Android-App---Design-System?node-id=0-1&t=7gSjxzzkD79NFGJR-1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Figma Prototype"
                      aria-label="Figma Prototype (opens in a new tab)"
                      className="text-crimson uppercase inline-flex flex-wrap items-baseline font-semibold tracking-wider leading-tight hover:text-red-800 hover:-translate-y-1 duration-300 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl md:mb-4 "
                    >
                      Woodland Trust |
                      <span className="pl-1 inline-block">
                        Tree Identification App
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                          <ArrowUpRight/>
                        </span>
                      </span>
                    </Link>
                </FadeInText>
                <FadeInText as='p' delay={.4}>
                </FadeInText>
                <FadeInText as='p' delay={0.4} className='mt-4 text-sm leading-loose tracking-wider cursor-default '>
                  Enter Woodland trust, a trail finding app where you can <span aria-hidden='true' className="font-semibold  duration-300">identify trees, find your trail, and learn about different trails nearby</span>. This is a highly interactive prototype built using <span aria-hidden='true' className="font-semibold   duration-300">Figma</span>. As it was a part of my UI/UX studies for Noroff, it includes a<span aria-hidden='true' className="font-semibold   duration-300"> UX case study</span> and <span aria-hidden='true' className="font-semibold   duration-300">wireframes</span>.
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
                <VideoWithLoader src="/projects/woodland/video-1.mp4" poster="/projects/woodland/mobile-1.png" alt="Woodland project video" className="w-fit h-[600px] mx-auto border-4 border-black" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <AnimatedImage
                    src="/projects/woodland/mobile-2.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover"
                  />
                  <AnimatedImage
                    src="/projects/woodland/mobile-3.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover"
                  />
                  <AnimatedImage
                    src="/projects/woodland/mobile-4.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover"
                  />
                  <AnimatedImage
                    src="/projects/woodland/mobile-6.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover"
                  />
                  <AnimatedImage
                    src="/projects/woodland/mobile-7.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover"
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
