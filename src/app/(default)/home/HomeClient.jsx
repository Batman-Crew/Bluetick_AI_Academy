"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo, useCallback } from "react";
import { toast, ToastContainer } from "react-toastify";
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
const ApplySection = dynamic(() => import("@/components/apply_section/ApplySection"), {
  loading: () => <div className="min-h-[300px]" />,
  ssr: false
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
      {/* Hidden SEO headings */}
      <div className="hidden">
        <h1>
          Digital Marketing Courses in Bangalore – All You Need to Know before
          you Join!
        </h1>
        <h2>Why Enroll in a Digital Marketing Course?</h2>
        <h3>Leading Digital Marketing Training Institute in Bangalore</h3>
        <h4>
          How to Find the Best Digital Marketing Training Institute in
          Bangalore?
        </h4>
        <h5>Best Digital Marketing Course in Bangalore – What Sets It Apart?</h5>
        <h6>Still Searching for the “Best Digital Marketing Course Near Me”?</h6>
      </div>

      <Header setFormType={setFormType} formType={formType} />

      <div className="scroll-smooth">
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
                <h2 className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent text-[30px] md:text-[50px] font-[400] md:font-semibold uppercase text-center xl:text-start">
                  ENTERPRISE
                </h2>
                <p className="text-[33px] md:text-[50px] leading-[40px] md:leading-[70px] font-[700] md:font-bold text-[#98C7F9] text-center xl:text-start">
                  AI ENGINEERING
                </p>
                <p className="text-[#FE4855] text-[30px] md:text-[50px] font-[400] md:font-semibold uppercase text-center xl:text-start">
                  PROGRAM
                </p>
                <p className="text-[#ffffff] text-[18px] mb-4 text-center xl:text-start">
                  <strong className="font-[700] md:text-[24px] underline">
                    2026
                  </strong>{" "}
                  will be all about Production AI skills{" "}
                </p>

                <div className="md:block hidden mt-8">
                  <span className="flex justify-center xl:justify-start">
                    <Link href="#form">
                      <button
                        type="button"
                        className="overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-semibold rounded-lg text-[16px] min-w-[200px] px-4 py-2.5 text-center me-2 mb-2 uppercase"
                      >
                        ENQUIRE NOW
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

                <div className="mt-5 bg-[var(--Background-Card)] md:px-3 py-2 md:py-3 max-w-sm md:max-w-[400px] max-[1280px]:mx-auto grid grid-cols-2 gap-2 md:gap-4 rounded-lg border border-[#343683]">
                  {cardData?.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex flex-col items-center justify-center text-center p-1 ${
                        index < 2 ? "border-b  border-[#343683]" : ""
                      } ${
                        index % 2 === 0 ? "border-r border-[#343683]" : ""
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
                        src="/img/top.svg"
                        alt="no-top"
                        width={152}
                        height={125}
                        priority
                      />
                    </div>
                    <span className="rounded-xl px-2 sm:px-3 py-4 bg-gradient-to-b from-[rgba(96,211,247,0.4)] to-[rgba(139,140,249,0.4)] text-center sm:w-[196px] max-[640px]:w-[152px] max-[640px]:h-[125px]">
                      <p className="text-white uppercase text-[11px] md:text-[12px] font-bold md:mt-0.5 mt-1">
                        100% Hands on Learning Build What Companies Want!
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
                            <strong className="text-[#FE4855]">100%</strong> JOB
                          </p>
                          <p className="uppercase text-white">
                            ASSURED PROGRAMS
                          </p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="block md:hidden mt-5">
                  <span className="sm:flex gap-2 justify-center block">
                    <Link href="#form">
                      <button
                        type="button"
                        className="uppercase overflow-hidden transition-transform duration-300 hover:scale-105 text-white cursor-pointer bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-bold rounded-lg w-full text-md py-2 text-center me-2 mb-2 px-4"
                      >
                        ENQUIRE NOW
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
            <span className="rounded-md px-3 py-3">
              <p className="text-white uppercase text-[26px] font-bold">
                <strong className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent">
                  100%
                </strong>{" "}
                JOB
              </p>
              <p className="uppercase text-white text-[18px]">
                ASSURED PROGRAMS
              </p>
            </span>
          </div>
          <div className="w-[100%] flex justify-center mb-4 mt-3">
            <Image
              src="/img/google.svg"
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
                className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain"
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


        {/* Here I need The AI section Here */}

        <AISection />

        <TeamPage />

        {/* Form Start */}
        <section className="my-[30px] md:my-[50px] scroll-mt-20" id="form">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:gap-10">
              <div style={{
            backgroundImage: `url(/img/formimage.webp)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }} className="flex flex-col min-h-[30rem] pt-2 items-center mt-[20px] sm:mt-[40px] lg:mt-1 bg-[#F9F7FF] md:order-1 order-2 pt-5 sm:pt-8">
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
                <span className="text-[20px] md:text-[24px]">
                  In{" "}
                  <strong className="text-[red] text-[24px] md:text-[28px]">
                    14 Weekends
                  </strong>
                </span>
              </div>
              <p className="text-[12px] sm:text-[14px] md:text-[18px] lg:text-[24px] font-[700] mt-3 whitespace-nowrap overflow-x-auto">
                Build | Deploy | Get Hired as an AI Engineer
              </p>
            </div>
                
              </div>

              <div className="md:order-2 order-1 my-auto">
                <LearningAdvisorForm
                  setFormType={setFormType}
                  formType="default"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Form End */}

        {/* UpcomingBatches */}
        <UpcomingBatches />

        {/* Projects Start */}
        <section id="from1" className="my-[40px] md:my-[60px] px-4 md:px-6">
          <p className="sm:text-center text-neutral-800 text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">
          The BlueTick AI<br />Advantage
          </p>
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-1 sm:px-4">
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


        <div className="" id="courses">

        <CourseSection />
        </div>

        {/* Courses Start */}
        {/* <section id="courses" className="my-[40px] md:my-[60px]">
          <div className="container bg-[#F6F6F6] rounded-[25px] min-[1440px]:max-w-[1440px] mx-auto px-4 md:px-8 py-10">
            <p className="bg-gradient-to-b from-[#FD9055] to-[#FE4855] bg-clip-text text-transparent pl-[13px] sm:pl-0 md:text-center text-[23px] md:text-[42px] font-semibold leading-[30px] md:leading-[54.60px]">
              Explore Digital Marketing
              <br />
              Courses with AI
            </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 mt-4 gap-5 px-3 md:px-8">
              {courses.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm mx-auto max-w-[550px] max-[768px]:w-[100%]"
                >
                  <div className="bg-[#B2E1FE] flex justify-center w-full">
                    <Image
                      className="rounded-t-lg h-[150px] md:h-[200px]"
                      src={item.img}
                      alt="no-course"
                      width={400}
                      height={200}
                    />
                  </div>
                  <div className="p-5">
                    <h5 className="mb-2 text-[18px] md:text-2xl font-bold tracking-tight text-gray-900">
                      {item.title}
                    </h5>

                    <div className="flex gap-2 items-center">
                      <div className="px-1 md:px-2 py-1 md:py-2 flex items-center justify-center bg-black rounded-[100%]">
                        <Image
                          className="w-[15px] md:w-[20px]"
                          src="/img/calendar.svg"
                          alt="no-calender"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="text-[14px] md:text-[18px]">
                        {item.duration}
                      </span>
                    </div>
                    <ul className="list-disc pl-6 md:pl-8 mt-2">
                      <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                        {item.list_1}
                      </li>
                      <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                        {item.list_2}
                      </li>
                      <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                        {item.list_3}
                      </li>
                      {item.list_4 && (
                        <li className="marker:text-xl md:marker:text-2xl text-[14px] md:text-[18px] pl-1.5 md:pl-[12px]">
                          {item.list_4}
                        </li>
                      )}
                    </ul>

                    <div className="md:text-end max-[640px]:mx-2">
                      <button
                        onClick={() => {
                          setModalOpen(true);
                          setFormType("default");
                        }}
                        type="button"
                        className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer max-[768px]:w-full mt-5 text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] rounded-lg text-[16px] md:text-lg px-8 py-1 md:py-2.5 uppercase text-center me-2 mb-2 font-bold"
                      >
                        Apply NOW
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section> */}
        {/* Courses End */}

        {/* Your Dream Job Start */}
        <section className="my-[40px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
              {/* Left Content */}
              <div>
                <p className="font-bold text-[26px] md:text-[32px]">
                Your Dream AI Career, Our Mission
                  <br />
                  <span className="bg-[#FBE7C1] font-bold">
                  One transformation at a Time!
                  </span>
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px]">
                    <div className="flex justify-start">
                      <Image
                        src="/img/student.svg"
                        alt="no icons"
                        className="w-[100px] h-[90px] md:w-[100px] md:h-[100px] object-contain"
                        width={100}
                        height={100}
                      />
                    </div>
                    <p className="text-neutral-900 text-[24px] font-bold mt-3">
                      10,000<span className="text-[red]">+</span>
                    </p>
                    <p className="text-neutral-700 text-[16px]">
                    Professionals Upskilled
                    </p>
                  </div>
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px]">
                    <div className="flex justify-start">
                      <Image
                        src="/img/trainer.svg"
                        alt="no icons"
                        className="w-[100px] h-[90px] md:w-[100px] md:h-[100px] object-contain"
                        width={100}
                        height={100}
                      />
                    </div>
                    <p className="text-neutral-900 text-[24px] font-bold mt-3">
                      1:15
                    </p>
                    <p className="text-neutral-700 text-[16px]">
                    Mentor-to-Learner Ratio
                    </p>
                  </div>
                  <div className="text-start mt-[40px] px-[2px] md:px-[10px]">
                    <div className="flex justify-start">
                      <Image
                        src="/img/record.svg"
                        alt="no icons"
                        className="w-[100px] h-[90px] md:w-[100px] md:h-[100px] object-contain"
                        width={100}
                        height={100}
                      />
                    </div>
                    <p className="text-neutral-900 text-[24px] font-bold mt-3">
                      97%
                    </p>
                    <p className="text-neutral-700 text-[16px]">
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
                  <p className=" text-[18px] md:text-[28px] font-bold">
                    <strong className="text-[#FD8A55] font-bold text-[24px] md:text-[28px]">
                      Take a Step Now
                    </strong>
                    <br />
                    Let’s build it Together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Your Dream Job End */}

        <TechLandscapeHero />

        <ApplySection />

        <TransformationSection />

        <AIHeroSection />
        
        
        <AIDashboardSection /> 

        {/* Map start */}
        <section className="mb-[20px] max-[768px]:mt-[-15px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
            <p className="text-center mt-4 font-bold text-[16px] md:text-[18px] text-[#FE7C55]">
              GLOBAL PRESENCE
            </p>
            <p className="font-semibold text-[26px] md:text-[32px] text-center text-[#242424] mb-10">
              Learners from 30
              <span className="border-b-[4px] border-[#FE7C55]">+ Countr</span>
              ies
            </p>
            <MapWithPoints />
          </div>
        </section>
        {/* Map End */}

        {/* Accordions */}
        {/* <section className="my-[40px] md:my-[60px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-8 md:px-4">
            <p className="font-bold text-[26px] md:text-[32px] max-[640px]:pr-2">
              Digital Marketing Courses
              <br />
              in Bangalore -{" "}
              <span className="text-[#007BFC] text-[26px] font-[400]">
                Everything you should know!
              </span>
            </p>

            <Accordion items={accardiancontent} />
          </div>
        </section>
         */}

        
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
