"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../images/loogo.jpg";

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      role="navigation"
      aria-label="Main"
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            aria-label="Go to Home"
            className="flex items-center gap-2 active:scale-95 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0] rounded-md"
          >
            <Image
              src={logo}
              alt="NILO FibreNet logo"
              width={36}
              height={36}
              className="rounded-md object-contain hover:brightness-110"
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
                className={`text-sm font-semibold transition-all duration-200 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0] rounded-md ${
                  isActive(link.href)
                    ? "text-[#3D52A0]"
                    : "text-gray-700 hover:text-[#3D52A0]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#3D52A0] transition-all duration-300 ${
                    isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-linear-to-r from-[#3D52A0] to-[#7091E6] px-6 text-sm font-bold text-white shadow-lg shadow-[#3D52A0]/30 hover:shadow-xl hover:shadow-[#7091E6]/40 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-gray-700 hover:text-[#3D52A0] active:bg-[#3D52A0]/10 rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0]"
          >
            <svg
              className="w-6 h-6"
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
            className="md:hidden mt-4 pb-4 space-y-2 border-t border-gray-100 pt-4 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-200 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0] ${
                  isActive(link.href)
                    ? "bg-[#3D52A0]/10 text-[#3D52A0] border-l-4 border-[#3D52A0]"
                    : "text-gray-700 hover:bg-[#3D52A0]/5 hover:text-[#3D52A0] active:bg-[#3D52A0]/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full px-4 py-3 rounded-lg text-center text-sm font-bold text-white bg-linear-to-r from-[#3D52A0] to-[#7091E6] shadow-lg shadow-[#3D52A0]/30 hover:shadow-xl hover:shadow-[#7091E6]/40 hover:brightness-110 transition-all duration-300 active:scale-95 mt-2"
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
