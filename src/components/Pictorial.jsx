import { useState } from "react";

const events = [
  {
    id: 1,
    name: "Event Name Placeholder",
    images: [1, 2, 3, 4, 5, 6],
  },
];

function Pictorial() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <div>
      {events.map((event) => (
        <div className="pictorial-event" key={event.id}>
          <h2 className="event-title">{event.name}</h2>
          <div className="gallery-grid">
            {event.images.map((img) => (
              <div
                className="gallery-thumb"
                key={img}
                onClick={() => setActiveImage(img)}
              >
                Image {img}
              </div>
            ))}
          </div>
        </div>
      ))}

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <div className="lightbox-scroll" onClick={(e) => e.stopPropagation()}>
            {events[0].images.map((img) => (
              <div className="lightbox-image-placeholder" key={img}>
                Image {img}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Pictorial;