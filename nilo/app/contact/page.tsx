"use client";

import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export default function ContactPage() {
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

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!name.trim()) nextErrors.name = "Name is required.";
    if (!email.trim()) nextErrors.email = "Email is required.";
    else if (!validateEmail(email)) nextErrors.email = "Enter a valid email.";
    if (!message.trim()) nextErrors.message = "Message is required.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) setSubmitted(true);
  };

  return (
    <main
      className={`min-h-screen bg-linear-to-b from-white via-gray-50 to-white ${inter.className}`}
    >
      <div className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center space-y-4 mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9EB371]">
            Get in Touch
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
            Have questions about our services? We are here to help. Send us a
            message and we will get back to you shortly.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-3xl border-2 border-green-200 bg-green-50 p-8 text-green-800 font-semibold text-center shadow-xl text-base">
            ✓ Thank you! Your message has been submitted successfully.
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-6 bg-white p-10 rounded-3xl border border-gray-100 shadow-2xl"
          >
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9EB371] focus:border-transparent transition-all duration-200"
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-2 text-xs text-red-600 font-semibold">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9EB371] focus:border-transparent transition-all duration-200"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-2 text-xs text-red-600 font-semibold">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-wide mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                className="w-full rounded-xl border-2 border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#9EB371] focus:border-transparent transition-all duration-200"
                placeholder="Tell us how we can help..."
              />
              {errors.message && (
                <p className="mt-2 text-xs text-red-600 font-semibold">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full inline-flex h-12 items-center justify-center rounded-xl bg-linear-to-r from-[#9EB371] to-[#8ca160] px-10 text-sm font-bold text-white shadow-lg shadow-[#9EB371]/30 hover:shadow-xl hover:shadow-[#9EB371]/40 transition-all duration-300 hover:scale-[1.02]"
            >
              Submit Message
            </button>
          </form>
        )}
      </div>
    </main>
  );
}
