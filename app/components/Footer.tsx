"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Demo", href: "/demo" },
    { label: "Question Bank", href: "/features" },
    { label: "AI Extraction", href: "/features" },
  ],
  Solutions: [
    { label: "For Schools", href: "/for-schools" },
    { label: "For Coaching", href: "/for-coaching" },
    { label: "For Universities", href: "/for-schools" },
    { label: "For Tutors", href: "/for-coaching" },
  ],
  Company: [
    { label: "About Us", href: "/contact" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Data Security", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-heading text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          <div className="lg:col-span-2">
            <span className="text-2xl font-extrabold gradient-text">
              AARAMMBH
            </span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-sm">
              AI-powered assessment platform built for Indian schools, coaching
              institutes, and universities. Transform how you create, conduct,
              and analyse exams.
            </p>
            <div className="mt-6">
              <p className="text-sm font-semibold mb-3">Stay in the loop</p>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2.5 bg-white/10 border border-white/10 rounded-full text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <button className="px-4 py-2.5 bg-gradient-to-r from-primary to-accent rounded-full text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AARAMMBH. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with love by{" "}
            <span className="text-gray-400 font-medium">RISA Labs</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
