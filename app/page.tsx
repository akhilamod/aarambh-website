"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  BarChart3,
  Upload,
  Sparkles,
  FileText,
  TrendingUp,
  Shield,
  Lock,
  Server,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  XCircle,
  Users,
} from "lucide-react";
import Button from "./components/Button";
import SectionWrapper from "./components/SectionWrapper";
import FeatureCard from "./components/FeatureCard";
import AnimatedCounter from "./components/AnimatedCounter";

function FloatingShape({
  className,
  delay = 0,
}: {
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay }}
      className={className}
    />
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5 animate-gradient" />

        <FloatingShape
          className="absolute top-32 left-[10%] w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float"
          delay={0.2}
        />
        <FloatingShape
          className="absolute bottom-32 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float-delayed"
          delay={0.4}
        />
        <FloatingShape
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-3xl"
          delay={0}
        />

        <div className="absolute top-40 left-[15%] w-4 h-4 bg-primary/20 rounded-full animate-float" />
        <div className="absolute top-60 right-[20%] w-6 h-6 bg-accent/20 rounded-lg rotate-45 animate-float-delayed" />
        <div className="absolute bottom-40 left-[25%] w-5 h-5 border-2 border-primary/20 rounded-lg rotate-12 animate-float" />
        <div className="absolute bottom-60 right-[15%] w-3 h-3 bg-primary/30 rounded-full animate-float-delayed" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 border border-primary/10 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Assessment Platform
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-heading leading-tight tracking-tight"
          >
            Turn Any Question Paper
            <br />
            Into a{" "}
            <span className="gradient-text">Digital Test</span>
            <br />
            in Minutes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-body max-w-2xl mx-auto leading-relaxed"
          >
            Upload any question paper — handwritten or typed — and let AI
            digitise, categorise, and build a smart question bank. Generate
            balanced assessments in seconds, not hours.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button href="/contact" size="lg">
              Start Free <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button href="/demo" variant="secondary" size="lg">
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 mx-auto max-w-4xl"
          >
            <div className="relative rounded-2xl border border-border bg-white/60 backdrop-blur-sm shadow-2xl shadow-primary/5 p-4 md:p-8">
              <div className="aspect-video rounded-xl bg-gradient-to-br from-surface to-white border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-sm text-body font-medium">
                    Product Preview
                  </p>
                  <p className="text-xs text-body/60 mt-1">
                    AI-powered assessment dashboard
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain vs Solution */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            The Old Way vs.{" "}
            <span className="gradient-text">The Aarambh Way</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Educators spend 60% of their time on test creation and grading.
            Aarambh gives you that time back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl border border-red-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-heading">Without Aarambh</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Manually typing question papers takes hours",
                "No centralised question bank — papers scattered everywhere",
                "Repetitive questions across exams without realising",
                "Zero analytics on student performance patterns",
                "Paper-based grading is slow and error-prone",
                "Impossible to personalise tests for weak students",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl border border-green-100 shadow-lg shadow-green-500/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-heading">With Aarambh</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Upload any paper — AI digitises it in under 2 minutes",
                "Smart question bank with tags, difficulty, and Bloom's taxonomy",
                "Auto-detects duplicates and suggests alternatives",
                "Real-time analytics with chapter-wise and student-wise insights",
                "Instant auto-grading with detailed performance reports",
                "AI generates personalised practice sets for each student",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-body text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* 3 Feature Pillars */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Everything You Need to{" "}
            <span className="gradient-text">Transform Assessments</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Three powerful pillars that work together to make test creation,
            delivery, and analysis effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={BookOpen}
            title="Smart Question Bank"
            description="Build a growing, intelligent question bank. Every question is auto-tagged with subject, chapter, topic, difficulty level, and Bloom's taxonomy. Search, filter, and reuse across exams."
            index={0}
          />
          <FeatureCard
            icon={Brain}
            title="AI Paper Extraction"
            description="Snap a photo or upload a PDF of any question paper. Our AI reads handwritten and printed text, extracts questions, and adds them to your bank — complete with answers and marking schemes."
            index={1}
          />
          <FeatureCard
            icon={BarChart3}
            title="Deep Analytics"
            description="Move beyond marks. Get chapter-wise performance, difficulty analysis, time-spent insights, and student-wise strength and weakness reports. Make data-driven decisions about teaching."
            index={2}
          />
        </div>
      </SectionWrapper>

      {/* How It Works */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Up and Running in{" "}
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            From paper to digital in minutes — no training, no tech expertise
            required.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Upload,
              step: "01",
              title: "Upload Papers",
              description:
                "Upload existing question papers as PDFs, images, or even photos of handwritten papers.",
            },
            {
              icon: Sparkles,
              step: "02",
              title: "AI Extracts & Tags",
              description:
                "Our AI reads each question, extracts it, and tags it with subject, chapter, difficulty, and more.",
            },
            {
              icon: FileText,
              step: "03",
              title: "Generate Tests",
              description:
                "Create balanced question papers in seconds. Set criteria and let AI pick the perfect mix.",
            },
            {
              icon: TrendingUp,
              step: "04",
              title: "Analyse Results",
              description:
                "Get instant analytics after every test — student performance, class averages, and gap analysis.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {index < 3 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/20 to-transparent" />
              )}
              <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-2xl bg-white border border-border shadow-lg shadow-primary/5 flex items-center justify-center">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-xs font-bold text-primary/60 mb-2">
                STEP {item.step}
              </div>
              <h3 className="text-lg font-bold text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats Counter */}
      <SectionWrapper bg="gradient">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter
            end={50000}
            suffix="+"
            label="Questions Digitised"
            index={0}
          />
          <AnimatedCounter
            end={500}
            suffix="+"
            label="Schools & Institutes"
            index={1}
          />
          <AnimatedCounter
            end={98}
            suffix="%"
            label="AI Accuracy Rate"
            index={2}
          />
          <AnimatedCounter
            end={10}
            suffix="x"
            label="Faster Paper Creation"
            index={3}
          />
        </div>
      </SectionWrapper>

      {/* Trust & Security */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Built for <span className="gradient-text">Trust & Security</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Your question papers are your intellectual property. We treat them
            with the highest level of security.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Bank-Grade Encryption",
              description:
                "All data encrypted at rest and in transit using AES-256 and TLS 1.3. Your question papers stay safe.",
            },
            {
              icon: Lock,
              title: "Role-Based Access",
              description:
                "Granular permissions for principals, HODs, teachers, and students. Everyone sees only what they need.",
            },
            {
              icon: Server,
              title: "India-Hosted Servers",
              description:
                "All data stored on Indian servers compliant with data localisation norms. GDPR and IT Act ready.",
            },
          ].map((item, index) => (
            <FeatureCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      {/* Pricing Preview */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Start free. Scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Free",
              price: "₹0",
              description: "For individual teachers getting started",
              features: [
                "Up to 100 questions",
                "5 tests per month",
                "Basic analytics",
                "Email support",
              ],
            },
            {
              name: "Pro",
              price: "₹999",
              description: "For coaching institutes and departments",
              features: [
                "Unlimited questions",
                "Unlimited tests",
                "AI paper extraction",
                "Advanced analytics",
                "Priority support",
              ],
              highlighted: true,
            },
            {
              name: "Institution",
              price: "Custom",
              period: "",
              description: "For schools and universities",
              features: [
                "Everything in Pro",
                "Multi-branch support",
                "Custom integrations",
                "Dedicated account manager",
                "On-premise option",
              ],
            },
          ].map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-primary to-accent text-white border-transparent shadow-2xl shadow-primary/25 md:scale-105"
                  : "bg-white border-border hover:border-primary/20 hover:shadow-xl"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-primary text-sm font-bold rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              <h3
                className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-heading"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${plan.highlighted ? "text-white/80" : "text-body"}`}
              >
                {plan.description}
              </p>
              <div className="mb-6">
                <span
                  className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-heading"}`}
                >
                  {plan.price}
                </span>
                {plan.price !== "Custom" && (
                  <span
                    className={`text-sm ${plan.highlighted ? "text-white/70" : "text-body"}`}
                  >
                    /month
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-white" : "text-primary"}`}
                    />
                    <span
                      className={`text-sm ${plan.highlighted ? "text-white/90" : "text-body"}`}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                href="/pricing"
                variant={plan.highlighted ? "secondary" : "primary"}
                className="w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button href="/pricing" variant="outline" size="sm">
            See Full Pricing Details <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-accent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Ready to Transform How
              <br />
              Your Institution Conducts Exams?
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Join 500+ schools and coaching institutes already saving hours
              every week with Aarambh. Start free — no credit card required.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="secondary" size="lg">
                Start Free Today <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/demo"
                variant="outline"
                size="lg"
                className="!border-white/30 !text-white hover:!bg-white/10"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
