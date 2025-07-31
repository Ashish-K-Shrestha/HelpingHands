import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Main pages
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import OurVision from "./components/OurVision/OurVision";
import OverviewCounter from "./components/OverviewCounter/OverviewCounter";
import PaymentPage from "./components/PaymentPage";
import VideoBanner from "./components/VideoBanner/VideoBanner";

// Auth pages
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import CombinedBanner from "./components/Banner/CombinedBanner";

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
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/" element={<Hero />} />
          <Route path="/video" element={<VideoBanner />} />
          <Route path="/banner" element={<CombinedBanner />} />
          {/* <Route path="/banner2" element={<Banner2 />} /> */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;
