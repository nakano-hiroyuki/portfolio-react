import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal.jsx";
import "./Home.css";

const SLIDES = [
  "/images/hero/tech-1.jpg",
  "/images/hero/desktop-1.jpg",
  "/images/hero/vr.jpg",
  "/images/hero/city.jpg",
  "/images/hero/network.jpg",
];

const WORKS = [
  {
    label: "PROFILE",
    jp: "自己紹介",
    desc: "経歴・スキル・キャリアプラン",
    image: "/images/profile/portrait.jpg",
    to: "/profile",
  },
  {
    label: "APPLICATION",
    jp: "アプリ開発",
    desc: "Python / tkinter によるアプリ制作",
    image: "/images/apps/プログラミング3.jpg",
    to: "/application",
  },
  {
    label: "WEBSITE",
    jp: "サイト制作",
    desc: "HTML / CSS / JavaScript",
    image: "/images/website/PC1.jpg",
    to: "/website",
  },
  {
    label: "DESIGN",
    jp: "グラフィック",
    desc: "Illustrator / Photoshop",
    image: "/images/design/PC9.jpg",
    to: "/design",
  },
];

const STATS = [
  { value: "3年+", label: "デザイン制作経験" },
  { value: "40+", label: "制作プロジェクト" },
  { value: "Lv.236", label: "Progate 学習実績" },
];

export default function Home() {
  const [slide, setSlide] = useState(0);

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
              className={`hero__slide ${i === slide ? "is-active" : ""}`}
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

        <div className="hero__scroll" aria-hidden="true">
          <span />
          SCROLL
        </div>
      </section>

      <section className="pad">
        <div className="container">
          <Reveal className="intro" as="div">
            <p className="intro__lead">
              視覚的な美しさと機能性、
              <br />
              使う人の心に残るデザインを
              <br />
              大切にしています。
            </p>
          </Reveal>

          <div className="stat-row">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 120} className="stat-row__item">
                <span className="stat-row__value">{stat.value}</span>
                <span className="stat-row__label">{stat.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad works">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">WORKS</span>
            <h2 className="section-title">制作実績</h2>
          </Reveal>

          <div className="works__grid">
            {WORKS.map((item, i) => (
              <Reveal as={Link} to={item.to} key={item.label} delay={i * 100} className="work-card">
                <div className="work-card__image">
                  <img src={item.image} alt={item.jp} />
                </div>
                <div className="work-card__body">
                  <span className="work-card__jp">{item.jp}</span>
                  <span className="work-card__en">{item.label}</span>
                  <p>{item.desc}</p>
                </div>
                <span className="work-card__arrow">&#8594;</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad cta">
        <div className="container cta__inner">
          <Reveal as="div">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2 className="section-title">お気軽にお問合せください</h2>
          </Reveal>
          <Reveal delay={150}>
            <Link to="/contact" className="btn btn-solid">
              CONTACT
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
