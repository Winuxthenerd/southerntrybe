import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { events } from "../data/pictorialEvents";
import "./Stories.css";

const galleryImages = [
    "/images/pictorial/event1-01.png",
    "/images/pictorial/event1-02.png",
    "/images/pictorial/event1-03.png",
    "/images/pictorial/event1-04.png",
];

function PictorialGallery() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));
  const [activeIndex, setActiveIndex] = useState(null);
  const [slideshowOn, setSlideshowOn] = useState(false);
  const filmstripRef = useRef(null);

  useEffect(() => {
    if (!slideshowOn) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === null ? 0 : (prev + 1) % galleryImages.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slideshowOn]);

  useEffect(() => {
    if (activeIndex === null || !filmstripRef.current) return;
    const activeThumb = filmstripRef.current.children[activeIndex];
    activeThumb?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const openImage = (index) => {
    setActiveIndex(index);
    setSlideshowOn(false);
  };

  const closeViewer = () => {
    setActiveIndex(null);
    setSlideshowOn(false);
  };

  return (
    <div className="page pictorial-gallery-page">
      <div className="gallery-header">
        <div>
            <h1>{event?.name}</h1>
            <p className="gallery-description">{event?.description}</p>
        </div>
        <button className="cta-button" onClick={() => openImage(0)}>
          Start Slideshow
        </button>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <div
            className="gallery-thumb"
            key={img}
            onClick={() => openImage(index)}
          >
            <img src={img} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="image-viewer">
          <button className="viewer-close" onClick={closeViewer} aria-label="Close">
            ✕
          </button>

          <button
            className="viewer-slideshow-toggle"
            onClick={() => setSlideshowOn(!slideshowOn)}
          >
            {slideshowOn ? "Pause Slideshow" : "Play Slideshow"}
          </button>

          <div className="viewer-main-image">
            <img src={galleryImages[activeIndex]} alt={`Full view ${activeIndex + 1}`} />
          </div>

          <div className="viewer-filmstrip" ref={filmstripRef}>
            {galleryImages.map((img, index) => (
              <div
                key={img}
                className={`filmstrip-thumb ${
                  index === activeIndex ? "active" : ""
                }`}
                onClick={() => openImage(index)}
              >
                <img src={img} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PictorialGallery;