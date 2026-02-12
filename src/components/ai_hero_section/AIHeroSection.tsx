import { Wrench, Brain, CloudUpload, Lightbulb, ArrowUp, Files, Scroll } from "lucide-react";
import React from "react";

const features = [
  { icon: Wrench, label: "Hands-on projects" },
  { icon: Brain, label: "Data Analysis Dashboard with Automated Insights" },
  { icon: CloudUpload, label: "End-to-End Supervised ML Pipeline" },
  { icon: Files, label: "Enterprise Document Q&A System with RAG" },
  { icon: Scroll, label: "Enterprise Data Assistant (Natural Lang SQL Queries)" },
  { icon: Lightbulb, label: "Real-World Capstone Project (ML Foundation to Advanced Agentic systems)" },

];

const AIHeroSection = () => {
  return (
    <section
    className="relative w-full overflow-hidden bg-[#0c142c] py-10"
  >
    {/* Content */}
    <div className="relative z-10 flex items-center justify-center px-4 ">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">

        {/* Left / Text content */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white">
            Become a production-ready
          </p>

          <h1 className="mb-2 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            <span className="text-[#4ecafc]">AI Engineer</span>
            <br />
            <span className="text-white">in 14 Weekends</span>
          </h1>

          <p className="mt-4 text-base text-white sm:text-lg">
            with a{" "}
            <span className="font-bold text-[#4ecafc]">
              Strong GitHub Portfolio
            </span>
          </p>
  
          {/* Features */}
          <ul className="mt-10 sm flex flex-col gap-2 items-start space-y-4">
            {features.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 text-left justify-start"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-[#4ecafc]" />
                </span>
                <span className="text-sm md:text-nowrap text-white sm:text-base">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </div>
  
        {/* Right / Stat card */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-end gap-3">
            <ArrowUp className="h-10 w-10 text-white animate-bounce" />
            <span className="text-5xl font-black text-[#4ecafc] sm:text-7xl lg:text-8xl">
              60-150%
            </span>
          </div>
  
          <p className="text-sm font-semibold uppercase tracking-widest text-white">
            Avg Jump in Salaries
          </p>
        </div>
  
      </div>
    </div>
  </section>  
  );
};

export default AIHeroSection;
