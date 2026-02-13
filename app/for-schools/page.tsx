"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  BarChart3,
  Shield,
  Users,
  Building2,
  Clock,
  FileText,
  CheckCircle2,
  ArrowRight,
  Star,
  Layers,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import FeatureCard from "../components/FeatureCard";
import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";

const schoolFeatures = [
  {
    icon: BookOpen,
    title: "CBSE & ICSE Blueprint Compliance",
    description:
      "Auto-validate question papers against official board blueprints. Ensure correct marks distribution, chapter weightage, and question type mix every time.",
  },
  {
    icon: Users,
    title: "Multi-Class Management",
    description:
      "Manage question banks and assessments for Classes 1 through 12. Each class, section, and subject gets its own organised space.",
  },
  {
    icon: BarChart3,
    title: "Report Card Generation",
    description:
      "Auto-generate term-wise report cards with grades, ranks, remarks, and performance graphs. Ready for parent-teacher meetings.",
  },
  {
    icon: Shield,
    title: "Principal's Dashboard",
    description:
      "School-wide analytics at a glance — class averages, teacher performance, subject trends, and exam completion rates.",
  },
  {
    icon: Building2,
    title: "Multi-Branch Support",
    description:
      "Running multiple branches? Centralise your question bank while allowing each branch to create local assessments.",
  },
  {
    icon: Layers,
    title: "Exam Scheduler",
    description:
      "Plan your entire exam calendar. Schedule unit tests, mid-terms, and finals with automated paper generation dates.",
  },
];

const testimonials = [
  {
    quote:
      "AARAMMBH saved our teachers over 200 hours last term. Paper setting that used to take a full weekend now happens in 30 minutes.",
    name: "Dr. Meena Sharma",
    role: "Principal, Delhi Public School, Noida",
  },
  {
    quote:
      "The analytics helped us identify that 60% of our Class 10 students were weak in organic chemistry. We adjusted our teaching and saw a 25% improvement.",
    name: "Rajesh Verma",
    role: "Vice Principal, St. Xavier's School, Pune",
  },
  {
    quote:
      "As a CBSE school, blueprint compliance was always stressful. AARAMMBH checks it automatically. No more last-minute corrections.",
    name: "Anjali Krishnan",
    role: "HOD Science, Kendriya Vidyalaya",
  },
];

export default function ForSchoolsPage() {
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
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">
                  For K-12 Schools
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-heading leading-tight">
                The Assessment Platform{" "}
                <span className="gradient-text">
                  Built for Indian Schools
                </span>
              </h1>
              <p className="mt-6 text-lg text-body leading-relaxed">
                From unit tests to board exam prep — AARAMMBH helps CBSE, ICSE,
                and state board schools create better assessments, save teacher
                time, and improve student outcomes with AI-powered tools.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">
                  Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button href="/demo" variant="secondary" size="lg">
                  Book School Demo
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
                  <p className="text-body font-medium">School Dashboard</p>
                  <p className="text-xs text-body/60 mt-1">
                    Manage all classes, exams & reports
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter end={300} suffix="+" label="Schools Using AARAMMBH" index={0} />
          <AnimatedCounter end={15000} suffix="+" label="Teachers Onboarded" index={1} />
          <AnimatedCounter end={200} suffix="hrs" label="Saved per Term per School" index={2} />
          <AnimatedCounter end={98} suffix="%" label="Teacher Satisfaction" index={3} />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Built for How{" "}
            <span className="gradient-text">Indian Schools Work</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            We understand the unique needs of CBSE, ICSE, and state board
            schools. AARAMMBH is designed around your workflow.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {schoolFeatures.map((feature, index) => (
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
            How Schools Use{" "}
            <span className="gradient-text">AARAMMBH Daily</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Clock,
              title: "Weekly Unit Tests",
              description:
                "Teachers generate chapter-wise unit tests in minutes. AI ensures no question repetition and balanced difficulty.",
            },
            {
              icon: FileText,
              title: "Term Examinations",
              description:
                "Create blueprint-compliant mid-term and final papers with proper marks distribution and section formatting.",
            },
            {
              icon: Star,
              title: "Board Exam Practice",
              description:
                "Build practice papers modelled on previous year board exams. Help Class 10 and 12 students prepare effectively.",
            },
          ].map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-2xl border border-border"
            >
              <useCase.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-heading mb-3">
                {useCase.title}
              </h3>
              <p className="text-body text-sm leading-relaxed">
                {useCase.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Trusted by{" "}
            <span className="gradient-text">Educators Across India</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-surface rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-body text-sm leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold text-heading text-sm">
                  {testimonial.name}
                </p>
                <p className="text-xs text-body">{testimonial.role}</p>
              </div>
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
              Ready to Transform Exams at Your School?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Join 300+ schools already using AARAMMBH. Start with a free pilot
              for your school — no commitment required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Start Free Pilot <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/demo"
                variant="outline"
                size="lg"
                className="!border-white/30 !text-white hover:!bg-white/10"
              >
                Book School Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
