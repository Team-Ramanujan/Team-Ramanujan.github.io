"use client";

import { motion } from "framer-motion";

export default function BeyondTheRobot() {
  return (
    <section id="beyond" className="py-32 max-md:py-20 bg-[#111] text-white relative border-t border-white/10">
      <div className="absolute inset-0 z-0 bg-[url('/blueprint-pattern.png')] opacity-5 mix-blend-overlay pointer-events-none"></div>
      <div className="container mx-auto px-6 max-md:px-4 max-w-5xl text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="w-16 h-16 bg-[#F4C430]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#F4C430]/30">
            <svg className="w-8 h-8 text-[#F4C430]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          </div>
          <h2 className="text-4xl md:text-5xl max-md:text-3xl font-black text-[#F4C430] uppercase tracking-widest">
            BEYOND THE ROBOT
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="space-y-8"
        >
          <p className="text-2xl md:text-3xl max-md:text-xl font-light leading-relaxed text-gray-200">
            Team Ramanujan is not only building a robotic arm.
          </p>
          <p className="text-xl md:text-2xl max-md:text-lg font-light leading-relaxed text-gray-400 max-w-4xl mx-auto">
            We are exploring the future of intelligent, efficient, and sustainable industrial automation. 
            By integrating advanced control software, machine vision, and predictive maintenance, we aim to transform how industries operate.
          </p>
          
          <div className="pt-8">
            <p className="text-3xl md:text-4xl max-md:text-2xl font-serif italic text-white">
              The robotic arm is the beginning.
            </p>
            <p className="text-4xl md:text-5xl max-md:text-3xl font-black text-[#F4C430] mt-4 uppercase tracking-tighter">
              The vision is much bigger.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
