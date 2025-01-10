import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ZoomIn } from "lucide-react"
import certimg from "../../../../public/assets/Certificate/Certificate.jpeg"


export default function Certification() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 mx-auto">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-3xl font-bold text-gray-800 mb-12    md:text-center">
        Industry Recognised & Approved <span className="text-[#ff0000]"> Job Oriented Specialisation </span> in DevOps Certificates
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Certificate Section */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center bg-[#ff0000]  font-bold">1</span>
                DevOps Trainings certificate
              </h2>
              <p className="text-gray-600 pl-10">
              On successful completion of the program with 90% attendance in Live Sessions & completion of all Capstone Projects with assessments makes you eligible for Training Certificate

              </p>
              
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[300px] mx-auto">
                <CardContent className="p-0">
                  <div className="relative group">
                    <div className="relative w-full h-[400px] w-[300px]">
                      <Image
                        src={certimg}
                        alt="LinuxWorld Certificate"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Center Divider */}
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="w-[2px] h-[400px] bg-gradient-to-b from-transparent via-red-200 to-transparent"></div>
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-[#ff0000]  font-bold">
              &
            </div>
          </div>

          {/* Right Certificate Section */}
          <div className="w-full md:w-1/2">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#ff0000]  font-bold">2</span>
                Internship Certificate
              </h2>
              <p className="text-gray-600 pl-10">
              Depending upon your overall performance, building & working on Industry Relevant Projects, post viva you will become eligible for Internship Certificate
              </p>
              
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 w-[300px] mx-auto">
                <CardContent className="p-0">
                  <div className="relative group">
                    <div className="relative w-full h-[400px] w-[300px]">
                      <Image
                         src="/assets/Certificate/internship-certificate .jpeg"
                        alt="NSDC Certificate"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}