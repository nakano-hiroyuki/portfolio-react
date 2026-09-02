import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Reveal className="container site-footer__grid">
        <div className="site-footer__brand">
          <p className="site-footer__mark">H. NAKANO</p>
          <p className="site-footer__mark site-footer__mark--desc">
            デザインと開発、<br />ふたつの視点でものづくりをする
            <br />
            WEBデザイナー中野裕之のポートフォリオ。
          </p>
        </div>

        <div className="site-footer__col">
          <h3>ACCOUNT</h3>
          <ul>
            <li>
              <a href="https://github.com/nakano-hiroyuki/portfolio" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/Hiroyuki_nakano.it/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://x.com/YYJhgtMwkd10072" target="_blank" rel="noreferrer">
                X (Twitter)
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCSYLQUQXH09fm1Q1K0Yz6AA" target="_blank" rel="noreferrer">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>PROJECT</h3>
          <ul>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/application">Application</Link></li>
            <li><Link to="/website">Website</Link></li>
            <li><Link to="/design">Graphic Design</Link></li>
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>OTHER</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </Reveal>

      <div className="site-footer__bottom">
        <p>&copy; 2026 Hiroyuki Nakano. All rights reserved.</p>
      </div>
    </footer>
  );
}
