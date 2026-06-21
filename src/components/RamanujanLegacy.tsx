"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RamanujanLegacy() {
  return (
    <section id="legacy" className="py-24 max-md:py-16 bg-[#111] text-white relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none">
         <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 via-[#111] to-[#111]"></div>
      </div>
      <div className="container mx-auto px-6 max-md:px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-md:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#F4C430] tracking-tight">
                Why Ramanujan?
              </h2>
              <p className="text-xl md:text-2xl max-md:text-lg text-gray-300 font-light italic">
                Inspired by a mind that changed mathematics forever.
              </p>
              <div className="w-16 h-1 bg-[#F4C430] mt-6"></div>
            </div>

            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Srinivasa Ramanujan was one of the greatest mathematical geniuses in history. Despite limited resources, his curiosity, persistence, and unconventional thinking led to groundbreaking contributions to mathematics.
              </p>
              <p>
                As Team Ramanujan, we chose his name because it represents innovation, learning, problem-solving, and the courage to pursue ideas beyond limitations.
              </p>
              <p>
                Just as Ramanujan transformed numbers into discoveries, our team aimed to transform ideas into engineering solutions.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-black/40 border border-white/10 p-6 rounded-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-[#F4C430]"></div>
              <p className="text-xl max-md:text-lg font-serif italic text-gray-200">
                "An equation for me has no meaning, unless it expresses a thought of God."
              </p>
              <p className="text-right mt-4 text-[#F4C430] font-semibold tracking-wide text-sm">
                — SRINIVASA RAMANUJAN
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col items-center relative"
          >
            <div className="relative w-full max-w-[400px] mb-8">
              <div className="relative aspect-[3/4] w-full">
                <div className="absolute inset-0 bg-[#F4C430]/20 translate-x-4 translate-y-4 rounded-sm border border-[#F4C430]/50 z-0"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtY6Zd7zMlIrF1obX7a0Ekiqknt2oxXXFm2yG3CvaaQ&s=10" 
                  alt="Srinivasa Ramanujan"
                  className="w-full h-full object-cover rounded-sm z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <p className="mt-8 text-center text-sm text-gray-400 italic leading-relaxed">
                <span className="block font-semibold text-gray-300 not-italic">Srinivasa Ramanujan (1887–1920)</span>
                Mathematical Genius and Inspiration Behind Team Ramanujan
              </p>
            </div>
            
            <div className="w-full max-w-[400px]">
              <h4 className="text-[#F4C430] font-bold text-sm tracking-widest uppercase mb-4 text-center">Timeline</h4>
              <ul className="space-y-3 text-sm text-gray-400 font-mono">
                <li className="flex gap-4">
                  <span className="text-white w-12">1887</span>
                  <span>Born in Erode, India</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-white w-12">1913</span>
                  <span>Begins correspondence with G.H. Hardy</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-white w-12">1918</span>
                  <span>Elected Fellow of the Royal Society</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-white w-12">1920</span>
                  <span>Passes away at age 32, leaving a lasting legacy</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
