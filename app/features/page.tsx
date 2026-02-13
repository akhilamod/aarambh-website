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
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";

const featureSections = [
  {
    badge: "Question Bank",
    title: "A Smarter Way to Organise Questions",
    description:
      "Build a centralised, searchable question bank that grows with every exam you create. No more scattered Word files and lost papers.",
    features: [
      {
        icon: Tags,
        title: "Auto-Tagging",
        description:
          "Every question is automatically tagged with subject, chapter, topic, difficulty level, marks, and Bloom's taxonomy level.",
      },
      {
        icon: Search,
        title: "Powerful Search",
        description:
          "Find any question in seconds. Filter by subject, chapter, difficulty, question type, marks, or keyword.",
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
    ],
  },
  {
    badge: "AI Extraction",
    title: "Upload Any Paper. AI Does the Rest.",
    description:
      "Whether it is a handwritten paper, a typed PDF, or a photo of a printed page — our AI reads, extracts, and organises every question.",
    features: [
      {
        icon: Camera,
        title: "Photo-to-Question",
        description:
          "Snap a photo of any question paper with your phone. AI extracts each question, option, and answer automatically.",
      },
      {
        icon: FileText,
        title: "PDF Processing",
        description:
          "Upload PDF question papers directly. AI parses the structure, identifies question boundaries, and extracts clean text.",
      },
      {
        icon: PenTool,
        title: "Handwriting Recognition",
        description:
          "Advanced OCR reads handwritten papers in English and Hindi. Works with most common handwriting styles.",
      },
      {
        icon: Languages,
        title: "Multi-Language Support",
        description:
          "Supports English, Hindi, and regional languages. Perfect for CBSE, ICSE, and state board papers.",
      },
    ],
  },
  {
    badge: "Analytics",
    title: "Insights That Drive Better Teaching",
    description:
      "Go beyond marks and percentages. Understand exactly where each student struggles and how your assessments perform.",
    features: [
      {
        icon: TrendingUp,
        title: "Performance Trends",
        description:
          "Track student performance over time. Spot improving and declining trends before they become problems.",
      },
      {
        icon: PieChart,
        title: "Chapter-Wise Analysis",
        description:
          "See exactly which chapters and topics students find difficult. Align your revision sessions with real data.",
      },
      {
        icon: Users,
        title: "Cohort Comparison",
        description:
          "Compare performance across sections, batches, or branches. Identify best practices from top-performing groups.",
      },
      {
        icon: Target,
        title: "Difficulty Calibration",
        description:
          "Understand if your papers are too easy or too hard. AI suggests the ideal difficulty distribution for balanced assessments.",
      },
    ],
  },
];

const additionalFeatures = [
  {
    icon: Clock,
    title: "Timed Tests",
    description:
      "Set time limits per question or for the full test. Auto-submit when time runs out.",
  },
  {
    icon: Sparkles,
    title: "AI Paper Generator",
    description:
      "Set criteria and let AI create a balanced paper from your question bank in seconds.",
  },
  {
    icon: BookOpen,
    title: "Blueprint Compliance",
    description:
      "Auto-check papers against CBSE/ICSE blueprints for marks, chapters, and question types.",
  },
  {
    icon: Upload,
    title: "Bulk Import",
    description:
      "Import questions from Excel, Word, or Google Sheets. Map columns to fields in a few clicks.",
  },
  {
    icon: Brain,
    title: "Adaptive Practice",
    description:
      "AI generates personalised practice sets based on each student's weak areas and learning pace.",
  },
  {
    icon: BarChart3,
    title: "Exportable Reports",
    description:
      "Download analytics as PDFs for parent-teacher meetings or export raw data as CSV for deeper analysis.",
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
                      <BarChart3 className="w-10 h-10 text-primary" />
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

      <SectionWrapper bg="gradient">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            And <span className="gradient-text">So Much More</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            Every detail has been thoughtfully designed for Indian educators.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalFeatures.map((feature, index) => (
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
