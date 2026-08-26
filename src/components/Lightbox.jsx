import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ src, alt, onClose }) {
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

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox__close" aria-label="閉じる">
        &times;
      </button>
      <img src={src} alt={alt} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
