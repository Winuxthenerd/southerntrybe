import "./Home.css";

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
          <a href="/magazine" className="cta-button">Read Now</a>
        </div>
      </section>

      <section className="section-block">
        <span className="section-label">Southr Magazine</span>
        <div className="two-card-grid">
          <div className="content-card">
            <div className="card-image-placeholder" />
            <h3>Preview</h3>
          </div>
          <div className="content-card">
            <div className="card-image-placeholder" />
            <h3>Full Edition</h3>
          </div>
        </div>
      </section>

      <section className="section-block">
        <span className="section-label">Trybe Sessions</span>
        <div className="scroll-row">
          <div className="thumb-card" />
          <div className="thumb-card" />
          <div className="thumb-card" />
        </div>
      </section>

      <section className="section-block">
        <span className="section-label">Screen Kulture</span>
        <div className="two-card-grid">
          <div className="content-card">
            <div className="card-image-placeholder" />
            <h3>Top Rated</h3>
          </div>
          <div className="content-card">
            <div className="card-image-placeholder" />
            <h3>YouTube Picks</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;