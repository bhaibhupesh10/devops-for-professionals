



// components/TestimonialsSection.tsx
"use client"

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../../../data/testimonial';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsExpanded(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsExpanded(false);
  };

  const handleAvatarClick = (index: number) => {
    setCurrentIndex(index);
    setIsExpanded(false);
  };

  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  if (!isClient) return null;

  const currentTestimonial = testimonials[currentIndex];
  const words = currentTestimonial.content.split(' ');
  const isLongText = words.length > 70;

  return (
    <div className="relative bg-[#faf7f4] overflow-hidden px-4 py-12 md:py-12">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="relative lg:col-span-1 order-2 lg:order-1 flex-shrink-0 h-96" aria-hidden="true">
          <div className="absolute inset-0 w-full h-full">
            {testimonials.map((testimonial, index) => (
              testimonial.position && (
                <div
                  key={testimonial.id}
                  className="absolute cursor-pointer transform transition-all duration-300"
                  style={{
                    top: testimonial.position.top,
                    left: testimonial.position.left,
                    animation: `float 3s ease-in-out ${testimonial.position.delay}s infinite`,
                  }}
                  onClick={() => handleAvatarClick(index)}
                >
                  <Avatar
                    className={`border-4 shadow-lg transition-transform hover:scale-110 ${
                      currentIndex === index
                        ? 'border-red-500 scale-110'
                        : 'border-white hover:border-red-200'
                    }`}
                    style={{ 
                      width: testimonial.position.size, 
                      height: testimonial.position.size 
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} avatar`}
                      width={testimonial.position.size}
                      height={testimonial.position.size}
                    />
                  </Avatar>
                </div>
              )
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative z-10 lg:col-span-1 order-1 lg:order-2">
          <h2 className="text-3xl md:text-3xl font-bold mb-8 tracking-tight">
            What our <span className="text-[#ff0000]">placed learners</span> say
          </h2>

          <div className="w-full max-w-xl">
            <div className="space-y-6">
              <div className="text-gray-600 leading-relaxed text-lg">
                {isLongText ? (
                  <>
                    <p>
                      {isExpanded 
                        ? currentTestimonial.content 
                        : truncateText(currentTestimonial.content, 70)}
                    </p>
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="text-red-500 hover:text-red-700 font-medium mt-2"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  </>
                ) : (
                  <p>{currentTestimonial.content}</p>
                )}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    width={60}
                    height={60}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-xl">{currentTestimonial.name}</h4>
                  <p className="text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200 hover:bg-white hover:text-gray-900"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full border-gray-200 hover:bg-white hover:text-gray-900"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @media (max-width: 1024px) {
          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .lg\\:col-span-1 {
            grid-column: span 1;
          }

          .lg\\:order-1 {
            order: 1;
          }

          .lg\\:order-2 {
            order: 2;
          }
        }
      `}</style>
    </div>
  );
}