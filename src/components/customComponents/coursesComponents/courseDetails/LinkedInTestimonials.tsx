import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import linkedinscreenshot1  from "../../../../../public/assets/linkedinScreenshot1.png"
import linkedinscreenshot3  from "../../../../../public/assets/linkedinScreenshot2.png"

interface LinkedInShowcaseItem {
  id: number;
  title: string;
  description: string;
  screenshot: any;
  category: string;
  date: string;
  insights?: {
    likes?: number;
    comments?: number;
    shares?: number;
  };
}

const showcaseData: LinkedInShowcaseItem[] = [
  {
    id: 1,
    title: "Engaging Post Format",
    description: "This post demonstrates how to structure content for maximum engagement. Notice the use of bullet points, emojis, and clear call-to-actions that drove 50% more interactions than our average posts.",
    screenshot: linkedinscreenshot1.src.toString(),
    category: "Content Strategy",
    date: "March 2024",
    insights: {
      likes: 1200,
      comments: 89,
      shares: 45
    }
  },
  {
    id: 2,
    title: "Thought Leadership Article",
    description: "A deep-dive article that positioned our brand as an industry expert. The combination of data-driven insights and personal experience resulted in significant profile visits and connection requests.",
    screenshot: linkedinscreenshot3.src.toString(), // Replace with actual image path
    category: "Thought Leadership",
    date: "February 2024",
    insights: {
      likes: 856,
      comments: 132,
      shares: 67
    }
  },
  // Add more showcase items as needed
];

const LinkedInShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const navigate = (direction: 'next' | 'prev') => {
    setIsAnimating(true);
    if (direction === 'next') {
      setCurrentIndex((prev) => 
        prev === showcaseData.length - 1 ? 0 : prev + 1
      );
    } else {
      setCurrentIndex((prev) => 
        prev === 0 ? showcaseData.length - 1 : prev - 1
      );
    }
    setTimeout(() => setIsAnimating(false), 300);
  };
  

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          LinkedIn Success Showcase
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our most impactful LinkedIn content and learn what makes these posts perform exceptionally well.
        </p>
      </div>

      {/* Main Showcase */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Screenshot Display */}
        <div className="relative group">
          <Card className="overflow-hidden bg-gray-100 border-2 border-gray-200">
            <div className="relative aspect-[4/3]">
              <img
                src={showcaseData[currentIndex].screenshot}
                alt={`LinkedIn post - ${showcaseData[currentIndex].title}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isAnimating ? 'opacity-50' : 'opacity-100'
                }`}
              />
              
              {/* Hover Overlay with Insights */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="flex space-x-8">
                    <div>
                      <p className="text-2xl font-bold">
                        {showcaseData[currentIndex].insights?.likes}
                      </p>
                      <p className="text-sm">Likes</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        {showcaseData[currentIndex].insights?.comments}
                      </p>
                      <p className="text-sm">Comments</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">
                        {showcaseData[currentIndex].insights?.shares}
                      </p>
                      <p className="text-sm">Shares</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4">
            <button
              onClick={() => navigate('prev')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => navigate('next')}
              className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors transform translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content Analysis */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
              {showcaseData[currentIndex].category}
            </span>
            <span className="text-gray-500">
              {showcaseData[currentIndex].date}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900">
            {showcaseData[currentIndex].title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {showcaseData[currentIndex].description}
          </p>

          {/* Key Takeaways */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-4">Key Takeaways</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600">Clear and concise messaging that resonates with the target audience</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600">Strategic use of visuals and formatting to enhance readability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600">Engagement-focused call-to-actions that drive meaningful interactions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {showcaseData.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setCurrentIndex(index);
              setTimeout(() => setIsAnimating(false), 300);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            aria-label={`View showcase item ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default LinkedInShowcase;