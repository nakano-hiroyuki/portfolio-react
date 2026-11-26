// vite build の後に実行し、各ページの中身が入った静的HTMLを dist に書き出す
// （JavaScriptを実行しなくても、Google がページの内容を読めるようにするため）
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const { render, ROUTES } = await import(pathToFileURL(path.join(root, "dist-ssr/entry-server.js")).href);
const template = await fs.readFile(path.join(dist, "index.html"), "utf-8");

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function setContent(html, attr, value) {
  return html.replace(new RegExp(`(<meta ${attr} content=")[^"]*`), `$1${escape(value)}`);
}

function buildPage(url) {
  const { html, seo } = render(url);
  let page = template
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(seo.title)}</title>`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${seo.url}`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  page = setContent(page, 'property="og:title"', seo.title);
  page = setContent(page, 'property="og:url"', seo.url);
  if (seo.description) {
    page = setContent(page, 'name="description"', seo.description);
    page = setContent(page, 'property="og:description"', seo.description);
  }
  if (seo.noindex) {
    page = page
      .replace(/\s*<link rel="canonical"[^>]*>/, "")
      .replace("</title>", '</title>\n    <meta name="robots" content="noindex" />');
  }
  return page;
}

for (const url of ROUTES) {
  const file = url === "/" ? path.join(dist, "index.html") : path.join(dist, url, "index.html");
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, buildPage(url));
  console.log(`prerendered ${url}`);
}

// 存在しないURLには、Vercel がこのページを 404 ステータスで返す
await fs.writeFile(path.join(dist, "404.html"), buildPage("/404"));
console.log("prerendered 404.html");
