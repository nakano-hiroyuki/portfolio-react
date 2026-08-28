import Reveal from "../components/Reveal.jsx";
import Accordion from "../components/Accordion.jsx";
import "./Profile.css";

const SKILLS_LEFT = ["Python / アプリ開発", "HTML / ホームページ制作", "CSS / レスポンシブデザイン", "JavaScript / React、インタラクション", "SQL", "Illustrator / グラフィック、UIデザイン"];
const SKILLS_RIGHT = ["Photoshop", "Inkscape", "Figma / ワイヤーフレーム、デザインカンプ", "Word", "Excel", "PowerPoint"];

const ACCORDION_ITEMS = [
  {
    title: "職歴・経歴",
    body:
      "デザイン制作企業に3年間携わり、チラシ・パンフレット・LINEスタンプ・ロゴマーク・名刺などのデザインを手掛ける。現職はシステム開発部にて開発・運用を担当し、技術指導員として数十人規模の後進育成にも携わっています。",
  },
  {
    title: "スキル詳細",
    body:
      "飲食・医療・スポーツ・不動産などさまざまな業種のクライアント向けに、数十件以上のデザイン制作を担当。静岡のローカルフード「さわやか」のチラシ制作で喜んでいただけたことが特に印象に残っています。Illustratorは幅広い制作に対応できる水準にあり、PhotoshopとFigmaも学習を重ねながらスキルを高めています。WEBサイト制作は独学で身につけ、基本的なフロントエンド実装が可能です。特にJavaScript・React・Node.jsの学習を進めています（Progate Lv.236）。",
  },
  {
    title: "目標・キャリアプラン",
    body:
      "現在はデザインとエンジニアリングの両立を目指し、JavaScript・React・バックエンドを中心に日々学習を続けています。デザイナーとして培った3年間の経験を活かしながらフロントエンドの実装力を身につけ、デザインから開発まで一貫して対応できる人材を目指しています。デザインの視点を持ったエンジニアとして、見た目の美しさと技術の両方で価値を提供できる存在になることが目標です。",
  },
];

export default function Profile() {
  return (
    <div>
      <section className="page-hero">
        <div className="page-hero__bg">
          <img src="/images/profile/PC2.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <Reveal as="div" className="eyebrow">自己紹介</Reveal>
          <Reveal as="h1" delay={80} className="page-hero__title">PROFILE</Reveal>
          <Reveal as="p" delay={160} className="page-hero__lead">
            美容師専門学校を卒業。<br />筋トレ・サッカー・散歩・King Gnuが好きな37歳。
            <br />
            WEBデザイナーとして活動中です。
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="container">
          <Reveal as="div" className="about-card">
            <div className="about-card__visual">
              <div className="about-card__image">
                <img src="/images/profile/portrait.jpg" alt="プロフィールイラスト" />
              </div>
            </div>
            <div className="about-card__body">
              <span className="eyebrow">PROFILE</span>
              <h2>
                中野裕之
                <span>Nakano Hiroyuki</span>
              </h2>
              <p>
                デザイン制作会社での3年間の実務経験を経て、現在はシステム開発部で開発・運用に携わっています。
                視覚的な魅力と機能性を両立させたものづくりを大切にし、デザインとエンジニアリング双方の視点から
                プロジェクトに向き合っています。
              </p>
              <dl className="about-card__meta">
                <div>
                  <dt>EXPERIENCE</dt>
                  <dd>デザイン制作 3年+</dd>
                </div>
                <div>
                  <dt>CURRENT</dt>
                  <dd>システム開発部 / 開発・運用</dd>
                </div>
                <div>
                  <dt>FOCUS</dt>
                  <dd>React / フロントエンド学習中</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pad skill-section">
        <div className="container">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">スキル</span>
            <h2 className="section-title">SKILL</h2>
          </Reveal>

          <div className="skill-grid">
            <Reveal as="ul" className="skill-list">
              {SKILLS_LEFT.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </Reveal>
            <Reveal as="ul" delay={120} className="skill-list">
              {SKILLS_RIGHT.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pad">
        <div className="container container--narrow">
          <Reveal as="div" className="section-head">
            <span className="eyebrow">経歴・目標</span>
            <h2 className="section-title">BACKGROUND</h2>
          </Reveal>
          <Reveal>
            <Accordion items={ACCORDION_ITEMS} />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
