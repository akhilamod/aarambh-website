"use client";

import { motion } from "framer-motion";
import {
  Target,
  Heart,
  Lightbulb,
  Users,
  BookOpen,
  Globe,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description:
      "Every question in our bank is verified against official answer keys. We never compromise on correctness — students deserve to trust what they practice.",
  },
  {
    icon: Heart,
    title: "Built for India",
    description:
      "From JEE and NEET to CBSE boards, we understand the Indian examination landscape deeply. Our platform speaks the language of Indian educators.",
  },
  {
    icon: Lightbulb,
    title: "Simplicity Over Features",
    description:
      "We believe the best tools get out of your way. Clean interfaces, minimal clicks, maximum impact. No feature bloat — just what matters.",
  },
  {
    icon: Users,
    title: "Educator Empowerment",
    description:
      "Technology should amplify great teaching, not replace it. We give educators superpowers — instant test creation, smart analytics, actionable insights.",
  },
];

const milestones = [
  { number: "2,600+", label: "Verified Questions", sublabel: "PYQs, NCERT, HC Verma, Irodov" },
  { number: "12", label: "Exam Types", sublabel: "JEE, NEET, GATE, CAT & more" },
  { number: "5+", label: "Question Formats", sublabel: "MCQ, Multi-select, Integer, Passage, Image" },
  { number: "₹0", label: "To Get Started", sublabel: "Free tier with 30 students" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* ── Hero ── */}
      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm font-semibold text-primary uppercase tracking-wider mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-heading leading-tight mb-6"
          >
            The Beginning of{" "}
            <span className="gradient-text">Better Assessments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-body leading-relaxed"
          >
            Aarambh (आरम्भ) means &ldquo;beginning&rdquo; in Hindi. We&apos;re building the
            platform we wished existed when we saw coaching institutes struggling
            with paper-based tests, manual grading, and zero analytics.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* ── Mission ── */}
      <SectionWrapper className="py-16 md:py-20 bg-surface-secondary">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-heading mb-6">
                Why We Exist
              </h2>
              <div className="space-y-4 text-body leading-relaxed">
                <p>
                  India has over <strong>1.5 million coaching institutes</strong> and{" "}
                  <strong>1.5 million schools</strong>. Most still create tests
                  manually — typing questions in Word, printing papers, grading by hand,
                  with no way to track student progress over time.
                </p>
                <p>
                  The few digital tools available are either too expensive for
                  small institutes or too complex for non-technical educators.
                  We&apos;re changing that.
                </p>
                <p>
                  Aarambh gives every educator — from a single-room coaching
                  center to a 5,000-student institute — access to the same
                  quality of assessment technology.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 shadow-sm border border-border"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {m.number}
                  </div>
                  <div className="text-sm font-semibold text-heading">{m.label}</div>
                  <div className="text-xs text-muted mt-1">{m.sublabel}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Values ── */}
      <SectionWrapper className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              What We Believe
            </h2>
            <p className="text-lg text-body max-w-2xl mx-auto">
              These aren&apos;t corporate values on a wall. They shape every product
              decision we make.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── Team / RISA Labs ── */}
      <SectionWrapper className="py-16 md:py-20 bg-surface-secondary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
              Built by RISA Labs
            </h2>
            <p className="text-lg text-body leading-relaxed mb-6">
              Aarambh is built by{" "}
              <a
                href="https://risalabs.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                RISA Labs
              </a>
              , a research-driven technology company. We combine deep
              engineering expertise with a genuine passion for improving
              education in India.
            </p>
            <p className="text-body leading-relaxed mb-8">
              Our team understands both sides — the technology that powers
              modern assessment platforms and the real-world challenges
              educators face daily. That dual perspective is what makes
              Aarambh different.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="/contact" size="lg">
                Get in Touch <ArrowRight className="w-4 h-4 ml-1 inline" />
              </Button>
              <Button href="/demo" variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ── Proudly India ── */}
      <SectionWrapper className="py-12">
        <div className="text-center">
          <p className="text-sm text-muted">
            Proudly Made in India 🇮🇳
          </p>
        </div>
      </SectionWrapper>
    </div>
  );
}
