"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
    onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F7F6F3] hover:bg-[#a6a5a2] dark:hover:bg-[#343333] transition-colors hover:text-[#1A1A1A] dark:hover:text-white"
    aria-label="Toggle theme"
  >
    {theme === "dark" ? (
      // Sun icon
      <svg className="w-4 h-4 text-[#9a5b0e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ) : (
      // Moon icon
      <svg className="w-4 h-4 text-[#FBBF24]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    )}
  </button>
  );
}