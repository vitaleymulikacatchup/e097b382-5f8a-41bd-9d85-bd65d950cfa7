"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div className="min-h-screen">
        {/* No sections to render as none were selected in the plan */}
      </div>
    </ThemeProvider>
  );
}