import { motion } from "framer-motion";
import React, { memo } from "react";
import { FaPython } from "react-icons/fa";
import { TbSettingsCode } from "react-icons/tb";
import { LuBrain } from "react-icons/lu";
import { FaRobot } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { PiFilesLight } from "react-icons/pi";
import { SiOpenai } from "react-icons/si";

const topics = [
  { icon: <FaPython className="text-gray-200" />, label: "Python" },
  { icon: <TbSettingsCode className="text-gray-200" />, label: "Applied ML & MLOps" },
  { icon: <LuBrain className="text-gray-200" />, label: "Gen AI" },
  { icon: <FaRobot className="text-gray-200" />, label: "Agentic AI Workflows" },
  { icon: <IoSearchOutline className="text-gray-200" />, label: "RAG &amp; Agentic RAG" },
  { icon: <PiFilesLight className="text-gray-200" />, label: "MCPs" },
  { icon: <SiOpenai className="text-gray-200" />, label: "LLMOps" },
];

const AISection = () => {

  return (
    <section
    //  style={{
    //     backgroundImage: `url(${bgImage})`,
    //     backgroundPosition: "center",
    //     backgroundSize: "cover",
    //     backgroundRepeat: "no-repeat",
    //   }}
      className="py-16 bg-[#0c142c] md:py-24 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(100,200,255,0.3) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container max-w-[1440px] mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight">
            MASTER the
            <br />
            Full <span className="text-[#4ecafc]">AI Stack</span>
          </h2>
        </motion.div>

        {/* Flowchart */}
        <div className="flex flex-col items-center gap-0 max-w-md mx-auto mb-16 md:mb-20">
          {topics.map((topic, idx) => (
            <motion.div
              key={topic.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col items-center w-full"
            >
              {/* Node */}
              <div className="relative w-full max-w-[280px] md:max-w-[320px]">
                <div className="border-2 bg-[#0f1a2e] rounded-xl px-6 py-3 flex items-center justify-center gap-2 border-[#4ecafc] hover:bg-[#111d33] transition-all duration-300 cursor-default">
                  <span className="text-lg">{topic.icon}</span>
                  <span className="text-white text-sm md:text-base font-medium">
                    {topic.label}
                  </span>
                </div>
              </div>

              {/* Connector arrow */}
              {idx < topics.length - 1 && (
                <div className="flex flex-col items-center py-1">
                  <div className="w-px h-4 bg-[#4ecafc]" />
                  <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#4ecafc]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Experts */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-white text-xl md:text-2xl font-semibold text-center mb-8">
          Learn from Industry Experts building
          AI for Fortune 500 Companies
          </h3>

          <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
            {experts?.map((expert) => (
              <div key={expert.name} className="text-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[#2a4a6a] hover:border-[#4ecafc] transition-colors duration-300">
                  <img
                    src={expert.img}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white text-xs md:text-sm font-medium mb-1">
                  {expert.name}
                </p>
                <p className="text-[#4ecafc] text-xs font-bold uppercase tracking-wider">
                  {expert.company}
                </p>
              </div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default memo(AISection);
