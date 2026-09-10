import { useEffect, useState } from "react";
import "./Loading.css";

export default function Loading() {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    let isLoaded = document.readyState === "complete";

    const showTimer = setTimeout(() => {
      if (!isLoaded) setVisible(true);
    }, 500);

    const handleLoad = () => {
      isLoaded = true;
      clearTimeout(showTimer);
      setFadingOut(true);
      setTimeout(() => setVisible(false), 500);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  if (!visible) return null;

  return (
    <div id="loading" className={fadingOut ? "loading--fade-out" : ""}>
      <div className="spinner" />
    </div>
  );
}
