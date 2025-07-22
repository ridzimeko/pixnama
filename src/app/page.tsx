"use client"

import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {

  return (
    <ThemeProvider>
      <div className="font-sans min-h-screen">
      <Navbar />
      <Hero />
    </div>
    </ThemeProvider>
  );
}
