"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[minmax(200px,auto)]",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  span?: "col-2" | "row-2" | "col-2-row-2";
}

export function BentoCard({ children, className, span }: BentoCardProps) {
  const spanClasses = {
    "col-2": "md:col-span-2",
    "row-2": "md:row-span-2",
    "col-2-row-2": "md:col-span-2 md:row-span-2",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={cn(
        "glass-effect rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group",
        span && spanClasses[span],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
