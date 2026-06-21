"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectOverview from "@/components/ProjectOverview";
import JourneyTimeline from "@/components/JourneyTimeline";
import ResearchGrid from "@/components/ResearchGrid";
import ProjectGallery from "@/components/ProjectGallery";
import AuraSection from "@/components/AuraSection";
import EngineeringProcess from "@/components/EngineeringProcess";
import FinalPrototype from "@/components/FinalPrototype";
import TeamSection from "@/components/TeamSection";
import MentorSection from "@/components/MentorSection";
import BeyondTheRobot from "@/components/BeyondTheRobot";
import PrototypeToFactory from "@/components/PrototypeToFactory";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import RamanujanLegacy from "@/components/RamanujanLegacy";
import ProjectTimelapse from "@/components/ProjectTimelapse";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className="min-h-screen bg-transparent text-gray-900 font-[family-name:var(--font-inter)]">
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <div className="fixed inset-0 pointer-events-none z-[-2] bg-blueprint opacity-50 mix-blend-multiply"></div>
        <Navbar />
        <RamanujanLegacy />
        <HeroSection />
        <ProjectOverview />
        <ProjectTimelapse />
        <JourneyTimeline />
        <ResearchGrid />
        <ProjectGallery />
        <AuraSection />
        <EngineeringProcess />
        <FinalPrototype />
        <MentorSection />
        <TeamSection />
        <BeyondTheRobot />
        <PrototypeToFactory />
        <Footer />
      </div>
    </main>
  );
}
