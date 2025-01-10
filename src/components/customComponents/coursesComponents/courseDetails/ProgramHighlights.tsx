import React from 'react';
import { Card } from "@/components/ui/card";

const ProgramHighlights = () => {
  const highlights = [
    {
      icon: "/assets/ExtraLogo/modules.png",
      number: "15+",
      description: "Hands on Modules",
    },
    {
      icon: "/assets/ExtraLogo/hours.png",
      number: "300+",
      description: "Hours of learning",
    },
    {
      icon: "/assets/ExtraLogo/tools.png",
      number: "15+",
      description: "Programming Tools",
    },
    {
      icon: "/assets/ExtraLogo/project-management.png",
      number: "20+",
      description: "Capstone Projects",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 to-red-50">
      <div className="py-6 lg:px-8 max-w-6xl mx-auto px-2">
        {/* Title */}
        <h2 className="text-gray-700 text-sm font-semibold mb-2">
          Your Pathway To DevOps Career
        </h2>

        {/* Heading */}
        <h1 className="text-3xl font-bold mb-6">
          Key <span className="text-[#ff0000]">Program</span> Highlights
        </h1>

        {/* Stats Card */}
        <Card className="p-8 bg-white rounded-2xl shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 ${
                  index !== 0 ? 'md:border-l md:border-gray-300 md:pl-8' : ''
                }`}
              >
                {/* Icon Container */}
                <div className="flex-shrink-0">
                  <img 
                    src={item.icon}
                    alt={item.description}
                    className="h-12 w-12 p-1 rounded-lg bg-red-100"
                  />
                </div>

                {/* Content Container */}
                <div className="flex flex-col">
                  <div className="text-[#ff0000] text-3xl font-bold">
                    {item.number}
                  </div>
                  <div className="text-gray-600 text-md">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ProgramHighlights;




// import React from 'react';
// import { Card } from "@/components/ui/card";

// const ProgramHighlights = () => {
//   const highlights = [
//     {
//       icon: "/assets/ExtraLogo/modules.png",
//       number: "15+",
//       description: "Hands on Modules",
//     },
//     {
//       icon: "/assets/ExtraLogo/hours.png",
//       number: "300+",
//       description: "Hours of learning",
//     },
//     {
//       icon: "/assets/ExtraLogo/tools.png",
//       number: "15+",
//       description: "Programming Tools",
//     },
//     {
//       icon: "/assets/ExtraLogo/project-management.png",
//       number: "20+",
//       description: "Capstone Projects",
//     },
//   ];

//   return (
//     <div className="bg-gradient-to-r from-gray-50 to-red-50">
//       <div className="py-6 lg:px-8 max-w-6xl mx-auto px-2">
//         {/* Title */}
//         <h2 className="text-gray-700 text-sm font-semibold mb-2">
//           Your Pathway To DevOps Career
//         </h2>

//         {/* Heading */}
//         <h1 className="text-3xl font-bold mb-6">
//           Key <span className="text-[#ff0000]">Program</span> Highlights
//         </h1>

//         {/* Stats Card */}
//         <Card className="p-8 bg-white rounded-2xl shadow-sm">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {highlights.map((item, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col ${
//                   index !== 0 ? 'md:border-l md:border-gray-300 md:pl-8' : ''
//                 }`}
//               >
//                 <div className='flex items-start justify-start sm:justify-center lg:justify-center'>
//                   <div className="bg-[#fef4f4] p-2 rounded-lg flex items-center justify-center">
//                     <img 
//                       src={item.icon}
//                       className="text-[#ff0000] h-8"
//                       alt={`${item.description} icon`}
//                     />
//                   </div>
//                 </div>
//                 <div className="text-[#ff0000] text-3xl font-bold mb-2">
//                   {item.number}
//                 {/* Icon and Number Container */}
//                 <div className="flex items-center gap-3 mb-2">
//                   <img 
//                     src={item.icon}
//                     alt={item.description}
//                     className="h-10 w-10 p-1 rounded-lg"
//                   />
//                   <div className="text-[#ff0000] text-3xl font-bold">
//                     {item.number}
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <div className="pl-14 text-gray-600 text-md">
//                   {item.description}
//                 </div>
//               </div>
//           )}
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default ProgramHighlights;