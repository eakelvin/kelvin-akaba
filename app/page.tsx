"use client";
import Footer from "@/components/footer";
import Particles from "@/components/particles";
import { navigation } from "@/utils/links";
import { Drama, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// Typing Animation Component
const TypingAnimation = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const words = text.split(' ');

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentIndex < words.length) {
        setDisplayedText(prev => prev + (currentIndex === 0 ? '' : ' ') + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }
    }, delay + (currentIndex * 10)); // 80ms delay between words (faster)

    return () => clearTimeout(timeout);
  }, [currentIndex, words, delay]);

  return (
    <span className="inline-block">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowScrollIndicator(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      {/* Enhanced Navigation */}
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-8">
          <Link href="/" className="group">
            <Drama
              size={50}
              color="white"
              className="transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-300 group-hover:drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            />
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm duration-500 text-zinc-300 hover:text-cyan-300 group transition-all"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Enhanced Glow Lines */}
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.3)]" />

      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={120}
      />

      {/* Enhanced Name with Better Typography */}
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text relative group">
        Kelvin Akaba
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-blue-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.3)]" />

      {/* Enhanced Description with Typing Animation */}
      <div className="px-4 my-16 text-center animate-fade-in max-w-4xl">
        <div className="space-y-4">
          <h2 className="text-base md:text-lg text-zinc-300 leading-relaxed">
            <TypingAnimation
              text="I turn complex problems into clean, efficient solutions using the MERN stack"
              delay={1000}
            />
          </h2>
          <h2 className="text-base md:text-lg text-zinc-300 leading-relaxed">
            <TypingAnimation
              text="—because great software should feel effortless, like magic."
              delay={2000}
            />
          </h2>
          <div className="mt-6">
            <span className="inline-flex items-center px-4 py-2 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-sm text-zinc-400 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              Currently expanding my skills by learning Python
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-zinc-400 hover:text-cyan-300 transition-colors cursor-pointer" />
        </div>
      )}

      <div className="w-full mx-auto">
        <Footer />
      </div>
    </div>
  );
}
