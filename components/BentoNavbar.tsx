"use client";

import { motion } from "framer-motion";
import { Home, User, FolderGit2, GraduationCap, Mail, Code2 } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: FolderGit2, label: "Projects", href: "#projects" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function BentoNavbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const scrollToSection = (href: string, label: string) => {
    setActiveItem(label);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex gap-3 p-3 glass-effect rounded-2xl border border-white/10"
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeItem === item.label;

          return (
            <motion.button
              key={item.label}
              onClick={() => scrollToSection(item.href, item.label)}
              className={`relative group px-4 py-3 rounded-xl transition-all duration-300 ${
                isActive
                  ? "bg-accent/20 border border-accent/50"
                  : "bg-white/5 border border-transparent hover:border-accent/30"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center gap-1">
                <Icon
                  className={`w-5 h-5 transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-gray-400 group-hover:text-accent"
                  }`}
                />
                <span
                  className={`text-xs font-medium transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-gray-400 group-hover:text-accent"
                  }`}
                >
                  {item.label}
                </span>
              </div>

              {isActive && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-accent/10"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  style={{ boxShadow: "0 0 20px rgba(163, 255, 18, 0.3)" }}
                />
              )}
            </motion.button>
          );
        })}
      </motion.div>
    </nav>
  );
}
