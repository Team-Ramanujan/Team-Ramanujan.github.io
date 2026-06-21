"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useSoundContext } from "./SoundProvider";
import { Truck, Factory, Cpu, Zap, Activity, MonitorSmartphone, Wifi } from "lucide-react";

export default function PrototypeToFactory() {
  const containerRef = useRef(null);
  const { playServo } = useSoundContext();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideoInView = useInView(videoContainerRef, { margin: "-20% 0px" });

  useEffect(() => {
    if (!videoRef.current) return;
    if (isVideoInView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isVideoInView]);

  const agvX = useTransform(scrollYProgress, [0.3, 0.7], ["10%", "85%"]);
  const armOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);

  const steps = [
    {
      num: "01",
      title: "Task Assigned",
      text: "The AGV receives a task from the factory management system. Example: 'Transport Component A from Storage Zone to Assembly Line.'"
    },
    {
      num: "02",
      title: "Navigation",
      text: "The AGV autonomously navigates through the facility using sensors and mapping technology. It identifies the safest and most efficient route."
    },
    {
      num: "03",
      title: "Target Identification",
      text: "Upon reaching the storage area, the robotic arm activates. Using computer vision and object recognition, it identifies the required item."
    },
    {
      num: "04",
      title: "Precision Pick",
      text: "The robotic arm picks the object with precision. Aura software controls the movement, grip force, positioning, and safety checks."
    },
    {
      num: "05",
      title: "Autonomous Transport",
      text: "The AGV transports the item to the destination. Real-time monitoring continuously tracks the vehicle and payload."
    },
    {
      num: "06",
      title: "Final Placement",
      text: "The robotic arm places the component at the designated workstation. The task is completed automatically without human intervention."
    }
  ];

  const features = [
    { icon: <MonitorSmartphone className="w-6 h-6 text-[#F4C430]" />, title: "Machine Vision", desc: "Identify and classify objects automatically." },
    { icon: <Cpu className="w-6 h-6 text-[#F4C430]" />, title: "AI Decision Making", desc: "Optimize routes and task assignments." },
    { icon: <Activity className="w-6 h-6 text-[#F4C430]" />, title: "Predictive Maintenance", desc: "Detect wear before failures occur." },
    { icon: <Factory className="w-6 h-6 text-[#F4C430]" />, title: "Digital Twin Technology", desc: "Monitor and simulate robot behavior virtually." },
    { icon: <Wifi className="w-6 h-6 text-[#F4C430]" />, title: "Industrial IoT Connectivity", desc: "Connect with factory systems in real time." }
  ];

  return (
    <motion.section 
      ref={containerRef} 
      id="future" 
      onViewportEnter={() => playServo()}
      className="py-32 max-md:py-20 bg-[#0a0a0a] text-white relative overflow-hidden border-t border-[#333]"
    >
      <div className="container mx-auto px-6 max-md:px-4 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24 max-md:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 border border-[#F4C430] text-[#F4C430] font-bold tracking-widest uppercase text-xs rounded-full mb-6"
          >
            Future Horizon
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl max-md:text-3xl font-black mb-8 tracking-tight text-white uppercase"
          >
            From Prototype To Factory
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-3xl max-md:text-lg text-[#F4C430] font-light max-w-4xl mx-auto leading-relaxed"
          >
            What if our robotic arm became part of a fully autonomous industrial ecosystem?
          </motion.p>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center space-y-6 text-gray-400 text-lg max-md:text-base md:text-xl font-light mb-32 max-md:mb-16">
          <p>Today, our robotic arm exists as a prototype.</p>
          <p>But innovation begins by imagining what comes next.</p>
          <p>What if this robotic arm was mounted on an Autonomous Guided Vehicle (AGV)?</p>
          <p className="text-white font-medium text-2xl max-md:text-xl py-4 border-y border-[#333] my-8">What if it could move, detect, decide, pick, transport, and place objects without human intervention?</p>
          <p className="italic">This section explores that future vision.</p>
        </div>

        {/* Cinematic Diagram Scroll Animation */}
        <div className="mb-40 relative py-10 hidden md:block">
          <div className="relative w-full h-[400px] bg-gradient-to-b from-[#111] to-[#000] rounded-3xl border border-[#333] overflow-hidden flex items-center shadow-2xl">
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#F4C430 1px, transparent 1px), linear-gradient(90deg, #F4C430 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
            
            {/* Factory Environment Background Elements */}
            <div className="absolute left-10 top-1/2 -translate-y-1/2 text-gray-600 text-center z-0">
              <Factory className="w-32 h-32 mx-auto mb-4 opacity-50" />
              <span className="font-mono text-sm uppercase tracking-widest text-white/50 bg-black/50 px-4 py-2 rounded-lg border border-white/10">Storage Zone</span>
            </div>
            
            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-gray-600 text-center z-0">
              <Factory className="w-32 h-32 mx-auto mb-4 opacity-50" />
              <span className="font-mono text-sm uppercase tracking-widest text-white/50 bg-black/50 px-4 py-2 rounded-lg border border-white/10">Assembly Line</span>
            </div>
            
            {/* Track Line */}
            <div className="absolute left-40 right-40 top-[60%] h-2 bg-gradient-to-r from-transparent via-[#F4C430] to-transparent -translate-y-1/2 rounded-full opacity-30 shadow-[0_0_15px_#F4C430]"></div>

            {/* Moving AGV */}
            <motion.div 
              style={{ left: agvX }} 
              className="absolute top-[60%] -translate-y-1/2 z-20 flex flex-col items-center transform -translate-x-1/2"
            >
              <div className="relative bg-[#1A1A1A] border-4 border-[#F4C430] p-6 rounded-2xl shadow-[0_0_40px_rgba(244,196,48,0.4)]">
                {/* Arm on AGV appearing mid-way */}
                <motion.div style={{ opacity: armOpacity }} className="absolute -top-16 left-1/2 -translate-x-1/2">
                  <div className="w-4 h-20 bg-gradient-to-t from-gray-700 to-gray-400 origin-bottom transform rotate-[30deg] border-2 border-black rounded-t-lg shadow-xl relative">
                    <div className="w-6 h-6 bg-[#F4C430] absolute -top-3 -left-1 rounded shadow-sm border border-yellow-300"></div>
                  </div>
                </motion.div>
                
                <Truck className="w-16 h-16 text-white relative z-10" />
              </div>
              <span className="mt-6 font-bold tracking-widest text-[#1A1A1A] uppercase text-sm font-mono bg-[#F4C430] px-4 py-1.5 rounded-md shadow-lg">Aura AGV Active</span>
            </motion.div>
          </div>
          <p className="text-center mt-6 text-gray-500 uppercase tracking-widest text-xs font-mono">Scroll to see the journey</p>
        </div>

        {/* Video Showcase */}
        <div className="mb-40 max-md:mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-white">Video Showcase</h3>
            <p className="text-[#F4C430] mt-3 font-mono text-lg">A Day In The Life Of An Autonomous Industrial Robot</p>
          </div>
          <div 
            ref={videoContainerRef} 
            className="w-full max-w-5xl mx-auto relative bg-[#111] p-2 md:p-4 max-md:p-2 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-[#333] group"
          >
            {/* Top Status Bar / Bezel */}
            <div className="flex justify-between items-center px-4 py-3 mb-2 bg-[#0a0a0a] rounded-lg border border-[#222]">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
                <span className="text-red-500 font-mono text-xs font-bold tracking-widest uppercase">SIMULATION ACTIVE</span>
              </div>
              <div className="text-[#F4C430] font-mono text-xs tracking-widest uppercase hidden sm:block opacity-80">
                AURA_AGV_SYS_OVERRIDE_V2
              </div>
              <div className="flex gap-1.5">
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-gray-600 rounded-full"></div>
              </div>
            </div>

            {/* Video Container */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-[#222] shadow-inner bg-black ring-1 ring-white/5">
              <video 
                ref={videoRef}
                className="w-full h-full object-cover relative z-10"
                controls loop playsInline
              >
                <source src="https://ik.imagekit.io/CMshree/WhatsApp%20Video%202026-06-21%20at%204.53.33%20PM%20(1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#F4C430]/30 z-20 m-4 pointer-events-none transition-all duration-500 group-hover:border-[#F4C430] group-hover:w-12 group-hover:h-12 group-hover:shadow-[0_0_15px_rgba(244,196,48,0.5)]"></div>
              
              <div className="absolute inset-0 bg-[#F4C430]/5 flex flex-col items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity z-20">
                <Zap className="w-20 h-20 text-[#F4C430] opacity-30 mb-4 drop-shadow-[0_0_15px_rgba(244,196,48,0.8)]" />
              </div>
            </div>
          </div>
        </div>

        {/* How It Works Steps */}
        <div className="mb-40 max-md:mb-20">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">How It Works</h3>
            <div className="w-24 h-2 bg-[#F4C430] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:gap-4">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#111] p-10 max-md:p-6 rounded-3xl border border-[#333] hover:border-[#F4C430]/50 transition-colors relative group overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 text-[150px] font-black text-white/[0.02] group-hover:text-[#F4C430]/[0.05] transition-colors pointer-events-none leading-none">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-[#F4C430] mb-4 tracking-widest font-mono">Step {i + 1}</h4>
                  <h5 className="text-2xl font-bold text-white mb-6 leading-tight">{step.title}</h5>
                  <p className="text-gray-400 font-light leading-relaxed text-lg">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Future Features */}
        <div className="mb-40 max-md:mb-20">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white uppercase tracking-tight">Future Features</h3>
            <div className="w-24 h-2 bg-[#F4C430] mx-auto"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-6 bg-[#111] border border-[#333] p-8 rounded-2xl w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] hover:bg-[#151515] transition-colors"
              >
                <div className="p-4 bg-black rounded-xl border border-[#333] shadow-inner">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feat.title}</h4>
                  <p className="text-base text-gray-500 font-light leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement & Final Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="max-w-5xl mx-auto bg-black border border-[#333] p-12 max-md:p-6 md:p-24 rounded-[3rem] shadow-[0_0_100px_rgba(244,196,48,0.05)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F4C430] opacity-[0.03] rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="relative z-10">
              <h4 className="text-[#F4C430] font-mono uppercase tracking-widest text-sm mb-8">Vision Statement</h4>
              <p className="text-2xl md:text-4xl font-light leading-relaxed text-gray-300 mb-20 italic">
                "We don't see this robotic arm as a standalone machine. We see it as one component of a future intelligent automation ecosystem where robots can move, think, communicate, and collaborate."
              </p>

              <div className="w-full max-w-md mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#F4C430]/30 to-transparent mb-20"></div>

              <h3 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tight leading-tight">
                Today's prototype.<br/>
                <span className="text-[#F4C430] mt-4 block">Tomorrow's autonomous workforce.</span>
              </h3>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
