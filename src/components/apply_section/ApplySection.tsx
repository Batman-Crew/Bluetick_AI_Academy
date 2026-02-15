// import bgMobile from "@/assets/bg-mobile.jpg";
// import bgDesktop from "@/assets/bg-desktop.jpg";
import { TrendingUp, Percent, Briefcase } from "lucide-react";
import Image from "next/image";
import React from "react";

const stats = [
    {
        number: "Developers",
        description: "(Java, Python, JS, QA, Analyst, etc.)",
        text: <div>Just calling OpenAI APIs Era is over <br /><span className="font-bold text-orange-600">Start building AI systems</span> </div>,
        icon: <Image height={60} width={60} alt="Dashboard settings" src="/img/AI_BG/card1.webp" />,
    },
    {
        number: "Beginner / Non-Technical",
        description: "",
        text: <div>With additional <span className="font-bold text-orange-600">4 weeks</span> of Python bootcamp, we bridge you to the <span className="font-bold text-orange-600">highest paying role in tech! </span></div>,
        icon: <Image height={100} width={100} alt="Graph" src="/img/AI_BG/card2.webp" />,
    },
];

const ApplySection = () => {
    return (
       

        
        
<section className="relative w-full overflow-hidden">
  {/* Background Layer */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url(/img/AI_BG/bggradient.webp)",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: 0.5, // Adjust this (0.1 to 1)
      zIndex: 0,
    }}
  />

  {/* Content Layer */}
  <div className="relative z-10">
    {/* Your content here */}
    <div className="relative z-10 flex flex-col items-center px-5 py-12 md:py-20 max-w-5xl mx-auto">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-heading-dark text-center leading-tight max-w-2xl">
                    Who can Apply?{" "}
                </h1>

                {/* Stat Cards */}
                <div className="mt-10 md:mt-14 w-full grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
  {stats.map((stat,i) => (
    <div
      key={stat.number}
      className="
        flex items-start gap-4
        rounded-2xl p-6
        bg-gradient-to-br from-[#eef2ff] via-[#f5f3ff] to-white
        border border-[#d6ccff]
        shadow-[0_10px_25px_rgba(120,90,255,0.15)]
        transition-all duration-300
        hover:shadow-[0_15px_35px_rgba(120,90,255,0.25)]
      "
    >
      {/* Icon */}
      <div
        className="flex items-center justify-center"
      >
        {stat.icon}
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-1">

        <span className="text-lg md:text-xl font-bold text-slate-800">
          {stat.number}
        </span>

      <span className="text-sm text-slate-600 whitespace-nowrap">
          {stat.description}
        </span>
        </div>

        <span className="text-sm md:text-base font-medium  mt-1">
          {stat.text}
        </span>
      </div>
    </div>
  ))}
</div>


                {/* Bottom text */}

                <a
                    href="#apply-form"
                    className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-semibold rounded-lg text-[16px] min-w-[200px] px-4 py-2.5 text-center mt-10 uppercase inline-block no-underline"
                >
                    APPLY NOW
                </a>


            </div>
  </div>
</section>

    );
};

export default ApplySection;
