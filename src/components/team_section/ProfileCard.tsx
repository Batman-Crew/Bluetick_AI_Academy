import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface ProfileData {
  id: number;
  name: string;
  role: string;
  experience: string;
  avatar: string;
  bio: string;
  skills?: string[];
  companies?: string[];
}

interface ProfileCardProps {
  profile: ProfileData;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group relative w-full h-full rounded-2xl overflow-hidden flex flex-col bg-[#0a1124] border border-[#4ecafc]/20 shadow-[0_0_25px_rgba(78,202,252,0.1)] transition-all duration-300 hover:border-[#4ecafc]/50 hover:shadow-[0_0_35px_rgba(78,202,252,0.25)]">
      {/* Top accent bar */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, #4ecafc 0%, #7b61ff 50%, #FE4855 100%)",
        }}
      />

      {/* Avatar */}
      <div className="relative bg-[#0c142c] h-[180px] md:h-[260px] overflow-hidden">
        <Image
          fill
          src={profile.avatar}
          alt={profile.name}
          sizes="(max-width: 768px) 50vw, 280px"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {/* Soft fade at bottom into card body */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, transparent, #0a1124)",
          }}
        />

        {/* Experience badge removed from top - will be shown below name */}
      </div>

      {/* Info body */}
      <div className="relative px-3 pb-4 pt-2 md:px-5 md:pb-5 md:pt-3 text-left flex-1 flex flex-col">
        {/* Name */}
        <h3 className="text-white text-[14px] md:text-[20px] font-extrabold leading-tight tracking-tight mb-1 truncate">
          {profile.name}
        </h3>

        {/* Experience badge - moved below name */}
        <span className="inline-flex items-center self-start rounded-full border border-[#4ecafc]/40 bg-[#0a1124]/80 backdrop-blur-md px-2.5 py-1 text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-[#4ecafc] mb-2">
          {profile.experience}
        </span>

        {/* Role */}
        <p className="text-[11px] md:text-[14px] font-semibold text-[#4ecafc] leading-snug mb-3 line-clamp-2 min-h-[28px] md:min-h-[36px]">
          {profile.role}
        </p>

        {/* Divider */}
        <div
          aria-hidden
          className="h-px w-full mb-3"
          style={{
            background:
              "linear-gradient(90deg, rgba(78,202,252,0.5), transparent)",
          }}
        />

        {/* View Profile button */}
        <div className="mt-auto">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 py-2 md:px-4 md:py-2.5 text-[11px] md:text-sm font-bold transition-all duration-300 bg-gradient-to-r from-[#4ecafc] to-[#7b61ff] text-[#0a1124] hover:shadow-[0_0_20px_rgba(78,202,252,0.5)] hover:-translate-y-0.5"
          >
            View Profile
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-3 h-3 md:w-4 md:h-4"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Expandable bio overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="absolute inset-0 z-10 rounded-2xl flex flex-col bg-[#0a1124] border border-[#4ecafc]/30"
          >
            {/* Re-render top accent bar so overlay matches base card */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[3px]"
              style={{
                background:
                  "linear-gradient(90deg, #4ecafc 0%, #7b61ff 50%, #FE4855 100%)",
              }}
            />
            <div className="flex flex-col h-full overflow-hidden pt-3">
              <ScrollArea className="flex-1 min-h-0">
                <div className="p-4">
                  <p className="text-sm md:text-lg font-extrabold text-white mb-1 leading-tight">
                    {profile.name}
                  </p>
                  <p className="text-xs md:text-sm text-[#4ecafc] font-semibold mb-3">
                    {profile.role}
                  </p>
                  <p className="text-[11px] md:text-sm leading-relaxed text-white/80">
                    {profile.bio}
                  </p>
                </div>
              </ScrollArea>
              <div className="p-3 flex justify-center shrink-0 border-t border-white/10">
                <button
                  onClick={() => setExpanded(false)}
                  className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg px-5 py-1.5 md:px-6 md:py-2 text-[11px] md:text-sm font-bold transition-colors bg-white/10 border border-white/20 text-white hover:bg-white/20"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProfileCard;
