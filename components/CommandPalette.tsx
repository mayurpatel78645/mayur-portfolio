"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useRouter } from "next/navigation";
import { Home, FolderGit2, Briefcase, User, Mail, FileText } from "lucide-react";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Listen for Cmd+K (Mac), Ctrl+K (Windows), and Escape
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  // Programmatic download to preserve cmdk keyboard accessibility
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/mayur_patel_resume.pdf";
    link.download = "Mayur_Patel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm bg-background/80">
      {/* Overlay to close when clicking outside */}
      <div className="fixed inset-0" onClick={() => setOpen(false)} />
      
      <Command 
        className="relative w-full max-w-2xl bg-surface border border-white/10 rounded-xl shadow-2xl overflow-hidden"
      >
        <div className="flex items-center border-b border-white/5 px-4">
          <Command.Input 
            autoFocus
            placeholder="Type a command or search..." 
            className="w-full py-4 bg-transparent text-primary outline-none placeholder:text-secondary text-lg"
          />
          <span className="text-xs text-secondary font-mono border border-white/10 px-2 py-1 rounded bg-background">ESC</span>
        </div>

        <Command.List className="max-h-[400px] overflow-y-auto p-2 scroll-smooth">
          <Command.Empty className="py-12 text-center text-sm text-secondary">
            No results found.
          </Command.Empty>

          <Command.Group heading="Navigation" className="text-xs font-mono text-secondary px-2 py-3">
            <CommandItem onSelect={() => runCommand(() => router.push("/"))} icon={<Home className="w-4 h-4" />} label="Home" />
            <CommandItem onSelect={() => runCommand(() => router.push("/about"))} icon={<User className="w-4 h-4" />} label="About" />
            <CommandItem onSelect={() => runCommand(() => router.push("/projects"))} icon={<FolderGit2 className="w-4 h-4" />} label="Projects" />
            <CommandItem onSelect={() => runCommand(() => router.push("/experience"))} icon={<Briefcase className="w-4 h-4" />} label="Experience" />
          </Command.Group>

          <Command.Group heading="Links" className="text-xs font-mono text-secondary px-2 py-3 mt-2 border-t border-white/5">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/mayurpatel78645", "_blank"))} icon={<GithubIcon />} label="GitHub" />
            <CommandItem onSelect={() => runCommand(() => window.open("https://www.linkedin.com/in/mayur-patel-762087216/", "_blank"))} icon={<LinkedinIcon />} label="LinkedIn" />
            <CommandItem onSelect={() => runCommand(() => window.open("mailto:mayurpatel78645@gmail.com"))} icon={<Mail className="w-4 h-4" />} label="Email" />
            
            {/* The Fix: Triggers the hidden link download and adds the file size meta */}
            <CommandItem 
              onSelect={() => runCommand(handleDownload)} 
              icon={<FileText className="w-4 h-4 text-accent" />} 
              label="Download Resume" 
              meta="PDF (124KB)"
            />
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}

// Sub-component upgraded to accept right-aligned metadata
function CommandItem({ onSelect, icon, label, meta }: { onSelect: () => void, icon: React.ReactNode, label: string, meta?: string }) {
  return (
    <Command.Item 
      onSelect={onSelect} 
      className="flex items-center justify-between px-3 py-3 mt-1 text-sm text-primary rounded-md cursor-pointer aria-selected:bg-white/5 aria-selected:text-accent transition-colors group"
    >
      <div className="flex items-center gap-3">
        {icon} {label}
      </div>
      {meta && (
        <span className="text-[10px] font-mono text-secondary/40 group-aria-selected:text-accent/60 transition-colors">
          {meta}
        </span>
      )}
    </Command.Item>
  );
}

// Custom SVG Icons
function GithubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
      <path d="M9 18c-4.51 2-5-2-7-2"></path>
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
      <rect width="4" height="12" x="2" y="9"></rect>
      <circle cx="4" cy="4" r="2"></circle>
    </svg>
  );
}