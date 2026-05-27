"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type ServiceItem = {
  name: string;
  image: string;
};

const services: ServiceItem[] = [
  { name: "Full Stack Development", image: "/tracermain.jpeg" },
  { name: "Cybersecurity Solutions", image: "/tracer.png" },
  { name: "DevOps Engineering", image: "/eversuremain.png" },
  { name: "AI Content Creation", image: "/projectmain.png" },
  { name: "Video Production", image: "/overview.png" },
  { name: "Product Marketing", image: "/eversure.png" },
];

export function ServicesPanels() {
  const [activeIndex, setActiveIndex] = useState(2);
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      // Scroll down => content moves right-to-left (scrollLeft increases).
      // Scroll up => content moves left-to-right (scrollLeft decreases).
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      e.preventDefault();
      el.scrollBy({ left: e.deltaY, behavior: "auto" });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel as EventListener);
  }, []);

  return (
    <section
      id="services"
      className="fade-up fade-delay-4 relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] h-screen w-screen overflow-hidden border-y-[10px] border-zinc-900 bg-black"
      aria-label="Services"
    >
      <div
        ref={scrollerRef}
        className="no-scrollbar h-full w-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
      >
        <div className="flex h-full w-max min-w-full">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <article
                key={service.name}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={[
                  "relative h-full snap-start overflow-hidden border-r-[10px] border-zinc-900",
                  // Wider panels (fixed width) so they feel less cramped; scroll reveals the rest.
                  "shrink-0 basis-[78vw] sm:basis-[46vw] lg:basis-[22vw]",
                ].join(" ")}
              >
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  sizes="16.66vw"
                  className={`object-cover transition-all duration-500 ease-out ${isActive ? "grayscale-0" : "grayscale"}`}
                  priority={index < 3}
                />

                <div className="absolute inset-0 bg-black/30" />

                <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3
                    className={`font-mono text-lg font-bold uppercase tracking-[0.08em] text-white transition-opacity duration-300 sm:text-2xl ${isActive ? "opacity-100" : "opacity-0"}`}
                  >
                    {service.name}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
