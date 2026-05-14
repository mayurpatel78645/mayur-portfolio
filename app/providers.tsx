"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  // We removed the 'mounted' state entirely. 
  // next-themes handles this safely as long as suppressHydrationWarning is on the <html> tag.
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
}