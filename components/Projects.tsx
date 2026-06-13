"use client";

import { BentoGrid, BentoCard } from "./BentoGrid";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
    link: "#",
    github: "#",
    span: "col-2-row-2" as const,
    featured: true,
  },
  {
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates and team features.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Beautiful weather app with forecasts and location-based data.",
    tech: ["Vue.js", "OpenWeather API"],
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Builder",
    description: "No-code portfolio builder for developers and designers.",
    tech: ["Next.js", "MongoDB", "AWS"],
    link: "#",
    github: "#",
    span: "col-2" as const,
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with end-to-end encryption.",
    tech: ["Node.js", "Socket.io", "React"],
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A selection of my recent work showcasing modern web development
          </p>
        </div>

        <BentoGrid>
          {projects.map((project, index) => (
            <BentoCard key={index} span={project.span}>
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* E-Commerce Platform Featured Image */}
                {project.featured && (
                  <div className="relative mb-6 h-56 overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 via-black to-black border border-accent/20">
                    <svg
                      viewBox="0 0 500 280"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      {/* Background */}
                      <defs>
                        <linearGradient id="luxuryBg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(163, 255, 18, 0.03)" />
                          <stop offset="50%" stopColor="rgba(0, 0, 0, 1)" />
                          <stop offset="100%" stopColor="rgba(163, 255, 18, 0.05)" />
                        </linearGradient>
                        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="rgba(163, 255, 18, 0.15)" />
                          <stop offset="100%" stopColor="rgba(163, 255, 18, 0.05)" />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>

                      <rect width="500" height="280" fill="url(#luxuryBg)" />

                      {/* Main Dashboard Interface */}
                      <g opacity="0.95">
                        {/* Sidebar */}
                        <rect x="20" y="20" width="80" height="240" rx="12" fill="rgba(10, 10, 10, 0.8)" stroke="#A3FF12" strokeWidth="1" />

                        {/* Sidebar Menu Items */}
                        <rect x="30" y="35" width="60" height="8" rx="4" fill="rgba(163, 255, 18, 0.8)" />
                        <rect x="30" y="55" width="60" height="8" rx="4" fill="rgba(163, 255, 18, 0.3)" />
                        <rect x="30" y="75" width="60" height="8" rx="4" fill="rgba(163, 255, 18, 0.3)" />
                        <rect x="30" y="95" width="60" height="8" rx="4" fill="rgba(163, 255, 18, 0.3)" />

                        {/* Main Content Area */}
                        <rect x="115" y="20" width="365" height="240" rx="12" fill="rgba(10, 10, 10, 0.7)" stroke="#A3FF12" strokeWidth="1.5" />

                        {/* Header Bar */}
                        <rect x="115" y="20" width="365" height="35" rx="12" fill="rgba(163, 255, 18, 0.08)" />
                        <text x="130" y="42" fill="#A3FF12" fontSize="14" fontWeight="bold">E-Commerce Dashboard</text>

                        {/* Search Bar */}
                        <rect x="320" y="30" width="120" height="18" rx="9" fill="rgba(163, 255, 18, 0.1)" stroke="#A3FF12" strokeWidth="0.5" />
                        <text x="330" y="42" fill="rgba(163, 255, 18, 0.5)" fontSize="9">Search products...</text>

                        {/* Stats Cards Row */}
                        <g>
                          {/* Revenue Card */}
                          <rect x="130" y="70" width="100" height="60" rx="8" fill="url(#cardGradient)" stroke="#A3FF12" strokeWidth="1" filter="url(#glow)" />
                          <text x="140" y="88" fill="rgba(163, 255, 18, 0.6)" fontSize="8">Total Revenue</text>
                          <text x="140" y="110" fill="#A3FF12" fontSize="18" fontWeight="bold">$124.5K</text>
                          <motion.path
                            d="M 145 120 L 155 115 L 165 118 L 175 110 L 185 112 L 195 108 L 205 105 L 215 100"
                            stroke="#A3FF12"
                            strokeWidth="1.5"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                          />

                          {/* Orders Card */}
                          <rect x="245" y="70" width="100" height="60" rx="8" fill="url(#cardGradient)" stroke="#A3FF12" strokeWidth="1" filter="url(#glow)" />
                          <text x="255" y="88" fill="rgba(163, 255, 18, 0.6)" fontSize="8">Total Orders</text>
                          <text x="255" y="110" fill="#A3FF12" fontSize="18" fontWeight="bold">1,842</text>
                          <circle cx="300" cy="115" r="12" stroke="#A3FF12" strokeWidth="2" fill="none" opacity="0.3" />
                          <circle cx="300" cy="115" r="8" fill="#A3FF12" opacity="0.6" />

                          {/* Products Card */}
                          <rect x="360" y="70" width="100" height="60" rx="8" fill="url(#cardGradient)" stroke="#A3FF12" strokeWidth="1" filter="url(#glow)" />
                          <text x="370" y="88" fill="rgba(163, 255, 18, 0.6)" fontSize="8">Products</text>
                          <text x="370" y="110" fill="#A3FF12" fontSize="18" fontWeight="bold">348</text>
                          <rect x="410" y="105" width="16" height="20" rx="2" stroke="#A3FF12" strokeWidth="1.5" fill="none" />
                          <rect x="430" y="110" width="16" height="15" rx="2" stroke="#A3FF12" strokeWidth="1.5" fill="rgba(163, 255, 18, 0.2)" />
                        </g>

                        {/* Product Grid */}
                        <text x="130" y="155" fill="#A3FF12" fontSize="11" fontWeight="bold">Recent Products</text>

                        {/* Product Items */}
                        <g>
                          {/* Product 1 */}
                          <rect x="130" y="170" width="145" height="75" rx="8" fill="rgba(10, 10, 10, 0.6)" stroke="#A3FF12" strokeWidth="0.8" />
                          <rect x="138" y="178" width="50" height="50" rx="6" fill="rgba(163, 255, 18, 0.12)" />
                          <text x="196" y="188" fill="rgba(163, 255, 18, 0.8)" fontSize="9" fontWeight="bold">Premium Watch</text>
                          <text x="196" y="200" fill="rgba(163, 255, 18, 0.5)" fontSize="7">Luxury Edition</text>
                          <text x="196" y="220" fill="#A3FF12" fontSize="11" fontWeight="bold">$499</text>
                          <rect x="196" y="227" width="35" height="12" rx="6" fill="#A3FF12" />
                          <text x="203" y="236" fill="#000" fontSize="7" fontWeight="bold">BUY</text>

                          {/* Product 2 */}
                          <rect x="290" y="170" width="170" height="35" rx="8" fill="rgba(10, 10, 10, 0.6)" stroke="#A3FF12" strokeWidth="0.8" />
                          <rect x="298" y="178" width="24" height="24" rx="4" fill="rgba(163, 255, 18, 0.12)" />
                          <text x="330" y="188" fill="rgba(163, 255, 18, 0.8)" fontSize="8" fontWeight="bold">Designer Bag</text>
                          <text x="330" y="198" fill="rgba(163, 255, 18, 0.5)" fontSize="6">Limited Stock</text>
                          <text x="410" y="193" fill="#A3FF12" fontSize="9" fontWeight="bold">$349</text>

                          {/* Product 3 */}
                          <rect x="290" y="210" width="170" height="35" rx="8" fill="rgba(10, 10, 10, 0.6)" stroke="#A3FF12" strokeWidth="0.8" />
                          <rect x="298" y="218" width="24" height="24" rx="4" fill="rgba(163, 255, 18, 0.12)" />
                          <text x="330" y="228" fill="rgba(163, 255, 18, 0.8)" fontSize="8" fontWeight="bold">Wireless Headphones</text>
                          <text x="330" y="238" fill="rgba(163, 255, 18, 0.5)" fontSize="6">Best Seller</text>
                          <text x="410" y="233" fill="#A3FF12" fontSize="9" fontWeight="bold">$199</text>
                        </g>
                      </g>

                      {/* Floating Elements */}
                      <motion.g
                        animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <circle cx="465" cy="40" r="15" stroke="#A3FF12" strokeWidth="1.5" fill="rgba(163, 255, 18, 0.1)" />
                        <path d="M 460 40 L 470 40 M 465 35 L 465 45" stroke="#A3FF12" strokeWidth="2" strokeLinecap="round" />
                      </motion.g>

                      <motion.rect
                        x="25"
                        y="245"
                        width="15"
                        height="15"
                        stroke="#A3FF12"
                        strokeWidth="1.5"
                        fill="none"
                        animate={{ rotate: [0, 90, 180, 270, 360] }}
                        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                      />
                    </svg>

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}

                <div className="flex flex-wrap gap-3 mb-4 flex-grow items-center">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-sm hover:text-accent transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
