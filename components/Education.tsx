"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Science",
    institution: "University of Karachi",
    period: "2019 - 2023",
    description:
      "Completed a Bachelor of Science degree with a focus on critical thinking, analytical reasoning, and academic research.",
    icon: GraduationCap,
  },
  {
    degree: "Certified Cloud AI, Metaverse and Web 3.0 ",
    institution: "Governor Initiative of Airtificial Intelligence Course (GIAIC)",
    period: "2023 - 2026",
    description:
      "Intensive program covering modern web technologies, AI engineering and deployment",
    icon: BookOpen,
  },
];

const certifications = [
  "AWS Certified Developer",
  "Google Cloud Professional",
  "Meta Frontend Developer",
  "MongoDB Certified",
];

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-accent">Certifications</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="space-y-6 mb-12">
          {education.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="glass-effect rounded-2xl p-6 md:p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                      <span className="text-gray-300 font-medium">
                        {item.institution}
                      </span>
                      <span className="hidden md:block text-gray-600">•</span>
                      <span className="text-accent text-sm">{item.period}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="glass-effect rounded-2xl p-8 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Certifications</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-accent/10 transition-all duration-300 border border-transparent hover:border-accent/30"
              >
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-gray-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
