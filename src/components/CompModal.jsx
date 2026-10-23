import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Lightbox.css";
import "./CompModal.css";

export default function CompModal({ src, title, onClose }) {
  useEffect(() => {
    if (!src) return undefined;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [src, onClose]);

  if (!src) return null;

  return createPortal(
    <div className="lightbox comp-modal" role="dialog" aria-modal="true" aria-label={title} onClick={onClose}>
      <button className="lightbox__close" aria-label="閉じる" onClick={onClose}>
        &times;
      </button>
      <div className="comp-modal__scroll">
        <img
          className="comp-modal__img"
          src={src}
          alt={`${title} デザインカンプ`}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>,
    document.body
  );
}
