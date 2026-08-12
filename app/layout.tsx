import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

// Named distinctly from the Tailwind theme keys (--font-display /
// --font-body) that reference them in globals.css — see the @theme
// inline block there for why.
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Michael Dreesen — Frontend & Full-Stack Engineer",
  description:
    "Performance engineering and SaaS architecture — from a single component to a system that scales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${inter.variable} bg-bone text-ink font-body antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
