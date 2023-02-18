export default function ArticleCard({ item }) {
  return (
    <div key={item.id} className="article-card">
      <details>
        <summary className="article-heading">{item.title}</summary>
        <span className="article-date">{item.date}</span>
        <p className="article-body">{item.text}</p>
      </details>
    </div>
  );
}
