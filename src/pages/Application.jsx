import Reveal from "../components/Reveal.jsx";
import Carousel from "../components/Carousel.jsx";
import "./Application.css";

const APPS = [
  {
    name: "メモアプリ",
    en: "Memo App",
    desc: "テキストの保存・読み込みに対応したシンプルなメモアプリ。",
    images: ["/images/apps/memo-1.png", "/images/apps/memo-2.png", "/images/apps/memo-3.png"],
  },
  {
    name: "電卓アプリ",
    en: "Calculator",
    desc: "四則演算に対応した、入力しやすいUIの電卓アプリ。",
    images: ["/images/apps/calc-1.png", "/images/apps/calc-2.png", "/images/apps/calc-3.png"],
  },
  {
    name: "ストップウォッチ",
    en: "Stopwatch",
    desc: "現在時刻を基準に計測するシンプルなストップウォッチ。",
    images: ["/images/apps/stopwatch-1.png", "/images/apps/stopwatch-2.png", "/images/apps/stopwatch-3.png"],
  },
  {
    name: "ToDoリスト",
    en: "To-Do List",
    desc: "タスクの追加・編集・削除・一覧表示ができるToDoアプリ。",
    images: ["/images/apps/todo-1.png", "/images/apps/todo-2.png", "/images/apps/todo-3.png"],
  },
];

const FEATURES = [
  {
    tag: "Concept",
    title: "私の考えるアプリ開発とは",
    body:
      "ユーザー目線で考え、見た目や操作が直感的で使いやすいこと。目的をはっきりさせて必要な機能だけに絞り、テストと改善を繰り返しながら、より良いアプリ開発を目指します。",
    image: "/images/apps/feature-1.jpg",
  },
  {
    tag: "Work",
    title: "開発の詳細",
    body:
      "tkinterライブラリを使用してUIを構築。データの保存・読み込み、現在時刻を基準とした計測、タスクの追加・削除・一覧表示・編集、数値と演算子に基づく演算処理など、各アプリに応じた機能を実装しています。",
    image: "/images/apps/feature-2.jpg",
  },
];

export default function Application() {
  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/images/apps/プログラミング3.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <Reveal as="div" className="eyebrow">アプリ開発</Reveal>
          <Reveal as="h1" delay={80} className="page-hero__title">APPLICATION</Reveal>
          <Reveal as="p" delay={160} className="page-hero__lead">
            Python / tkinter
            <br />
            AI開発への関心から学習をはじめ、デスクトップアプリの制作へ。
            今後はFlaskなどバックエンド領域も追求していきます。
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">App Development</span>
            <h2 className="section-title">アプリ一覧</h2>
          </Reveal>

          <div className="app-grid">
            {APPS.map((app, i) => (
              <Reveal key={app.name} delay={i * 90} className="app-card">
                <Carousel images={app.images} alt={app.name} />
                <div className="app-card__body">
                  <span className="app-card__jp">{app.name}</span>
                  <span className="app-card__en">{app.en}</span>
                  <p>{app.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pad app-features">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">アプリの特徴</span>
            <h2 className="section-title">App Features</h2>
          </Reveal>

          {FEATURES.map((f, i) => (
            <Reveal
              key={f.tag}
              className={`feature-row ${i % 2 === 1 ? "is-reverse" : ""}`}
            >
              <div className="feature-row__image">
                <img src={f.image} alt={f.title} />
              </div>
              <div className="feature-row__text">
                <span className="feature-row__tag">{f.tag}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
