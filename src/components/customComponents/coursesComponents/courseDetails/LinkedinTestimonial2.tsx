import React from "react";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Quote } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper'; 
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from "react";
import linkedinimage1 from "../../../../../public/assets/linkedinScreenshot1.png"
import linkedinimage2 from "../../../../../public/assets/linkedinScreenshot1.png"
import linkedinimage3 from "../../../../../public/assets/linkedinScreenshot1.png"

// Import Swiper styles
import { Button } from "@/components/ui/button";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const testimonialData = [
    {
        text: "We all know how tedious finding an internship is, but Cuvette made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews",
        name: "Sumit pal",
        institute: "IIT Kanpur",
        image: linkedinimage1.src.toString()
    },
    {
        text: "We all know how tedious finding an internship is, but Cuvette made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews",
        name: "PRIYAL DUBEY",
        institute: "IIT INDORE",
        image: linkedinimage2.src.toString()
    },
    {
        text: "We all know how tedious finding an internship is, but Cuvette made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews",
        name: "Sumit pal",
        institute: "IIT Kanpur",
        image: linkedinimage3.src.toString()
    },
    {
        text: "We all know how tedious finding an internship is, but Cuvette made the whole process incredibly smooth by finding all the relevant good opportunities and all we had to do is prepare for the interviews",
        name: "PRIYAL DUBEY",
        institute: "IIT INDORE",
        image: linkedinimage1.src.toString()
    },
];

const LinkdingTestimonial2 = () => {    
    const swiperRef = useRef<SwiperType | undefined>(undefined);  // Fixed initialization

    return (
        <div className="relative max-w-5xl mx-auto px-4 py-8">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-48 bg-blue-50 rounded-full filter blur-3xl opacity-30 -z-10" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-50 rounded-full filter blur-3xl opacity-30 -z-10" />
            
            <div className="h-[350px] relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    spaceBetween={30}
                    slidesPerView={1}
                    centeredSlides={true}
                    effect="fade"
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet !bg-blue-500 !opacity-50',
                        bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-600 !opacity-100',
                    }}
                    navigation={false}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="h-full w-full !pb-16"
                >
                    {testimonialData.map((testimonial, index) => (
                        <SwiperSlide key={index} className="h-[300px]">
                            <Card className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl h-full">
                                <div className="grid md:grid-cols-2 items-center h-full">
                                    <div className="relative h-full bg-gradient-to-br from-blue-50 to-purple-50">
                                        {/* Empty background div */}
                                    </div>
                                    
                                    <div className="p-6 flex flex-col space-y-4 relative">
                                        <Quote size={32} className="text-blue-500/20 absolute top-4 right-4" />
                                        
                                        <p className="text-gray-700 text-base leading-relaxed font-light">
                                            {testimonial.text}
                                        </p>
                                        
                                        <div className="space-y-1 relative mt-auto">
                                            <div className="h-0.5 w-12 bg-blue-500/30 mb-2" />
                                            <h3 className="font-semibold text-lg text-gray-900">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.institute}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                            
                            <Card className="absolute left-8 -bottom-6 shadow-xl md:w-[45%] overflow-hidden transition-transform duration-300 hover:scale-105 group h-[290px]">
                                <div className="relative h-full">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <img
                                        src={testimonial.image}
                                        alt={`${testimonial.name} testimonial`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white hover:bg-blue-50 border-blue-100"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <ChevronLeft className="h-4 w-4 text-blue-600" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white hover:bg-blue-50 border-blue-100"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <ChevronRight className="h-4 w-4 text-blue-600" />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default LinkdingTestimonial2;