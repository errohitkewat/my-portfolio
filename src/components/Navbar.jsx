"use client";

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

const headerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const headerItem = {
  hidden: {
    opacity: 0,
    y: -12,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const navContainer = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

const navItem = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.38,
      ease: "easeOut",
    },
  },
};

const mobileMenuVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.06,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const mobileItemVariants = {
  hidden: {
    opacity: 0,
    y: -8,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.24,
      ease: "easeOut",
    },
  },
};

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
    <motion.header
      variants={headerContainer}
      initial="hidden"
      animate="show"
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-black/5 bg-white/70 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between md:px-9 py-4 px-5 lg:px-0">
        {/* Logo */}
        <motion.a
          variants={headerItem}
          href="#home"
          className="group flex items-center gap-3"
        >
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
        </motion.a>

        {/* Desktop nav */}
        <motion.nav
          variants={navContainer}
          initial="hidden"
          animate="show"
          className="hidden items-center gap-2 rounded-full border border-black/5 bg-white/60 p-2 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur xl:flex"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              variants={navItem}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-black/60 transition-all duration-300 hover:bg-[#111827] hover:text-white"
            >
              {link.name}
            </motion.a>
          ))}
        </motion.nav>

        {/* Buttons */}
        <motion.div
          variants={headerItem}
          className="hidden items-center gap-3 xl:flex"
        >
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
        </motion.div>

        {/* Menu button */}
        <motion.button
          variants={headerItem}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-2xl border border-black/10 bg-white text-2xl text-[#111827] shadow-sm xl:hidden"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={menuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="border-t border-black/5 bg-white/90 px-6 py-6 backdrop-blur-2xl xl:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={mobileItemVariants}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 text-md font-semibold text-black/70 transition hover:bg-[#f3f4f6] hover:text-[#111827]"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.div
                variants={mobileItemVariants}
                className="mt-3 grid gap-3 sm:grid-cols-2"
              >
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
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
