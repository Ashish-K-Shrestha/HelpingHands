import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main pages
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import OurVision from "./components/OurVision/OurVision";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import VideoBanner from "./components/VideoBanner/VideoBanner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

// Auth pages
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <OverviewCounter />
    <OurVision />
    <Banner />
    <Banner2 />
    <VideoBanner />
    <Blogs />
    <Footer />
  </>
);

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
