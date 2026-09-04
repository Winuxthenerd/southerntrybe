import { useParams, Link } from "react-router-dom";
import "./Magazine.css";

const previewPages = [1, 2, 3, 4, 5];

function MagazineView() {
  const { id } = useParams();

  return (
    <div className="page magazine-page">
      <h1>Issue {id} — Preview</h1>
      <div className="preview-scroll">
        {previewPages.map((page) => (
          <div className="preview-page-placeholder" key={page}>
            Page {page}
          </div>
        ))}
      </div>
      <Link to="/magazine?section=full-edition" className="cta-button">
        View Full Edition
      </Link>
    </div>
  );
}

export default MagazineView;