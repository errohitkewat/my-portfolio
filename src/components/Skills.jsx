import { motion } from "framer-motion";
import {
  FiCode,
  FiLayout,
  FiDatabase,
  FiTool,
  FiArrowUpRight,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend",
    icon: FiLayout,
    description: "Building clean, modern, and responsive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],
    color: "from-[#eef2ff] to-[#f8fafc]",
    iconBg: "bg-[#e0e7ff]",
    iconColor: "text-[#4f46e5]",
  },
  {
    title: "Frameworks",
    icon: FiCode,
    description:
      "Creating fast and scalable web experiences with modern tools.",
    skills: ["Next.js", "Vite", "React Router"],
    color: "from-[#f5f3ff] to-[#faf5ff]",
    iconBg: "bg-[#ede9fe]",
    iconColor: "text-[#7c3aed]",
  },
  {
    title: "Backend / Data",
    icon: FiDatabase,
    description: "Working with APIs, databases, and data-driven applications.",
    skills: ["Node.js", "Express", "MongoDB", "REST API", "Firebase"],
    color: "from-[#ecfeff] to-[#f8fafc]",
    iconBg: "bg-[#cffafe]",
    iconColor: "text-[#0891b2]",
  },
  {
    title: "Tools",
    icon: FiTool,
    description:
      "Using modern development tools for better workflow and deployment.",
    skills: ["Git", "GitHub", "VS Code", "Netlify", "Vercel", "Postman"],
    color: "from-[#ecfdf5] to-[#f8fafc]",
    iconBg: "bg-[#d1fae5]",
    iconColor: "text-[#059669]",
  },
];

function Skills() {
  return (
    <section id="skills" className="px-6 py-24 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4f46e5]">
              Technical Skills
            </p>
            <h2 className="mt-4 max-w-4xl font-gilroy-medium text-3xl font-extrabold lg:leading-tight text-[#111827] md:text-5xl">
              Tools and technologies
              <span className="block text-black/40">
                I use to build modern websites
              </span>
            </h2>
          </div>

          <p className="max-w-md text-base leading-7 text-black/55">
            A strong frontend-focused skill set with modern tools, clean UI
            practices, and responsive development workflow.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className={`group relative overflow-hidden rounded-[32px] border border-black/6 bg-gradient-to-br ${category.color} p-7 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_28px_70px_rgba(15,23,42,0.09)] md:p-8`}
              >
                <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-[40px] bg-white/30 blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`inline-flex rounded-[22px] p-4 text-2xl shadow-sm ${category.iconBg} ${category.iconColor}`}
                    >
                      <Icon />
                    </div>

                    <div className="rounded-full border border-black/8 bg-white/80 p-3 text-[#111827] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-[#111827] group-hover:text-white">
                      <FiArrowUpRight />
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl font-extrabold text-[#111827]">
                    {category.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-[15px] leading-7 text-black/60">
                    {category.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.08 + skillIndex * 0.04,
                        }}
                        className="rounded-full border border-black/8 bg-white/85 px-4 py-2 text-sm font-semibold text-[#111827] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#111827] hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  <div className="mt-8 h-[6px] w-full overflow-hidden rounded-full bg-white/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "78%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
                      className="h-full rounded-full bg-[#111827]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
