import "./Home.css";
import { useState } from "react";
import VideoAd from "../components/VideoAd";
import issueCover from "../assets/images/magazine/issue-001-cover.jpg";

const trybeHeads = [
  { name: "Mr. Phillip Timi Rex", role: "Editor-in-Chief", paragraph:`A Bayelsa-Born Theatre Arts graduate of the prestigious Niger Delta University, with a passion for all things creative. With a flair for Children’s Theatre, Production Management, and Production Design he is driven by a desire to tell and amplify the creative and artistic stories of Southern emerging creatives to a wider audience.

And yes! he’s crazily in love with CARTOONS!` },
  { name: "Mr. Rowlands Tamunotonye Winston", role: "Creative Director", paragraph:"No Bio yet, Just happy to be here" },
];

function Bio({ text }) {
  const [expanded, setExpanded] = useState(false);
  const limit = 150;

  const isLong = text.length > limit;

  return (
    <p className="head-bio">
      {expanded || !isLong ? text : text.slice(0, limit) + "... "}

      {isLong && (
        <button
          className="read-more"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </p>
  );
}

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
        <VideoAd />
      </section>

      <section className="section-block">
        <span className="section-label centered">Trybe Heads</span>
        <div className="heads-grid">
          {trybeHeads.map((person) => (
            <div className="head-member" key={person.role}>
              <div className="head-photo-placeholder" />
              <h4>{person.name}</h4>
              <p>{person.role}</p>
              <Bio text={person.paragraph} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
