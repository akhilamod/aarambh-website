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
  ClipboardList,
  Share2,
  Smartphone,
  GraduationCap,
  Settings,
  Globe,
  Link,
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
                The Complete Assessment Platform
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-heading leading-tight tracking-tight"
          >
            Build, Publish &amp; Conduct
            <br />
            <span className="gradient-text">Exams End-to-End</span>
            <br />
            on One Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg md:text-xl text-body max-w-3xl mx-auto leading-relaxed"
          >
            Build your question bank from scratch or digitise existing papers with AI.
            Create custom tests in clicks. Publish them instantly — students take tests
            on any device. Get real-time analytics. All in one place.
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

          {/* Platform flow mini-visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 mx-auto max-w-4xl"
          >
            <div className="relative rounded-2xl border border-border bg-white/60 backdrop-blur-sm shadow-2xl shadow-primary/5 p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { icon: BookOpen, label: "Question Bank", sub: "Build & organise" },
                  { icon: ClipboardList, label: "Test Creator", sub: "Customise & configure" },
                  { icon: Smartphone, label: "Student Portal", sub: "Take tests on any device" },
                  { icon: BarChart3, label: "Analytics", sub: "Real-time insights" },
                ].map((item, i) => (
                  <div key={item.label} className="relative text-center">
                    {i < 3 && (
                      <div className="hidden md:block absolute top-6 left-[70%] w-[60%] h-[2px] bg-gradient-to-r from-primary/30 to-primary/5" />
                    )}
                    <div className="relative z-10 w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-sm font-bold text-heading">{item.label}</p>
                    <p className="text-xs text-body mt-1">{item.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is AARAMMBH — Platform Overview */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            One Platform, <span className="gradient-text">The Entire Assessment Lifecycle</span>
          </h2>
          <p className="mt-4 text-body max-w-3xl mx-auto">
            AARAMMBH isn&apos;t just a digitisation tool — it&apos;s a complete assessment
            platform that connects teachers and students. From building your question
            bank to conducting exams to analysing results — everything happens here.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={BookOpen}
            title="Smart Question Bank"
            description="Start with our public bank of thousands of curated questions, or build your own private bank. Upload existing papers — AI extracts and tags every question with subject, chapter, difficulty, and Bloom's taxonomy."
            index={0}
          />
          <FeatureCard
            icon={Brain}
            title="AI Paper Digitisation"
            description="Snap a photo or upload a PDF of any question paper — handwritten or typed. AI reads, extracts, and organises questions into your bank. Your content stays 100% private to your institution."
            index={1}
          />
          <FeatureCard
            icon={ClipboardList}
            title="Custom Test Builder"
            description="Create tests from your question bank in clicks. Set chapter mix, difficulty distribution, marks allocation, and time limits. Auto-generate balanced papers or hand-pick specific questions."
            index={2}
          />
          <FeatureCard
            icon={Share2}
            title="One-Click Publishing"
            description="Publish tests instantly via a unique link or QR code. Share via WhatsApp, email, or your LMS. Set start times, deadlines, and attempt limits. Students can access from any device — phone, tablet, or laptop."
            index={3}
          />
          <FeatureCard
            icon={GraduationCap}
            title="Student Test Portal"
            description="Students get a clean, distraction-free test interface on any device. Auto-save, timer, section navigation, and instant submission. No app download needed — works in any browser."
            index={4}
          />
          <FeatureCard
            icon={BarChart3}
            title="Real-Time Analytics"
            description="The moment a test ends, get detailed analytics — student-wise scores, chapter-wise performance, difficulty analysis, time-spent insights, and class leaderboards. Export reports as PDF."
            index={5}
          />
        </div>
      </SectionWrapper>

      {/* How It Works — Full Flow */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            How It Works — <span className="gradient-text">From Bank to Results</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            The complete journey from building your question bank to getting student results. All on AARAMMBH.
          </p>
        </div>

        <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-16">
          {[
            {
              icon: Upload,
              step: "01",
              title: "Build Your Question Bank",
              description:
                "Start with our public question bank or upload your own papers. AI digitises PDFs and images — extracting questions, answers, and marking schemes. Tag by chapter, difficulty, and type. Your private bank grows with every paper you add.",
              color: "from-blue-500/10 to-blue-600/10",
            },
            {
              icon: Settings,
              step: "02",
              title: "Create Custom Tests",
              description:
                "Pick questions from your bank — filter by chapter, difficulty, marks, and type. Or let AI auto-generate a balanced paper matching your criteria. Set total marks, time limit, sections, and negative marking. Preview before publishing.",
              color: "from-purple-500/10 to-purple-600/10",
            },
            {
              icon: Globe,
              step: "03",
              title: "Publish & Share with Students",
              description:
                "Hit publish and get a unique test link + QR code. Share via WhatsApp, SMS, email, or embed in your website. Set schedule windows (e.g., 'available 9 AM–12 PM on Monday'). Students register with your institution's code and take the test on any device.",
              color: "from-green-500/10 to-green-600/10",
            },
            {
              icon: TrendingUp,
              step: "04",
              title: "Get Instant Analytics",
              description:
                "Auto-grading happens the moment a student submits. See real-time leaderboards as students finish. Get chapter-wise analysis, difficulty breakdowns, and identify weak areas across the class. Download detailed reports for parents and management.",
              color: "from-orange-500/10 to-orange-600/10",
            },
          ].map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} border border-border flex items-center justify-center shadow-lg`}>
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

      {/* Teacher ↔ Student Bridge */}
      <SectionWrapper bg="gradient">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Two Portals, <span className="gradient-text">One Connected Platform</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Teachers and students each get a purpose-built experience, seamlessly connected through AARAMMBH.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-heading">Teacher Dashboard</h3>
                <p className="text-sm text-body">Create, publish, analyse</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Manage question bank (public + private)",
                "AI-powered paper digitisation",
                "Drag-and-drop test builder",
                "Publish tests with unique links / QR codes",
                "Real-time monitoring during live tests",
                "Detailed analytics and exportable reports",
                "Role-based access (HOD, teacher, coordinator)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/10 to-green-600/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-heading">Student Portal</h3>
                <p className="text-sm text-body">Access, attempt, review</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                "Join institution with a simple code",
                "View all assigned and upcoming tests",
                "Take tests on any device — phone, tablet, laptop",
                "Clean, distraction-free test interface",
                "Auto-save progress, timer, section navigation",
                "Instant results and detailed solution review",
                "Track personal performance over time",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-body">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 border border-border rounded-full">
            <Link className="w-4 h-4 text-primary" />
            <span className="text-sm text-body">
              Connected via shared test links — no separate app downloads needed
            </span>
          </div>
        </div>
      </SectionWrapper>

      {/* Pain vs Solution */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            The Old Way vs.{" "}
            <span className="gradient-text">The AARAMMBH Way</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Educators spend 60% of their time on test creation and grading.
            AARAMMBH gives you that time back.
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
              <h3 className="text-xl font-bold text-heading">Without AARAMMBH</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Typing question papers from scratch takes hours",
                "Questions scattered across Word docs and paper files",
                "Students take tests on paper — manual distribution",
                "Grading 100+ papers by hand takes days",
                "No way to track student performance trends",
                "WhatsApp groups for sharing — chaotic and unreliable",
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
              <h3 className="text-xl font-bold text-heading">With AARAMMBH</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Upload old papers → AI builds your question bank instantly",
                "Organised, searchable bank with tags and difficulty levels",
                "Publish test link — students attempt on their own devices",
                "Auto-grading the moment students submit",
                "Real-time analytics with chapter-wise and student-wise insights",
                "One link does it all — share via WhatsApp, SMS, or email",
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

      {/* Stats Counter */}
      <SectionWrapper bg="gray">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <AnimatedCounter
            end={50000}
            suffix="+"
            label="Questions in Bank"
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
            label="Faster Test Creation"
            index={3}
          />
        </div>
      </SectionWrapper>

      {/* Trust & Security */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            Built for <span className="gradient-text">Trust &amp; Security</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Your question papers are your intellectual property. Each institution&apos;s
            data is completely isolated.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Multi-Tenant Isolation",
              description:
                "Every institution gets its own private space. Your question bank, tests, and student data are completely separated from other organisations. No cross-contamination, ever.",
            },
            {
              icon: Lock,
              title: "Role-Based Access",
              description:
                "Granular permissions for principals, HODs, teachers, and students. Teachers see only their subjects. Students see only their assigned tests. Everyone in their lane.",
            },
            {
              icon: Server,
              title: "Cloud-Hosted & Encrypted",
              description:
                "Hosted on Google Cloud Platform with encryption at rest and in transit. 99.9% uptime SLA. Your data stays safe, available, and fast — always.",
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
                "Up to 100 questions in private bank",
                "5 tests per month",
                "Up to 50 students",
                "Basic analytics",
                "Email support",
              ],
            },
            {
              name: "Pro",
              price: "₹999",
              description: "For coaching institutes and departments",
              features: [
                "Unlimited private questions",
                "Unlimited tests & students",
                "AI paper digitisation",
                "Advanced analytics & exports",
                "Custom branding",
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
                "Custom integrations & SSO",
                "Dedicated account manager",
                "On-premise option",
                "SLA guarantee",
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
              Build Your Question Bank.
              <br />
              Publish Tests. Get Results.
              <br />
              <span className="text-white/80">All on AARAMMBH.</span>
            </h2>
            <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
              Join 500+ schools and coaching institutes already running their
              assessments on AARAMMBH. Start free — no credit card required.
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
