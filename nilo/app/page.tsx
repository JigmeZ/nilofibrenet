"use client";
import Link from "next/link";
import { useState, FormEvent, useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import image from "./images/group.jpg";
import image1 from "./images/images.png";
import Image from "next/image";
import wifi from "./images/wifi.jpg";
import tv from "./images/tv.jpg";
import cctv from "./images/cctv.jpg";
import Karma from "./images/Karma.jpg";
import Chimi from "./images/Chimi.jpg";
import Rinchen from "./images/Rinchen.jpg";
import Tulasi from "./images/Tulasi.jpg";
import Sonam from "./images/Sonam.jpg";
import Dorji from "./images/Dorji.jpg";
import ceo from "./images/CEO.jpg";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Minimal IntersectionObserver hook - only return inView state for render
function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px", ...options }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);
  return { ref, inView };
}

export default function Home() {
  // New: team data for the Teams section
  const teamMembers = [
    {
      name: "Nima Lotay",
      role: "CEO/Founder",
      image: ceo,
    },
    {
      name: "Sonam Zangmo",
      role: "Accountant",
      image: Sonam,
    },
    {
      name: "Dorji Wangchuk",
      role: "Technical Manager",
      image: Dorji,
    },
    {
      name: "Rinchen Chelzom",
      role: "Asst. Accountant",
      image: Rinchen,
    },
    {
      name: "Tulasi Gurung",
      role: "Technician",
      image: Tulasi,
    },
    {
      name: "Karma Gyalmo",
      role: "Technician",
      image: Karma,
    },
    {
      name: "Chimi Seldon",
      role: "Asst. Accountant",
      image: Chimi,
    },
  ];

  // Keep features array for the marquee slider
  const features = [
    {
      label: "Speed",
      title: "High-Speed",
      desc: "Fibre-powered plans built for streaming, work, and gaming.",
    },
    {
      label: "Stability",
      title: "Reliable",
      desc: "Stable connectivity with local support across Bhutan.",
    },
    {
      label: "Support",
      title: "Trusted Team",
      desc: "Experienced professionals for install, maintenance, and care.",
    },
  ];

  // Client testimonials data
  const testimonials = [
    {
      name: "Tshering Dorji",
      location: "Thimphu",
      role: "Business Owner",
      feedback:
        "NILO FibreNet has transformed how we run our business. The internet speed is incredible and customer support is always responsive.",
      rating: 5,
    },
    {
      name: "Pema Wangmo",
      location: "Paro",
      role: "Homemaker",
      feedback:
        "Best decision we made for our family. The kids can study online without any interruptions, and the TV service has amazing channels.",
      rating: 5,
    },
    {
      name: "Kinley Tenzin",
      location: "Punakha",
      role: "IT Professional",
      feedback:
        "As someone who works remotely, reliable internet is crucial. NILO has never let me down. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sonam Choden",
      location: "Thimphu",
      role: "Teacher",
      feedback:
        "The CCTV installation was professional and gives us peace of mind. The team was very helpful throughout the process.",
      rating: 5,
    },
  ];

  // Testimonial auto-slide state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Team carousel state
  const [activeTeamMember, setActiveTeamMember] = useState(0);

  // Auto-rotate team members every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTeamMember((prev) => (prev + 1) % teamMembers.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});
  const [submitted, setSubmitted] = useState(false);
  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!name.trim()) next.name = "Name is required.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!validateEmail(email)) next.email = "Enter a valid email.";
    if (!message.trim()) next.message = "Message is required.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const stats = [
    { number: "15", label: "Years Experience" },
    { number: "8", label: "Expert Team" },
    { number: "1000+", label: "Happy Clients" },
    { number: "100+", label: "Projects Completed" },
  ];

  // In-view trackers - destructure only what's needed for render
  const { ref: heroTextRef, inView: heroTextInView } =
    useInView<HTMLDivElement>();
  const { ref: heroRightRef, inView: heroRightInView } =
    useInView<HTMLDivElement>();
  const { ref: aboutTextRef, inView: aboutTextInView } =
    useInView<HTMLDivElement>();
  const { ref: aboutRightRef, inView: aboutRightInView } =
    useInView<HTMLDivElement>();
  const { ref: servicesHeaderRef, inView: servicesHeaderInView } =
    useInView<HTMLDivElement>();
  const { ref: internetCardRef, inView: internetCardInView } =
    useInView<HTMLDivElement>();
  const { ref: tvCardRef, inView: tvCardInView } = useInView<HTMLDivElement>();
  const { ref: cctvCardRef, inView: cctvCardInView } =
    useInView<HTMLDivElement>();
  const { ref: whyHeaderRef, inView: whyHeaderInView } =
    useInView<HTMLHeadingElement>();
  const { ref: teamsHeaderRef, inView: teamsHeaderInView } =
    useInView<HTMLDivElement>();
  const { ref: contactHeaderRef, inView: contactHeaderInView } =
    useInView<HTMLDivElement>();
  const { ref: testimonialsHeaderRef, inView: testimonialsHeaderInView } =
    useInView<HTMLDivElement>();

  // News data - UPDATE THIS WEEKLY
  // Simply replace the entries below with new news items
  // Format: { date: "MMM DD, YYYY", title: "...", excerpt: "...", category: "...", link: "#" }
  const news = [
    {
      date: "Dec 15, 2024",
      title: "Fiber Network Expansion Reaches Paro Valley",
      excerpt:
        "NILO FibreNet announces completion of fiber-optic infrastructure in Paro, bringing high-speed connectivity to 500+ new households.",
      category: "Expansion",
      link: "#",
    },
    {
      date: "Dec 8, 2024",
      title: "Enterprise WiFi Solution Launched for Hotels",
      excerpt:
        "New managed WiFi service tailored for hospitality sector with guest analytics and seamless roaming across properties.",
      category: "Product",
      link: "#",
    },
    {
      date: "Nov 30, 2024",
      title: "NILO FibreNet Wins Best ISP Award 2024",
      excerpt:
        "Recognized for customer service excellence and network reliability by Bhutan Digital Association.",
      category: "Awards",
      link: "#",
    },
  ];

  return (
    <main
      id="main-content"
      className={`min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden ${inter.className}`}
    >
      {/* Hero Section */}
      <section
        id="hero"
        className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white dark:bg-gray-900"
      >
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2 mx-auto max-w-7xl">
          <div
            ref={heroTextRef}
            className={`flex flex-col justify-center space-y-6 transition-all duration-700 ease-out will-change-transform ${
              heroTextInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p
              className={`text-[10px] font-bold text-[#047857] uppercase tracking-[0.2em] ${
                heroTextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }`}
              style={{
                transition: "all 700ms ease-out",
                transitionDelay: "100ms",
              }}
            >
              Welcome to NILO FibreNet
            </p>
            <h1
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight text-black dark:text-white md:text-5xl lg:text-6xl leading-[1.2] sm:leading-[1.1] ${
                heroTextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              }`}
              style={{
                transition: "all 700ms ease-out",
                transitionDelay: "200ms",
              }}
            >
              Reliable Internet &{" "}
              <span className="text-[#047857]">Digital Services</span> in Bhutan
            </h1>
            <p
              className={`${
                heroTextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              } text-base text-black dark:text-white leading-relaxed font-light`}
              style={{
                transition: "all 700ms ease-out",
                transitionDelay: "300ms",
              }}
            >
              NILO FibreNet delivers high-speed fibre internet, premium TV
              services, and advanced CCTV security solutions for homes and
              businesses across Bhutan. Built on stability, supported by local
              expertise.
            </p>
            <div
              className={`${
                heroTextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              } flex flex-col gap-3 sm:gap-4 sm:flex-row pt-4 w-full`}
              style={{
                transition: "all 700ms ease-out",
                transitionDelay: "400ms",
              }}
            >
              <Link
                href="/#services"
                className="group inline-flex h-12 sm:h-12 items-center justify-center rounded-xl bg-[#047857] px-6 sm:px-8 text-sm font-bold text-white shadow-lg shadow-[#047857]/30 hover:bg-[#059669] hover:shadow-xl hover:shadow-[#059669]/40 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                style={{ color: "#ffffff" }} // ensure text is white
              >
                Explore Services
                <svg
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link
                href="/#about"
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-6 sm:px-8 text-sm font-bold text-black dark:text-white hover:border-[#047857] dark:hover:border-[#34d399] hover:bg-[#047857]/5 dark:hover:bg-[#34d399]/10 transition-all duration-300 w-full sm:w-auto"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div
            ref={heroRightRef}
            className={`relative hidden lg:flex items-center justify-center h-112.5 rounded-3xl bg-linear-to-br from-[#34d399] via-[#059669]/20 to-white shadow-2xl overflow-hidden transition-all duration-700 ease-out will-change-transform ${
              heroRightInView
                ? "opacity-100 translate-y-0 scale-105 ring-2 ring-[#059669]/30"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(61,82,160,0.1),transparent_50%)]" />
            <Image
              src={image1}
              alt="Connectivity Partner"
              fill
              className="object-cover"
              priority
              sizes="(min-width:1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Stats Section - MOVED UP FOR IMMEDIATE CREDIBILITY */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 bg-white dark:bg-gray-900">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mx-auto max-w-7xl">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center space-y-2 p-4 sm:p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm dark:shadow-lg hover:shadow-xl dark:hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-[#047857] to-[#059669] dark:from-[#34d399] dark:to-[#10b981] group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base font-semibold text-black dark:text-white uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section - MOVED EARLIER */}
      <section
        id="about"
        className="py-20 px-6 bg-white dark:bg-gray-900 overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mx-auto max-w-7xl">
          {/* Left Column - Content */}
          <div
            ref={aboutTextRef}
            className={`space-y-8 transition-all duration-700 ease-out will-change-transform ${
              aboutTextInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-4">
              <p
                className={`text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857] ${
                  aboutTextInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                }`}
                style={{
                  transition: "all 700ms ease-out",
                  transitionDelay: "100ms",
                }}
              >
                About NILO FibreNet
              </p>
              <h2
                className={`text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight leading-[1.1] ${
                  aboutTextInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                }`}
                style={{
                  transition: "all 700ms ease-out",
                  transitionDelay: "200ms",
                }}
              >
                Connecting, <span className="text-[#10b981]">One Home</span> at
                a Time
              </h2>
            </div>

            <div
              className={`${
                aboutTextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              } space-y-5 text-black dark:text-white text-base leading-relaxed font-light`}
              style={{
                transition: "all 700ms ease-out",
                transitionDelay: "300ms",
              }}
            >
              <p>
                Since our founding, NILO FibreNet has been committed to bridging
                the digital divide across Bhutan. We believe that reliable
                internet access is not just a luxury, it is a necessity for
                education, business, and staying connected with loved ones.
              </p>
              <p>
                What started as a vision to bring high-speed connectivity to
                underserved communities has grown into a trusted network serving
                thousands of homes and businesses throughout the country. Our
                fiber-optic infrastructure delivers blazing-fast speeds while
                our local team ensures you are never left disconnected.
              </p>
            </div>

            {/* Mission & Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="space-y-3 p-5 rounded-2xl bg-linear-to-br from-[#059669]/10 to-transparent dark:from-[#34d399]/20 dark:to-transparent border border-[#059669]/20 dark:border-[#34d399]/30 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#047857] dark:bg-[#34d399] shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Our Mission
                  </h3>
                </div>
                <p className="text-sm text-black dark:text-gray-300 leading-relaxed">
                  To empower every household and business in Bhutan with
                  world-class connectivity that drives growth and opportunity.
                </p>
              </div>

              <div className="space-y-3 p-5 rounded-2xl bg-linear-to-br from-[#10b981]/10 to-transparent dark:from-[#10b981]/20 dark:to-transparent border border-[#10b981]/20 dark:border-[#10b981]/30 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#10b981] dark:bg-[#10b981] shadow-lg">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-black dark:text-white">
                    Our Values
                  </h3>
                </div>
                <p className="text-sm text-black dark:text-gray-300 leading-relaxed">
                  Integrity, reliability, and customer-first service guide
                  everything we do. We are building lasting relationships, not
                  just networks.
                </p>
              </div>
            </div>

            <div
              className={`${
                aboutTextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1"
              } pt-2`}
              style={{
                transition: "all 700ms ease-out",
                transitionDelay: "400ms",
              }}
            >
              <Link
                href="/#teams"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#047857] hover:bg-[#059669] dark:bg-[#34d399] dark:hover:bg-[#10b981] px-8 text-sm font-bold text-white dark:text-black transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Meet Our Team
              </Link>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative">
            {/* Main Image */}
            <div
              ref={aboutRightRef}
              className={`relative rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/20 transition-all duration-700 ease-out will-change-transform ${
                aboutRightInView
                  ? "opacity-100 translate-y-0 scale-[1.02] ring-2 ring-[#059669]/25"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="relative aspect-4/5">
                <Image
                  src={image}
                  alt="NILO FibreNet Office"
                  fill
                  className="object-cover"
                  priority
                  sizes="(min-width:1024px) 50vw, 100vw"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#059669]/10 to-transparent rounded-full blur-3xl" />
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#047857] to-[#059669] dark:from-[#34d399] dark:to-[#10b981] rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300 blur-xl" />
            <div className="relative p-8 space-y-4 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#047857] to-[#059669] dark:from-[#34d399] dark:to-[#10b981] text-white shadow-xl">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Lightning Fast
              </h3>
              <p className="text-sm text-black dark:text-gray-300 leading-relaxed">
                Experience fiber-optic speeds up to 1Gbps. Stream, game, and
                work without buffering or lag.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#10b981] to-[#34d399] dark:from-[#10b981] dark:to-[#34d399] rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300 blur-xl" />
            <div className="relative p-8 space-y-4 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#10b981] to-[#34d399] text-white shadow-xl">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                99.9% Uptime
              </h3>
              <p className="text-sm text-black dark:text-gray-300 leading-relaxed">
                Our robust infrastructure and proactive monitoring ensure you
                stay connected when it matters most.
              </p>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-linear-to-br from-[#059669] to-[#34d399] dark:from-[#059669] dark:to-[#34d399] rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300 blur-xl" />
            <div className="relative p-8 space-y-4 bg-white dark:bg-gray-800 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#059669] to-[#34d399] text-white shadow-xl">
                <svg
                  viewBox="0 0 24 24"
                  className="h-7 w-7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black dark:text-white">
                Local Support
              </h3>
              <p className="text-sm text-black dark:text-gray-300 leading-relaxed">
                Our Bhutanese team speaks your language and understands your
                needs. Real people, real solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WiFi First Section */}
      <section className="py-16 px-6 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857] dark:text-[#34d399]">
              WiFi First
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white leading-tight">
              Blazing WiFi for Home & Business
            </h2>
            <p className="text-base text-black dark:text-gray-300 font-light">
              WiFi is our core focus—built on fibre for consistent speed,
              uptime, and seamless roaming across your space.
            </p>
            <ul className="space-y-3 text-sm text-black dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#047857] dark:bg-[#34d399]" />
                Whole-home coverage with premium routers
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#047857] dark:bg-[#34d399]" />
                Priority support and remote diagnostics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#047857] dark:bg-[#34d399]" />
                Flexible add-ons: mesh extenders, guest WiFi, SLAs
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/plans"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#047857] hover:bg-[#059669] dark:bg-[#34d399] dark:hover:bg-[#10b981] px-8 text-sm font-bold text-white dark:text-black shadow-lg shadow-[#047857]/30 dark:shadow-[#34d399]/30 hover:shadow-xl transition-all duration-300"
              >
                See WiFi Plans
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#047857] dark:border-[#34d399] px-8 text-sm font-bold text-[#047857] dark:text-[#34d399] hover:bg-[#047857] dark:hover:bg-[#34d399] hover:text-white dark:hover:text-black transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(61,82,160,0.08),transparent_50%)]" />
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src={wifi}
                alt="WiFi coverage"
                fill
                className="object-contain"
                priority
                sizes="(min-width:1024px) 40vw, 100vw"
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#047857]">
                Featured
              </p>
              <h3 className="text-2xl font-extrabold text-black dark:text-white">
                Priority WiFi Installation
              </h3>
              <p className="text-sm text-black dark:text-gray-300 leading-relaxed">
                Fast setup, optimal placement, and post-install tuning to
                maximize your speed where you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - NEW PROFESSIONAL SECTION */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857] dark:text-[#34d399]">
              Process
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
              How It{" "}
              <span className="text-[#047857] dark:text-[#34d399]">Works</span>
            </h2>
            <p className="text-base text-black dark:text-gray-300 font-light max-w-2xl mx-auto">
              Get connected in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Choose Plan",
                desc: "Select the perfect WiFi speed for your needs from our flexible plans",
                icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
              },
              {
                step: "02",
                title: "Contact Us",
                desc: "Reach out via phone, email, or online form - we respond within hours",
                icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
              },
              {
                step: "03",
                title: "Installation",
                desc: "Professional fiber setup at your location within 48 hours guaranteed",
                icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z",
              },
              {
                step: "04",
                title: "Enjoy",
                desc: "Start streaming, working, and browsing with blazing-fast speeds instantly",
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Connector Line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-linear-to-r from-[#047857]/20 dark:from-[#34d399]/20 to-[#047857]/5 dark:to-[#34d399]/5 z-0" />
                )}

                <div className="relative z-10 text-center space-y-4">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white dark:bg-gray-800 border-4 border-[#047857]/20 dark:border-[#34d399]/20 group-hover:border-[#047857] dark:group-hover:border-[#34d399] group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <span className="text-3xl font-extrabold text-[#047857] dark:text-[#34d399]">
                      {item.step}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="flex justify-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#047857]/10 dark:bg-[#34d399]/20 group-hover:bg-[#047857] dark:group-hover:bg-[#34d399] transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-[#047857] dark:text-[#34d399] group-hover:text-white transition-colors duration-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d={item.icon}
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-[#047857] hover:bg-[#059669] dark:bg-[#34d399] dark:hover:bg-[#10b981] text-white dark:text-black font-bold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started Today
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section
        className="py-20 px-6 bg-white dark:bg-gray-900"
        aria-labelledby="why-heading"
      >
        <div className="mx-auto max-w-7xl space-y-12">
          <h2
            ref={whyHeaderRef}
            id="why-heading"
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black dark:text-white tracking-tight leading-tight transition-all duration-700 ease-out will-change-transform ${
              whyHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Why Choose{" "}
            <span className="text-[#047857] dark:text-[#34d399]">
              NILO FibreNet
            </span>
          </h2>
          <div className="marquee">
            <div className="marquee-track">
              {[...features, ...features].map((f, i) => (
                <article
                  key={`${f.title}-${i}`}
                  className="mx-8 flex min-w-130 sm:min-w-145 max-w-2xl flex-none items-start gap-5"
                >
                  <div>
                    <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#047857] dark:text-[#34d399]">
                      {f.label}
                    </div>
                    <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-black dark:text-white">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-base sm:text-lg text-black dark:text-white">
                      {f.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Certifications - NEW PROFESSIONAL SECTION */}
      <div className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857] dark:text-[#34d399]">
              Trust & Quality
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
              Why Businesses{" "}
              <span className="text-[#047857] dark:text-[#34d399]">
                Trust Us
              </span>
            </h2>
            <p className="text-base text-black dark:text-gray-300 font-light max-w-2xl mx-auto">
              Certified excellence, proven reliability, and industry-leading
              standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "ISO Certified",
                desc: "Quality management systems meeting international standards",
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "99.9% Uptime",
                desc: "Industry-leading network reliability with redundant infrastructure",
              },
              {
                icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                title: "24/7 Support",
                desc: "Round-the-clock technical assistance from local experts",
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Licensed Provider",
                desc: "Fully licensed and regulated by BICMA (Bhutan InfoComm and Media Authority)",
              },
              {
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                title: "Enterprise Solutions",
                desc: "Scalable fiber solutions for growing businesses",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm dark:shadow-lg hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-[#047857]/30 dark:hover:border-[#34d399]/30"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#047857]/10 dark:bg-[#34d399]/20 group-hover:bg-[#047857] dark:group-hover:bg-[#34d399] transition-all duration-300">
                    <svg
                      className="w-8 h-8 text-[#047857] dark:text-[#34d399] group-hover:text-white transition-colors duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-black dark:text-gray-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Testimonials Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div
            ref={testimonialsHeaderRef}
            className={`text-center space-y-4 mb-16 transition-all duration-700 ease-out will-change-transform ${
              testimonialsHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857] dark:text-[#34d399]">
              Testimonials
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
              What Our{" "}
              <span className="text-[#047857] dark:text-[#34d399]">
                Clients
              </span>{" "}
              Say
            </h2>
            <p className="text-base text-black dark:text-gray-300 font-light max-w-2xl mx-auto">
              Hear from our satisfied customers across Bhutan.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-96 sm:h-80 overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-2xl border border-gray-100 dark:border-gray-700">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeTestimonial
                      ? "opacity-100 translate-x-0"
                      : index < activeTestimonial
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 sm:p-12 text-center">
                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-[#047857] dark:text-[#34d399]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Feedback */}
                    <blockquote className="text-lg sm:text-xl text-black dark:text-gray-300 font-light italic mb-8 max-w-2xl leading-relaxed">
                      {testimonial.feedback}
                    </blockquote>

                    {/* Client Info */}
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-black dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#047857] dark:text-[#34d399] font-semibold">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-black dark:text-gray-400 opacity-60 uppercase tracking-wide">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? "w-8 bg-[#047857] dark:bg-[#34d399]"
                      : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setActiveTestimonial(
                  (prev) =>
                    (prev - 1 + testimonials.length) % testimonials.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-black dark:text-white group-hover:text-[#047857] transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-black dark:text-white group-hover:text-[#047857] transition-colors"
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
            </button>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-20 px-4 sm:px-6 bg-linear-to-b from-gray-50 dark:from-gray-800 to-white dark:to-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857] dark:text-[#34d399]">
              News & Updates
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
              Latest from{" "}
              <span className="text-[#047857] dark:text-[#34d399]">
                NILO FibreNet
              </span>
            </h2>
            <p className="text-sm sm:text-base text-black dark:text-gray-300 font-light max-w-2xl mx-auto">
              Stay informed about our latest network expansions, product
              launches, and company updates.
            </p>
          </div>

          {/* Mobile Stack, Tablet/Desktop Grid */}
          <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 hidden">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {/* Featured Image Placeholder */}
                <div className="relative w-full h-40 bg-[#f2f4f7] dark:bg-[#1f2937] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#e5e7eb] dark:group-hover:bg-[#111827]">
                  <span className="text-5xl">📰</span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  {/* Date & Category */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#047857] dark:text-[#34d399] uppercase tracking-wide">
                      {item.category}
                    </span>
                    <span className="text-xs text-black dark:text-gray-400 opacity-60">
                      {item.date}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-linear-to-r from-[#047857]/20 dark:from-[#34d399]/20 to-transparent mb-4" />

                  {/* Title */}
                  <h3 className="text-lg font-bold text-black dark:text-white mb-3 group-hover:text-[#047857] dark:group-hover:text-[#34d399] transition-colors">
                    {item.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-black dark:text-gray-300 leading-relaxed mb-5 line-clamp-3 grow">
                    {item.excerpt}
                  </p>

                  {/* Read More Link */}
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#047857] dark:text-[#34d399] hover:text-[#059669] dark:hover:text-[#10b981] transition-colors group/link"
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
              </div>
            ))}
          </div>

          {/* Mobile Stack View - Vertical Cards */}
          <div className="space-y-4 md:hidden">
            {news.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md active:shadow-sm transition-all duration-300 overflow-hidden group"
                style={{
                  animation: `slideIn 0.4s ease-out ${idx * 0.1}s both`,
                }}
              >
                <style>{`
                  @keyframes slideIn {
                    from {
                      opacity: 0;
                      transform: translateY(10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                <div className="flex gap-4 p-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-[#f0fdf9] dark:bg-[#034e3b] flex items-center justify-center text-2xl">
                    📰
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-[#047857] dark:text-[#34d399] uppercase tracking-wider flex-shrink-0">
                        {item.category}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-sm font-bold text-black dark:text-white line-clamp-2 group-active:text-[#047857] dark:group-active:text-[#34d399] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-1 mt-1">
                      {item.excerpt}
                    </p>
                    <Link
                      href={item.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#047857] dark:text-[#34d399] mt-3 hover:text-[#059669] dark:hover:text-[#10b981] transition-colors"
                    >
                      Read More
                      <svg
                        className="w-3 h-3"
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
                </div>
              </div>
            ))}
          </div>

          {/* View All News CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/news"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#047857] dark:border-[#34d399] px-8 text-sm font-bold text-[#047857] dark:text-[#34d399] hover:bg-[#047857] dark:hover:bg-[#34d399] hover:text-white dark:hover:text-black transition-all duration-300"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section
        id="teams"
        className="py-20 px-4 sm:px-6 bg-white dark:bg-gray-900"
      >
        <div className="mx-auto max-w-7xl">
          <div
            ref={teamsHeaderRef}
            className={`text-center space-y-4 mb-16 transition-all duration-700 ease-out will-change-transform ${
              teamsHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857] dark:text-[#34d399]">
              Meet the Team
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black dark:text-white tracking-tight">
              Our Expert{" "}
              <span className="text-[#047857] dark:text-[#34d399]">Team</span>{" "}
              in Bhutan
            </h2>
            <p className="text-sm sm:text-base text-black dark:text-gray-300 font-light max-w-2xl mx-auto">
              Dedicated professionals ensuring top-notch service and support.
            </p>
          </div>

          {/* Desktop Grid - Hide on mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 max-w-5xl mx-auto">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="group rounded-2xl bg-white dark:bg-gray-800 p-4 shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image Placeholder */}
                <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden bg-linear-to-br from-[#047857]/10 dark:from-[#34d399]/20 to-[#059669]/10 dark:to-[#10b981]/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  />
                </div>

                {/* Member Info */}
                <div className="text-center space-y-1.5">
                  <h3 className="text-lg font-bold text-black dark:text-white group-hover:text-[#047857] dark:group-hover:text-[#34d399] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#047857] dark:text-[#34d399] font-semibold">
                    {member.role}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-2 pt-3">
                    <a
                      href="#"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-[#047857] hover:text-white transition-colors"
                      aria-label="LinkedIn"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-[#047857] hover:text-white transition-colors"
                      aria-label="Email"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Card Layout */}
          <div className="space-y-4 md:hidden">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div
                key={index}
                className="rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md active:shadow-sm transition-all duration-300 overflow-hidden group"
                style={{
                  animation: `slideIn 0.4s ease-out ${index * 0.1}s both`,
                }}
              >
                <style>{`
                  @keyframes slideIn {
                    from {
                      opacity: 0;
                      transform: translateY(10px);
                    }
                    to {
                      opacity: 1;
                      transform: translateY(0);
                    }
                  }
                `}</style>
                <div className="flex gap-4 p-4">
                  {/* Image */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden bg-linear-to-br from-[#047857]/10 to-[#059669]/10 dark:from-[#34d399]/20 dark:to-[#10b981]/20">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover group-active:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-black dark:text-white group-active:text-[#047857] dark:group-active:text-[#34d399] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#047857] dark:text-[#34d399] font-semibold mt-1">
                      {member.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2 mt-3">
                      <a
                        href="#"
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-[#047857] dark:hover:bg-[#047857] hover:text-white transition-colors text-xs"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center w-7 h-7 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-[#047857] dark:hover:bg-[#047857] hover:text-white transition-colors text-xs"
                        aria-label="Email"
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Team CTA */}
          <div className="mt-12 text-center">
            <Link
              href="/teams"
              className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#047857] dark:border-[#34d399] px-8 text-sm font-bold text-[#047857] dark:text-[#34d399] hover:bg-[#047857] dark:hover:bg-[#34d399] hover:text-white dark:hover:text-black transition-all duration-300"
            >
              View All Team Members
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl space-y-10">
          <div
            ref={contactHeaderRef}
            className={`space-y-4 text-center transition-all duration-700 ease-out will-change-transform ${
              contactHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white tracking-tight">
              Contact Us
            </h2>
            <p className="text-base text-black dark:text-gray-300 font-light max-w-2xl mx-auto">
              Have a question or need a custom plan? Send us a message.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <a
              href="tel:+97517608088"
              className="flex items-center gap-4 p-6 rounded-2xl bg-linear-to-br from-[#047857]/10 dark:from-[#34d399]/20 to-[#059669]/10 dark:to-[#10b981]/20 border border-[#047857]/20 dark:border-[#34d399]/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#047857] dark:bg-[#34d399] shadow-lg">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#047857] dark:text-[#34d399] uppercase tracking-wide">
                  Call Us
                </p>
                <p className="text-lg font-bold text-black dark:text-white group-hover:text-[#047857] dark:group-hover:text-[#34d399] transition-colors">
                  +975 77 88 88 66
                </p>
              </div>
            </a>

            <a
              href="mailto:nima.lotey@gmail.com"
              className="flex items-center gap-4 p-6 rounded-2xl bg-linear-to-br from-[#059669]/10 dark:from-[#10b981]/20 to-[#10b981]/10 dark:to-[#34d399]/20 border border-[#059669]/20 dark:border-[#10b981]/30 hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#059669] dark:bg-[#10b981] shadow-lg">
                <svg
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-[#059669] dark:text-[#10b981] uppercase tracking-wide">
                  Email Us
                </p>
                <p className="text-lg font-bold text-black dark:text-white group-hover:text-[#059669] dark:group-hover:text-[#10b981] transition-colors">
                  nima.lotey@gmail.com
                </p>
              </div>
            </a>
          </div>

          {submitted ? (
            <div className="rounded-2xl border-2 border-green-200 dark:border-green-600 bg-green-50 dark:bg-green-900/20 p-6 text-green-800 dark:text-green-200 font-semibold text-center shadow-lg text-base">
              Thank you! Your message has been submitted.
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 bg-linear-to-br from-gray-50 dark:from-gray-800 to-white dark:to-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-xl"
            >
              <div className="sm:col-span-1">
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold text-black dark:text-white uppercase tracking-wide mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#047857] dark:focus:ring-[#34d399] focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold text-black dark:text-white uppercase tracking-wide mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#047857] dark:focus:ring-[#34d399] focus:border-transparent transition-all duration-200"
                  placeholder="nima.lotey@gmail.com"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold text-black dark:text-white uppercase tracking-wide mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 px-4 py-3 text-sm text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#047857] dark:focus:ring-[#34d399] focus:border-transparent transition-all duration-200"
                  placeholder="Tell us how we can help..."
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-600 dark:text-red-400 font-semibold">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-[#047857] hover:bg-[#059669] dark:bg-[#34d399] dark:hover:bg-[#10b981] px-10 text-sm font-bold text-white dark:text-black shadow-lg shadow-[#047857]/30 dark:shadow-[#34d399]/30 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Submit Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
