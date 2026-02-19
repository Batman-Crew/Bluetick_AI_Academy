// SEO.js Component
import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Best Gen AI Course in Bangalore - Become an AI Engineer!</title>
      <meta
        name="description"
        content="An Enterprise AI Engineering Program covering Gen AI, Rag, Agentic Workflows, LLMOps / MLOps and MCPs. The ultimate Gen AI course for 2026. Enroll at Bluetick AI Academy!"
      />
      <meta name="keywords" content="Best Gen AI Course, AI Engineering, AI Engineer, AI Engineer Course, AI Engineer Training, AI Engineer Course in Bangalore" />
      <meta name="author" content="BlueTick Academy" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:title" content="Best Gen AI Course in Bangalore - Become an AI Engineer!" />
      <meta property="og:description" content="An Enterprise AI Engineering Program covering Gen AI, Rag, Agentic Workflows, LLMOps / MLOps and MCPs. The ultimate Gen AI course for 2026. Enroll at Bluetick AI Academy!" />
      <meta property="og:image" content="/img/AI_BG/hero-bg.webp" />
      <meta property="og:url" content="https://www.bluetickacademy.ai/" />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content="Best Gen AI Course in Bangalore" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Best Gen AI Course in Bangalore - Become an AI Engineer!" />
      <meta name="twitter:description" content="An Enterprise AI Engineering Program covering Gen AI, Rag, Agentic Workflows, LLMOps / MLOps and MCPs. The ultimate Gen AI course for 2026. Enroll at Bluetick AI Academy!" />
      <meta name="twitter:image" content="/img/AI_BG/hero-bg.webp" />
      <meta name="twitter:image:alt" content="Best Gen AI Course in Bangalore" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://www.bluetickacademy.ai/" />
      <link rel="icon" href="/icon.png" sizes="any" />
      
      {/* Structured Data (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Best Gen AI Course in Bangalore",
            "description": "An Enterprise AI Engineering Program covering Gen AI, Rag, Agentic Workflows, LLMOps / MLOps and MCPs. The ultimate Gen AI course for 2026. Enroll at Bluetick AI Academy!",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "BlueTick Academy",
              "url": "https://www.bluetickacademy.ai",
            },
            "image": [
              {
                "url": "/img/AI_BG/hero-bg.webp",
                "alt": "Best Gen AI Course in Bangalore",
              },
              {
                "url": "/img/AI_BG/TechBgDesktop.webp",
                "alt": "Best Gen AI Course in Bangalore",
              },
            ],
          }),
        }}
      />
    </Head>
  );
}
