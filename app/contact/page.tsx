"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  ArrowRight,
} from "lucide-react";
import SectionWrapper from "../components/SectionWrapper";
import Button from "../components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    institution: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert("Thank you! We will get back to you within 24 hours.");
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
              Let&apos;s <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Have questions? Want a personalised demo? Our team is here to help
              you get started with Aarambh.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 bg-white rounded-2xl border border-border shadow-lg shadow-primary/5"
            >
              <h2 className="text-2xl font-bold text-heading mb-6">
                Send us a message
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
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
                <div>
                  <label className="block text-sm font-medium text-heading mb-2">
                    Email Address *
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
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-heading mb-2">
                    I am a...
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                  >
                    <option value="">Select your role</option>
                    <option value="principal">Principal / Director</option>
                    <option value="teacher">Teacher / Faculty</option>
                    <option value="hod">Head of Department</option>
                    <option value="coaching-owner">Coaching Institute Owner</option>
                    <option value="admin">School Administrator</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-heading mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-heading text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                    placeholder="Tell us about your needs..."
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Send Message <Send className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 bg-gradient-to-br from-primary to-accent rounded-2xl text-white"
            >
              <MessageCircle className="w-8 h-8 mb-4" />
              <h3 className="text-xl font-bold mb-2">Chat on WhatsApp</h3>
              <p className="text-white/80 text-sm mb-4">
                Get instant replies from our team. Most queries resolved within
                10 minutes during business hours.
              </p>
              <a
                href="https://wa.me/919876543210?text=Hi%20I%20am%20interested%20in%20Aarambh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-full text-sm hover:shadow-lg transition-all"
              >
                WhatsApp Us <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 bg-white rounded-2xl border border-border space-y-5"
            >
              <h3 className="text-lg font-bold text-heading">
                Other Ways to Reach Us
              </h3>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-heading text-sm">Email</p>
                  <p className="text-body text-sm">contact@aarambh.one</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-heading text-sm">Office</p>
                  <p className="text-body text-sm">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-heading text-sm">Hours</p>
                  <p className="text-body text-sm">
                    Mon–Sat, 9:00 AM – 7:00 PM IST
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
