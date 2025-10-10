import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 0,
    title: "Music Player",
    tags: ["HTML", "JavaScript", "CSS", "Responsive"],
    desc: "A modern, responsive music player with waveform animation, volume, and speed control.",
    color: "#DCE8F2",
    github: "https://github.com/dudoshaa/player",
    live: "https://player-alpha-two.vercel.app/",
    image: "../images/music.png",
  },
  {
    id: 0.1,
    title: "DGroup",
    tags: ["React", "Firebase", "Redux Toolkit", "Responsive"],
    desc: "A real-time chat app (still in progress) where users can log in, chat, and see who’s online — powered by Firebase.",
    color: "#DCE8F2",
    github: "https://github.com/dudoshaa/sign",
    live: "https://sign-rust-eight.vercel.app/",
    image: "../images/login.png",
  },
  {
    id: 2,
    title: "Todo",
    tags: ["HTML", "TypeScript", "CSS", "Responsive"],
    desc: "A clean, responsive task manager with drag-and-drop reordering, filtering, and dark/light theme support.",
    color: "#F3D3D3",
    github: "https://github.com/dudoshaa/todo",
    live: "https://todo-rosy-iota.vercel.app/",
    image: "../images/todo.png",
  },
  {
    id: 0.2,
    title: "Rock–Paper–Scissors",
    tags: ["HTML", "JavaScript", "CSS", "Responsive"],
    desc: "A simple and interactive Rock–Paper–Scissors game built with Vanilla JavaScript, where users play against the computer with real-time score updates and smooth animations.",
    color: "#F3D3D3",
    github: "https://github.com/dudoshaa/don-don-ziiki",
    live: "https://don-don-ziiki.vercel.app/",
    image: "../images/game.png",
  },
  {
    id: 1,
    title: "Healthy Recipe Finder",
    tags: ["React", "API", "Web Designer", "Responsive"],
    desc: "Find healthy recipes using live API search and calorie filter.",
    color: "#DCE8F2",
    github: "https://github.com/dudoshaa/healthy",
    live: "https://healthy-umber.vercel.app/",
    image: "../images/healthy.png",
  },

  {
    id: 3,
    title: "Dev Finder",
    tags: ["HTML", "TypeScript", "CSS", "Responsive"],
    desc: "A sleek GitHub user lookup tool with smooth UI and real-time search.",
    color: "#F3D3D3",
    github: "https://github.com/dudoshaa/devfinder",
    live: "https://devfinder-liard.vercel.app/",
    image: "../images/finder.png",
  },
  {
    id: 4,
    title: "Search Image",
    tags: ["React", "JavaScript", "CSS", "Responsive"],
    desc: "A sleek image search app where users can browse and filter images in real time.",
    color: "#F3D3D3",
    github: "https://github.com/dudoshaa/searchimg",
    live: "https://searchimg-eight.vercel.app/",
    image: "../images/search.png",
  },
  {
    id: 5,
    title: "Desserts",
    tags: ["React", "Redux Toolkit", "CSS", "JavaScript", "Responsive"],
    desc: "A responsive recipe app showcasing a variety of delicious desserts with an elegant interface.",
    color: "#F3D3D3",
    github: "https://github.com/dudoshaa/1dars",
    live: "https://1dars-five.vercel.app/",
    image: "../images/desserts.png",
  },
];

export default function Projects() {
  const [active, setActive] = React.useState(null);

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
              className="flex flex-col items-center justify-center text-gray-500 border border-[#2a0a09] rounded-3xl bg-[#0b0b0b]/40 p-10"
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
