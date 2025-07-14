import React, { useEffect } from "react";
// import { useLanguage } from "../../context/Language/LanguageContext";
import Meta from "../../components/Meta/Meta";
import Hero from "../../components/HomeComponents/Hero/Hero";
import About from "../../components/HomeComponents/About/About";

const Home = () => {
  // const { language } = useLanguage();
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <div>
        <Meta
          title="Home"
          description="Welcome to BGL Pharma, your trusted source for pharmaceutical products."
        />
        <Hero />
        <About />
      </div>
    </React.Fragment>
  );
};

export default Home;
