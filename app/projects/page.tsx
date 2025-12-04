"use client"
import React, { useState } from 'react'
import Footer from '@/components/footer'
import { Navigation } from '@/components/nav'
import { Project } from '@/components/project'
import { Header } from '@/components/ui/header'

const page = () => {
    const [activeSection, setActiveSection] = useState('about');

    return (
        <div className="min-h-screen bg-gradient-to-tl from-black via-zinc-900/50 to-black">
            <Header activeSection={activeSection} />

            {/* Hero Section */}
            <div className="relative py-20 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-500 mb-6">
                        My Projects
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        {/* A display of smart solutions and creative applications built with modern technologies. */}
                        Each project represents a unique challenge solved with clean code and thoughtful design.
                    </p>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-zinc-600 to-transparent mt-12"></div>
                </div>
            </div>

            <div className='pb-20'>
                <Project />
            </div>
            <Footer />
        </div>
    )
}

export default page