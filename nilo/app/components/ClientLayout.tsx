"use client";

import { ThemeProvider } from "./ThemeProvider";
import NavBar from "./NavBar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-60 focus:bg-white dark:focus:bg-gray-800 focus:text-[#047857] dark:focus:text-[#34d399] focus:px-3 focus:py-2 focus:rounded-md focus:shadow-lg"
      >
        Skip to content
      </a>
      <NavBar />
      {children}
    </ThemeProvider>
  );
}
