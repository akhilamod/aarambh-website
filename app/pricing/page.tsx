"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import PricingCard from "../components/PricingCard";
import FAQAccordion from "../components/FAQAccordion";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    description: "For individual tutors and teachers getting started",
    features: [
      "Up to 50 students",
      "Up to 200 questions in your bank",
      "10 tests per month",
      "Basic analytics",
      "1 teacher account",
      "Email support",
    ],
    cta: "Start Free",
  },
  {
    name: "Growth",
    price: "₹2,499",
    description: "For small coaching centres and tuition classes",
    features: [
      "Up to 200 students",
      "Unlimited questions & tests",
      "AI image extraction",
      "Advanced analytics (student + question level)",
      "Up to 5 teacher accounts",
      "Priority support",
      "Export to PDF",
    ],
    cta: "Start 14-Day Trial",
  },
  {
    name: "Pro",
    price: "₹7,499",
    description: "For mid-size coaching institutes scaling up",
    features: [
      "Up to 500 students",
      "Everything in Growth",
      "All India Ranking (coming soon)",
      "Up to 15 teacher accounts",
      "Batch management",
      "Dedicated support channel",
    ],
    highlighted: true,
    cta: "Start 14-Day Trial",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large coaching chains, schools & universities",
    features: [
      "Unlimited students",
      "Everything in Pro",
      "Unlimited teacher accounts",
      "Multi-branch support",
      "Custom branding & white-label",
      "API & LMS integrations",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const faqItems = [
  {
    question: "Can I try Aarambh before paying?",
    answer:
      "Absolutely! Our Free plan lets you explore the platform with up to 200 questions and 10 tests per month — no credit card required. The Pro plan also comes with a 14-day free trial. You only pay when you are confident Aarambh works for you.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major Indian payment methods including UPI, credit/debit cards, net banking, and wallets via Razorpay. For Institution plans, we also support bank transfers and purchase orders. All prices are in INR and inclusive of GST.",
  },
  {
    question: "Can I upgrade or downgrade my plan anytime?",
    answer:
      "Yes. You can upgrade instantly and the difference will be prorated. Downgrades take effect at the end of your current billing cycle. Your data is always preserved — you will never lose questions or test history.",
  },
  {
    question: "What does the Starter plan include?",
    answer:
      "The Starter plan gives you 200 questions in your bank, 10 tests per month, up to 50 students, basic analytics, 1 teacher account, and email support. It is a great way to get started with digital assessments at no cost.",
  },
  {
    question: "What is the difference between basic and advanced analytics?",
    answer:
      "Basic analytics (Starter plan) gives you test-level summaries — total attempts, average scores, and completion rates. Advanced analytics (Growth and above) adds student-level and question-level insights — performance by subject, difficulty level breakdowns, per-test performance tables, and a student engagement overview.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data remains accessible for 90 days after cancellation. You can export all your questions, papers, and reports during this period. We believe your data belongs to you.",
  },
  {
    question: "Do you offer special pricing for government schools?",
    answer:
      "Yes, we offer subsidised pricing for government and aided schools. We are committed to making quality assessment tools accessible to every Indian institution. Contact us for a custom quote.",
  },
  {
    question: "Is there a per-student fee?",
    answer:
      "No. Aarambh uses student capacity bands — not per-student pricing. You pick a plan based on your institute size, and all students within that band are included. No surprise bills as you add students. The Enterprise plan has no student limit at all.",
  },
  {
    question: "What is 'All India Ranking' in the Pro plan?",
    answer:
      "All India Ranking is an upcoming feature that will let students compare their performance with peers across institutions nationwide. It is marked as 'coming soon' in the Pro plan — you will get it automatically when it launches, at no extra cost.",
  },
];

export default function PricingPage() {
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
              Simple, <span className="gradient-text">Transparent Pricing</span>
            </h1>
            <p className="mt-4 text-lg text-body max-w-2xl mx-auto">
              Start free and upgrade as you grow. Student capacity bands —
              not per-student fees. No hidden charges, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <PricingCard key={plan.name} {...plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-heading">
              Frequently Asked{" "}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="mt-4 text-body">
              Everything you need to know about pricing and billing.
            </p>
          </div>
          <FAQAccordion items={faqItems} />
        </div>
      </SectionWrapper>
    </>
  );
}
