import React, { useEffect } from "react";
import Meta from "../../components/Meta/Meta";
import about from "../../assets/Images/AboutHome.jpeg";
import { Link } from "react-router-dom";
import {
  ChevronsRight,
  PieChart,
  ShieldCheck,
  Lightbulb,
  Heart,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import img1 from "../../assets/About1.jpg";
import img2 from "../../assets/About2.jpg";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const features = [
    {
      icon: PieChart,
      title: "Realistic",
      description:
        "We listen to clients' demands attentively with humbleness in order to fulfill their needs properly and accurately.",
    },
    {
      icon: ShieldCheck,
      title: "Responsible",
      description:
        "We persistently pursue strict quality control to ensure the safety and quality of raw material products from the source to the hands of customers.",
    },
    {
      icon: Lightbulb,
      title: "Keeping Innovating",
      description:
        "Constantly, we focus on innovation of processes and services in order to accompany our client in the full procedure of selecting products and logistic solutions.",
    },
    {
      icon: Heart,
      title: "Grateful",
      description:
        "Sustainable development is important for us and our world so that our main criteria for selecting suppliers is their environmental performance.",
    },
  ];

  return (
    <div className="w-full">
      <Meta
        title="About Us"
        description="Learn more about BGL Pharma and our story."
      />

      <section className="relative h-[550px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${about})` }}
        ></div>

        <div className="relative bg-[#3c5975]/50 flex items-center justify-center h-full px-4 ">
          <div className=" p-8 rounded-lg text-white">
            <h2
              className="text-5xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              About
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
              <ChevronsRight /> About
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start p-6">
          {/* Left Text Section */}
          <div className="md:w-1/2 p-4">
            <h2 className="text-4xl font-bold text-[#270195] mb-4">
              BGL Pharma
            </h2>
            <p className="text-[#3c5975] mb-4 ">
              <strong>
                Your Trusted Partner in Pharmaceutical Ingredients.
              </strong>
            </p>
            <p className="mb-4 text-[#3c5975] space-x-0.5 tracking-wider">
              BGL Pharma Established in 2021, has rapidly emerged as a reliable
              and forward-thinking company in the Egyptian pharmaceutical
              sector, specializing in the import and distribution of active
              pharmaceutical ingredients (APIs). Despite being a relatively
              newly established company, we have earned the trust of a diverse
              portfolio of clients through our commitment to quality, integrity,
              and responsive service and our experience in this field for more
              than 8 years ago.
            </p>
            <p className="mb-4 text-[#3c5975] space-x-0.5 tracking-wider">
              BGL Pharma operations are focused on supplying pharmaceutical raw
              materials ( active & inactive & glass & Packaging & Herbal Extract
              & Vitamins ) for Pharma usage and veterinary usage .all medical
              requirements to a broad range of industry stakeholders, including
              multinational pharmaceutical companies, generic manufacturers,
              biotech firms, and other organizations engaged in healthcare and
              life sciences.
            </p>
            <p className="mb-4 text-[#3c5975] space-x-0.5 tracking-wider">
              BGL Pharma strategic partner and representative offices worldwide
              located in India and China and Dubai we are uniquely positioned to
              ensure access to high-quality materials at competitive prices
              while maintaining efficiency across our supply chain. This
              international presence also enables us to offer our partners
              timely deliveries and consistent product availability.
            </p>

            <p className="mb-4 text-[#3c5975] space-x-0.5 tracking-wider">
              At BGL Pharma Egypt, we prioritize regulatory compliance and
              quality assurance. All our suppliers are carefully vetted and
              continuously monitored to ensure full adherence to GMP standards
              concerning regulated Market and unregulated Market internationally
              recognized regulatory frameworks.
            </p>
            <p className="text-[#3c5975] space-x-0.5 tracking-wider">
              BGL Pharma view our role not merely as a supplier, but as a
              strategic partner dedicated to supporting the long-term success of
              our clients by delivering value through dependable sourcing,
              technical expertise, and a customer-centric approach.
            </p>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 p-6 flex justify-center items-center">
            <div className="flex flex-col space-y-6 max-w-md w-full relative">
              <div className="absolute hidden md:block top-0 -right-10 z-[100]">
                <img
                  src={img1}
                  alt="Team collaboration"
                  className="w-full h-[260px] object-cover"
                />
              </div>

              <div className="absolute hidden md:block top-60 :right-[25px] z-[90]">
                <img
                  src={img2}
                  alt="Office environment"
                  className="w-full h-[220px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16 text-[#3c5975]">
            Our clients trust us because we are...
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 group hover:bg-gray-100 transition duration-300 rounded"
              >
                <div className="flex justify-center mb-6">
                  <feature.icon
                    size={66}
                    className="text-slate-600 transition duration-300 group-hover:text-[#270195]"
                  />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#270195]">
                  {feature.title}
                </h3>

                <p className="text-[#3c5975] text-sm leading-relaxed tracking-wider">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
