"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dynamic from "next/dynamic";

// ---------- CONSTANTS FROM OTHER FILES ----------
import {
  accardiancontent,
  accardiancontentfaq,
  Student0,
  Student1,
  Student2,
  Student3,
  Student4,
  Student5,
} from "@/constant";
import AISection from "@/components/ai_section/AISection";
import TechLandscapeHero from "@/components/tech_section/TechLandScape";
import CourseSection from "@/components/course_section/CourseSection";
import ApplySection from "@/components/apply_section/ApplySection";
import AIHeroSection from "@/components/ai_hero_section/AIHeroSection";
import AIDashboardSection from "@/components/ai_tools/AITools";
import TransformationSection from "@/components/transformation_section/TransformationSection";
import TeamPage from "@/components/team_section/TeamsPage";
import UpcomingBatches from "@/components/upcoming_batch/UpcomingBatches";

// ------------------- DYNAMIC COMPONENTS -------------------
const Header = dynamic(() => import("@/components/header"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
const TestimonialSlider = dynamic(() => import("@/components/testimonail"), {
  ssr: false,
});
const MapWithPoints = dynamic(() => import("@/components/map"), {
  ssr: false,
});
const Accordion = dynamic(() => import("@/components/accardian"), {
  ssr: false,
});
const ScrollLinked = dynamic(() => import("@/components/silde"), {
  ssr: false,
});
const LearningAdvisorForm = dynamic(() => import("@/components/form"), {
  ssr: false,
});
const OrbitAnimation = dynamic(() => import("@/components/orbitanimation"), {
  ssr: false,
});
const Modal = dynamic(() => import("@/components/model"), { ssr: false });

// ------------------- EMAIL CONFIG -------------------
const SERVICE_ID = "service_kuuj0j4";
const TEMPLATE_ID = "template_havnc1k";
const PUBLIC_KEY = "Ud5ewrBIdTbH3ywgS";

// ------------------- STATIC DATA USING PUBLIC IMAGES -------------------

// Testimonials
const allCards = [
  {
    id: 1,
    name: "Jeevan",
    img: "/img/photo/1.jpg",
    company: "/img/company/filpkart.jpg",
    des: "Didnt expect to learn so much in such a short time! The live projects were the best part coz you actually get to apply what you learn. Trainers are chill and explain stuff in simple terms. Defrecommend if you are serious about digital marketing.",
  },
  {
    id: 2,
    name: "Keerthi Vasan",
    img: "/img/photo/2.jpg",
    company: "/img/student/ey.png",
    des: "I was looking for a digital marketing course that could make me hands on, not just too much in theory. Bluetick Academy was exactly doing that. The assignments were useful and I am able managing marketing campaigns on my own.",
  },
  {
    id: 3,
    name: "Harini Pandiaraj",
    img: "/img/photo/3.jpg",
    company: "/amazon.png",
    des: "Blue tick helped me understand how actually works. I learned SEO, Google Ads, and social media marketing from scratch. The live projects were most important of all. Thanks to the trainers.",
  },
  {
    id: 4,
    name: "Lekha",
    img: "/img/photo/4.jpg",
    company: "/img/student/ecom.png",
    des: "First of all, thanks to the trainers. They actually teach you how to run ads, optimize campaigns, and track results.This course gave me everything I needed to implement digital marketing in my business.",
  },
  {
    id: 5,
    name: "Bright Prabahar",
    img: "/img/photo/5.jpg",
    company: "/img/student/ola.svg",
    des: "The trainers are patient and explain everything clearly. I compared 3-4 institutes before choosing Bluetick academy and I’m happy about my decision. I am handling huge budget in my company now with the knowledge gained.",
  },
  {
    id: 6,
    name: "Priyal Bather",
    img: "/img/photo/6.jpg",
    company: "/img/student/decode.png",
    des: "Digital marketing was completely new for me, but the way they teach makes it very easy to understand. I landed in a job and could crack my 2 nd interview itself.",
  },
  {
    id: 7,
    name: "Atul",
    img: "/img/photo/7.jpg",
    company: "/img/student/hcg.png",
    des: "One of the best things of Bluetick academy is the practical approach. You actually create the campaign ads sitting in the class itself. The trainers are too good, and they make sure everyone understands before moving to the next topic.",
  },
  {
    id: 8,
    name: "Akash",
    img: "/img/photo/8.jpg",
    company: "/img/student/adverb.jpeg",
    des: "The course was well-structured and easy to follow. The placement assistance helped me land my first job in digital marketing. I feel so much more confident in handling digital campaigns now.",
  },
  {
    id: 9,
    name: "Girish",
    img: "/img/photo/9.jpg",
    company: "/img/student/edumerge.jpeg",
    des: "I joined to upskill and switch from sales to digital marketing. The curriculum covers everything in DM. Definitely learned a lot and it feels great to start my career through bluetick.",
  },
  {
    id: 10,
    name: "Aswini",
    img: "/img/photo/10.jpg",
    company: "/img/student/stock.png",
    des: "SEO and Google Ads were the toughest topics for me, but the way they taught it made a huge difference. I’ve already started handling projects on my own for my business. I love that they teach you everything step by step.",
  },
  {
    id: 11,
    name: "Shyam",
    img: "/img/photo/11.jpg",
    company: "/img/student/college.png",
    des: "I had tried learning digital marketing on my own but kept getting confused. This course cleared all my doubts. They even helped me complete my first freelance project. Would recommend even for beginners.",
  },
  {
    id: 12,
    name: "Edwin",
    img: "/img/photo/12.jpg",
    company: "/img/student/foxbro.png",
    des: "Honestly, I was a bit nervous before joining coz I had zero background in marketing. But the trainers made it really easy to understand. Practicing on all the projects in the class gave me confidence. I’m now handling end to end Digital marketing in my company and it’s going great.",
  },
];

const projects = [
  {
    id: 1,
    title: "Enterprise Grade AI Projects",
    des: "(Not just calling OpenAI APIs)",
    img: "/img/project.svg",
  },
  {
    id: 2,
    title: "100% Hands on Learning",
    des: "(No Boring Theory)",
    img: "/img/bulb.svg",
  },
  {
    id: 3,
    title: "Modern AI Stacks Coverage",
    des: "(50+ Applied AI Tools)",
    img: "/img/base.svg",
  },
  {
    id: 4,
    title: "Industry Expert mentors",
    des: "(Not just Academicians)",
    img: "/img/lence.svg",
  },
];

const courses = [
  {
    id: 1,
    title: "Professional Certification Program in Digital Marketing & Analytics",
    duration: "3 Months   |   Weekdays & Weekends",
    img: "/img/course.svg",
    list_1: "7 Courses in 1 program",
    list_2: "20+ Tools with AI and 15+ live Projects",
    list_3: "12+ Certifications",
  },
  {
    id: 2,
    title: "Post Graduate Program in Digital Marketing & Analytics",
    duration: "4.5 Months   |   Weekdays & Weekends",
    img: "/img/course_2.svg",
    list_1: "15 Courses in 1 program",
    list_2: "60+ Tools with AI and 25+ live Projects",
    list_3: "Guaranteed Job",
    list_4: "2 Specialisations",
  },
];

const cardData = [
  { id: 1, img: "/img/training.svg", text: "9+ years in training" },
  { id: 2, img: "/img/carrers.svg", text: "10k+ Careers Transformed" },
  { id: 3, img: "/img/job.svg", text: "Become Enterprise Ready" },
  { id: 4, img: "/img/future.svg", text: "Future Proof" },
];

function HomeClient() {
  const [visibleCards, setVisibleCards] = useState(3);
  const [formType, setFormType] = useState("default");
  const [expandedCards, setExpandedCards] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  // Background Image Start
  const [bgImage, setBgImage] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
      ? "/img/mobilebanner.webp"
      : "/img/banner.webp"
  );

  useEffect(() => {
    const handleResize = () => {
      setBgImage(
        window.innerWidth < 768 ? "/img/mobilebanner.webp" : "/img/banner.webp"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Background Image End

  const toggleExpand = (cardId) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };

  const handleLoadMore = () => {
    setVisibleCards(allCards.length);
  };

  const handleLoadLess = () => {
    setVisibleCards(3);
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    center: "",
    company: "",
    location: "",
    learningMode: "",
    captchaChecked: false,
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid email";
    if (!formData.mobile.match(/^\d{10}$/))
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    if (
      (formType === "franchisee" || formType === "default") &&
      !formData.center
    )
      tempErrors.center = "Select a center";
    if (formType === "hire" && !formData.company.trim())
      tempErrors.company = "Company name is required";
    if (formType === "franchisee" && !formData.location.trim())
      tempErrors.location = "Location name is required";
    if (
      !(formType === "hire" || formType === "franchisee") &&
      !formData.learningMode
    )
      tempErrors.learningMode = "Select a learning mode";
    if (!formData.captchaChecked)
      tempErrors.captchaChecked = "Please verify the captcha";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [name || id]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const services = [
      { id: "service_ik53pgl", email: "shyam.ceg1990@gmail.com" },
      { id: "service_qdkj8mf", email: "sandyanithy@gmail.com" },
    ];

    try {
      await Promise.all(
        services.map((service) => {
          const formDataWithEmail = { ...formData, to_email: service.email };
          return emailjs.send(
            service.id,
            TEMPLATE_ID,
            formDataWithEmail,
            PUBLIC_KEY
          );
        })
      );

      toast.success("Emails sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        center: "",
        company: "",
        location: "",
        learningMode: "",
        captchaChecked: false,
      });
      setErrors({});
      e.target.reset();
    } catch (error) {
      console.log("Error sending emails:", error?.text || error);
      toast.error("Failed to send emails!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

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
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="md:py-[40px] max-[768px]:pb-[20px] max-[768px]:pt-[130px] max-[768px]:mt-[-80px]"
        >
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-3 px-3">
              <div>
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
                        Explore Courses
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
                        Explore Courses
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
            {[
              "accenture.png",
              "zomato.png",
              "unacadamy.png",
              "tcs.png",
              "razorpay.png",
              "phope.png",
              "paytm.png",
              "nykaa.png",
              "netflix.png",
              "meesho.avif",
              "freshwork.png",
              "dream11.png",
              "curekit.png",
              "cognizent.png",
              "amazon.png",
              "adobe.png",
              "uber.png",
              "swiggy.jpg",
              "salesforce.png",
              "google.png",
              "filpkart.jpg",
            ].map((file, idx) => (
              <Image
                key={idx}
                className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain"
                src={`/img/company/${file}`}
                alt={file}
                width={120}
                height={60}
              />
            ))}
          </Marquee>
        </section>
        {/* Marquee End */}


        {/* Here I need The AI section Here */}

        <AISection /> 

        {/* Form Start */}
        <section className="my-[30px] md:my-[50px]">
          <div className="container min-[1440px]:max-w-[1440px] mx-auto px-3 md:px-6">
            <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 md:gap-10">
              <div style={{
            backgroundImage: `url(/img/formimage.png)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }} className="flex flex-col min-h-96 pt-2 items-center mt-[20px] sm:mt-[40px] lg:mt-1 bg-[#F9F7FF] md:order-1 order-2 pt-5 sm:pt-8">
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
                  <p className="text-[18px] md:text-[24px] font-[700]">
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
          The Bluetick-AI Advantage
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


        <TeamPage />
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
              {["logo_1.png", "logo_2.png", "logo_3.png", "logo_4.png"].map(
                (file, idx) => (
                  <div key={idx} className="flex justify-center items-center">
                    <Image
                      src={`/img/${file}`}
                      alt="no-logos"
                      className="w-full h-auto max-w-[150px]"
                      width={150}
                      height={60}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="block md:hidden">
            <Marquee loop={0} className="mt-3">
              {["logo_1.png", "logo_2.png", "logo_3.png", "logo_4.png"].map(
                (file, idx) => (
                  <Image
                    key={idx}
                    className="mx-6 w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] object-contain"
                    src={`/img/${file}`}
                    alt={file}
                    width={120}
                    height={60}
                  />
                )
              )}
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
