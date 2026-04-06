import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiLayout,
  FiMonitor,
  FiRefreshCw,
} from "react-icons/fi";

const services = [
  {
    id: "01",
    title: "Business Website",
    description:
      "Professional websites for businesses and service brands that need trust, clarity, and a polished online presence.",
    icon: <FiBriefcase />,
    accent: "from-[#eef2ff] via-[#f8fafc] to-[#ffffff]",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#4f46e5]",
    tag: "Professional",
    span: "lg:col-span-7",
  },
  {
    id: "02",
    title: "Portfolio Website",
    description:
      "Modern personal websites for developers, freelancers, and creators who want to present their work in a strong visual way.",
    icon: <FiLayout />,
    accent: "from-[#f5f3ff] via-[#faf5ff] to-[#ffffff]",
    iconBg: "bg-[#ede9fe]",
    iconColor: "text-[#7c3aed]",
    tag: "Personal Brand",
    span: "lg:col-span-5",
  },
  {
    id: "03",
    title: "Landing Page",
    description:
      "Clean and conversion-focused pages built to highlight one offer, one service, or one product with better flow.",
    icon: <FiMonitor />,
    accent: "from-[#ecfeff] via-[#f8fafc] to-[#ffffff]",
    iconBg: "bg-[#cffafe]",
    iconColor: "text-[#0891b2]",
    tag: "Focused UI",
    span: "lg:col-span-5",
  },
  {
    id: "04",
    title: "Website Redesign",
    description:
      "I redesign outdated websites into clean, modern, responsive interfaces with stronger layout and better presentation.",
    icon: <FiRefreshCw />,
    accent: "from-[#ecfdf5] via-[#f8fafc] to-[#ffffff]",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#059669]",
    tag: "Modern Upgrade",
    span: "lg:col-span-7",
  },
];

function Services() {
  return (
    <section id="services" className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4f46e5]">
              Services
            </p>
            <h2 className="mt-4 max-w-4xl font-gilroy-medium text-3xl font-extrabold lg:leading-tight text-[#111827] md:text-5xl">
              Modern website solutions
              <span className="block">crafted with clean design thinking</span>
            </h2>
          </div>

          <p className="max-w-md text-base lg:leading-7 text-black/55">
            Every website is designed to feel premium, structured, and easy to
            use while keeping the style modern and professional.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className={`group relative  overflow-hidden rounded-[36px] border border-black/6 bg-gradient-to-br ${service.accent} p-7 shadow-[0_22px_60px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(15,23,42,0.10)] md:p-8 ${service.span}`}
            >
              <div className="absolute right-0 top-0 h-36 w-36 rounded-bl-[44px] bg-white/40 blur-2xl transition-all duration-300 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 h-24 w-24 rounded-tr-4xl bg-white/20 blur-xl" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex rounded-3xl p-4 text-2xl shadow-sm ${service.iconBg} ${service.iconColor}`}
                    >
                      {service.icon}
                    </div>

                    <div className="rounded-full border border-black/8 bg-white/75 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45 backdrop-blur">
                      {service.tag}
                    </div>
                  </div>

                  <div className="mt-10 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-black/35">
                        {service.id}
                      </p>
                      <h3 className="mt-3 max-w-xl text-2xl font-extrabold leading-tight text-[#111827] md:text-[1.9rem]">
                        {service.title}
                      </h3>
                    </div>

                    <div className="rounded-full border border-black/8 bg-white/80 p-3 text-[#111827] shadow-sm transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-[#111827] group-hover:text-white">
                      <FiArrowUpRight />
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-[15px] lg:leading-7 text-black/60 md:text-base">
                    {service.description}
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-black/6 pt-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-black/50">
                      Responsive
                    </span>
                    <span className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-black/50">
                      Clean UI
                    </span>
                    <span className="rounded-full bg-white/80 px-3 py-1.5 text-xs font-semibold text-black/50">
                      Modern Style
                    </span>
                  </div>

                  <a
                    href="#contact"
                    className="text-sm font-semibold text-[#4f46e5] transition-all duration-300 hover:text-[#111827]"
                  >
                    Let’s Build
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;