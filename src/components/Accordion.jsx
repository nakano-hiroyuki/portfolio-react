import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div className={`accordion__item ${isOpen ? "is-open" : ""}`} key={item.title}>
            <button
              className="accordion__trigger"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="accordion__index">{String(i + 1).padStart(2, "0")}</span>
              <span className="accordion__title">{item.title}</span>
              <span className="accordion__icon">{isOpen ? "−" : "+"}</span>
            </button>
            <div
              className="accordion__panel"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="accordion__panel-inner">
                <p>{item.body}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
