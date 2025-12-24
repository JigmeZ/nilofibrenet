import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Our Services
        </h1>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              WiFi / Fibre Internet
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>High-speed fibre internet</li>
              <li>Stable & reliable connection</li>
              <li>Home & business plans</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Learn more
            </Link>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              TV Services
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>HD channels</li>
              <li>Sports & entertainment</li>
              <li>Affordable packages</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Learn more
            </Link>
          </div>

          <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
            <h2 className="text-xl font-semibold text-black dark:text-white">
              CCTV Services
            </h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-600 dark:text-zinc-400">
              <li>Home & office security</li>
              <li>24/7 monitoring</li>
              <li>Installation & support</li>
            </ul>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-10 items-center justify-center rounded-md bg-black px-4 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Learn more
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
