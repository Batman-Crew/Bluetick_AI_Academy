import Image from "next/image";
import React from "react";
import { TrendingUp, BarChart3, Briefcase } from "lucide-react";

const stats = [
  {
    number: "₹12 - 45L",
    text: "Salary range for 0-2+ years AI Engineers",
    icon: <TrendingUp className="h-8 w-8 text-[#1e3a8a]" />,
  },
  {
    number: "312 %",
    text: "Growth in AI Engineering roles (LinkedIn 2026)",
    icon: <BarChart3 className="h-8 w-8 text-[#1e3a8a]" />,
  },
  {
    number: "30,000+",
    text: "Unfilled AI Engineer jobs in India",
    icon: <Briefcase className="h-8 w-8 text-[#1e3a8a]" />,
  },
];

const TechLandscapeHero = () => {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #edf8ff 0%, #d5ebff 35%, #c0e2ff 65%, #eaf7ff 100%)",
      }}
    >
      {/* Decorative mesh gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 w-[420px] h-[420px] rounded-full opacity-50 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4ecafc 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-[-100px] w-[380px] h-[380px] rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, #a78bfa 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 left-1/3 w-[420px] h-[420px] rounded-full opacity-35 blur-3xl"
        style={{
          background: "radial-gradient(circle, #7dd3fc 0%, transparent 70%)",
        }}
      />

      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(78,202,252,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center px-5 py-12 md:py-20 max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 text-center leading-tight max-w-2xl">
          The Tech Landscape has shifted.{" "}
          <span className="text-orange-500">
            Have you?
          </span>
        </h2>

        {/* Stat Cards */}
        <div className="mt-10 md:mt-14 w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.number}
              className="
                relative flex items-start gap-4
                rounded-2xl p-6
                bg-white/70
                border border-white/80
                shadow-[0_10px_30px_rgba(78,202,252,0.18)]
                backdrop-blur-md
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_18px_40px_rgba(78,202,252,0.28)]
              "
            >
              {/* Top accent line */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-4 top-0 h-[2px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #4ecafc, #7b61ff, transparent)",
                }}
              />

              {/* Icon */}
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#4ecafc]/15 to-[#7b61ff]/15 border border-[#4ecafc]/20">
                {stat.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-2xl md:text-3xl font-bold text-orange-500">
                  {stat.number}
                </span>
                <span className="text-sm md:text-base font-semibold text-slate-700 mt-1">
                  {stat.text}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <p className="mt-10 md:mt-14 text-lg md:text-xl text-slate-700 text-center font-medium">
          Early movers are{" "}
          <span className="font-bold text-slate-900 relative inline-block">
            Paid Premium
            <svg
              aria-hidden
              className="absolute left-0 right-0 -bottom-1 w-full h-2"
              viewBox="0 0 100 20"
              preserveAspectRatio="none"
              style={{ overflow: 'visible' }}
            >
              <path
                d="M 0 15 Q 25 5, 50 15 T 100 15"
                stroke="#FE4855"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </span>{" "}
          by Companies
        </p>
      </div>
    </section>
  );
};

export default TechLandscapeHero;
