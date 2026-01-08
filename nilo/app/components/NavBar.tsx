"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../images/loogo.jpg";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detect scroll for subtle shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.includes(href.replace("/#", ""))) return true;
    return false;
  };

  const navLinks = [
    { href: "/#about", label: "About" },
    { href: "/#services", label: "Services" },
    { href: "/#teams", label: "Team" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 bg-[#047857]/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-[#047857]/50 dark:border-gray-800 transition-all duration-300 ${
        scrolled ? "shadow-xl" : "shadow-lg"
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to Home"
            className="flex items-center gap-2 hover:scale-110 active:scale-95 transition-transform duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md"
          >
            <Image
              src={logo}
              alt="NILO FibreNet logo"
              width={36}
              height={36}
              className="rounded-md object-contain hover:brightness-125 filter drop-shadow-lg hover:drop-shadow-xl transition-all duration-300"
              priority
            />
            <span className="sr-only">NILO</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`text-sm font-semibold transition-all duration-300 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-3 py-2 ${
                  isActive(link.href)
                    ? "text-white dark:text-white"
                    : "text-white/80 dark:text-white/70 hover:text-white dark:hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-1 left-3 h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isActive(link.href)
                      ? "w-[calc(100%-24px)]"
                      : "w-0 group-hover:w-[calc(100%-24px)]"
                  }`}
                />
              </Link>
            ))}
            <ThemeToggle />
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-white dark:bg-[#34d399] text-[#047857] dark:text-black px-6 text-sm font-bold shadow-lg hover:bg-gray-100 dark:hover:bg-[#10b981] hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-white hover:bg-white/20 active:bg-white/30 rounded-lg transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white hover:scale-110"
          >
            <svg
              className={`w-6 h-6 text-white transition-transform duration-300 ${
                mobileMenuOpen ? "rotate-90" : "rotate-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden mt-4 pb-4 space-y-2 border-t border-white/20 pt-4 animate-in fade-in slide-in-from-top-2 duration-300"
          >
            {navLinks.map((link, idx) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white hover:translate-x-1 ${
                  isActive(link.href)
                    ? "bg-white/25 text-white border-l-4 border-white shadow-md"
                    : "text-white/80 hover:bg-white/15 hover:text-white active:bg-white/20"
                }`}
                style={{
                  animation: `slideIn 0.3s ease-out ${idx * 0.05}s both`,
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-4 py-3 rounded-lg text-center text-sm font-bold text-black dark:text-black bg-white dark:bg-[#34d399] shadow-lg hover:brightness-110 transition-all duration-300 active:scale-95 mt-2 hover:translate-y-0.5"
            >
              Contact Us
            </Link>
            <style>{`
              @keyframes slideIn {
                from {
                  opacity: 0;
                  transform: translateX(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateX(0);
                }
              }
            `}</style>
          </div>
        )}
      </div>
    </nav>
  );
}
