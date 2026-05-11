"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" }, // Added this line
  { path: "/projects", label: "Projects" },
  { path: "/experience", label: "Experience" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-16 flex items-center justify-between">
        <Link href="/" className="font-mono text-sm font-semibold tracking-wider text-primary">
          MAYUR<span className="text-accent">.</span>PATEL
        </Link>
        
        
        <div className="flex items-center gap-6 md:gap-8">
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
          
          {/* New UI Hint */}
          <div className="hidden md:flex items-center gap-1 px-2 py-1 bg-surface border border-white/5 rounded text-xs text-secondary font-mono">
            <span>⌘</span><span>K</span>
          </div>
        </div>
      </div>
    </nav>
  );
}