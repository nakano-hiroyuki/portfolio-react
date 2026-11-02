import { useEffect } from "react";

const SITE_NAME = "中野裕之 | Web Designer Portfolio";

// ページごとに <title> と meta description を切り替える
export default function Seo({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", description);
    }
  }, [title, description]);

  return null;
}
