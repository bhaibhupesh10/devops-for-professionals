import React, { useState } from 'react';

function JobSkills() {
  type Category = "tech" | "management" | "media" | "additionalskill";
  const [selectedCategory, setSelectedCategory] = useState<Category>("tech");

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category === selectedCategory ? "tech" : category); // Toggle selected category
  };

  return (
    <div className='bg-gradient-to-br from-gray-50 via-black-50 to-red-50 font-semibold'>
    <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12">
      <div className="text-center font-semibold text-gray-800 text-2xl sm:text-3xl pb-8">
        Find <span className="text-[#ff0000]">Internships/Jobs </span>

        for different skills
      </div>

      {/* Skill Categories */}
      <div className="space-y-6">
        {/* Tech Section */}
        <div
          className={`text-xl sm:text-2xl ${
            selectedCategory === "tech" ? "text-[#ff0000]" : "text-red-300"
          } hover:text-[#ff0000] cursor-pointer`}
          onClick={() => handleCategoryClick("tech")}
        >
          <div className="flex flex-wrap gap-2 items-center">
            Tech
            <span className="border text-sm md:ml-48 rounded-lg px-2 py-1 border-red-300">Software</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Web Dev</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Machine Learning</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Mobile App</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">DS & Algo</span>
          </div>
        </div>

        {/* Management Section */}
        <div
          className={`text-xl sm:text-2xl ${
            selectedCategory === "management" ? "text-[#ff0000]" : "text-red-300"
          } hover:text-[#ff0000] cursor-pointer`}
          onClick={() => handleCategoryClick("management")}
        >
          <div className="flex flex-wrap gap-2 items-center font-semibold">
            Management
            <span className="border text-sm md:ml-24 rounded-lg px-2 py-1 border-red-300">Digital Marketing</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">BDE</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Sales</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Financial Modeling</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Growth</span>
          </div>
        </div>

        {/* Media Section */}
        <div
          className={`text-xl sm:text-2xl ${
            selectedCategory === "media" ? "text-[#ff0000]" : "text-red-300"
          } hover:text-[#ff0000] cursor-pointer`}
          onClick={() => handleCategoryClick("media")}
        >
          <div className="flex flex-wrap gap-2 items-center">
            Media
            <span className="border text-sm md:ml-44 rounded-lg px-2 py-1 border-red-300">Public Relations</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">UI/UX</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Operations</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Manual Testing</span>
          </div>
        </div>

        {/* Additional Skills Section */}
        <div
          className={`text-xl sm:text-2xl ${
            selectedCategory === "additionalskill" ? "text-[#ff0000]" : "text-red-300"
          } hover:text-[#ff0000] cursor-pointer`}
          onClick={() => handleCategoryClick("additionalskill")}
        >
          <div className="flex flex-wrap gap-2 items-center">
            Additional Skills
            <span className="border text-sm md:ml-20 rounded-lg px-2 py-1 border-red-300">Project Management</span>
            <span className="border text-sm rounded-lg px-2 py-1 border-red-300">Social Media</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default JobSkills;
