"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
//import { ChevronLeft, ChevronRight } from "lucide-react";
//import { Button } from "@/components/ui/button";
import Certificate from "../../../../../public/assets/cources/courseDetails/certificateimage.png"

interface Certificate {
  id: number;
  type: string;
  imageUrl: string;
}

export default function CertificateCarousel() {
  const certificates: Certificate[] = [
    { id: 1, type: "internship", imageUrl: Certificate.src.toString() },
    
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  // const handlePrevious = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
  // };

  return (
    <div className="bg-gray-50  w-full">
    <div className="w-full py-12  max-w-6xl mx-auto">
      <div className="container px-4 md:px-6">
        {/* <h2 className="text-2xl font-bold mb-8">DevOps Course Certificate</h2> */}

        <div className="relative max-w-3xl mx-auto">
          <Tabs defaultValue="internship" className="w-full mb-6">
            <TabsList className="grid w-full grid-cols-2 mx-auto">
              <TabsTrigger value="internship">Internship Certificate</TabsTrigger>
              <TabsTrigger value="course">Trainning Certificate</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="relative pl-10">
            <Card className="overflow-hidden bg-white rounded-lg shadow-lg w-[226px] ">
              <div className="relative h-80  mx-auto">
                <Image
                  src={certificates[currentIndex].imageUrl}
                  alt={`Certificate ${currentIndex + 1}`}
                  fill
                  className="object-contain"
                 

                  priority
                />
              </div>
            </Card>

            

             
          </div>

          </div>
      </div>
    </div>
    </div>
  );
}
