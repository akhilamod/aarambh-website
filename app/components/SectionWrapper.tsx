"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "gray" | "gradient";
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  bg = "white",
}: SectionWrapperProps) {
  const backgrounds = {
    white: "bg-white",
    gray: "bg-surface",
    gradient:
      "bg-gradient-to-br from-primary/5 via-white to-accent/5",
  };

  return (
    <section id={id} className={`py-20 md:py-28 ${backgrounds[bg]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
