import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

const NAV_ITEMS = [
  { label: "HOME", jp: "ホーム", path: "/" },
  { label: "PROFILE", jp: "自己紹介", path: "/profile" },
  { label: "WEBSITE", jp: "サイト制作", path: "/website" },
  { label: "DESIGN", jp: "グラフィック", path: "/design" },
  { label: "CONTACT", jp: "お問合せ", path: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
        <div className="site-header__inner container">
          <Link to="/" className="site-header__mark">
            H. NAKANO
          </Link>

          <nav className="site-header__nav">
            {NAV_ITEMS.filter((item) => item.path !== "/").map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={location.pathname === item.path ? "is-active" : ""}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span className="menu-toggle__label">{open ? "CLOSE" : "MENU"}</span>
          </button>
        </div>
      </header>

      <nav className={`overlay-nav ${open ? "is-open" : ""}`}>
        <button
          type="button"
          className="overlay-nav__close"
          onClick={() => setOpen(false)}
          aria-label="メニューを閉じる"
        >
          <span />
          <span />
        </button>

        <ul className="overlay-nav__list">
          {NAV_ITEMS.map((item, i) => (
            <li
              key={item.path}
              style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
            >
              <Link
                to={item.path}
                className={location.pathname === item.path ? "is-active" : ""}
              >
                <span className="overlay-nav__en">{item.label}</span>
                <span className="overlay-nav__jp">{item.jp}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
