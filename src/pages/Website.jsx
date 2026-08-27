import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import "./Website.css";

const FEATURES = [
  {
    ja: "未来を形作る技術革新",
    en: "Innovating Technology to Shape the Future",
    tag: "FEATURES",
    tagJa: "特徴",
    body: "シンプルなナビゲーションに、ユーザー目線でわかりやすい美しいレイアウトを心がけています。",
    image: "/images/website/VR.jpg",
  },
  {
    ja: "芸術と技術が紡ぐ創造",
    en: "Creativity Spun from Art and Technology",
    tag: "COMMITMENT",
    tagJa: "こだわり",
    body: "デザイン性に深みを出し、個性的な世界観を表現することにこだわっています。",
    image: "/images/website/feature.jpg",
  },
];

const GALLERY = [
  { src: "/images/website/gallery-1.jpg", label: "HOME" },
  { src: "/images/website/gallery-2.jpg", label: "WEBSITE" },
  { src: "/images/website/gallery-3.jpg", label: "HOME / VR" },
  { src: "/images/website/gallery-4.jpg", label: "DESIGN" },
  { src: "/images/website/gallery-5.jpg", label: "CONTACT" },
  { src: "/images/website/gallery-6.jpg", label: "APPLICATION" },
];

export default function Website() {
  const [showProto, setShowProto] = useState(false);

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/images/website/PC1.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <Reveal as="div" className="eyebrow">サイト制作</Reveal>
          <Reveal as="h1" delay={80} className="page-hero__title">WEBSITE</Reveal>
          <Reveal as="p" delay={160} className="page-hero__lead">
            HTML / CSS / JavaScript
            <br />
            デザイン性の高いポートフォリオサイトを制作。クリエイティブなデザインから
            バックエンドまで兼ね備えたWEBデザイナーを目指しています。
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">ポートフォリオサイト</span>
            <h2 className="section-title">PORTFOLIO SITE</h2>
          </Reveal>

          {FEATURES.map((f, i) => (
            <Reveal key={f.tag} className={`feature-row ${i % 2 === 1 ? "is-reverse" : ""}`}>
              <div className="feature-row__image">
                <img src={f.image} alt={f.ja} />
              </div>
              <div className="feature-row__text">
                <p className="feature-quote">{f.ja}</p>
                <p className="feature-quote__en">{f.en}</p>
                <span className="feature-row__tag">
                  {f.tag} <em>{f.tagJa}</em>
                </span>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pad gallery-section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">ギャラリー</span>
            <h2 className="section-title">GALLERY</h2>
          </Reveal>

          <div className="gallery-grid">
            {GALLERY.map((g, i) => (
              <Reveal as="div" key={g.src} delay={i * 70} className="gallery-item">
                <img src={g.src} alt={g.label} />
                <span>{g.label}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="proto-area">
            <button className="btn" onClick={() => setShowProto((v) => !v)}>
              {showProto ? "デザインカンプを閉じる" : "デザインカンプを見る"}
            </button>
            {showProto && (
              <div className="proto-frame">
                <iframe
                  title="デザインカンプ"
                  src="https://embed.figma.com/proto/HgwcJJ1LMZIWEinVkfIRzH/%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA%E3%82%B5%E3%82%A4%E3%83%88%E3%80%80home%E3%83%9A%E3%83%BC%E3%82%B8%E3%80%80%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E3%82%AB%E3%83%B3%E3%83%97?node-id=4-2&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share"
                  allow="fullscreen"
                  allowFullScreen
                />
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
