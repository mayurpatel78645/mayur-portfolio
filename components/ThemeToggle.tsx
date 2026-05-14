"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative inline-flex h-8 w-14 items-center justify-center rounded-full bg-surface border border-border-strong transition-colors focus:outline-none shadow-sm"
      aria-label="Toggle Theme"
    >
      <span
        className={`absolute left-1 flex h-6 w-6 transform items-center justify-center rounded-full bg-background shadow-md transition-transform duration-300 ${
          theme === "dark" ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {theme === "dark" ? (
          <Moon className="h-3.5 w-3.5 text-accent" />
        ) : (
          <Sun className="h-3.5 w-3.5 text-accent" />
        )}
      </span>
    </button>
  );
}