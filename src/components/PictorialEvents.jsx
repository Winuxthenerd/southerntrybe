import { Link } from "react-router-dom";

export const events = [
  { 
    id: 1, name: "Event Name Placeholder",
    coverImage: null,
    description: "Placeholder description of the event goes here.",
 },
  { 
    id: 2, name: "Event Name Placeholder",
    coverImage: null,
    description: "Placeholder description of the event goes here." },
  { 
    id: 3, name: "Event Name Placeholder",
     coverImage: null,
      description: "Placeholder description of the event goes here." },
];

function PictorialEvents() {
  return (
    <div className="event-folder-grid">
      {events.map((event) => (
        <Link
          to={`/stories/pictorial/${event.id}`}
          className="event-folder-card"
          key={event.id}
        >
          <div className="event-folder-cover" />
          <h3>{event.name}</h3>
          <p className="event-folder-description">{event.description}</p>
        </Link>
      ))}
    </div>
  );
}

export default PictorialEvents;