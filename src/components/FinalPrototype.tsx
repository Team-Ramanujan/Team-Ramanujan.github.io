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
              className="w-full aspect-video bg-gray-900 rounded-2xl border border-gray-200/80 shadow-2xl overflow-hidden flex flex-col relative group"
            >
              {/* Browser Window Header */}
              <div className="h-10 bg-gray-100 border-b border-gray-200 px-4 flex items-center justify-between shrink-0 select-none">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-[11px] font-semibold text-gray-500 tracking-wider uppercase font-mono bg-white border border-gray-200/60 px-3 py-0.5 rounded-md shadow-sm">
                 Final Prototype
                </div>
                <div className="w-12"></div> {/* Spacer for symmetry */}
              </div>

              {/* Video Player Container */}
              <div className="w-full flex-1 relative bg-[#0B0B0F] overflow-hidden">
                <video
                  src="https://cdn.savedly.net/n7yzq3rs"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle glassmorphic overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
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
          className="w-full rounded-2xl border border-gray-200/80 shadow-2xl overflow-hidden flex flex-col relative group"
        >
          {/* Browser Window Header */}
          <div className="h-10 bg-gray-100 border-b border-gray-200 px-4 flex items-center justify-between shrink-0 select-none">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="text-[11px] font-semibold text-gray-500 tracking-wider uppercase font-mono bg-white border border-gray-200/60 px-3 py-0.5 rounded-md shadow-sm">
              AURA DASHBOARD CONTROL CENTER
            </div>
            <div className="w-12"></div> {/* Spacer for symmetry */}
          </div>

          {/* Image Container */}
          <div className="w-full relative bg-[#0B0B0F] overflow-hidden aspect-[16/10] md:aspect-[16/10] lg:aspect-[16/10]">
            <img
              src="/aura-dashboard.png"
              alt="Aura Dashboard Control Center"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
