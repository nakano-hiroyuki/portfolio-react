import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import CompModal from "../components/CompModal.jsx";
import "./Website.css";

const GALLERY = [
  {
    src: "/images/website/懐石料理店サイト.jpg",
    label: "懐石料理店サイト",
    comp: "/images/website/seisui-comp.webp",
  },
  { src: "/images/website/化粧品サイト.png", label: "化粧品サイト" },
  { src: "/images/website/産業機械メーカーLP.jpg", label: "産業機械メーカーLP" },
  { src: "/images/website/コンサルタント企業サイト.jpg", label: "コンサルタント企業サイト" },
];

export default function Website() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/images/website/PC2.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <Reveal as="div" className="eyebrow">サイト制作</Reveal>
          <Reveal as="h1" delay={80} className="page-hero__title">WEBSITE</Reveal>
          <Reveal as="p" delay={160} className="page-hero__lead">
            HTML / CSS / JavaScript
            <br />
            シンプルなナビゲーションに導線、<br />ユーザー目線のレイアウトを心がけています。
          </Reveal>
        </div>
      </section>

      <section className="pad gallery-section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">ギャラリー</span>
            <h2 className="section-title">GALLERY</h2>
          </Reveal>

          <div className="gallery-grid">
            {GALLERY.map((g, i) =>
              g.comp ? (
                <Reveal
                  as="button"
                  key={g.src}
                  delay={i * 70}
                  className="gallery-item gallery-item--button"
                  onClick={() => setActive(g)}
                >
                  <img src={g.src} alt={g.label} />
                  <span>{g.label}　—　デザインカンプを見る</span>
                </Reveal>
              ) : (
                <Reveal as="div" key={g.src} delay={i * 70} className="gallery-item">
                  <img src={g.src} alt={g.label} />
                  <span>{g.label}</span>
                </Reveal>
              )
            )}
          </div>
        </div>
      </section>

      <CompModal src={active?.comp} title={active?.label} onClose={() => setActive(null)} />
    </div>
  );
}
