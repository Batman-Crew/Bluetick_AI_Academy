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
      <div className="max-w-3xl mx-auto">
        {/* Column Headers */}
        <div className="grid grid-cols-3 gap-1 md:gap-4 mb-8 md:mb-12">
          <div className="flex justify-center">
            <span className="inline-block px-2 sm:px-4 md:px-6 py-1 md:py-2 rounded-full text-white bg-blue-500 text-[10px] sm:text-xs md:text-sm font-semibold text-blue-600 bg-background whitespace-nowrap">
              You Today
            </span>
          </div>
          <div className="flex justify-center items-center gap-0.5 md:gap-2">
            <span className="flex items-center gap-x-1  px-2 sm:px-4 md:px-6 py-1 md:py-2 rounded-full text-white bg-blue-500 text-[10px] sm:text-xs md:text-sm font-semibold text-blue-600 bg-background whitespace-nowrap">
              14 Weekends
            <ArrowRight className="h-3 w-3 md:h-4 md:w-4 text-white flex-shrink-0" />
            </span>
          </div>
          <div className="flex justify-center">
            <span className="inline-block px-2 sm:px-4 md:px-6 py-1 md:py-2 rounded-full text-white bg-blue-500 text-[10px] sm:text-xs md:text-sm font-semibold text-blue-600 bg-background whitespace-nowrap">
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
                <div key={i} className="flex flex-col items-center text-center py-4 sm:py-6  px-1 sm:px-2 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14  flex items-center justify-center text-blue-600 mb-2 sm:mb-3 flex-shrink-0">
                    <IconComponent />
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 leading-tight max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
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
                <div key={i} className="flex flex-col items-center text-center py-4 sm:py-6 sm:px-2 relative min-h-[120px] sm:min-h-[140px] md:min-h-[160px] justify-start">
                  {/* Left Arrow - Always visible */}
                  <div className="absolute left-2 lg:left-4 top-[30px] sm:top-[36px] md:top-[44px] -translate-x-full flex items-center">
                    <div className="w-4 sm:w-4 md:w-6 h-[3px] bg-blue-400"></div>
                    <ArrowRight className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-blue-500 -ml-2" />
                  </div>
                  
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center text-blue-600  flex-shrink-0">
                    <IconComponent  />
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
                    {row.during.text}
                  </p>
                  
                  {/* Right Arrow - Always visible */}
                  <div className="absolute right-2 lg:right-4 top-[30px] sm:top-[36px] md:top-[44px] translate-x-full flex items-center">
                    <div className="w-4 sm:w-4 md:w-6 h-[3px] bg-blue-400"></div>
                    <ArrowRight className="h-2.5 w-2.5 sm:h-4 sm:w-4 text-blue-500 -ml-2" />
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
                <div key={i} className="flex flex-col items-center text-center py-4 sm:py-6  px-1 sm:px-2 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] justify-start">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14  flex items-center justify-center text-blue-600 mb-2 sm:mb-3 flex-shrink-0">
                    <IconComponent />
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-700 font-medium leading-tight max-w-[80px] sm:max-w-[100px] md:max-w-[120px]">
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
