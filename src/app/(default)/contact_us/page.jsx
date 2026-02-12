"use client";

import Image from "next/image";
import LearningAdvisorForm from "@/components/form";
import { useEffect } from "react";

const centers = [
  {
    name: "BlueTick AI Academy – Indiranagar",
    address:
      "2nd floor, 545, Chinmaya Mission Hospital Rd, Indiranagar, Bengaluru, Karnataka 560038.",
    mapLink: "https://maps.app.goo.gl/yANDkYno1aacDy7j9",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2961.4849772733655!2d77.64194487358917!3d12.978360814733026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16afaed3e29b%3A0x1cebb35d47157387!2s545%2C%20Chinmaya%20Mission%20Hospital%20Rd%2C%20Indira%20Nagar%201st%20Stage%2C%20Hoysala%20Nagar%2C%20Indiranagar%2C%20Bengaluru%2C%20Karnataka%20560038!5e1!3m2!1sen!2sin!4v1742717548956!5m2!1sen!2sin",
  },
];

export default function ContactUs({ formType, setFormType }) {
  useEffect(() => {
    console.log("Contact Form Type:", formType);
  }, [formType]);

  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section
        style={{
          backgroundImage: "url('/img/banner.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4 pt-[110px] max-[768px]:mt-[-55px] md:pt-[80px]">
          <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <div className="max-[768px]:text-center">
              <p className="text-amber-400 text-[12px] md:text-base font-semibold uppercase tracking-widest">
                Contact Us
              </p>

              <h1 className="text-white text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-[35px] md:leading-[60px]">
                Have questions or need assistance?
              </h1>

              <p className="text-neutral-200 text-[10px] md:text-base">
                We're here to help! Reach out for course inquiries, enrollment, or support.
              </p>
            </div>

            {/* Contact SVG Image */}
            <div className="flex justify-center md:justify-end mt-[30px] md:mt-[100px]">
              <Image
                src="/img/contact-us.svg"
                alt="Contact Support"
                width={450}
                height={350}
                className="max-[768px]:w-[80%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT FORM ---------- */}
      <section className="my-[40px] md:my-[60px]">
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3">Contact Form</h2>

          <p className="text-[22px] font-[600] text-center mb-3">
            Fill out the form and we'll contact you shortly!
          </p>

          <p className="text-center mb-6">
            <strong>Phone:</strong>{" "}
            <a href="tel:+919606681814" className="text-blue-600">
              9606-6818-14
            </a>
          </p>

          <div className="max-w-[600px] mx-auto">
            <LearningAdvisorForm formType="default" setFormType={setFormType} />
          </div>
        </div>
      </section>

      {/* ---------- CENTERS ---------- */}
      <section className="my-[40px] md:my-[60px]">
        <div className="container min-[1440px]:max-w-[1440px] mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6">Our Centers</h2>

          <div className="grid md:grid-cols-1 gap-6 max-w-xl mx-auto">
            {centers.map((center, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <h3 className="text-xl font-semibold mb-2">{center.name}</h3>

                <p className="text-gray-700 mb-4">{center.address}</p>

                <iframe
                  src={center.embedSrc}
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                ></iframe>

                <a
                  href={center.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 block text-blue-500 hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
