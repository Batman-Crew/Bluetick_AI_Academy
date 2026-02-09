import { ArrowRight } from "lucide-react";
import React from "react";

// Simple inline SVG icons to match the design exactly
const CodeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" />
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="8" y="8" width="12" height="12" rx="2" />
    <path d="M4 16V6a2 2 0 012-2h10" />
  </svg>
);

const QuestionIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 9a3 3 0 115 2.83c-.62.4-1 1.04-1 1.73V15" />
    <circle cx="12" cy="18" r="0.5" fill="currentColor" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2l8 4v6c0 5.25-3.5 9.5-8 11-4.5-1.5-8-5.75-8-11V6l8-4z" />
    <path d="M12 8v4M12 15h.01" />
  </svg>
);

const RobotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="5" y="8" width="14" height="12" rx="2" />
    <circle cx="9" cy="13" r="1.5" />
    <circle cx="15" cy="13" r="1.5" />
    <path d="M9 17h6M12 4v4M8 4h8" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 4.5c-2 0-4 1.5-4 4 0 1.5.5 2.5 1.5 3.5s1.5 2 1.5 3.5v3h2v-3c0-1.5.5-2.5 1.5-3.5s1.5-2 1.5-3.5c0-2.5-2-4-4-4z" />
    <path d="M8 8c-1 0-2 .5-2.5 1.5S5 11 5 12c0 2 1.5 3.5 3 4" />
    <path d="M16 8c1 0 2 .5 2.5 1.5S19 11 19 12c0 2-1.5 3.5-3 4" />
  </svg>
);

const ServerIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="16" height="6" rx="1" />
    <rect x="4" y="14" width="16" height="6" rx="1" />
    <circle cx="8" cy="7" r="1" fill="currentColor" />
    <circle cx="8" cy="17" r="1" fill="currentColor" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
    <path d="M12 12v2" />
  </svg>
);

const RocketIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 2c3 3 5 8 5 12 0 2-.5 4-1 5h-8c-.5-1-1-3-1-5 0-4 2-9 5-12z" />
    <circle cx="12" cy="11" r="2" />
    <path d="M7 19c-2 1-3 2-3 2s1-1 2-3M17 19c2 1 3 2 3 2s-1-1-2-3" />
  </svg>
);

const WorkflowIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="9" y="15" width="6" height="6" rx="1" />
    <path d="M6 9v3h6v3M18 9v3h-6" />
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 19a4 4 0 01-.5-7.97A7 7 0 0118.5 12a4.5 4.5 0 01.5 8.96H6z" />
    <path d="M12 12v5M9 15l3 2 3-2" />
  </svg>
);

const MoneyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M12 3v18M8 6c0-1 1.5-2 4-2s4 1 4 2c0 2-4 2.5-4 4.5 0 1 1.5 1.5 4 1.5s4 1 4 2c0 1-1.5 2-4 2s-4-1-4-2" />
  </svg>
);

const rows = [
  {
    before: { Icon: CodeIcon, text: "Backend/frontend developer" },
    during: { Icon: RobotIcon, text: "112 hours of production AI training" },
    after: { Icon: RocketIcon, text: "Shipping RAG systems in production" },
  },
  {
    before: { Icon: CopyIcon, text: "Copy-pasting ChatGPT code" },
    during: { Icon: BrainIcon, text: "Building LLM agents from scratch" },
    after: { Icon: WorkflowIcon, text: "Architecting multi-agent workflows" },
  },
  {
    before: { Icon: QuestionIcon, text: "I don't know MLOps" },
    during: { Icon: ServerIcon, text: "Real enterprise deployment pipelines" },
    after: { Icon: CloudIcon, text: "Owning AI infrastructure end-to-end" },
  },
  {
    before: { Icon: ShieldIcon, text: "Worried about layoffs" },
    during: { Icon: BriefcaseIcon, text: "Portfolio of live AI projects" },
    after: { Icon: MoneyIcon, text: "Multiple offers at ₹18-35 LPA" },
  },
];

const TransformationSection = () => {
  return (
    <section className="w-full py-12 md:py-20 px-2 md:px-4 bg-gradient-to-b from-sky-50 to-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-center text-2xl md:text-4xl font-bold text-neutral-800 mb-8 md:mb-12">
          Your Transformation Journey
        </h2>

        {/* Column Headers */}
        <div className="grid grid-cols-3 gap-1 md:gap-4 mb-8 md:mb-12">
          <div className="flex justify-center">
            <span className="inline-block px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-white bg-[#0c142c] text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
              You Today
            </span>
          </div>
          <div className="flex justify-center items-center gap-0.5 md:gap-2">
            <span className="flex items-center gap-x-1 px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-white bg-[#0c142c] text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
              14 Weekends
            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 text-white flex-shrink-0" />
            </span>
          </div>
          <div className="flex justify-center">
            <span className="inline-block px-3 sm:px-6 md:px-8 py-2 md:py-3 rounded-full text-white bg-[#0c142c] text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
              You After
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="relative grid grid-cols-3 justify-center">
          {/* Left Column - Before */}
          <div className="flex flex-col">
            {rows.map((row, i) => {
              const IconComponent = row.before.Icon;
              return (
                <div key={i} className="flex flex-col items-center text-center py-4 sm:py-6  px-1 sm:px-2 min-h-[120px] sm:min-h-[140px] md:min-h-[180px] justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16  flex items-center justify-center text-blue-600 mb-2 sm:mb-3 flex-shrink-0">
                    <IconComponent />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-tight max-w-[90px] sm:max-w-[120px] md:max-w-[160px]">
                    {row.before.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Middle Column - During (Blue Background) */}
          <div className="lg:px-10">
          <div className="flex flex-col  bg-gradient-to-b from-blue-100 to-blue-50 rounded-xl md:rounded-xl relative mx-0.5 sm:mx-1">
            {rows.map((row, i) => {
              const IconComponent = row.during.Icon;
              return (
                <div key={i} className="flex flex-col items-center text-center py-4 sm:py-6 sm:px-2 relative min-h-[120px] sm:min-h-[140px] md:min-h-[180px] justify-start">
                  {/* Left Arrow */}
                  <div className="absolute left-0 lg:left-2 top-[30px] sm:top-[36px] md:top-[48px] -translate-x-full flex items-center">
                    <div className="w-4 sm:w-5 md:w-8 h-[3px] bg-blue-400"></div>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 -ml-2" />
                  </div>

                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-blue-600  flex-shrink-0">
                    <IconComponent  />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-tight max-w-[90px] sm:max-w-[120px] md:max-w-[160px]">
                    {row.during.text}
                  </p>

                  {/* Right Arrow */}
                  <div className="absolute right-0 lg:right-2 top-[30px] sm:top-[36px] md:top-[48px] translate-x-full flex items-center">
                    <div className="w-4 sm:w-5 md:w-8 h-[3px] bg-blue-400"></div>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500 -ml-2" />
                  </div>
                </div>
              );
            })}
          </div>
          </div>

          {/* Right Column - After */}
          <div className="flex flex-col">
            {rows.map((row, i) => {
              const IconComponent = row.after.Icon;
              return (
                <div key={i} className="flex flex-col items-center text-center py-4 sm:py-6  px-1 sm:px-2 min-h-[120px] sm:min-h-[140px] md:min-h-[180px] justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16  flex items-center justify-center text-blue-600 mb-2 sm:mb-3 flex-shrink-0">
                    <IconComponent />
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium leading-tight max-w-[90px] sm:max-w-[120px] md:max-w-[160px]">
                    {row.after.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
