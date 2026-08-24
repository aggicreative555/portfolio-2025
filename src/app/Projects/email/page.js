import AnimatedImage from "@/components/AnimatedImage";
import AnimatedLinks from "@/components/AnimatedLinks";
import AnimatedTags from "@/components/AnimatedTags";
import BackButton from "@/components/buttons/BackButton";
import FadeInText from "@/components/FadeInText";

const tags = [ 'MJML','HTML', 'CSS', 'Nodemailer', 'Client', 'WCAG','Responsive']

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
                  <div className="text-crimson uppercase inline-flex flex-wrap items-baseline font-semibold tracking-wider leading-tight focus-visible:text-red-800 text-xl sm:text-2xl lg:text-3xl md:mb-4">
                      Brandmail |
                      <span className="pl-1 inline-block">
                        MJML Template
                        <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-2 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1 -translate-y-1 ">
                        </span>
                      </span>
                  </div>
                </FadeInText>
                <FadeInText as='p' delay={.4}>
                </FadeInText>
                  <FadeInText as='p' delay={0.4} className='mt-4 text-sm leading-loose tracking-wider '>
                    A social media creator inquired about creating an email template. I made this template using <span aria-hidden='true' className="font-semibold 
                     duration-300">MJML</span> and <span aria-hidden='true' className="font-semibold 
                     duration-300">Nodemailer </span> for the creator to use. It features<span aria-hidden='true' className="font-semibold 
                     duration-300"> a post grid, clickable links, a compiler and nodemailer security when sending.</span>
                </FadeInText>
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
                <div className="overflow-hidden h-fit">
                 <AnimatedImage
                    src="/projects/brandmail/brandmail-full-1.png"
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
