import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import Lightbox from "../components/Lightbox.jsx";
import "./Design.css";

const STICKERS = [
  { src: "/images/design/sticker-1.png", label: "秋田柴犬雑種 LINEスタンプ" },
  { src: "/images/design/sticker-2.png", label: "ポメラニアン LINEスタンプ" },
  { src: "/images/design/sticker-3.png", label: "ダックスフンド LINEスタンプ" },
  { src: "/images/design/sticker-4.png", label: "ポメラニアン LINEスタンプ" },
  { src: "/images/design/sticker-5.png", label: "ピンシャー LINEスタンプ" },
];

const FLYERS = [
  { src: "/images/design/flyer-3.png", label: "給湯機チラシ" },
  { src: "/images/design/flyer-4.png", label: "ジムチラシ 表面" },
  { src: "/images/design/flyer-5.png", label: "ジムチラシ 裏面" },
  { src: "/images/design/flyer-6.png", label: "グローバルヘルスチラシ" },
  { src: "/images/design/flyer-7.png", label: "音楽教室パンフレット" },
  { src: "/images/design/flyer-8.png", label: "人工芝チラシ" },
  { src: "/images/design/さわやかハンバーグチラシ.png", label: "飲食店求人チラシ" },
  { src: "/images/design/flyer-10.png", label: "会社説明会チラシ" },
];

export default function Design() {
  const [active, setActive] = useState(null);

  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/images/design/PC9.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <Reveal as="div" className="eyebrow">グラフィック</Reveal>
          <Reveal as="h1" delay={80} className="page-hero__title">GRAPHIC DESIGN</Reveal>
          <Reveal as="p" delay={160} className="page-hero__lead">
            Illustrator / Photoshop / Inkscape
            <br />
            自分のカラーとユーザー目線を大切に、世界観と色のバランスをとりながら
            視覚的に楽しく、読み手の目を引く設計を心がけています。
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">LINEスタンプ</span>
            <h2 className="section-title">LINE Stickers</h2>
          </Reveal>

          <div className="design-grid design-grid--stickers">
            {STICKERS.map((item, i) => (
              <Reveal
                as="button"
                key={item.src}
                delay={i * 70}
                className="design-tile"
                onClick={() => setActive(item)}
              >
                <img src={item.src} alt={item.label} />
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>

          <Reveal as="p" className="design-copy">
            日常に、ちょっとしたユーモアを。<br />可愛らしいLINEスタンプ制作。
          </Reveal>
        </div>
      </section>

      <section className="pad design-flyers">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">パンフレット / フライヤー</span>
            <h2 className="section-title">Pamphlet &amp; Flyer</h2>
          </Reveal>

          <div className="design-grid design-grid--flyers">
            {FLYERS.map((item, i) => (
              <Reveal
                as="button"
                key={item.src}
                delay={(i % 6) * 60}
                className="design-tile"
                onClick={() => setActive(item)}
              >
                <img src={item.src} alt={item.label} />
                <span>{item.label}</span>
              </Reveal>
            ))}
          </div>

          <Reveal as="p" className="design-copy">
            伝えたいことを、カタチに。<br />
            魅力を引き出すパンフレットデザイン。
          </Reveal>
        </div>
      </section>

      <Lightbox src={active?.src} alt={active?.label} onClose={() => setActive(null)} />
    </div>
  );
}
