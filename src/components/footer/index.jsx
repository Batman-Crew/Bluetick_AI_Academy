"use client";

import React, { useState } from "react";
import Logo from "@/assets/img/logo.svg";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import LearningAdvisorForm from "../form";
import Modal from "../model";
import Popup from "../popup";

function Footer({ formType, setFormType }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success");
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [errors, setErrors] = useState({});

  // ✅ Validate email
  const validate = () => {
    let tempErrors = {};
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      tempErrors.email = "Invalid email address";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // ✅ Submit newsletter form → Zoho + Meta Pixel
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      console.log("📰 Sending newsletter signup → Zoho...");
      const API_URL = "https://4tm07os0jl.execute-api.ap-south-1.amazonaws.com/prod/items";

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          formType: "newsletter",
        }),
      });

      const result = await res.json();
      console.log("📨 Zoho API Response:", result);

      if (result.success) {
        setPopupType("success");
        setPopupMessage("✅ Thank you for subscribing to our newsletter!");

        // ✅🔥 FIRE META LEAD EVENT FOR NEWSLETTER
        if (window.fbq) {
          const id =
            crypto.randomUUID?.() || String(Date.now());
          window.fbq("track", "Lead", { source: "newsletter" }, { eventID: id });
          console.log("📩 Newsletter Lead Event Fired:", id);
        }
      } else {
        setPopupType("error");
        setPopupMessage("⚠️ Subscription failed. Please try again later.");
      }

      setFormData({ email: "" });
      setErrors({});
    } catch (error) {
      console.error("🚨 Newsletter error:", error);
      setPopupType("error");
      setPopupMessage("Something went wrong! Please try again later.");
    } finally {
      setShowPopup(true);
    }
  };

  return (
    <>
      <section className="bg-[#272727] pb-5 mt-[50px] md:mt-[80px]">
        <div className="">
          {/* --- TOP SOCIAL + CONTACT GRID --- */}
          <div className="grid grid-cols-12">
            <div className="py-5 px-5 border border-[#4F4F4F] md:block hidden col-span-2">
              <Image src={Logo} alt="no-logo" />
            </div>

            {["facebook", "twitter", "youtube", "linkedin", "instagram"].map(
              (social) => (
                <div
                  key={social}
                  className="py-5 px-2 md:border border-[#4F4F4F] flex justify-center items-center max-[768px]:col-span-2"
                >
                  <Icon
                    icon={`mdi:${social}`}
                    width="24"
                    height="24"
                    className="text-white"
                  />
                </div>
              )
            )}

            {/* ✅ Email link (no change) */}
            <div className="col-span-12 md:col-span-3 lg:col-span-3">
              <Link href="mailto:info@bluetickacademy.com">
                <div className="py-2 md:py-8.5 px-4 md:px-2 md:border border-[#4F4F4F] flex gap-1 items-center">
                  <Icon icon="ic:baseline-email" width="24" height="24" className="text-white" />
                  <p className="text-white">info@bluetickacademy.com</p>
                </div>
              </Link>
            </div>

            {/* ✅🔥 Added js-call-cta for phone click tracking */}
            <div className="col-span-12 md:col-span-2">
              <Link href="tel:+919606995525" className="js-call-cta">
                <div className="py-3 md:py-8.5 px-4 md:px-3 border-b md:border border-[#4F4F4F] flex gap-1 items-center">
                  <Icon icon="gg:phone" width="24" height="24" className="text-white" />
                  <p className="text-white">+91-9606 9955 25</p>
                </div>
              </Link>
            </div>
          </div>

          {/* --- QUICK LINKS + NEWSLETTER --- */}
          <div className="grid md:grid-cols-3 px-8 py-8">
            <div className="md:col-span-2">
              <p className="text-white py-2">Quick Link</p>

              <div className="md:flex gap-5">
                <Link href="#courses">
                  <span className="flex gap-2 text-white py-1">
                    <Icon icon="weui:arrow-outlined" width="12" height="24" className="text-[#FE4855]" />
                    Our Courses
                  </span>
                </Link>

                <span
                  onClick={() => {
                    setFormType("hire");
                    setModalOpen(true);
                  }}
                  className="cursor-pointer flex gap-2 text-white py-1"
                >
                  <Icon icon="weui:arrow-outlined" width="12" height="24" className="text-[#FE4855]" />
                  Hire From Us
                </span>

                <span
                  onClick={() => {
                    setFormType("franchisee");
                    setModalOpen(true);
                  }}
                  className="cursor-pointer flex gap-2 text-white py-1"
                >
                  <Icon icon="weui:arrow-outlined" width="12" height="24" className="text-[#FE4855]" />
                  Franchisee Enquiry
                </span>
              </div>
            </div>

            {/* ✅ Newsletter Form */}
            <div>
              <p className="text-white font-semibold text-[18px] md:text-[20px] py-2">
                Sign up to our newsletter
              </p>
              <p className="text-white text-[14px] md:text-[18px] my-2">
                Keep yourself up to date with the latest hiring news and course updates.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-5">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-gray-800 border border-gray-300 text-white text-sm rounded-lg block w-full p-2.5 my-3"
                    placeholder="Email address*"
                    required
                  />

                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <button
                  type="submit"
                  className="cursor-pointer text-white bg-gradient-to-b from-orange-500 to-red-500 font-medium rounded-lg text-sm md:text-lg px-8 w-full py-2 text-center"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <span className="text-white text-center">
          <p className="text-[12px] md:text-[18px] font-[400] py-3">
            © Copyright 2025 BlueTick Academy, All Rights Reserved
          </p>

          <span className="flex gap-5 justify-center text-sm md:text-lg font-[600]">
            <Link href="/privacypolicy"><p className="cursor-pointer">Privacy Policy</p></Link>
            <Link href="/termsandcondition"><p className="cursor-pointer">Terms & Conditions</p></Link>
            <Link href="/contact_us"><p className="cursor-pointer">Contact Us</p></Link>
          </span>
        </span>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <LearningAdvisorForm formType={formType} setFormType={setFormType} />
      </Modal>

      {showPopup && (
        <Popup
          message={popupMessage}
          type={popupType}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
}

export default Footer;

