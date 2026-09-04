import { Link } from "react-router-dom";

const articles = [
  {
    id: 1,
    author: "Author Name",
    preview:
      "Short preview of the write-up goes here, a sentence or two teasing the full piece...",
  },
  {
    id: 2,
    author: "Author Name",
    preview:
      "Short preview of the write-up goes here, a sentence or two teasing the full piece...",
  },
  {
    id: 3, 
    author: "Author Name",
    preview:
      "Short preview of the write-up goes here, a sentence or two teasing the full piece...",
  },
  {
    id: 4,
    author: "Author Name",
    preview:
      "Short preview of the write-up goes here, a sentence or two teasing the full piece...",
  }
];

function EditorialList() {
  return (
    <div className="editorial-grid">
      {articles.map((article) => (
        <div className="editorial-card" key={article.id}>
          <div className="editorial-photo-block">
            <div className="editorial-photo-placeholder" />
            <h4 className="editorial-author">{article.author}</h4>
          </div>
          <div className="editorial-text-block">
            <p className="editorial-preview">{article.preview}</p>
            <Link to={`/stories/editorial/${article.id}`} className="read-more">
              Read More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default EditorialList;