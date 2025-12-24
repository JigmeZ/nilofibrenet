import Link from "next/link";

const team = [
  {
    name: "Sonam Dorji",
    role: "Network Engineer",
    bio: "Designs and maintains fibre networks for peak reliability.",
  },
  {
    name: "Pema Choden",
    role: "Customer Success Lead",
    bio: "Ensures smooth onboarding and ongoing customer care.",
  },
  {
    name: "Karma Wangchuk",
    role: "Field Technician",
    bio: "Handles on-site installations and rapid support.",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-3xl font-bold text-black dark:text-white">
          Meet the Team
        </h1>
        <p className="mt-4 max-w-2xl text-zinc-700 dark:text-zinc-300">
          A dedicated local team committed to keeping you connected.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-100 text-black dark:bg-zinc-800 dark:text-white">
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {m.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {m.role}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
                {m.bio}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-flex h-11 items-center justify-center rounded-md bg-black px-5 text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Work with us
          </Link>
        </div>
      </div>
    </main>
  );
}
