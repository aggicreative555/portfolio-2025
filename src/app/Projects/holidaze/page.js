"use client";
import AnimatedImage from "@/components/AnimatedImage";
import AnimatedLinks from "@/components/AnimatedLinks";
import AnimatedTags from "@/components/AnimatedTags";
import BackButton from "@/components/buttons/BackButton";
import UXToggle from "@/components/buttons/UXToggle";
import FadeInText from "@/components/FadeInText";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// export const metadata = {
//   metadataBase: new URL("https://aggi-cieplak.com"),
//   title: "Aggi Cieplak | Holidaze",
//   description: "Enter Hot Dog Shelter, a pet adoption website where you can view pets, create and edit your pet post using Vanilla Js and API CRUD operations. Styled with Tailwind CSS.",
//   openGraph: {
//     title: "Aggi Cieplak | Front-end Portfolio",
//     description: "Enter Holidaze, a pet adoption website where you can view pets, create and edit your pet post using Vanilla Js and API CRUD operations. Styled with Tailwind CSS.",
//     url: "https://aggi-cieplak.com",
//     images: ["/assets/portfolio-mini.jpg"],
//   },
// };

const linkData = [
  { title: 'Github', href: 'https://github.com/aggicreative555/hot-dog-shelter'},
  { title: 'Github Project', href: 'https://github.com/users/aggicreative555/projects/10/views/1'},
]

const tags = [ 'React', 'Zustand', 'TailwindCSS', 'Vite', 'API', 'CRUD', 'WCAG', 'Postman', 'Git', 'SPA']

export default function Holidaze() {

  const [isFrontend, setIsFrontend] = useState(true);
  const [play, setPlay] = useState(false);
  return (
    <div className="mx-4 md:mx-0">
      <div className="container mx-auto">
        <div className="min-h-screen w-full px-6 py-12 md:px-12 md:py-16 lg:py-8">
          <div className="lg:flex items-start lg:justify-between md:gap-32">
            <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col md:gap-10 gap-4 lg:py-24">
              <BackButton className="flex gap-2 flex-row uppercase text-sm font-medium hover:text-red-800 group font-garamond cursor-pointer "/>
              <div className="relative cursor-pointer font-garamond">
                <UXToggle setValue={setIsFrontend}/>
                <FadeInText as='h3' delay={0.2} >
                    <Link 
                      href="https://hotdogshelter.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Deployed website on Netlify"
                      aria-label="Deployed webiste on Netlify (opens in a new tab)"
                      className="text-crimson uppercase inline-flex flex-wrap items-baseline font-semibold tracking-wider leading-tight hover:text-red-800 hover:-translate-y-1 duration-300 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl md:mb-4 "
                    >
                      HoliDaze |
                      <span className="pl-1 inline-block">
                        Vacation booking
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                          <ArrowUpRight/>
                        </span>
                      </span>
                    </Link>
                </FadeInText>
                <FadeInText as='p' delay={0.4}>
                </FadeInText>
                <FadeInText as='p' delay={0.4}>
                  {isFrontend ? (
                  <span className="flex flex-col">
                    <span className="cursor-default">
                      Enter Holidaze, a website that looks like a <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">a vintage vacation </span> postcard. 
                      <span> On this website you can </span> 
                      <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300"> login as a venue manager or a customer, view API venues, create a venue, edit a venue, make a booking and view bookings. </span> Other funcitonalities include: search with debounce and real time results, filtering by 10+ parameters, real-time form validation and error messages. It's fully responsive and features modals for booking confirmation and checking bookings. 
                    </span>
                    <span className="mt-5">
                      I used React to maintain and SPA, and have a clean and modular component setup. Its useEffect makes it easy to fetch API data, and useState to create great UX form feedback. Then Tailwind  for styling as it works well with SPA. Lastly, Zustand to manage the booking storage and states. 
                    </span>
                    <span className="mt-5">
                      This website was made as a part of my studies at Noroff School of Technology. 
                    </span>
                  </span>
                  ) : (
                     <span className="cursor-default">
                        Enter Holidaze, a website that looks like a <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">a vintage vacation </span> postcard. 
                        <span> This design features </span> 
                        <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300"> a modern take on a vintage style. </span> <span> Other funcitonalities include: search with debounce and real time results, filtering by 10+ parameters, real-time form validation and error messages. It's fully responsive and features modals for booking confirmation and checking bookings. 
                        </span>
                      <span className="mt-5">
                        I used React to maintain and SPA, and have a clean and modular component setup. Its useEffect makes it easy to fetch API data, and useState to create great UX form feedback. Then Tailwind  for styling as it works well with SPA. Lastly, Zustand to manage the booking storage and states. 
                      </span>
                      <span className="mt-5">
                        This website was made as a part of my studies at Noroff School of Technology. 
                      </span>
                  </span>
                  )}
                  
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
                <AnimatePresence>
                  <motion.div 
                  className="space-y-12"
                  key={isFrontend ? 'fe-images' : 'ux-images'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  >
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
                      {play ? (
                        <video
                          className='w-full h-full object-cover'
                          autoPlay
                          controls
                        >
                          <source src='' type='video/webm' />
                        </video>
                      ) : ( 
                        <button onMouseEnter={() => setPlay(true)} className="w-full h-full">
                          <AnimatedImage
                            src="/projects/hotdogshelter/hotdogshelter-mobile-1.png"
                            width={400}
                            height={800}
                            title="Hover to play video"
                            alt="Holidaze website screenshot"
                            placeholder="blur"
                            blurDataURL="/projects/hot-dog-shelter-blur.jpg"
                            className="object-cover w-[300px] h-auto transition-transform duration-700 rounded-2xl border border-slate-200/10 shadow-sm"
                            loading='lazy'
                          />
                        </button>
                      )}
                      <div className="flex flex-col gap-10 items-start">
                        <AnimatedImage
                          src={
                                isFrontend
                                  ? "/projects/hotdogshelter/frontend-1.png"
                                  : "/projects/hotdogshelter/ux-1.png"
                              }
                          alt={
                                isFrontend
                                  ? "frontend screenshot"
                                  : "ux screenshot"
                              }
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
                  </motion.div>
                </AnimatePresence>
              </section>
            </main>

          </div>
        </div>
      </div>
    </div>
  );
}
