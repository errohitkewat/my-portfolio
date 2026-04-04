import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Adventure Booking Website",
    type: "Service Website",
    description:
      "A modern booking-focused website with organized sections, pricing clarity, and strong presentation.",
    gradient: "from-[#0000] via-[#0000] to-[#0000]",
    badge: "bg-[#eff6ff] text-[#1d4ed8]",
    image: "/images/adventure.png",
    liveLink: "https://manali-adventure.netlify.app/",
  },
  {
    title: "Cafe Brand Website",
    type: "Business Website",
    description:
      "A premium concept website with elegant layout, stylish typography, and clean visual hierarchy.",
    gradient: "from-[#ede9fe] via-[#f5f3ff] to-[#ffffff]",
    badge: "bg-[#f5f3ff] text-[#6d28d9]",
    image: "/images/project2.jpg",
    liveLink: "https://your-cafe-site-link.com",
  },
  {
    title: "Salon Portfolio Website",
    type: "Brand Website",
    description:
      "A polished service website created to improve trust, visual appeal, and user experience.",
    gradient: "from-[#dcfce7] via-[#f0fdf4] to-[#ffffff]",
    badge: "bg-[#f0fdf4] text-[#15803d]",
    image: "/images/project3.jpg",
    liveLink: "https://your-salon-site-link.com",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#4f46e5]">
              Projects
            </p>
            <h2 className="mt-4 max-w-3xl font-gilroy-medium text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
              Selected work and project concepts
            </h2>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Start Your Project
          </a>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: index * 0.08 }}
              className="grid gap-8 rounded-[36px] border border-black/5 bg-white p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:grid-cols-12 md:p-8"
            >
              <div className="md:col-span-7">
                <div
                  className={`group relative flex h-[280px] items-end overflow-hidden rounded-[28px] bg-gradient-to-br ${project.gradient} p-6 md:h-[360px]`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-35`}
                  />

                  <div className="absolute inset-0 bg-black/15" />

                  <div className="absolute right-6 top-6 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-black/55 backdrop-blur">
                    Featured
                  </div>

                  <div className="relative z-10">
                    <span
                      className={`inline-flex rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] ${project.badge}`}
                    >
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-between md:col-span-5">
                <div>
                  <p className="text-sm font-semibold text-black/35">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-extrabold text-[#111827] md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 leading-7 text-black/60">
                    {project.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4f46e5]"
                  >
                    Explore Project
                    <FiExternalLink />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-semibold text-[#111827] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    Build Similar
                    <FiArrowUpRight />
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

export default Projects;
