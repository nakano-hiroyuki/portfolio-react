import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Website from "./pages/Website.jsx";
import Design from "./pages/Design.jsx";
import Contact from "./pages/Contact.jsx";

const FADE_OUT_DURATION = 320; // must match --fade-out animation-duration in index.css

export default function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fade-in");

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("fade-out");
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage !== "fade-out") return;
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
      setDisplayLocation(location);
      setTransitionStage("fade-in");
    }, FADE_OUT_DURATION);
    return () => clearTimeout(timer);
  }, [transitionStage, location]);

  return (
    <>
      <Header />
      <main className={`page-transition page-transition--${transitionStage}`}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/website" element={<Website />} />
          <Route path="/design" element={<Design />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
