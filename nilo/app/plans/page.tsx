"use client";

import Link from "next/link";
import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // Detailed pricing table data (monthly MRC)
  const mrcTable = [
    { speed: "2 - 3", mrc: 1100 },
    { speed: 3, mrc: 1650 },
    { speed: 4, mrc: 2200 },
    { speed: 5, mrc: 2750 },
    { speed: 6, mrc: 3300 },
    { speed: 7, mrc: 3850 },
    { speed: 8, mrc: 4400 },
    { speed: 9, mrc: 4950 },
    { speed: 10, mrc: 5500 },
    { speed: 11, mrc: 6050 },
    { speed: 12, mrc: 6600 },
  ];

  return (
    <main
      className={`min-h-screen bg-white overflow-x-hidden ${inter.className}`}
    >
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 bg-linear-to-br from-white via-[#7091E6]/5 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3D52A0]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#7091E6]/5 rounded-full blur-3xl" />
        </div>

        <div className="mx-autox max-w-7xl space-y-8 relative z-10">
          <div className="text-center space-y-4">
            <div className="inline-block">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0] bg-[#3D52A0]/10 rounded-full px-4 py-2">
                WiFi Plans
              </p>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Choose Your{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#3D52A0] to-[#7091E6]">
                Perfect WiFi Plan
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-light max-w-2xl mx-auto">
              High-speed fibre internet tailored for your home or business.
              Flexible plans with zero hidden charges.
            </p>
          </div>

          {/* Billing Toggle - Enhanced */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex items-center gap-2 sm:gap-4 bg-gray-100 p-1 sm:p-1.5 rounded-full">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  billingCycle === "monthly"
                    ? "bg-white text-[#3D52A0] shadow-lg shadow-[#3D52A0]/20"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-sm transition-all duration-300 relative ${
                  billingCycle === "yearly"
                    ? "bg-white text-[#3D52A0] shadow-lg shadow-[#3D52A0]/20"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Yearly
                {billingCycle === "yearly" && (
                  <span className="absolute -top-2 -right-2 inline-flex items-center rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white animate-pulse">
                    Save 15%
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi Plans - Updated Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-linear-to-b from-gray-50 to-white">
        {/* Plan & Speed Table - Simplified View */}

          <div className="mx-auto max-w-4xl">
            <div className="mb-4 sm:mb-6 text-center">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                Plans and Speeds
              </h2>
              <p className="mt-2 text-sm sm:text-base text-gray-600">
                Quick view of available plans and their speeds.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="min-w-full table-fixed">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="w-1/2 px-4 sm:px-6 py-3 text-center text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Plan
                    </th>
                    <th className="w-1/2 px-4 sm:px-6 py-3 text-center text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                      Speed
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {mrcTable.map((p) => (
                    <tr
                      key={p.speed}
                      className="hover:bg-[#3D52A0]/5 transition-colors"
                    >
                      <td className="px-4 sm:px-6 py-4 text-center text-gray-900 text-sm sm:text-base font-semibold">
                        {p.speed} Mbps
                      </td>
                      <td className="px-4 sm:px-6 py-4 text-center text-gray-800 text-sm sm:text-base font-medium">
                        Nu. {p.mrc.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-3 text-xs text-gray-500 text-center">
              Contact us for custom enterprise speeds and SLAs.
            </p>
          </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-10 sm:mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0] bg-[#3D52A0]/10 rounded-full px-4 py-2 inline-block">
              FAQ
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Common Questions
            </h2>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "Can I change my plan anytime?",
                a: "Yes! You can upgrade or downgrade your WiFi plan with just a phone call. Changes take effect at the start of your next billing cycle.",
              },
              {
                q: "Is installation included?",
                a: "Free professional installation is included in all plans. Our technicians will optimize your router placement and ensure full coverage.",
              },
              {
                q: "What if I need more speed later?",
                a: "Simply contact us to upgrade to a higher tier plan. If infrastructure upgrades are needed, we'll let you know upfront.",
              },
              {
                q: "Are there any contracts?",
                a: "No long-term contracts required. You can cancel anytime with 30 days notice, though we're confident you'll want to stay!",
              },
              {
                q: "What's included in the yearly plan?",
                a: "Same service as monthly, just with 15% savings. You'll also get priority support and complimentary speed upgrades during the year.",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group rounded-xl border border-gray-200 bg-white hover:border-[#3D52A0]/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <summary className="flex items-center justify-between p-4 sm:p-6 font-semibold text-gray-900 select-none">
                  <span>{item.q}</span>
                  <svg
                    className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-sm text-gray-600 font-light border-t border-gray-100">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl sm:rounded-3xl bg-linear-to-br from-[#3D52A0] via-[#5B6BA8] to-[#7091E6] p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl overflow-hidden">
            {/* Decorative shapes */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                Ready to Connect?
              </h2>
              <p className="text-lg font-light max-w-2xl mx-auto opacity-95">
                Fast setup, local support, and unlimited streaming. Get
                connected to blazing-fast WiFi today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <Link
                  href="/#contact"
                  className="inline-flex h-12 sm:h-13 items-center justify-center rounded-xl bg-white px-8 text-sm font-bold text-[#3D52A0] hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get Started Now
                </Link>
                <Link
                  href="/"
                  className="inline-flex h-12 sm:h-13 items-center justify-center rounded-xl border-2 border-white px-8 text-sm font-bold text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
