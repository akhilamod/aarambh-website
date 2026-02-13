"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative p-8 bg-white rounded-2xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-accent/20 transition-colors duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-bold text-heading mb-3">{title}</h3>
      <p className="text-body leading-relaxed">{description}</p>
    </motion.div>
  );
}
