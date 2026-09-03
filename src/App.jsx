import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollTop from "./components/ScrollTop.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Application from "./pages/Application.jsx";
import Website from "./pages/Website.jsx";
import Design from "./pages/Design.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fade-in");

  if (location.pathname !== displayLocation.pathname && transitionStage !== "fade-out") {
    setTransitionStage("fade-out");
  }

  return (
    <>
      <Header />
      <main
        className={`page-transition page-transition--${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fade-out") {
            window.scrollTo(0, 0);
            setDisplayLocation(location);
            setTransitionStage("fade-in");
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/application" element={<Application />} />
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
