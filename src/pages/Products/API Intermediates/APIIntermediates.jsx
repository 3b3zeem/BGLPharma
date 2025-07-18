import React, { useEffect, useState } from "react";
import Meta from "../../../components/Meta/Meta";
import APIIntermediatesData from "./APIIntermediatesData.json";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronsRight, ChevronUp, House } from "lucide-react";
import AOS from "aos";

import APIBanner from "../../../assets/Products/API.jpg";

const APIIntermediates = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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

  const allItems = [];

  Object.entries(APIIntermediatesData["Human APIs"]).forEach(
    ([subcategory, items]) => {
      items.forEach((item, index) => {
        allItems.push({ ...item, subcategory, index });
      });
    }
  );

  const mid = Math.ceil(allItems.length / 2);
  const leftItems = allItems.slice(0, mid);
  const rightItems = allItems.slice(mid);

  return (
    <div className="w-full">
      <Meta
        title="API & Intermediates"
        description="Explore our range of Active Pharmaceutical Ingredients (APIs) and intermediates, essential for pharmaceutical manufacturing. Our products meet stringent quality standards and are suitable for various therapeutic applications."
      />

      <section className="relative h-[300px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${APIBanner})` }}
        ></div>

        <div className="relative bg-gradient-to-r from-[#1a237e]/50 to-[#2266b0]/50 flex items-start justify-start h-full px-4">
          <div className="p-8 rounded-lg text-white">
            <h2
              className="text-5xl md:text-6xl font-bold mb-4"
              data-aos="fade-right"
              data-aos-delay="0"
            >
              API & Intermediates
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
        <div className="w-full">
          <div className="grid grid-cols-1 gap-8">
            <div className="mb-8 tracking-wider">
              <h4 className="text-4xl font-extrabold mb-6 text-[#270195]">
                Human APIs:
              </h4>
              {Object.entries(APIIntermediatesData["Human APIs"]).map(
                ([subcategory, items]) => {
                  const mid = Math.ceil(items.length / 2);
                  const col1 = items.slice(0, mid);
                  const col2 = items.slice(mid);
                  return (
                    <div key={subcategory} className="mb-6">
                      <h5 className="text-xl font-semibold mb-3 text-[#3c5975] indent-1">
                        {subcategory}
                      </h5>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ul className="space-y-5">
                          {col1.map((item, index) => (
                            <li
                              key={index}
                              className="text-[#3c5975] border-b pb-2"
                            >
                              <div
                                className={`flex items-center cursor-pointer hover:text-[#270195] hover:font-bold ${
                                  expandedItems[subcategory]?.[index]
                                    ? "text-[#270195] font-bold"
                                    : ""
                                }`}
                                onClick={() =>
                                  toggleAccordion(subcategory, index)
                                }
                              >
                                <span className="mx-2 ">
                                  {item.description &&
                                    (expandedItems[subcategory]?.[index] ? (
                                      <ChevronUp />
                                    ) : (
                                      <ChevronRight />
                                    ))}
                                </span>
                                {item.name && <span>{item.name}</span>}
                              </div>
                              {item.description && (
                                <div
                                  className="ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out"
                                  style={{
                                    maxHeight: expandedItems[subcategory]?.[
                                      index
                                    ]
                                      ? "1000px"
                                      : "0",
                                    opacity: expandedItems[subcategory]?.[index]
                                      ? 1
                                      : 0,
                                    pointerEvents: expandedItems[subcategory]?.[
                                      index
                                    ]
                                      ? "auto"
                                      : "none",
                                  }}
                                >
                                  <div className="space-y-1">
                                    <span className="block ml-2">
                                      {item.description}
                                    </span>
                                  </div>
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-5">
                          {col2.map((item, index) => {
                            const realIndex = index + mid;
                            return (
                              <li
                                key={realIndex}
                                className="text-[#3c5975] border-b pb-2"
                              >
                                <div
                                  className={`flex items-center cursor-pointer hover:text-[#270195] hover:font-bold ${
                                    expandedItems[subcategory]?.[realIndex]
                                      ? "text-[#270195] font-bold"
                                      : ""
                                  }`}
                                  onClick={() =>
                                    toggleAccordion(subcategory, realIndex)
                                  }
                                >
                                  <span className="mx-2 ">
                                    {item.description &&
                                      (expandedItems[subcategory]?.[
                                        realIndex
                                      ] ? (
                                        <ChevronUp />
                                      ) : (
                                        <ChevronRight />
                                      ))}
                                  </span>
                                  {item.name && <span>{item.name}</span>}
                                </div>
                                {item.description && (
                                  <div
                                    className="ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out"
                                    style={{
                                      maxHeight: expandedItems[subcategory]?.[
                                        realIndex
                                      ]
                                        ? "1000px"
                                        : "0",
                                      opacity: expandedItems[subcategory]?.[
                                        realIndex
                                      ]
                                        ? 1
                                        : 0,
                                      pointerEvents: expandedItems[
                                        subcategory
                                      ]?.[realIndex]
                                        ? "auto"
                                        : "none",
                                    }}
                                  >
                                    <div className="space-y-1">
                                      <span className="block ml-2">
                                        {item.description}
                                      </span>
                                    </div>
                                  </div>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="mb-8 tracking-wider">
              <h4 className="text-4xl font-extrabold mb-6 text-[#270195]">
                Veterinary APIs:
              </h4>
              <ul className="space-y-5">
                {APIIntermediatesData["Veterinary APIs"].map((item, index) => (
                  <li key={index} className="text-[#3c5975] border-b pb-2">
                    <div
                      className={`flex items-center cursor-pointer hover:text-[#270195] hover:font-bold ${
                        expandedItems["Veterinary APIs"]?.[index]
                          ? "text-[#270195] font-bold"
                          : ""
                      }`}
                      onClick={() => toggleAccordion("Veterinary APIs", index)}
                    >
                      <span className="mr-2">
                        {item.subtypes &&
                          item.subtypes.length > 0 &&
                          (expandedItems["Veterinary APIs"]?.[index] ? (
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
                          maxHeight: expandedItems["Veterinary APIs"]?.[index]
                            ? "1000px"
                            : "0",
                          opacity: expandedItems["Veterinary APIs"]?.[index]
                            ? 1
                            : 0,
                          pointerEvents: expandedItems["Veterinary APIs"]?.[
                            index
                          ]
                            ? "auto"
                            : "none",
                        }}
                      >
                        <div className="space-y-1">
                          {item.subtypes.map((subtype, subIndex) =>
                            subtype.name ? (
                              <span key={subIndex} className="block ml-2">
                                {subtype.name}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8 tracking-wider">
              <h3 className="text-4xl font-extrabold mb-6 text-[#270195]">
                Excipients:
              </h3>
              <ul className="space-y-5">
                {APIIntermediatesData["Excipients"].map((item, index) => (
                  <li key={index} className="text-[#3c5975] border-b pb-2">
                    <div
                      className={`flex items-center cursor-pointer hover:text-[#270195] hover:font-bold ${
                        expandedItems["Excipients"]?.[index]
                          ? "text-[#270195] font-bold"
                          : ""
                      }`}
                      onClick={() => toggleAccordion("Excipients", index)}
                    >
                      <span className="mr-2">
                        {item.subtypes &&
                          item.subtypes.length > 0 &&
                          (expandedItems["Excipients"]?.[index] ? (
                            <ChevronUp />
                          ) : (
                            <ChevronRight />
                          ))}
                      </span>
                      {item.name && <span>{item.name}</span>}
                    </div>
                    {/* {item.subtypes && (
                      <div
                        className="ml-6 mt-2 overflow-hidden transition-all duration-300 ease-in-out"
                        style={{
                          maxHeight: expandedItems["Excipients"]?.[index]
                            ? "1000px"
                            : "0",
                          opacity: expandedItems["Excipients"]?.[index] ? 1 : 0,
                          pointerEvents: expandedItems["Excipients"]?.[index]
                            ? "auto"
                            : "none",
                        }}
                      >
                        <div className="space-y-1">
                          {item.subtypes.map((subtype, subIndex) =>
                            subtype.name ? (
                              <span key={subIndex} className="block ml-2">
                                {subtype.name}
                              </span>
                            ) : null
                          )}
                        </div>
                      </div>
                    )} */}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APIIntermediates;
