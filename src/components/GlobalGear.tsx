"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";

export default function GlobalGear() {
  return (
    <div className="fixed inset-0 z-[-10] pointer-events-none overflow-hidden flex items-center justify-center lg:justify-end">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
        className="text-[#1A1A1A] opacity-[0.03] md:opacity-[0.05]"
        style={{ width: "800px", height: "800px", marginRight: "-200px" }}
      >
        <Settings size={800} strokeWidth={0.5} />
      </motion.div>
    </div>
  );
}
