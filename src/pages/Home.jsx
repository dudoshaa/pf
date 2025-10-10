import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn, FaTelegram } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="home">
      <div className="container flex flex-col items-center text-center min-h-screen  px-4 sm:px-6 md:px-10">
        <motion.h2
          className="home__welcome text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello & Welcome 👋
        </motion.h2>

        <motion.h1
          className="home__title leading-tight mt-6 text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I'm <span>Durdona Burkhonova</span>
          <br className="hidden sm:block" />
          <strong className="block sm:inline text-[#838f6f] mt-2 sm:mt-0">
            <ReactTyped
              strings={[
                "Front-End Developer 👩🏻‍💻",
                "React Developer ⚛️",
                "Web Designer ✨",
              ]}
              typeSpeed={50}
              backSpeed={60}
              loop
            />
          </strong>
        </motion.h1>

        <motion.p
          className="home__desc max-w-2xl text-gray-400 text-lg sm:text-2xl md:text-3xl mt-8 leading-relaxed px-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          I build dynamic and user-centered web applications using modern
          front-end tools such as{" "}
          <span className="text-[#74070e] font-semibold">React</span>,{" "}
          <span className="text-[#74070e] font-semibold">Tailwind CSS,</span>
          <span className="text-[#74070e] font-semibold">TypeScript</span>{" "}
          <span>and</span>{" "}
          <span className="text-[#74070e] font-semibold">JavaScript</span>. I
          focus on performance, accessibility, and clean design.
        </motion.p>

        <motion.div
          className="buttons flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          <a
            href="https://t.me/bxdurdona"
            className="contact sm:px-8 py-2 sm:py-3 border border-[#74070e] text-2xl sm:text-3xl md:text-4xl rounded-full hover:bg-[#74070e] hover:text-white transition duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.ul
          className="flex items-center justify-center gap-8 sm:gap-12 md:gap-16 text-4xl sm:text-6xl md:text-7xl mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <li>
            <a
              href="https://github.com/dudoshaa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-[#74070e] transition-colors duration-300 cursor-pointer" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/durdona-burkhonova-9332b0369"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="hover:text-[#74070e] transition-colors duration-300 cursor-pointer" />
            </a>
          </li>
          <li>
            <a href="mailto:burxonovadurdona027@gmail.com">
              <TfiEmail className="hover:text-[#74070e] transition-colors duration-300 cursor-pointer" />
            </a>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}

export default Home;
