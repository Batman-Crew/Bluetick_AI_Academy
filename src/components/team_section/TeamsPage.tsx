import ProfileCard from "./ProfileCard";
import React, { memo, useEffect, useRef } from "react";

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
  {
    id: 5,
    name: "Tushar Tiwary",
    role: "AI Ops Engineer",
    experience: " 3+ Years Experience",
    avatar: "/img/AI_BG/tushar.jpeg",
    bio: " AI Engineer at IBM who specializes in building intelligent, real-world applications using Generative AI and Large Language Models. He has successfully deployed advanced multi-agent systems and autonomous workflows for global companies, demonstrating how cutting-edge technology can solve complex enterprise challenges. From winning the Smart India Hackathon to developing apps used by millions, Tushar’s journey serves as a practical road map to master AI, machine learning, and scalable software development.",
  },
  {
    id: 6,
    name: "Shaury Srivatsav",
    role: "Applied Scientist",
    experience: "3+ Years Experience",
    avatar: "/img/AI_BG/shaurya.jpeg",
    bio: "An Applied AI/ML Scientist at Amazon & Ex-Microsoft, specializing in the development of large-scale VLMs and Generative AI. His expertise includes training complex neural networks, distributed training on multi-GPU systems, and implementing constrained decoding for reliable model inference. With a background in multimodal research, he focuses on building robust machine learning pipelines for synthetic data generation and automated content analysis.",
  },
];

const TeamPage = memo(() => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const isPaused = useRef(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      if (!isPaused.current) {
        scrollPosition += scrollSpeed;

        // Seamlessly reset when we've scrolled past the first set of profiles
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0;
          scrollContainer.scrollLeft = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    // Pause on hover (desktop) and touch (mobile)
    const handlePause = () => {
      isPaused.current = true;
    };

    const handleResume = () => {
      isPaused.current = false;
      scrollPosition = scrollContainer.scrollLeft;
    };

    scrollContainer.addEventListener('mouseenter', handlePause);
    scrollContainer.addEventListener('mouseleave', handleResume);
    scrollContainer.addEventListener('touchstart', handlePause);
    scrollContainer.addEventListener('touchend', handleResume);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      scrollContainer.removeEventListener('mouseenter', handlePause);
      scrollContainer.removeEventListener('mouseleave', handleResume);
      scrollContainer.removeEventListener('touchstart', handlePause);
      scrollContainer.removeEventListener('touchend', handleResume);
    };
  }, []);

  // Duplicate profiles for seamless infinite scroll
  const displayProfiles = [...profiles, ...profiles];

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
            className="w-[calc(50%-8px)] min-w-[160px] md:w-[280px] flex-shrink-0"
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