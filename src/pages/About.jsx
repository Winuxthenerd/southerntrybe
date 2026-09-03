import "./About.css";

function About() {
  return (
    <div className="page about-page">
      <h1>About Southerntrybe</h1>
      <p>
        Southerntrybe is a creative platform spotlighting stories, sessions,
        and screen culture from the South. [Placeholder mission statement —
        swap with real copy from the owner.]
      </p>

      <div className="team-grid">
        <div className="team-member">
          <div className="team-photo-placeholder" />
          <h4>Name</h4>
          <p>Role</p>
        </div>
        <div className="team-member">
          <div className="team-photo-placeholder" />
          <h4>Name</h4>
          <p>Role</p>
        </div>
        <div className="team-member">
          <div className="team-photo-placeholder" />
          <h4>Name</h4>
          <p>Role</p>
        </div>
      </div>
    </div>
  );
}

export default About;