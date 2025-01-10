"use client";
import React from "react";
import Image from "next/image";

// Importing images
import Google from "../../../../../public/assets/companyLogo/google.png";
import TCS from "../../../../../public/assets/companyLogo/tcs.png";
import Infosys from "../../../../../public/assets/companyLogo/infosys.png";
import Salesforce from "../../../../../public/assets/companyLogo/salesforce.png";
import Intel from "../../../../../public/assets/companyLogo/intel.png";
import RedHat from "../../../../../public/assets/companyLogo/redhat.png";
import Razorpay from "../../../../../public/assets/companyLogo/razorpay.png";
import Wipro from "../../../../../public/assets/companyLogo/wipro.png";
import Zoho from "../../../../../public/assets/companyLogo/zoho.png";
import Oracle from "../../../../../public/assets/companyLogo/oracle.png";
import Searce from "../../../../../public/assets/companyLogo/searce.png";
import Syfe from "../../../../../public/assets/companyLogo/syfe.png";
import Paytm from "../../../../../public/assets/companyLogo/paytm.png";
import PWC from "../../../../../public/assets/companyLogo/pwc.png";
import Nykaa from "../../../../../public/assets/companyLogo/nykaa.png";
import NPCI from "../../../../../public/assets/companyLogo/NPCI_logo.png";
import Accenture from "../../../../../public/assets/companyLogo/accenture.png";
import JPMorgan from "../../../../../public/assets/companyLogo/jpmorgan.png";
import Microsoft from "../../../../../public/assets/companyLogo/microsoft.png";
import Deloitte from "../../../../../public/assets/companyLogo/deloitte.png";
import Dell from "../../../../../public/assets/companyLogo/dell.png";
import IBM from "../../../../../public/assets/companyLogo/ibm.png";

const ServiceFeeCarousel = () => {
  const firstRowLogos = [
    { src: Google, alt: "Google" },
    { src: TCS, alt: "TCS" },
    { src: Infosys, alt: "Infosys" },
    { src: Salesforce, alt: "Salesforce" },
    { src: Intel, alt: "Intel" },
    { src: RedHat, alt: "RedHat" },
    { src: Razorpay, alt: "Razorpay" },
    { src: Wipro, alt: "Wipro" },
    { src: Zoho, alt: "Zoho" },
    { src: Oracle, alt: "Oracle" },
  ];

  const secondRowLogos = [
    { src: Searce, alt: "Searce" },
    { src: Syfe, alt: "Syfe" },
    { src: Paytm, alt: "Paytm" },
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

  // Duplicate the logos for seamless infinite scrolling
  const firstRowLogosLoop = [...firstRowLogos, ...firstRowLogos];
  const secondRowLogosLoop = [...secondRowLogos, ...secondRowLogos];
  // bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000]

  
  return (
    <div className="bg-red-600">
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="w-full">
          {/* First row of logos */}
          <div className="flex items-center my-6 whitespace-nowrap animate-move-left">
            {firstRowLogosLoop.map((logo, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <div className="w-24 h-12 flex items-center justify-center bg-white border rounded-xl">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second row of logos */}
          <div className="flex items-center my-6 whitespace-nowrap animate-move-right">
            {secondRowLogosLoop.map((logo, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <div className="w-24 h-12 flex items-center justify-center bg-white border rounded-xl">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={60}
                    height={60}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes move-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes move-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-move-left {
          animation: move-left 30s linear infinite;
        }

        .animate-move-right {
          animation: move-right 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default ServiceFeeCarousel;
