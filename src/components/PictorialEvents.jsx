import { Link } from "react-router-dom";
import { events } from "../data/pictorialEvents";

const allEventImages = import.meta.glob(
  "../assets/pictorial/*/*.{jpg,jpeg,png,gif}",
  { eager: true, import: "default" }
);

function getCoverImage(eventId) {
  const images = Object.entries(allEventImages)
    .filter(([path]) => path.includes(`/event-${eventId}/`))
    .sort(([a], [b]) => a.localeCompare(b));
  return images.length > 0 ? images[0][1] : null;
}

function PictorialEvents() {
  return (
    <div className="event-folder-grid">
      {events.map((event) => {
        const cover = getCoverImage(event.id);
        return (
          <Link
            to={`/stories/pictorial/${event.id}`}
            className="event-folder-card"
            key={event.id}
          >
            <div className="event-folder-cover">
              {cover && <img src={cover} alt={event.name} />}
            </div>
            <div className="event-folder-body">
              <h3>{event.name}</h3>
              <p className="event-folder-description">{event.description}</p>
              <span className="event-folder-cta">
                View Gallery <span className="arrow">→</span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default PictorialEvents;