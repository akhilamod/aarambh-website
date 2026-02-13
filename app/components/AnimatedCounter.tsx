"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type AnimatedCounterProps = {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  index?: number;
};

export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  index = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-extrabold gradient-text mb-2">
        {prefix}
        {count.toLocaleString("en-IN")}
        {suffix}
      </div>
      <div className="text-body text-sm font-medium">{label}</div>
    </motion.div>
  );
}
