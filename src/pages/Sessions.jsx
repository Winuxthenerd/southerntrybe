import { useSearchParams } from "react-router-dom";
import "./Sessions.css";

const episodes = [
  { id: 1, title: "Episode Title Placeholder", videoId: "dQw4w9WgXcQ" },
  { id: 2, title: "Episode Title Placeholder", videoId: "dQw4w9WgXcQ" },
];

const clips = [
  { id: 1, title: "Clip Title Placeholder", videoId: "dQw4w9WgXcQ" },
  { id: 2, title: "Clip Title Placeholder", videoId: "dQw4w9WgXcQ" },
];

const CHANNEL_URL = "https://youtube.com/@yourchannel";

function Sessions() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "episodes";
  const items = type === "clips" ? clips : episodes;

  return (
    <div className="page sessions-page">
      <h1>{type === "clips" ? "Clips" : "Episodes"}</h1>

      <div className={`video-grid ${type === "clips" ? "portrait" : "landscape"}`}>
        {items.map((item) => (
          <div className="video-card" key={item.id}>
            <h3 className="video-title">{item.title}</h3>
            <div className={`video-embed ${type === "clips" ? "portrait" : "landscape"}`}>
              <iframe
                src={`https://www.youtube.com/embed/${item.videoId}`}
                title={item.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button"
            >
              View Channel
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sessions;