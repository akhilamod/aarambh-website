"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Calendar,
  Upload,
  Sparkles,
  FileText,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Send,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

const tourSteps = [
  {
    icon: Upload,
    title: "Upload Your Question Paper",
    description:
      "Drag and drop any PDF, image, or photo of a question paper. Supports handwritten and printed text in English and Hindi.",
  },
  {
    icon: Sparkles,
    title: "AI Extracts & Organises",
    description:
      "Watch as AI reads each question, identifies options and answers, tags difficulty levels, and maps to chapters and Bloom's taxonomy.",
  },
  {
    icon: FileText,
    title: "Generate New Papers Instantly",
    description:
      "Set your criteria — subject, chapters, difficulty mix, marks — and generate a perfectly balanced paper in seconds.",
  },
  {
    icon: BarChart3,
    title: "Analyse Student Performance",
    description:
      "After conducting the test, view chapter-wise analytics, student rankings, and AI-generated insights to improve teaching.",
  },
];

export default function DemoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    students: "",
    preferredDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Demo booked! We will send you a calendar invite shortly.");
  };

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
              See AARAMMBH{" "}
              <span className="gradient-text">in Action</span>
            </h1>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Watch how AARAMMBH transforms a question paper into a digital
              assessment in under 2 minutes, or book a live demo with our team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Section */}
      <SectionWrapper>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative aspect-video rounded-2xl bg-gradient-to-br from-heading to-heading/90 border border-border overflow-hidden shadow-2xl shadow-primary/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_70%)]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group relative cursor-pointer">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-colors scale-150" />
                <div className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 text-primary ml-1" />
                </div>
              </button>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <p className="text-white/80 text-sm font-medium">
                Product Walkthrough — 3 min
              </p>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Coming Soon
              </div>
            </div>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* Product Tour */}
      <SectionWrapper bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="mt-4 text-body max-w-2xl mx-auto">
            A quick walkthrough of the core workflow — from uploading a paper to
            analysing student performance.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {tourSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-6"
            >
              <div className="relative flex-shrink-0">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                {index < tourSteps.length - 1 && (
                  <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[2px] h-8 bg-gradient-to-b from-primary/20 to-transparent" />
                )}
              </div>
              <div className="pt-2">
                <div className="text-xs font-bold text-primary/60 mb-1">
                  STEP {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-body text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Book Demo Form */}
      <SectionWrapper>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Live Demo
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading mb-4">
              Book a{" "}
              <span className="gradient-text">Personalised Demo</span>
            </h2>
            <p className="text-body leading-relaxed mb-8">
              Get a 30-minute walkthrough tailored to your institution. Our team
              will show you exactly how AARAMMBH fits into your existing workflow.
            </p>
            <ul className="space-y-4">
              {[
                "Personalised to your institution type",
                "Live Q&A with our product team",
                "See AI extraction with your own papers",
                "Custom pricing discussion",
                "No commitment — completely free",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-body text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 bg-white rounded-2xl border border-border shadow-lg shadow-primary/5"
          >
            <h3 className="text-xl font-bold text-heading mb-6">
              Schedule Your Demo
            </h3>
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  placeholder="Your name"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="you@school.edu.in"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-heading mb-2">
                  Institution Name
                </label>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  placeholder="Your school or institute"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Number of Students
                  </label>
                  <select
                    name="students"
                    value={formData.students}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  >
                    <option value="">Select range</option>
                    <option value="1-100">1 – 100</option>
                    <option value="100-500">100 – 500</option>
                    <option value="500-2000">500 – 2,000</option>
                    <option value="2000+">2,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button type="submit" size="lg" className="w-full">
                Book My Demo <Send className="w-4 h-4 ml-2" />
              </Button>
              <p className="text-xs text-body text-center mt-3">
                Free 30-minute session. No credit card required.
              </p>
            </div>
          </motion.form>
        </div>
      </SectionWrapper>
    </>
  );
}
