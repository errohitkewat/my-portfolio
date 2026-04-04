import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40"
    >
      {/* soft background */}
      <div className="absolute inset-0 -z-20 bg-[#f8fafc]" />
      <div className="absolute left-[-120px] top-20 -z-10 h-[320px] w-[320px] rounded-full bg-[#6366f1]/12 blur-3xl" />
      <div className="absolute right-[-100px] bottom-10 -z-10 h-[280px] w-[280px] rounded-full bg-[#06b6d4]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        {/* left content */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-4 py-2 shadow-sm backdrop-blur"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#4f46e5]">
              Available for freelance projects
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.05 }}
            className="max-w-4xl text-5xl font-extrabold font-gilroyMedium tracking-tight text-[#111827] sm:text-6xl lg:text-7xl"
          >
            I Create
            <span className="block">Modern Websites</span>
            <span className="block bg-linear-to-r from-[#111827] via-[#4f46e5] to-[#0891b2] bg-clip-text text-transparent">
              That Look Premium
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-6 max-w-2xl text-base leading-7 text-black/60 md:text-lg"
          >
            I design and develop portfolio websites, business websites, and
            landing pages with clean layout, smooth interaction, and a strong
            professional visual style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(17,24,39,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4f46e5]"
            >
              View Projects
              <FiArrowRight />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#111827] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              Download Resume
              <FiDownload />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            <div>
              <p className="text-2xl font-extrabold text-[#111827]">10+</p>
              <p className="text-sm font-medium text-black/45">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111827]">Modern</p>
              <p className="text-sm font-medium text-black/45">UI Style</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#111827]">100%</p>
              <p className="text-sm font-medium text-black/45">Responsive</p>
            </div>
          </motion.div>
        </div>

        {/* right preview */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="relative lg:col-span-5"
        >
          <div className="relative rounded-[32px] border border-black/8 bg-white/70 p-4 shadow-[0_25px_80px_rgba(15,23,42,0.10)] backdrop-blur-xl">
            <div className="rounded-[26px] border border-black/6 bg-[#ffffff] p-5">
              <div className="mb-5 flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#fb7185]" />
                <span className="h-3 w-3 rounded-full bg-[#fbbf24]" />
                <span className="h-3 w-3 rounded-full bg-[#34d399]" />
              </div>

              <div className="rounded-[22px] bg-gradient-to-br from-[#eef2ff] via-[#f8fafc] to-[#ecfeff] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f46e5]">
                  Portfolio Preview
                </p>

                <h3
                  style={{ fontFamily: "Gilroy-Medium" }}
                  className="mt-4 text-2xl font-extrabold leading-tight text-[#111827]"
                >
                  Clean design.
                  <br />
                  Strong first impression.
                </h3>

                <div className="mt-6 space-y-3">
                  <div className="h-3 w-3/4 rounded-full bg-[#111827]/10" />
                  <div className="h-3 w-full rounded-full bg-[#111827]/8" />
                  <div className="h-3 w-5/6 rounded-full bg-[#111827]/8" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                    <p className="text-xs text-black/45">Style</p>
                    <p className="mt-1 text-sm font-bold text-[#111827]">
                      Modern
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
                    <p className="text-xs text-black/45">Focus</p>
                    <p className="mt-1 text-sm font-bold text-[#111827]">
                      Professional
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 rounded-[22px] border border-black/8 bg-[#111827] px-5 py-4 text-white shadow-[0_18px_40px_rgba(17,24,39,0.18)]">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/55">
                2026 Visual Style
              </p>
              <p className="mt-1 text-sm font-semibold">
                Clean + Attractive + Modern
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
