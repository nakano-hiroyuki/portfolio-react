import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";
import { SeoContext } from "./components/Seo.jsx";

// ビルド時に静的HTMLとして書き出すページ
export const ROUTES = ["/", "/profile", "/website", "/design", "/contact"];

// 指定したURLのページをHTML文字列にし、そのページのSEO情報と一緒に返す
export function render(url) {
  const seo = {};
  const html = renderToString(
    <StrictMode>
      <SeoContext.Provider value={seo}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </SeoContext.Provider>
    </StrictMode>
  );
  return { html, seo };
}
