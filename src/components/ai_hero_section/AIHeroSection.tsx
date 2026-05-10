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
    <section className="relative w-full overflow-hidden py-14 md:py-20">
      {/* Layered background */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a0e24 0%, #0c142c 40%, #1a1042 80%, #0c142c 100%)",
        }}
      />
      {/* Mesh glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4ecafc 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7b61ff 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse at center, #FE4855 0%, transparent 70%)",
        }}
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(120,210,255,0.6) 1px, transparent 0)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center px-4">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 lg:gap-16 lg:flex-row lg:items-center lg:justify-between">

          {/* Left / Text content */}
          <div className="max-w-xl text-center lg:text-left">
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#4ecafc]/30 bg-[#4ecafc]/10 px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-[#4ecafc] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4ecafc] animate-pulse" />
              Become a production-ready
            </p>

            <h2 className="mb-2 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              <span className="bg-gradient-to-r from-[#4ecafc] via-[#67e8f9] to-[#4ecafc] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(78,202,252,0.3)]">
                AI Engineer
              </span>
              <br />
              <span className="text-white">in 14 Weekends</span>
            </h2>

            <p className="mt-4 text-base text-white/85 sm:text-lg">
              with a{" "}
              <span className="font-bold text-[#4ecafc] relative inline-block">
                Strong GitHub Portfolio
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-0.5 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, #4ecafc, transparent)",
                  }}
                />
              </span>
            </p>

            {/* Features */}
            <ul className="mt-10 flex flex-col gap-2 space-y-3 w-full">
              {features.map(({ icon: Icon, label }) =>
                label === "Hands-on projects" ? (
                  <li
                    key={label}
                    className="flex items-center gap-3 mx-auto text-center"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4ecafc]/25 to-[#7b61ff]/15 border border-[#4ecafc]/30">
                      <Icon className="h-4 w-4 text-[#4ecafc]" />
                    </span>
                    <span className="text-xl md:text-nowrap text-white font-bold border-b border-[#4ecafc]/40 pb-1">
                      {label}
                    </span>
                  </li>
                ) : (
                  <li
                    key={label}
                    className="group flex items-center gap-3 text-left justify-start rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-sm px-3 py-2.5 transition-all duration-300 hover:border-[#4ecafc]/30 hover:bg-white/[0.05]"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#4ecafc]/20 to-[#7b61ff]/10 border border-[#4ecafc]/25">
                      <Icon className="h-4.5 w-4.5 text-[#4ecafc]" />
                    </span>
                    <span className="text-sm md:text-nowrap text-white/90 sm:text-base font-medium">
                      {label}
                    </span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Right / Stat card */}
          <div className="flex flex-col items-center gap-3">
            <div className="relative rounded-3xl border border-[#4ecafc]/30 bg-gradient-to-br from-[#0a1124]/80 via-[#13193a]/80 to-[#0a1124]/80 backdrop-blur-md px-6 py-6 md:px-10 md:py-8 shadow-[0_0_40px_rgba(78,202,252,0.25)]">
              {/* Top accent bar */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-6 top-0 h-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #4ecafc, #7b61ff, transparent)",
                }}
              />

              <div className="flex items-end gap-3">
                <ArrowUp className="h-9 w-9 md:h-10 md:w-10 text-[#67e8f9] animate-bounce" />
                <span
                  className="text-5xl font-black bg-gradient-to-b from-[#67e8f9] via-[#4ecafc] to-[#7b61ff] bg-clip-text text-transparent sm:text-7xl lg:text-8xl leading-none"
                  style={{
                    filter: "drop-shadow(0 0 30px rgba(78,202,252,0.4))",
                  }}
                >
                  60-150%
                </span>
              </div>

              <p className="mt-3 text-center text-[11px] md:text-sm font-bold uppercase tracking-[0.25em] text-white/90">
                Avg Jump in Salaries
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIHeroSection;
