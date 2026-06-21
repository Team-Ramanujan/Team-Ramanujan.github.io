"use client";

import { motion } from "framer-motion";
import { Activity, Wrench, Leaf, TrendingDown, Clock, Settings, Zap, ArrowRight } from "lucide-react";

export default function FutureVision() {
  const phases = [
    { phase: "Phase 1", title: "Current Robotic Arm Prototype" },
    { phase: "Phase 2", title: "Aura Control Software Enhancement" },
    { phase: "Phase 3", title: "Predictive Maintenance System" },
    { phase: "Phase 4", title: "Machine Vision Integration" },
    { phase: "Phase 5", title: "AI Object Recognition" },
    { phase: "Phase 6", title: "AGV Integration" },
    { phase: "Phase 7", title: "Autonomous Industrial Workstation" }
  ];

  const benefits = [
    { icon: <TrendingDown className="w-5 h-5" />, text: "Reduced maintenance costs" },
    { icon: <Clock className="w-5 h-5" />, text: "Longer component lifespan" },
    { icon: <Activity className="w-5 h-5" />, text: "Lower operational downtime" },
    { icon: <Leaf className="w-5 h-5" />, text: "Reduced waste generation" },
    { icon: <Zap className="w-5 h-5" />, text: "Improved industrial efficiency" },
    { icon: <Settings className="w-5 h-5" />, text: "Smarter resource utilization" }
  ];

  return (
    <section id="future" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* PREDICTIVE MAINTENANCE CONCEPT */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black mb-4 text-[#1A1A1A] uppercase tracking-tight"
            >
              Predictive Maintenance &<br className="hidden md:block"/> Sustainable Robotics
            </motion.h2>
            <div className="w-24 h-2 bg-[#F4C430] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most industrial robotic systems replace components only after failure or through expensive routine replacements. Our future vision is to develop an intelligent predictive maintenance system that continuously monitors the robotic arm's condition and predicts component wear before failure occurs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1A1A1A] text-white p-10 rounded-2xl shadow-xl border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-[#F4C430]">
                <Wrench className="w-6 h-6" />
                How It Works
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F4C430]"/> Monitor servo performance</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F4C430]"/> Track motor health and temperature</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F4C430]"/> Analyze movement patterns for anomalies</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F4C430]"/> Detect unusual vibrations</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F4C430]"/> Identify early wear indicators</li>
                <li className="flex items-center gap-3"><ArrowRight className="w-4 h-4 text-[#F4C430]"/> Generate actionable maintenance recommendations</li>
              </ul>
              
              <div className="mt-10 p-6 bg-black/40 rounded-xl border border-white/5">
                <h4 className="font-bold text-[#F4C430] mb-2 uppercase tracking-wide text-sm">Vision Statement</h4>
                <p className="italic text-gray-400">
                  "Instead of replacing parts on a fixed schedule, future robotic systems should understand their own condition and request maintenance only when truly needed. This transforms maintenance from reactive to predictive."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold mb-8 text-[#1A1A1A]">The Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#F4C430] hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#F4C430] shadow-sm mb-4 border border-gray-100">
                      {benefit.icon}
                    </div>
                    <p className="font-semibold text-gray-800">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* FUTURE EXPANSION ROADMAP */}
        <div>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-black mb-4 text-[#1A1A1A]"
            >
              FUTURE EXPANSION ROADMAP
            </motion.h2>
            <p className="text-gray-500">The path to a fully autonomous industrial workstation.</p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-x-auto pb-8"
          >
            <div className="min-w-[800px] flex justify-between relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              <div className="absolute top-1/2 left-0 w-1/6 h-1 bg-[#F4C430] -translate-y-1/2 z-0"></div> {/* Progress line */}

              {phases.map((item, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center w-32">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border-4 mb-4
                    ${idx === 0 ? 'bg-[#F4C430] border-white text-black ring-4 ring-[#F4C430]/30' : 'bg-white border-gray-300 text-gray-400'}`}
                  >
                    {idx + 1}
                  </div>
                  <div className="text-center">
                    <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${idx === 0 ? 'text-[#F4C430]' : 'text-gray-400'}`}>{item.phase}</div>
                    <div className={`text-sm font-medium ${idx === 0 ? 'text-gray-900' : 'text-gray-500'}`}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
