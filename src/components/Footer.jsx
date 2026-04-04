import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="px-6 pb-8 pt-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[34px] border border-black/6 bg-white/80 shadow-[0_24px_70px_rgba(15,23,42,0.07)] backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2ff]" />
          <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-[#6366f1]/10 blur-3xl" />
          <div className="absolute -right-10 bottom-0 h-32 w-32 rounded-full bg-[#06b6d4]/10 blur-3xl" />

          <div className="relative z-10 px-6 py-8 md:px-8 md:py-9">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              {/* left */}
              <div className="md:col-span-5">
                <p
                  style={{ fontFamily: "Gilroy-Medium" }}
                  className="text-2xl font-extrabold tracking-tight text-[#111827]"
                >
                  Rohit Kewat
                </p>
                <p className="mt-2 max-w-sm text-sm leading-7 text-black/50">
                  Frontend developer building clean, modern, and professional
                  websites for brands, portfolios, and businesses.
                </p>
              </div>

              {/* center */}
              <div className="md:col-span-4">
                <div className="rounded-[24px] border border-black/6 bg-white/70 px-5 py-4 backdrop-blur">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#4f46e5]">
                    Available For
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#111827]">
                    Freelance projects & collaborations
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="md:col-span-3 md:text-right">
                <a
                  href="mailto:yourmail@gmail.com"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4f46e5]"
                >
                  Let’s work together
                  <FiArrowUpRight className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-black/6 pt-5 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3">
                <a
                  href="mailto:yourmail@gmail.com"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-white text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] hover:text-white"
                  aria-label="Email"
                >
                  <FiMail size={16} />
                </a>

                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-white text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] hover:text-white"
                  aria-label="GitHub"
                >
                  <FiGithub size={16} />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/8 bg-white text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin size={16} />
                </a>
              </div>

              <p className="text-sm text-black/40">
                © 2026 Rohit Kewat. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
