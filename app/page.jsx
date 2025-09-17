"use client";

import { statsData, featuresData, howItWorksData } from "../data/landing";
import HeroSection from "../components/hero";
import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Pricing from "@/components/pricing";

// Variants for scroll animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {statsData.map((statsData, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-4xl font-bold text-[#6d2699] mb-2">
                  {statsData.value}
                </div>
                <div className="text-xl font-medium text-[#333333]">
                  {statsData.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-16 text-gray-800"
          >
            How It Works
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            variants={containerVariants}
          >
            {howItWorksData.map((step, index) => (
              <motion.div key={index} className="text-center" variants={itemVariants}>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <motion.div
          className="container mx-auto px-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Prevention is better than cure, we help you do that.
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={index}
                className="rounded-2xl border bg-white shadow-sm hover:shadow-md transition-shadow p-6"
                variants={itemVariants}
              >
                <div className="space-y-4 pt-4">
                  <div className="flex justify-center text-[#6d2699] text-4xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#6e2799] to-[#4b39b6]">
        <motion.div
          className="container mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-4"
          >
            Take Charge of Your Mental Wellbeing
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-blue-200 mb-8 max-w-2xl mx-auto"
          >
            Join thousands who are improving their mental health with real-time
            support, mindfulness tips, and AI-powered insights.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 hover:cursor-pointer"
              >
                Start Your Journey
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
