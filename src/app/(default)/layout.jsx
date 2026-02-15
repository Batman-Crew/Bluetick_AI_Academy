"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ToastContainer } from "react-toastify";
import React, { useState } from "react";

export default function Whiteheader({ children }) {
  const [formType, setFormType] = useState("default");

  console.log("Whiteheader - formType:", formType);

  return (
    <div>
      {/* Google Tag Manager */}
      <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WCMHBSGS');</script>
      {/* End Google Tag Manager */}
      <Header formType={formType} setFormType={setFormType} />

      {/* Ensure children receive formType and setFormType */}
      {React.Children.map(children, (child) =>
        React.isValidElement(child) ? React.cloneElement(child, { formType, setFormType }) : child
      )}

      <Footer formType={formType} setFormType={setFormType}/>
      <ToastContainer />
    </div>
  );
}
