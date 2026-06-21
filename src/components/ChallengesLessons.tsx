"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Wrench, RefreshCw, Zap } from "lucide-react";

const challenges = [
  {
    icon: AlertTriangle,
    title: "Torque Limits",
    desc: "Initial designs failed to account for the lever-arm effect on the shoulder servo. It burnt out after 10 minutes of testing. We solved this by pairing two servos in parallel.",
  },
  {
    icon: RefreshCw,
    title: "Serial Latency",
    desc: "Sending IK angles from Python over serial was introducing a 200ms lag. We optimized the baud rate and condensed the data packet to a simple string comma-separated format.",
  },
  {
    icon: Wrench,
    title: "Bearing Friction",
    desc: "The 3D printed base was grinding against the stationary plate. We implemented a metal thrust bearing to eliminate friction and smooth out base rotation.",
  },
  {
    icon: Zap,
    title: "Power Starvation",
    desc: "When all 5 servos moved simultaneously, the voltage dropped, causing the ESP32 to brownout and reset. Added a dedicated 5V 10A buck converter for the servo rails.",
  },
];

export default function ChallengesLessons() {
  return (
    <section id="challenges" className="py-24 bg-[#050505] border-b border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Hard Truths</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl">
            Engineering is 10% design and 90% fixing things that break.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {challenges.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-[#0a0a0a] border border-border"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-muted leading-relaxed text-sm">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
