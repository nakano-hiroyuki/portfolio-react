import { Link } from "react-router-dom";
import Seo from "../components/Seo.jsx";

export default function NotFound() {
  return (
    <section className="pad">
      <Seo title="404" description="お探しのページは見つかりませんでした。" noindex />
      <div className="container" style={{ textAlign: "center", padding: "160px 0 80px" }}>
        <h1>404</h1>
        <p>お探しのページは見つかりませんでした。</p>
        <p>
          <Link to="/">トップページへ戻る</Link>
        </p>
      </div>
    </section>
  );
}
