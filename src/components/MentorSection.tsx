"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function MentorSection() {
  const tags = [
    "Industry 4.0",
    "Industrial Automation",
    "Robotics Programs",
    "Industrial IoT",
    "Embedded Systems",
    "PLC & Robotics",
    "Mentorship",
    "Innovation Leadership"
  ];

  return (
    <section id="mentor" className="py-24 max-md:py-16 bg-white relative border-y border-gray-100 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#fafafa] -z-10 hidden lg:block"></div>
      <div className="container mx-auto px-6 max-md:px-4 max-w-7xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-md:gap-8 lg:gap-20 items-center">
          
          {/* LEFT SIDE: PHOTOGRAPH */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full max-w-md mx-auto xl:ml-auto">
              {/* Offset frame background */}
              <div className="absolute inset-0 bg-transparent border-4 border-[#F4C430] translate-x-4 translate-y-4 rounded-xl -z-10"></div>
              {/* Main image container */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden shadow-2xl border-8 border-white bg-white">
                <div className="absolute inset-0 bg-[#F4C430]/5 mix-blend-multiply z-10 pointer-events-none"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/mentor-photo.jpg" 
                  alt="Disha Goswami" 
                  className="w-full h-full object-cover relative z-0"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[url('/blueprint-pattern.png')] opacity-20 -z-10"></div>
            <div className="absolute top-8 -right-4 w-8 h-8 bg-[#F4C430] rounded-sm shadow-lg"></div>
          </motion.div>

          {/* RIGHT SIDE: CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="mb-8">
              <h2 className="text-[#F4C430] font-bold tracking-widest uppercase mb-3 text-sm">
                Guided By Excellence
              </h2>
              <h3 className="text-3xl md:text-4xl max-md:text-2xl font-black text-[#1A1A1A] mb-4 leading-tight">
                The mentor who helped transform ideas into engineering solutions.
              </h3>
            </div>

            <div className="mb-8 pb-8 border-b border-gray-100">
              <h4 className="text-2xl max-md:text-xl font-bold text-[#1A1A1A] mb-1">Disha Goswami</h4>
              <p className="text-gray-500 font-medium">
                Robotics & Industrial Automation Program Manager<br/>
                Industry 4.0 Specialist
              </p>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
              <p>
                Throughout our Robotics Innovation Bootcamp journey, Disha Ma'am played a crucial role in guiding Team Ramanujan through the world of robotics, industrial automation, and engineering innovation.
              </p>
              <p>
                With expertise in Industry 4.0 technologies, industrial robotics, embedded systems, IoT, automation, PLC systems, and robotics program management, she helped us understand how real-world engineering projects are planned, developed, and implemented.
              </p>
              <p>
                Her mentorship encouraged us to think beyond building a prototype and focus on solving real industrial challenges through research, design, programming, testing, and continuous improvement.
              </p>
              <p>
                From technical discussions and project reviews to engineering guidance and problem-solving support, her mentorship significantly shaped the development of our Industrial Robotic Arm project.
              </p>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tags.map((tag, idx) => (
                <span key={idx} className="px-4 py-1.5 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>

            {/* QUOTE */}
            <div className="bg-[#fafafa] p-8 max-md:p-6 rounded-xl border border-gray-100 mb-10 relative">
              <Quote className="absolute top-6 left-6 w-8 h-8 text-[#F4C430] opacity-30" />
              <p className="text-lg font-serif italic text-gray-700 relative z-10 pl-6 leading-relaxed">
                "Engineering is not just about building machines.<br/>
                It is about solving problems, learning continuously, and creating meaningful impact."
              </p>
            </div>

            {/* BUTTON & BOTTOM LINE */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 max-md:gap-6">
              <a 
                href="https://dishagoswami2502.github.io/Disha_portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center max-md:w-full gap-2 px-6 py-3 bg-[#24292e] text-white font-medium rounded-md hover:bg-[#1b1f23] transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                View GitHub Portfolio
              </a>
              <div className="text-sm text-gray-500 max-w-sm">
                <p className="mb-2">We sincerely thank Disha Ma'am for her guidance, encouragement, and mentorship throughout our engineering journey.</p>
                <p>Her support helped Team Ramanujan transform learning into innovation.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
