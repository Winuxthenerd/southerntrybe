import { useParams } from "react-router-dom";
import "./Stories.css";

function EditorialArticle() {
  const { id } = useParams();

  return (
    <div className="page editorial-article">
      <h1>Article {id} — Placeholder Title</h1>
      <p className="editorial-article-author">By Author Name</p>
      <div className="editorial-article-body">
        <p>Placeholder full write-up content goes here.</p>
      </div>
    </div>
  );
}

export default EditorialArticle;