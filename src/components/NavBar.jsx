import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function NavBar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <header className="header relative z-50">
      <div className="container flex justify-between items-center py-4 px-6">
        {/* Title */}
        <li className="navbar__title list-none text-5xl md:text-6xl font-bold">
          Port<span className="text-[#74070e] text-8xl">f</span> olio
        </li>

        
        <div
          className="md:hidden text-5xl cursor-pointer transition-transform duration-300 hover:scale-110"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

       
        {open && (
          <div className="fixed mt-28 inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"></div>
        )}

       
        <ul
          ref={menuRef}
          className={`navbar-end navbar__pages flex flex-col md:flex-row gap-8 md:gap-12 md:static md:bg-transparent md:w-auto absolute left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
            ${
              open
                ? "top-1/2 -translate-y-1/2 opacity-100 mn bg-[rgba(255,255,255,0.44)] text-black backdrop-blur-lg rounded-2xl shadow-2xl px-12 py-10 scale-100"
                : "top-[-400px] opacity-0 md:opacity-100 scale-75 text-inherit"
            }`}
        >
          {["/", "/skills", "/projects", ].map((path, i) => {
            const names = ["Home", "Skills", "Projects"];
            const isExternal = path.startsWith("http");
            const props = isExternal
              ? { href: path, target: "_blank" }
              : { to: path };
            const Component = isExternal ? "a" : NavLink;

            return (
              <Component
                key={path}
                {...props}
                className={({ isActive }) =>
                  `text-4xl px-6 py-3 rounded-xl transition-all duration-300 ${
                    open
                      ? isActive
                        ? "bg-[#74070e] text-white"
                        : "text-black hover:bg-[#74070e]/80 hover:text-white"
                      : isActive
                      ? "text-[#74070e]"
                      : "hover:text-[#74070e]"
                  }`
                }
                onClick={() => setOpen(false)}
              >
                {names[i]}
              </Component>
            );
          })}
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
