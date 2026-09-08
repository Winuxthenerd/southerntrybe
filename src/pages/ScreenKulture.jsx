import { useSearchParams } from "react-router-dom";
import "./ScreenKulture.css";

const topRated = [
  {
    id: 1,
    title: "Film Title Placeholder",
    trailerSrc: "/videos/trailer-1.mp4",
    downloadSrc: "https://your-r2-bucket-url.com/film-1.mp4",
    description: "Placeholder description of the film goes here.",
  },
  {
    id: 2,
    title: "Film Title Placeholder",
    trailerSrc: "/videos/trailer-2.mp4",
    downloadSrc: "https://your-r2-bucket-url.com/film-2.mp4",
    description: "Placeholder description of the film goes here.",
  },
  {
    id: 3,
    title: "Film Title Placeholder",
    trailerSrc: "/videos/trailer-3.mp4",
    downloadSrc: "https://your-r2-bucket-url.com/film-3.mp4",
    description: "Placeholder description of the film goes here.",
  },
  {
    id: 4,
    title: "Film Title Placeholder",
    trailerSrc: "/videos/trailer-4.mp4",
    downloadSrc: "https://your-r2-bucket-url.com/film-4.mp4",
    description: "Placeholder description of the film goes here.",
  },
  {
    id: 5,
    title: "Film Title Placeholder",
    trailerSrc: "/videos/trailer-5.mp4",
    downloadSrc: "https://your-r2-bucket-url.com/film-5.mp4",
    description: "Placeholder description of the film goes here.",
  },
];

const youtubePicks = [
  { id: 1, videoId: "dQw4w9WgXcQ", credit: "Original video by Author Name" },
];

function ScreenKulture() {
  const [searchParams] = useSearchParams();
  const section = searchParams.get("section") || "top-rated";

  if (section === "youtube-picks") {
    return (
      <div className="page screen-kulture-page">
        <h1>YouTube Picks</h1>
        <div className="sk-grid">
          {youtubePicks.map((item) => (
            <div className="sk-card" key={item.id}>
              <div className="video-embed landscape">
                <iframe
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.credit}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="video-credit">{item.credit}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="page screen-kulture-page">
      <h1>Top Rated</h1>
      <div className="sk-grid">
        {topRated.map((item) => (
          <div className="sk-card" key={item.id}>
            <h3 className="video-title">{item.title}</h3>
            <video
              className="native-video"
              controls
              src={item.trailerSrc}
              poster=""
            />
            <a href={item.downloadSrc} download className="cta-button">
              Download Film
            </a>
            <p className="video-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ScreenKulture;