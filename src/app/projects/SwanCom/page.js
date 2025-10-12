import AnimatedImage from "@/components/AnimatedImage";
import AnimatedLinks from "@/components/AnimatedLinks";
import AnimatedTags from "@/components/AnimatedTags";
import BackButton from "@/components/buttons/BackButton";
import CopyLinkButton from "@/components/buttons/CopyButton";
import FadeInText from "@/components/FadeInText";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  metadataBase: new URL("https://aggi-cieplak.com"),
  title: "Aggi Cieplak | SwanCom",
  description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
  icon: "/assets/favicon/favicon.ico",
  apple: "/apple-touch-icon.png",
  openGraph: {
    title: "Aggi Cieplak | Front-end Portfolio",
    description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
    url: "https://aggicieplak.com",
    images: ["/assets/portfolio-mini.jpg"],
  },
};

const linkData = [
  { title: 'Github', href: 'https://github.com/NoroffFEU/jsfw-2025-v1-js-frameworks-25'},
]

const tags = [ 'E-commerce','React', 'Tailwind', 'Javascript', 'Zustand', 'Cart', 'API', ]

export default function SwanCom() {
    return (
    <div className="mx-4 md:mx-0">
      <div className="container mx-auto">
        <div className="min-h-screen w-full px-6 py-12 md:px-12 md:py-16 lg:py-8">
          <div className="lg:flex items-start lg:justify-between md:gap-32">
            <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col md:gap-10 gap-4 lg:py-24">
              <BackButton className="flex gap-2 flex-row uppercase text-sm font-medium hover:text-red-800 group font-garamond cursor-pointer "/>
              <div className="relative cursor-pointer font-garamond flex justify-between">
                <div className="">
                  <FadeInText as='h3' delay={0.2} >
                      <Link 
                        href="https://swancom.netlify.app/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title="Deployed website on Netlify"
                        aria-label="Deployed webiste on Netlify (opens in a new tab)"
                        className="text-crimson uppercase inline-flex flex-wrap items-baseline font-semibold tracking-wider leading-tight hover:text-red-800 hover:-translate-y-1 duration-300 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl md:mb-4 "
                      >
                        SwanCom |
                        <span className="pl-1 inline-block">
                          E-commerce
                          <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                            <ArrowUpRight/>
                          </span>
                        </span>
                      </Link>
                  </FadeInText>
                  <FadeInText as='p' delay={.4}>
                    <CopyLinkButton link="https://aggi-cieplak-h0s4aj1l0-aggicreative555s-projects.vercel.app/projects/SwanCom" />
                  </FadeInText>
                  <FadeInText as='p' delay={0.4} className='mt-4 text-sm leading-loose tracking-wider '>
                    Enter SwanCom, a clean and elegant e-commerce website. This website was built as my first <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">JS Frameworks</span> assignment. The store allows users to browse products, view product details, add products to their cart, and complete a checkout process. Users can also contact the store via a contact form with validation. It features <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">Zustand Store</span>&<span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">Cart Interactions</span>,<span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">API fetch</span> using <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">React</span> and styling in <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">Tailwind CSS</span>.
                  </FadeInText>
                  <AnimatedLinks links={linkData}/>
                  {/* Technologies */}
                  <AnimatedTags tags={tags}/>
                </div>
              </div>
            </aside>
            <main className="pt-24 lg:w-[52%] lg:py-24">
              <section
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Project Images"
                id="images"
              >
                <div className="space-y-12">
                  <AnimatedImage
                    src="/projects/swancom/swancom-full-h.png"
                    alt="Website screenshot"
                    width={1200}
                    height={800}
                    placeholder="blur"
                    blurDataURL="/projects/rat-central-blur.jpg"
                    className="object-cover w-full h-auto border border-slate-200/10 shadow-sm"
                  />
                  <div className="flex md:flex-row gap-4 w-full overflow-hidden items-start md:justify-between">
                    <AnimatedImage
                      src="/projects/swancom/swancom-mobile-1.png"
                      alt="Mobile screenshot"
                      width={400}
                      height={800}
                      placeholder="blur"
                      blurDataURL="/projects/swancom-blur.jpg"

                      className="object-cover w-[300px] h-auto transition-transform duration-700 rounded-2xl border border-slate-200/10 shadow-sm"
                      loading='lazy'
                    />
                    <AnimatedImage
                      src="/projects/swancom/swancom-mobile-2.png"
                      alt="Mobile screenshot"
                      width={400}
                      height={800}
                      placeholder="blur"
                      blurDataURL="/projects/swancom-blur.jpg"

                      className="object-cover w-[300px] h-auto transition-transform duration-700 rounded-2xl border border-slate-200/10 shadow-sm"
                      loading='lazy'
                    />
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
