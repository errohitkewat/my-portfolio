import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between  py-4 px-5 lg:px-0">
        <a href="#home" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 font-gilroy-medium items-center justify-center rounded-3xl bg-[#111827] text-md font-bold text-white shadow-[0_10px_30px_rgba(17,24,39,0.18)] transition-transform duration-300 group-hover:scale-105">
            R
          </div>
          <div>
            <p className="text-base font-extrabold tracking-tight text-[#111827]">
              Rohit Kewat
            </p>
            <p className="text-xs font-medium tracking-[0.22em] text-black/40 uppercase">
              Web Developer
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 rounded-full border border-black/5 bg-white/60 p-2 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-black/60 transition-all duration-300 hover:bg-[#111827] hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a
            href="#projects"
            className="rounded-full border border-black/10 bg-white px-5 py-2.5 text-sm font-semibold text-[#111827] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(17,24,39,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4f46e5]"
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-2xl text-[#111827] shadow-sm xl:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.25 }}
            className="border-t border-black/5 bg-white/90 px-6 py-6 backdrop-blur-2xl xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-black/70 transition hover:bg-[#f3f4f6] hover:text-[#111827]"
                >
                  {link.name}
                </a>
              ))}

              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-center text-sm font-semibold text-[#111827]"
                >
                  View Work
                </a>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl bg-[#111827] px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
