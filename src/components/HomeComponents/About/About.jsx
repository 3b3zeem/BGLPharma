import React, { useEffect } from "react";
import about from "../../../assets/Images/AboutHome.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="w-full mx-auto pt-30 relative">
      <section className="relative h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: `url(${about})` }}
        ></div>

        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="bg-[#3c5975]/50  text-center p-8 rounded-lg max-w-2xl text-white">
            <h2
              className="text-5xl font-bold mb-4 text-[#270195]"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              About BGL Pharma
            </h2>
            <p
              className="text-lg font-medium"
              data-aos="fade-left"
              data-aos-delay="250"
            >
              Your Trusted Partner in Pharmaceutical Ingredients.
            </p>
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto py-30 px-4 sm:px-6 lg:px-8 bg-white md:px-20 text-gray-800 relative"
        data-aos="fade-right"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="text-xl font-[700] mb-6 text-[#3c5975]">
          BGL Pharma is a trusted global partner in chemical and natural
          ingredient supply.
        </h3>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
          BGL Pharma specializes in the optimization of the global supply chain
          for feed additives, food additives, cosmetic ingredients, Active
          Pharmaceutical Ingredients (APIs), intermediates, and natural plant
          extracts. We are dedicated to providing cost-effective, high-quality
          chemical ingredients to clients in the feed, food, cosmetics, and
          pharmaceutical industries.
        </p>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
          With over 7 years of experience in international trading, BGL Pharma
          has developed a strong understanding of global market trends and
          supply dynamics. Leveraging real-time access to raw material insights
          and deep industry analysis, we offer not only reliable products but
          also strategic market intelligence and forecasting to support our
          clients’ decisions.
        </p>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
          We are proud to maintain long-term partnerships with leading
          manufacturers in China, India, Europe, and the USA, allowing us to
          ensure stable supply, consistent quality, and competitive pricing
          across our entire product range.
        </p>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
          Today, BGL Pharma serves over 120 customers across various regions,
          delivering value through responsiveness, transparency, and trust.
        </p>
        <p className="text-[#3c5975] space-x-0.5 break-all tracking-wider">
          Our core mission is to continuously optimize the chemical and natural
          material supply chain, securing a stable and high-quality source of
          products to empower our clients’ continued success.
        </p>
      </section>
    </div>
  );
};

export default About;
