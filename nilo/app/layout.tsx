import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "NILO FibreNet — Reliable Internet & Digital Services in Bhutan",
  description:
    "High-speed fibre internet, TV, and CCTV services for homes and businesses across Bhutan.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />

        {children}

        {/* Footer */}
        <footer className="bg-linear-to-b from-gray-50 to-white border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-extrabold text-[#3D52A0]">
                  NILO FibreNet
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Connecting Bhutan with reliable, high-speed internet and
                  digital services.
                </p>
              </div>

              {/* Quick Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/#about"
                      className="text-sm text-gray-600 hover:text-[#3D52A0] transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="text-sm text-gray-600 hover:text-[#3D52A0] transition-colors"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#teams"
                      className="text-sm text-gray-600 hover:text-[#3D52A0] transition-colors"
                    >
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="text-sm text-gray-600 hover:text-[#3D52A0] transition-colors"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Services */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Services
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600">Fibre Internet</li>
                  <li className="text-sm text-gray-600">TV Services</li>
                  <li className="text-sm text-gray-600">CCTV Security</li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                  Contact
                </h4>
                <ul className="space-y-2">
                  <li className="text-sm text-gray-600">
                    Email: info@nlfs.bt
                  </li>
                  <li className="text-sm text-gray-600">
                    Phone: +975 17 11 32 80
                  </li>
                  <li className="text-sm text-gray-600">Bhutan</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} NILO FibreNet. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
