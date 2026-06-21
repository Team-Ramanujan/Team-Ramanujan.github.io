"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSoundContext } from "./SoundProvider";
import { Download, Code, BookOpen, FileText } from "lucide-react";

export default function AuraSection() {
  const { playActivation } = useSoundContext();

  return (
    <section id="aura" className="py-24 max-md:py-16 bg-[#1A1A1A] text-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#F4C430] to-transparent rounded-full blur-[150px]"
        ></motion.div>
      </div>

      <motion.div 
        onViewportEnter={() => playActivation()}
        className="container mx-auto px-6 max-md:px-4 max-w-6xl relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-[#F4C430] text-[#F4C430] font-bold tracking-widest uppercase text-xs rounded-full mb-6"
          >
            Software Architecture
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl max-md:text-4xl font-black mb-6"
          >
            Meet Aura
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl max-md:text-xl font-light text-gray-300 mb-8 max-md:mb-4"
          >
            The Intelligence Behind Our Robotic Arm
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-md:gap-8 items-center mb-20 max-md:mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-400 leading-relaxed"
          >
            <p className="text-xl text-white font-medium">
              Aura isn't just software. It's the digital brain that transforms commands into movement, turning code into precise robotic actions.
            </p>
            <p>Every movement begins with a decision.</p>
            <p>Built by students. Designed like the future.</p>
            <p>From command to motion. From idea to execution.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-black border border-[#333] p-2 rounded-xl shadow-2xl relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent rounded-t-xl"></div>
            <div className="flex items-center gap-2 mb-2 px-4 pt-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-gray-500 font-mono">aurasoftware.vercel.app</span>
            </div>
            <div className="rounded-lg overflow-hidden border border-[#333] bg-[#0d0d0d]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/aura-dashboard.png" alt="Aura Software Dashboard" className="w-full h-auto object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-md:gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://aurasoftware.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center max-md:w-full items-center gap-2 px-8 py-4 bg-[#F4C430] text-[#1A1A1A] font-bold uppercase tracking-wider text-sm transition-colors hover:bg-white"
          >
            <Code className="w-5 h-5" /> Launch Web App
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/docs.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center max-md:w-full items-center gap-2 px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-white font-bold uppercase tracking-wider text-sm transition-colors"
          >
            <BookOpen className="w-5 h-5" /> Source Code
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/docs.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center max-md:w-full items-center gap-2 px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-white font-bold uppercase tracking-wider text-sm transition-colors"
          >
            <BookOpen className="w-5 h-5" /> Documentation
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/docs.html"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center max-md:w-full items-center gap-2 px-8 py-4 bg-transparent border border-gray-600 hover:border-white text-white font-bold uppercase tracking-wider text-sm transition-colors"
          >
            <FileText className="w-5 h-5" /> User Guide
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
