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
  { label: "LangChain", iconSrc: "/assets/ai_icons/AI Stack Logos/LangChain_Logo.webp", color: "#2d6b4f" },
  { label: "LangGraph", iconSrc: "/assets/ai_icons/AI Stack Logos/LangGraph.webp", color: "#4ecafc" },
  { label: "LlamaIndex", iconSrc: "/assets/ai_icons/AI Stack Logos/LlamaIndex-Ai-Logo.webp", color: "#7b61ff" },
  { label: "Hugging Face", iconSrc: "/assets/ai_icons/AI Stack Logos/Hugging Face.webp", color: "#ffcc00" },
  { label: "ChromaDB", iconSrc: "/assets/ai_icons/AI Stack Logos/ChromaDB.webp", color: "#ff4ecd" },
  { label: "Pinecone", iconSrc: "/assets/ai_icons/AI Stack Logos/Pinecone.webp", color: "#10a37f" },
  { label: "Weaviate", iconSrc: "/assets/ai_icons/AI Stack Logos/Weaviate logo.webp", color: "#00d084" },
  { label: "Crew AI", iconSrc: "/assets/ai_icons/AI Stack Logos/crew-ai logo.webp", color: "#ffffff" },
  { label: "AutoGluon", iconSrc: "/assets/ai_icons/AI Stack Logos/AutoGluon.webp", color: "#ff6b00" },
  { label: "MLFlow", iconSrc: "/assets/ai_icons/AI Stack Logos/MLFlow.webp", color: "#0077b5" },
  { label: "Ragas", iconSrc: "/assets/ai_icons/AI Stack Logos/Ragas Logo.webp", color: "#4ecafc" },
  { label: "GraphRAG", iconSrc: "/assets/ai_icons/AI Stack Logos/GraphRag.webp", color: "#7b61ff" },
  { label: "N8N", iconSrc: "/assets/ai_icons/AI Stack Logos/N8n-logo.webp", color: "#ea4b71" },
  { label: "Cursor", iconSrc: "/assets/ai_icons/AI Stack Logos/Cursor_logo.webp", color: "#ffffff" },
  { label: "Claude", iconSrc: "/assets/ai_icons/AI Stack Logos/Claude Cowork.webp", color: "#d4a574" },
  { label: "MCP", iconSrc: "/assets/ai_icons/AI Stack Logos/MCP.webp", color: "#4ecafc" },
  { label: "Anthropic MCP", iconSrc: "/assets/ai_icons/AI Stack Logos/Antropic MCP.webp", color: "#d4a574" },
  { label: "XGBoost", iconSrc: "/assets/ai_icons/AI Stack Logos/Xgboost.webp", color: "#0077b5" },
  { label: "LightGBM", iconSrc: "/assets/ai_icons/AI Stack Logos/LightGbm.webp", color: "#9cd3ff" },
  { label: "Pandas", iconSrc: "/assets/ai_icons/AI Stack Logos/Pandas.webp", color: "#150458" },
  { label: "Matplotlib", iconSrc: "/assets/ai_icons/AI Stack Logos/Matplotlib.webp", color: "#11557c" },
  { label: "YOLO", iconSrc: "/assets/ai_icons/AI Stack Logos/Yolo.webp", color: "#00d4ff" },
  { label: "DBScan", iconSrc: "/assets/ai_icons/AI Stack Logos/DBScan.webp", color: "#ff6b00" },
  { label: "Statsmodels", iconSrc: "/assets/ai_icons/AI Stack Logos/statsmodels-logo.webp", color: "#4c72b0" },
  { label: "MultiModal AI", iconSrc: "/assets/ai_icons/AI Stack Logos/MultiModal AI.webp", color: "#7b61ff" },
  { label: "Zapier", iconSrc: "/assets/ai_icons/AI Stack Logos/Zapier_logo.webp", color: "#ff4a00" },
];

export default function AIDashboardSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!autoScroll || !scrollRef.current) return;

    const el = scrollRef.current;
    let animationFrame: number;

    const scroll = () => {
      if (!el) return;
      
      // Get the width of one complete set of items
      const itemWidth = el.scrollWidth / 2;
      
      // Increment scroll position
      el.scrollLeft += 1;
      
      // When we've scrolled past the first set, reset to the beginning
      // This creates the seamless loop effect
      if (el.scrollLeft >= itemWidth) {
        el.scrollLeft = 0;
      }
      
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, [autoScroll]);

  return (
    <section
      style={{
        backgroundImage: `url(/img/AI_BG/TechBack.webp)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-full min-h-[40vh] py-7 md:py-10 flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 w-full px-2 text-center">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-14"
        >
          <h2 className="font-extrabold leading-tight">
            <span className="block text-5xl md:text-7xl text-[#4ecafc] mb-2">50+</span>
            <span className="block text-xl md:text-3xl font-bold tracking-widest">
              AI TOOLS &<br /> TECHNOLOGIES
            </span>
          </h2>
        </motion.div>

        {/* Glass pill with infinite scroll */}
        <div
          ref={scrollRef}
          onMouseEnter={() => setAutoScroll(false)}
          onMouseLeave={() => setAutoScroll(true)}
          className="
            flex gap-2 md:gap-6
            px-4 md:px-8 py-6 md:py-10
            max-w-full 
            mx-auto
            overflow-x-auto
            rounded-[1rem]
            bg-[#0c142c]/5 backdrop-blur-xl
            border border-white/10
            hide-scrollbar
          "
        >
          {/* First set of tools */}
          {aiTools.map((tool, idx) => (
            <ToolCard key={`original-${idx}`} tool={tool} />
          ))}
          {/* Duplicate set for seamless loop */}
          {aiTools.map((tool, idx) => (
            <ToolCard key={`duplicate-${idx}`} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Extracted component for cleaner code
function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="
        min-w-[90px] w-[90px] h-[90px]
        md:min-w-[150px] md:w-[150px] md:h-[150px]
        rounded-3xl
        bg-[#0c142c]/20 md:bg-[#0c142c]/10 backdrop-blur-md md:backdrop-blur-3xl
        border border-[#0c142c]/30 md:border-[#0c142c]/20
        flex flex-col items-center justify-center
        cursor-pointer
        relative overflow-hidden
        flex-shrink-0
      "
      style={{
        boxShadow: `inset 0 0 15px rgba(255,255,255,0.05), 0 0 25px ${tool.color}33`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#0c142c]/10 md:from-[#0c142c]/5 via-transparent to-[#0c142c]/15 md:to-[#0c142c]/10 pointer-events-none" />
      <Image
        src={tool.iconSrc}
        alt={tool.label}
        width={200}
        height={200}
        className="w-[65px] h-[70px] md:w-[70px] md:h-[70px] object-contain"
        style={{
          filter: `drop-shadow(0 0 10px ${tool.color}aa)`,
        }}
        onError={(e) => {
          console.log(`Failed to load icon: ${tool.iconSrc}`);
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="pb-1 md:pb-2 text-[7px] md:text-[10px] font-semibold uppercase tracking-widest px-1 text-center leading-tight truncate w-full">
        {tool.label}
      </span>
    </motion.div>
  );
}