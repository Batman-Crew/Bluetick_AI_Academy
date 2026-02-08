// import bgMobile from "@/assets/bg-mobile.jpg";
// import bgDesktop from "@/assets/bg-desktop.jpg";
import { TrendingUp, Percent, Briefcase } from "lucide-react";
import React from "react";

const stats = [
  {
    number: "₹12-45L",
    text: "Salary range for 0-2+ years AI Engineers",
    icon: <img src="/img/AI_BG/chartimg1.png" />,
  },
  {
    number: "312 %",
    text: "Growth in AI Engineering roles (LinkedIn 2026)",
    icon: <img src="/img/AI_BG/chartimg2.png" />,
  },
  {
    number: "30,000+",
    text: "Unfilled AI Engineer jobs in India",
    icon: <img src="/img/AI_BG/chartimg3.png" />,
  },
];

const TechLandscapeHero = () => {
  return (
    <section 
    style={{
      backgroundImage: `url(/img/AI_BG/TechBack.png)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    className="relative w-full overflow-hidden">
      {/* Background images */}
      {/* <img
        src={bgMobile}
        alt=""
        className="absolute inset-0 w-full h-full object-cover md:hidden"
        aria-hidden="true"
      /> */}
      {/* <img
        src={bgDesktop}
        alt=""
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        aria-hidden="true"
      /> */}

      <div className="relative z-10 flex flex-col items-center px-5 py-12 md:py-20 max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading-dark text-center leading-tight max-w-2xl">
          The Tech Landscape has shifted.{" "}
          <span className="block sm:inline">Have you?</span>
        </h1>

        {/* Stat Cards */}
        <div className="mt-10 md:mt-14 w-full grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
        {stats.map((stat) => (
  <div
    key={stat.number}
    className="
      flex items-start gap-4
      rounded-2xl p-6
      bg-gradient-to-br from-[#eaf6ff] via-[#f7fbff] to-white
      border border-[#b6dcff]
      shadow-[0_0_15px_rgba(180,220,255,0.6)]
      backdrop-blur-sm
      transition-all duration-300
      hover:shadow-[0_0_25px_rgba(150,210,255,0.9)]
    "
  >
    {/* Icon */}
    <div
      className="
        shrink-0 w-12 h-12 rounded-xl
        flex items-center justify-center
      "
    >
      {stat.icon }
    </div>

    {/* Text */}
    <div className="flex flex-col">
      <span className="text-2xl md:text-3xl font-bold text-[#ff8a00]">
        {stat.number}
      </span>

      <span className="text-sm md:text-base font-semibold text-slate-600 mt-1">
        {stat.text}
      </span>
    </div>
  </div>
))}

        </div>

        {/* Bottom text */}
        <p className="mt-10 md:mt-14 text-lg md:text-xl text-foreground/80 text-center">
          Early movers are{" "}
          <span className="font-bold text-foreground">paid premium</span> by
          Companies
        </p>
      </div>
    </section>
  );
};

export default TechLandscapeHero;
