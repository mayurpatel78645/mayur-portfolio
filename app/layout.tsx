import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";
import CommandPalette from "../components/CommandPalette";

export const metadata: Metadata = {
  title: "Mayur Patel | Software Engineer",
  description: "Full-stack engineer focused on automation, AI systems, and operational architecture.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      {/* We use min-h-screen and flex-col on the body so the main content 
        flex-grows, pushing the footer perfectly to the bottom of the page 
        even if the content is short.
      */}
      <body className="flex flex-col min-h-screen">
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