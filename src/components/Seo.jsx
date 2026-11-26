import { createContext, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SITE_URL = "https://portfolio-react-two-kohl.vercel.app";
const SITE_NAME = "中野裕之 | Web Designer Portfolio";

// プリレンダリング時に、各ページの title や description を受け取るための入れ物
export const SeoContext = createContext(null);

function setAttr(selector, attr, value) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

// ページごとに <title>・meta description・canonical・OGP を切り替える
export default function Seo({ title, description, noindex = false }) {
  const { pathname } = useLocation();
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${pathname.replace(/\/+$/, "") || "/"}`;

  const collected = useContext(SeoContext);
  if (collected) Object.assign(collected, { title: fullTitle, description, url, noindex });

  useEffect(() => {
    document.title = fullTitle;
    setAttr('meta[property="og:title"]', "content", fullTitle);
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:url"]', "content", url);
    if (description) {
      setAttr('meta[name="description"]', "content", description);
      setAttr('meta[property="og:description"]', "content", description);
    }
  }, [fullTitle, description, url]);

  return null;
}
