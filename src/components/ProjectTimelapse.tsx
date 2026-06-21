"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

export default function ProjectTimelapse() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { margin: "-20% 0px" });

  useEffect(() => {
    if (!videoRef.current) return;
    if (isInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isInView]);

  return (
    <section id="timelapse" className="py-24 max-md:py-16 bg-gray-50 relative border-y border-gray-200">
      <div className="container mx-auto px-6 max-md:px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#1A1A1A] uppercase tracking-tight"
          >
            18 Days of Innovation
          </motion.h2>
          <p className="text-xl md:text-2xl max-md:text-lg text-gray-500 font-light italic mb-8 max-md:mb-6">
            Watch Our Journey From Concept To Prototype
          </p>
          <div className="w-24 h-2 bg-[#F4C430] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-md:gap-8 items-start">
          
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative bg-[#111] p-2 md:p-4 max-md:p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-[#333] group"
          >
            {/* Top Status Bar / Bezel */}
            <div className="flex justify-between items-center px-4 py-3 mb-2 bg-[#0a0a0a] rounded-lg border border-[#222]">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <span className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase">REC</span>
              </div>
              <div className="text-gray-500 font-mono text-xs tracking-widest uppercase hidden sm:block">
                Aura_Lab_Feed_01
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[#222] shadow-inner bg-black ring-1 ring-white/5">
              <video 
                ref={videoRef}
                controls 
                loop
                playsInline
                className="w-full h-full object-cover relative z-10"
              >
                <source src="https://ik.imagekit.io/CMshree/WhatsApp%20Video%202026-06-21%20at%204.33.06%20PM.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#1A1A1A] p-8 max-md:p-6 rounded-xl shadow-xl text-white h-full flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold mb-8 text-[#F4C430]">Project Milestones</h3>
            <div className="space-y-8 relative">
                <div className="absolute top-2 bottom-2 left-3 w-0.5 bg-gradient-to-b from-[#F4C430]/50 via-[#F4C430]/20 to-transparent"></div>
                {[
                  { title: "Concept & CAD Design", time: "Initial Phase" },
                  { title: "3D Printing Components", time: "Fabrication" },
                  { title: "Circuitry & Electronics", time: "Hardware Assembly" },
                  { title: "Aura Software Integration", time: "Programming" },
                  { title: "Testing & Refinement", time: "Final Validation" },
                ].map((item, i) => (
                  <div key={i} className="relative pl-10">
                    <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-[#F4C430] ring-4 ring-[#1A1A1A]"></div>
                    <h4 className="font-bold text-lg text-white mb-1">{item.title}</h4>
                    <p className="text-[#F4C430] text-sm uppercase tracking-wider font-semibold">{item.time}</p>
                  </div>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
