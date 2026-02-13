"use client";

import { motion } from "framer-motion";
import {
  Target,
  BookOpen,
  BarChart3,
  Users,
  Trophy,
  Zap,
  Brain,
  Clock,
  Repeat,
  TrendingUp,
  FileText,
  Star,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import FeatureCard from "../components/FeatureCard";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

const coachingFeatures = [
  {
    icon: Target,
    title: "JEE/NEET/CET Pattern Papers",
    description:
      "Generate practice papers that match the exact pattern, difficulty, and marks distribution of competitive exams. AI ensures perfect alignment with the latest syllabus.",
  },
  {
    icon: Repeat,
    title: "DPP & Weekly Test Automation",
    description:
      "Auto-generate Daily Practice Problems and weekly tests from your question bank. Set the chapter, difficulty, and let AI handle the rest — every day, automatically.",
  },
  {
    icon: TrendingUp,
    title: "Student Ranking & Tracking",
    description:
      "Track each student's rank over time across all tests. Identify toppers, at-risk students, and everyone in between with detailed progress tracking.",
  },
  {
    icon: Brain,
    title: "Weakness-Based Practice",
    description:
      "AI identifies each student's weak chapters and automatically generates targeted practice sets. Students get personalised homework without extra work for teachers.",
  },
  {
    icon: Users,
    title: "Batch Management",
    description:
      "Manage multiple batches — foundation, advanced, dropper, crash course. Each batch gets its own schedule, question bank, and analytics.",
  },
  {
    icon: Trophy,
    title: "Test Series Builder",
    description:
      "Create complete mock test series for JEE, NEET, or any competitive exam. Schedule releases, set time limits, and auto-rank students.",
  },
];

const painPoints = [
  {
    problem: "Setting 30+ DPPs per month manually",
    solution: "AI generates DPPs daily from your question bank — zero effort",
  },
  {
    problem: "Students getting the same questions across tests",
    solution: "Duplicate detection ensures every test is unique",
  },
  {
    problem: "No visibility into individual student progress",
    solution: "Chapter-wise analytics for every student, updated in real-time",
  },
  {
    problem: "Competitive exam patterns keep changing",
    solution: "Pre-loaded patterns for JEE, NEET, CET — always up to date",
  },
  {
    problem: "Managing 5+ batches with different test schedules",
    solution: "Batch-wise automation handles scheduling and paper generation",
  },
];

export default function ForCoachingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-6">
                <Trophy className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  For Coaching Institutes
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-heading leading-tight">
                The Unfair Advantage for{" "}
                <span className="gradient-text">Coaching Institutes</span>
              </h1>
              <p className="mt-6 text-lg text-body leading-relaxed">
                Whether you run a JEE/NEET coaching centre or a local tuition
                class — AARAMMBH automates test creation, tracks student
                performance, and helps you produce results that attract more
                enrollments.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button href="/demo" variant="secondary" size="lg">
                  See Coaching Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-surface to-white border border-border flex items-center justify-center shadow-2xl shadow-primary/5">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-body font-medium">Coaching Dashboard</p>
                  <p className="text-xs text-body/60 mt-1">
                    Batch management & test automation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={200} suffix="+" label="Coaching Institutes" index={0} />
          <AnimatedCounter end={50000} suffix="+" label="Students Tested" index={1} />
          <AnimatedCounter end={1000000} suffix="+" label="Tests Generated" index={2} />
          <AnimatedCounter end={30} suffix="min" label="Avg. Paper Creation Time" index={3} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Built for the{" "}
            <span className="gradient-text">Coaching Workflow</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            From daily practice problems to full-length mock tests — every
            feature is tuned for competitive exam coaching.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {coachingFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Your Problems,{" "}
            <span className="gradient-text">Our Solutions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-6">
          {painPoints.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="grid md:grid-cols-2 gap-4 p-6 bg-white rounded-2xl border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-xs font-bold">!</span>
                </div>
                <p className="text-sm text-body">{item.problem}</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-heading font-medium">
                  {item.solution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Competitive Exam{" "}
            <span className="gradient-text">Ready Out of the Box</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { exam: "JEE Main", subjects: "Physics, Chemistry, Maths" },
            { exam: "JEE Advanced", subjects: "Physics, Chemistry, Maths" },
            { exam: "NEET UG", subjects: "Physics, Chemistry, Biology" },
            { exam: "MHT-CET", subjects: "Physics, Chemistry, Maths/Bio" },
            { exam: "CUET", subjects: "Multiple Domains" },
            { exam: "NTSE", subjects: "MAT & SAT" },
            { exam: "Olympiads", subjects: "Subject-wise" },
            { exam: "Custom", subjects: "Any pattern you define" },
          ].map((item, index) => (
            <motion.div
              key={item.exam}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 bg-surface rounded-2xl text-center hover:bg-white hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1"
            >
              <p className="font-bold text-heading">{item.exam}</p>
              <p className="text-xs text-body mt-1">{item.subjects}</p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Give Your Institute the Competitive Edge
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              200+ coaching institutes trust AARAMMBH to automate tests, track
              results, and improve student outcomes. Start your free trial today.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Start Free Trial <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/demo"
                variant="outline"
                size="lg"
                className="!border-white/30 !text-white hover:!bg-white/10"
              >
                See Coaching Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
