'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqData } from './data/faq-data'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState(faqData[0].id)

  return (
    <div className='bg-gradient-to-br from-gray-50 via-black-50 to-red-50'>
    <div className="w-full max-w-6xl text-center mx-auto px-4 py-8">
       
      <h1 className="text-3xl text-center font-bold mb-6 ">Frequently Asked Questions</h1>
     
      <Tabs defaultValue={faqData[0].id} value={activeTab} onValueChange={setActiveTab}>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <TabsList className="inline-flex w-full justify-start">
            {faqData.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="px-4 p-2 py-2"
              >
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {faqData.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            {category.faqs.length > 0 ? (
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ) : (
              <p className="text-muted-foreground py-4">
                No FAQs available for this category yet.
              </p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
    </div>
  )
}

