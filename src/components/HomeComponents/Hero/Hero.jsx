import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { motion } from "framer-motion";

import swipe1 from "../../../assets/Images/swpie1.jpg";
import swipe2 from "../../../assets/Images/swpie2.jpg";
import swipe3 from "../../../assets/Images/swpie3.jpg";
import swipe4 from "../../../assets/Images/swpie4.jpg";

import RHero from "../../../assets/RHero.png";
import RHero2 from "../../../assets/RHero2.png";
import RHero3 from "../../../assets/RHero3.png";

const Hero = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  const slides = [
    {
      image: swipe1,
      title: "BGL Pharma",
      subtitle: "Your Trust Partner in Egypt",
      description:
        "At BGL Pharma Egypt, we are dedicated to delivering excellence in the sourcing and supply of Active Pharmaceutical Ingredients (APIs).",
      buttonText: "Explore More →",
    },
    {
      image: swipe2,
      title: "BGL Pharma in Pharmaconex",
      subtitle: "Stay Tuned",
      description: "1-3 September Egypt International Exhibition",
      buttonText: "Explore More →",
    },
    {
      image: swipe3,
      title: "Innovation in Pharma",
      subtitle: "Leading the Future",
      description: "Cutting-edge solutions for pharmaceutical needs.",
      buttonText: "Explore More →",
    },
    {
      image: swipe4,
      title: "Quality Assurance",
      subtitle: "Our Commitment",
      description: "Ensuring the highest standards in every product.",
      buttonText: "Explore More →",
    },
  ];

  const settings = {
    dots: true,
    fade: true,
    infinite: slides.length > 1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    cssEase: "ease-in-out",
    afterChange: (current) => setCurrentSlide(current),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <ul style={{ margin: "0", padding: "0" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          background: "white",
          cursor: "pointer",
        }}
        className="slick-dot"
      ></div>
    ),
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div
              className="relative h-[500px] sm:h-[600px] md:h-[650px] lg:h-[750px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <motion.img
                src={RHero}
                alt="RHero"
                className="absolute right-0 top-0 z-100"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                key={`img1-${currentSlide}`}
                src={RHero3}
                alt="RHero"
                className="absolute right-0 top-0 hidden md:block z-50"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
              />
              <motion.img
                key={`img2-${currentSlide}`}
                src={RHero2}
                alt="RHero"
                className="absolute -right-2 top-10 hidden md:block"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
              />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white bg-black/35 z-150">
                <div className="px-4 sm:px-8 max-w-4xl mx-auto">
                  <motion.span
                    className="text-white text-xl sm:text-2xl mb-2 bg-gray-50/15 py-1 px-2"
                    key={currentSlide + "-sub"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    {slide.subtitle}
                  </motion.span>
                  <motion.h1
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-[5em] font-bold leading-tight"
                    key={currentSlide + "-title"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    <span className="text-white">{slide.title}</span>
                  </motion.h1>
                  <motion.p
                    className="text-white text-lg mb-10"
                    key={currentSlide + "-desc"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                  <motion.button
                    className="bg-[#014caa] text-white px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded text-base sm:text-lg cursor-pointer customEffect"
                    onClick={() => navigate("/about")}
                    key={currentSlide + "-btn"}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    <span>{slide.buttonText}</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <style>
        {`
          .slick-dots li.slick-active .slick-dot {
            background-color: #1e40af;
            box-shadow: 0 0 0 2px #ffffff;
            width: 14px;
            height: 14px;
          }
          .slick-dots li {
            margin: 0 5px;
          }
          .slick-dots {
            bottom: 20px !important;
          }
          .overflow-hidden {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .overflow-hidden::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default Hero;
