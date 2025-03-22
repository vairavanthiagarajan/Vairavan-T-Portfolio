import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll("a, button, h1, h2");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => setHovered(true));
      el.addEventListener("mouseleave", () => setHovered(false));
    });
    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => setHovered(true));
        el.removeEventListener("mouseleave", () => setHovered(false));
      });
    };
  }, []);

  return (
    <motion.div
      className="fixed hidden md:block top-0 left-0 w-6 h-6 bg-white rounded-full z-50 pointer-events-none mix-blend-difference"
      style={{
        x: position.x - 12,
        y: position.y - 12,
        scale: hovered ? 3 : 2,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
}
