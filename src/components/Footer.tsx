"use client";

import { motion } from "framer-motion";
import { Lightbulb, Cpu, Users, BookOpen, Settings, ArrowRight, Code } from "lucide-react";

export default function Footer() {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-[#F4C430]" />,
      title: "Innovation",
      desc: "Turning ideas into solutions."
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#F4C430]" />,
      title: "Engineering",
      desc: "Solving real-world challenges through design and technology."
    },
    {
      icon: <Users className="w-8 h-8 text-[#F4C430]" />,
      title: "Collaboration",
      desc: "Five students working together toward one vision."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-[#F4C430]" />,
      title: "Continuous Learning",
      desc: "Every challenge became an opportunity to grow."
    }
  ];

  return (
    <footer id="contact" className="relative bg-gray-50 text-gray-900 overflow-hidden w-full border-t border-gray-200">
      {/* Subtle blueprint/grid graphics */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '32px 32px' }}
      ></div>
      
      {/* Soft floating gear in background */}
      <div className="absolute -top-32 -right-32 opacity-[0.03] z-0 pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        >
          <Settings className="w-[500px] h-[500px]" />
        </motion.div>
      </div>
      <div className="absolute -bottom-40 -left-40 opacity-[0.03] z-0 pointer-events-none">
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
        >
          <Settings className="w-[600px] h-[600px]" />
        </motion.div>
      </div>

      {/* Animated divider above section */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent relative z-10">
        <motion.div 
          className="h-full bg-white w-1/4 absolute top-0 left-0 opacity-50 shadow-[0_0_10px_#fff]"
          animate={{ left: ['-25%', '100%'] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 max-md:px-4 py-32 max-md:py-20 relative z-10 max-w-6xl">
        
        {/* Section Title */}
        <div className="text-center mb-24 max-md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl max-md:text-4xl font-black mb-8 text-[#1A1A1A] tracking-tight"
          >
            More Than A Robotic Arm
          </motion.h2>
          <div className="w-24 h-2 bg-[#F4C430] mx-auto"></div>
        </div>

        {/* Main Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center space-y-12 max-md:space-y-8 mb-32 max-md:mb-16"
        >
          <p className="text-xl md:text-2xl max-md:text-lg text-gray-700 font-light leading-relaxed">
            For 18 days, we explored robotics, engineering, programming, design, research, teamwork, and innovation.
          </p>
          
          <div className="text-2xl md:text-4xl max-md:text-xl font-black text-[#1A1A1A] space-y-4 max-md:space-y-2 tracking-tight">
            <p className="opacity-40">What began as an idea slowly became sketches.</p>
            <p className="opacity-50">Sketches became designs.</p>
            <p className="opacity-70">Designs became code.</p>
            <p className="opacity-80">Code became movement.</p>
            <p className="text-[#F4C430] drop-shadow-sm">Movement became a robotic arm.</p>
          </div>

          <p className="text-xl md:text-2xl max-md:text-lg text-gray-700 leading-relaxed mt-16 max-md:mt-10 max-w-3xl mx-auto">
            But the most important thing we built was not the machine.<br/><br/>
            <span className="text-[#1A1A1A] font-bold text-2xl md:text-3xl max-md:text-xl">
              It was the experience, knowledge, confidence, and engineering mindset that will guide our future projects.
            </span>
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-4 mb-32 max-md:mb-16">
          {values.map((val, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 max-md:p-6 rounded-2xl shadow-xl border border-gray-100 hover:border-[#F4C430]/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform translate-x-4 -translate-y-4 group-hover:scale-110">
                {val.icon}
              </div>
              <div className="mb-6">{val.icon}</div>
              <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{val.title}</h3>
              <p className="text-gray-600 text-lg font-light">{val.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Final Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center py-20 max-md:py-12 border-y border-gray-200 mb-32 max-md:mb-16 relative"
        >
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-6">
            <Settings className="w-10 h-10 text-[#F4C430]" />
          </div>
          <h2 className="text-3xl md:text-5xl max-md:text-2xl font-light text-[#1A1A1A] leading-tight font-serif italic">
            "The arm moves because of motors.<br />
            <span className="font-black text-[#F4C430] not-italic mt-4 inline-block">The project moved because of people."</span>
          </h2>
        </motion.div>

        {/* Next Chapter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-12 max-md:p-6 shadow-2xl border border-gray-100 mb-32 max-md:mb-16 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent"></div>
          
          <div className="text-center mb-12 max-md:mb-8">
            <h3 className="text-3xl max-md:text-2xl font-black text-[#1A1A1A] mb-4">Next Chapter</h3>
            <p className="text-xl text-gray-600 font-light">This prototype is only the beginning.<br/>Our future vision includes:</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Predictive Maintenance Systems",
              "Machine Vision",
              "AI-Based Object Detection",
              "Smart Manufacturing",
              "AGV Integration",
              "Sustainable Industrial Automation"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#F4C430]/30 transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#F4C430]"></div>
                <span className="text-[#1A1A1A] font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 max-md:gap-4 mb-32 max-md:mb-16"
        >
          <a href="#overview" className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[#1A1A1A] text-white font-bold rounded-xl hover:bg-[#333] transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Explore The Journey <ArrowRight className="w-5 h-5" />
          </a>
          <a href="https://aurasoftware.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white text-[#1A1A1A] border-2 border-[#1A1A1A] font-bold rounded-xl hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Meet Aura <Code className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Closing Line */}
        <div className="pt-16 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center text-center md:text-left">
            {/* Left Column: Team Ramanujan Info */}
            <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
              <div className="w-14 h-14 overflow-hidden">
                <img src="/logo.png" alt="Team Ramanujan Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-sm font-black tracking-widest uppercase text-[#1A1A1A] leading-snug">
                  Inspired by Ramanujan.
                </p>
                <p className="text-xs text-gray-500 tracking-wider mt-1">
                  Built by Team Ramanujan. Engineered for the Future.
                </p>
              </div>
            </div>

            {/* Right Column: Supported By Logos */}
            <div className="md:col-span-2 flex flex-col items-center md:items-end gap-4">
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400">
                Supported & Facilitated By
              </p>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 md:gap-10">
                {[
                  { src: "/logo-1.png", alt: "LTM" },
                  { src: "/logo-2.png", alt: "Central Square Foundation" },
                  { src: "/logo-3.png", alt: "The Innovation Story" },
                  { src: "/logo-4.png", alt: "CM Shri School" }
                ].map((logo, idx) => (
                  <div 
                    key={idx} 
                    className="h-10 md:h-12 flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                  >
                    <img 
                      src={logo.src} 
                      alt={logo.alt} 
                      className="max-h-full max-w-[120px] md:max-w-[140px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16 pt-8 border-t border-gray-100">
            <p className="text-xs tracking-widest text-gray-400">
              &copy; 2026 Team Ramanujan. All rights reserved.
            </p>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
