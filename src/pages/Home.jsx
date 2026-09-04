import "./Home.css";

const trybeHeads = [
  { name: "Name", role: "Editor-in-Chief" },
  { name: "Name", role: "Creative Director" },
  { name: "Name", role: "Strategy Advisor" },
  { name: "Name", role: "Visual Design Director" },
];

function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1 className="hero-title">Southerntrybe</h1>
      </section>

      <section className="featured-issue">
        <div className="featured-cover-placeholder" />
        <div className="featured-info">
          <span className="section-label">Latest Issue</span>
          <h2>Issue 001 — Placeholder Title</h2>
          <p>Placeholder teaser description for the featured issue.</p>
          <a href="/magazine?section=preview" className="cta-button">
            Read Now
          </a>
        </div>
      </section>

      <section className="section-block ad-section">
        <div className="ad-placeholder">Advertisement</div>
      </section>

      <section className="section-block">
        <span className="section-label">Trybe Heads</span>
        <div className="heads-grid">
          {trybeHeads.map((person) => (
            <div className="head-member" key={person.role}>
              <div className="head-photo-placeholder" />
              <h4>{person.name}</h4>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;