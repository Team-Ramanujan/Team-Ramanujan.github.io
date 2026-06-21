"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type SoundContextType = {
  isMuted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playServo: () => void;
  playTransition: () => void;
  playActivation: () => void;
};

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true); // Muted by default
  const [hasStarted, setHasStarted] = useState(false);

  // Audio Instances
  const [bgMusic, setBgMusic] = useState<HTMLAudioElement | null>(null);
  const [startupHum, setStartupHum] = useState<HTMLAudioElement | null>(null);
  const [servoMovement, setServoMovement] = useState<HTMLAudioElement | null>(null);
  const [activation, setActivation] = useState<HTMLAudioElement | null>(null);
  const [click, setClick] = useState<HTMLAudioElement | null>(null);
  const [transition, setTransition] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio objects
    const bg = new Audio("/sounds/bg-ambient.mp3");
    bg.loop = true;
    bg.volume = 0.3; // Soft ambient background music
    setBgMusic(bg);

    const hum = new Audio("/sounds/startup-hum.mp3");
    hum.volume = 0.5;
    setStartupHum(hum);

    const servo = new Audio("/sounds/servo-movement.mp3");
    servo.volume = 0.4;
    setServoMovement(servo);

    const act = new Audio("/sounds/futuristic-activation.mp3");
    act.volume = 0.4;
    setActivation(act);

    const clk = new Audio("/sounds/gentle-click.mp3");
    clk.volume = 0.3;
    setClick(clk);

    const trans = new Audio("/sounds/soft-transition.mp3");
    trans.volume = 0.4;
    setTransition(trans);
  }, []);

  const toggleMute = () => {
    setIsMuted(prev => {
      const newMuted = !prev;
      
      if (!newMuted) {
        // Sound is turning ON
        if (!hasStarted) {
          // Special Hero Moment: Startup Sequence
          setHasStarted(true);
          
          if (startupHum) {
            startupHum.play().catch(() => {});
            
            // Play servo after hum (simulate 1.5s delay)
            setTimeout(() => {
              if (servoMovement) {
                servoMovement.currentTime = 0;
                servoMovement.play().catch(() => {});
              }
            }, 1500);

            // Fade in ambient music after sequence
            setTimeout(() => {
              if (bgMusic) bgMusic.play().catch(() => {});
            }, 3000);
          } else {
            // Fallback if sounds aren't loaded
            if (bgMusic) bgMusic.play().catch(() => {});
          }
        } else {
          // Sound was turned off and now turned back on (skip sequence)
          if (bgMusic) bgMusic.play().catch(() => {});
        }
      } else {
        // Sound is turning OFF
        if (bgMusic) bgMusic.pause();
        if (startupHum) startupHum.pause();
        if (servoMovement) servoMovement.pause();
        if (activation) activation.pause();
        if (click) click.pause();
        if (transition) transition.pause();
      }
      
      return newMuted;
    });
  };

  const playClick = () => {
    if (!isMuted && click) {
      click.currentTime = 0;
      click.play().catch(() => {});
    }
  };

  const playServo = () => {
    if (!isMuted && servoMovement) {
      servoMovement.currentTime = 0;
      servoMovement.play().catch(() => {});
    }
  };

  const playActivation = () => {
    if (!isMuted && activation) {
      activation.currentTime = 0;
      activation.play().catch(() => {});
    }
  };

  const playTransition = () => {
    if (!isMuted && transition) {
      transition.currentTime = 0;
      transition.play().catch(() => {});
    }
  };

  // Ensure music stops when muted
  useEffect(() => {
    if (isMuted && bgMusic) {
      bgMusic.pause();
    }
  }, [isMuted, bgMusic]);

  return (
    <SoundContext.Provider value={{ isMuted, toggleMute, playClick, playServo, playTransition, playActivation }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSoundContext = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error("useSoundContext must be used within a SoundProvider");
  }
  return context;
};
