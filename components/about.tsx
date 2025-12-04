export function About() {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                </h2>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                    I’ve always been curious about how things work. One day I decided to learn coding to build a small app, and before I knew it, I was building full-stack projects. Fast-forward to today, and I've had the privilege of building software for an{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                    >
                        marketing agency
                    </a>
                    , a{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                    >
                        start-up
                    </a>
                    , and an{' '}
                    <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                    >
                        educational management system
                    </a>
                    .
                </p>
                <p>
                    My main focus these days is building accessible user interfaces for our users at{' '}
                    <a
                        href="https://cedirates.com/"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                    >
                        CediRates
                    </a>
                    . I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood.
                    {/* In my free time, I've also released an{' '} */}
                    {/* <a
                        href="#"
                        className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
                    >
                        online video course
                    </a>{' '}
                    that covers everything you need to know to build a web app with the Spotify API. */}
                </p>
                <p>
                    When I'm not at the computer, I'm usually, reading, hanging out with my friends, or playing/watching football.
                </p>
            </div>
        </section>
    );
}
