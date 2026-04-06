import { motion } from "framer-motion";

function Profile() {
  return (
    <section className="px-6 py-20 md:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid items-center gap-10 rounded-[36px] border border-black/6 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] backdrop-blur-xl md:grid-cols-12 md:p-8"
        >
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-[28px]">
              <img
                src="/images/rohit.jpg"
                alt="Rohit Kewat"
                className="h-105 w-full object-cover"
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <h2 className="text-4xl font-gilroy-medium font-extrabold">Rohit Kewat</h2>

            <h3 className="mt-2 text-xl text-black/60">
              Web developer who focuses on building clean and modern websites.
            </h3>

            <p className="mt-6 text-base leading-8 text-black/60">
              I am a web developer who likes to create clean, modern and
              responsive websites. I focus on making user-friendly interfaces
              with good design, smooth performance and a professional look.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Profile;
