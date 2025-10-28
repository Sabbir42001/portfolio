"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";
import { cn } from "@/utils";

const menuItems = [
  { name: "Home", path: "#home" },
  { name: "Education", path: "#education" },
  { name: "Projects", path: "#projects" },
  { name: "Blogs", path: "#blogs" },
  { name: "Skills", path: "#skills" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpened, setIsNavOpened] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsNavOpened(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-gradient-to-r from-white via-blue-50 to-white shadow-md"
          : "bg-transparent"
      )}
    >
      <div className="flex justify-between items-center w-[90%] md:w-[88%] mx-auto py-4 md:py-6">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2">
          <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
            Azhar.
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10 text-lg">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.path}
              className="text-gray-700 font-medium transition-all duration-200 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center">
          {isNavOpened ? (
            <IoClose
              className="text-indigo-600"
              onClick={() => setIsNavOpened(false)}
              size={28}
            />
          ) : (
            <IoMenu
              className="text-indigo-600"
              onClick={() => setIsNavOpened(true)}
              size={28}
            />
          )}
        </div>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed top-0 left-0 h-full bg-white/90 backdrop-blur-md shadow-xl z-50 transform transition-transform duration-500 ease-in-out ${
            isNavOpened ? "translate-x-0" : "-translate-x-full"
          } rounded-tr-3xl rounded-br-3xl`}
          style={{ width: "70%" }}
        >
          <div className="flex flex-col items-start px-6 py-6 gap-6">
            <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
              Azhar Mahmud
            </h2>
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                onClick={() => setIsNavOpened(false)}
                className="text-gray-800 text-[16px] hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
