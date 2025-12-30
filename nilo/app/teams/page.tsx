import Link from "next/link";
import Image from "next/image";
import ceo from "../images/CEO.jpg";
import Sonam from "../images/Sonam.jpg";
import Dorji from "../images/Dorji.jpg";
import Rinchen from "../images/Rinchen.jpg";
import Tulasi from "../images/Tulasi.jpg";
import Karma from "../images/Karma.jpg";
import Chimi from "../images/Chimi.jpg";

const team = [
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

export default function TeamPage() {
  return (
    <main id="main-content" className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center space-y-4 mb-16">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#047857]">
            Meet the Team
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Expert <span className="text-[#047857]">Team</span> in Bhutan
          </h1>
          <p className="text-base text-gray-600 font-light max-w-2xl mx-auto">
            Dedicated professionals ensuring top-notch service and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl bg-white p-4 shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-square mb-3 rounded-xl overflow-hidden bg-linear-to-br from-[#047857]/10 to-[#059669]/10">
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
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#047857] transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-[#047857] font-semibold">
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

        {/* Back to Home */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-[#047857] px-8 text-sm font-bold text-white hover:bg-[#059669] transition-all duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
