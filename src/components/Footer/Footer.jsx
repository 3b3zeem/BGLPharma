import React, { useEffect, useRef, useState } from "react";
import {
  Clock,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Send,
  Facebook,
  Twitter,
  X,
  Youtube,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import useContact from "../../Hooks/useContact";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const formRef = useRef(null);
  const { data, loading, error, sendContact } = useContact();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const location = useLocation();
  const isActiveParent =
    location.pathname.startsWith("/Food-Additives") ||
    location.pathname.startsWith("/Feed-Additives") ||
    location.pathname.startsWith("/Chemicals") ||
    location.pathname.startsWith("/Cosmetic-Ingredients") ||
    location.pathname.startsWith("/API-Intermediates");

  const lastToast = useRef({ error: null, message: null });

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const message = e.target.elements.message.value.trim();
    if (!name || !email || !message) return;
    sendContact(name, email, message);
  };

  useEffect(() => {
    if (error && error !== lastToast.current.error) {
      toast.error(error);
      lastToast.current.error = error;
    }
    if (data && data.message && data.message !== lastToast.current.message) {
      toast.success(data.message);
      lastToast.current.message = data.message;
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [error, data]);

  const navigationLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "CONTACT", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1b2d85] via-[#1e499c] to-[#2261af] relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-20 w-48 h-48 bg-white/5 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-32 left-32 w-36 h-36 bg-white/8 rounded-full animate-pulse delay-700"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[50px] border-r-[50px] border-b-[75px] border-l-transparent border-r-transparent border-b-white/5 animate-spin"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-wrap gap-8 lg:gap-10 xl:gap-16 p-8 lg:p-16 min-h-screen max-w-7xl mx-auto">
        {/* Logo and Company Info Section */}
        <div className="flex flex-col gap-8 text-white flex-1 min-w-[260px] max-w-[350px]">
          <div className="space-y-6">
            <div className="flex items-center">
              <Link to={"/"}>
                <img src="/logo.png" alt="Logo" width={120} />
              </Link>
            </div>
            <p className="text-md leading-relaxed text-white/90 max-w-sm">
              Your Trusted Partner in Pharmaceutical Ingredients.
            </p>
          </div>

          {/* <div className="flex flex-col gap-4">
            <p className="text-md leading-relaxed text-white/90 max-w-sm">
              Contact us via our phone numbers, our headquarter and social media
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <X size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div> */}
        </div>

        {/* Navigation Links Section */}
        <div className="flex flex-col gap-6 flex-1 min-w-[200px] max-w-[300px]">
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <div className="grid gap-3">
            {navigationLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-white/80 hover:text-white transition-all duration-300 py-2 border-b border-transparent hover:border-white/30 hover:translate-x-2"
              >
                {link.name}
              </Link>
            ))}
            <div className="relative group">
              <span
                className={`flex items-center text-white/80 hover:text-white transition-all duration-300 py-2 border-b border-transparent hover:border-white/30 hover:translate-x-2 ${
                  isActiveParent
                    ? "bg-opacity-10 text-[#270195]"
                    : "hover:text-[#270195] text-white"
                }`}
              >
                PRODUCT <ChevronDown size={16} className="ml-1" />
              </span>

              <div className="pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 opacity-0 transition-opacity duration-300 absolute -left-5 top-full z-[100]">
                <ul className="bg-white text-[#270195] rounded shadow-lg mt-2 min-w-[200px]">
                  <li>
                    <Link
                      to="/Food-Additives"
                      onClick={() => setSidebarOpen(false)}
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
                      onClick={() => setSidebarOpen(false)}
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
                      onClick={() => setSidebarOpen(false)}
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
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6 flex-1 min-w-[220px] max-w-[350px]">
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Clock size={18} />
            </div>
            <div>
              <h3 className="text-white text-lg font-semibold">
                Opening Hours:
              </h3>
              <h3 className="text-white">10.00 AM - 4.00 PM</h3>
              <p className="text-white/80 text-sm">Mon - Sat - Sun</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Phone size={18} />
            </div>
            <div>
              <h3 className="text-white font-semibold">Phone Call:</h3>
              <p className="text-white/80 font-sm flex flex-col">
                <span>+201091040946</span>
                <span>+201094400759</span>
                <span>+201023150519</span>
              </p>
              <div className="flex mt-2 items-center">
                <span className="text-lg tracking-wider mr-2 text-white">WhatsApp: </span>
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
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white flex-shrink-0">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-white font-semibold">
                Questions? Send us an email.
              </p>
              <div className="flex flex-col gap-1">
                <a
                  href="mailto:info@bglpharma.com"
                  className="text-white/80 text-sm"
                >
                  - info@bglpharma.com
                </a>
                <a
                  href="mailto:sales@bglpharma.com"
                  className="text-white/80 text-sm"
                >
                  - sales@bglpharma.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white flex-shrink-0">
              <MapPin size={18} />
            </div>
            <div>
              <h3 className="text-white font-semibold">Our location:</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Apartment 1, Ground Floor, Plot 187, Neighborhood 28, 10th of
                Ramadan Sharkia
              </p>
              <h3 className="text-white font-semibold mt-2">BGL India :</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                414 - Atlantis, Vadi Wadi, Vadodara (GJ)- India - 390023
              </p>
            </div>
          </div>
        </div>

        {/* Contact and Form Section */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 flex-1 min-w-[260px] max-w-[400px]"
          autoComplete="off"
        >
          {/* Contact Form */}
          <div className="grid gap-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>

            {/* <div>
              <label className="block text-white text-sm font-medium mb-2">
                Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                placeholder="Website"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                placeholder="Country"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                placeholder="Company"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300"
              />
            </div> */}

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 backdrop-blur-sm focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all duration-300 resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-white/20 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 tracking-wide cursor-pointer"
            >
              <Send size={18} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="bg-black/20 backdrop-blur-sm px-8 lg:px-16 py-6 z-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 text-white/80 text-sm max-w-7xl mx-auto">
          <div>
            © All rights reserved 2025 | by{" "}
            <a
              href="#"
              className="hover:text-[#2261af] transition duration-300"
            >
              Bgl Pharma
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
