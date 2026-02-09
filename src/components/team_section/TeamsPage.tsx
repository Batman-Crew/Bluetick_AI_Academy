import ProfileCard from "./ProfileCard";
import React, { memo } from "react";


export const profiles = [
  {
    id: 1,
    name: "Ganesh Jathar",
    role: "AI Engineer",
    experience: "5+ Years Experience",
    avatar: "/img/AI_BG/person1.png",
    bio: " An AI Engineer at Robert Walters & Ex-IBM & PwC, delivering AI and ML solutions for industries. Deep expertise in Deployable AI solutions and Data & Analytics Technology practice.",
    // skills: ["Deep Learning", "NLP", "Computer Vision", "MLOps", "Python"],
    // companies: ["ElasticRun", "Noodle.ai", "EdgeVerve", "Infosys"],
  },
  {
    id: 2,
    name: "Kishore Vutukuri",
    role: "Enterprise AI Architect",
    experience: "20+ Years Experience",
    avatar: "/img/AI_BG/person2.jpeg",
    bio: "An Enterprise Architect at EY with 20+ years of hands-on experience building high-scale, resilient, distributed platforms, leading end-to-end AI first digital transformation programs.",
    // skills: ["Statistical Modeling", "Big Data", "Spark", "Tableau", "R"],
    // companies: ["Google", "Microsoft", "Flipkart", "TCS"],
  },
  {
    id: 3,
    name: "Ramesh Krishnan",
    role: "Engineering Manager - AI/ML Manager",
    experience: "20+ Years Experience",
    avatar: "/img/AI_BG/person3.jpeg",
    bio: " Applied AI Leader with 20+ years of experience, including 8+ years building enterprise AI/ML applications  across startups and product companies such as ElasticRun, Noodle.ai, EdgeVerve, and Infosys. Builds practical AI systems powering real-world products at scale.",
    // skills: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
    // companies: ["Stripe", "Vercel", "Shopify"],
  },
  {
    id: 4,
    name: "Suresh Pasumarthi",
    role: "AI Solutions - Product Head",
    experience: "25+ Years Experience",
    avatar: "/img/AI_BG/person4.png",
    bio: "Seasoned Product leader with 25+ years of experience in shaping strategy for AI first platforms. Deep Expertise in AI, NLP, and Responsible AI ,scaling enterprise platforms powering billions of interactions.",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping", "A11y"],
    companies: ["Apple", "Airbnb", "Spotify", "Adobe"],
  },
];

const TeamPage = memo(() => {
  return (
    <section className="mx-auto max-w-7xl bg-background pb-5">
        <h1 className="text-3xl font-bold text-center text-foreground mb-2">
          Our Team
        </h1>
        <p className="text-center text-muted-foreground mb-12">
          Meet the people behind the work
        </p>
        <div className="grid  grid-cols-2 w-full  mx-auto  px-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {profiles.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
    </section>
  );
});

TeamPage.displayName = "TeamPage";

export default TeamPage;
