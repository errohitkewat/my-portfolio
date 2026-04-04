import { motion } from "framer-motion";
import { FiSearch, FiEdit3, FiCode, FiCheckCircle } from "react-icons/fi";

const processSteps = [
  {
    id: "01",
    title: "Discovery",
    description:
      "First, I understand your goals, audience, and the type of website you need so the final result matches your brand properly.",
    icon: FiSearch,
    accent: "from-[#eef2ff] to-[#f8fafc]",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#4f46e5]",
  },
  {
    id: "02",
    title: "Planning & Structure",
    description:
      "Then I plan the sections, content flow, layout, and visual direction to make the website feel clear, modern, and professional.",
    icon: FiEdit3,
    accent: "from-[#faf5ff] to-[#f8fafc]",
    iconBg: "bg-[#ede9fe]",
    iconColor: "text-[#7c3aed]",
  },
  {
    id: "03",
    title: "Design & Development",
    description:
      "After planning, I build the website with clean UI, responsive layout, smooth interaction, and a premium modern style.",
    icon: FiCode,
    accent: "from-[#ecfeff] to-[#f8fafc]",
    iconBg: "bg-[#cffafe]",
    iconColor: "text-[#0891b2]",
  },
  {
    id: "04",
    title: "Review & Delivery",
    description:
      "Finally, I refine the details, test responsiveness, improve the polish, and prepare the website for final handover.",
    icon: FiCheckCircle,
    accent: "from-[#ecfdf5] to-[#f8fafc]",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#059669]",
  },
];

function Process() {
  return (
    <section id="process" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4f46e5]">
              Process
            </p>
            <h2
              style={{ fontFamily: "Gilroy-Medium" }}
              className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl"
            >
              A simple process
              <span className="block text-black/45">
                to create a clean modern website
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55">
            I keep the workflow clear and smooth so the website feels well
            planned, professionally designed, and ready for real clients.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-black/8 lg:block" />

          <div className="grid gap-6 lg:grid-cols-2">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className={`relative ${index % 2 !== 0 ? "lg:mt-16" : ""}`}
                >
                  <div className="group relative overflow-hidden rounded-[32px] border border-black/6 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.09)] md:p-8">
                    <div
                      className={`absolute inset-x-0 top-0 h-28 bg-gradient-to-br ${step.accent} opacity-90`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${step.iconBg} ${step.iconColor} text-2xl shadow-sm`}
                        >
                          <Icon />
                        </div>

                        <span className="rounded-full border border-black/8 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/45">
                          Step {step.id}
                        </span>
                      </div>

                      <h3 className="mt-10 text-2xl font-extrabold text-[#111827]">
                        {step.title}
                      </h3>

                      <p className="mt-4 text-[15px] leading-7 text-black/60 md:text-base">
                        {step.description}
                      </p>

                      <div className="mt-8 flex items-center justify-between border-t border-black/6 pt-5">
                        <p className="text-sm font-medium text-black/45">
                          Clear • Modern • Professional
                        </p>

                        <div className="text-sm font-semibold text-[#4f46e5]">
                          {step.id}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
