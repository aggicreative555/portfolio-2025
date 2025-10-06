import Nav from "../components/Nav";
import Link from "next/link";

export const metadata = {
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
      <main>
        <div className="container mx-auto">
          <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
            <div className="lg:flex lg:justify-between lg:gap-4">
              <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                <h1 className="text-4xl font-bold tracking-wide sm:text-5xl">Aggi Cieplak</h1>
                <h2 className="mt-3 text-lg font-medium tracking-wide sm:text-xl uppercase">JUNIOR FRONTEND DEV</h2>
                <p className="mt-4 max-w-xs">I build creative, practical and structured experiences for the web. 
                </p>
                <Nav/>
                <ul className="ml-1 mt-8 flex items-center">
                  <li className="mr-5 shrink-0 text-xs">
                    <Link className="block hover:text-red-800 transition-all duration-300" href='/' target="_blank" aria-label="GitHub (opens in a new tab)" title="GitHub"> 
                      <span className="sr-only"></span>
                      <svg viewBox="0 0 20 20" className="w-9 h-9"  xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g></g><g id="SVGRepo_tracerCarrier" ></g><g><g id="Page-1" > <g  transform="translate(-140.000000, -7559.000000)" fill="currentColor"> <g transform="translate(56.000000, 160.000000)"> <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"> </path> </g> </g> </g> </g></svg>
                    </Link>
                  </li>
                  <li className="mr-5 shrink-0 text-xs">
                    <Link className="block hover:text-red-800 transition-all duration-300" href='/' target="_blank" aria-label="Linkedin (opens in a new tab)" title="Linkedin"> 
                      <span className="sr-only"></span>
                      <svg className='h-12 w-12' viewBox="0 0 24 24" aria-hidden='true' fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"/>
                      </svg>
                    </Link>
                  </li>
                  <li className="mr-5 shrink-0 text-xs">
                    <Link className="block hover:text-red-800 transition-all duration-300" href='/' target="_blank" aria-label="Brhance (opens in a new tab)" title="Behance"> 
                      <span className="sr-only"></span>
                      <svg fill="currentColor" className="w-9 h-9" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <g></g><g></g><g id="SVGRepo_iconCarrier"> <g> <path d="M344.1,244.5c-4.9-4.2-11-6.3-18.2-6.3c-7.8,0-13.9,2.2-18.3,6.7c-4.3,4.5-7,10.5-8.2,18.1h52.7 C351.7,254.9,348.9,248.8,344.1,244.5z"></path> <path d="M214.3,266.1c-3.8-1.7-9-2.6-15.8-2.7h-39v42.2H198c6.9,0,12.2-0.9,16-2.8c7-3.5,10.4-10,10.4-19.7 C224.4,274.9,221,269.2,214.3,266.1z"></path> <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M291.6,182.3h67.8V202h-67.8 L291.6,182.3L291.6,182.3z M250.7,310.6c-3,4.9-6.7,9.1-11.2,12.4c-5,3.9-11,6.5-17.9,8c-6.9,1.4-14.3,2.1-22.4,2.1H128V174.9h76.5 c19.3,0.3,33,5.9,41,16.9c4.8,6.7,7.2,14.8,7.2,24.2c0,9.6-2.4,17.4-7.3,23.3c-2.7,3.3-6.8,6.3-12.1,9c8.1,3,14.2,7.6,18.3,14 s6.2,14.1,6.2,23.2C257.8,294.7,255.4,303.1,250.7,310.6z M384,283.2h-85.2c0.5,11.7,4.5,20,12.2,24.7c4.7,2.9,10.3,4.4,16.9,4.4 c6.9,0,12.6-1.8,17-5.4c2.4-1.9,4.5-4.6,6.3-8.1h31.2c-0.8,6.9-4.6,14-11.3,21.2c-10.5,11.4-25.1,17.1-44,17.1 c-15.6,0-29.3-4.8-41.2-14.4c-11.9-9.6-17.9-25.2-17.9-46.8c0-20.3,5.4-35.8,16.1-46.6c10.8-10.8,24.7-16.2,41.8-16.2 c10.2,0,19.4,1.8,27.5,5.5c8.2,3.6,14.9,9.4,20.2,17.3c4.8,6.9,7.9,15,9.3,24.2C383.8,265.4,384.1,273.1,384,283.2z"></path> <path d="M214.8,233.3c4.3-2.6,6.4-7.3,6.4-13.9c0-7.4-2.8-12.2-8.5-14.6c-4.9-1.6-11.1-2.5-18.7-2.5h-34.4v34.9H198 C204.9,237.3,210.4,236,214.8,233.3z"></path> </g> </g>
                      </svg>
                    </Link>
                  </li>
                </ul>

              </header>
              <main className="pt-24 lg:w-[52%] lg:py-24">
                <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                        About me
                    </h2>
                  </div>
                  <div>
                    <p className="mb-4">
                      I am passionate about building creative, practical and structured experiences for the web. The best part of my work lies in the intersection between design and development, creating designs that are not only uniquely aesthetic but are also crafted for performance and usability. 
                    </p>
                    <p className="mb-4">
                      I am currently a Visual Merchandiser at UFF, where I craft user experiences on-site. I contribute to the visual touchpoints of our store and drive sales by using UX principles and Design Thinking to create delightful experiences. 
                    </p>
                    <p className="mb-4">
                      During my UX and Front-end studies, I had a professional UI project for STO Medical, building wireframes that are still used today for their website. Later, I was a development intern in StudVest where we kept up the website and created fun games and user experiences on the student newspaper website. In my free time I’m a content creator, 
                    </p>
                    <p className="mb-4">
                      During my UX and Front-end studies, I had a professional UI project for STO Medical, building wireframes that are still used today for their website. Later, I was a development intern in StudVest where we kept up the website and created fun games and user experiences on the student newspaper website. In my free time I’m a content creator, 
                    </p>
                    <p className="mb-4">
                      As a newly graduated Front-end development student, I’m looking for new opportunities within my educational field, where I can widen my design, UX and development horizons. 
                    </p>
                  </div>
                </section>
                <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                        Experience
                    </h2>
                  </div>
                  <div>
                    <ol className="group/list">
                      <li className="mb-16 h-fit">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 h-fit">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-black sm:col-span-2" aria-label="2024-Present">
                            2024 - Present
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-black">
                              <div>
                                <Link href='/' target="_blank" aria-label='UI Designer, Sto Medial (opens in another tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800 text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                </span>
                                <span>
                                  UI Designer | 
                                  <span className="pl-2 inline-block">STO Medical</span>
                                  <span></span>

                                </span>
                                
                                </Link>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-loose">
                              During my UX and Front-end studies, I had a professional UI project for STO Medical, building wireframes that are still used today for their website. Later, I was a development intern in StudVest where we kept up the website and created fun games and user experiences on the student newspaper website.
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> JavaScript</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Figma</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Tailwind CSS</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-16 h-fit">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 h-fit">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-black sm:col-span-2" aria-label="2024-Present">
                            2024 - Present
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-black">
                              <div>
                                <Link href='/' target="_blank" aria-label='UI Designer, Sto Medial (opens in another tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800 text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                </span>
                                <span>
                                  UI Designer | 
                                  <span className="pl-2 inline-block">STO Medical</span>
                                  <span></span>

                                </span>
                                
                                </Link>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-loose">
                              During my UX and Front-end studies, I had a professional UI project for STO Medical, building wireframes that are still used today for their website. Later, I was a development intern in StudVest where we kept up the website and created fun games and user experiences on the student newspaper website.
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> JavaScript</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Figma</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Tailwind CSS</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mb-16 h-fit">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 h-fit">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-black sm:col-span-2" aria-label="2024-Present">
                            2024 - Present
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-black">
                              <div>
                                <Link href='/' target="_blank" aria-label='UI Designer, Sto Medial (opens in another tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800 text-base">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block">
                                </span>
                                <span>
                                  UI Designer | 
                                  <span className="pl-2 inline-block">STO Medical</span>
                                  <span></span>

                                </span>
                                
                                </Link>
                              </div>
                            </h3>
                            <p className="mt-2 text-sm leading-loose">
                              During my UX and Front-end studies, I had a professional UI project for STO Medical, building wireframes that are still used today for their website. Later, I was a development intern in StudVest where we kept up the website and created fun games and user experiences on the student newspaper website.
                            </p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> JavaScript</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Figma</div>
                              </li>
                              <li className="mr-1.5 mt-2">
                                <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Tailwind CSS</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ol>
                  </div>
                  

                </section>
                <section className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="School projects">
                  <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                        Projects
                    </h2>
                  </div>
                  <div>
                    <ul className="group/list">
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <Link href='/projects/HotDogShelter/' target='_blank' aria-label='My First CSS assignment (opens in a new tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800  group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>Hot Dog Shelter |
                                <span className="pl-1 inline-block">API
                                  <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'>Arrow</span>
                                </span>
                              </span>
                            </Link>
                          </h3>
                        <p className="mt-2 text-sm leading-loose">
                          Enter my a pet adoption website, where I use the Noroff Api and CRUD operations in Vanilla JS to fetch, display and transform data. 
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> JavaScript</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Figma</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Tailwind CSS</div>
                          </li>
                        </ul>
                        </div>
                        <img alt='Project img'
                        loading="lazy"
                        width={200}
                        height={48}
                        decoding="async"
                        className="aspect-video bg-black object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        srcSet=''>
                        </img>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <Link href='/projects/COSMJS/' target='_blank' aria-label='My First CSS assignment (opens in a new tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800  group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>COSM |
                                <span className="pl-1 inline-block">JS Interactions
                                  <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'>Arrow</span>
                                </span>
                              </span>
                            </Link>
                          </h3>
                        <p className="mt-2 text-sm leading-loose">
                          Enter one of my first coding projects, where I dove deep into understanding CSS and HTML accessibility. 
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> JavaScript</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Figma</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Tailwind CSS</div>
                          </li>
                        </ul>
                        </div>
                        <img alt='Project img'
                        loading="lazy"
                        width={200}
                        height={48}
                        decoding="async"
                        className="aspect-video bg-black object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        srcSet=''>
                        </img>
                        </div>
                      </li>
                      <li className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-amber-950/5 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <div className="z-10 sm:order-2 sm:col-span-6">
                          <h3>
                            <Link href='/projects/COSM/' target='_blank' aria-label='My First CSS assignment (opens in a new tab)' className="inline-flex items-baseline font-medium leading-tight text-black hover:text-red-800 focus-visible:text-red-800  group/link text-base">
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>COSM Community Museum
                                <span className="pl-1 inline-block">CSS Project
                                  <span className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden='true'>Arrow</span>
                                </span>
                              </span>
                            </Link>
                          </h3>
                        <p className="mt-2 text-sm leading-loose">
                          Enter one of my first coding projects, where I dove deep into understanding CSS and HTML accessibility. 
                        </p>
                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> JavaScript</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Figma</div>
                          </li>
                          <li className="mr-1.5 mt-2">
                            <div className="flex items-center rounded-full bg-amber-950/10 px-3 py-1 text-xs font-medium leading-5 text-amber-950/80 uppercase "> Tailwind CSS</div>
                          </li>
                        </ul>
                        </div>
                        <img alt='Project img'
                        loading="lazy"
                        width={200}
                        height={48}
                        decoding="async"
                        className="aspect-video bg-black object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        srcSet=''>
                        </img>
                        </div>
                      </li>
                    </ul> 
                  </div>
                </section>
                <footer className="max-w-md pb-16 text-sm text-amber-950/50 sm:pb-0">
                  <p>Designed in Figma and coded in Visual Studio Code by Aggi. Built with React and TailwindCSS, deployed in Vercel.</p>

                </footer>

              </main>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
