// app/thankyou/page.tsx or pages/thankyou.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle,  Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ThankYou() {
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    setOrderNumber(Math.random().toString(36).substring(7).toUpperCase());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl w-full"
      >
        <Card className="p-8 space-y-6">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Thank You Message */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold text-gray-900">
              Thank You for Your Purchase!
            </h1>
            <p className="text-gray-600">
              Your DevOps journey begins now. We're excited to have you on board!
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 space-y-4">
            <h2 className="font-semibold text-gray-800">Order Details</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Order Number</span>
                <span className="font-medium">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Product</span>
                <span className="font-medium">Complete DevOps Course</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Access</span>
                <span className="font-medium">Lifetime</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Next Steps</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
                asChild
              >
                <Link href="https://chat.whatsapp.com/YOUR_GROUP_LINK">
                  {/* <WhatsappIcon className="w-4 h-4" /> */}
                  Join WhatsApp Community
                </Link>
              </Button>
              <Button
                variant="outline"
                className="w-full flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Access Course Material
              </Button>
            </div>
          </div>

          {/* Course Access */}
          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">
              🎉 Your Course Access
            </h3>
            <p className="text-blue-700 text-sm mb-4">
              Check your email for login credentials and detailed instructions to
              get started with your DevOps journey.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Start Learning Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Support Section */}
          <div className="text-center text-sm text-gray-600 pt-4 border-t">
            <p>
              Need help? Contact our support team at{" "}
              <a
                href="mailto:support@example.com"
                className="text-blue-600 hover:underline"
              >
                support@example.com
              </a>
            </p>
          </div>
        </Card>
      </motion.div>
    </div>
  );
}