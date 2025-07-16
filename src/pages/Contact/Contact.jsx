import React, { useEffect } from "react";
import Meta from "../../components/Meta/Meta";
import contact from "../../assets/contact.jpg";
import {
  ChevronsRight,
  Facebook,
  Headset,
  Linkedin,
  MailSearch,
  MapPinned,
  MoveRight,
  X,
  Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Start from "../../assets/section-title.png";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full">
      <Meta
        title="Contact Us"
        description="Get in touch with us for any inquiries or support."
      />

      <section className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${contact})` }}
        ></div>

        <div className="relative bg-gradient-to-r from-[#1a237e]/50 to-[#2266b0]/50 flex items-start justify-start h-full px-4 ">
          <div className=" p-8 rounded-lg text-white">
            <h2
              className="text-5xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Contact
            </h2>
            <p
              className="text-lg font-bold flex items-center justify-center gap-2"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <Link
                to={"/"}
                className="hover:text-[#270195] transition duration-200 cursor-pointer"
              >
                Home
              </Link>{" "}
              <ChevronsRight /> Contact
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* LEFT – Contact Info Section */}
          <div className="bg-[#2e00ad] text-white lg:w-1/2 w-full p-15 space-y-10">
            <h3 className="text-4xl font-[700] mb-12">Contact Information</h3>
            <p className="text-white text-lg tracking-wider">
              Contact us via our phone numbers, our headquarter and social media
            </p>

            {/* Phone */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-19 h-19 bg-white rounded-full flex items-center justify-center mb-1">
                <span className="border-2 border-dashed border-[#3c72fc] rounded-full p-3">
                  <Headset className="text-[#3c72fc] w-8 h-8" />
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-lg tracking-wider">Call Us 7/24</p>
                <p className="md:text-xl text-lg font-semibold mt-1 flex ">
                  +201091040946 {"  "} +201023150519 +201094400759
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col md:flex-row items-start gap-3">
              <div className="w-19 h-19 bg-white rounded-full flex items-center justify-center mt-3">
                <span className="border-2 border-dashed border-[#3c72fc] rounded-full p-3">
                  <MailSearch className="text-[#3c72fc] w-8 h-8" />
                </span>
              </div>
              <div className="flex flex-col items-start">
                <p className="text-md text-white/80">Make a Quote</p>
                <p className="font-[700] sm:text-[24px] text-[14px] mt-1">
                  Info@bglpharma.com
                </p>
                <p className="font-[700] sm:text-[24px] text-[14px] mt-1">
                  sales@bglpharma.com
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-start gap-3">
              <div className="w-19 h-19 bg-white rounded-full flex items-center justify-center mb-2">
                <span className="border-2 border-dashed border-[#3c72fc] rounded-full p-3">
                  <MapPinned className="text-[#3c72fc] w-8 h-8" />
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-md font-[500]">Location</p>
                <p className="text-2xl font-bold">
                  Apartment 1, Ground Floor, Plot 187, Neighborhood 28, 10th of
                  Ramadan Sharkia
                </p>
                <p className="text-md font-[500]">BGL India :</p>
                <p className="text-2xl font-bold">
                  414 - Atlantis, Vadi Wadi, Vadodara (GJ)- India - 390023
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex flex-col items-start gap-3 mb-2">
              <p className="font-semibold text-[18px]">Follow Social:</p>
              <div className="flex gap-4">
                <a href="#" className="bg-white p-2 rounded-full">
                  <Facebook color="black" />
                </a>
                <a href="#" className="bg-white p-2 rounded-full">
                  <X color="black" />
                </a>
                <a href="#" className="bg-white p-2 rounded-full">
                  <Linkedin color="black" />
                </a>
                <a href="#" className="bg-white p-2 rounded-full">
                  <Youtube color="black" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT – Contact Form */}
          <div className="lg:w-1/2 w-full p-8">
            <div
              className="flex gap-2 items-center mb-4 text-md font-medium text-[#270195] uppercase"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <img src={Start} alt="Get In Touch" />
              Get In Touch
            </div>
            <h2
              className="text-4xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              Ready To Get Started?
            </h2>
            <p
              className="text-[#3c5975] mb-6 text-md"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Contact us via our phone numbers, our headquarter and social media
            </p>

            <form className="space-y-10">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex flex-col gap-3 md:w-1/2 w-full">
                  <label>Your Name*</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 px-4 py-6 w-full focus-visible:outline-none focus-visible:border-[#270195] transition duration-300"
                  />
                </div>
                <div className="flex flex-col gap-3 md:w-1/2 w-full">
                  <label>Your Email*</label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="border border-gray-300 px-4 py-6 w-full focus-visible:outline-none focus-visible:border-[#270195] transition duration-300"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <label>Your Message*</label>
                <textarea
                  rows="5"
                  placeholder="Write Message"
                  className="border border-gray-300 px-4 py-6 w-full focus-visible:outline-none focus-visible:border-[#270195] transition duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#270195] text-white  customEffect cursor-pointer group transition duration-300"
              >
                <span className="flex items-center justify-center gap-2 px-8 py-5">
                  Send Message{" "}
                  <MoveRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d8867.433894820337!2d31.738768862799347!3d30.310811673946002!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDE4JzM5LjgiTiAzMcKwNDQnMjAuNSJF!5e1!3m2!1sen!2sus!4v1752672332513!5m2!1sen!2sus"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
