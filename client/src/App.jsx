import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import OurVision from "./components/OurVision/OurVision";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
        <Navbar />
        <Hero />
        <OverviewCounter />
        <OurVision />
        <Banner />
        <Banner2 />
        <VideoBanner />
        <Blogs />
        <Footer />
      </main>
    </>
  );
};

export default App;
