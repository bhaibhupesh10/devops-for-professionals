"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from 'lucide-react'
import CourseBanner4 from "../../../../../public/assets/cources/Course-banner4.jpg"

export default function PlacementGuaranteeProgram() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className="w-full  py-12 max-w-5xl mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8"><span className="text-[#ff0000]">Placement </span>Guarantee Program</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="flex-1 bg-[#070736] text-white overflow-hidden">
            <div className="p-6">
             
              
              <div className="relative w-full h-48 ">
                <Image
                  src={CourseBanner4}
                  alt="Full Stack Development Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </Card>

          <div className="flex-1 space-y-6 ml-10 font-semibold">
            {[
              "CTC upto 25 LPA",
              "Direct access to our 6000 + partner companies",
              "200+ hrs of learning",
              "Daily LIVE Mentor Interaction",
              "DSA + Interview Prep + Resume building"
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
            <Button className=" w-full sm:w-auto bg-[#ff0000] hover:bg-[#ff0000] hover:shadow-md hover:shadow-black text-white font-semibold py-2 px-6">
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

