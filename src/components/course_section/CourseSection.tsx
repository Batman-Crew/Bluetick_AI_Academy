import { useState, useRef } from "react";
import { modules } from "@/data/courseData";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ModuleList from "./ModuleList";
import ModuleDetail from "./ModuleDetails";
import React from "react";

const CourseSection = () => {
  const [activeId, setActiveId] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeModule = modules.find((m) => m.id === activeId)!;

  const scroll = (direction: "left" | "right") => {
    const viewport = scrollRef.current?.querySelector("[data-radix-scroll-area-viewport]") as HTMLDivElement | null;
    if (viewport) {
      const scrollAmount = 200;
      viewport.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="w-full bg-[#0c142c] px-4 py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-5 text-center text-3xl font-bold text-primary-foreground md:text-4xl">
        Explore Curriculum
        </h1>
        <p className="text-base mb-10 text-center text-white">112 Hrs Roadmap : Enterprise AI Stack</p>

        {/* Desktop: side by side */}
        <div className="hidden md:grid md:grid-cols-[340px_1fr] md:gap-8">
          <ModuleList activeId={activeId} onSelect={setActiveId} />
          <ModuleDetail module={activeModule} />
        </div>

        {/* Mobile: stacked with horizontal scroll for modules */}
        <div className="md:hidden">
          <div className="relative mb-6">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-card/90 shadow-md text-foreground"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="px-9">
              <ScrollArea ref={scrollRef} className="w-full">
                <div className="flex gap-3 pb-2">
                  {modules.map((mod) => (
                    <button
                      key={mod.id}
                      onClick={() => setActiveId(mod.id)}
                      className={`shrink-0 rounded-xl px-4 py-3 text-left text-sm transition-all ${
                        activeId === mod.id
                          ? "bg-accent text-foreground font-semibold shadow-md"
                          : "bg-card/80 text-muted-foreground"
                      }`}
                    >
                      <span className="block font-semibold">{mod.label}</span>
                      <span className="block text-xs mt-0.5 max-w-[140px] truncate">{mod.title}</span>
                    </button>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" className="hidden" />
              </ScrollArea>
            </div>
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 flex items-center justify-center rounded-full bg-card/90 shadow-md text-foreground"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <ModuleDetail module={activeModule} />
        </div>
      </div>
    </section>
  );
};

export default CourseSection;
