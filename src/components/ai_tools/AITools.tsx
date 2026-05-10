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
      className="relative w-full min-h-[40vh] py-10 md:py-14 flex flex-col items-center justify-center overflow-hidden bg-[#0b1a3d]"
    >
      {/* Dark blue background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4ecafc 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7b61ff 0%, transparent 70%)",
        }}
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(78,202,252,0.4) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 w-full px-2 text-center">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 md:mb-14"
        >
          <h2 className="font-extrabold leading-tight">
            <span
              className="block text-5xl md:text-7xl mb-2 bg-gradient-to-b from-[#4ecafc] via-[#7b61ff] to-[#4ecafc] bg-clip-text text-transparent"
              style={{
                filter: "drop-shadow(0 0 20px rgba(78,202,252,0.2))",
              }}
            >
              50+
            </span>
            <span className="block text-xl md:text-3xl font-bold tracking-widest text-white">
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
            bg-white/80 backdrop-blur-xl
            border border-slate-200/50
            shadow-[0_0_40px_rgba(78,202,252,0.08)]
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
        bg-white/90 backdrop-blur-md
        border border-slate-200/50
        flex flex-col items-center justify-center
        cursor-pointer
        relative overflow-hidden
        flex-shrink-0
        shadow-lg hover:shadow-xl
        transition-all duration-300
      "
      style={{
        boxShadow: `0 4px 20px rgba(0,0,0,0.08), inset 0 0 15px rgba(255,255,255,0.1)`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-slate-100/20 pointer-events-none" />
      <Image
        src={tool.iconSrc}
        alt={tool.label}
        width={200}
        height={200}
        className="w-[65px] h-[70px] md:w-[70px] md:h-[70px] object-contain"
        style={{
          filter: `drop-shadow(0 0 8px ${tool.color}66)`,
        }}
        onError={(e) => {
          console.log(`Failed to load icon: ${tool.iconSrc}`);
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="pb-1 md:pb-2 text-[7px] md:text-[10px] font-semibold uppercase tracking-widest px-1 text-center leading-tight truncate w-full text-slate-800">
        {tool.label}
      </span>
    </motion.div>
  );
}