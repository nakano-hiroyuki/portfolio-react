import { useState } from "react";
import "./Carousel.css";

export default function Carousel({ images, alt }) {
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    setIndex((i) => (i + dir + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel__frame">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${alt} ${i + 1}`}
            className={`carousel__image ${i === index ? "is-active" : ""}`}
          />
        ))}
      </div>

      <button className="carousel__btn carousel__btn--prev" onClick={() => go(-1)} aria-label="前の画像">
        &#10094;
      </button>
      <button className="carousel__btn carousel__btn--next" onClick={() => go(1)} aria-label="次の画像">
        &#10095;
      </button>

      <div className="carousel__dots">
        {images.map((src, i) => (
          <button
            key={src}
            className={i === index ? "is-active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`${i + 1}枚目を表示`}
          />
        ))}
      </div>
    </div>
  );
}
