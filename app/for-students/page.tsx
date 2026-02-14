"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Target,
  Zap,
  BarChart3,
  Clock,
  BookOpen,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  UserPlus,
  ClipboardList,
  Timer,
  LineChart,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import FeatureCard from "../components/FeatureCard";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

const studentFeatures = [
  {
    icon: Target,
    title: "Real Exam Patterns",
    description:
      "Practice with questions that match JEE, NEET, Olympiad patterns — same difficulty, same format. No surprises on exam day.",
  },
  {
    icon: Zap,
    title: "Instant Results & Solutions",
    description:
      "Get your score immediately after submission with detailed solutions for every question. Know exactly where you went wrong.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Track your scores over time, see trends — improving or declining — and identify weak areas that need more practice.",
  },
  {
    icon: Clock,
    title: "Attempt History",
    description:
      "Review all your past tests — scores, time taken, question-wise breakdown. Everything saved, nothing lost.",
  },
  {
    icon: BookOpen,
    title: "Topic-Wise Practice",
    description:
      "Filter by Physics, Chemistry, Maths — drill down to specific topics and subtopics. Focus on what matters most.",
  },
  {
    icon: TrendingUp,
    title: "All India Ranking",
    description:
      "See where you stand among all students taking the same test. Compare your performance at a national level.",
    comingSoon: true,
  },
];

const howItWorks = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up Free",
    description: "Create your account with just email and password. No credit card, no hidden fees.",
    color: "from-blue-500/10 to-blue-600/10",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Pick Your Exam",
    description: "Choose from JEE, NEET, Olympiad, and 12+ exam types. We'll show you the right tests.",
    color: "from-purple-500/10 to-purple-600/10",
  },
  {
    icon: Timer,
    step: "03",
    title: "Take Timed Tests",
    description: "Attempt tests just like the real exam — timed, structured, and on any device.",
    color: "from-green-500/10 to-green-600/10",
  },
  {
    icon: LineChart,
    step: "04",
    title: "Review Results & Improve",
    description: "Get instant scores, detailed solutions, and analytics. Track your progress and keep improving.",
    color: "from-orange-500/10 to-orange-600/10",
  },
];

const supportedExams = [
  { exam: "JEE Main", subjects: "Physics, Chemistry, Maths" },
  { exam: "JEE Advanced", subjects: "Physics, Chemistry, Maths" },
  { exam: "NEET UG", subjects: "Physics, Chemistry, Biology" },
  { exam: "Olympiads", subjects: "Subject-wise" },
  { exam: "GATE", subjects: "Engineering Streams" },
  { exam: "CAT", subjects: "QA, DILR, VARC" },
  { exam: "CLAT", subjects: "Legal Aptitude & More" },
  { exam: "UPSC", subjects: "Prelims & Mains" },
  { exam: "SSC", subjects: "Multiple Papers" },
  { exam: "Banking", subjects: "Aptitude & Reasoning" },
  { exam: "CBSE Board", subjects: "All Subjects" },
  { exam: "ICSE Board", subjects: "All Subjects" },
];

export default function ForStudentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-6">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  For Students
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-heading leading-tight">
                Practice Smarter,{" "}
                <span className="gradient-text">Rank Higher</span>
              </h1>
              <p className="mt-6 text-lg text-body leading-relaxed">
                Free JEE, NEET, and Olympiad practice tests with instant
                results, detailed solutions, and performance tracking. Tests
                created by Aarambh&apos;s team and your own coaching or school.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Start Practicing Free <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button href="/demo" variant="secondary" size="lg">
                  Explore Tests
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
                    <GraduationCap className="w-10 h-10 text-primary" />
                  </div>
                  <p className="text-body font-medium">Student Dashboard</p>
                  <p className="text-xs text-body/60 mt-1">
                    Tests, results & performance tracking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={100} suffix="+" label="Practice Questions" index={0} />
          <AnimatedCounter end={12} suffix="+" label="Exam Types Supported" index={1} />
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold text-heading">
                <Zap className="w-8 h-8 mx-auto text-primary" />
              </div>
              <p className="text-sm text-body mt-2">Instant Results</p>
            </motion.div>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-3xl md:text-4xl font-extrabold gradient-text">
                ₹0
              </div>
              <p className="text-sm text-body mt-2">Free to Start</p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Features Grid */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Everything You Need to{" "}
            <span className="gradient-text">Ace Your Exams</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Practice with real exam patterns, track your progress, and improve
            where it matters most.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {studentFeatures.map((feature, index) => (
            <div key={feature.title} className="relative">
              {feature.comingSoon && (
                <div className="absolute -top-3 right-4 z-10 inline-flex items-center gap-1 px-3 py-1 bg-amber-100 border border-amber-200 rounded-full">
                  <Sparkles className="w-3 h-3 text-amber-600" />
                  <span className="text-xs font-bold text-amber-700">
                    Coming Soon
                  </span>
                </div>
              )}
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            How It Works — <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            From sign-up to score improvement — it takes minutes to get started.
          </p>
        </div>

        <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16 max-w-4xl mx-auto">
          {howItWorks.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-5">
                <div
                  className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} border border-border flex items-center justify-center shadow-lg`}
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-xs font-bold text-primary/60 mb-1">
                    STEP {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-heading mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Supported Exams */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Supported{" "}
            <span className="gradient-text">Exams & Boards</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Practice for competitive exams, board exams, and entrance tests — all on one platform.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportedExams.map((item, index) => (
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

      {/* Final CTA */}
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
              Start Your Exam Prep Today
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Free practice tests, instant results, and detailed analytics.
              No credit card needed — just sign up and start practicing.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Start Practicing Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/demo"
                variant="outline"
                size="lg"
                className="!border-white/30 !text-white hover:!bg-white/10"
              >
                Explore Tests
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
