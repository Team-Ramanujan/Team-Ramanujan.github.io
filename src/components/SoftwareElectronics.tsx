"use client";

import { motion } from "framer-motion";

const codeSnippet = `
#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver();

void setup() {
  Serial.begin(115200);
  pwm.begin();
  pwm.setOscillatorFrequency(27000000);
  pwm.setPWMFreq(50);  // Analog servos run at ~50 Hz
}

void loop() {
  // Parse target angles via WiFi / Serial from Python Aura Server
  if (Serial.available()) {
    String data = Serial.readStringUntil('\\n');
    parseAndMove(data);
  }
}
`.trim();

export default function SoftwareElectronics() {
  return (
    <section id="software" className="py-24 bg-[#050505] border-b border-border overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm font-semibold tracking-widest text-primary uppercase mb-3">Software & Electronics</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              The brains behind the brawn.
            </h3>
            <p className="text-muted text-lg leading-relaxed mb-8">
              We separated the compute. A Python server running OpenCV and MediaPipe handles the heavy kinematics and hand-tracking, while an ESP32 microcontroller executes real-time PWM signals to the 16-channel servo driver.
            </p>

            <div className="space-y-4">
              {['ESP32 Microcontroller', 'PCA9685 16-Channel PWM Driver', 'Python / OpenCV Computer Vision', 'WebSocket & Serial Comms'].map((item, i) => (
                <div key={i} className="flex items-center text-white">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Code Block */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="rounded-xl overflow-hidden border border-border bg-[#0a0a0a] shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-border bg-[#111]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <span className="ml-4 text-xs font-mono text-muted">main.ino</span>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed text-[#d4d4d4]">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
