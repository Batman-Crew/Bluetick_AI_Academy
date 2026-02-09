"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Tool = {
  label: string;
  iconSrc: string;
  color: string;
};

const aiTools: Tool[] = [
  { label: "ChatGPT", iconSrc: "/assets/ai_icons/chatgpt_PNG.png", color: "#10a37f" },
  { label: "Midjourney", iconSrc: "/assets/ai_icons/midjourney.png", color: "#ffffff" },
  { label: "Claude AI", iconSrc: "/assets/ai_icons/icons8-claude-ai-50.png", color: "#ffffff" },
  { label: "Gemini", iconSrc: "/assets/ai_icons/gemini-ai.png", color: "#4e8cff" },
  { label: "Github Copilot", iconSrc: "/assets/ai_icons/icons8-github-copilot-50.png", color: "#10a37f" },
  { label: "Deepseek", iconSrc: "/assets/ai_icons/icons8-deepseek-50.png", color: "#ffffff" },
  { label: "Perplexity AI", iconSrc: "/assets/ai_icons/icons8-perplexity-ai-50.png", color: "#ffffff" },
  { label: "Windsurf", iconSrc: "/assets/ai_icons/icons8-windsurf-editor-50.png", color: "#ffffff" },
  { label: "Cursor", iconSrc: "/assets/ai_icons/icons8-cursor-ai-50.png", color: "#ffffff" },
  { label: "Character AI", iconSrc: "/assets/ai_icons/icons8-character-ai-50.png", color: "#ffffff" },
  { label: "Copy AI", iconSrc: "/assets/ai_icons/icons8-copy-ai-50.png", color: "#9cd3ff" },
  { label: "Paradox AI", iconSrc: "/assets/ai_icons/icons8-paradox-ai-50.png", color: "#7b61ff" },
  { label: "Jasper", iconSrc: "/assets/ai_icons/jasper-ai.png", color: "#ff4ecd" },
];

export default function AIDashboardSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll || !scrollRef.current) return;

    const el = scrollRef.current;
    const id = setInterval(() => {
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(id);
  }, [autoScroll]);

  return (
    <section
      style={{
        backgroundImage: `url('/img/AI_BG/ai_bg1.webp')`,
        backgroundPosition: "center 10%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full min-h-[70vh] flex flex-col items-center justify-center overflow-hidden"
    >
      
      <div className="relative z-10 w-full max-w-[1200px] px-2 text-center">
        {/* HEADING — SAME FOR MOBILE & DESKTOP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-white font-extrabold leading-tight">
            <span className="block text-5xl md:text-7xl mb-2">50+</span>
            <span className="block text-xl md:text-3xl tracking-widest">
              AI TOOLS &<br /> TECHNOLOGIES
            </span>
          </h2>
        </motion.div>

        {/* Glass pill */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
          className="
            flex gap-2 md:gap-6
            px-4 md:px-8 py-6 md:py-10
            max-w-full md:max-w-[1000px]
            mx-auto
            overflow-x-auto
            rounded-[1rem]
            bg-white/5 backdrop-blur-xl
            border border-white/10
            shadow-[0_20px_50px_rgba(0,0,0,0.4)]
            hide-scrollbar
          "
        >
          {aiTools.map((tool, idx) => (
            <motion.div
              key={`${tool.label}-${idx}`}
              whileHover={{ scale: 1.05 }}
              className="
                min-w-[80px] h-[80px]
                md:min-w-[140px] md:h-[140px]
                rounded-3xl
                bg-white/20 md:bg-white/10 backdrop-blur-md md:backdrop-blur-3xl
                border border-white/30 md:border-white/20
                flex flex-col items-center justify-center
                cursor-pointer
                relative overflow-hidden
                flex-shrink-0
              "
              style={{
                boxShadow: `inset 0 0 15px rgba(255,255,255,0.05), 0 0 25px ${tool.color}33`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 md:from-white/5 via-transparent to-white/15 md:to-white/10 pointer-events-none" />
                <Image
                  src={tool.iconSrc}
                  alt={tool.label}
                  width={45}
                  height={45}
                  className=" mb-1 md:mb-2 object-contain"
                  style={{
                    filter: `drop-shadow(0 0 10px ${tool.color}aa)`,
                  }}
                  onError={(e) => {
                    console.log(`Failed to load icon: ${tool.iconSrc}`);
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <span className="text-[8px] md:text-[11px] font-semibold uppercase tracking-widest text-white/90 px-1 md:px-2 text-center">
                  {tool.label}
                </span>
              </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
