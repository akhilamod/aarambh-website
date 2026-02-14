"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Button from "./Button";

type PricingCardProps = {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
  href?: string;
  index?: number;
};

export default function PricingCard({
  name,
  price,
  period = "/month",
  description,
  features,
  highlighted = false,
  cta = "Get Started",
  href = "https://aarambh-one.web.app/organization/register",
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
        highlighted
          ? "bg-gradient-to-br from-primary to-accent text-white border-transparent shadow-2xl shadow-primary/25 scale-105"
          : "bg-white border-border hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary text-sm font-bold rounded-full shadow-lg">
          Most Popular
        </div>
      )}
      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-2 ${highlighted ? "text-white" : "text-heading"}`}
        >
          {name}
        </h3>
        <p className={`text-sm ${highlighted ? "text-white/80" : "text-body"}`}>
          {description}
        </p>
      </div>
      <div className="mb-8">
        <span
          className={`text-4xl font-extrabold ${highlighted ? "text-white" : "text-heading"}`}
        >
          {price}
        </span>
        {price !== "Custom" && (
          <span className={`text-sm ${highlighted ? "text-white/70" : "text-body"}`}>
            {period}
          </span>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check
              className={`w-5 h-5 mt-0.5 flex-shrink-0 ${highlighted ? "text-white" : "text-primary"}`}
            />
            <span
              className={`text-sm ${highlighted ? "text-white/90" : "text-body"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={highlighted ? "secondary" : "primary"}
        className="w-full"
      >
        {cta}
      </Button>
    </motion.div>
  );
}
