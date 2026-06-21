"use client";

import { motion } from "framer-motion";

export default function CadShowcase() {
  const images = [
    { src: "/assets/cad_1.png", title: "Base Assembly", span: "col-span-1 md:col-span-2 row-span-2" },
    { src: "/assets/cad_2.png", title: "Shoulder Joint", span: "col-span-1" },
    { src: "/assets/cad_3.png", title: "Elbow Actuator", span: "col-span-1" },
    { src: "/assets/cad_4.png", title: "Gripper Mechanism", span: "col-span-1 md:col-span-2" },
  ];

  return (
    <section id="cadshowcase" className="py-24 bg-black border-b border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">CAD & Design</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Engineered down to the millimeter.
          </h3>
          <p className="text-muted max-w-2xl mx-auto text-lg">
            Every component was drafted in SolidWorks, simulated for stress and torque, and optimized for 3D printing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group bg-card border border-border ${img.span}`}
            >
              {/* Fallback gradient if image fails/isn't provided */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#222] z-0" />
              
              <img 
                src={img.src} 
                alt={img.title}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop`;
                }}
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 z-30 pointer-events-none">
                <h4 className="text-xl font-bold text-white">{img.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
