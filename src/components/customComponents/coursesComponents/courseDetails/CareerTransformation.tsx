import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
//import { PlayCircle } from "lucide-react";
import { useState } from "react";
import Roadmap from "../../../../../public/assets/cources/roadmap.png";
import Redhat from "../../../../../public/assets/companyLogo/redhat.png";
//import TCS from "../../../../../public/assets/companyLogo/tcs.png";
//import AryaCollage from "../../../../../public/assets/companyLogo/aryaCollage.svg";
import bluePlanet from "../../../../../public/assets/companyLogo/blueplanet.png"
//import ignoLogo from "../../../../../public/assets/companyLogo/ignouLogo.png"
import NagpurUniversityLogo from "../../../../../public/assets/companyLogo/NagpurLogo.png"
import ShyenaTechLogo from "../../../../../public/assets/companyLogo/shyenaTechLogo.png"
import TtiLogo from "../../../../../public/assets/companyLogo/TtiLogo.png"
import tmuCollege from "../../../../../public/assets/tmu.png"
import ipecCollege from "../../../../../public/assets/ipec.png"
import defaultcollege from "../../../../../public/assets/defaultcollege.png"
import careergrowthgir from "../../../../../public/assets/growth.gif"
import tcs from "../../../../../public/assets/companyLogo/tcs.png"
import sinzy from "../../../../../public/assets/companyLogo/companyandcollegelogo/Signzy.png"
import nirmata from "../../../../../public/assets/companyLogo/companyandcollegelogo/nirmata.jpg"
import lpu from "../../../../../public/assets/companyLogo/companyandcollegelogo/lovely professional university.png"
import integraate from "../../../../../public/assets/companyLogo/companyandcollegelogo/Integraate.jpg"
import gla from "../../../../../public/assets/companyLogo/companyandcollegelogo/GLA_University_logo.png"
import ANNIE from "../../../../../public/assets/companyLogo/companyandcollegelogo/annie institute of technology and research centre chhindwara.jpg"
import ACADEMY from "../../../../../public/assets/companyLogo/companyandcollegelogo/Academy of Technology.jpg"



const peopleData = [
 

{
    name: "Jayant Kumar Pathak",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEor_1IvI4B5Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1710067942110?e=1741824000&v=beta&t=KNUE3CFeIDUxR_jPexbrb6wjE6kjaah0miyGU-GHYzY", // Image URL needed
    testimonial: "Thank you for guiding me toward choosing DevOps as my career path. I am also deeply grateful for all your blessings. It is a privilege for me to be your student. I have learned a lot and truly enjoyed my time in ARTH.",
    hike: "85% Hike",
    beforeRole: "Academy of Technology",
    beforeLogo: ACADEMY,
    afterRole: "System Engineer",
    afterLogo: tcs,
},

{
    name: "Sarthak Agarwal",
    image: "https://media.licdn.com/dms/image/v2/D5603AQETlu2-4tVbMw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721056218508?e=1741824000&v=beta&t=jSiuTM-dNYYbT6BhROda_mn_G27E3-jn7oQ7lSjHNkE", // Image URL needed
    testimonial: "I'm thrilled to share that I've recently joined Integraate Innovations Dehradun at a package of 20 LPA, and it's all thanks to the foundation you helped me build. Your mentorship has been instrumental in shaping my journey, and I'm excited to continue integrating technologies, just as you inspired me to do. Thank you so much for your kind words and blessings. I am truly grateful for your teachings and the guidance I received as an ARTHian.",
    hike: "85% Hike",
    beforeRole: "GLA University",
    beforeLogo: gla,
    afterRole: "DevOps Engineer",
    afterLogo: integraate
},

{
    name: "Vikash Kaushik",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHpcQu9pIwmnQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1711965805598?e=1741824000&v=beta&t=Z6X5XWPNcN6rOaPpsXysXxvrvCF_gZOPzOmvTMw5rRE", // Image URL needed
    testimonial: "I was in my third year, and now I'm a full-time DevOps engineer after graduating. The concepts and skills I gained from Vimal Sir have been invaluable in my current role. I'm very grateful for your guidance and support throughout my journey. I feel blessed to have had the opportunity to learn under you. You are the best! Thank you so much for your kind words! I'm thrilled to be a part of Nirmata, and I truly appreciate the foundation that the ARTH program provided me. It was an incredible experience learning about over 10 technologies and their integrations.",
    hike: "85% Hike",
    beforeRole: "Annie Institute of Technology and Research Centre",
    beforeLogo: ANNIE,
    afterRole: "DevOps Engineer",
    afterLogo: nirmata
},

{
    name: "Pramod Kumar Gupta",
    image: "https://media.licdn.com/dms/image/v2/C4E03AQFfEgQMTz6GXg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1601189825651?e=1741824000&v=beta&t=Yu74qszWlLoSWXurILNCvmLyhovpQAMTWkLLO2CHEgE", // Image URL needed
    testimonial: "I got my job placement as a DevOps Intern at Signzy. I am very thankful to Vimal Sir for his teachings. His guidance and teaching have made me strong in DevOps, cloud, and Linux. Because of his training and support,",
    hike: "85% Hike",
    beforeRole: "Lovely Professional University",
    beforeLogo: lpu,
    afterRole: "DevOps Intern",
    afterLogo: sinzy
},
  {
    name: "Anmol Roop Rai",
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGQcSKFn4S8QQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1698426492355?e=1739404800&v=beta&t=3Sw7zO6e1a_hzbNmxyrKB8pR6EYl1hfx24jeWQ7UEjI",
    testimonial:
      "Till now, my journey with ARTH and LW has been awesome and, it is still going on. I got to know about Vimal sir and LW through my friend and that day and this day there is a huge upward curve in my technical knowledge & passion for learning new technologies and integrating them which boosts my confidence and through ARTH and INIT platform I got DevOps internship with all that knowledge and sir blessings. Thanks a lot to Vimal Sir, Preeti mam, and the whole LinuxWorld Team for providing such great opportunities. ",
    hike: "85% Hike",
    beforeRole: ` Arya College of Engineering and IT`,
    beforeLogo: defaultcollege,
    afterRole: "DevOps Intern",
    afterLogo: bluePlanet,
    height:12
  },

  
  {
    name: "Harishankar Dubey",
    image: "https://media.licdn.com/dms/image/v2/D4D35AQGmg5xIlBm_pw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1734733057510?e=1737032400&v=beta&t=EQEtWUz4HjjT346Y9Gr6cVuQmfNZ879HQoj3z-g6nCE",
    testimonial:
      "Learning from Vimal sir, I understood that it doesn't matter if you have zero knowledge about the subject but with dedication, determination, and perseverance, we can achieve whatever we aim for. Similarly, I started learning and working on the task given by Vimal Sir. In those tasks, I failed multiple times. Every time I failed I learned something new and then my creativity developed in the topics I learned. Now I am much more confident and I am ready to face any issue, sooner or later, I'll surely find its solution..",
    hike: "85% Hike",
    beforeRole: "RTM Nagpur University",
    beforeLogo: NagpurUniversityLogo,
    afterRole: "DevOps Engineer ",
    afterLogo: ShyenaTechLogo,
  },

  {
    name: "Pankaj Kumar Sharma", 
    image: "https://media.licdn.com/dms/image/v2/C5103AQFNrakAM4hGZg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1517238637504?e=1739404800&v=beta&t=JucvTVGyo-TDH6Xk2oJ8-F1C1SgqBkNccDntFbbHEY4",
    testimonial:
      "Linux World is not just an organization, it's a family having head Preeti Ma'am and Vimal Sir. In this family the children are being grown with all the aspects, not just education, by spiritual, learning the things and share the things by providing a large platform, developed the leadership skills, enable all the learners to be active, disciplined and confident. Thanks a lot to LW Team.",
    hike: "85% Hike",
    beforeRole: "Technocrats Institute of Technology Bhopal",
    beforeLogo: TtiLogo,
    afterRole: "Blue Planet Solutions",
    afterLogo: bluePlanet,
  },


  {
    name:"Tanumoy Deb", 
    image: "https://media.licdn.com/dms/image/v2/D4D03AQHCbFyxr5IU9g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1670882698800?e=1740009600&v=beta&t=cHegxjBevHHO7ss2HEMpkwDqFwPY-pK-gYrubtRvXzQ",
    testimonial:
      "We have no exposure to many technologies, just a few languages at College, but in Linux World, I am exposed to various technologies. After understanding them, I am more interested in working with them. I gained valuable knowledge and committed time in learning, which is aiding me in my career development.",
    hike: "85% Hike",
    beforeRole: "ICFAI University Tripura",
    beforeLogo: "https://iutripura.edu.in/assets/img/Logo.svg",
    afterRole: "DevOps Engineer",
    afterLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQHgD3RQYjAIAg/company-logo_100_100/company-logo_100_100/0/1655882919953/squareops_technologies_pvt_ltd_logo?e=1742428800&v=beta&t=gnK5Rb2bLzBFo9d94WRUGRcw3hXadCdR1PtFeD6Cnr4",
  },

  {
    name:"Manav Misra", 
    image: "https://media.licdn.com/dms/image/v2/D4D03AQGae73chFkmmg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725541529574?e=1740009600&v=beta&t=KuS0Buuk6UBJDAU1L4rsVpUGj2rN-dhtP6WucNOXebo",
    testimonial:
      "I started my Technical Journey with LinuxWorld Informatics Pvt. Ltd. ARTH program. It started in September 2020 and in this program, all the technologies like DevOps, DSA, Big Data, Cloud Computing, Database, Data Science & Operating system are being taught. I would like to thank Vimal Daga Sir for providing me the right education and path, I never thought it is so easy to work on multiple technologies together, before the ARTH program I was just aware of the name of these technologies but now I am having very good grip over multiple technologies and I can easily integrate multiple technologies. Once again I would like to thanks Mr. Vimal Daga Sir, Preeti ma'am & LinuxWorld Informatics Pvt. Ltd. for providing the right path and always supporting me.",
    hike: "85% Hike",
    beforeRole: "Inderprastha Engineering College",
    beforeLogo: ipecCollege,
    afterRole: "DevOps Engineer",
    afterLogo: bluePlanet,
  },

  {
    name:"Subhashis Paul", 
    image: "https://media.licdn.com/dms/image/v2/D5603AQFIK_Ptms3H4A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705863034833?e=1740009600&v=beta&t=mmbmSAaEQY1EZ3kB6dtMQ8uV9TNc_NPCaF8IZHqubSQ",
    testimonial:
      "To be honest, I won't say that I didn't know anything, I just knew multiple programming languages, even didn't know the use cases of them but Vimal Daga Sir is the one, under his mentorship in ARTH, we are learning multiple technologies, moreover the real use cases of them. The three main things I learned from Vimal Daga Sir are, 1. The way to think 2. The way to integrate 3. The way to manage time. Heartily thanks to Linuxworld for giving us this opportunity to be a part of Right Education.“",
    hike: "85% Hike",
    beforeRole: "",
    beforeLogo: "https://media.licdn.com/dms/image/v2/D4D0BAQFZqX6iyW7Hig/company-logo_100_100/company-logo_100_100/0/1687864194988?e=1742428800&v=beta&t=Mp0iMebC_Ke5zJGx5Yu6mwhGTgvBAY4ivqZhElvJmoE",
    afterRole: "DevOps Engineer",
    afterLogo: bluePlanet,
  },

  {
    name:"Manali Jain ", 
    image: "https://media.licdn.com/dms/image/v2/D4D03AQFItPD7njuD_g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705551956512?e=1740009600&v=beta&t=5tguCN4dp_jh1Zd5Ka92NaNUc2Aqwjm7aRQu9ViWYuk",
    testimonial:
      "Each and every training under the supervision of Mr. Vimal Daga Sir was unbelievable. Lack of awareness was my primary issue. I spent my days thinking about how can I get a job in cloud computing as each requires some experience. One day one of my friends said to me you want a job in cloud technology but what you will do in cloud? Like DevOps or MLops? And I thought I should give up but I came to know about ARTH - THE SCHOOL OF TECHNOLOGIES under the guidance of Mr. Vimal Daga Sir and I started learning multiple technologies with full dedication. GURU, I haven't met, watched, talked but changed my life. Now my new journey started and I promise to keep this motive always to share, to serve, to help.",
    hike: "85% Hike",
    beforeRole: "Teerthanker Mahaveer University",
    beforeLogo: tmuCollege,
    afterRole: "DevOps Engineer",
    afterLogo: "https://media.licdn.com/dms/image/v2/C4D0BAQHgD3RQYjAIAg/company-logo_100_100/company-logo_100_100/0/1655882919953/squareops_technologies_pvt_ltd_logo?e=1742428800&v=beta&t=gnK5Rb2bLzBFo9d94WRUGRcw3hXadCdR1PtFeD6Cnr4",
  },
  {
    name: "Chetna",
    image: "https://media.licdn.com/dms/image/v2/D5603AQHwuLc1BHCq8Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1725440239539?e=1739404800&v=beta&t=v2LC7PCyLPOT3g5qRrU0jOFTX9MWt1kiQJOeNTFcWFo",
    testimonial:
      "Being a part of ARTH transformed me entirely. I learned so many industry trending technologies that I ha only heard about and gained quality practical exposure. My interest in Automation technologies grew, and this was all thanks to Vimal Sir. I was actually enjoying working with technologies.",
    hike: "85% Hike",
    beforeRole: "IGNOU, NEW DELHI",
    beforeLogo: defaultcollege,
    afterRole: "Quality Engineer Intern",
    afterLogo: Redhat,
  },
  // Add more people here
];





export default function CareerTransformation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peopleData.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + peopleData.length) % peopleData.length);
  };

  const person = peopleData[currentIndex];

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const testimonialWords = person.testimonial.split(' ');
  const testimonialPreview = testimonialWords.slice(0, 30).join(' ') + (testimonialWords.length > 25 ? '...' : '');
  const testimonialFull = testimonialWords.join(' ');

  return (
    <div className="w-full bg-gradient-to-r from-gray-50 to-red-50" id="careertransformation"> 
      <section className="max-w-6xl mx-auto py-12 px-6">
        <div className="container">
          <h1 className="text-3xl font-bold tracking-tighter md:p-0 mb-8">
            Career <span className="text-[#000000]">Transformation</span>: Became <span className="text-[#ff0000]">DevOps Engineer</span>
          </h1>
  
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            {/* Profile Card */}
            <Card className="p-6 relative mb-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative w-full md:w-1/3 justify-center">
                  <Image
                    src={person.image}
                    alt="Profile photo"
                    width={300}
                    height={400}
                    className="rounded-lg object-cover"
                    priority
                  />
                </div>
  
                <div className="flex-1 space-y-4">
                  <h2 className="text-2xl font-bold">{person.name}</h2>
                  <p className="text-gray-600">
                    {isExpanded ? testimonialFull : testimonialPreview}
                    {testimonialWords.length > 20 && (
                      <span
                        onClick={handleToggle}
                        className="text-purple-500 cursor-pointer hover:underline ml-2"
                      >
                        {isExpanded ? 'Show less' : 'Read more'}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </Card>
  
            {/* Transformation Section */}
            <div className="flex flex-col items-center justify-center gap-8 h-auto my-12">
              {/* Cards Container */}
              <div className="flex items-center justify-between w-full gap-4 px-4">
                {/* Before Card */}
                <Card className="p-4 border border-blue-400 relative flex-1 min-w-[50px]">
                  <span className="absolute -top-3 right-4 bg-[#ff0000] text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                    BEFORE
                  </span>
                  <div className="space-y-2">
                    <p className="text-xs font-bold min-h-[32px]">{person.beforeRole}</p>
                    <div className="h-[60px] relative">
                      <Image
                        src={person.beforeLogo}
                        alt="Before logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Card>
  
                {/* Roadmap Image */}
                <div className="w-20">
                  <Image
                    src={careergrowthgir}
                    alt="Roadmap Image"
                    className="overflow-hidden rounded-lg "
                    priority
                    width={100}
                    height={100}
                  />
                </div>
  
                {/* After Card */}
                <Card className="p-4 border border-green-500 relative flex-1 min-w-[100px]">
                  <span className="absolute -top-3 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium z-10">
                    AFTER
                  </span>
                  <div className="space-y-2">
                    <p className="text-xs font-bold min-h-[32px]">{person.afterRole}</p>
                    <div className="h-[60px] relative">
                      <Image
                        src={person.afterLogo}
                        alt="After logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
  
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12">
            <Button
              onClick={handlePrevious}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800"
            >
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  )};