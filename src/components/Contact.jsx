import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const contactLinks = [
  {
    label: "Email",
    value: "rohitkewat.er@gmail.com",
    href: "rohitkewat.er@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    label: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-20 md:px-10"
    >
      <div className="absolute left-[-80px] top-10 h-56 w-56 rounded-full bg-[#6366f1]/10 blur-3xl" />
      <div className="absolute right-[-80px] bottom-0 h-56 w-56 rounded-full bg-[#06b6d4]/10 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[36px] border border-black/6 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-xl"
        >
          <div className="grid lg:grid-cols-12">
            {/* Left */}
            <div className="relative px-7 py-8 md:px-8 lg:col-span-5 lg:border-r lg:border-black/6">
              <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2ff]" />

              <div className="relative z-10">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4f46e5]">
                  Contact
                </p>

                <h2
                  style={{ fontFamily: "Gilroy-Medium" }}
                  className="mt-4 text-3xl font-extrabold leading-tight text-[#111827] md:text-4xl"
                >
                  Let’s build something
                  <span className="block text-black/40">clean and modern</span>
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-black/58 md:text-base">
                  Need a portfolio, business website, or landing page? Let’s
                  connect and create something that feels premium and
                  professional.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#eef2ff] px-3 py-1.5 text-[11px] font-semibold text-[#4f46e5]">
                    Minimal Design
                  </span>
                  <span className="rounded-full bg-[#ecfeff] px-3 py-1.5 text-[11px] font-semibold text-[#0891b2]">
                    Modern UI
                  </span>
                </div>

                <a
                  href="rohitkewat.er@gmail.com"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(17,24,39,0.14)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4f46e5]"
                >
                  Start a Project
                  <FiArrowUpRight />
                </a>
              </div>
            </div>

            {/* Right */}
            <div className="px-7 py-8 md:px-8 lg:col-span-7">
              <div className="grid gap-3">
                {contactLinks.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group flex items-center justify-between rounded-[22px] border border-black/6 bg-[#fafafa] px-5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-md"
                  >
                    <div>
                      <p className="text-xs font-medium text-black/42">
                        {item.label}
                      </p>
                      <p className="mt-1 text-base font-semibold text-[#111827] md:text-lg">
                        {item.value}
                      </p>
                    </div>

                    <div className="rounded-full border border-black/8 bg-white p-2.5 text-[#111827] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#111827] group-hover:text-white">
                      <FiArrowUpRight />
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <a
                  href="mailto:yourmail@gmail.com"
                  className="rounded-[22px] border border-black/6 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-[#eef2ff] p-2.5 text-lg text-[#4f46e5]">
                    <FiMail />
                  </div>
                  <p className="text-xs text-black/45">Email</p>
                  <p className="mt-1 text-sm font-bold text-[#111827]">
                    Quick Contact
                  </p>
                </a>

                <a
                  href="rohitkewat.er@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[22px] border border-black/6 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-[#f3f4f6] p-2.5 text-lg text-[#111827]">
                    <FiGithub />
                  </div>
                  <p className="text-xs text-black/45">GitHub</p>
                  <p className="mt-1 text-sm font-bold text-[#111827]">
                    View Work
                  </p>
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-[22px] border border-black/6 bg-white px-4 py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
                >
                  <div className="mb-3 inline-flex rounded-xl bg-[#ecfeff] p-2.5 text-lg text-[#0891b2]">
                    <FiLinkedin />
                  </div>
                  <p className="text-xs text-black/45">LinkedIn</p>
                  <p className="mt-1 text-sm font-bold text-[#111827]">
                    Connect
                  </p>
                </a>
              </div>

              <div className="mt-5 rounded-[24px] bg-[#111827] px-5 py-5 text-white">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs text-white/55">Availability</p>
                    <p className="mt-1 text-lg font-bold">
                      Open for freelance work
                    </p>
                  </div>

                  <a
                    href="rohitkewat.er@gmail.com"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#111827] transition-all duration-300 hover:-translate-y-1"
                  >
                    Send Message
                    <FiArrowUpRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
