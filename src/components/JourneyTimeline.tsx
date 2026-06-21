"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSoundContext } from "./SoundProvider";

const days = [
  { day: "1-3", title: "Research & Mathematics", desc: "Understanding Denavit-Hartenberg parameters and selecting the right microcontrollers." },
  { day: "4-7", title: "CAD & Prototyping", desc: "Designing 3D printable linkages. Overcoming initial structural failures." },
  { day: "8-12", title: "Electronics Integration", desc: "Wiring the PCA9685, managing power distribution, and debugging I2C issues." },
  { day: "13-16", title: "Software & Kinematics", desc: "Writing the inverse kinematics engine and translating coordinates into PWM signals." },
  { day: "17-18", title: "Calibration & Polish", desc: "Tuning the PID loops, fixing backlash, and achieving sub-millimeter precision." }
];

export default function JourneyTimeline() {
  const containerRef = useRef(null);
  const { playClick } = useSoundContext();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="journey" className="py-24 max-md:py-16 bg-white relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-md:px-4 max-w-4xl relative">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#1A1A1A]">18 DAYS OF INNOVATION</h2>
          <div className="w-24 h-2 bg-[#F4C430] mx-auto mb-8"></div>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">A compressed timeline of intense problem solving. From a blank whiteboard to a moving machine.</p>
        </div>

        <div className="relative">
          {/* Background Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY: scrollYProgress, originY: 0 }}
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-[#F4C430]"
          ></motion.div>
          
          <div className="space-y-16">
            {days.map((event, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                onViewportEnter={() => playClick()}
                className={`relative flex items-center ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Center Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-[#F4C430] border-4 border-white rounded-full transform -translate-x-1.5 md:-translate-x-1/2 z-10 shadow-sm"></div>
                
                {/* Content Box */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                  <div className="bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F4C430] transition-all duration-300">
                    <span className="text-[#F4C430] font-bold tracking-widest text-sm uppercase mb-2 block">{event.day}</span>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
