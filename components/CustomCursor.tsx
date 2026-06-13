"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [isClicking, setIsClicking] = useState(false);
  const trailIdRef = useRef(0);
  const lastTrailTime = useRef(0);

  useEffect(() => {
    let rafId: number;
    let currentX = -100;
    let currentY = -100;

    // Throttled trail creation (max 1 every 150ms)
    const createTrail = (x: number, y: number) => {
      const now = Date.now();
      if (now - lastTrailTime.current > 150) {
        lastTrailTime.current = now;
        const newTrail = {
          x,
          y,
          id: trailIdRef.current++,
        };
        setTrails((prev) => [...prev.slice(-3), newTrail]); // Keep only last 3 trails

        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== newTrail.id));
        }, 500);
      }
    };

    const updateCursor = (e: MouseEvent) => {
      currentX = e.clientX;
      currentY = e.clientY;

      // Use RAF for smooth cursor updates
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setPosition({ x: currentX, y: currentY });

        // Reduced trail frequency
        if (Math.random() > 0.85) {
          createTrail(currentX, currentY);
        }
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updateCursor, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updateCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isClicking ? "clicking" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
          willChange: "transform",
        }}
      />
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: "translate(-50%, -50%)",
            willChange: "opacity",
          }}
        />
      ))}
    </>
  );
}
