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
      role: "Fibre Technician Head",
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

  return (
    <main
      className={`min-h-screen bg-white overflow-x-hidden ${inter.className}`}
    >
      {/* Hero Section */}
      <section
        id="hero"
        className="py-20 px-6 bg-linear-to-b from-white via-[#7091E6]/5 to-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
            <div
              ref={heroTextRef}
              className={`flex flex-col justify-center space-y-6 transition-all duration-700 ease-out will-change-transform ${
                heroTextInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p
                className={`text-[10px] font-bold text-[#3D52A0] uppercase tracking-[0.2em] ${
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
                className={`text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl leading-[1.1] ${
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
                <span className="text-[#3D52A0]">Digital Services</span> in
                Bhutan
              </h1>
              <p
                className={`${
                  heroTextInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                } text-base text-gray-600 leading-relaxed font-light`}
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
                } flex flex-col gap-4 sm:flex-row pt-2`}
                style={{
                  transition: "all 700ms ease-out",
                  transitionDelay: "400ms",
                }}
              >
                <Link
                  href="/#services"
                  className="group inline-flex h-12 items-center justify-center rounded-xl bg-[#3D52A0] px-8 text-sm font-bold text-white shadow-lg shadow-[#3D52A0]/30 hover:bg-[#7091E6] hover:shadow-xl hover:shadow-[#7091E6]/40 transition-all duration-300 hover:scale-105"
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
                  className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 text-sm font-bold text-gray-900 hover:border-[#7091E6] hover:bg-[#7091E6]/5 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div
              ref={heroRightRef}
              className={`relative hidden lg:flex items-center justify-center h-112.5 rounded-3xl bg-linear-to-br from-[#ADBBDA] via-[#7091E6]/20 to-white shadow-2xl overflow-hidden transition-all duration-700 ease-out will-change-transform ${
                heroRightInView
                  ? "opacity-100 translate-y-0 scale-105 ring-2 ring-[#7091E6]/30"
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
              />
            </div>
          </div>
        </div>
      </section>

      {/* WiFi First Section */}
      <section className="py-16 px-6 bg-linear-to-r from-[#3D52A0]/5 via-white to-[#7091E6]/5">
        <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0]">
              WiFi First
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Blazing WiFi for Home & Business
            </h2>
            <p className="text-base text-gray-600 font-light">
              WiFi is our core focus—built on fibre for consistent speed,
              uptime, and seamless roaming across your space.
            </p>
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#3D52A0]" />
                Whole-home coverage with premium routers
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#3D52A0]" />
                Priority support and remote diagnostics
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#3D52A0]" />
                Flexible add-ons: mesh extenders, guest WiFi, SLAs
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/plans"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#3D52A0] px-8 text-sm font-bold text-white shadow-lg shadow-[#3D52A0]/30 hover:bg-[#7091E6] transition-all duration-300"
              >
                See WiFi Plans
              </Link>
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-xl border-2 border-[#3D52A0]/30 px-8 text-sm font-bold text-[#3D52A0] hover:bg-[#3D52A0]/5 transition-all duration-300"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(61,82,160,0.08),transparent_50%)]" />
            <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
              <Image
                src={wifi}
                alt="WiFi coverage"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#3D52A0]">
                Featured
              </p>
              <h3 className="text-2xl font-extrabold text-gray-900">
                Priority WiFi Installation
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Fast setup, optimal placement, and post-install tuning to
                maximize your speed where you need it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-linear-to-r from-[#7091E6]/5 via-[#EDE8F5]/5 to-[#7091E6]/5">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center space-y-2 group cursor-default"
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-linear-to-br from-[#3D52A0] to-[#7091E6] tracking-tight group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  className={`text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0] ${
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
                  className={`text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-[1.1] ${
                    aboutTextInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-1"
                  }`}
                  style={{
                    transition: "all 700ms ease-out",
                    transitionDelay: "200ms",
                  }}
                >
                  Connecting, <span className="text-[#8697C4]">One Home</span>{" "}
                  at a Time
                </h2>
              </div>

              <div
                className={`${
                  aboutTextInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                } space-y-5 text-gray-600 text-base leading-relaxed font-light`}
                style={{
                  transition: "all 700ms ease-out",
                  transitionDelay: "300ms",
                }}
              >
                <p>
                  Since our founding, NILO FibreNet has been committed to
                  bridging the digital divide across Bhutan. We believe that
                  reliable internet access is not just a luxury, it is a
                  necessity for education, business, and staying connected with
                  loved ones.
                </p>
                <p>
                  What started as a vision to bring high-speed connectivity to
                  underserved communities has grown into a trusted network
                  serving thousands of homes and businesses throughout the
                  country. Our fiber-optic infrastructure delivers blazing-fast
                  speeds while our local team ensures you are never left
                  disconnected.
                </p>
              </div>

              {/* Mission & Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="space-y-3 p-5 rounded-2xl bg-linear-to-br from-[#7091E6]/10 to-transparent border border-[#7091E6]/20 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3D52A0] shadow-lg shadow-[#3D52A0]/30">
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
                    <h3 className="text-lg font-bold text-gray-900">
                      Our Mission
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To empower every household and business in Bhutan with
                    world-class connectivity that drives growth and opportunity.
                  </p>
                </div>

                <div className="space-y-3 p-5 rounded-2xl bg-linear-to-br from-[#8697C4]/10 to-transparent border border-[#8697C4]/20 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#8697C4] shadow-lg shadow-[#8697C4]/30">
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
                    <h3 className="text-lg font-bold text-gray-900">
                      Our Values
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
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
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-gray-900 px-8 text-sm font-bold text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
                    ? "opacity-100 translate-y-0 scale-[1.02] ring-2 ring-[#7091E6]/25"
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
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-radial from-[#7091E6]/10 to-transparent rounded-full blur-3xl" />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#3D52A0] to-[#7091E6] rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300 blur-xl" />
              <div className="relative p-8 space-y-4 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#3D52A0] to-[#7091E6] text-white shadow-xl shadow-[#3D52A0]/30">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Lightning Fast
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Experience fiber-optic speeds up to 1Gbps. Stream, game, and
                  work without buffering or lag.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#8697C4] to-[#ADBBDA] rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300 blur-xl" />
              <div className="relative p-8 space-y-4 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#8697C4] to-[#ADBBDA] text-white shadow-xl shadow-[#8697C4]/30">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  99.9% Uptime
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our robust infrastructure and proactive monitoring ensure you
                  stay connected when it matters most.
                </p>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-linear-to-br from-[#7091E6] to-[#ADBBDA] rounded-3xl opacity-0 group-hover:opacity-10 transform group-hover:scale-105 transition-all duration-300 blur-xl" />
              <div className="relative p-8 space-y-4 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#7091E6] to-[#ADBBDA] text-white shadow-xl shadow-[#7091E6]/30">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  Local Support
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our Bhutanese team speaks your language and understands your
                  needs. Real people, real solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-6 bg-linear-to-b from-gray-50 to-white"
      >
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-4x1 bg-linear-to-br from-white via-gray-50 to-[#EDE8F5]/20 p-12 sm:p-16 shadow-xl border border-gray-100">
            <div
              ref={servicesHeaderRef}
              className={`mb-12 max-w-3xl space-y-4 transition-all duration-700 ease-out will-change-transform ${
                servicesHeaderInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p
                className={`${
                  servicesHeaderInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                } text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0]`}
                style={{
                  transition: "all 700ms ease-out",
                  transitionDelay: "100ms",
                }}
              >
                Services
              </p>
              <h2
                className={`${
                  servicesHeaderInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                } text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight`}
                style={{
                  transition: "all 700ms ease-out",
                  transitionDelay: "200ms",
                }}
              >
                Built for <span className="text-[#3D52A0]">speed</span>,
                reliability, and{" "}
                <span className="text-[#7091E6]">security</span>
              </h2>
              <p
                className={`${
                  servicesHeaderInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-1"
                } text-base text-gray-600 font-light`}
                style={{
                  transition: "all 700ms ease-out",
                  transitionDelay: "300ms",
                }}
              >
                Choose the right solution for your home or business. Premium
                connectivity with local support.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Internet */}
              <div
                ref={internetCardRef}
                className={`group hover-spotlight overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg backdrop-blur transition-all duration-700 ease-out will-change-transform hover:-translate-y-2 hover:border-[#3D52A0]/50 hover:shadow-2xl hover:shadow-[#3D52A0]/20 ${
                  internetCardInView
                    ? "opacity-100 -translate-y-2 border-[#3D52A0]/50 shadow-2xl shadow-[#3D52A0]/20"
                    : "opacity-0 translate-y-6"
                }`}
                onMouseMove={(e) => {
                  const rect = (
                    e.currentTarget as HTMLDivElement
                  ).getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center rounded-full bg-[#3D52A0]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#3D52A0]">
                    Top Pick
                  </span>
                  <span className="text-xs font-semibold text-gray-500">
                    Primary Service
                  </span>
                </div>
                {/* Replace placeholder with image */}
                <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={wifi}
                    alt="WiFi Router"
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 33vw, 100vw"
                    priority
                  />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#3D52A0] to-[#7091E6] text-white shadow-xl shadow-[#3D52A0]/40">
                  {/* WiFi Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 20h.01" />
                    <path d="M8.5 16.5a5 5 0 0 1 7 0" />
                    <path d="M6 14a8 8 0 0 1 12 0" />
                    <path d="M3.5 11.5a11.5 11.5 0 0 1 17 0" />
                  </svg>
                </div>
                <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#3D52A0]">
                  Internet
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                  WiFi / Fibre Internet
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Our flagship service: fibre-backed WiFi with pro-grade
                  routing, coverage tuning, and priority support for always-on
                  connectivity.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-[#3D52A0] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#7091E6] hover:shadow-lg hover:shadow-[#3D52A0]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0] group-hover:scale-105"
                >
                  Get Started
                </Link>
              </div>

              {/* TV */}
              <div
                ref={tvCardRef}
                className={`group hover-spotlight overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg backdrop-blur transition-all duration-700 ease-out will-change-transform hover:-translate-y-2 hover:border-[#7091E6]/50 hover:shadow-2xl hover:shadow-[#7091E6]/20 ${
                  tvCardInView
                    ? "opacity-100 -translate-y-2 border-[#7091E6]/50 shadow-2xl shadow-[#7091E6]/20"
                    : "opacity-0 translate-y-6"
                }`}
                onMouseMove={(e) => {
                  const rect = (
                    e.currentTarget as HTMLDivElement
                  ).getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                {/* Replace placeholder with image */}
                <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={tv}
                    alt="TV Service"
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#7091E6] to-[#8697C4] text-white shadow-xl shadow-[#7091E6]/40">
                  {/* TV Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="6" width="18" height="12" rx="2" ry="2" />
                    <path d="M8 21h8" />
                  </svg>
                </div>
                <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#7091E6]">
                  TV
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                  TV Services
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  HD channels across sports, movies, and entertainment with
                  flexible packages. Crystal-clear picture quality with our
                  advanced TV delivery system.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-[#7091E6] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#8697C4] hover:shadow-lg hover:shadow-[#7091E6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7091E6] group-hover:scale-105"
                >
                  Get Started
                </Link>
              </div>

              {/* CCTV */}
              <div
                ref={cctvCardRef}
                className={`group hover-spotlight overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-lg backdrop-blur transition-all duration-700 ease-out will-change-transform hover:-translate-y-2 hover:border-[#8697C4]/50 hover:shadow-2xl hover:shadow-[#8697C4]/20 ${
                  cctvCardInView
                    ? "opacity-100 -translate-y-2 border-[#8697C4]/50 shadow-2xl shadow-[#8697C4]/20"
                    : "opacity-0 translate-y-6"
                }`}
                onMouseMove={(e) => {
                  const rect = (
                    e.currentTarget as HTMLDivElement
                  ).getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              >
                {/* Replace placeholder with image */}
                <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={cctv}
                    alt="CCTV Cameras"
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 33vw, 100vw"
                  />
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-[#8697C4] to-[#ADBBDA] text-white shadow-xl shadow-[#8697C4]/40">
                  {/* Shield Icon */}
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l7 4v5c0 5-3.5 9-7 11-3.5-2-7-6-7-11V6l7-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="mt-4 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#8697C4]">
                  Security
                </span>
                <h3 className="mt-2 text-lg font-extrabold text-gray-900">
                  CCTV Services
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  Professional installation, 24/7 monitoring, and expert support
                  for peace of mind. High-definition surveillance cameras with
                  cloud storage.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-[#8697C4] px-5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#ADBBDA] hover:shadow-lg hover:shadow-[#8697C4]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8697C4] group-hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>

            {/* soft glow accents */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#3D52A0]/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-32 -bottom-32 h-96 w-96 rounded-full bg-[#7091E6]/10 blur-3xl" />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-white" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl space-y-12">
          <h2
            ref={whyHeaderRef}
            id="why-heading"
            className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight transition-all duration-700 ease-out will-change-transform ${
              whyHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Why Choose <span className="text-[#3D52A0]">NILO FibreNet</span>
          </h2>
          <div className="marquee">
            <div className="marquee-track">
              {[...features, ...features].map((f, i) => (
                <article
                  key={`${f.title}-${i}`}
                  className="mx-8 flex min-w-130 sm:min-w-145 max-w-2xl flex-none items-start gap-5"
                >
                  <div>
                    <div className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#3D52A0]">
                      {f.label}
                    </div>
                    <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-black">
                      {f.title}
                    </h3>
                    <p className="mt-2 text-base sm:text-lg text-gray-700">
                      {f.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="py-20 px-6 bg-linear-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl">
          <div
            ref={testimonialsHeaderRef}
            className={`text-center space-y-4 mb-16 transition-all duration-700 ease-out will-change-transform ${
              testimonialsHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0]">
              Testimonials
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              What Our <span className="text-[#3D52A0]">Clients</span> Say
            </h2>
            <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Hear from our satisfied customers across Bhutan.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-96 sm:h-80 overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
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
                          className="w-5 h-5 text-[#3D52A0]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Feedback */}
                    <blockquote className="text-lg sm:text-xl text-gray-700 font-light italic mb-8 max-w-2xl leading-relaxed">
                      {testimonial.feedback}
                    </blockquote>

                    {/* Client Info */}
                    <div className="space-y-1">
                      <p className="text-lg font-bold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-[#3D52A0] font-semibold">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
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
                      ? "w-8 bg-[#3D52A0]"
                      : "w-2.5 bg-gray-300 hover:bg-gray-400"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-[#3D52A0] transition-colors"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 hover:scale-110 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <svg
                className="w-5 h-5 text-gray-600 group-hover:text-[#3D52A0] transition-colors"
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

      {/* Meet the Team Section */}
      <section
        id="teams"
        className="py-20 px-6 bg-linear-to-b from-white via-[#7091E6]/5 to-gray-50"
      >
        <div className="mx-auto max-w-7xl space-y-10">
          <div
            ref={teamsHeaderRef}
            className={`space-y-4 text-center transition-all duration-700 ease-out will-change-transform ${
              teamsHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="space-y-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0]">
                Our Team
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
                Meet the <span className="text-[#3D52A0]">Experts</span>
              </h2>
              <p className="text-base text-gray-600 max-w-3xl mx-auto font-light">
                A dedicated local team committed to keeping you connected.
              </p>
            </div>
          </div>

          {/* Team Carousel */}
          <div className="relative max-w-4xl mx-auto">
            {/* Main Carousel */}
            <div className="relative h-96 sm:h-125 overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === activeTeamMember
                      ? "opacity-100 translate-x-0"
                      : index < activeTeamMember
                      ? "opacity-0 -translate-x-full"
                      : "opacity-0 translate-x-full"
                  }`}
                >
                  {/* Mobile Layout */}
                  <div className="sm:hidden relative w-full h-full flex flex-col items-center justify-center group">
                    {/* Image Background */}
                    {member.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover object-center"
                          priority
                        />
                      </div>
                    ) : (
                      <div className="w-full h-full bg-linear-to-br from-[#7091E6]/10 to-[#EDE8F5]/10 flex items-center justify-center text-center">
                        <div>
                          <p className="text-8xl mb-4">👤</p>
                          <p className="text-sm text-gray-500 font-medium">
                            Photo coming soon
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Name & Role - Bottom Card */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-extrabold">{member.name}</h3>
                      <p className="text-sm font-semibold text-[#7091E6] uppercase tracking-wide mt-2">
                        {member.role}
                      </p>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden sm:grid sm:grid-cols-2 h-full items-center">
                    {/* Image Section */}
                    <div className="relative w-full h-full bg-linear-to-br from-[#7091E6]/10 to-[#EDE8F5]/10 flex items-center justify-center order-1">
                      {member.image ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-center"
                            priority
                            sizes="(min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-6xl mb-4">👤</p>
                          <p className="text-sm text-gray-500 font-medium">
                            Photo coming soon
                          </p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>

                    {/* Info Section */}
                    <div className="p-8 sm:p-12 flex flex-col justify-center order-2 space-y-6 h-full">
                      <div className="space-y-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3D52A0]">
                          {member.role}
                        </p>
                        <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                          {member.name}
                        </h3>
                      </div>

                      <div className="space-y-3 pt-4">
                        <p className="text-gray-600 font-light leading-relaxed">
                          Dedicated member of the NILO FibreNet team, committed
                          to delivering exceptional service and connectivity to
                          our valued customers across Bhutan.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 rounded-2xl bg-[#3D52A0]/10 border border-[#3D52A0]/20">
                          <p className="text-xs font-bold text-[#3D52A0] uppercase tracking-wide">
                            Position
                          </p>
                          <p className="text-sm font-semibold text-gray-900 mt-1">
                            {member.role}
                          </p>
                        </div>
                        <div className="p-4 rounded-2xl bg-[#7091E6]/10 border border-[#7091E6]/20">
                          <p className="text-xs font-bold text-[#7091E6] uppercase tracking-wide">
                            Team
                          </p>
                          <p className="text-sm font-semibold text-gray-900 mt-1">
                            NILO FibreNet
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6 sm:mt-8 flex-wrap">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTeamMember(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === activeTeamMember
                      ? "w-8 bg-[#3D52A0]"
                      : "w-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to team member ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setActiveTeamMember(
                  (prev) => (prev - 1 + teamMembers.length) % teamMembers.length
                )
              }
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-[#3D52A0] hover:text-white hover:scale-110 transition-all duration-300 group z-10"
              aria-label="Previous team member"
            >
              <svg
                className="w-5 h-5 transition-colors"
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
                setActiveTeamMember((prev) => (prev + 1) % teamMembers.length)
              }
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-[#3D52A0] hover:text-white hover:scale-110 transition-all duration-300 group z-10"
              aria-label="Next team member"
            >
              <svg
                className="w-5 h-5 transition-colors"
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

          {/* Team Grid - All Members */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Full Team Directory
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="text-center p-4 rounded-2xl hover:bg-[#7091E6]/5 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="w-20 h-20 rounded-full bg-linear-to-br from-[#3D52A0] to-[#7091E6] mx-auto mb-3 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {member.image ? (
                      <div className="relative w-full h-full rounded-full overflow-hidden">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      "👤"
                    )}
                  </div>
                  <p className="font-bold text-sm text-gray-900">
                    {member.name}
                  </p>
                  <p className="text-xs text-[#3D52A0] font-semibold uppercase tracking-wide mt-1">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="mx-auto max-w-4xl space-y-10">
          <div
            ref={contactHeaderRef}
            className={`space-y-4 text-center transition-all duration-700 ease-out will-change-transform ${
              contactHeaderInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
              Contact Us
            </h2>
            <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
              Have a question or need a custom plan? Send us a message.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border-2 border-green-200 bg-green-50 p-6 text-green-800 font-semibold text-center shadow-lg text-base">
              Thank you! Your message has been submitted.
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 bg-linear-to-br from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-xl"
            >
              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3D52A0] focus:border-transparent transition-all duration-200"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-2 text-xs text-red-600 font-semibold">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="sm:col-span-1">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3D52A0] focus:border-transparent transition-all duration-200"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-xs text-red-600 font-semibold">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3D52A0] focus:border-transparent transition-all duration-200"
                  placeholder="Tell us how we can help..."
                />
                {errors.message && (
                  <p className="mt-2 text-xs text-red-600 font-semibold">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-[#3D52A0] to-[#7091E6] px-10 text-sm font-bold text-white shadow-lg shadow-[#3D52A0]/30 hover:shadow-xl hover:shadow-[#3D52A0]/40 transition-all duration-300 hover:scale-105"
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
