"use client";

import Link from "next/link";

import { About } from "../utils/interface";
import { SlideIn, Transition } from "./ui/Transitions";
import { TextReveal } from "./ui/Typography";
import { ArrowUpRight } from "./ui/Icons";
import LoaderWrapper from "./LoaderWrapper";

interface HeroProps {
  about: About;
}

const Hero = ({ about }: HeroProps) => {
  return (
    <section className="h-dvh w-dvw overflow-hidden relative">
      <Transition>
        <span className="blob size-1/2 absolute top-20 left-0 blur-[100px]" />
      </Transition>
      <LoaderWrapper>
        <div className="relative h-full w-full">
          <div className="flex items-center justify-center flex-col h-full pb-10">
            <Transition>
              <img
                src="/WhatsApp Image 2024-10-19 at 11.40.57_970515b4.jpg"
                alt={about.name}
                className="rounded-full size-28 object-cover"
              />
            </Transition>
            <div className="py-6 flex items-center flex-col">
              <h2 className="md:text-5xl text-2xl font-bold overflow-hidden">
                <SlideIn>Hello! I&apos;m {about.name}</SlideIn>
              </h2>
              <h1 className="md:text-4xl text-3xl overflow-hidden">
                <SlideIn>{about.title}</SlideIn>
              </h1>
            </div>
            <Transition viewport={{ once: true }} className="w-full">
              <p className="opacity-70 md:text-xl py-4 w-10/12 md:w-2/3 mx-auto flex flex-wrap justify-center gap-2">
                {about.subTitle.split(" ").map((word, index) => (
                  <span key={index}>{word}</span>
                ))}
              </p>
            </Transition>
            <Transition viewport={{ once: true }}>
              <div className="flex flex-col md:flex-row gap-4 w-full justify-center items-center mt-4">
                <Link
                  href={"#contact"}
                  className="px-5 py-3 rounded-full border border-white/50 flex items-center gap-2 group"
                >
                  <TextReveal>Let&apos;s talk</TextReveal>
                  <ArrowUpRight />
                </Link>
                <a
                  href="/resume26.pdf"
                  download
                  className="px-5 py-3 rounded-full border border-white/50 flex items-center gap-2 group hover:bg-primary text-white transition-colors duration-200"
                >
                  <TextReveal>Download Resume</TextReveal>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11.25m0 0l4.5-4.5m-4.5 4.5l-4.5-4.5M4.5 19.5h15" />
                  </svg>
                </a>
              </div>
            </Transition>
          </div>
        </div>
      </LoaderWrapper>
    </section>
  );
};

export default Hero;
