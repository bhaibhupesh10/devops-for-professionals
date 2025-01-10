
'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { ChevronRight, Calendar, CalendarDays } from 'lucide-react'
import { modules } from "./data"
import { Module } from "./types"

export default function CourseCareerModule() {
  const [activeModule, setActiveModule] = useState<Module>(modules[1])

  return (
    <div className="pt-8 w-full pb-0 relative bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      
      <div className="mx-auto max-w-6xl">
        
      {/* Mobile View */}
<div className="md:hidden">
  <div className="bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] rounded-xl p-4 relative"> {/* Added relative positioning */}
    {/* Added Mobile Number */}
    <div className="absolute -top-2 left-4 w-8 h-8 bg-red-800 rounded-full flex items-center justify-center">
      <span className="text-white font-bold text-lg">2</span>
    </div>

    <div className="flex justify-between items-start mb-4 mt-4"> {/* Added mt-4 to account for the number */}
      <h1 className="text-xl font-bold text-white ml-8">Career Track</h1> {/* Added ml-8 to avoid overlap with number */}
      <div className="absolute top-0 right-0 sm:block md:hidden"> {/* Changed here */}
  <Badge 
    variant="secondary" 
    className="h-6 pt-2 pb-2 bg-[#710000] text-sm text-white border-none shrink-0"
  >
    <CalendarDays className=" mt-4 mb-4 h-6"/> 3 Months
  </Badge>
</div>
    </div>
            <p className="text-white/80 text-sm mb-6">
              Once you have enrolled for the program then you will have access to a wide range of resources which will help you in becoming a Job-Ready Candidate. We have a dedicated placement team of professionals who excel in their individual domains committed to assist you in our journey.
            </p>

            {/* Mobile Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {modules.map((module) => (
                <button
                  key={module.id}
                  onClick={() => setActiveModule(module)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-bold ${
                    activeModule.id === module.id
                      ? "bg-white text-[#004D40]"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {module.title}
                </button>
              ))}
            </div>

            {/* Mobile Content */}
            <div className="bg-white rounded-lg p-4 mt-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {activeModule.subtitle}
              </h2>
              <div className="space-y-2">
                {activeModule.topics.map((topic, index) => (
                  <div key={index} className="text-sm text-gray-700">
                    • {topic}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
  <div className="container px-4 md:px-12 max-w-5xl mx-auto bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] pb-6 rounded-xl relative">
    {/* Badge in top right corner */}
    <div className="absolute top-0 right-0">
   
      <Badge 
        variant="secondary" 
        className="h-10 px-4 p-4 bg-[#710000] text-sm text-white border-none shrink-0"
      >
       <CalendarDays className="mr-2 mt-4 mb-4   h-6"/> 1 Months
      </Badge>
  
    </div>

    {/* Tag with number */}
    <div className="absolute -top-2 left-12">
      <div className="relative w-20 h-24">
        <img 
          alt="numbering" 
          className="w-full h-full" 
          src="/assets/tag2.png"
        />
      </div>
    </div>
            {/* <div className="md:hidden absolute -top-2 left-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
            <span className="text-[#004D40] font-bold text-lg">4</span>
          </div> */}

 

            {/* Content section */}
            <div className="pt-6 pl-16">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-white mb-4 ml-16">
                    Career Track
                  </h1>
                  <p className="text-white/90 max-w-3xl pl-16 text-sm">
                    Becoming a part of our Placement Guaranteed DevOps program gives you access to a wealth of resources designed to transform you into a job-ready candidate. Our dedicated placement team, made up of domain experts, is committed to supporting you every step of the way in your non-technical journey toward success.
                  </p>
                </div>

             
              </div>

              {/* Cards Grid */}
              <div className="grid gap-6 md:grid-cols-[350px,1fr] mt-8 md:-ml-6 lg:-ml-12">
                {/* Module Selection Card */}
                <Card className="bg-white">
                  <ScrollArea className="h-[350px]">
                    {modules.map((module) => (
                      <button
                        key={module.id}
                        onClick={() => setActiveModule(module)}
                        className={`w-full text-left font-bold ${
                          activeModule.id === module.id
                            ? "bg-gray-100"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between p-3">
                          <div>
                            <div className="text-sm text-gray-600">{module.title}</div>
                            <div className="text-sm font-medium text-gray-900">{module.subtitle}</div>
                          </div>
                          {activeModule.id === module.id && (
                            <ChevronRight className="h-4 w-4 text-gray-500" />
                          )}
                        </div>
                      </button>
                    ))}
                  </ScrollArea>
                </Card>

                {/* Content Card */}
                <Card className="bg-white p-6">
                  <ScrollArea className="h-[250px]">
                    <div className="mb-6 flex items-center justify-between">
                      <h2 className="text-lg font-semibold text-gray-900">
                        {activeModule.subtitle}
                      </h2>
                    </div>
                    <Separator className="mb-6" />
                    <div className="space-y-2">
                      
                      {activeModule.topics.map((topic, index) => (
                        <div key={index} className="text-sm text-gray-700">
                         <ul className="list-disc pl-8 mt-2 space-y-2"><li>{topic}</li></ul> 
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Arrow */}
        <div className="pt-2 h-16 w-8 ml-8 md:ml-[130px]">
          <img 
            src="/assets/downarrow.png" 
            alt="Description of the image" 
            className="h-full w-full object-contain" 
          />
        </div>
      </div>
    </div>
  )
}