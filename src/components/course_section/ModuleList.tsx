import { BookOpen, ChevronDown } from "lucide-react";
import { modules } from "@/data/courseData";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

interface ModuleListProps {
  activeId: number;
  onSelect: (id: number) => void;
}

const ModuleList = ({ activeId, onSelect }: ModuleListProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  useEffect(() => {
    const viewport = containerRef.current?.querySelector<HTMLDivElement>(
      '[data-slot="scroll-area-viewport"]'
    );
    if (!viewport) return;
    viewportRef.current = viewport;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = viewport;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 10;
      const hasOverflow = scrollHeight > clientHeight;
      setShowScrollBtn(hasOverflow && !atBottom);
    };

    handleScroll();
    viewport.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      viewport.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    viewportRef.current?.scrollBy({ top: 200, behavior: "smooth" });
  };

  return (
    <div className="relative" ref={containerRef}>
      <ScrollArea className=" h-[40rem] ">
        <div className="">

        {modules?.map((mod) => (
          <button
            key={mod.id}
            onClick={() => onSelect(mod.id)}
            className={cn(
              "flex items-center gap-3  rounded-xl w-full mt-4 p-4 text-left transition-all cursor-pointer duration-200",
              "bg-card border border-border shadow-sm hover:shadow-md",
              activeId === mod.id && "ring-2 ring-primary/20 bg-accent border-primary/20"
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <BookOpen className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-primary">{mod.label}</p>
              <p className="text-sm text-muted-foreground truncate">{mod.title}</p>
            </div>
          </button>
        ))}
        </div>
      </ScrollArea>
      {showScrollBtn && (
        <button
          type="button"
          onClick={handleScrollDown}
          aria-label="Scroll down"
          className={cn(
            "absolute bottom-10 left-1/2 -translate-x-1/2 z-20",
            "flex py-1 px-2 text-sm items-center justify-center rounded-full",
            "bg-white text-blue-600 shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-blue-200",
            "hover:bg-blue-600 hover:text-white hover:shadow-[0_6px_24px_rgba(37,99,235,0.35)] hover:scale-110",
            "transition-all duration-200 cursor-pointer animate-bounce"
          )}
        >
          View more <ChevronDown className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default ModuleList;
