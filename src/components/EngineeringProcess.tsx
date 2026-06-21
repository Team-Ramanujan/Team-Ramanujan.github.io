"use client";

import { motion } from "framer-motion";
import { Lightbulb, Wrench, Code2, Beaker } from "lucide-react";

const phases = [
  {
    id: "research",
    title: "Research Phase",
    icon: <Lightbulb className="w-6 h-6" />,
    challenges: "Understanding kinematics mathematically and selecting the right MCU.",
    failures: "Initial attempts at calculating inverse kinematics by hand proved too slow.",
    learnings: "Found that utilizing matrix transformations programmatically is essential.",
    solutions: "Adopted ESP32 for processing power to handle real-time floating-point math.",
    improvements: "Switched to standard Denavit-Hartenberg parameters."
  },
  {
    id: "design",
    title: "Design Phase",
    icon: <Wrench className="w-6 h-6" />,
    challenges: "Designing a base that can support the arm's weight without tipping or flexing.",
    failures: "First 3D printed base warped under torque load, causing gear slippage.",
    learnings: "Thrust bearings are critical for the base swivel joint to handle axial loads.",
    solutions: "Redesigned the base to incorporate a 120mm thrust bearing and increased infill.",
    improvements: "Optimized CAD for 3D printing without supports, reducing print time."
  },
  {
    id: "dev",
    title: "Development Phase",
    icon: <Code2 className="w-6 h-6" />,
    challenges: "Ensuring smooth multi-axis coordinated movement without jerky starts/stops.",
    failures: "Sending raw angles directly to servos caused high current spikes and jitter.",
    learnings: "Servos need velocity and acceleration profiles, not just position targets.",
    solutions: "Implemented a custom trapezoidal motion profile algorithm in C++.",
    improvements: "Added a PCA9685 driver to offload PWM generation from the ESP32."
  },
  {
    id: "testing",
    title: "Testing Phase",
    icon: <Beaker className="w-6 h-6" />,
    challenges: "Calibrating the end-effector to hit specific XYZ coordinates repeatedly.",
    failures: "Mechanical slop (backlash) in cheap servos compounded to a 2cm error at the end-effector.",
    learnings: "Software calibration can offset hardware imperfections to a degree.",
    solutions: "Implemented a lookup table for error correction across the workspace.",
    improvements: "Achieved ±2mm repeatability across a 300mm reach."
  }
];

export default function EngineeringProcess() {
  return (
    <section id="engineering" className="py-24 max-md:py-16 bg-[#fafafa] relative border-t border-gray-200">
      <div className="container mx-auto px-6 max-md:px-4 max-w-6xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#1A1A1A]"
          >
            ENGINEERING PROCESS
          </motion.h2>
          <div className="w-24 h-2 bg-[#F4C430] mb-8"></div>
          <p className="text-gray-500 max-w-2xl text-lg">Engineering is an iterative process. We document not just what worked, but what failed, and how we adapted.</p>
        </div>

        <div className="space-y-12">
          {phases.map((phase, idx) => (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 p-8 max-md:p-6 shadow-sm flex flex-col md:flex-row gap-8 max-md:gap-6"
            >
              <div className="md:w-1/4">
                <div className="flex items-center gap-3 mb-4 text-[#1A1A1A]">
                  {phase.icon}
                  <h3 className="text-2xl font-bold">{phase.title}</h3>
                </div>
              </div>
              <div className="md:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6 max-md:gap-4 text-sm">
                <div>
                  <h4 className="font-bold text-gray-800 uppercase tracking-widest text-xs mb-2">Challenges</h4>
                  <p className="text-gray-600 mb-4">{phase.challenges}</p>
                  
                  <h4 className="font-bold text-red-600 uppercase tracking-widest text-xs mb-2">Failures</h4>
                  <p className="text-gray-600">{phase.failures}</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#F4C430] uppercase tracking-widest text-xs mb-2">Learnings</h4>
                  <p className="text-gray-600 mb-4">{phase.learnings}</p>
                  
                  <h4 className="font-bold text-green-600 uppercase tracking-widest text-xs mb-2">Solutions & Improvements</h4>
                  <p className="text-gray-600 mb-2">{phase.solutions}</p>
                  <p className="text-gray-600">{phase.improvements}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
