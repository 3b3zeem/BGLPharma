import React from "react";
import about from "../../../assets/Images/AboutHome.jpeg";

const About = () => {
  return (
    <div className="w-full mx-auto py-20">
      <section class="relative h-[550px] overflow-hidden">
        <div
          class="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{ backgroundImage: `url(${about})` }}
        ></div>

        <div class="relative z-10 flex items-center justify-center h-full px-4">
          <div class="bg-[#3c5975]/50  text-center p-8 rounded-lg max-w-2xl text-white">
            <h2 class="text-5xl font-bold mb-4 text-[#270195]">About Rivita</h2>
            <p class="text-lg font-medium">
              Rivita distributes high-quality chemical and natural ingredients
              worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-30 px-4 sm:px-6 lg:px-8 bg-white md:px-20 text-gray-800">
        <h3 className="text-xl font-[700] mb-6 text-[#3c5975]">
          Rivita distributes high-quality chemical and natural ingredients
          worldwide.
        </h3>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
          We focus on the optimization of the supply chain of feed additives, food additives, cosmetic ingredients, Active Pharmaceutical Ingredients (API) and intermediates, and natural plant extracts. We are committed to providing cost-effective high-quality chemical ingredients to worldwide clients in the feed, food, cosmetics, and pharmaceutical industry.
        </p>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
          With 20 years of industry experience, we have a profound understanding of the revolution of the worldwide market and rich experience. Combined with timely access to raw material industry information and comprehensive data analysis ability, we are able to provide not only the products but also a reliable forecast of market trends.
        </p>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
         We have established solid supply relationships with all the leading vitamins, amino acids, APIs, and special additive manufacturers in China. With great support and service from our suppliers, we are able to provide timely and excellent service to our clients.
        </p>
        <p className="mb-4 text-[#3c5975] space-x-0.5 break-all tracking-wider">
          We already expanded our business to more than 120 countries and regions with our high-quality chemical raw material products and attentive services.
        </p>
        <p className="text-[#3c5975] space-x-0.5 break-all tracking-wider">
          Continuously optimizing the chemical and natural material supply chain and ensuring a stable supply of high-quality products for customers is our core business.
        </p>
      </section>
    </div>
  );
};

export default About;
