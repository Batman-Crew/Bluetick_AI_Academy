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
    <div className="w-full rounded-xl overflow-hidden bg-card">
      {/* Avatar — clean, no overlay */}
      <div className="relative bg-muted">
        <Image
          height={20}
          width={20}
          src={profile.avatar}
          alt={profile.name}
          className="w-full aspect-[5/5] object-cover object-top"
        />
        {/* Fade into gradient at very bottom of image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, hsl(220 80% 42%), transparent)",
          }}
        />
      </div>

      {/* Blue gradient info section */}
      <div
        className="px-5 pb-5 pt-0 text-center"
        style={{
          background:
            "linear-gradient(to bottom, hsl(220 80% 42%), hsl(220 70% 32%))",
        }}
      >
        {/* Role */}
        <h3 className="text-xs lg:text-lg lg:text-nowrap line-clamp-2 font-bold text-primary-foreground leading-tight">
          {profile.role}
        </h3>

        {/* Experience badge */}
        <span className="mt-3 text-xs lg:text-sm inline-block rounded-full border border-primary-foreground/40 px-5 py-1.5 text-sm font-medium text-primary-foreground">
          {profile.experience}
        </span>

        {/* View Profile button */}
        <div className="mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex cursor-pointer text-xs items-center justify-center gap-1 rounded-full px-7 py-2 md:text-sm font-semibold transition-colors"
            style={{
              background: "hsl(220 70% 55%)",
              color: "white",
            }}
          >
            View Profile
          </button>
        </div>

        {/* Expandable bio with fixed height and scrollable content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 200, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-5 text-left h-full">
                <ScrollArea className="h-full pr-3">
                  <p className="text-sm leading-relaxed text-primary-foreground/90">
                    {profile.bio}
                  </p>
                </ScrollArea>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileCard;