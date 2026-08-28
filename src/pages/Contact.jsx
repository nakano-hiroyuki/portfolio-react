import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import "./Contact.css";

const GENDERS = [
  { value: "man", label: "Man" },
  { value: "woman", label: "Woman" },
  { value: "other", label: "Other" },
];

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/nakano-hiroyuki/portfolio" },
  { label: "Instagram", href: "https://www.instagram.com/Hiroyuki_nakano.it/" },
  { label: "X", href: "https://x.com/YYJhgtMwkd10072" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", gender: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <section className="page-hero contact-hero">
        <div className="page-hero__bg">
          <img src="/images/contact/PC10.jpg" alt="" />
        </div>
        <div className="container page-hero__content">
          <Reveal as="div" className="eyebrow">お問合せ</Reveal>
          <Reveal as="h1" delay={80} className="page-hero__title">CONTACT</Reveal>
          <Reveal as="p" delay={160} className="page-hero__lead">
            ご覧いただき誠にありがとうございました。
            <br />
            ご意見・ご相談等ございましたら、お気軽にお問合せください。
          </Reveal>
        </div>
      </section>

      <section className="pad">
        <div className="container contact-grid">
          <Reveal as="div" className="contact-intro">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2 className="section-title">
              ご質問は
              <br />
              こちらから
            </h2>
            <p className="contact-intro__lead">
              制作のご依頼やご質問、ちょっとしたご相談まで、
              お気軽にお問合せください。内容を確認の上、担当より折り返しご連絡いたします。
            </p>

            <dl className="contact-intro__meta">
              <div>
                <dt>RESPONSE</dt>
                <dd>通常2〜3営業日以内にご返信いたします</dd>
              </div>
              <div>
                <dt>FOLLOW</dt>
                <dd className="contact-intro__social">
                  {SOCIAL_LINKS.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={140} className="contact-panel">
            {sent ? (
              <div className="contact-success">
                <span className="contact-success__icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12.5L10 17.5L19 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="eyebrow">Thank you</span>
                <h2 className="section-title">送信いたしました</h2>
                <p>
                  お問合せいただきありがとうございます。内容を確認の上、追ってご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="name">
                      NAME<span className="required">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="お名前"
                      value={form.name}
                      onChange={update("name")}
                      required
                    />
                  </div>

                  <div className="field">
                    <label htmlFor="email">
                      E-MAIL<span className="required">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={update("email")}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label>GENDER</label>
                  <div className="gender-row">
                    {GENDERS.map((g) => (
                      <label key={g.value} className="gender-option">
                        <input
                          type="radio"
                          name="gender"
                          value={g.value}
                          checked={form.gender === g.value}
                          onChange={update("gender")}
                        />
                        <span className="gender-option__dot" aria-hidden="true" />
                        <span>{g.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">
                    MESSAGE<span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    placeholder="お問い合わせ内容を入力してください"
                    value={form.message}
                    onChange={update("message")}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-solid">
                  送信する
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
