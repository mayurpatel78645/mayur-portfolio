"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Command } from "lucide-react";
import ThemeToggle from "./ThemeToggle"; // Adjust this path if needed!

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
];

export default function Navbar() {
  const pathname = usePathname();

  // This fires the custom event we added to CommandPalette.tsx
  const openCommandPalette = () => {
    window.dispatchEvent(new CustomEvent("open-command-palette"));
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border-subtle transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wider text-primary">
          MAYUR<span className="text-accent">.</span>PATEL
        </Link>
        
        {/* DESKTOP NAVIGATION (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-6 md:gap-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.path ? "text-primary" : "text-secondary"
              )}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Desktop Utilities Container */}
          <div className="flex items-center gap-4 ml-2 border-l border-border-strong pl-6 dark:border-border-subtle">
            <ThemeToggle />
            
            {/* Desktop UI Hint - Now clickable! */}
            <button 
              onClick={openCommandPalette}
              className="flex items-center gap-1 px-2 py-1 bg-surface border border-border-strong dark:border-border-subtle hover:border-primary/20 transition-colors rounded text-xs text-secondary font-mono shadow-sm"
              aria-label="Open Command Palette"
            >
              <span>⌘</span><span>K</span>
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION TRIGGER (Hidden on desktop) */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          
          <button 
            onClick={openCommandPalette}
            className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface border border-border-strong dark:border-border-subtle text-primary active:scale-95 transition-all shadow-sm"
          >
            <Command className="w-4 h-4 text-accent" />
            <span className="text-xs font-medium">Menu</span>
          </button>
        </div>

      </div>
    </nav>
  );
}