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
  Mail,
  ChevronUp,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const NavBar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarProductOpen, setSidebarProductOpen] = useState(false);
  const location = useLocation();
  const isActiveParent =
    location.pathname.startsWith("/Food-Additives") ||
    location.pathname.startsWith("/Feed-Additives") ||
    // location.pathname.startsWith("/Chemicals") ||
    // location.pathname.startsWith("/Cosmetic-Ingredients") ||
    location.pathname.startsWith("/API-Intermediates");

  return (
    <React.Fragment>
      {/* Main NavBar */}
      <nav
        className={`relative w-full flex items-center justify-between px-4 py-4 lg:px-6 z-[100] bg-gradient-to-r from-[#1a237e] to-[#2266b3] shadow-lg backdrop-blur-md
        `}
      >
        <div className="flex items-center">
          <Link to={"/"}>
            <img src="/logo.png" alt="Logo" width={80} />
          </Link>
        </div>

        <ul className="hidden md:flex gap-8 items-center font-bold">
          {/* Home */}
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
          {/* About */}
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
          {/* Contact */}
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
          {/* Products */}
          <div className="relative">
            <span
              onClick={() => setSidebarProductOpen((open) => !open)}
              className={`transition-colors duration-200 py-1 rounded-lg flex items-center cursor-pointer ${
                isActiveParent
                  ? "bg-white bg-opacity-10 text-[#270195] px-2"
                  : "hover:text-[#270195] text-white "
              }`}
            >
              PRODUCT{" "}
              {sidebarProductOpen ? (
                <ChevronUp size={16} className="ml-1" />
              ) : (
                <ChevronDown size={16} className="ml-1" />
              )}
            </span>

            <div
              className={`absolute -left-5 top-full z-[100] overflow-hidden transition-all duration-300 ease-in-out ${
                sidebarProductOpen
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
              style={{
                maxHeight: sidebarProductOpen ? "1000px" : "0",
                opacity: sidebarProductOpen ? 1 : 0,
              }}
            >
              <ul className="bg-white text-[#270195] rounded shadow-lg mt-2 min-w-[200px]">
                <li>
                  <Link
                    to="/Food-Additives"
                    onClick={() => {
                      setSidebarOpen(false);
                      setSidebarProductOpen(false);
                    }}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      location.pathname === "/Food-Additives"
                        ? "bg-[#e6f0fa] font-semibold"
                        : "hover:bg-[#e6f0fa]"
                    }`}
                  >
                    Food Additives
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Feed-Additives"
                    onClick={() => {
                      setSidebarOpen(false);
                      setSidebarProductOpen(false);
                    }}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      location.pathname === "/Feed-Additives"
                        ? "bg-[#e6f0fa] font-semibold"
                        : "hover:bg-[#e6f0fa]"
                    }`}
                  >
                    Feed Additives
                  </Link>
                </li>
                <li>
                  <Link
                    to="/API-Intermediates"
                    onClick={() => {
                      setSidebarOpen(false);
                      setSidebarProductOpen(false);
                    }}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      location.pathname === "/API-Intermediates"
                        ? "bg-[#e6f0fa] font-semibold"
                        : "hover:bg-[#e6f0fa]"
                    }`}
                  >
                    API & Intermediates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </ul>

        <div className="hidden lg:flex gap-8 items-center">
          <span className="flex items-center gap-2 text-white font-semibold">
            <span className="bg-[#270195] w-10 h-10 lg:w-15 lg:h-15 rounded-full border-3 border-[#918ca1] flex justify-center items-center transition duration-300">
              <PhoneCall className="w-3 h-3 lg:w-6 lg:h-6" />
            </span>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2">
                <span>Call Us</span>
                +201091040946 +201094400759 +201023150519
              </div>
              <div className="flex mt-2 items-center">
                <span className="text-lg tracking-wider mr-2">WhatsApp: </span>
                <a
                  href="https://wa.me/201023150519"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl bg-white p-2 text-green-500 rounded"
                >
                  <FaWhatsapp size={30} />{" "}
                </a>
              </div>
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
          <div
            className="flex items-center"
            onClick={() => setSidebarOpen(false)}
          >
            <Link to={"/"}>
              <img src="/logo.png" alt="Logo" width={80} />
            </Link>
          </div>
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
        <nav className="flex flex-col gap-2 px-6 mt-10">
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
          {/* Products */}
          <div className="relative">
            <span
              onClick={() => setSidebarProductOpen((open) => !open)}
              className={`transition-colors duration-200 py-1 rounded-lg flex items-center cursor-pointer ${
                isActiveParent
                  ? "bg-white bg-opacity-10 text-[#270195] px-2"
                  : "hover:text-[#270195] text-white "
              }`}
            >
              PRODUCT{" "}
              {sidebarProductOpen ? (
                <ChevronUp size={16} className="ml-1" />
              ) : (
                <ChevronDown size={16} className="ml-1" />
              )}
            </span>

            <div
              className={`absolute -left-5 top-full z-[100] overflow-hidden transition-all duration-300 ease-in-out ${
                sidebarProductOpen
                  ? "pointer-events-auto"
                  : "pointer-events-none"
              }`}
              style={{
                maxHeight: sidebarProductOpen ? "1000px" : "0",
                opacity: sidebarProductOpen ? 1 : 0,
              }}
            >
              <ul className="bg-white text-[#270195] rounded shadow-lg mt-2 min-w-[200px]">
                <li>
                  <Link
                    to="/Food-Additives"
                    onClick={() => {
                      setSidebarOpen(false);
                      setSidebarProductOpen(false);
                    }}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      location.pathname === "/Food-Additives"
                        ? "bg-[#e6f0fa] font-semibold"
                        : "hover:bg-[#e6f0fa]"
                    }`}
                  >
                    Food Additives
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Feed-Additives"
                    onClick={() => {
                      setSidebarOpen(false);
                      setSidebarProductOpen(false);
                    }}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      location.pathname === "/Feed-Additives"
                        ? "bg-[#e6f0fa] font-semibold"
                        : "hover:bg-[#e6f0fa]"
                    }`}
                  >
                    Feed Additives
                  </Link>
                </li>
                <li>
                  <Link
                    to="/API-Intermediates"
                    onClick={() => {
                      setSidebarOpen(false);
                      setSidebarProductOpen(false);
                    }}
                    className={`block px-4 py-2 transition-colors duration-200 ${
                      location.pathname === "/API-Intermediates"
                        ? "bg-[#e6f0fa] font-semibold"
                        : "hover:bg-[#e6f0fa]"
                    }`}
                  >
                    API & Intermediates
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="flex flex-col gap-4 px-6 text-sm mt-30">
          <div className="flex mt-2 items-center">
            <span className="text-lg tracking-wider mr-2">WhatsApp: </span>
            <a
              href="https://wa.me/201023150519"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl bg-white p-2 text-green-500 rounded"
            >
              <FaWhatsapp size={30} />{" "}
            </a>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Phone size={18} />
            </div>
            <ul>
              <li>
                +201091040946 <br /> +201023150519 <br /> +201023150519
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Mail size={18} />
            </div>
            <div className="flex flex-col">
              <a href="mailto:Info@bglpharma.com" className="text-[14px] mt-1">
                Info@bglpharma.com
              </a>
              <a href="mailto:sales@bglpharma.com" className="text-[14px] mt-1">
                sales@bglpharma.com
              </a>
            </div>
          </div>
        </div>
        {/* socials */}
        {/* <div className="flex gap-4 px-6 mt-6">
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
        </div> */}
      </div>
      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-[150] cursor-pointer"
          onClick={() => {
            setSidebarOpen(false);
            setSidebarProductOpen(false);
          }}
        ></div>
      )}
    </React.Fragment>
  );
};

export default NavBar;
