import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import CommandPalette from "../components/CommandPalette";
import CursorGlow from "../components/CursorGlow";

export const metadata: Metadata = {
  metadataBase: new URL("https://mayur-portfolio-two.vercel.app"),
  title: "Mayur Patel | Systems Engineer",
  description: "Full-stack engineer focused on AI systems, scalable infrastructure, and automation. Translating a decade of operational leadership into resilient software architecture.",
  keywords: ["Software Engineer", "Full-Stack Developer", "AI Systems", "React", "Next.js", "Python", "FastAPI"],
  authors: [{ name: "Mayur Patel" }],
  creator: "Mayur Patel",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mayur-portfolio-two.vercel.app/", // Update this to your actual Vercel domain!
    title: "Mayur Patel | Systems Engineer",
    description: "Building systems that reduce human effort. Explore my case studies in AI pipelines, real-time sync, and scalable architecture.",
    siteName: "Mayur Patel Portfolio",
    images: [
      {
        url: "/og-image.png", // We will create this next
        width: 1200,
        height: 630,
        alt: "Mayur Patel - Engineering Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Patel | Systems Engineer",
    description: "Full-stack engineer focused on AI systems, scalable infrastructure, and automation.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* We use min-h-screen and flex-col on the body so the main content 
        flex-grows, pushing the footer perfectly to the bottom of the page 
        even if the content is short.
      */}
      <body className="flex flex-col min-h-screen">
        <CursorGlow />
        <Navbar />
        <CommandPalette />
        <main className="flex-grow pt-24 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}