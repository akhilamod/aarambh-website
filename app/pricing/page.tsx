"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";
import PricingCard from "../components/PricingCard";
import FAQAccordion from "../components/FAQAccordion";

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for individual teachers exploring digital assessments",
    features: [
      "Up to 100 questions in your bank",
      "5 test papers per month",
      "Basic question tagging",
      "Student performance summary",
      "Email support",
      "1 teacher account",
    ],
    cta: "Start Free",
  },
  {
    name: "Pro",
    price: "₹999",
    description: "Ideal for coaching institutes and school departments",
    features: [
      "Unlimited questions",
      "Unlimited test papers",
      "AI paper extraction (OCR)",
      "Advanced analytics & reports",
      "Bloom's taxonomy tagging",
      "Up to 10 teacher accounts",
      "Priority email & chat support",
      "Export to PDF & Word",
    ],
    highlighted: true,
    cta: "Start 14-Day Trial",
  },
  {
    name: "Institution",
    price: "Custom",
    period: "",
    description: "For schools, universities, and large coaching chains",
    features: [
      "Everything in Pro",
      "Unlimited teacher accounts",
      "Multi-branch support",
      "Custom branding & white-label",
      "API & LMS integrations",
      "Dedicated account manager",
      "On-premise deployment option",
      "SLA & uptime guarantee",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const faqItems = [
  {
    question: "Can I try AARAMMBH before paying?",
    answer:
      "Absolutely! Our Free plan lets you explore the platform with up to 100 questions and 5 tests per month. The Pro plan also comes with a 14-day free trial — no credit card required. You only pay when you are confident AARAMMBH works for you.",
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
    question: "Is there a discount for annual billing?",
    answer:
      "Yes! Annual billing gives you 2 months free — that is ₹9,990 per year instead of ₹11,988 on the Pro plan. Institution plans also offer volume discounts based on the number of branches.",
  },
  {
    question: "What happens to my data if I cancel?",
    answer:
      "Your data remains accessible for 90 days after cancellation. You can export all your questions, papers, and reports in standard formats (PDF, CSV, Word) during this period. We believe your data belongs to you.",
  },
  {
    question: "Do you offer special pricing for government schools?",
    answer:
      "Yes, we offer subsidised pricing for government and aided schools. We are committed to making quality assessment tools accessible to every Indian institution. Contact us for a custom quote.",
  },
  {
    question: "Is there a per-student fee?",
    answer:
      "No. AARAMMBH pricing is based on teacher accounts and features, not the number of students. Whether you have 50 or 5,000 students, the price stays the same. We want you to scale without worrying about costs.",
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
              Start free and upgrade as you grow. No hidden charges, no
              per-student fees, no surprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
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
