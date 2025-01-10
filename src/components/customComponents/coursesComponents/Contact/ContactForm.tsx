"use client"

import { ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image"

export default function ConsultantForm() {
  return (
    <div className="flex min-h-full items-center justify-center bg-gray-50/50">
      <Card className="w-full max-w-[380px] shadow-lg">
        <CardHeader className="space-y-1 pb-4">
          <CardTitle className="text-xl">
            Talk to a{" "}
            <span className="text-emerald-600">Consultant</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Fill in the details to get started
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Full Name*"
              className="h-12"
            />
            <Input
              type="email"
              placeholder="Email Id*"
              className="h-12"
            />
            <div className="flex gap-2">
              <Select defaultValue="+91">
                <SelectTrigger className="w-[90px] h-12">
                  <SelectValue placeholder="+91" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+91">
                    <span className="flex items-center gap-2">
                      <Image
                        src="/placeholder.svg"
                        alt="IN"
                        width={16}
                        height={16}
                        className="rounded-sm"
                      />
                      +91
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Input
                type="tel"
                placeholder="Phone Number*"
                className="h-12"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" className="border-emerald-600 data-[state=checked]:bg-emerald-600" />
            <label
              htmlFor="terms"
              className="text-sm leading-none"
            >
              I agree to StarAgile{" "}
              <a href="#" className="text-emerald-600 hover:underline">
                Terms & Conditions
              </a>
              .
            </label>
          </div>
          <Button className="w-full h-12 bg-[#8957FF] hover:bg-[#7340FF]">
            Submit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>In Collaboration with -</span>
            <Image
              src="/placeholder.svg"
              alt="IBM Logo"
              width={60}
              height={24}
              className="dark:invert"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

