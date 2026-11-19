
import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface FloatingFoodHeroProps {
  title: string;
  description: string;
  images: FloatingImageProps[];
  className?: string;
}

const Swirls = () => (
  <>
    <svg
      className="pointer-events-none absolute -left-40 -top-40 text-[#e9d8c9]"
      width="600"
      height="600"
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M515 181C378 52 129 136 51 294C-27 451 126 600 126 600"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>

    <svg
      className="pointer-events-none absolute -bottom-52 -right-40 text-[#e9d8c9]"
      width="700"
      height="700"
      viewBox="0 0 700 700"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M27 528C194 690 480 637 594 452C709 267 544 2 544 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      />
    </svg>
  </>
);

export function FloatingFoodHero({
  title,
  description,
  images,
  className,
}: FloatingFoodHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[820px] w-full items-center justify-center overflow-hidden bg-[#f8f5ef] py-20 sm:min-h-[820px] sm:py-24 lg:min-h-[850px]",
        className
      )}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Swirls />
      </div>

      {/* Floating food images */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {images.map((image, index) => (
          <img
            key={`${image.alt}-${index}`}
            src={image.src}
            alt={image.alt}
            draggable={false}
            className={cn(
              "absolute select-none object-contain drop-shadow-[0_15px_18px_rgba(0,0,0,0.12)] animate-float",
              image.className
            )}
            style={{
              animationDelay: `${index * 350}ms`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-20 mx-auto w-full max-w-4xl px-6 pt-8 text-center sm:px-10 sm:pt-0">
        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d9c8b7] bg-white/70 px-5 py-2 text-[9px] font-bold uppercase tracking-[0.22em] text-[#a44830] sm:text-xs sm:tracking-[0.25em]">
          <span className="h-2 w-2 rounded-full bg-[#b7472a]" />
          Welcome to The Food District
        </span>

        <h1 className="mx-auto max-w-4xl text-[2.75rem] font-black leading-[0.98] tracking-[-0.055em] text-[#24221f] sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[13px] leading-7 text-[#77716a] sm:mt-7 sm:text-base sm:leading-8 md:text-lg">
          {description}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:mt-9 sm:flex-row sm:gap-4">
          <Link
            href="#menu"
            className="group flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#b7472a] px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#963a23] hover:shadow-xl sm:w-auto"
          >
            Explore our menu
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

          <Link
            href="#about"
            className="flex min-h-12 w-full items-center justify-center rounded-full border border-[#cfc1b3] bg-white/60 px-8 py-4 text-sm font-semibold text-[#24221f] transition-all duration-300 hover:-translate-y-1 hover:bg-white sm:w-auto"
          >
            Discover our story
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-[#9a8c7e] sm:bottom-7">
        <span className="text-[9px] font-semibold uppercase tracking-[0.3em]">
          Scroll to explore
        </span>
        <ArrowDown size={15} className="animate-bounce" />
      </div>
    </section>
  );
}
