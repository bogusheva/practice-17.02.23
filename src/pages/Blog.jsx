import ArticleCard from "../component/ArticleCard";
import { articles } from "../data/articles";

export default function Blog() {
  return (
    <section className="blog main">
      <h2>Blog</h2>
      <div className="articles-container">
        {articles.map((item) => {
          return <ArticleCard item={item} />;
        })}
      </div>
    </section>
  );
}
