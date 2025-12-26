import Link from "next/link";

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          About NILO FibreNet
        </h1>
        <p className="mt-4 text-zinc-700 dark:text-zinc-300">
          We deliver reliable fibre internet, TV, and CCTV services to homes and
          businesses across Bhutan. Our mission is to keep communities connected
          with fast speeds, stable service, and local support.
        </p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-black dark:text-white">
            Our Values
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
            <li>Customer-first service and transparent communication</li>
            <li>Dependable infrastructure and proactive maintenance</li>
            <li>Local expertise with responsive support</li>
          </ul>
        </section>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-black px-5 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3D52A0]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}
