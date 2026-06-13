"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "./BentoGrid";
import { Code2, Database, Layout, Server, Smartphone, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Layout,
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML", level: 85 },
      { name: "Framer Motion", level: 85 },
    ],
    span: "col-2" as const,
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "REST APIs", level: 92 },
      { name: "GraphQL", level: 78 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Supabase", level: 88 },
      { name: "Qdrant", level: 82 },
      { name: "MongoDB", level: 75 },
      { name: "CMS", level: 80 },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Vercel", level: 90 },
      { name: "CI/CD", level: 82 },
    ],
    span: "col-2" as const,
  },
  {
    title: "Mobile",
    icon: Smartphone,
    skills: [
      { name: "React Native", level: 85 },
      { name: "Flutter", level: 70 },
      { name: "Expo", level: 88 },
    ],
  },
  {
    title: "Languages",
    icon: Code2,
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 82 },
      { name: "SQL", level: 65 },
      { name: "Markdown", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tech <span className="text-accent">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <BentoGrid>
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <BentoCard key={index} span={category.span}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="h-full flex flex-col"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors relative overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="w-6 h-6 text-accent relative z-10" />
                      <motion.div
                        className="absolute inset-0 bg-accent/20"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills with Progress Bars */}
                  <div className="space-y-4 flex-grow">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                        className="group/skill"
                      >
                        {/* Skill Name and Level */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-300 group-hover/skill:text-accent transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-accent font-semibold">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="relative h-2 bg-white/5 rounded-full overflow-hidden">
                          {/* Background Glow */}
                          <motion.div
                            className="absolute inset-0 bg-accent/10"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          />

                          {/* Progress Bar Fill */}
                          <motion.div
                            className="absolute left-0 top-0 h-full bg-gradient-to-r from-accent to-accent-light rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              delay: index * 0.1 + skillIndex * 0.05 + 0.2,
                              duration: 1,
                              ease: "easeOut",
                            }}
                          >
                            {/* Animated Glow Effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              animate={{ x: ["-100%", "200%"] }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                repeatDelay: 1,
                              }}
                            />
                          </motion.div>

                          {/* Hover Highlight */}
                          <motion.div
                            className="absolute inset-0 bg-accent/20"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <motion.div
                    className="mt-6 pt-4 border-t border-white/5"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      <span>{category.skills.length} Skills</span>
                      <motion.span
                        className="text-accent font-medium"
                        whileHover={{ scale: 1.1 }}
                      >
                        {Math.round(
                          category.skills.reduce((acc, s) => acc + s.level, 0) /
                            category.skills.length
                        )}
                        % Avg
                      </motion.span>
                    </div>
                  </motion.div>
                </motion.div>
              </BentoCard>
            );
          })}
        </BentoGrid>

        {/* Overall Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Technologies", value: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0) },
            { label: "Categories", value: skillCategories.length },
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "15+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-effect rounded-xl p-6 text-center border border-white/10 hover:border-accent/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-accent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
