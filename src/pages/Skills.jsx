import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaFigma,
  FaNetworkWired,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiFirebase,
  SiTypescript,
} from "react-icons/si";

const skills = [
  { icon: <FaHtml5 />, name: "HTML", color: "#E44D26", level: 95 },
  { icon: <FaCss3Alt />, name: "CSS", color: "#264DE4", level: 90 },
  { icon: <FaJs />, name: "JavaScript", color: "#F7DF1E", level: 85 },
  { icon: <FaReact />, name: "React", color: "#61DAFB", level: 80 },
  { icon: <SiTailwindcss />, name: "Tailwind", color: "#38BDF8", level: 75 },
  { icon: <SiRedux />, name: "Redux Toolkit", color: "#764ABC", level: 70 },
  {
    icon: <FaNetworkWired />,
    name: "Context API",
    color: "#3178C6",
    level: 50,
  },
  { icon: <SiVite />, name: "Vite", color: "#9461FB", level: 80 },
  { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28", level: 60 },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6", level: 60 },
  { icon: <FaGithub />, name: "GitHub", color: "#181717", level: 85 },
  { icon: <FaFigma />, name: "Figma", color: "#F24E1E", level: 80 },
];

function Skills() {
  const [radius, setRadius] = useState(250);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 640) setRadius(120);
      else if (width < 768) setRadius(180);
      else if (width < 1024) setRadius(220);
      else setRadius(250);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <section className="skills flex justify-center py-24">
      <div className="container relative flex items-center justify-center w-full">
        <motion.h2
          className="absolute hidden text-4xl md:block md:text-6xl  lg:block lg:text-7xl font-bold  z-10 text-center"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        {!isMobile ? (
          <div className="relative w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center">
            {skills.map((skill, index) => {
              const angle = (index / skills.length) * 360;
              return (
                <motion.div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    transform: `rotate(${angle}deg) translate(0, -${radius}px)`,
                  }}
                >
                  <motion.div
                    className="flex flex-col items-center"
                    style={{ transform: `rotate(-${angle}deg)` }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-3 shadow-lg p-3 rounded-full"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-semibold">
                      {skill.name}
                    </p>
                    <div className="w-16 sm:w-20 h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                      <motion.div
                        className="h-2 rounded-full bg-[#74070e]"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-5 mt-20 w-full">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="w-full bg-[#121212] pr rounded-2xl shadow-lg hover:shadow-[#74070e]/40 flex gap-2 items-center transition-all duration-300"
                whileHover={{ scale: 1.03 }}
              >
                <div
                  className="text-4xl sm:text-5xl p-4 rounded-full bg-[#1e1e1e] flex-shrink-0"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>

                <div className="flex flex-col flex-1 ml-5">
                  <p className="text-gray-200 font-semibold text-base sm:text-lg">
                    {skill.name}
                  </p>
                  <div className="w-full h-2 bg-gray-700 rounded-full mt-2 overflow-hidden">
                    <motion.div
                      className="h-2 rounded-full bg-[#74070e]"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.2, delay: 0.3 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
