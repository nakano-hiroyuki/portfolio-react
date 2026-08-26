import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import "./Contact.css";

const GENDERS = [
  { value: "man", label: "Man" },
  { value: "woman", label: "Woman" },
  { value: "other", label: "Other" },
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
          <img src="/images/contact/bg.jpg" alt="" />
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
        <div className="container container--narrow">
          <Reveal className="contact-panel">
            {sent ? (
              <div className="contact-success">
                <span className="eyebrow">Thank you</span>
                <h2 className="section-title">送信いたしました</h2>
                <p>
                  お問合せいただきありがとうございます。内容を確認の上、追ってご連絡いたします。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">NAME</label>
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
                  <label htmlFor="email">E-MAIL</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
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
                        {g.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="field">
                  <label htmlFor="message">MESSAGE</label>
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
