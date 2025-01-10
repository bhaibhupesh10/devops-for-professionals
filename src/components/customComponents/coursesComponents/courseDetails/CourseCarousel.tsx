import React from 'react'
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

function CourseCarousel() {
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

  return (
    <div className="pt-8 w-full pb-0 relative bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="container px-4 md:px-12 max-w-5xl mx-auto bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] pb-6 rounded-xl relative">
          {/* Tag with number - Hidden on mobile */}
          <div className="hidden md:block absolute -top-2 left-12">
            <div className="relative w-20 h-24">
              <img 
                alt="numbering" 
                className="w-full h-full" 
                src="/assets/tag4.png"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="md:hidden absolute -top-2 left-4 w-8 h-8 bg-red-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">4</span>
          </div>

          {/* Content section */}
          <div className="pt-6 pl-4 md:pl-16">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-4 ml-4 md:ml-16">
                  Become a DevOps Engineer
                </h1>
                <div className="text-white/90 max-w-5xl ml-4 md:pl-12">
                  <p className="text-sm mb-2">
                    Get ready to be hired by core tech companies & secure a package between ₹4,00,000 - ₹8,00,000
                  </p>
                  <p className="font-semibold text-white/70">
                    (Note : 100% refund if not hired)
                  </p>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="mt-8 px-0 md:px-16 md:-ml-12  ">
              <div className=" rounded-lg  overflow-hidden ">
                <div className="relative overflow-hidden mx-auto ">
                  <div className="w-full ">
                    {/* First row of logos */}
                    <div className="flex items-center my-2 whitespace-nowrap animate-move-left ">
                      {firstRowLogosLoop.map((logo, index) => (
                        <div key={index} className="mx-6 flex-shrink-0">
                          <div className="w-24 h-12 flex items-center justify-center bg-white  rounded-xl">
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
              </div>
            </div>
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
  )
}

export default CourseCarousel