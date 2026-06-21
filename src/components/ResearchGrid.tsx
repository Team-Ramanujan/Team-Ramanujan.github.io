"use client";

import { motion } from "framer-motion";
import { BookOpen, Box, Move3d, Cog, Eye, Truck } from "lucide-react";

const researchTopics = [
  { title: "Industrial Robots", desc: "Understanding the role of automation in modern manufacturing environments.", icon: <Box className="w-6 h-6" /> },
  { title: "Robot Arms", desc: "Analyzing joint types, payload capacities, and structural integrity.", icon: <Cog className="w-6 h-6" /> },
  { title: "Degrees of Freedom", desc: "Calculating required axes for 3D spatial positioning and orientation.", icon: <Move3d className="w-6 h-6" /> },
  { title: "SCARA Robots", desc: "Studying Selective Compliance Assembly Robot Arms for high-speed planar tasks.", icon: <BookOpen className="w-6 h-6" /> },
  { title: "Delta Robots", desc: "Researching parallel-linkage robots for ultra-fast pick-and-place operations.", icon: <BookOpen className="w-6 h-6" /> },
  { title: "Servo Motors", desc: "Evaluating torque, speed, and precision for reliable actuation.", icon: <Cog className="w-6 h-6" /> },
  { title: "Machine Vision", desc: "Exploring object detection techniques to give the arm sight.", icon: <Eye className="w-6 h-6" /> },
  { title: "Mobile Manipulators", desc: "Integrating mobility with manipulation for flexible factory floors.", icon: <Truck className="w-6 h-6" /> }
];

export default function ResearchGrid() {
  return (
    <section id="research" className="py-24 max-md:py-16 bg-white relative">
      <div className="container mx-auto px-6 max-md:px-4 max-w-7xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#1A1A1A]"
          >
            RESEARCH PHASE
          </motion.h2>
          <div className="w-24 h-2 bg-[#F4C430] mb-8"></div>
          <p className="text-gray-500 max-w-2xl text-lg">Every great engineering project begins with a deep dive into existing technologies. We analyzed various robotic paradigms to inform our design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-md:gap-4">
          {researchTopics.map((topic, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="bg-gray-50 border border-gray-100 p-8 max-md:p-6 hover:bg-white hover:border-[#F4C430] hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gray-200 text-[#1A1A1A] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#F4C430] group-hover:text-white transition-colors">
                {topic.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{topic.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{topic.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
