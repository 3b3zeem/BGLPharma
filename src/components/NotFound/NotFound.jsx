import React from "react";
import { ChevronRight, House } from "lucide-react";
import { Link } from "react-router-dom";
// import { useLanguage } from "../../context/Language/LanguageContext";
// import { useTranslation } from "react-i18next";

const colors = {
  primary: "#2266b3",
  lightText: "#ffffff",
  productTitle: "#4b5563",
  productName: "#6b7280",
  borderLight: "#e5e7eb",
  lineBg: "#d1d5db",
};

const NotFound = () => {
  // const { t } = useTranslation();
  // const { language } = useLanguage();

  return (
    <div
      className="w-full mx-auto pb-8 flex flex-col min-h-screen"
      style={{ backgroundColor: colors.borderLight }}
    >
      <div
        className="py-10 px-6 shadow-sm"
        style={{ backgroundColor: colors.lineBg }}
      >
        <div className="container mx-auto flex justify-between items-center">
          <span
            className="text-xl font-semibold"
            style={{ color: colors.productTitle }}
          >
            page Not Found
          </span>
          <div className="flex items-center space-x-2">
            <Link to="/">
              <House size={18} style={{ color: colors.productTitle }} />
            </Link>
            <ChevronRight size={18} style={{ color: colors.productTitle }} />
            <span className="text-xl" style={{ color: colors.productName }}>
              404
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center flex-grow">
        <span
          className="text-9xl font-bold tracking-tight"
          style={{ color: colors.primary, fontFamily: "'Poppins', sans-serif" }}
        >
          404!
        </span>

        <span
          className="text-3xl mt-4 mb-2 font-semibold"
          style={{
            color: colors.productTitle,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          page Not Found
        </span>
        <p
          className="text-center text-lg"
          style={{ color: colors.productName }}
        >
          inconvenience
        </p>
        <p
          className="text-center text-lg mb-6"
          style={{ color: colors.productName }}
        >
          explore Solutions
        </p>

        <Link
          to={"/"}
          className="px-5 py-3 text-md font-medium rounded shadow-md customEffect"
          style={{ backgroundColor: colors.primary, color: colors.lightText }}
        >
          <span>back To Home</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
