"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Brain,
  BarChart3,
  Upload,
  Sparkles,
  FileText,
  Tags,
  Search,
  Layers,
  PenTool,
  Camera,
  Languages,
  TrendingUp,
  PieChart,
  Users,
  Target,
  Shuffle,
  Clock,
  CheckCircle2,
  ArrowRight,
  ListChecks,
  Image,
  Hash,
  AlignLeft,
  Timer,
  Navigation,
  Save,
  Share2,
  Shield,
  Palette,
  UserPlus,
  Trophy,
  Rocket,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";

const featureSections = [
  {
    badge: "Question Bank",
    title: "A Smarter Way to Organise Questions",
    description:
      "Build a centralised, searchable question bank that grows with every exam you create. Five question types, smart tagging, and both public and private banks.",
    features: [
      {
        icon: ListChecks,
        title: "5 Question Types",
        description:
          "Single Choice, Multiple Choice, Integer Questions, Image Questions, and Passage-based Questions — covering every assessment need.",
      },
      {
        icon: Search,
        title: "Powerful Filters",
        description:
          "Find any question in seconds. Filter by Subject, Topic, Subtopic, Difficulty Level, and Created By.",
      },
      {
        icon: Tags,
        title: "Smart Tagging",
        description:
          "Every question is tagged with subject, topic, subtopic, and difficulty level. Supports math notation with LaTeX and solution images.",
      },
      {
        icon: Layers,
        title: "Public + Private Banks",
        description:
          "Access a shared public question bank or build your own private bank — completely isolated to your organisation with multi-tenant security.",
      },
    ],
  },
  {
    badge: "AI Extraction",
    title: "Upload an Image. AI Does the Rest.",
    description:
      "Upload a photo of any question paper and our AI reads, extracts, and organises every question — including options and the correct answer.",
    features: [
      {
        icon: Camera,
        title: "Image-to-Question",
        description:
          "Upload a photo of any question paper. AI extracts each question, options, and the correct answer automatically.",
      },
      {
        icon: Brain,
        title: "Smart Structuring",
        description:
          "Extracted questions are automatically structured with question text, options, correct answers, and ready to add to your bank.",
      },
      {
        icon: PenTool,
        title: "Manual Creation",
        description:
          "Create questions manually with full LaTeX math support, solution text, and solution images for detailed explanations.",
      },
      {
        icon: Tags,
        title: "Auto-Tagging on Import",
        description:
          "Imported questions are tagged by subject, topic, subtopic, and difficulty level — ready to use in tests immediately.",
      },
    ],
  },
  {
    badge: "Test Creation",
    title: "Build Tests in Clicks, Not Hours",
    description:
      "Create tests by selecting questions from your bank. Filter, configure, publish — and students get an instant link.",
    features: [
      {
        icon: Search,
        title: "Filter & Select",
        description:
          "Filter questions by subject, topic, subtopic, and difficulty level. Hand-pick the exact questions you want in your test.",
      },
      {
        icon: Clock,
        title: "Configure Test Settings",
        description:
          "Set duration, instructions, and difficulty level. Preview your test before publishing.",
      },
      {
        icon: Share2,
        title: "One-Click Publishing",
        description:
          "Publish your test and get a shareable link. Students can start immediately on any device — no app download needed.",
      },
      {
        icon: FileText,
        title: "Test Management",
        description:
          "Full dashboard to preview, export, and deactivate tests. Track all your published tests in one place.",
      },
    ],
  },
  {
    badge: "Student Portal",
    title: "A Clean, Focused Test Experience",
    description:
      "Students get a distraction-free, browser-based portal that works on any device. No app downloads required.",
    features: [
      {
        icon: Timer,
        title: "Timer & Auto-Save",
        description:
          "Built-in countdown timer with automatic progress saving. Students never lose their work, even if their connection drops.",
      },
      {
        icon: Navigation,
        title: "Question Navigation",
        description:
          "Easy navigation between questions with a question palette showing answered, unanswered, and marked-for-review status.",
      },
      {
        icon: ListChecks,
        title: "Available Tests & Results",
        description:
          "Students see all available tests with a 'Start Test' button, plus recent test results with scores at a glance.",
      },
      {
        icon: TrendingUp,
        title: "Performance Stats",
        description:
          "Dedicated performance tab showing personal stats and progress across all attempted tests.",
      },
    ],
  },
  {
    badge: "Analytics",
    title: "Insights That Drive Better Teaching",
    description:
      "Go beyond marks and percentages. Understand test performance, student trends, and question-level insights with real data.",
    features: [
      {
        icon: BarChart3,
        title: "Test Analytics",
        description:
          "Total attempts, average score, completion rate — with time range filters (7, 30, 90 days) for every test.",
      },
      {
        icon: PieChart,
        title: "Performance by Subject & Difficulty",
        description:
          "See how students perform broken down by subject and difficulty level. Identify weak areas across the class.",
      },
      {
        icon: Users,
        title: "Student Overview",
        description:
          "Total students, active percentage, average tests per student. Understand engagement across your organisation.",
      },
      {
        icon: Target,
        title: "Per-Test Performance Table",
        description:
          "Every test tracked with attempts, average score, completion rate, and average time. Plus a recent activity feed.",
      },
    ],
  },
  {
    badge: "Organisation",
    title: "Built for Institutions",
    description:
      "Multi-tenant architecture ensures each organisation's data is completely isolated. Manage branding, access, and features from one dashboard.",
    features: [
      {
        icon: Shield,
        title: "Multi-Tenant Isolation",
        description:
          "Each organisation has its own private question bank. No data leaks between institutions — guaranteed separation.",
      },
      {
        icon: Palette,
        title: "Organisation Branding",
        description:
          "Customise your organisation name, logo, and brand colours. Feature toggles for Reels, LLM extraction, and Passage-based questions.",
      },
      {
        icon: Users,
        title: "Role-Based Access",
        description:
          "Access control with role management. Teachers and students each see only what they need.",
      },
      {
        icon: UserPlus,
        title: "Easy Onboarding",
        description:
          "Generate teacher and student invite links. Students register directly via the backend — no manual data entry.",
      },
    ],
  },
];

const comingSoonFeatures = [
  {
    icon: Trophy,
    title: "All India Level Ranking",
    description:
      "Compare student performance across institutions nationwide. Benchmarks and percentile rankings at scale.",
  },
  {
    icon: Tags,
    title: "Bloom's Taxonomy Tagging",
    description:
      "Tag questions by cognitive level — Remember, Understand, Apply, Analyse, Evaluate, Create.",
  },
  {
    icon: FileText,
    title: "Blueprint Compliance",
    description:
      "Auto-check papers against CBSE/ICSE blueprints for marks, chapters, and question type distribution.",
  },
  {
    icon: Brain,
    title: "Adaptive Practice",
    description:
      "AI generates personalised practice sets based on each student's weak areas and learning pace.",
  },
  {
    icon: Languages,
    title: "Handwriting & Hindi OCR",
    description:
      "Advanced OCR for handwritten papers in English and Hindi. Expand AI extraction beyond typed/printed content.",
  },
  {
    icon: Upload,
    title: "Bulk Import",
    description:
      "Import questions from Excel, Word, or Google Sheets. Map columns to fields in a few clicks.",
  },
  {
    icon: Sparkles,
    title: "AI Paper Generator",
    description:
      "Set criteria and let AI auto-generate a balanced paper from your question bank in seconds.",
  },
  {
    icon: Layers,
    title: "Version Control",
    description:
      "Track edits and variations of questions. See the full history and revert to any version when needed.",
  },
  {
    icon: Shuffle,
    title: "Duplicate Detection",
    description:
      "AI identifies similar or duplicate questions across your bank, ensuring every test is unique and fresh.",
  },
  {
    icon: Rocket,
    title: "Reels & Video Learning",
    description:
      "Short-form video content for concept revision. Engage students with bite-sized visual explanations.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 via-white to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-heading">
              Powerful Features,{" "}
              <span className="gradient-text">Simple Experience</span>
            </h1>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Every feature in Aarambh is designed to save time, reduce errors,
              and help educators focus on what matters — teaching.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Now Badge */}
      <SectionWrapper bg="white">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 border border-green-200 rounded-full">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700 uppercase tracking-wider">
              Available Now
            </span>
          </div>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-heading">
            Everything You Need,{" "}
            <span className="gradient-text">Built &amp; Working</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            These features are live and ready to use today. Start building your
            question bank, creating tests, and analysing results right away.
          </p>
        </div>
      </SectionWrapper>

      {featureSections.map((section, sectionIndex) => (
        <SectionWrapper
          key={section.badge}
          bg={sectionIndex % 2 === 0 ? "white" : "gray"}
        >
          <div
            className={`grid lg:grid-cols-2 gap-16 items-center ${sectionIndex % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
          >
            <motion.div
              initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={sectionIndex % 2 !== 0 ? "lg:order-2" : ""}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-4">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                  {section.badge}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4">
                {section.title}
              </h2>
              <p className="text-body leading-relaxed mb-8">
                {section.description}
              </p>
              <div className="space-y-4">
                {section.features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-heading mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-body">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: sectionIndex % 2 === 0 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={sectionIndex % 2 !== 0 ? "lg:order-1" : ""}
            >
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-surface to-white border border-border flex items-center justify-center shadow-xl shadow-primary/5">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    {sectionIndex === 0 && (
                      <BookOpen className="w-10 h-10 text-primary" />
                    )}
                    {sectionIndex === 1 && (
                      <Brain className="w-10 h-10 text-primary" />
                    )}
                    {sectionIndex === 2 && (
                      <FileText className="w-10 h-10 text-primary" />
                    )}
                    {sectionIndex === 3 && (
                      <Users className="w-10 h-10 text-primary" />
                    )}
                    {sectionIndex === 4 && (
                      <BarChart3 className="w-10 h-10 text-primary" />
                    )}
                    {sectionIndex === 5 && (
                      <Shield className="w-10 h-10 text-primary" />
                    )}
                  </div>
                  <p className="text-body font-medium">{section.badge}</p>
                  <p className="text-xs text-body/60 mt-1">Feature preview</p>
                </div>
              </div>
            </motion.div>
          </div>
        </SectionWrapper>
      ))}

      {/* Coming Soon Section */}
      <SectionWrapper bg="gradient">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-4">
            <Rocket className="w-4 h-4 text-amber-600" />
            <span className="text-sm font-bold text-amber-700 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            On the <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            We&apos;re actively building these features. They&apos;re not available yet,
            but they&apos;re coming soon.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {comingSoonFeatures.map((feature, index) => (
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

      <section className="py-24 bg-gradient-to-br from-primary via-primary-dark to-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              See These Features in Action
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Book a personalised demo and discover how Aarambh can transform
              assessments at your institution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/demo" variant="secondary" size="lg">
                Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="!border-white/30 !text-white hover:!bg-white/10"
              >
                Start Free
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
