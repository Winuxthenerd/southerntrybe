import { useParams, Link } from "react-router-dom";
import "./Magazine.css";

const previewPages = [1, 2, 3, 4, 5];

function MagazineView() {
  const { id } = useParams();

  return (
    <div className="page magazine-page">
      <h1>Issue {id} — Preview</h1>

      <iframe
        src={`${import.meta.env.BASE_URL}previews/issue-1/index.html`}
        title={`Issue ${id} preview`}
        className="magazine-frame"
      />

      <Link to="/magazine?section=full-edition" className="cta-button">
        View Full Edition
      </Link>
    </div>
  );
}

export default MagazineView;
