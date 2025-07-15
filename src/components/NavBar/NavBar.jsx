import React, { useState } from "react";
import {
  Phone,
  Clock,
  ChevronDown,
  Search,
  Menu,
  X,
  Facebook,
  Linkedin,
  Youtube,
  PhoneCall,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Main NavBar */}
      <nav
        className={`relative w-full flex items-center justify-between px-4 lg:px-6 z-[100] bg-gradient-to-r from-[#1a237e] to-[#2266b3] shadow-lg backdrop-blur-md
        `}
      >
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" width={150} />
        </div>

        <ul className="hidden md:flex gap-8 items-center font-bold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `cursor-pointer transition-colors duration-200 px-2 py-1 rounded-lg ${
                isActive
                  ? "bg-white bg-opacity-10 text-[#270195] shadow"
                  : "hover:text-[#270195] text-white"
              }`
            }
            end
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `cursor-pointer transition-colors duration-200 px-2 py-1 rounded-lg ${
                isActive
                  ? "bg-white bg-opacity-10 text-[#270195] shadow"
                  : "hover:text-[#270195] text-white"
              }`
            }
          >
            ABOUT US
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `cursor-pointer transition-colors duration-200 px-2 py-1 rounded-lg ${
                isActive
                  ? "bg-white bg-opacity-10 text-[#270195] shadow"
                  : "hover:text-[#270195] text-white"
              }`
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative group cursor-pointer transition-colors duration-200 px-2 py-1 rounded-lg ${
                isActive
                  ? "bg-white bg-opacity-10 text-[#270195] shadow"
                  : "hover:text-[#270195] text-white"
              }`
            }
          >
            <span className="flex items-center">
              PRODUCT <ChevronDown size={16} className="ml-1" />
            </span>
            <ul className="absolute left-0 top-full bg-white text-[#270195] rounded shadow-lg mt-2 min-w-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-[100]">
              <li className="px-4 py-2 hover:bg-[#e6f0fa] cursor-pointer">
                Product 1
              </li>
              <li className="px-4 py-2 hover:bg-[#e6f0fa] cursor-pointer">
                Product 2
              </li>
            </ul>
          </NavLink>
        </ul>

        <div className="hidden lg:flex gap-8 items-center">
          <span className="flex items-center gap-2 text-white font-semibold">
            <span className="bg-[#270195] w-10 h-10 lg:w-15 lg:h-15 rounded-full border-3 border-[#918ca1] flex justify-center items-center transition duration-300">
              <PhoneCall className="w-3 h-3 lg:w-6 lg:h-6" />
            </span>
            <div className="flex flex-col gap-2">
              <span>Call Us</span>
              +201091040946 +201023150519 +201094400759
            </div>
          </span>
        </div>

        <button
          className="md:hidden ml-auto cursor-pointer text-white border p-1 border-white hover:bg-white hover:text-[#014caa] transition duration-300 rounded mr-10"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={32} />
        </button>
      </nav>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#181a2a] text-white transform transition-transform duration-300 z-[200] ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          <img src="/logo.png" alt="Logo" width={120} />
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white cursor-pointer border p-1 border-white hover:bg-white hover:text-[#3a5a7c] rounded transition duration-550"
          >
            <X
              size={32}
              className="transform hover:rotate-90 transition duration-550"
            />
          </button>
        </div>
        {/* <button className="block w-[90%] mx-auto mb-4 bg-[#4f46e5] text-white py-2 rounded font-bold flex items-center justify-center gap-2">
          Login <span className="ml-2">→</span>
        </button> */}
        <ul className="flex flex-col gap-2 px-6 mt-10">
          <Link
            to={"/"}
            onClick={() => setSidebarOpen(false)}
            className="py-2 border-b border-[#222]"
          >
            Home
          </Link>
          <Link
            to={"/contact"}
            onClick={() => setSidebarOpen(false)}
            className="py-2 border-b border-[#222]"
          >
            Contact
          </Link>
          <Link
            to={"/about"}
            onClick={() => setSidebarOpen(false)}
            className="py-2 border-b border-[#222]"
          >
            About
          </Link>
          <Link
            to={"/products"}
            onClick={() => setSidebarOpen(false)}
            className="py-2 border-b border-[#222] relative group cursor-pointer transition-colors duration-200"
          >
            <span className="flex items-center">
              PRODUCT <ChevronDown size={16} className="ml-1" />
            </span>
            <ul className="absolute left-0 top-full bg-white text-[#270195] rounded shadow-lg mt-2 min-w-[120px] opacity-0 group-hover:opacity-100 transition-opacity z-[300]">
              <li className="px-4 py-2 hover:bg-[#e6f0fa] cursor-pointer">
                Product 1
              </li>
              <li className="px-4 py-2 hover:bg-[#e6f0fa] cursor-pointer">
                Product 2
              </li>
            </ul>
          </Link>
        </ul>

        <div className="px-6 text-sm mt-30">
          <div className="flex items-center gap-2 mb-1">
            <Phone size={16} /> <br />
            <ul>
              <li>+201091040946 +201023150519</li>
              <li>+201094400759</li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">@</span> Info@bglpharma.com
          </div>
        </div>
        {/* socials */}
        <div className="flex gap-4 px-6 mt-6">
          <a
            href="#"
            className="px-2 py-3 border border-[#2c364f] hover:bg-white transition duration-200"
          >
            <Facebook size={24} className="text-[#2266b3]" />
          </a>
          <a
            href="#"
            className="px-2 py-3 border border-[#2c364f] hover:bg-white transition duration-200"
          >
            <X size={24} className="text-[#2266b3]" />
          </a>
          <a
            href="#"
            className="px-2 py-3 border border-[#2c364f] hover:bg-white transition duration-200"
          >
            <Linkedin size={24} className="text-[#2266b3]" />
          </a>
          <a
            href="#"
            className="px-2 py-3 border border-[#2c364f] hover:bg-white transition duration-200"
          >
            <Youtube size={24} className="text-[#2266b3]" />
          </a>
        </div>
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[150] cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
