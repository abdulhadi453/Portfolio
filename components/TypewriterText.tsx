"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function TypewriterText({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000,
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Memoize current text to avoid re-renders
  const currentText = useMemo(() => texts[textIndex], [texts, textIndex]);

  useEffect(() => {
    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (!isDeleting && displayText === currentText) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    // Use requestAnimationFrame for smoother updates
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }
      },
      delay
    );

    return () => clearTimeout(timeout);
  }, [displayText, textIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration, currentText]);

  return (
    <span className="inline-block min-h-[1.5em]">
      {displayText}
      <motion.span
        className="inline-block w-0.5 h-5 bg-accent ml-1 align-middle"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        style={{ willChange: "opacity" }}
      />
    </span>
  );
}
