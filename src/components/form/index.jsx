'use client';
import { useState } from 'react';
import Image from 'next/image';
const Captcha = "/img/captcha.webp";
const FormBack = "/img/formback.svg";
import Popup from '../popup';

export default function LearningAdvisorForm({ formType, setFormType }) {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [popupType, setPopupType] = useState("success");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    company: "",
    location: "",
    learningMode: "",
    codingExperience: "", // New field
    captchaChecked: false,
  });
  const [errors, setErrors] = useState({});

  // -------------------- Validation --------------------
  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      tempErrors.email = "Invalid email";
    if (!formData.mobile.match(/^\d{10}$/))
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    if (formType === "hire" && !formData.company.trim())
      tempErrors.company = "Company name is required";
    if (formType === "franchisee" && !formData.location.trim())
      tempErrors.location = "Location name is required";
    if (!(formType === "hire" || formType === "franchisee") && !formData.learningMode)
      tempErrors.learningMode = "Select a learning mode";
    if (formType === "default" && !formData.codingExperience)
      tempErrors.codingExperience = "Please select your coding experience level";
    if (formType === "default" && !formData.captchaChecked)
      tempErrors.captchaChecked = "Please verify the captcha";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // -------------------- Handle Input --------------------
  const handleChange = (e) => {
    const { id, value, type, checked, name } = e.target;
    setFormData({
      ...formData,
      [name || id]: type === "checkbox" ? checked : value,
    });
  };

  // -------------------- Submit to Zoho CRM --------------------
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Type:", formType);
    console.log("Form Data:", formData);

    if (!validate()) {
      console.warn("Validation failed");
      return;
    }

    try {
      console.log("Sending data to Zoho CRM...");

      // Send to your API route that will handle Zoho CRM integration
      const res = await fetch('/api/zoho-lead', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formType,
        }),
      });

      const result = await res.json();
      console.log("Zoho CRM API Response:", result);

      if (result.success) {
        let message = "";
        if (formType === "hire") {
          message = "Your hiring enquiry has been received. Our recruitment team will contact you soon.";
        } else if (formType === "franchisee") {
          message = "Thank you for your interest in our franchise! Our business team will reach out shortly.";
        } else {
          message = "Your registration is successful. Our learning advisor will reach out to you shortly.";
        }

        setPopupType("success");
        setPopupMessage(message);
        console.log("Lead synced successfully to Zoho CRM");
      } else {
        setPopupType("error");
        setPopupMessage(result.error || "Zoho CRM API failed. Please try again.");
        console.error("Zoho Error:", result.error);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setPopupType("error");
      setPopupMessage("Something went wrong! Please try again.");
    } finally {
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        mobile: "",
        company: "",
        location: "",
        learningMode: "",
        codingExperience: "",
        captchaChecked: false,
      });
      setErrors({});
      e.target.reset();
    }
  };

  // -------------------- Render --------------------
  return (
    <div className="px-2 md:px-8 relative my-auto">
      <Image
          src={FormBack}
          alt="Form Background"
          width={400}
          height={400}
          className="absolute right-0 bottom-0 z-[-10] h-full w-auto pointer-events-none select-none"
        />

      <p className="text-center text-[20px] md:text-[18px] font-[500] sm:bg-[#F7F8F9] py-4 sm:border border-[#f5f7f8] mx-[10px] sm:mx-[20px]">
        {formType === "franchisee" ? (
          <span className="font-bold border-b-[4px] border-[#FE7C55]">Franchise Enquiry</span>
        ) : formType === "hire" ? (
          <span className="font-bold border-b-[4px] border-[#FE7C55]">Hiring Enquiry</span>
        ) : (
          <span className="font-bold border-b-[4px] border-[#FE7C55]">Apply for Next Cohort</span>
        )}
      </p>

      <form
        id="form"
        onSubmit={handleSubmit}
        className="mx-[10px] sm:mx-[20px] py-4 sm:py-8 px-3 md:px-8 border-[#EEEEEE] border max-[640px]:rounded-[5px] bg-white"
      >
        {/* Name */}
        <div className="mb-5">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Mobile */}
        <div className="mb-5">
          <input
            type="number"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Number"
            className="bg-white outline-none border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}
        </div>

        {/* Email */}
        <div className="mb-5">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Company (Hire Form Only) */}
        {formType === "hire" && (
          <div className="mb-5">
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {errors.company && <p className="text-red-500 text-sm">{errors.company}</p>}
          </div>
        )}

        {/* Location (Franchisee Form Only) */}
        {formType === "franchisee" && (
          <div className="mb-5">
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="bg-white border outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            />
            {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
          </div>
        )}

        {/* Learning Mode (Default Only) */}
        {!(formType === "hire" || formType === "franchisee") && (
          <div className="mb-5">
            <p className="text-[#556376] py-2 font-semibold">Mode Selection</p>
            <div className="flex flex-col gap-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="learningMode"
                  value="Online"
                  checked={formData.learningMode === "Online"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300"
                />
                <p className="text-[#556376] pl-3">Online</p>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="learningMode"
                  value="Offline (Indiranagar, besides metro station)"
                  checked={formData.learningMode === "Offline (Indiranagar, besides metro station)"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300"
                />
                <p className="text-[#556376] pl-3">Offline (Indiranagar, Besides Metro Station)</p>
              </label>
                {/* Google Maps Link */}
                {formData.learningMode === "Offline (Indiranagar, besides metro station)" && (
                  <div className="ml-7 mt-2">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Bluetick+Academy,+2nd+floor,+545,+Chinmaya+Mission+Hospital+Rd,+Stage+1,+Indiranagar,+Bengaluru,+Karnataka+560038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-blue-600 border border-gray-300 hover:border-blue-500 rounded-lg px-3 py-1.5 transition-all"
                    >
                      
                      <span>View Location</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6H10M10 6L6 2M10 6L6 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                )}

            </div>
            {errors.learningMode && <p className="text-red-500 text-sm mt-2">{errors.learningMode}</p>}
          </div>
        )}

        {/* Coding Experience (Default Only) */}
        {!(formType === "hire" || formType === "franchisee") && (
          <div className="mb-5">
            <p className="text-[#556376] py-2 font-semibold">Coding Experience</p>
            <div className="flex flex-col gap-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="codingExperience"
                  value="I have coding experience"
                  checked={formData.codingExperience === "I have coding experience"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300"
                />
                <p className="text-[#556376] pl-3">I have coding experience</p>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="codingExperience"
                  value="I am a beginner (Additional 4 Weekends Python bootcamp)"
                  checked={formData.codingExperience === "I am a beginner (Additional 4 Weekends Python bootcamp)"}
                  onChange={handleChange}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300"
                />
                <p className="text-[#556376] pl-3">I am a beginner (Additional 4 Weekends Python bootcamp)</p>
              </label>
            </div>
            {errors.codingExperience && <p className="text-red-500 text-sm mt-2">{errors.codingExperience}</p>}
          </div>
        )}

        {/* Captcha (Default Only) */}
        {formType === "default" && (
          <div className="captcha-box border border-gray-300 rounded-lg p-2 flex items-center justify-between my-3 max-w-[300px]">
            <span className="flex items-center">
              <input
                type="checkbox"
                id="captchaChecked"
                name="captchaChecked"
                checked={formData.captchaChecked}
                onChange={handleChange}
                className="mr-2 w-6 h-6"
              />
              <label htmlFor="captchaChecked" className="text-[#556376] max-[768px]:text-[12px]">
                I am not a robot
              </label>
            </span>
            <Image
              src={Captcha}
              alt="captcha"
              width={60}
              height={40}
              className="w-[60px] h-[40px]"
            />
          </div>
        )}
        {errors.captchaChecked && <p className="text-red-500 text-sm">{errors.captchaChecked}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer text-white bg-gradient-to-b from-[#FD9055] to-[#FE4855] font-medium rounded-lg text-lg px-8 w-full py-1 md:py-2 text-center my-3 uppercase"
        >
          {formType === "franchisee" || formType === "hire" ? "Submit" : "REGISTER"}
        </button>
      </form>

      {showPopup && (
        <Popup
          message={popupMessage}
          type={popupType}
          onClose={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}
