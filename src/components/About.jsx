import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4f46e5]">
              About
            </p>

            <h2 className="mt-6 text-4xl font-gilroy-medium font-extrabold  lg:leading-tight text-[#111827] md:text-5xl">
              I design and build
              <span className="block text-black/40">
                modern digital experiences
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base  lg:leading-8 text-black/60 md:text-lg">
              I focus on creating websites that are clean, simple and easy to
              use. My goal is to build websites that not only look good but also
              help businesses look professional.
            </p>

            <p className="mt-4 max-w-xl text-base lg:leading-8 text-black/60 md:text-lg">
              I pay attention to layout, spacing, typography, and user flow so
              the final result feels simple, modern, and premium.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#eef2ff] px-4 py-2 text-xs font-semibold text-[#4f46e5]">
                Clean UI
              </span>
              <span className="rounded-full bg-[#ecfeff] px-4 py-2 text-xs font-semibold text-[#0891b2]">
                Modern Layout
              </span>
              <span className="rounded-full bg-[#f3f4f6] px-4 py-2 text-xs font-semibold text-black/50">
                Responsive
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 lg:col-span-6"
          >
            <div className="rounded-[32px] border border-black/6 bg-white p-8 shadow-sm transition hover:-translate-y-1">
              <p className="text-sm text-black/45">Experience</p>
              <p className="mt-2 text-3xl font-gilroy-medium font-extrabold text-[#111827]">
                10+ Projects
              </p>
              <p className="mt-3 text-sm text-black/55">
                Built with modern design and clean frontend approach.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/6 bg-white p-6 shadow-sm transition hover:-translate-y-1">
                <p className="text-sm text-black/45">Focus</p>
                <p className="mt-2 text-lg font-bold text-[#111827]">
                  Minimal Design
                </p>
              </div>

              <div className="rounded-[28px] border border-black/6 bg-white p-6 shadow-sm transition hover:-translate-y-1">
                <p className="text-sm text-black/45">Goal</p>
                <p className="mt-2 text-lg font-bold text-[#111827]">
                  Professional Look
                </p>
              </div>
            </div>

            <div className="rounded-[32px] bg-[#111827] p-8 text-white shadow-lg">
              <p className="text-sm text-white/60">Approach</p>
              <p className="mt-2 text-xl font-bold leading-snug">
                Simple, clean, and focused design that makes websites feel
                modern and trustworthy.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
