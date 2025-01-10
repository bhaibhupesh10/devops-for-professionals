"use client";
import React from 'react';
import Image from 'next/image'; // Importing Next.js Image component

// Importing images as StaticImageData objects
import Google from "../../../../../public/assets/companyLogo/google.png";
import Infosys from "../../../../../public/assets/companyLogo/infosys.png";
import Salesforce from "../../../../../public/assets/companyLogo/salesforce.png";
import Razorpay from "../../../../../public/assets/companyLogo/razorpay.png";
import Wipro from "../../../../../public/assets/companyLogo/wipro.png";
import Zoho from "../../../../../public/assets/companyLogo/zoho.png";
import Oracle from "../../../../../public/assets/companyLogo/oracle.png";
import Syfe from "../../../../../public/assets/companyLogo/syfe.png";
import PWC from "../../../../../public/assets/companyLogo/pwc.png";
import Nykaa from "../../../../../public/assets/companyLogo/nykaa.png";
import NPCI from "../../../../../public/assets/companyLogo/NPCI_logo.png";
import Accenture from "../../../../../public/assets/companyLogo/accenture.png";
import JPMorgan from "../../../../../public/assets/companyLogo/jpmorgan.png";
import Microsoft from "../../../../../public/assets/companyLogo/microsoft.png";
import Deloitte from "../../../../../public/assets/companyLogo/deloitte.png";
import Dell from "../../../../../public/assets/companyLogo/dell.png";
import IBM from "../../../../../public/assets/companyLogo/ibm.png";

const MentorFeatured = () => {
  const logos = [
    { src: Google, alt: "Google" },
    { src: Infosys, alt: "Infosys" },
    { src: Salesforce, alt: "Salesforce" },
    { src: Razorpay, alt: "Razorpay" },
    { src: Wipro, alt: "Wipro" },
    { src: Zoho, alt: "Zoho" },
    { src: Oracle, alt: "Oracle" },
    { src: Syfe, alt: "Syfe" },
    { src: PWC, alt: "PWC" },
    { src: Nykaa, alt: "Nykaa" },
    { src: NPCI, alt: "NPCI" },
    { src: Accenture, alt: "Accenture" },
    { src: JPMorgan, alt: "JPMorgan" },
    { src: Microsoft, alt: "Microsoft" },
    { src: Deloitte, alt: "Deloitte" },
    { src: Dell, alt: "Dell" },
    { src: IBM, alt: "IBM" },
  ];

  return (
    <div className="relative overflow-hidden bg-white ">
      <div className="flex items-center space-x-4 whitespace-nowrap overflow-hidden">
        {/* Animated scrolling container */}
        <div className="flex animate-scroll space-x-8">
          {[...logos, ...logos].map((logo, index) => ( // Duplicate logos array for seamless scrolling
            <div key={index} className="flex-shrink-0 h-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={100}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default MentorFeatured;
