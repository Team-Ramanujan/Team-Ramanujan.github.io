"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Users, Cpu, Settings, Target } from "lucide-react";

const stats = [
  { icon: <Clock className="w-6 h-6" />, label: "Timeline", value: "18 Days" },
  { icon: <Users className="w-6 h-6" />, label: "Team Members", value: "5 Students" },
  { icon: <Settings className="w-6 h-6" />, label: "Design Iterations", value: "Multiple CADs" },
  { icon: <Target className="w-6 h-6" />, label: "Actuation", value: "Servo-Based" },
  { icon: <Cpu className="w-6 h-6" />, label: "Control Systems", value: "ESP32 & Arduino" }
];

export default function ProjectOverview() {
  return (
    <section id="project" className="py-24 max-md:py-16 bg-white relative">
      <div className="container mx-auto px-6 max-md:px-4 max-w-6xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#1A1A1A]"
          >
            PROJECT OVERVIEW
          </motion.h2>
          <div className="w-24 h-2 bg-[#F4C430] mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-md:gap-8 mb-24 max-md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">The Problem Statement</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              In modern manufacturing, repetitive pick-and-place tasks often lead to human fatigue, reduced precision, and inefficiencies. The challenge was to design and build a low-cost, high-precision industrial robotic arm capable of automating these tasks reliably.
            </p>

            <h3 className="text-2xl font-bold mb-4 text-[#1A1A1A]">Why We Chose This</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We selected this problem because it sits at the intersection of mechanical design, electronics, and software engineering. It represents a real-world industrial challenge where automation directly improves throughput and safety.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 max-md:p-6 border-l-4 border-[#F4C430]"
          >
            <h3 className="text-xl font-bold mb-6 text-[#1A1A1A]">Project Goals & Innovations</h3>
            <ul className="space-y-4">
              {[
                "Achieve multi-axis movement with precision",
                "Develop a robust structural CAD model",
                "Integrate seamless ESP32 & Arduino communication",
                "Implement a user-friendly software control interface",
                "Keep manufacturing and assembly costs accessible"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#F4C430] shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 p-6 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md hover:border-[#F4C430] transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gray-100 text-[#1A1A1A] flex items-center justify-center rounded-full mb-4">
                {stat.icon}
              </div>
              <h4 className="text-2xl font-black text-[#1A1A1A] mb-1">{stat.value}</h4>
              <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
