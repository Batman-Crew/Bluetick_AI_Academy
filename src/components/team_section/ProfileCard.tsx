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
  skills: string[];
  companies: string[];
}

interface ProfileCardProps {
  profile: ProfileData;
}

const ProfileCard = ({ profile }: ProfileCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="w-full h-full rounded-xl overflow-hidden bg-card flex flex-col relative">
      {/* Avatar — clean, no overlay */}
      <div className="relative bg-muted h-[150px] md:h-[250px]">
        <Image
          height={20}
          width={20}
          src={profile.avatar}
          alt={profile.name}
          className="w-full h-full object-cover object-top"
        />
        {/* Fade into gradient at very bottom of image */}
        {/* <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(220 80% 30%), transparent)",
          }}
        /> */}
      </div>

      {/* Blue gradient info section */}
      <div
        className="px-2 pb-3 pt-0 md:px-5 md:pb-5 text-center flex-1 flex flex-col items-center"
        style={{
          background:
            "linear-gradient(to bottom, hsl(220 80% 30%), hsl(220 70% 30%))",
        }}
      >
        {/* Name */}
        <p className="text-xs lg:text-xl mt-1 font-extrabold text-white tracking-wide mb-1 truncate w-full">
          {profile.name}
        </p>

        {/* Role */}
        <h3 className="text-[10px] lg:text-base line-clamp-2 h-[24px] md:h-[40px] font-medium text-white/80 leading-tight">
          {profile.role}
        </h3>

        {/* Experience badge */}
        <span className="mt-2 md:mt-3 text-[10px] lg:text-sm inline-block rounded-full border border-white/50 px-3 py-1 md:px-5 md:py-1.5 font-medium text-white">
          {profile.experience}
        </span>

        {/* View Profile button */}
        <div className="mt-auto pt-2 md:pt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex cursor-pointer text-[10px] md:text-xs items-center justify-center gap-1 rounded-full px-4 py-1.5 md:px-7 md:py-2 md:text-sm font-semibold transition-colors"
            style={{
              background: "hsl(220 70% 55%)",
              color: "white",
            }}
          >
            View Profile
          </button>
        </div>

      </div>

      {/* Expandable bio — overlays the card */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 z-10 rounded-xl flex flex-col"
            style={{
              background: "linear-gradient(to bottom, hsl(220 80% 42%), hsl(220 70% 32%))",
            }}
          >
            <div className="flex flex-col h-full overflow-hidden">
              <ScrollArea className="flex-1 min-h-0">
                <div className="p-4">
                  <p className="text-sm lg:text-lg font-extrabold text-white mb-1">{profile.name}</p>
                  <p className="text-xs text-white/80 mb-3">{profile.role}</p>
                  <p className="text-xs md:text-sm leading-relaxed text-white/90">
                    {profile.bio}
                  </p>
                </div>
              </ScrollArea>
              <div className="p-3 flex justify-center shrink-0">
                <button
                  onClick={() => setExpanded(false)}
                  className="inline-flex cursor-pointer text-[10px] md:text-xs items-center justify-center gap-1 rounded-full px-4 py-1.5 md:px-7 md:py-2 md:text-sm font-semibold transition-colors bg-white/20 border border-white/40 text-white hover:bg-white/30"
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