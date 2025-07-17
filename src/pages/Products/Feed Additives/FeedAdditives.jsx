import React, { useEffect, useState } from "react";
import Meta from "../../../components/Meta/Meta";
import FeedAdditivesData from "./FeedAdditivesData.json";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronsRight, ChevronUp, House } from "lucide-react";
import AOS from "aos";

import FeedBanner from "../../../assets/Products/feed.jpeg";

const FeedAdditives = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [expandedItems, setExpandedItems] = useState({});

  const toggleAccordion = (category, index) => {
    setExpandedItems((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [index]: !prev[category]?.[index],
      },
    }));
  };

  return (
    <div className="w-full">
      <Meta
        title="Food Additives"
        description="Explore our range of food additives designed to enhance flavor, texture, and shelf life. Our products are compliant with food safety standards and are suitable for various applications in the food industry."
      />

      <section className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${FeedBanner})` }}
        ></div>

        <div className="relative bg-gradient-to-r from-[#1a237e]/50 to-[#2266b0]/50 flex items-start justify-start h-full px-4 ">
          <div className=" p-8 rounded-lg text-white">
            <h2
              className="text-5xl md:text-6xl font-bold mb-4"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              Feed Additives
            </h2>
            <p
              className="text-lg font-bold flex items-start justify-start gap-2"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <Link
                to={"/"}
                className="hover:text-[#270195] transition duration-200 cursor-pointer"
              >
                <House />
              </Link>{" "}
              <ChevronsRight /> Products
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-25">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(FeedAdditivesData).map(([category, items]) => (
            <div key={category} className="mb-8 tracking-wider">
              <h3 className="text-4xl font-extrabold mb-6 text-[#270195]">
                {category}
              </h3>
              <ul className="space-y-5">
                {items.map((item, index) => (
                  <li key={index} className="text-[#3c5975] border-b pb-2">
                    <div
                      className={`flex items-center cursor-pointer hover:text-[#270195] hover:font-bold ${
                        expandedItems[category]?.[index]
                          ? "text-[#270195] font-bold"
                          : ""
                      }`}
                      onClick={() => toggleAccordion(category, index)}
                    >
                      <span className="mr-2">
                        {item.subtypes &&
                          item.subtypes.length > 0 &&
                          (expandedItems[category]?.[index] ? (
                            <ChevronUp />
                          ) : (
                            <ChevronRight />
                          ))}
                      </span>
                      {item.name && <span>{item.name}</span>}
                    </div>
                    {item.subtypes && (
                      <div
                        className="ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                          maxHeight: expandedItems[category]?.[index]
                            ? "1000px"
                            : "0",
                          opacity: expandedItems[category]?.[index] ? 1 : 0,
                          pointerEvents: expandedItems[category]?.[index]
                            ? "auto"
                            : "none",
                        }}
                      >
                        <div className="space-y-1">
                          {item.subtypes.map((subtype, subIndex) =>
                            subtype.name ? (
                              subtype.name.startsWith("Chemical Formula:") ? (
                                <span key={subIndex} className="block ml-2">
                                  {subtype.name
                                    }
                                </span>
                              ) : (
                                <span key={subIndex} className="block ml-2">
                                  {subtype.name}
                                </span>
                              )
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedAdditives;
