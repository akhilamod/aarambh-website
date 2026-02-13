import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "AARAMMBH — AI-Powered Assessment Platform for Indian Education",
  description:
    "Turn any question paper into a digital test in minutes. AI-powered question bank, instant paper generation, and smart analytics for schools, coaching institutes, and universities across India.",
  keywords:
    "assessment platform, online exam, question bank, AI test generator, Indian schools, coaching institute software, digital assessment, exam management",
  openGraph: {
    title: "AARAMMBH — AI-Powered Assessment Platform",
    description:
      "Turn any question paper into a digital test in minutes. Built for Indian schools, coaching institutes, and universities.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
