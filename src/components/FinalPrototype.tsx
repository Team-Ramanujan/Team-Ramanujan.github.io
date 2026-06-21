"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function FinalPrototype() {
  return (
    <section id="prototype" className="py-24 max-md:py-16 bg-white relative">
      <div className="container mx-auto px-6 max-md:px-4 max-w-7xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#1A1A1A]"
          >
            THE FINAL PROTOTYPE
          </motion.h2>
          <div className="w-24 h-2 bg-[#F4C430] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">A culmination of mechanical design, electronic integration, and software intelligence.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-md:gap-8 items-center mb-24 max-md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="aspect-[4/3] bg-gray-100 border border-gray-200 shadow-xl flex items-center justify-center"
          >
            <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">Flagship Product Image Placeholder</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-[#1A1A1A] mb-6">Designed for Precision. Built for Scale.</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              The final iteration features a robust 3D-printed chassis, a high-torque base swivel, and dual-actuated shoulder joints to handle payloads up to 500g with ±2mm accuracy.
            </p>
            <div className="space-y-4">
              {[
                { title: "Design Highlights", desc: "Topology-optimized linkages for weight reduction." },
                { title: "Motion Capabilities", desc: "5-axis movement allowing full spatial orientation." },
                { title: "Servo System", desc: "High-torque metal gear servos driven by PCA9685." },
                { title: "Control Software", desc: "Aura command center with inverse kinematics engine." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 border-b border-gray-100 pb-4">
                  <div className="mt-1 bg-[#F4C430] rounded-full p-1"><Check className="w-4 h-4 text-[#1A1A1A]" /></div>
                  <div>
                    <h4 className="font-bold text-[#1A1A1A]">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cinematic wide placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full h-96 max-md:h-64 bg-gray-100 border border-gray-200 shadow-xl flex items-center justify-center"
        >
          <p className="text-gray-400 font-medium tracking-widest uppercase text-sm">Wide Action Shot Placeholder</p>
        </motion.div>
      </div>
    </section>
  );
}
