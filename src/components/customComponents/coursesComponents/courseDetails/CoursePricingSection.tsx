import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export default function   CoursePricingSection() {
  return (
    <div className=" mx-auto bg-gradient-to-r from-gray-50 via-white-50 to-red-50 " id="participatenow">
      <div className="max-w-6xl mx-auto md:p-6">
      <div className="mb-6">  <h1 className="text-3xl md:text-3xl font-bold text-gray-800 px-2">


        <span className="text-[#ff0000] md:p-0" > Invest today & </span>get Placement Guarantee 
        </h1>
        
        <p className="px-4">(100% refund if not hired)</p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Pricing */}
          <Card className="flex-1 p-6 bg-white">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Job Oriented DevOps Program with Guaranteed Placement

              <span className="block text-gray-600 text-lg mt-1">
                (Save ₹10,000)
              </span>
            </h2>
            
            <div className="mb-6 s">
              <span className="text-[#ff0000] text-4xl font-bold">₹ 25,000</span>
              <span className="text-gray-500 line-through ml-2">₹ 35,000</span>
              <span className="text-gray-500">(+ taxes)</span>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1" />
                <p className="text-gray-600">
                  Avail the discounted price of ₹ 25,000 and save a total of ₹ 10,000
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-red-400 mt-1" />
                <p className="text-gray-600">The launch offer expires in 24 hours</p>
              </div>
            </div>
            <a href="https://rzp.io/rzp/R36lbP1" target="blank"> 
<div className=" flex w-full mx-auto">
           <Button className="md:w-1/2 sm:w-full mx-auto bg-[#ff0000] hover:bg-[#ff0000] hover:shadow-md hover:shadow-black text-white py-6">
              Yes! I want this insane deal for
              <br />₹ 25,000 + taxes
              
              {/* <span className="line-through">₹ 5000</span> */}
              
               {/* <span className="text-sm)</span> */}
            </Button>
            </div>
            </a>
          </Card>

          {/* Right Column - Features */}
          <div className="flex-1 space-y-8 md:p-0 p-4">
            <div> 
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
              What you will get...
              </h3>
              <div className="space-y-3">
                {[
                   "Master Git, Docker, Kubernetes, Jenkins, & Terraform",
                   "Learn Ansible, Prometheus, Grafana, AWS DevOps Services",
                  
                  "Advanced Linux, Shell Scripting, and CI/CD Automation",
                  
                  "Certification Prep for DCA, CKA, & CKAD",
                  
                  "And much more…"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-red-100 rounded-sm p-0.5">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                And bonuses too...
              </h3>
              <div className="space-y-3">
                {[
                  "Most Relevant DevOps Tips & Tricks to become more productive",
                  "Technical Support for 90 days",
                  "Premium #13 DevOps Community Membership",

                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="bg-red-100 rounded-sm p-0.5">
                      <Check className="h-4 w-4 text-red-500" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

