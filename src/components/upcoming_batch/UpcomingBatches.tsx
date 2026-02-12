"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaLock } from "react-icons/fa";

const batches = [
  { date: "28th Feb '26", soldOut: true },
  { date: "7th March '26", progress: 75, action: "Register Now" },
  { date: "21st April '26", icon: true ,action: "Next Cohort"},
];

export default function UpcomingBatches() {
  return (
    <section className="relative w-full overflow-hidden bg-[#060f2d]">
      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-[20%] left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-purple-700/50 blur-[140px]" />
        <div className="absolute bottom-[10%] right-[10%] h-[260px] w-[260px] rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_30%,_#060f2d_85%)]" />
        
        {/* ✨ STARS/DOTS EFFECTS */}
        <div className="absolute top-10 left-10 h-1 w-1 rounded-full bg-white opacity-40 shadow-[0_0_8px_white]" />
        <div className="absolute top-40 right-20 h-1 w-1 rounded-full bg-white opacity-20" />
        <div className="absolute bottom-20 left-1/4 h-1 w-1 rounded-full bg-white opacity-30 shadow-[0_0_5px_white]" />
        
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-6xl px-[clamp(12px,4vw,24px)] pt-[clamp(20px,6vw,80px)] pb-[clamp(32px,8vw,96px)]">
        <h2 className="mb-[clamp(20px,5vw,56px)] text-center font-bold tracking-widest text-white text-[clamp(20px,5vw,36px)]">
          UPCOMING BATCHES
        </h2>

        {/* CARDS */}
        <div className="flex justify-between gap-[clamp(8px,2vw,24px)]">
          {batches.map((b, i) => {
            const isCenter = !!b.progress;

            let cardStyle: React.CSSProperties = {};
            let borderClass = "";

            if (b.soldOut) {
              borderClass = "border-gray-400/40";
              cardStyle = {
                boxShadow: "0 0 18px rgba(148,163,184,0.18)",
                background: "rgba(148,163,184,0.35)"
              };
            } else if (isCenter) {
              borderClass = "border-green-400";
              cardStyle = {
                boxShadow:
                  "0 0 40px rgba(34,197,94,0.7), inset 0 0 18px rgba(34,197,94,0.25)",
                background: 'rgba(34,157,94,0.45)'
              };
            } else {
              borderClass = "border-purple-400";
              cardStyle = {
                boxShadow: "0 0 32px rgba(168,85,247,0.45)",
                background: "rgba(168,85,247,0.25)"
              };
            }

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`
                  relative flex-1
                  rounded-[clamp(16px,3vw,32px)]
                  border ${borderClass}
                  backdrop-blur-xl
                  text-center
                  px-[clamp(8px,2vw,24px)]
                  py-[clamp(10px,2.5vw,28px)]
                `}
                style={cardStyle}
              >
                {/* DATE */}
                <p className="mb-[clamp(6px,1.5vw,20px)] font-extrabold text-gray-100 text-[clamp(11px,2.5vw,18px)]">
                  {b.date}
                </p>

                {/* CENTER AREA */}
                <div className="flex h-[clamp(40px,9vw,100px)] items-center justify-center">
                  {b.soldOut ? (
                    <span
                      className="rotate-[-10deg] rounded border-2 mt-3 px-3 py-0.5 font-extrabold tracking-wide text-[clamp(11px,2.2vw,16px)]"
                      style={{
                        color: "#ff3b3b",
                        borderColor: "#ff3b3b",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.35)",
                      }}
                    >
                      SOLD OUT
                    </span>
                  ) : b.progress ? (
                    <div className="w-full px-2">
                      <div className="h-[clamp(4px,1vw,9px)] w-full rounded-full bg-gray-700">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${b.progress}%`,
                            background:
                              "linear-gradient(90deg,#4ade80,#22c55e)",
                            boxShadow: "0 0 12px #22c55e",
                          }}
                        />
                      </div>
                    </div>
                  ) : (
                    <FaCalendarAlt className="text-[clamp(22px,6vw,48px)] text-purple-300 opacity-90" />
                  )}
                </div>

                {/* BOTTOM ACTION AREA */}
                <div className="mt-[clamp(8px,2vw,22px)] flex items-center justify-center min-h-[1.5em]">
                  {b.soldOut ? (
                    <FaLock className="text-[clamp(12px,2vw,18px)] text-gray-400" />
                  ) : b.action ? (
                    <p
                      className="text-[clamp(11px,2.5vw,17px)] font-semibold"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {b.action}
                    </p>
                  ) : null}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}