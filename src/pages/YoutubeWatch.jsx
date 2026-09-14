import { useParams, Link } from "react-router-dom";
import { youtubePicks } from "./ScreenKulture";
import "./ScreenKulture.css";

function YoutubeWatch() {
  const { id } = useParams();
  const current = youtubePicks.find((item) => item.id === Number(id));
  const moreToWatch = youtubePicks.filter((item) => item.id !== Number(id));

  if (!current) {
    return (
      <div className="page">
        <h1>Video not found</h1>
        <Link to="/screen-kulture?section=youtube-picks">Back to YouTube Picks</Link>
      </div>
    );
  }

  return (
    <div className="page yt-watch-page">
      <div className="yt-watch-main">
        <div className="video-embed landscape">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${current.videoId}`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            loading="lazy"
          />
        </div>
        <h1>{current.title}</h1>
        <p className="video-credit">{current.credit}</p>
      </div>

      <div className="yt-watch-sidebar">
        <h3>More to Watch</h3>
        {moreToWatch.map((item) => (
          <Link
            to={`/screen-kulture/watch/${item.id}`}
            className="yt-sidebar-card"
            key={item.id}
          >
            <img
              src={`https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg`}
              alt={item.title}
            />
            <div>
              <h4>{item.title}</h4>
              <p>{item.credit}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default YoutubeWatch;