import Footer from "@/components/footer";
import Particles from "@/components/particles";
import { navigation } from "@/utils/links";
import { Drama } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          <Link href="/">
            <Drama size={50} color="white" />
          </Link>
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-300 hover:text-cyan-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Kelvin Akaba
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="px-4 my-16 text-center animate-fade-in">
        {/* <h2 className="text-sm text-zinc-500 ">
          I'm building{" "}
          <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-zinc-300"
          >
            unkey.dev
          </Link> to solve API authentication and authorization for developers.
        </h2> */}
        <h2 className="text-sm text-zinc-300">
          I turn complex problems into clean, efficient solutions using the MERN stack—because great software should feel effortless, like magic.
        </h2>
        <h2 className="text-sm text-zinc-300">
          Currently expanding my skills by learning Python.
        </h2>
      </div>
      <div className="w-full mx-auto">
        <Footer />
      </div>
    </div>
  );
}
