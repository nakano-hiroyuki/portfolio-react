import Reveal from "../components/Reveal.jsx";
import "./Website.css";

const GALLERY = [
  { src: "/images/website/懐石料理店サイト.jpg", label: "懐石料理店サイト" },
  { src: "/images/website/産業機械メーカーLP.jpg", label: "産業機械メーカーLP" },
  { src: "/images/website/gallery-3.jpg", label: "HOME / VR" },
  { src: "/images/website/gallery-4.jpg", label: "DESIGN" },
  { src: "/images/website/gallery-5.jpg", label: "CONTACT" },
  { src: "/images/website/コンサルタント企業サイト.jpg", label: "コンサルタント企業サイト" },
];

export default function Website() {
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
            シンプルなナビゲーションに導線、<br />ユーザー目線でわかりやすいレイアウトを心がけています。
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
            {GALLERY.map((g, i) => (
              <Reveal as="div" key={g.src} delay={i * 70} className="gallery-item">
                <img src={g.src} alt={g.label} />
                <span>{g.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
