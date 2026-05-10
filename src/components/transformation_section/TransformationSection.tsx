"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Copy, HelpCircle, ShieldAlert, Brain, Rocket, Workflow, Cloud, Banknote, Trophy } from "lucide-react";

type TransformationPhase = {
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
  color: "gray" | "blue" | "purple" | "orange";
};

const phases: TransformationPhase[] = [
  {
    title: "You Today",
    subtitle: "The Starting Point",
    icon: Code2,
    description: "Software Developer with good coding skills but limited AI expertise",
    color: "gray",
  },
  {
    title: "Week 1-4",
    subtitle: "AI Foundations",
    icon: Brain,
    description: "Learn from scratch: Python, AI Coding, Gen AI & Enterprise Adoption Overview & LLM Architectures",
    color: "blue",
  },
  {
    title: "Week 5-10",
    subtitle: "Build & Deploy",
    icon: Rocket,
    description: "Learn RAG Systems & Agentic AI frameworks to build live AI agents and multi-agent systems",
    color: "purple",
  },
  {
    title: "Week 11-14",
    subtitle: "Master & Own",
    icon: Trophy,
    description: "Deploy production ready AI systems, optimize infrastructure & cost and become an AI Engineer with 100% Career support",
    color: "orange",
  },
];

type TransformationDimension = {
  category: string;
  before: {
    text: string;
    icon: React.ComponentType<{ className?: string }>;
  };
  after: {
    text: string;
    icon: React.ComponentType<{ className?: string }>;
  };
};

const dimensions: TransformationDimension[] = [
  {
    category: "Code Quality",
    before: { text: "Copy-pasting ChatGPT code", icon: Copy },
    after: { text: "Architecting production LLM agents", icon: Workflow },
  },
  {
    category: "LLMOps/Evals Knowledge",
    before: { text: "No deployment experience", icon: HelpCircle },
    after: { text: "Enterprise-grade infrastructure mastery", icon: Cloud },
  },
  {
    category: "Career Impact",
    before: { text: "Worried about job security", icon: ShieldAlert },
    after: { text: "Multiple premium offers (₹12-35 LPA)", icon: Banknote },
  },
  {
    category: "Portfolio",
    before: { text: "Basic tutorial projects", icon: HelpCircle },
    after: { text: "Real RAG systems in production", icon: Trophy },
  },
];

const getColorClasses = (color: string) => {
  const colors = {
    gray: {
      bg: "bg-white/[0.03]",
      border: "border-white/10",
      icon: "text-white/60",
      gradient: "from-white/10 to-white/5",
      accent: "text-white/80",
    },
    blue: {
      bg: "bg-blue-500/[0.08]",
      border: "border-blue-500/30",
      icon: "text-blue-400",
      gradient: "from-blue-500/15 to-blue-500/5",
      accent: "text-blue-300",
    },
    purple: {
      bg: "bg-purple-500/[0.08]",
      border: "border-purple-500/30",
      icon: "text-purple-400",
      gradient: "from-purple-500/15 to-purple-500/5",
      accent: "text-purple-300",
    },
    orange: {
      bg: "bg-orange-500/[0.08]",
      border: "border-orange-500/30",
      icon: "text-orange-400",
      gradient: "from-orange-500/15 to-orange-500/5",
      accent: "text-orange-300",
    },
  };
  return colors[color as keyof typeof colors];
};

const TransformationSection = () => {
  return (
    <section className="relative w-full overflow-hidden py-10 md:py-20 bg-[#0b122b]">
      {/* Background Gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-16 w-[320px] h-[320px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #4ecafc 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-16 w-[320px] h-[320px] rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #FE4855 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-blue-400/80 mb-3">
            Your 14-Weekend Journey
          </p>
          <h2 className="text-white text-[28px] md:text-[42px] font-bold leading-tight max-w-3xl mx-auto">
            From Software Developer to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">AI Engineer</span>
          </h2>
          <p className="text-white/60 text-sm md:text-base mt-4 max-w-2xl mx-auto">
            A structured progression through 4 critical phases that transform your skills, portfolio, and career trajectory
          </p>
        </div>

        {/* Timeline - Phases */}
        <div className="mb-16 md:mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {phases.map((phase, index) => {
              const colors = getColorClasses(phase.color);
              const Icon = phase.icon;
              return (
                <div key={index} className="group relative">
                  {/* Connecting Arrow */}
                  {index < phases.length - 1 && (
                    <div className="hidden md:flex absolute -right-4 top-1/3 z-20">
                      <ArrowRight className={`h-6 w-6 ${colors.icon} opacity-50 group-hover:opacity-100 transition-opacity`} />
                    </div>
                  )}

                  {/* Phase Card */}
                  <div
                    className={`relative rounded-3xl border ${colors.border} ${colors.bg} backdrop-blur-sm p-5 md:p-6 h-full transition-all duration-300 hover:border-opacity-60 hover:bg-opacity-100 group`}
                  >
                    {/* Circle Background */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/5 border ${colors.border} mb-3 md:mb-4`}>
                        <Icon className={`h-6 w-6 ${colors.icon}`} />
                      </div>

                      {/* Content */}
                      <div className="mb-3 md:mb-4">
                        <p className={`text-xs md:text-sm font-semibold uppercase tracking-wider ${colors.accent} mb-1`}>
                          {phase.subtitle}
                        </p>
                        <h3 className="text-white font-bold text-lg md:text-xl">
                          {phase.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-white/70 text-xs md:text-sm leading-relaxed min-h-[60px] md:min-h-[72px]">
                        {phase.description}
                      </p>

                      {/* Progress Indicator - fixed height position */}
                      <div className="mt-auto pt-4 h-5">
                        <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${
                              phase.color === "gray"
                                ? "from-white/50 to-white/30"
                                : phase.color === "blue"
                                ? "from-blue-400 to-blue-600"
                                : phase.color === "purple"
                                ? "from-purple-400 to-purple-600"
                                : "from-orange-400 to-orange-600"
                            }`}
                            style={{ width: `${(index + 1) * 25}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-2xl border border-green-500/30 bg-green-500/[0.08] p-5 md:p-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-green-400 mb-2">112+</p>
            <p className="text-white/80 text-xs md:text-sm">Hours of AI Training</p>
          </div>
          <div className="rounded-2xl border border-blue-500/30 bg-blue-500/[0.08] p-5 md:p-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-blue-400 mb-2">14</p>
            <p className="text-white/80 text-xs md:text-sm">Weekends (126 hours)</p>
          </div>
          <div className="rounded-2xl border border-purple-500/30 bg-purple-500/[0.08] p-5 md:p-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">5+</p>
            <p className="text-white/80 text-xs md:text-sm">Production Projects</p>
          </div>
          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/[0.08] p-5 md:p-6 text-center">
            <p className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">₹12-35</p>
            <p className="text-white/80 text-xs md:text-sm">LPA Job Offers</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Link href="#apply-form">
            <button
              type="button"
              className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-semibold rounded-lg text-[16px] px-8 py-3 text-center uppercase min-w-[280px]"
            >
              START YOUR AI CAREER
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;
