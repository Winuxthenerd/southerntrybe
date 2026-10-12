import { useSearchParams, Link } from "react-router-dom";
import issue1Cover from "../assets/images/magazine/issue-001-cover.jpg";
import "./Magazine.css";

const previewIssues = [
  { id: 1, title: "SOUTHR MAGAZINE FLIPBOOK", cover: issue1Cover },
  { id: 2, title: "Issue 002 — Placeholder", cover: null },
  { id: 3, title: "Issue 003 — Placeholder", cover: null },
];

const editions = [
  { id: 1, title: "Issue 001 — Placeholder" },
  { id: 2, title: "Issue 002 — Placeholder" },
  { id: 3, title: "Issue 003 — Placeholder" },
];

function Magazine() {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section") || "full-edition";

  if (section === "preview") {
    return (
      <div className="page magazine-page">
        <h1>Preview</h1>
        <div className="edition-grid">
          {previewIssues.map((issue) => (
            <div className="edition-card" key={issue.id}>
              {issue.cover ? (
                <img src={issue.cover} alt={issue.title} className="edition-cover" />
              ) : (
                <div className="edition-cover-placeholder" />
              )}
              <h3>{issue.title}</h3>
              <Link to={`/magazine/view/${issue.id}`} className="cta-button">
                Preview
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page magazine-page">
      <h1>Full Edition</h1>
      <div className="edition-grid">
        {editions.map((edition) => (
          <div className="edition-card" key={edition.id}>
            <div className="edition-cover-placeholder" />
            <h3>{edition.title}</h3>
            <button className="cta-button" disabled title="Coming soon">
              Download — Pay to Access
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Magazine;