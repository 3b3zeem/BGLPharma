import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Meta from "../../components/Meta/Meta";
// import { useTranslation } from "react-i18next";
// import { useLanguage } from "../../context/Language/LanguageContext";

const About = () => {
  // const { t } = useTranslation();
  // const { language } = useLanguage();

  return (
    <div className="w-full">
      <Meta
        title="About Us"
        description="Learn more about BGL Pharma and our story."
      />

      About Us
    </div>
  );
};

export default About;
