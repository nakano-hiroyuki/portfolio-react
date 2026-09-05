import { useEffect, useState } from "react";
import "./Home.css";

const SLIDES = [
  "/images/hero/tech-1.jpg",
  "/images/hero/desktop-1.jpg",
  "/images/hero/vr.jpg",
  "/images/hero/city.jpg",
  "/images/hero/network.jpg",
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setStarted(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero__slides">
          {SLIDES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              className={`hero__slide ${i === slide && started ? "is-active" : ""}`}
            />
          ))}
          <div className="hero__overlay" />
        </div>

        <div className="hero__content container">
          <p className="hero__eyebrow reveal is-visible">OFFICIAL WEBSITE</p>
          <h1 className="hero__title reveal is-visible">
            HIROYUKI
            <br />
            NAKANO
          </h1>
          <p className="hero__subtitle reveal is-visible">
            Web Designer &amp; Frontend Engineer
          </p>
        </div>
      </section>
    </div>
  );
}
