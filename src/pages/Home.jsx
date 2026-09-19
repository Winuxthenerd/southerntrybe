import "./Home.css";
import issueCover from "../assets/images/magazine/issue-001-cover.jpg";

const trybeHeads = [
  { name: "Name", role: "Editor-in-Chief" },
  { name: "Name", role: "Creative Director" },
  { name: "Name", role: "Strategy Advisor" },
  { name: "Name", role: "Visual Design Director" },
];

function Home() {
  return (
    <div className="page ">
      <section className="hero page">
        <h1 className="hero-title">Southerntrybe</h1>
      </section>

      <section className="featured-issue">
        <img
          src={issueCover}
          alt="Issue 001 cover"
          className="featured-cover-placeholder"
        />
        <div className="featured-info">
          <span className="section-label">Latest Issue</span>
          <h2 className="featured-title">SOUTHR Magazine</h2>
          <p className="featured-description">
            Welcome to the first edition of SOUTHR Magazine. We've been putting
            this together with curiosity, feeling and a lot of love for the
            South. Inside, you'll meet new faces, discover new perspectives and
            stumble into stories we think deserve your attention. This is Issue
            001. Come in.
          </p>
          <a href="/magazine?section=preview" className="cta-button">
            Read Now
          </a>
        </div>
      </section>

      <section className="section-block ad-section">
        <div className="ad-placeholder">Advertisement</div>
      </section>

      <section className="section-block">
        <span className="section-label centered">Trybe Heads</span>
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
