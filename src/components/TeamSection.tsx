"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Box, Cpu, Code, Settings, CheckCircle, FileText, Lightbulb, Search } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const teamData = [
  {
    id: "aryan",
    name: "Aryan Maurya",
    role: "Lead AI & Software Engineer",
    image: "https://ik.imagekit.io/CMshree/Gemini_Generated_Image_sbzydfsbzydfsbzy-clean.png",
    shortBio: "Student at Dr. BR Ambedkar CM Shri sec 21 rohini.",
    fullBio: "I'm a 16-year-old software developer and the AI architect leading the backend for Team Ramanujan. I specialize in Python, OpenCV, and data logic, focusing on bridging the gap between raw software data and physical hardware. Using tools like Google's Antigravity IDE, Firebase, and Go, I build the core AI frameworks that allow autonomous machinery to actually see, process information, and react to the world around it.",
    contributions: ["Software backend", "Systems integration with hardware"],
    portfolio: "#",
    linkedin: "https://www.linkedin.com/in/aryan-mauarya-founder",
    github: "https://github.com/aryanmouarya0-design"
  },
  {
    id: "aviyansh",
    name: "Aviyansh Jain",
    role: "Lead Mechanical Designer",
    image: "/avatar-placeholder.png",
    shortBio: "Bio coming soon...",
    fullBio: "Full biography coming soon. This section will highlight the detailed background and technical journey of this team member.",
    contributions: ["Designed 3D linkages", "Structural analysis"],
    portfolio: "#",
    linkedin: "#",
    github: "#"
  },
  {
    id: "zeenat",
    name: "Zeenat Khan",
    role: "Research & AI Specialist",
    image: "https://ik.imagekit.io/CMshree/Gemini_Generated_Image_tcep04tcep04tcep%20(1).png?updatedAt=1782043573030",
    shortBio: "Bio coming soon...",
    fullBio: "Full biography coming soon. This section will highlight the detailed background and technical journey of this team member.",
    contributions: ["Research Documents", "Computer Vision"],
    portfolio: "#",
    linkedin: "#",
    github: "#"
  },
  {
    id: "tanishq",
    name: "Tanishq Maurya",
    role: "Lead Full-Stack & Firmware Architect",
    image: "https://ik.imagekit.io/CMshree/Gemini_Generated_Image_p7yccxp7yccxp7yc%20(1).png?updatedAt=1782043489674",
    shortBio: "Student at Dr. BR Ambedkar CM Shri sec 23 rohini.",
    fullBio: "Full biography coming soon. This section will highlight the detailed background and technical journey of this team member.",
    contributions: ["Software Design", "Firmware Design"],
    portfolio: "#",
    linkedin: "#",
    github: "#"
  },
  {
    id: "ishant",
    name: "Ishant Dhir",
    role: "Hardware Tech & Automation",
    image: "https://ik.imagekit.io/CMshree/Gemini_Generated_Image_nsrtndnsrtndnsrt%20(1).png?updatedAt=1782043411082",
    shortBio: "Bio coming soon...",
    fullBio: "Full biography coming soon. This section will highlight the detailed background and technical journey of this team member.",
    contributions: ["Quality assurance", "Performance tuning"],
    portfolio: "#",
    linkedin: "#",
    github: "#"
  }
];

const expertiseList = [
  { icon: <Search className="w-5 h-5 text-[#F4C430]" />, label: "Research" },
  { icon: <Box className="w-5 h-5 text-[#F4C430]" />, label: "CAD Design" },
  { icon: <Code className="w-5 h-5 text-[#F4C430]" />, label: "Programming" },
  { icon: <Cpu className="w-5 h-5 text-[#F4C430]" />, label: "Electronics" },
  { icon: <Settings className="w-5 h-5 text-[#F4C430]" />, label: "Assembly" },
  { icon: <CheckCircle className="w-5 h-5 text-[#F4C430]" />, label: "Testing" },
  { icon: <FileText className="w-5 h-5 text-[#F4C430]" />, label: "Documentation" },
  { icon: <Lightbulb className="w-5 h-5 text-[#F4C430]" />, label: "Innovation" }
];

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<typeof teamData[0] | null>(null);

  // Helper to prevent scrolling when modal is open
  if (typeof document !== "undefined") {
    document.body.style.overflow = selectedMember ? "hidden" : "unset";
  }

  return (
    <section id="team" className="py-24 max-md:py-16 bg-[#0B0D14] text-white relative">
      <div className="container mx-auto px-6 max-md:px-4 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-20 h-20 mx-auto shadow-sm flex items-center justify-center rounded-sm mb-6 overflow-hidden bg-white/5 border border-white/10"
          >
            <img src="/logo.jpeg" alt="Team Ramanujan Logo" className="w-full h-full object-cover" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 uppercase tracking-tight"
          >
            The Minds Behind The Machine
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl max-md:text-base text-[#F4C430] font-mono tracking-widest uppercase mb-8 max-md:px-4"
          >
            Five students. One vision. Eighteen days of innovation.
          </motion.h3>
          <div className="w-24 h-1 bg-[#F4C430] mx-auto mb-8"></div>
        </div>

        {/* Full-width team photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative w-full max-w-6xl mx-auto mb-12 max-md:mb-8"
        >
          <div className="absolute inset-0 bg-[#F4C430] translate-x-4 translate-y-4 rounded-xl -z-10 opacity-50 blur-sm"></div>
          <div className="relative w-full aspect-[21/9] bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center overflow-hidden shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/team-photo.png"
              alt="Team Ramanujan working together"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"; // Premium fallback if local doesn't exist
              }}
            />
          </div>
        </motion.div>

        {/* Team Photo Quote */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 font-light italic text-lg max-md:text-base max-w-3xl mx-auto mb-32 max-md:mb-16"
        >
          "Every design, line of code, CAD model, research document, and test result represents the collective effort of Team Ramanujan."
        </motion.p>

        {/* Individual Team Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-md:gap-4 mb-32 max-md:mb-16">
          {teamData.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer bg-white/5 backdrop-blur-md border border-white/10 hover:border-[#F4C430]/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_10px_30px_rgba(244,196,48,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Photo Area */}
              <div className="p-4 pb-0">
                <div className="aspect-square w-full bg-[#1A1A1A] relative overflow-hidden rounded-xl border border-[#333] shadow-[inset_0_0_20px_rgba(0,0,0,0.8)] group-hover:border-[#F4C430]/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10 pointer-events-none"></div>

                  {/* Glowing Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[#F4C430]/0 z-20 m-2 transition-all duration-500 group-hover:border-[#F4C430]/60 pointer-events-none"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#F4C430]/0 z-20 m-2 transition-all duration-500 group-hover:border-[#F4C430]/60 pointer-events-none"></div>

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${member.name}&backgroundColor=F4C430&textColor=000000`;
                    }}
                  />
                  <div className="absolute bottom-3 left-3 right-3 z-20 pointer-events-none">
                    <h3 className="text-xl font-bold text-white mb-0.5 group-hover:text-[#F4C430] transition-colors drop-shadow-lg">{member.name}</h3>
                    <p className="text-[#F4C430] text-[10px] font-mono uppercase tracking-widest leading-tight">{member.role}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <p className="text-gray-400 text-sm font-light mb-4">{member.shortBio}</p>
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-mono">Contributions</p>
                    <ul className="text-sm text-gray-300 space-y-1">
                      {member.contributions.slice(0, 2).map((c, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#F4C430] mt-1 text-xs">▹</span>
                          <span className="truncate">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Buttons overlay on hover */}
                <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-[#F4C430] opacity-0 group-hover:opacity-100 transition-opacity">View Profile →</span>
                  <div className="flex gap-3 text-gray-400">
                    <a href={member.portfolio} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {member.linkedin !== "#" && (
                      <a href={member.linkedin} onClick={(e) => e.stopPropagation()} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Team Contribution Visual */}
        <div className="max-w-5xl mx-auto mb-32 max-md:mb-16 bg-white/5 border border-white/10 rounded-3xl p-10 max-md:p-6 md:p-16 backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4C430] opacity-5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="text-center mb-12">
            <h3 className="text-3xl font-black uppercase tracking-tight mb-2">Our Combined Expertise</h3>
            <p className="text-gray-400 font-light">The core disciplines required to build Aura.</p>
          </div>

          <div className="grid grid-cols-2 max-md:grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 relative z-10">
            {expertiseList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-black/40 border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-[#F4C430]/30 hover:bg-black/60 transition-all duration-300 group"
              >
                <div className="bg-white/5 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="font-mono text-sm uppercase tracking-wider text-gray-300 group-hover:text-white transition-colors">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="w-12 h-12 border border-[#F4C430] rounded-full flex items-center justify-center mx-auto mb-8 text-[#F4C430]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 className="text-3xl md:text-5xl font-light italic leading-relaxed text-gray-300">
            "Great projects are rarely built by individuals.<br />
            <span className="text-white font-medium mt-4 block not-italic uppercase tracking-tight text-2xl md:text-4xl">They are built by teams willing to learn, collaborate, and solve problems together."</span>
          </h3>
        </motion.div>

      </div>

      {/* Team Member Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            ></motion.div>

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-5xl bg-[#111] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10"
              style={{ maxHeight: '90vh' }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-6 right-6 z-20 p-2 bg-black/50 hover:bg-[#F4C430] text-white hover:text-black rounded-full transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Photo Column */}
              <div className="md:w-2/5 h-64 md:h-auto relative bg-[#1A1A1A]">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${selectedMember.name}&backgroundColor=F4C430&textColor=000000`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#111]"></div>
              </div>

              {/* Right Content Column */}
              <div className="md:w-3/5 p-8 max-md:p-6 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <h2 className="text-4xl max-md:text-3xl font-black text-white mb-2">{selectedMember.name}</h2>
                  <div className="inline-block px-4 py-1 bg-[#F4C430]/10 border border-[#F4C430]/30 text-[#F4C430] rounded-full text-sm font-mono tracking-wider uppercase">
                    {selectedMember.role}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-gray-500 font-mono mb-3">Biography</h4>
                    <p className="text-gray-300 font-light leading-relaxed">
                      {selectedMember.fullBio}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm uppercase tracking-widest text-gray-500 font-mono mb-3">Key Contributions</h4>
                    <ul className="space-y-3">
                      {selectedMember.contributions.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 bg-white/5 border border-white/5 p-4 rounded-xl">
                          <CheckCircle className="w-5 h-5 text-[#F4C430] shrink-0 mt-0.5" />
                          <span className="text-gray-200">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links Row */}
                  <div className="pt-8 border-t border-white/10 flex flex-wrap gap-4">
                    {selectedMember.portfolio !== "#" && (
                      <a href={selectedMember.portfolio} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-[#F4C430] text-black font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-white transition-colors">
                        <ExternalLink className="w-4 h-4" /> Portfolio
                      </a>
                    )}
                    {selectedMember.linkedin !== "#" && (
                      <a href={selectedMember.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5">
                        <LinkedinIcon className="w-4 h-4" /> LinkedIn
                      </a>
                    )}
                    {selectedMember.github !== "#" && (
                      <a href={selectedMember.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-bold uppercase tracking-wider text-sm rounded-lg hover:bg-white/20 transition-colors border border-white/5">
                        <GithubIcon className="w-4 h-4" /> GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
