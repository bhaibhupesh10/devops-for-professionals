import { useState } from "react";
import type { JSX } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string | JSX.Element;
};

const faqContent: Record<string, FAQItem[]> = {
  curriculum: [
    {
      question: "What is the Job-Oriented DevOps Program?",
      answer:
        "This is a specialized program designed to equip participants with in-demand DevOps skills and provide hands-on experience through real-world projects. The goal is to make participants job-ready for roles like DevOps Engineer, Site Reliability Engineer (SRE), and Cloud Engineer.",
    },
    {
      question: "What skills will I gain during the program?",
      answer: (
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>CI/CD pipelines with tools like Jenkins and GitHub Actions</li>
          <li>Infrastructure Automation using Terraform and Ansible.</li>
          <li>Containerization and orchestration with Docker and Kubernetes.
          </li>
          <li>Monitoring and logging with Prometheus, Grafana, and ELK Stack.
          </li>
          <li>Best practices for cloud platforms like AWS, Azure, and GCP.
          </li>

        </ul>
      ),
    },
    {
      question: "What kind of projects are included in the program?",
      answer:(
        <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Building automated CI/CD pipelines.
        </li>
        <li>Setting up multi-cloud infrastructure with IaC.</li>
        <li>Deploying containerized applications to Kubernetes.

        </li>
        <li>Implementing monitoring dashboards and alert systems.
        
        </li>
        <li>Enhancing system reliability with chaos engineering.

        </li>

      </ul>
      )
      ,
    },
    {
      question: " How is this program structured?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Training Phase: Comprehensive, hands-on learning of DevOps tools and techniques.

          </li>
          <li>Project/Job-Oriented Phase: Solving industry-grade problems and completing projects to build a strong portfolio.
          .</li>

  
        </ul>
        )
    },

    {
      question: "Who should enroll in this program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Fresh graduates or IT professionals seeking a career in DevOps.


          </li>
          <li>Developers, sysadmins, or QA engineers wanting to transition to DevOps.

          .</li>
          <li>Anyone interested in mastering DevOps tools and workflows.
          </li>

  
        </ul>
        )
    },
    {
      question: "What is the job guarantee??",
       answer: "We guarantee that every eligible Placement Guarantee course student will secure a placement (full-time employment or an internship with a pre-placement offer) within 6 months after graduating from the Placement Guarantee course program.If this condition is not met, we will refund the course fee paid by the student."
    },
    {
      question: "What is the salary I will get an offer for?",
      answer: "Every eligible Placement Guarantee course student will be assured a CTC ranging from ₹ 3 LPA to ₹ 10 LPA for full-time, part-time, and temporary/contractual employment."
    },
    {
      question: "What opportunities will be considered towards this guarantee?",
      answer:"Any full-time employment or internship with a pre-placement offer that a student gets, in a profile directly related to the Placement Guarantee course program or otherwise, through their own efforts, or any other medium, will be considered the job guarantee."

    },

  ],
  timeCommitment: [
    {
      question: "Does the program include job placement assistance?",
      answer:(
        <ul className="list-disc list-inside mt-2 space-y-1">
        <li>Yes, the program provides:

        </li>
        <li>Resume-building services tailored for DevOps roles.</li>
        <li>Mock interviews with industry experts.

        </li>
        <li>Job referrals through partnerships with hiring companies for the students who has 90% Attendance 

        
        </li>
       

      </ul>
      )
      ,
    },
    {
      question: "What kind of job roles can I apply for after completing this program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>You can target roles such as:


          </li>
          <li>DevOps Engineer.
</li>

<li>Site Reliability Engineer (SRE).
</li>

<li>Cloud Infrastructure Engineer.
</li>

<li>Build and Release Engineer.
</li>

<li>Automation Engineer.
</li>

  
        </ul>
        )
    },

    {
      question: "Will I receive a certificate after completing the program?",
      answer:
       "If you maintain 90% attendance during the program, you will receive a Certificate of Completion and an Internship Certificate, both of which can be added to your LinkedIn profile and resume to highlight your DevOps expertise and practical experience."
    },

    
    {
      question: " How does the program prepare me for interviews?",
      answer:
(
  <ul className="list-disc list-inside mt-2 space-y-1">
  <li>Mock technical interviews.  

  </li>
  <li>Guidance on answering DevOps-specific questions.
  </li>
  <li>Training in building your projects & presenting effectively to recruiters.


  </li>

 

</ul>
)
    },

    {
      question: "What salary range can I expect after completing this program?",
      answer:
"Entry-level DevOps roles typically offer salaries ranging from 3 to 10 LPA per year, depending on location, industry, and expertise level."
    },
  ],
  selectionCriteria: [
    {
      question: "What DevOps tools will I work with during the program?",
      answer:
        (
          <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Version Control: Git and GitHub.

          </li>
          <li>CI/CD: Jenkins, GitHub Actions, and ArgoCD.
          </li>

          <li>Containerization: Docker.
          </li>

          <li>Orchestration: Kubernetes.
          </li>
<li>IaC: Terraform and Ansible.
</li>

<li>Monitoring: Prometheus, Grafana, and ELK Stack.
</li>
  
        </ul>
        )
    },
    {
      question: "Are the projects aligned with industry standards?",
      answer:
         "Absolutely! All our projects are meticulously designed to align with current industry standards and practices."
    },

    {
      question: " Do I need my own system to practice?",
      answer:
       "Yes, you all need a laptop/PC with you."
    },

    {
      question: "Can I showcase the projects on my resume?",
      answer:
       "Absolutely! All projects are designed to be portfolio-worthy, demonstrating your practical DevOps skills to potential employers."
    },

    {
      question: "Will I receive guidance during the hands-on projects?",
      answer:
       "Yes, our technical team will guide you throughout the projects, providing feedback and resolving doubts to ensure successful completion."
    },
    
  ],

  Eligibility:[
    {
      question:"Who is eligible to apply for the Placement Guarantee course?",
      answer:
      ( <ul className="list-disc list-inside mt-2 space-y-1">
        The Placement Guarantee course is designed for:
        <li>Final-year undergraduate or graduate students (2023, 2024, or 2025 batch).</li>
        <li> Fresh graduates who have recently completed their degree.</li>
        <li>Individuals with a keen interest in building a career in the relevant field and are ready to commit to the program requirements.</li>
       <li>If you're looking to enhance your skills and secure a job, this course is perfect for you!</li>
  
       </ul>
      )
    },
    {
      question: "I am in the early years of college and will NOT be graduating in the next 12 months, can I still apply?",
      answer:  "Yes, you can apply! While the course is primarily designed for final-year students and recent graduates, we welcome motivated learners in the early years of college who are committed to building industry-relevant skills."
    },
    {
      question: "I have more than 3 years of work experience in a different field and now I want to switch to Devops, can I apply?",
      answer:  "Yes, you can apply! This course is designed to support professionals from diverse backgrounds who are looking to transition into DevOps."
    },
    {
      question: "My application was rejected, can I re-apply?",
      answer:  "You can. However, it is recommended that you speak to us first to understand shortcomings in your previous application before deciding to re-apply."
    }
    
  ],


  

  
  

  
};

export default function Faq() {
  const [selectedItem, setSelectedItem] = useState<keyof typeof faqContent>("curriculum");

  return (
    <div className="bg-gradient-to-br from-gray-50 via-black-50 to-red-50">
    <div className="container mx-auto max-w-6xl px-4 py-12 ">
      {/* Header */}
      <h1 className="sm:text-2xl lg:text-3xl font-bold mb-8 sm:mb-12 text-center sm:text-left">
        Frequently Asked <span className="text-[#ff0000]">Questions</span>
      </h1>

      {/* Main Grid */}
      <div className="grid gap-8 lg:grid-cols-[300px,1fr] lg:gap-12">
        {/* Sidebar */}
        <div className="space-y-4">
          {Object.keys(faqContent).map((key) => (
            <div
              key={key}
              className={`p-4 rounded-lg border shadow-sm cursor-pointer transition-all duration-300 
              ${selectedItem === key ? "bg-red-200 border-red-500 text-red-600" : "bg-white text-gray-600"}`}
              onClick={() => setSelectedItem(key as keyof typeof faqContent)}
            >
              <h2 className="text-md md:text-md font-medium">
                {key === "curriculum"
                  ? "Program Overview"
                  : key === "timeCommitment"
                  ? "Career Support"
                  : key === "Eligibility"
                  ? "Eligibility & Application"
                  :key=="GuranteedJob "
                  ?"Guranteed Job Program"
                  
                  : "Tools and Hands-On Projects"
                  }
              </h2>
            </div>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqContent[selectedItem].map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
            >
              <AccordionTrigger className="text-base sm:text-md font-semibold px-4 sm:px-6 py-3 sm:py-4 [&[data-state=open]]:text-[#ff0000]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base text-gray-600 px-4 sm:px-6 pb-3 sm:pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      </div>
    </div>
  );
}
