"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Importing images as StaticImageData objects
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
import pinkcompany from "../../../../../public/assets/companyLogo/36.png";
import Mercedece from "../../../../../public/assets/companyLogo/mercedece.png";
import Tesco from "../../../../../public/assets/companyLogo/tesco.png";
import Airtel from "../../../../../public/assets/companyLogo/airtel.png";
import Allianz from "../../../../../public/assets/companyLogo/allianz.png";
import BankOfAmerica from "../../../../../public/assets/companyLogo/bankofamerica.png";
import BigBasket from "../../../../../public/assets/companyLogo/bigbasket.png";
import BluePlanet from "../../../../../public/assets/companyLogo/blueplanet.png";
import Capgemini from "../../../../../public/assets/companyLogo/capgemini.png";


const CompaniesCarousel = () => {
  const logos = [
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
    { src: pinkcompany, alt: "pinkcompany" },
    { src: Mercedece, alt: "Mercedeces" },
    { src: Tesco, alt: "Tesco" },
    { src: Airtel, alt: "Airtel" },
    { src: Allianz, alt: "Allianz" },
    { src: BankOfAmerica, alt: "BankOfAmerica" },
    { src: BigBasket, alt: "BigBasket" },
    { src: BluePlanet, alt: "BluePanet" },
    { src: Capgemini, alt: "Capgemini" },
  ];

  const containerRef = useRef(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Split the logos into chunks of 10 (only done once)
  const chunkedLogos = React.useMemo(() => {
    const result = [];
    for (let i = 0; i < logos.length; i += 11) {
      result.push(logos.slice(i, i + 10));
    }
    return result;
  }, [logos]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollOffset(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      <div className="relative overflow-hidden max-w-7xl mx-auto">
        <div className="text-3xl font-bold mx-auto text-center pt-20 md:pt-8 lg:pt-8">
          1356+ Leading companies hire
          <br />
          <span className="text-[#ff0000]">LinuxWorld Students </span> 🤝
        </div>
        <div className="text-md text-center text-gray-800 pt-4 pb-8">
          Get an opportunity to learn from the World Record Holder -{" "}
          <span className="text-[#ff0000]">Mr Vimal Daga</span>
        </div>
        <div className="w-full overflow-hidden">
          {chunkedLogos.map((lineLogos, rowIndex) => (
            <div
              key={rowIndex}
              ref={containerRef}
              className="whitespace-nowrap "
              style={{
                transform: `translateX(${
                  -scrollOffset * (rowIndex % 2 === 0 ? 0.1 : -0.1)
                }px)`,
                transition: "transform 0.9s ease-out",
              }}
            >
              <div className="inline-flex items-center w-max">
                {lineLogos.map((logo, index) => (
                  <div key={index} className="mx-4 flex-shrink-0">
                    <div className="md:w-52 w-20 h-10 md:h-20 flex items-center justify-center">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={120}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompaniesCarousel;
