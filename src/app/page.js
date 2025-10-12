import Nav from "../components/Nav";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import HandwritingAnimation from "@/components/HandwritingAnimation";
import FadeInText from "@/components/FadeInText";
import SvgSection from "@/components/SvgSection";

export const metadata = {
  metadataBase: new URL("https://aggi-cieplak.com"),
  title: "Aggi Cieplak | Front-end Portfolio",
  description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
  openGraph: {
    title: "Aggi Cieplak | Front-end Portfolio",
    description: "Hi, I'm a junior front-end developer who builds creative, practical and structured experiences for the web. I'm seeking new job opportunities within my field!",
    url: "https://aggicieplak.com",
    images: ["/assets/portfolio-mini.jpg"],
  },
};

export default function Home() {
  return (
    <>
      <div className="mx-4 md:mx-0">
        <div className="container mx-auto">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-8">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                <div className="flex flex-col gap-4 font-garamond cursor-default">
                  <HandwritingAnimation/>
                  <FadeInText as='h2' delay={0.2} className='mt-3 text-lg tracking-wider sm:text-xl uppercase' >
                    JUNIOR FRONTEND DEV
                  </FadeInText>
                  <FadeInText as='p' delay={0.4} className='mt-4 max-w-xs' >
                    I build creative, practical and structured experiences for the web. 
                  </FadeInText>
                </div>
                <Nav/>
                <SvgSection/>
              </header>
              <main className="pt-24 lg:w-[52%] lg:py-24">
                <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me" id='about'>
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only font-garamond">
                        About me
                    </h2>
                  </div>
                  <div className="font-garamond tracking-wider cursor-default space-y-4">
                    <FadeInText as='p' delay={0.2}>
                      I am passionate about building <span aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">creative, </span><span  aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">practical </span>and<span  aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300"> structured</span> experiences for the web. The best part of my work lies in the intersection between design and development, creating designs that are not only <span  aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300"> uniquely aesthetic</span> but are also crafted for <span  aria-hidden='true' className="font-semibold focus:tracking-widest duration-300"> performance </span> and <span  aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300"> usability</span>.
                    </FadeInText>
                    <FadeInText as='p' delay={0.4}>
                      I am currently a <span  aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300"> Visual Merchandiser</span> at UFF, where I craft user experiences on-site. I contribute to the visual touchpoints of our store and drive sales by using UX principles and Design Thinking to create delightful experiences. 
                    </FadeInText>
                    <FadeInText as='p' delay={0.8}>
                      During my UX and Front-end studies, I had a professional UI project for <span  aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">STO Medical</span>, building wireframes that are still used today for their website. Later, I was a development intern in <span  aria-hidden='true' className="font-semibold hover:tracking-widest focus:tracking-widest duration-300">StudVest</span> where we debugged the website and created fun games for students to experience. In my free time I’m a content creator and artist. 
                    </FadeInText>
                    <FadeInText as='p' delay={1} className='mb-4'>
                      As a newly graduated Front-end development student, I’m looking for new opportunities within my educational field, where I can widen my design, UX and development horizons. 
                    </FadeInText>
                  </div>
                </section>
                <section className="font-garamond mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience" id='experience'>
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                        Experience
                    </h2>
                  </div>
                  <div>
                    <ExperienceSection/>
                  </div>
                </section>
                <section className="font-garamond mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="School projects" id='projects'>
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
                        Projects
                    </h2>
                  </div>
                  <div>
                    <ProjectsSection/> 
                  </div>
                </section>
                <footer className="font-garamond max-w-md pb-16 text-sm text-amber-950/50 sm:pb-0 cursor-default">
                  <FadeInText as='p' delay={0.4} className=''>Designed in Figma and coded in Visual Studio Code by Aggi. Built with NextJS and TailwindCSS. Deployed in Vercel.
                  </FadeInText>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
