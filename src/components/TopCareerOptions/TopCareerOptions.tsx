'use client'  // Add this at the top

import { Card, CardContent, CardHeader } from "@/components/ui/card"

export default function TopCareerOptions() {
  const careers = [
    {
      title: "DevOps Engineer",
      description: [  // Convert to array of strings
        "Drive seamless CI/CD pipelines",
        "Implement automation tools and monitor systems efficiently.",
        "Manage infrastructure using tools like Terraform, Ansible, and Jenkins."
      ],
      icon: "/assets/TopCarrer/Devops Engineer.jpeg",
    },
    {
      title: "Site Reliability Engineer (SRE)",
      description: [
        "Ensure reliability and uptime for mission-critical systems.",
        "Use advanced monitoring tools to enhance system performance."
      ],
      icon: "/assets/TopCarrer/CloudArchitec.png",
    },
    {
      title: "Kubernetes Specialist",
      description: [
        "Manage container orchestration with Kubernetes.",
        "Deploy, scale, and secure applications in containerized environments."
      ],
      icon: "/assets/TopCarrer/Architech.png",
    },
    {
      title: "CI/CD Engineer",
      description: [
        "Designs and maintains CI/CD pipelines for software delivery and deployment automation."
      ],
      icon: "/assets/TopCarrer/monitoringimage.jpeg",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50 md:p-6">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-2xl md:text-3xl lg:text-3xl font-bold mb-8 text-center">
          Top career options in <span className="text-[#ff0000]">Devops Program </span>
          with <span className="text-[#ff0000]">Placement Guarantee Program</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((career, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow">
              <CardHeader className="p-6">
                <div className="h-48 mb-4 relative bg-gray-50 rounded-lg overflow-hidden">
                  <img
                    src={career.icon}
                    alt={career.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{career.title}</h3>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  {career.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}