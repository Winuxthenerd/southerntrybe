import "./About.css";

function About() {
  return (
    <div className="page about-page watermark-page">
      <h1>About Southerntrybe</h1>
      <p>
        SOUTHERNTRYBE is an art inclined media firm dedicated to celebrating
        young southern creatives, ideas, stories and culture. We believe there
        is something happening in the South. A new generation of artists,
        filmmakers, photographers, musicians, writers, entrepreneurs, creatives
        and young personalities are creating, expressing themselves and building
        their own paths. SOUTHERNTRYBE exists to spotlight that energy.
      </p>{" "}
      <br></br>
      <p>
        Through storytelling, interviews, editorials, visual features and
        experiences, we explore the people, ideas and moments shaping southern
        youth culture from our own perspective. Our world moves across arts,
        creativity, lifestyle, youth culture and femininity. We tell stories
        that deserve more attention, introduce people doing interesting things
        and create spaces where young voices in and from the south can be seen,
        heard and celebrated. But SOUTHERNTRYBE is more. Through collaborative
        works with SOUTHR MAGAZINE and TRYBE SESSIONS. Both affiliate artistic
        firms of the Southerntrybe brand, we're poised to hit our goal of
        placing young southern creatives to the creative community and it's ever
        growing audience. Moreso, we are a growing creative platform and
        community built around expression, discovery and connection. From our
        editorial content to our events, projects and experiences, our goal is
        to bring creatives together, spotlight fresh talents and contribute to
        the conversations shaping the next southern generation. We are
        interested in the creatives finding their voices, the dreamers building
        something from nothing, the personalities influencing their communities
        and the young people creating their own version of what is possible.
        This is our space. For the young. For the creative. For the South.
      </p>
      <br></br>
      <h3>SOUTHERNTRYBE </h3>
      <h3>BE ARTISTICALLY SOUTHERN</h3>
      <div className="team-section">
        <span className="team-grid-title">Our Team</span>
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
    </div>
  );
}

export default About;
