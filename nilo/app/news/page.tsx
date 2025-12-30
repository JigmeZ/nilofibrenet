"use client";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function NewsPage() {
  // All news items - UPDATE THIS WEEKLY
  const allNews = [
    {
      date: "Dec 15, 2024",
      title: "Fiber Network Expansion Reaches Paro Valley",
      excerpt:
        "NILO FibreNet announces completion of fiber-optic infrastructure in Paro, bringing high-speed connectivity to 500+ new households.",
      content:
        "The expansion marks a significant milestone in our mission to connect Bhutan. Over the past 6 months, our team has laid over 150km of fiber-optic cable, installed 25 new network nodes, and upgraded infrastructure in key towns. Paro residents can now enjoy speeds up to 1Gbps with 99.9% uptime guarantees.",
      category: "Expansion",
      link: "#",
      image: "🌐", // Placeholder emoji
    },
    {
      date: "Dec 8, 2024",
      title: "Enterprise WiFi Solution Launched for Hotels",
      excerpt:
        "New managed WiFi service tailored for hospitality sector with guest analytics and seamless roaming across properties.",
      content:
        "NILO FibreNet introduces a comprehensive WiFi management solution designed specifically for hotels, resorts, and hospitality businesses. Features include guest portal customization, real-time network monitoring, automated failover, and detailed analytics on guest behavior and network usage.",
      category: "Product",
      link: "#",
      image: "📶", // Placeholder emoji
    },
    {
      date: "Nov 30, 2024",
      title: "NILO FibreNet Wins Best ISP Award 2024",
      excerpt:
        "Recognized for customer service excellence and network reliability by Bhutan Digital Association.",
      content:
        "We are honored to receive the Best ISP Award for 2024 from the Bhutan Digital Association. This recognition reflects our commitment to delivering exceptional service, maintaining 99.9% network uptime, and ensuring every customer receives responsive, professional support.",
      category: "Awards",
      link: "#",
      image: "🏆", // Placeholder emoji
    },
    {
      date: "Nov 15, 2024",
      title: "New Customer Support Portal Goes Live",
      excerpt:
        "Self-service platform allows customers to manage accounts, check bills, and submit support tickets 24/7.",
      content:
        "Our new customer portal makes it easier than ever to manage your account. Track your internet speed, view billing history, schedule technician visits, and get real-time support—all in one place.",
      category: "Product",
      link: "#",
      image: "💻", // Placeholder emoji
    },
    {
      date: "Nov 1, 2024",
      title: "CCTV Security Integration with Smart Home Systems",
      excerpt:
        "NILO now offers seamless integration of CCTV systems with popular smart home platforms for enhanced security.",
      content:
        "Customers can now integrate their NILO CCTV systems with major smart home platforms, enabling remote monitoring, automated alerts, and unified control through a single app.",
      category: "Product",
      link: "#",
      image: "📹", // Placeholder emoji
    },
    {
      date: "Oct 15, 2024",
      title: "Community WiFi Initiative Launched in Rural Areas",
      excerpt:
        "Free WiFi hotspots installed in community centers across underserved regions to bridge digital divide.",
      content:
        "NILO FibreNet is committed to bridging the digital divide. We've installed 15 community WiFi hotspots in rural areas, providing free high-speed internet access to schools, health centers, and community gathering spaces.",
      category: "Expansion",
      link: "#",
      image: "🌍", // Placeholder emoji
    },
  ];

  return (
    <main
      id="main-content"
      className={`min-h-screen bg-white overflow-x-hidden ${inter.className}`}
    >
      {/* Hero Section */}
      <section className="py-20 px-6 bg-linear-to-b from-white via-[#7091E6]/5 to-white">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-4 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0]">
              News & Updates
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Latest from <span className="text-[#3D52A0]">NILO FibreNet</span>
            </h1>
            <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Stay informed about our latest network expansions, product
              launches, awards, and company updates.
            </p>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 px-6 bg-linear-to-b from-white to-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((item, idx) => (
              <article
                key={idx}
                className="rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
              >
                {/* Featured Image */}
                <div className="relative w-full h-48 bg-linear-to-br from-[#3D52A0]/10 to-[#7091E6]/10 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300">
                  <span className="text-6xl">{item.image}</span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Date & Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#3D52A0] uppercase tracking-wide bg-[#3D52A0]/10 px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {item.date}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-[#3D52A0]/20 to-transparent mb-4" />

                  {/* Title */}
                  <h2 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#3D52A0] transition-colors line-clamp-2">
                    {item.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-5 line-clamp-3 flex-grow">
                    {item.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3D52A0] hover:text-[#7091E6] transition-colors group/link self-start"
                  >
                    Read More
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Back to Home */}
          <div className="mt-16 text-center">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-gray-900 px-8 text-sm font-bold text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
