"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-6 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1, y: [0, -20, 0] }}
          transition={{ 
            opacity: { duration: 0.8 },
            scale: { duration: 0.8, ease: "easeOut" },
            y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
          }}
          className="w-32 h-32 md:w-48 md:h-48 max-md:w-24 max-md:h-24 mx-auto bg-white shadow-2xl flex items-center justify-center rounded-full mb-12 max-md:mb-8 overflow-hidden"
        >
          <img src="/logo.jpeg" alt="Team Ramanujan Logo" className="w-full h-full object-cover" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[#F4C430] font-bold tracking-[0.2em] uppercase mb-4 text-sm"
        >
          Team Ramanujan
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-6xl md:text-8xl max-md:text-4xl max-lg:text-6xl font-black tracking-tighter mb-6 max-md:mb-4 text-[#1A1A1A]"
        >
          INDUSTRIAL<br />ROBOTIC ARM
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-2xl md:text-3xl max-md:text-xl font-light text-gray-800 max-w-4xl mx-auto mb-6 max-md:mb-4 leading-tight max-md:px-2"
        >
          From Concept to Prototype —<br />
          18 Days of Engineering, Innovation, and Relentless Iteration.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-lg max-md:text-base text-gray-500 max-w-2xl mx-auto mb-12 max-md:mb-8 max-md:px-2"
        >
          Designed and developed by Team Ramanujan during the Robotics Innovation Bootcamp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 max-md:gap-4 max-md:w-full max-md:px-4"
        >
          <a href="#project" className="px-8 py-4 bg-[#F4C430] text-[#1A1A1A] font-bold rounded-none hover:bg-black hover:text-white transition-all duration-300 tracking-wide uppercase text-sm max-md:w-full max-md:py-3">
            Explore Project
          </a>
          <a href="#aura" className="px-8 py-4 bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] font-bold rounded-none hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 tracking-wide uppercase text-sm max-md:w-full max-md:py-3">
            Meet Aura
          </a>
        </motion.div>

        {/* Cinematic Visual Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 1 }}
          className="mt-20 max-md:mt-12 relative mx-auto max-w-5xl aspect-video bg-gray-100 border border-gray-200 shadow-2xl flex items-center justify-center overflow-hidden max-md:w-[calc(100vw-2rem)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://ik.imagekit.io/CMshree/Gemini_Generated_Image_5uj56f5uj56f5uj5.png"
            alt="Team Ramanujan Final Prototype"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
