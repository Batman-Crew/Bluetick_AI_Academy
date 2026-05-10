"use client";

import React, { memo } from "react";
import { Code2, Users, Target, ShieldCheck, Server, ArrowRight, ArrowDown } from "lucide-react";

type Track = {
  id: number;
  title: string;
  badge: string;
  subtext: string;
  cta: string;
  href: string;
  ctaTitle?: string;
  secondaryCtas?: Array<{
    label: string;
    cta: string;
    href: string;
    isScroll?: boolean;
  }>;
  isScroll: boolean;
  Icon: React.ComponentType<{ className?: string }>;
  accent: string;       // hex / rgb for accent color
  accentSoft: string;   // tinted/translucent version for badge background
};

const tracks: Track[] = [
  {
    id: 1,
    title: "Software Developers",
    badge: "For Coders",
    subtext:
      "Are you a developer working on backend or frontend?",
    cta: "View full curriculum",
    href: "#courses",
    isScroll: true,
    Icon: Code2,
    accent: "#4ecafc",
    accentSoft: "rgba(78, 202, 252, 0.12)",
  },
  {
    id: 2,
    title: "Non-Technical Professionals",
    badge: "No Coding Required",
    subtext:
      "Operations, Project Management, Business, Marketing, HR, Finance — learn to use, apply, and leverage AI tools.",
    cta: "Explore this track",
    href: "/Gen-AI-for-non-coders",
    isScroll: false,
    Icon: Users,
    accent: "#FD8A55",
    accentSoft: "rgba(253, 138, 85, 0.12)",
  },
  {
    id: 3,
    title: "Graduate Fresher?",
    badge: "Just out of College?",
    subtext:
      "You can start a high paying AI Career with or without coding skills!",
    cta: "View full curriculum",
    href: "#courses",
    ctaTitle: "Are you from Computer Science related backgrounds?",
    secondaryCtas: [
      {
        label: "Are you from Non-Coding background?",
        cta: "Explore this track",
        href: "#courses",
        isScroll: false,
      },
    ],
    isScroll: true,
    Icon: Users,
    accent: "#22c55e",
    accentSoft: "rgba(34, 197, 94, 0.12)",
  },
  {
    id: 4,
    title: "Product Managers",
    badge: "For PMs",
    subtext:
      "Understand AI deeply enough to define the right problems, lead the right conversations, and ship products that actually use AI well.",
    cta: "Explore this track",
    href: "/Gen-AI-for-product-managers",
    isScroll: false,
    Icon: Target,
    accent: "#a78bfa",
    accentSoft: "rgba(167, 139, 250, 0.14)",
  },
  {
    id: 5,
    title: "QA / Testing Engineers",
    badge: "For QA",
    subtext:
      "Learn AI-powered testing and how to test Gen AI & Agentic AI systems.",
    cta: "Explore this track",
    href: "/Gen-AI-for-testing-engineers",
    isScroll: false,
    Icon: ShieldCheck,
    accent: "#34d399",
    accentSoft: "rgba(52, 211, 153, 0.14)",
  },
  {
    id: 6,
    title: "DevOps Engineers",
    badge: "For DevOps",
    subtext:
      "CI/CD for AI, LLMOps, model monitoring, infra for agents — if you already own the pipeline, it's time to own the AI stack too.",
    cta: "Explore this track",
    href: "/Gen-AI-for-Devops-engineers",
    isScroll: false,
    Icon: Server,
    accent: "#fbbf24",
    accentSoft: "rgba(251, 191, 36, 0.14)",
  },
];

const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  if (href.startsWith("#")) {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
};

const TrackCard = ({ track }: { track: Track }) => {
  const {
    Icon,
    accent,
    accentSoft,
    title,
    badge,
    subtext,
    cta,
    href,
    ctaTitle,
    secondaryCtas,
    isScroll,
  } = track;

  return (
    <div
      className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-[#0f1a2e] p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-white/20"
      style={{
        boxShadow: `0 0 0 1px rgba(255,255,255,0.02), 0 12px 24px -16px ${accent}66`,
      }}
    >
      {/* Accent glow on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px opacity-60 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
        }}
      />

      {/* Icon + Title */}
      <div className="mb-5 flex flex-wrap items-center gap-3">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{
            background: accentSoft,
            border: `1px solid ${accent}40`,
          }}
        >
          <Icon className="h-6 w-6" style={{ color: accent }} />
        </div>

        <h3 className="text-white text-[18px] md:text-[20px] font-bold leading-snug">
          {title}
        </h3>
      </div>

      {/* Badge */}
      <div className="mb-4">
        <span
          className="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
          style={{
            background: accentSoft,
            color: accent,
            border: `1px solid ${accent}55`,
          }}
        >
          {badge}
        </span>
      </div>

      {/* Divider */}
      <div
        className="mb-4 h-px w-full"
        style={{
          background: `linear-gradient(90deg, ${accent}55, transparent)`,
        }}
      />

      {/* Subtext */}
      <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed mb-6 flex-1">
        {subtext}
      </p>

      <div className="mt-auto space-y-4">
        {ctaTitle && (
          <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed">
            {ctaTitle}
          </p>
        )}

        <a
          href={href}
          onClick={(e) => isScroll && handleScrollClick(e, href)}
          className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-semibold transition-all duration-300"
          style={{ color: accent }}
        >
          <span>{cta}</span>
          {isScroll ? (
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          ) : (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          )}
        </a>

        {secondaryCtas?.map((secondary) => (
          <div key={secondary.href} className="space-y-2">
            <p className="text-white/70 text-[14px] md:text-[15px] leading-relaxed">
              {secondary.label}
            </p>
            <a
              href={secondary.href}
              onClick={(e) => secondary.isScroll && handleScrollClick(e, secondary.href)}
              className="inline-flex items-center gap-2 text-[14px] md:text-[15px] font-semibold transition-all duration-300"
              style={{ color: accent }}
            >
              <span>{secondary.cta}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const FindYourTrack = () => {
  return (
    <section id="coursess" className="relative w-full overflow-hidden bg-[#0c142c] py-14 md:py-20">
      {/* Subtle dotted grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(120,210,255,0.6) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container min-[1440px]:max-w-[1440px] relative z-10 mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.25em] text-[#4ecafc]/80 mb-3">
            Choose your path below
          </p>
          <h2 className="text-white text-[28px] md:text-[44px] font-bold leading-tight">
            AI is for Everyone.{" "}
            <span className="bg-gradient-to-r from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent">
              Find Your Track.
            </span>
          </h2>
        </div>

        {/* Cards grid: 1-col mobile, 2-col tablet, 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(FindYourTrack);
