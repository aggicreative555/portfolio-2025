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
  { title: 'GitHub', href: 'https://github.com/aggicreative555/vacation-booking-holidaze'},
  { title: 'Figma UX/UI', href: 'https://www.figma.com/design/Y1WDXW4CrpQSR02t6wjNDv/Holidaze?node-id=0-1&t=QzJ9KGmpTH7NxQbO-1'},
]

const tags = ['React', 'Zustand', 'TailwindCSS', 'Vite', 'API', 'CRUD', 'WCAG', 'Postman', 'Git', 'SPA']

export default function Holidaze() {
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
                      href="https://vacation-booking-holidaze.netlify.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      title="Netlify Link"
                      aria-label="Netlify Link (opens in a new tab)"
                      className="text-crimson uppercase inline-flex flex-wrap items-baseline font-semibold tracking-wider leading-tight hover:text-red-800 hover:-translate-y-1 duration-300 focus-visible:text-red-800 group/link text-xl sm:text-2xl lg:text-3xl md:mb-4 "
                    >
                      Holidaze |
                      <span className="pl-1 inline-block">
                        Vacation Booking Site
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                          <ArrowUpRight/>
                        </span>
                      </span>
                    </Link>
                </FadeInText>
                <FadeInText as='p' delay={.4}>
                </FadeInText>
                 <FadeInText as='p' delay={0.4}>
                  <span className="flex flex-col">
                    <span className="cursor-default">
                      Enter Holidaze, a website that looks like a <span aria-hidden='true' className="font-semibold  focus:tracking-widest duration-300">a vintage vacation </span> postcard. 
                      <span> On this website you can </span> 
                      <span aria-hidden='true' className="font-semibold  focus:tracking-widest duration-300"> login as a venue manager or a customer, view API venues, create a venue, edit a venue, make a booking and view bookings. </span> Other funcitonalities include: search with debounce and real time results, filtering by 10+ parameters, real-time form validation and error messages. It&apos;s fully responsive and features modals for booking confirmation and checking bookings. 
                    </span>
                    <span className="mt-2">
                      I used React to maintain an SPA, and have a clean and modular component setup and Zustand to manage the booking storage and states. 
                    </span>
                  </span>
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
                    src="/projects/holidaze/holidaze-full-2.png"
                    alt="Website screenshot"
                    width={1521}
                    height={4038}
                    className="border-round-md w-full overflow-hidden"
                  />

                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 h-[600px] mt-10">
                  <AnimatedImage
                    src="/projects/holidaze/holidaze-mobile-5.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover object-[center_20%]"
                  />
                  <AnimatedImage
                    src="/projects/holidaze/holidaze-mobile-full-1.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover object-[center_3%]"
                  />
                  <AnimatedImage
                    src="/projects/holidaze/holidaze-mobile-full-2.png"
                    alt="Website screenshot"
                    width={222}
                    height={432}
                    className="border-round-md h-fit w-fit scale-102 object-cover object-[center_3.5%]"
                  />
                </div>
                 <div className="overflow-hidden h-fit mt-10">
                 <AnimatedImage
                    src="/projects/holidaze/holidaze-full-5.png"
                    alt="Website screenshot"
                    width={1521}
                    height={4038}
                    className="border-round-md w-full overflow-hidden object-top"
                  />
                </div>
                 <div className="overflow-hidden h-fit">
                 <AnimatedImage
                    src="/projects/holidaze/holidaze-full-6.png"
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
