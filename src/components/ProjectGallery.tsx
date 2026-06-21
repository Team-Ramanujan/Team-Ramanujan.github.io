"use client";

import { motion } from "framer-motion";
import { useSoundContext } from "./SoundProvider";

const images = [
  { id: 1, src: "/assets/project-1.jpg", title: "Project Overview 1", aspect: "aspect-video" },
  { id: 2, src: "/assets/project-2.jpg", title: "Project Overview 2", aspect: "aspect-[4/3]" },
  { id: 3, src: "/assets/project-3.jpg", title: "Project Overview 3", aspect: "aspect-square" },
  { id: 4, src: "/assets/project-4.jpg", title: "Project Overview 4", aspect: "aspect-[3/4]" },
];

export default function ProjectGallery() {
  const { playTransition } = useSoundContext();

  return (
    <motion.section 
      id="gallery" 
      onViewportEnter={() => playTransition()}
      className="py-24 max-md:py-16 bg-white relative border-t border-gray-200"
    >
      <div className="container mx-auto px-6 max-md:px-4 max-w-7xl">
        <div className="mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl max-md:text-3xl font-black mb-4 text-[#1A1A1A]"
          >
            PROJECT GALLERY
          </motion.h2>
          <div className="w-24 h-2 bg-[#F4C430] mb-8"></div>
          <p className="text-gray-500 max-w-2xl text-lg">Visual documentation of our process, from digital designs to physical reality.</p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 max-md:gap-4 space-y-6 max-md:space-y-4">
          {images.map((img, idx) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1 }}
              className={`relative overflow-hidden group bg-gray-100 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 w-full ${img.aspect} flex items-center justify-center`}
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              
              {/* Overlay on hover to mimic a real premium gallery effect */}
              <div className="absolute inset-0 bg-[#F4C430]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
