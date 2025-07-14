import React from "react";
// import { useTranslation } from "react-i18next";
// import { useLanguage } from "../../context/Language/LanguageContext";
import Meta from "../../components/Meta/Meta";

const Contact = () => {
  // const { t } = useTranslation();
  // const { language } = useLanguage();

  return (
    <div className="w-full">
      <Meta
        title="Contact Us"
        description="Get in touch with us for any inquiries or support."
      />
      
      Contact Us
    </div>
  );
};

export default Contact;
