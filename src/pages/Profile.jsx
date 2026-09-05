import Reveal from "../components/Reveal.jsx";
import "./Profile.css";

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
            美容師専門学校を卒業。<br />筋トレ・サッカー・King Gnuが好きな37歳。
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
                <br />視覚的な魅力と機能性を両立させたものづくりを大切にしています。
              </p>
              <dl className="about-card__meta">
                <div>
                  <dt>SKILL</dt>
                  <dd>
                    <ul className="about-card__skills">
                      <li>HTML / ホームページ制作</li>
                      <li>CSS / レスポンシブ</li>
                      <li>JavaScript / React、インタラクション</li>
                      <li>Illustrator / グラフィック、UI制作</li>
                      <li>Photoshop</li>
                      <li>Figma / デザインカンプ</li>
                    </ul>
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
