import ProfileCard from "./ProfileCard";
import React, { memo, useEffect, useRef, useState } from "react";

export const profiles = [
  {
    id: 1,
    name: "Ramesh Krishnan",
    role: "Engineering Manager - AI/ML Manager",
    experience: "20+ Years Experience",
    avatar: "/img/AI_BG/person3.webp",
    bio: " Applied AI Leader with 20+ years of experience, including 8+ years building enterprise AI/ML applications  across startups and product companies such as ElasticRun, Noodle.ai, EdgeVerve, and Infosys. Builds practical AI systems powering real-world products at scale.",
  },
  {
    id: 2,
    name: "Kishore Vutukuri",
    role: "Enterprise AI Architect",
    experience: "20+ Years Experience",
    avatar: "/img/AI_BG/person2.webp",
    bio: "An Enterprise Architect at EY with 20+ years of hands-on experience building high-scale, resilient, distributed platforms, leading end-to-end AI first digital transformation programs.",
  },
  {
    id: 3,
    name: "Suresh Pasumarthi",
    role: "AI Solutions - Product Head",
    experience: "25+ Years Experience",
    avatar: "/img/AI_BG/person4.webp",
    bio: "Seasoned Product leader with 25+ years of experience in shaping strategy for AI first platforms. Deep Expertise in AI, NLP, and Responsible AI ,scaling enterprise platforms powering billions of interactions.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "A11y"],
    companies: ["Apple", "Airbnb", "Spotify", "Adobe"],
  },
  {
    id: 4,
    name: "Ganesh Jathar",
    role: "AI Engineer",
    experience: "5+ Years Experience",
    avatar: "/img/AI_BG/person1.webp",
    bio: " An AI Engineer at Robert Walters & Ex-IBM & PwC, delivering AI and ML solutions for industries. Deep expertise in Deployable AI solutions and Data & Analytics Technology practice.",
  },
];

const TeamPage = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if screen is mobile (768px is typical md breakpoint)
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    // Only run auto-scroll on mobile
    if (!isMobile) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust this value to control speed (pixels per frame)

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset scroll position when we've scrolled past half the content
      // (since we're duplicating the profiles)
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    // Pause on touch/hover
    const handleTouchStart = () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    const handleTouchEnd = () => {
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener('touchstart', handleTouchStart);
    scrollContainer.addEventListener('touchend', handleTouchEnd);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scrollContainer.removeEventListener('touchstart', handleTouchStart);
      scrollContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMobile]);

  // Duplicate profiles for infinite scroll effect (only on mobile)
  const displayProfiles = isMobile ? [...profiles, ...profiles] : profiles;

  return (
    <section className="relative bg-[#0c142c] w-full">
      <p className="text-center text-2xl font-bold text-white mb-12">
        Learn from Industry Experts building AI for Fortune 500 Companies
      </p>
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-4 overflow-x-auto px-4 md:px-6 pb-4 max-w-7xl mx-auto hide-scrollbar"
        style={{ scrollBehavior: 'auto' }}
      >
        {displayProfiles.map((profile, index) => (
          <div
            key={`${profile.id}-${index}`}
            className="w-[calc(50%-8px)] min-w-[160px] md:w-auto md:min-w-[260px] md:max-w-none flex-shrink-0 md:flex-1"
          >
            <ProfileCard profile={profile} />
          </div>
        ))}
      </div>
    </section>
  );
});

TeamPage.displayName = "TeamPage";

export default TeamPage;