import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "NILO FibreNet — Reliable Internet & Digital Services in Bhutan",
  description:
    "High-speed fibre internet, TV, and CCTV services for homes and businesses across Bhutan.",
  openGraph: {
    title: "NILO FibreNet — Reliable Internet & Digital Services in Bhutan",
    description:
      "High-speed fibre internet, TV, and CCTV services for homes and businesses across Bhutan.",
    url: "https://www.nilofibrenet.bt",
    siteName: "NILO FibreNet",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NILO FibreNet — Reliable Internet & Digital Services in Bhutan",
    description:
      "High-speed fibre internet, TV, and CCTV services for homes and businesses across Bhutan.",
  },
  themeColor: "#047857",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>
          {children}

          {/* Footer */}
          <footer className="bg-[#047857] dark:bg-gray-900 text-white dark:text-gray-300 dark:border-t dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-6 py-12">
              {/* Main Footer Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-white/20 dark:border-gray-700">
                {/* Our Company */}
                <div className="space-y-4">
                  <h4 className="text-white dark:text-[#34d399] text-sm font-bold uppercase tracking-wide mb-4">
                    Our Company
                  </h4>
                  <ul className="space-y-2.5">
                    <li>
                      <Link
                        href="/#about"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#teams"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        Our Team
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/career"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        Career
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#news"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        Announcements
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Services */}
                <div className="space-y-4">
                  <h4 className="text-white dark:text-[#34d399] text-sm font-bold uppercase tracking-wide mb-4">
                    Services
                  </h4>
                  <ul className="space-y-2.5">
                    <li>
                      <Link
                        href="/#services"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        Fibre Internet
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#services"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        TV Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#services"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        CCTV Security
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/plans"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        WiFi Plans
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Useful Links */}
                <div className="space-y-4">
                  <h4 className="text-white dark:text-[#34d399] text-sm font-bold uppercase tracking-wide mb-4">
                    Useful Links
                  </h4>
                  <ul className="space-y-2.5">
                    <li>
                      <Link
                        href="/#contact"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        Customer Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/faq"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/downloads"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        Download Forms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#news"
                        className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                      >
                        News & Updates
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Support & Connect */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-white dark:text-[#34d399] text-sm font-bold uppercase tracking-wide mb-4">
                      Support
                    </h4>
                    <ul className="space-y-2.5">
                      <li>
                        <a
                          href="tel:+97577888866"
                          className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                        >
                          Call Us: +975 77 88 88 66
                        </a>
                      </li>
                      <li>
                        <a
                          href="mailto:info@nlfs.bt"
                          className="text-sm text-white/90 dark:text-gray-400 hover:text-white dark:hover:text-[#34d399] transition-colors"
                        >
                          Email: info@nlfs.bt
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white dark:text-[#34d399] text-sm font-bold uppercase tracking-wide mb-4">
                      Connect with Us
                    </h4>
                    <div className="flex gap-3">
                      <a
                        href="https://www.facebook.com/profile.php?id=100091970497083"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
                        aria-label="Facebook"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
                        aria-label="Instagram"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
                        aria-label="YouTube"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                        </svg>
                      </a>
                      <a
                        href="https://tiktok.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 transition-all duration-300"
                        aria-label="TikTok"
                      >
                        <svg
                          className="w-5 h-5 text-white"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.89 2.89 0 0 1 5.1-1.81v-3.54a6.47 6.47 0 0 0-5.79 3.86 6.47 6.47 0 0 0 11.22-7.07Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="py-8 border-b border-white/20 dark:border-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white dark:text-[#34d399] text-sm font-bold uppercase tracking-wide mb-3">
                      Our Office Location
                    </h4>
                    <p className="text-sm text-white/90 dark:text-gray-400 leading-relaxed">
                      <strong className="text-white">NILO FibreNet</strong>
                      <br />
                      Near Express Car Wash
                      <br />
                      Tshelu Lam, Babesa
                      <br />
                      Thimphu 11001, Bhutan
                      <br />
                      <span className="text-white/70 dark:text-gray-500">
                        Open 9 AM - 5 PM, Monday to Friday
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center justify-start md:justify-end">
                    <a
                      href="https://maps.google.com/?q=Thimphu+Bhutan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white dark:text-[#34d399] hover:text-white/80 dark:hover:text-[#10b981] transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      View on Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-white/80 dark:text-gray-500">
                  Copyright © {new Date().getFullYear()} NILO FibreNet. All
                  rights reserved.
                </p>
                <div className="flex flex-wrap items-center gap-6 text-sm text-white/80 dark:text-gray-500">
                  <Link
                    href="/privacy"
                    className="hover:text-white dark:hover:text-[#34d399] transition-colors"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-white dark:hover:text-[#34d399] transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    href="/disclaimer"
                    className="hover:text-white dark:hover:text-[#34d399] transition-colors"
                  >
                    Disclaimer
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </ClientLayout>
      </body>
    </html>
  );
}
