import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../../data";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <section className="container py-20 text-gray-100 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="projects__title text-5xl md:text-7xl font-extrabold text-[#74070e] tracking-tight">
          My Projects
        </h1>
        <p className="projects__desc text-gray-400 text-sm md:text-4xl">
          Unexpected interfaces. Unseen details.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 relative">
        <div className="relative flex flex-col gap-6 before:content-[''] before:absolute before:left-4 before:top-0 before:w-[3px] before:h-full before:bg-[#2a0a09]">
          {projects.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(p)}
              className={`relative pl-10 crd cursor-pointer rounded-2xl border transition-all backdrop-blur-sm ${
                active?.id === p.id
                  ? "border-[#74070e] bg-[#0c0c0c]/60"
                  : "border-[#1a0a09] bg-[#090909]/40 hover:border-[#4d0a0a]"
              }`}
            >
              <span
                className={`absolute left-[2px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 ${
                  active?.id === p.id
                    ? "bg-[#74070e] border-[#74070e] scale-110 shadow-md shadow-[#74070e]/40"
                    : "bg-[#1a0a09] border-[#3a0a0a]"
                }`}
              ></span>

              <div className="flex items-center justify-between">
                <h2 className="crd__title text-2xl md:text-4xl font-semibold text-gray-200">
                  {p.title}
                </h2>
              </div>
              <p className="crd__title text-gray-400 text-sm md:text-2xl leading-relaxed">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="butn text-sm md:text-lg rounded-full bg-[#151515] text-gray-300 border border-[#2a0a09]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 80 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative bg-[#0b0b0b]/80 border border-[#2a0a09] rounded-3xl shadow-2xl p-6 flex flex-col"
            >
              {active.image && (
                <img
                  width={650}
                  height={280}
                  src={active.image}
                  alt={active.title}
                  className="crd__title  object-cover rounded-2xl mb-6 border border-[#1a0a09]"
                />
              )}

              <div className="flex items-center justify-between">
                <h2 className="butn crd__title text-2xl md:text-4xl font-bold text-gray-100">
                  {active.title}
                </h2>
              </div>

              <p className="butn crd__title text-2xl text-gray-300 leading-relaxed">
                {active.desc}
              </p>

              <div className="butn mt-5 flex flex-wrap gap-2">
                {active.tags.map((t) => (
                  <span
                    key={t}
                    className="butn text-xs md:text-2xl rounded-full bg-[#151515] text-gray-300 border border-[#241010]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="butn mt-auto pt-6 flex gap-8">
                <a
                  href={active.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col justify-center items-center gap-2 butn rounded-lg bg-[#74070e] text-white shadow hover:bg-[#8a0a13] transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a
                  href={active.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="butn rounded-lg border border-[#2b0a09] text-gray-200 hover:bg-[#1a0a0a]/50 transition"
                >
                  <FaExternalLinkAlt className="text-2xl" />
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-start text-gray-500 border border-[#2a0a09] rounded-3xl bg-[#0b0b0b]/40 p-10"
            >
              <p className="text-lg mb-2">🖱 Click a project</p>
              <p className="text-sm text-gray-400">
                Choose one from the left to view its details.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
