

import { Card, CardContent } from "@/components/ui/card"
import { Check, FileText, Settings, Users } from 'lucide-react'

export default function ISASigningProcess() {
  return (
    <div className="pt-8 w-full pb-0 relative bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
      <div className="max-w-6xl mx-auto">
        <div className="container px-4 md:px-12 max-w-5xl mx-auto bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] pb-6 rounded-xl relative">
          {/* Tag with number - Hidden on mobile */}
          <div className="hidden md:block absolute -top-2 left-12">
            <div className="relative w-20 h-24">
              <img 
                alt="numbering" 
                className="w-full h-full" 
                src="/assets/tag1.png"
              />
            </div>
          </div>

          {/* Mobile Number */}
          <div className="md:hidden absolute -top-2 left-4 w-8 h-8 bg-red-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">3</span>
          </div>

          {/* Content section */}
          <div className="pt-6 pl-4 md:pl-16">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4 md:ml-16">
                  End to End <span className="text-white">Placement Guaranteed DevOps</span> Program Process
                </h2>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-4">
              {/* First Card */}
              <Card className="bg-transparent border border-[#f13939ba] shadow-lg w-full">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-full h-24 relative mb-2">
                    <img src="/assets/Apply Now.png" alt="image" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Apply Now & Start Your Learning Journey</h3>
                </CardContent>
              </Card> 


              <div className="flex justify-center">
                <img src="/assets/downarrow.png" alt="Down Arrow" className="w-6 h-6" />
              </div>

              {/* Second Card */}
              <Card className="bg-transparent  border border-[#f13939ba]  shadow-lg w-full">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-full h-24 relative mb-2">
                    <img src="/assets/project copy.png" alt="image" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Build Your 20+ CapStone Industry Level Projects</h3>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <img src="/assets/downarrow.png" alt="Down Arrow" className="w-6 h-6" />
              </div>

              {/* Third Card */}
              <Card className="bg-transparent border-[#ff0000] shadow-lg w-full">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-full h-24 relative mb-2">
                    <img src="/assets/business.png" alt="img" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Business Communication, Assessments & Contribution</h3>
                </CardContent>
              </Card>

              <div className="flex justify-center">
                <img src="/assets/downarrow.png" alt="Down Arrow" className="w-6 h-6" />
              </div>

              {/* Fourth Card */}
              <Card className="bg-transparent border border-[#ff0000]  shadow-lg w-full">
                <CardContent className="p-4 flex flex-col items-center text-center">
                  <div className="w-full h-24 relative mb-2">
                    <img src="/assets/Get-placed.png" alt="img" className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-white font-semibold text-sm">Get placed as DevOps Engineer</h3>
                  <p className="text-gray-500 text-sm">(Note : 100% refund if not hired)</p>
                </CardContent>
              </Card>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:-ml-12 lg:-ml-12">
              {/* First Card */}
              <Card className="bg-transparent border border-[#f13939ba] shadow-lg hover:shadow-xl transition-shadow w-64">
                <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                  <div className="w-full h-36 md:h-28 relative mb-4">
                    <div className="absolute inset-0 rounded-lg p-4">
                      <div className="mb">
                        <img src="/assets/Apply Now.png" alt="image" className="w-full h-20 object-contain" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Apply Now & Start Your Learning Journey</h3>
                </CardContent>
              </Card>

              {/* Arrow Image 1 */}
              <div className="hidden md:block">
                <img src="/assets/rightarrow.png" alt="Right Arrow" className="w-8 h-8" />
              </div>

              {/* Second Card */}
              <Card className="bg-transparent border border-[#f13939ba] shadow-lg hover:shadow-xl transition-shadow w-64">
                <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                  <div className="w-full h-36 md:h-28 relative mb-4">
                    <div className="absolute inset-0 rounded-lg p-4">
                      <img src="/assets/project copy.png" alt="image" className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Build Your 20+ CapStone Industry Level Projects</h3>
                </CardContent>
              </Card>

              {/* Arrow Image 2 */}
              <div className="hidden md:block">
                <img src="/assets/rightarrow.png" alt="Right Arrow" className="w-8 h-8" />
              </div>

              {/* Third Card */}
              <Card className="bg-transparent border border-[#ff0000] shadow-lg hover:shadow-xl h-60 transition-shadow w-64">
                <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                  <div className="w-full h-36 md:h-28 relative mb-4">
                    <div className="absolute inset-0 flex items-center justify-center pt-4">
                      <img src="/assets/business.png" alt="img" className="w-full h-full pb-4 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Business Communication & Assessments</h3>
                </CardContent>
              </Card>

              {/* Arrow Image 3 */}
              <div className="hidden md:block">
                <img src="/assets/rightarrow.png" alt="Right Arrow" className="w-8 h-8" />
              </div>

              {/* Fourth Card */}
              <Card className="bg-transparent border border-[#ff0000] shadow-lg hover:shadow-xxl transition-shadow w-64">
                <CardContent className="p-4 md:p-6 flex flex-col items-center text-center">
                  <div className="w-full h-36 md:h-24 relative mb-4">
                    <div className="absolute inset-0 rounded-lg p-4 flex items-center justify-center">
                      <img src="/assets/Get-placed.png" alt="img" className="w-full h-22 object-contain" />
                    </div>
                  </div>
                  <h3 className="text-white font-semibold text-sm">Get placed as DevOps Engineer</h3>
                  <p className="text-gray-300 text-sm">(Note : 100% refund if not hired)</p>
                </CardContent>
              </Card>
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
