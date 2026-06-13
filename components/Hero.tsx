"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import AnimatedBackground from "./AnimatedBackground";
import TypewriterText from "./TypewriterText";

const rotatingTexts = [
  "Building modern web experiences with cinematic design and clean, scalable code.",
  "Crafting pixel-perfect interfaces with attention to detail and performance.",
  "Transforming ideas into powerful digital solutions that make an impact.",
];

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-8 overflow-hidden pt-24">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-left"
          >
            {/* Status Line */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <motion.div
                className="w-2 h-2 bg-accent rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-sm text-gray-400 font-medium">
                Abdul Hadi - Available for Work
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-2">
                Full Stack{" "}
                <span className="relative inline-block">
                  <span className="gradient-text"> Developer</span>
                  <motion.span
                    className="absolute -inset-1 bg-accent/20 blur-xl -z-10"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </span>
              </h1>
            </motion.div>

            {/* Role Text */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Full Stack Developer */}
            </motion.h2>

            {/* Subtext with Typewriter Effect */}
            <motion.p
              className="text-lg text-gray-400 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <TypewriterText texts={rotatingTexts} />
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 flex-wrap pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-accent text-black font-semibold rounded-lg transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">View Projects</span>
                <motion.div
                  className="absolute inset-0 bg-accent-light"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.a
                href="#contact"
                className="px-8 py-4 glass-effect border border-accent/30 rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300 relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Contact Me</span>
                <motion.div
                  className="absolute inset-0 bg-accent/5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:flex justify-center items-center"
          >
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Glow Effect Behind Image */}
              <motion.div
                className="absolute inset-0 bg-accent/20 rounded-full blur-3xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Modern Coding Illustration */}
              <div className="relative w-[500px] h-[500px] rounded-2xl overflow-hidden">
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Background */}
                  <rect width="500" height="500" fill="url(#bgGradient)" />

                  {/* Code Editor Window */}
                  <g opacity="0.9">
                    <rect
                      x="50"
                      y="80"
                      width="400"
                      height="300"
                      rx="12"
                      fill="rgba(10, 10, 10, 0.8)"
                      stroke="#A3FF12"
                      strokeWidth="2"
                    />
                    {/* Window Header */}
                    <rect x="50" y="80" width="400" height="40" rx="12" fill="rgba(163, 255, 18, 0.1)" />
                    <circle cx="75" cy="100" r="6" fill="#FF5F57" />
                    <circle cx="95" cy="100" r="6" fill="#FFBD2E" />
                    <circle cx="115" cy="100" r="6" fill="#28CA42" />

                    {/* Code Lines */}
                    <motion.rect
                      x="70"
                      y="140"
                      width="180"
                      height="8"
                      rx="4"
                      fill="#A3FF12"
                      initial={{ width: 0 }}
                      animate={{ width: 180 }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                    <motion.rect
                      x="90"
                      y="160"
                      width="240"
                      height="8"
                      rx="4"
                      fill="rgba(163, 255, 18, 0.6)"
                      initial={{ width: 0 }}
                      animate={{ width: 240 }}
                      transition={{ duration: 1, delay: 0.7 }}
                    />
                    <motion.rect
                      x="90"
                      y="180"
                      width="200"
                      height="8"
                      rx="4"
                      fill="rgba(163, 255, 18, 0.4)"
                      initial={{ width: 0 }}
                      animate={{ width: 200 }}
                      transition={{ duration: 1, delay: 0.9 }}
                    />
                    <motion.rect
                      x="70"
                      y="200"
                      width="150"
                      height="8"
                      rx="4"
                      fill="#A3FF12"
                      initial={{ width: 0 }}
                      animate={{ width: 150 }}
                      transition={{ duration: 1, delay: 1.1 }}
                    />
                    <motion.rect
                      x="90"
                      y="220"
                      width="280"
                      height="8"
                      rx="4"
                      fill="rgba(163, 255, 18, 0.5)"
                      initial={{ width: 0 }}
                      animate={{ width: 280 }}
                      transition={{ duration: 1, delay: 1.3 }}
                    />
                    <motion.rect
                      x="90"
                      y="240"
                      width="220"
                      height="8"
                      rx="4"
                      fill="rgba(163, 255, 18, 0.7)"
                      initial={{ width: 0 }}
                      animate={{ width: 220 }}
                      transition={{ duration: 1, delay: 1.5 }}
                    />
                    <motion.rect
                      x="70"
                      y="260"
                      width="100"
                      height="8"
                      rx="4"
                      fill="#A3FF12"
                      initial={{ width: 0 }}
                      animate={{ width: 100 }}
                      transition={{ duration: 1, delay: 1.7 }}
                    />

                    {/* Cursor Blink */}
                    <motion.rect
                      x="180"
                      y="260"
                      width="3"
                      height="10"
                      fill="#A3FF12"
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </g>

                  {/* Terminal Window */}
                  <g opacity="0.85">
                    <rect
                      x="80"
                      y="320"
                      width="340"
                      height="140"
                      rx="10"
                      fill="rgba(10, 10, 10, 0.9)"
                      stroke="#A3FF12"
                      strokeWidth="1.5"
                    />
                    <rect x="80" y="320" width="340" height="30" rx="10" fill="rgba(163, 255, 18, 0.08)" />
                    <text x="95" y="340" fill="#A3FF12" fontSize="12" fontFamily="monospace">
                      Terminal
                    </text>

                    {/* Terminal Lines */}
                    <text x="95" y="370" fill="#A3FF12" fontSize="11" fontFamily="monospace" opacity="0.8">
                      $ npm run dev
                    </text>
                    <text x="95" y="395" fill="rgba(163, 255, 18, 0.6)" fontSize="10" fontFamily="monospace">
                      ✓ Ready in 2.1s
                    </text>
                    <text x="95" y="415" fill="rgba(163, 255, 18, 0.5)" fontSize="10" fontFamily="monospace">
                      ○ Local: http://localhost:3000
                    </text>
                    <motion.text
                      x="95"
                      y="440"
                      fill="#A3FF12"
                      fontSize="10"
                      fontFamily="monospace"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ▋
                    </motion.text>
                  </g>

                  {/* Floating Code Brackets */}
                  <motion.g
                    animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 0.2 }}
                  >
                    <text x="420" y="120" fill="#A3FF12" fontSize="40" fontFamily="monospace" opacity="0.3">
                      {"</>"}
                    </text>
                  </motion.g>

                  <motion.g
                    animate={{ y: [0, 20, 0], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  >
                    <text x="20" y="280" fill="#A3FF12" fontSize="35" fontFamily="monospace" opacity="0.25">
                      {"{}"}
                    </text>
                  </motion.g>

                  {/* Geometric Accents */}
                  <motion.circle
                    cx="440"
                    cy="340"
                    r="8"
                    stroke="#A3FF12"
                    strokeWidth="2"
                    fill="none"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <motion.rect
                    x="30"
                    y="150"
                    width="12"
                    height="12"
                    stroke="#A3FF12"
                    strokeWidth="2"
                    fill="none"
                    animate={{ rotate: [0, 180, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Gradient Definitions */}
                  <defs>
                    <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(163, 255, 18, 0.05)" />
                      <stop offset="100%" stopColor="rgba(0, 0, 0, 0.95)" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* You can replace the SVG above with an actual image: */}
                {/* Uncomment below and add your image to /public/hero-coding.png */}
                {/* <Image
                  src="/hero-coding.png"
                  alt="Abdul Hadi - Developer"
                  fill
                  className="object-cover"
                  priority
                /> */}
              </div>

              {/* Floating Accent Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-accent/10 rounded-lg blur-xl"
                animate={{
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
        }}
      >
        <ArrowDown className="w-6 h-6 text-accent" />
      </motion.div>
    </section>
  );
}
