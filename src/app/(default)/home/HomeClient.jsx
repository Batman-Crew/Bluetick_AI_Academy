"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo, useCallback } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

// Lazy load Marquee to reduce initial bundle
const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
  loading: () => <div className="py-[20px] md:py-[40px] mb-[21px] sm:mb-[50px]" />
});

// ---------- CONSTANTS FROM OTHER FILES ----------
import {
  accardiancontentfaq,
} from "@/constant";
import { allCards, projects, courses, cardData, companyLogos, mediaLogos } from "@/data/homeData";
import { debounce, getResponsiveBgImage } from "@/utils/helpers";

// Lazy load below-the-fold sections for better Speed Index
const AISection = dynamic(() => import("@/components/ai_section/AISection"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});
const TechLandscapeHero = dynamic(() => import("@/components/tech_section/TechLandScape"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
});
const CourseSection = dynamic(() => import("@/components/course_section/CourseSection"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});
const FindYourTrack = dynamic(() => import("@/components/find_your_track/FindYourTrack"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true
});
const AIHeroSection = dynamic(() => import("@/components/ai_hero_section/AIHeroSection"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
});
const AIDashboardSection = dynamic(() => import("@/components/ai_tools/AITools"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
});
const TransformationSection = dynamic(() => import("@/components/transformation_section/TransformationSection"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
});
const TeamPage = dynamic(() => import("@/components/team_section/TeamsPage"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false
});
const UpcomingBatches = dynamic(() => import("@/components/upcoming_batch/UpcomingBatches"), {
  loading: () => <div className="min-h-[300px]" />,
  ssr: false
});

// ------------------- DYNAMIC COMPONENTS -------------------
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const MapWithPoints = dynamic(() => import("@/components/map"), {
  ssr: false,
});
const Accordion = dynamic(() => import("@/components/accardian"), {
  ssr: false,
});
const LearningAdvisorForm = dynamic(() => import("@/components/form"), {
  ssr: false,
});
const OrbitAnimation = dynamic(() => import("@/components/orbitanimation"), {
  ssr: false,
  loading: () => <div className="w-full h-[200px]" />
});
const Modal = dynamic(() => import("@/components/model"), { ssr: false });

function HomeClient() {
  const [formType, setFormType] = useState("default");
  const [isModalOpen, setModalOpen] = useState(false);

  // Background Image with optimized resize handler
  // Background Image with optimized resize handler
  const [bgImage, setBgImage] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
      ? "/img/mobilebanner.webp"
      : "/img/banner.webp"
  );

  // Memoize debounced resize handler
  const handleResize = useMemo(
    () =>
      debounce(() => {
        setBgImage(getResponsiveBgImage(window.innerWidth));
      }, 150),
    []
  );


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>

      {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WCMHBSGS"
        height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}
      {/* Hidden SEO headings */}
      <div className="hidden">
        <h1>
          AI Engineering Program in Bangalore – All You Need to Know before
          you Join!
        </h1>
        <h2>Why Enroll in a AI Engineering Program?</h2>
        <h3>Leading AI Engineering Training Institute in Bangalore</h3>
        <h4>
          How to Find the Best AI Engineering Training Institute in
          Bangalore?
        </h4>
        <h5>Best AI Engineering Course in Bangalore – What Sets It Apart?</h5>
        <h6>Still Searching for the “Best AI Engineering Course Near Me”?</h6>
      </div>

      <Header setFormType={setFormType} formType={formType} />

      <div className="scroll-smooth overflow-x-hidden">
        {/* Banner section start */}
        <section
          className="md:py-[40px] max-[768px]:pb-[20px] max-[768px]:pt-[130px] max-[768px]:mt-[-80px] relative"
        >
          {/* Optimized Background Image with Priority Loading */}
          <Image
            src={bgImage}
            alt="Bluetick Academy AI Engineering Program"
            fill
            priority
            quality={85}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
              zIndex: -1,
            }}
          />
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 px-3">
              <div className="relative z-10">
              <h1 className="text-[#ffffff] text-[18px] mb-4 text-center xl:text-start">
                  Most Comprehensive Gen AI Course in{" "}
                  <strong className="font-[700] md:text-[24px] underline">
                    2026
                  </strong>{" "}
                </h1>
                <h2 className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent text-[30px] md:text-[40px] font-[400] md:font-semibold uppercase text-center xl:text-start">
                  Basics to Advanced
                </h2>
                <p className="text-[33px] md:text-[40px] uppercase leading-[40px] md:leading-[70px] font-[700] md:font-bold text-[#67e8f9] drop-shadow-[0_0_18px_rgba(103,232,249,0.35)] text-center xl:text-start">
                  Gen AI & Agentic AI  
                </p>
                <p className="text-[#FE4855] uppercase text-[30px] md:text-[40px] font-[400] md:font-semibold  text-center xl:text-start">
                  COURSE
                </p>
             

                <div className="md:block hidden mt-8">
                  <span className="flex justify-center xl:justify-start">
                    <Link href="#apply-form">
                      <button
                        type="button"
                        className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-semibold rounded-lg text-[16px] min-w-[200px] px-4 py-2.5 text-center me-2 mb-2 uppercase"
                      >
                        START YOUR AI CAREER
                      </button>
                    </Link>
                    <Link href="#courses">
                      <button
                        type="button"
                        className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-[var(--Primary-color)] font-semibold rounded-lg text-[16px] min-w-[200px] px-4 py-2.5 text-center me-2 mb-2 uppercase"
                      >
                        Explore Course
                      </button>
                    </Link>
                  </span>
                </div>

                <div className="mt-5 bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#1e1b4b] md:px-3 py-2 md:py-3 max-w-sm md:max-w-[400px] max-[1280px]:mx-auto grid grid-cols-2 gap-2 md:gap-4 rounded-lg border border-[#4f46e5]/50 shadow-[0_0_25px_rgba(79,70,229,0.25)]">
                  {cardData?.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex flex-col items-center justify-center text-center p-1 ${
                        index < 2 ? "border-b  border-[#4f46e5]/40" : ""
                      } ${
                        index % 2 === 0 ? "border-r border-[#4f46e5]/40" : ""
                      }`}
                    >
                      <Image
                        className="w-[18px] h-[18px]"
                        src={item.img}
                        alt={item.text}
                        width={18}
                        height={18}
                        priority
                      />
                      <p className="text-white lg:text-nowrap text-[16px] md:text-sm mt-2">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col mt-[40px] lg:mt-1 relative xl:col-span-2">
                <div className="w-[46%] self-center xl:self-end md:block hidden xl:mt-[-35px]">
                  <OrbitAnimation />
                </div>
                <div className="flex gap-2 justify-center xl:justify-end">
                  <div className="max-[640px]:w-full sm:min-w-[440px] md:p-6 md:bg-[rgba(44,58,100,0.6)] rounded-3xl md:shadow-sm flex items-center justify-between sm:gap-1">
                    <div className="max-[768px]:w-[152px] max-[768px]:h-[125px] max-[640px]:ml-2 flex justify-center items-center">
                      <Image
                        src="/img/top_Image.png"
                        alt="no-top"
                        width={152}
                        height={125}
                        priority
                      />
                    </div>
                    <span className="rounded-xl px-2 sm:px-3 py-4 bg-gradient-to-b from-[rgba(34,211,238,0.55)] to-[rgba(139,92,246,0.55)] shadow-[0_0_20px_rgba(34,211,238,0.25)] text-center sm:w-[196px] max-[640px]:w-[152px] max-[640px]:h-[125px]">
                      <p className="text-white uppercase text-[11px] md:text-[12px] font-bold md:mt-0.5 mt-1">
                        Weekends Only. Offline or Online Sessions.
                      </p>
                      <Image
                        className="mx-auto max-[768px]:mt-2.5"
                        src="/img/star.svg"
                        alt="Digital marketing course near me."
                        width={80}
                        height={20}
                        priority
                      />
                    </span>
                  </div>
                  <div className="md:block hidden">
                    <div className="px-11 bg-[#272727] rounded-3xl shadow-sm flex items-center h-full">
                      <div>
                        <Image
                          className="mx-auto mb-2"
                          src="/img/ok.svg"
                          alt="no-ok"
                          width={40}
                          height={40}
                          priority
                        />
                        <span className="rounded-md text-center">
                          <p className="text-white uppercase font-bold text-[20px]">
                            <strong className="text-[#FE4855]">100% <span>Hands on Learning</span></strong> 
                          </p>
                          <p className="uppercase text-white">
                            Build What Companies Want!
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="block md:hidden mt-5">
                  <span className="sm:flex gap-2 justify-center block">
                    <Link href="#apply-form">
                      <button
                        type="button"
                        className="uppercase overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-bold rounded-lg w-full text-md py-2 text-center me-2 mb-2 px-4"
                      >
                        START YOUR AI CAREER
                      </button>
                    </Link>
                    <Link href="#courses">
                      <button
                        type="button"
                        className="uppercase overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-[var(--Primary-color)] font-bold rounded-lg text-md py-2 w-full text-center me-2 mb-2 px-4 max-[640px]:mt-3"
                      >
                        Explore Course
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Small-screen rating & Google image */}
        <div className="container min-[1440px]:max-w-[1440px] mx-auto  px-6 pt-6 block md:hidden">
          <div className="py-1 px-3 bg-[#272727] rounded-lg shadow-xl flex">
            <Image src="/img/ok.svg" alt="no-ok" width={40} height={40} />
            <div className="rounded-md px-3 py-3">
              <p className="text-white uppercase text-[18px] font-bold">
              <strong className="bg-gradient-to-b text-nowrap from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent">
                  100% Hands on Learning
                </strong>
              </p>
              <p className="uppercase text-white text-[16px]">
               Build What Companies Want!
              </p>
            </div>
          </div>
          <div className="w-[100%] flex justify-center mb-4 mt-3">
            <Image
              src="/img/orbit.jpeg"
              alt="no-technologyimg"
              className="w-full h-auto"
              width={500}
              height={200}
            />
                
          </div>
        </div>
        {/* Banner section end */}

        {/* Marquee Start */}
        <section className="bg-[#F6F6F6]">
          <Marquee
            loop={0}
            className="py-[20px] md:py-[40px] mb-[21px] sm:mb-[50px]"
          >
            {companyLogos.map((file, idx) => (
              <Image
                key={idx}
                className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[140px] md:h-[70px] object-contain"
                src={`/img/company/${file}`}
                alt={file}
                width={120}
                height={60}
                loading="lazy"
              />
            ))}
          </Marquee>
        </section>
        {/* Marquee End */}


        {/* ====== Section 3: Find Your Track (NEW) ====== */}
        <FindYourTrack />

        {/* ====== Section 4: Lead Capture Form ====== */}
        {/* Form Start */}
        <section className="my-[30px] md:my-[50px] scroll-mt-20" id="apply-form">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:gap-10">
              <div style={{
            backgroundImage: `url(/img/formimage.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }} className="flex relative hidden md:flex flex-col min-h-[30rem] pt-2 items-center mt-[20px] sm:mt-[40px] lg:mt-1 bg-[#F9F7FF] pt-5 sm:pt-8">
               <div className="bg-white rounded-xl p-5 shadow-lg max-[640px]:w-[90%] text-center">
              <div className="flex gap-2 justify-center">
                <div className="px-2 flex items-center justify-center bg-black rounded-[100%]">
                  <Image
                    className="w-[20px]"
                    src="/img/calendar.svg"
                    alt="no-calender"
                    width={20}
                    height={20}
                  />
                </div>
                <span className="text-[20px] md:text-[24px] text-[black]">
                  In{" "}
                  <strong className="text-[red] text-[24px] md:text-[28px]">
                    14 Weekends
                  </strong>
                </span>
              </div>
              <p className="text-[14px] md:text-[24px] lg:text-[24px] font-[700] mt-3 whitespace-nowrap overflow-x-auto">
                Build <span className="text-[#FE4855]">|</span> Deploy{" "}
                <span className="text-[#FE4855]">|</span> Get Hired as an AI Engineer
              </p>
            </div>
            <p className="absolute bottom-15 left-10 text-sm bg-black text-white px-3 py-1.5 rounded-full">{"Developer -> AI Engineer Track"}</p>
            <p className="absolute bottom-35 right-10 text-sm bg-black text-white px-3 py-1.5 rounded-full">{"Live Mentors + Feedback Loops"}</p>

              </div>

              <div className="my-auto">
                <LearningAdvisorForm
                  setFormType={setFormType}
                  formType="default"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Form End */}

        {/* ====== Section 5: Master the Full AI Stack (orbit) ====== */}
        <AISection />

        {/* ====== Section 6: Explore Curriculum (12 modules) ====== */}
        <div className="" id="courses">

        <CourseSection />
        </div>

        {/* Apply Now Button after Curriculum */}
        <div className="flex justify-center my-8">
          <Link href="#apply-form">
            <button
              type="button"
              className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-semibold rounded-lg text-[16px] min-w-[200px] px-4 py-2.5 text-center uppercase"
            >
              START YOUR AI CAREER
            </button>
          </Link>
        </div>

        {/* ====== Section 7: Mentors / Industry Experts ====== */}
        <TeamPage />

        {/* ====== Section 8: In 14 Weekends ====== */}
        <TechLandscapeHero />

        {/* ====== Section 9: Transformation Section ====== */}
        <TransformationSection />

        {/* Courses hidden temporarily */}

        {/* ====== Section 11: Stats + Learners from 30+ Countries (Your Dream Career) ====== */}
        

        {/* ====== Section 10: Become a Prod... (AI Engineer in 14 Weekends) ====== */}
        <AIHeroSection />

        {/* ====== Section 12: Upcoming Batches ====== */}
        <UpcomingBatches />

        {/* ====== Section 13: BlueTick AI Advantage ====== */}
        {/* Projects Start */}
        <section
          id="from1"
          className="relative px-4 md:px-6 py-10 md:py-14 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #f7faff 0%, #eef4ff 35%, #ecf0ff 65%, #fff5ef 100%)",
          }}
        >
          {/* Decorative glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -left-24 w-[380px] h-[380px] rounded-full opacity-30 blur-3xl"
            style={{
              background: "radial-gradient(circle, #4ecafc 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-24 w-[380px] h-[380px] rounded-full opacity-25 blur-3xl"
            style={{
              background: "radial-gradient(circle, #FE7C55 0%, transparent 70%)",
            }}
          />

          <p className="relative z-10 sm:text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">
          The BlueTick AI Advantage
          </p>
          <div className="relative z-10 container min-[1440px]:max-w-[1440px] mx-auto px-1 sm:px-4">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 sm:mt-4">
              {projects.map((item) => (
                <div
                  key={item.id}
                  className=" mt-[40px] sm:px-2 md:px-[30px] lg:px-[60px]"
                >
                  <div className="max-[640px]:flex gap-5">
                    <div className="flex justify-center max-[540px]:w-[40px] sm:h-10">
                      <Image
                        src={item.img}
                        alt="no icons"
                        width={60}
                        height={60}
                      />
                    </div>
                    <span className="sm:text-center xl:text-start">
                      <p className="text-neutral-900 text-[18px] md:text-[18px] font-semibold sm:mt-3">
                        {item.title}
                      </p>
                      <p className=" text-neutral-700 text-[16px] md:text-[15px] font-normal leading-7">
                        {item.des}
                      </p>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Projects End */}

        {/* ====== Section 15: 50+ Tools and... ====== */}
        <AIDashboardSection /> 

        {/* FAQs Section */}
        <section className="relative overflow-hidden mb-[40px] md:mb-[60px]">
          {/* Soft layered background */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(180deg, #ffffff 0%, #f7faff 40%, #fff5ef 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 right-[-100px] w-[420px] h-[420px] rounded-full opacity-30 blur-3xl -z-10"
            style={{
              background: "radial-gradient(circle, #4ecafc 0%, transparent 70%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute bottom-0 -left-24 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl -z-10"
            style={{
              background: "radial-gradient(circle, #FE7C55 0%, transparent 70%)",
            }}
          />

          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6 py-10 md:py-14">

            {/* TOP: Stats + shoe + CTA */}
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {/* Left Content */}
              <div>
                <p className="font-bold text-[22px] md:text-[28px]">
                Your Dream AI Career, Our Mission
                  <br />
                  <span className="bg-[#FBE7C1] font-bold">
                  One transformation at a Time!
                  </span>
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px] rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-[0_8px_25px_rgba(78,202,252,0.12)] p-3 md:p-4 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-start">
                      <Image
                        src="/img/student.svg"
                        alt="no icons"
                        className="w-[88px] h-[79px] md:w-[88px] md:h-[88px] object-contain"
                        width={88}
                        height={88}
                      />
                    </div>
                    <p className="text-[21px] md:text-[24px] font-extrabold mt-3 bg-gradient-to-r from-[#FE4855] to-[#FD9055] bg-clip-text text-transparent">
                      10,000<span>+</span>
                    </p>
                    <p className="text-neutral-700 text-[13px] md:text-[14px] font-medium">
                    Professionals Upskilled
                    </p>
                  </div>
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px] rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-[0_8px_25px_rgba(78,202,252,0.12)] p-3 md:p-4 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-start">
                      <Image
                        src="/img/trainer.svg"
                        alt="no icons"
                        className="w-[88px] h-[79px] md:w-[88px] md:h-[88px] object-contain"
                        width={88}
                        height={88}
                      />
                    </div>
                    <p className="text-[21px] md:text-[24px] font-extrabold mt-3 bg-gradient-to-r from-[#4ecafc] to-[#7b61ff] bg-clip-text text-transparent">
                      1:15
                    </p>
                    <p className="text-neutral-700 text-[13px] md:text-[14px] font-medium">
                    Mentor-to-Learner Ratio
                    </p>
                  </div>
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px] rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 shadow-[0_8px_25px_rgba(78,202,252,0.12)] p-3 md:p-4 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex justify-start">
                      <Image
                        src="/img/record.svg"
                        alt="no icons"
                        className="w-[88px] h-[79px] md:w-[88px] md:h-[88px] object-contain"
                        width={88}
                        height={88}
                      />
                    </div>
                    <p className="text-[21px] md:text-[24px] font-extrabold mt-3 bg-gradient-to-r from-[#10b981] to-[#4ecafc] bg-clip-text text-transparent">
                      97%
                    </p>
                    <p className="text-neutral-700 text-[13px] md:text-[14px] font-medium">
                    Career Transition Success
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Content */}
              <div className="relative w-full flex items-end max-w-[80%] ml-auto">
                <Image
                  src="/img/shoe.svg"
                  alt="Shoe"
                  className="absolute right-0 top-0 h-full w-[50%] hidden lg:block"
                  width={400}
                  height={400}
                />

                <div className="max-[550px]:left-[-55px] relative block lg:hidden mt-8">
                  <Image
                    src="/img/shoe_1.svg"
                    alt="Shoe"
                    className="w-full h-auto mx-auto"
                    width={400}
                    height={400}
                  />
                </div>

                <div className="absolute bottom-[-15px] max-[400px]:right-0 min-[400px]:left-25 text-black">
                  <p className=" text-[15px] md:text-[24px] font-bold">
                    <strong className="text-[#FD8A55] font-bold text-[21px] md:text-[24px]">
                      Take a Step Now
                    </strong>
                    <br />
                    Let’s build it Together!
                  </p>
                </div>
              </div>
            </div>

            {/* Visual divider */}
            <div className="relative my-12 md:my-16 flex items-center justify-center">
              <div
                aria-hidden
                className="h-px w-full max-w-3xl"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(78,202,252,0.4), rgba(123,97,255,0.4), rgba(254,124,85,0.4), transparent)",
                }}
              />
              <span className="absolute bg-white/80 backdrop-blur-sm border border-[#4ecafc]/30 rounded-full px-4 py-1 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-600">
                And our reach is global
              </span>
            </div>

            {/* BOTTOM: Map */}
            <div className="container min-[1440px]:max-w-[1440px] mx-auto px-1 md:px-4">
              <p className="font-semibold text-[26px] md:text-[36px] text-center text-[#242424] mb-8 md:mb-10">
                Learners from 30
                <span className="bg-gradient-to-r from-[#FE7C55] to-[#FE4855] bg-clip-text text-transparent font-extrabold">
                  + Countries
                </span>
              </p>
              <MapWithPoints />
            </div>
          </div>
        </section>

        
        <section className="my-[40px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-8 md:px-4">
            <p className="font-bold text-[26px] md:text-[32px] max-[640px]:pr-2">
              Frequently Asked Questions (FAQs)
            </p>

            <Accordion items={accardiancontentfaq} />
          </div>
        </section>

        {/* Media & Awards */}
        <section className="my-[40px] md:my-[60px]">
          <p className="sm:pl-0 pl-8 text-start sm:text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">
            Media & Awards
          </p>
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4 hidden md:block">
            <div className="grid min-[600px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-4">
              {mediaLogos.map((file, idx) => (
                <div key={idx} className="flex justify-center items-center">
                  <Image
                    src={`/img/${file}`}
                    alt="no-logos"
                    className="w-full h-auto max-w-[150px]"
                    width={150}
                    height={60}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="block md:hidden">
            <Marquee loop={0} className="mt-3">
              {mediaLogos.map((file, idx) => (
                <Image
                  key={idx}
                  className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain"
                  src={`/img/${file}`}
                  alt={file}
                  width={120}
                  height={60}
                />
              ))}
              {mediaLogos.map((file, idx) => (
                <Image
                  key={idx}
                  className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain"
                  src={`/img/${file}`}
                  alt={file}
                  width={120}
                  height={60}
                />
              ))}
            </Marquee>
          </div>
        </section>

        <ToastContainer />
      </div>

      <Footer setFormType={setFormType} formType={formType} />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="max-h-[95vh] w-full">
          <LearningAdvisorForm setFormType={setFormType} formType={formType} />
        </div>
      </Modal>
    </>
  );
}

export default HomeClient;
