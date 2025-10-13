"use client"
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Github, Globe, Code } from 'lucide-react'
import Link from 'next/link'
import data from '@/utils/data';
import Image from 'next/image';

export const Project = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);
    const [activeProject, setActiveProject] = useState<number | null>(null);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {data.map((work, index) => (
                    <div
                        key={work.id}
                        className="group relative"
                        onMouseEnter={() => setActiveProject(work.id)}
                        onMouseLeave={() => setActiveProject(null)}
                    >
                        {/* Project Card */}
                        <Card className="bg-zinc-900/50 border-zinc-800/50 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/10">
                            {/* Image Carousel */}
                            <div className="relative">
                                <Carousel
                                    setApi={setApi}
                                    className="w-full"
                                    opts={{
                                        align: "start",
                                        loop: true,
                                    }}
                                >
                                    <CarouselContent>
                                        {work.logo.map((image, imgIndex) => (
                                            <CarouselItem key={imgIndex}>
                                                <div className="relative aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900">
                                                    <Image
                                                        src={image}
                                                        alt={`${work.title} - Screenshot ${imgIndex + 1}`}
                                                        fill
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700/80 text-white" />
                                    <CarouselNext className="right-4 top-1/2 -translate-y-1/2 bg-zinc-800/80 border-zinc-700 hover:bg-zinc-700/80 text-white" />
                                </Carousel>

                                {/* Status Badge */}
                                <div className="absolute top-4 right-4">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400 border border-green-500/30">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                        {work.status === "true" ? "Live" : "In Development"}
                                    </span>
                                </div>
                            </div>

                            <CardContent className="p-6">
                                {/* Project Title */}
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                    {work.title}
                                </h3>

                                {/* Project Description */}
                                <p className="text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {work.description}
                                </p>

                                {/* Skills Tags */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {work.skills.filter(skill => skill.trim() !== '').map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 hover:bg-zinc-700/60 transition-colors"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <Link
                                            href={work.website}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 rounded-lg text-sm font-medium transition-all duration-200 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/25"
                                        >
                                            <Globe className="w-4 h-4 mr-2" />
                                            View Live
                                        </Link>

                                        {work.github && (
                                            <Link
                                                href={work.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center px-4 py-2 bg-zinc-800/60 hover:bg-zinc-700/60 text-zinc-300 border border-zinc-700/50 rounded-lg text-sm font-medium transition-all duration-200 hover:border-zinc-600/50"
                                            >
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </Link>
                                        )}
                                    </div>

                                    <div className="flex items-center space-x-1">
                                        <div className="flex space-x-1">
                                            {work.logo.map((_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className={`w-2 h-2 rounded-full transition-all duration-200 ${dotIndex === current - 1 ? 'bg-cyan-400' : 'bg-zinc-600'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Hover Effect Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg pointer-events-none transition-opacity duration-300 ${activeProject === work.id ? 'opacity-100' : 'opacity-0'
                            }`} />
                    </div>
                ))}
            </div>

            {/* Project Stats */}
            <div className="mt-20 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-white">{data.length}</div>
                        <div className="text-zinc-400 text-sm">Projects Completed</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-white">100%</div>
                        <div className="text-zinc-400 text-sm">Success Rate</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-3xl font-bold text-white">4+</div>
                        <div className="text-zinc-400 text-sm">Technologies</div>
                    </div>
                </div>
            </div>
        </div>
    )
}



// PREVIOUS CODE

// "use client"
// import React, { useEffect, useState } from 'react'
// import { Card, CardContent } from "@/components/ui/card"
// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//     type CarouselApi,
// } from "@/components/ui/carousel"
// import { Progress } from "@/components/ui/progress";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import Link from 'next/link'
// import data from '@/utils/data';
// import Image from 'next/image';

// export const Project = () => {
//     const [api, setApi] = useState<CarouselApi>();
//     const [current, setCurrent] = useState(0);
//     const [count, setCount] = useState(0);
//     const progress = (current * 100) / count;

//     useEffect(() => {
//         if (!api) {
//             return;
//         }

//         setCount(api.scrollSnapList().length);
//         setCurrent(api.selectedScrollSnap() + 1);

//         api.on("select", () => {
//             setCurrent(api.selectedScrollSnap() + 1);
//         });
//     }, [api]);

//     return (
//         <div className="py-4 px-10">
//             {data.map((work) => (
//                 <div key={work.id} className="mb-10">
//                     <Carousel setApi={setApi} className="w-full max-w-full mx-auto">
//                         <CarouselContent>
//                             {work.logo.map((image, index) => (
//                                 <CarouselItem key={index}>
//                                     <Card className='rounded-none'>
//                                         <CardContent className="flex aspect-video items-center justify-center p-6">
//                                             <Image
//                                                 src={image}
//                                                 alt={`Image ${index + 1}`}
//                                                 className='w-full h-full object-contain'
//                                             />
//                                         </CardContent>
//                                     </Card>
//                                 </CarouselItem>
//                             ))}
//                         </CarouselContent>
//                         <CarouselPrevious className="top-[calc(100%+0.5rem)] translate-y-0 left-0" />
//                         <CarouselNext className="top-[calc(100%+0.5rem)] translate-y-0 left-2 translate-x-full" />
//                     </Carousel>

//                     <Progress value={progress} className="mt-4 w-24 ml-auto invisible" />

//                     <div className="text-white mx-auto space-y-4 mt-8">
//                         <h2 className='text-xl font-bold'>
//                             {work.title}
//                         </h2>
//                         <Avatar>
//                             <AvatarImage src="https://github.com/shadcn.png" />
//                             <AvatarFallback>EA</AvatarFallback>
//                         </Avatar>
//                         <p className='text-sm'>
//                             {work.description}
//                         </p>
//                         <div className='mt-1'>
//                             <Link
//                                 href={work.website}
//                                 className='text-cyan-200 hover:underline'
//                             >
//                                 View Project
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     )
// }
