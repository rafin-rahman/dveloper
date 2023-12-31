"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

export interface ProvidersProps {
  children: React.ReactNode;
}
export default function Providers({ children }: ProvidersProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return <>{children}</>;

  return <ThemeProvider attribute={"class"}>{children}</ThemeProvider>;
}
