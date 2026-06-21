"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Stage 0: Logo
    // Stage 1: "Industrial Robotic Arm"
    // Stage 2: "18 Days of Innovation"
    // Stage 3: Exit
    const timer1 = setTimeout(() => setStage(1), 2000);
    const timer2 = setTimeout(() => setStage(2), 4000);
    const timer3 = setTimeout(() => {
      setStage(3);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100vh" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-50 bg-[#1A1A1A] flex items-center justify-center overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {stage === 0 && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="w-48 h-48 max-md:w-32 max-md:h-32 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-[0_0_50px_rgba(244,196,48,0.2)]"
              >
                <img src="/logo.jpeg" alt="Team Ramanujan Logo" className="w-full h-full object-cover" />
              </motion.div>
            )}

            {stage === 1 && (
              <motion.h1
                key="title1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl max-md:text-3xl font-black text-white tracking-widest text-center"
              >
                INDUSTRIAL<br/>
                <span className="text-[#F4C430]">ROBOTIC ARM</span>
              </motion.h1>
            )}

            {stage === 2 && (
              <motion.h2
                key="title2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl max-md:text-2xl font-light text-white tracking-widest text-center"
              >
                18 DAYS OF <span className="font-black text-[#F4C430]">INNOVATION</span>
              </motion.h2>
            )}
          </AnimatePresence>
          
          {/* Subtle blueprint grid overlay on the loading screen */}
          <div className="absolute inset-0 z-[-1] opacity-5 pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#F4C430 1px, transparent 1px), linear-gradient(90deg, #F4C430 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
