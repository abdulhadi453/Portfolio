"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Heart, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and elegant solutions",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "Rapid prototyping and efficient project execution",
  },
  {
    icon: Heart,
    title: "User-Focused",
    description: "Designing experiences that users love",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimized for speed and responsiveness",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate full-stack developer with a focus on creating modern,
            high-performance web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-2xl p-6 border border-white/10 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 glass-effect rounded-2xl p-8 border border-white/10"
        >
          <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
            With a strong foundation in both frontend and backend technologies, I
            specialize in building full-stack applications using modern frameworks
            like React, Next.js, Node.js, and more. I'm passionate about clean code,
            user experience, and staying up-to-date with the latest web technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
