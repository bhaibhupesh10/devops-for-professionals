import Image from "next/image"
import { Brain, FileText, Rocket } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

export default function BecomePlacement() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 mx-auto">
    <div className="container mx-auto px-4 py-8 md:py-12  max-w-6xl">
      <Card className="p-4 sm:p-6 md:p-8 px-4 ">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left Column with image - Order 1 for mobile and sm screens */}
          <div className="relative flex justify-center items-center order-1">
            <div className="rounded-3xl overflow-hidden bg-[#E8FAF0] w-full sm:w-[350px] md:w-[400px]">
              <div className="relative aspect-[16/12]">
                <Image
                  src="/assets/guaranteedPlacement/becomePlacementReady.gif"
                  alt="Resume interface mockup"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column content - Order 2 for mobile and sm screens */}
          <div className="space-y-6 md:space-y-8 order-2">
            <div className="space-y-3 md:space-y-4 text-center lg:text-left">
              <h1 className="text-xl sm:text-2xl lg:text-2xl font-bold">
                Become{" "}
                <span className="text-[#ff0000]">placement-ready</span>
              </h1>
              <p className="text-sm sm:text-md text-muted-foreground max-w-[700px] mx-auto lg:mx-0">
              Placement ki tension khatam karo! Our career coaches with 15+ years of experience will help you ace your interviews and secure your dream job!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              <Card className="w-full">
                <CardContent className="p-4 md:p-4 space-y-2 flex flex-col items-center lg:items-start">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-red-50 flex items-center justify-center">
                    <div className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]">
                   { /* <Brain className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]" /> */}
                    <img  src="/assets/ExtraLogo/ATS proof Resume Building.png" alt="img" />
                    </div>
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-center lg:text-left">
                    
                  ATS proof <span className="font-bold">Resume Building </span>
                  </h3>
                </CardContent>
              </Card>

              <Card className="w-full">
                <CardContent className="p-4 md:p-4 space-y-2 flex flex-col items-center lg:items-start">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-red-50 flex items-center justify-center">
                  <div className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]">
                   {/* <FileText className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]" /> */}
                    <img src="/assets/ExtraLogo/Optimising LinkedIn profile.png" alt="img" />
                   </div>
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-center lg:text-left">
                  Optimising <span className="font-bold">LinkedIn profile </span> 
                  </h3>
                </CardContent>
              </Card>

              <Card className="w-full sm:col-span-2 md:col-span-1">
                <CardContent className="p-4 md:p-4 space-y-2 flex flex-col items-center lg:items-start">
                  <div className="h-10 w-10 md:h-12 md:w-12 rounded-lg bg-red-50 flex items-center justify-center">
                   <div className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]">
                    { /* <Rocket className="h-5 w-5 md:h-6 md:w-6 text-[#ff0000]" /> */}
                    <img src="/assets/ExtraLogo/Building GITHub profile.png" alt="img" />
                    </div>
                  </div>
                  <h3 className="font-medium text-sm sm:text-base text-center lg:text-left">
                  Building <span className="font-bold">GITHub <br /> profile</span> 
                  </h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
    </div>
  )
}