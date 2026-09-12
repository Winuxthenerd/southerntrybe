import { useState, useEffect, useRef, useCallback } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { events } from "../data/pictorialEvents";
import "./Stories.css";

const galleryImages = import.meta.glob(
  "../assets/pictorial/*/*.{jpg,jpeg,png,gif}",
  { eager: true, import: "default" }
);

function getImagesForEvent(eventId) {
  return Object.entries(galleryImages)
    .filter(([path]) => path.includes(`/event-${eventId}/`))
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);
}
// Tuning for the swipe gestures on the full-screen viewer.
const DISMISS_OFFSET = 120; // px of vertical drag before we treat it as "let go"
const DISMISS_VELOCITY = 600; // px/s — a fast flick dismisses even with less offset
const CHANGE_OFFSET = 80; // px of horizontal drag before we change image
const CHANGE_VELOCITY = 400; // px/s — a fast flick changes image even with less offset

function PictorialGallery() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));
  const galleryImages = getImagesForEvent(id);
  const [activeIndex, setActiveIndex] = useState(null);
  const [slideshowOn, setSlideshowOn] = useState(false);
  const [originPoint, setOriginPoint] = useState({ x: 50, y: 50 });
  const filmstripRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!slideshowOn) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === null ? 0 : (prev + 1) % galleryImages.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [slideshowOn, galleryImages.length]);

  useEffect(() => {
    if (activeIndex === null || !filmstripRef.current) return;
    const activeThumb = filmstripRef.current.children[activeIndex];
    activeThumb?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  // Anchor the viewer's "grow in" animation to wherever the user actually
  // tapped, instead of always scaling up from the center of the screen.
  const openImage = (index, e) => {
    if (e) {
      setOriginPoint({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    }
    setActiveIndex(index);
    setSlideshowOn(false);
  };

  const closeViewer = () => {
    setActiveIndex(null);
    setSlideshowOn(false);
  };

  const goTo = useCallback((delta) => {
    setActiveIndex((prev) => {
      if (prev === null) return prev;
      const next = prev + delta;
      // No wraparound: at the first/last image this is a no-op, which reads
      // as the drag "hitting a wall" and snapping back — the rubber-band.
      if (next < 0 || next >= galleryImages.length) return prev;
      return next;
    });
  }, []);

  // Escape closes; arrow keys step through the gallery — same actions the
  // swipe/tap gestures offer, so keyboard users aren't left behind.
  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeViewer();
      if (e.key === "ArrowRight") goTo(1);
      if (e.key === "ArrowLeft") goTo(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, goTo]);

  // A single drag surface handles both gestures: whichever axis moved
  // further decides intent, so a mostly-vertical drag dismisses and a
  // mostly-horizontal drag changes image — never both at once.
  const handleDragEnd = (_e, info) => {
    const { offset, velocity } = info;

    if (Math.abs(offset.y) > Math.abs(offset.x)) {
      if (offset.y > DISMISS_OFFSET || velocity.y > DISMISS_VELOCITY) {
        closeViewer();
      }
    } else if (offset.x < -CHANGE_OFFSET || velocity.x < -CHANGE_VELOCITY) {
      goTo(1);
    } else if (offset.x > CHANGE_OFFSET || velocity.x > CHANGE_VELOCITY) {
      goTo(-1);
    }
  };

  return (
    <div className="page pictorial-gallery-page">
      <div className="gallery-header">
        <div>
          <h1>{event?.name}</h1>
          <p className="gallery-description">{event?.description}</p>
        </div>
        <motion.button
          className="cta-button"
          whileTap={{ scale: 0.96 }}
          onClick={(e) => openImage(0, e)}
        >
          Start Slideshow
        </motion.button>
      </div>

      <div className="gallery-grid">
        {galleryImages.map((img, index) => (
          <motion.div
            className="gallery-thumb"
            key={img}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => openImage(index, e)}
          >
            <img src={img} alt={`Gallery image ${index + 1}`} />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="image-viewer"
            style={{ transformOrigin: `${originPoint.x}% ${originPoint.y}%` }}
            initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.95 }}
            transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          >
            <motion.button
              className="viewer-close"
              whileTap={{ scale: 0.9 }}
              onClick={closeViewer}
              aria-label="Close"
            >
              ✕
            </motion.button>

            <motion.button
              className="viewer-slideshow-toggle"
              whileTap={{ scale: 0.96 }}
              onClick={() => setSlideshowOn(!slideshowOn)}
            >
              {slideshowOn ? "Pause Slideshow" : "Play Slideshow"}
            </motion.button>

            <motion.div
              className="viewer-main-image"
              drag={!prefersReducedMotion}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              dragElastic={{ top: 0.5, bottom: 0.5, left: 0.6, right: 0.6 }}
              onDragEnd={handleDragEnd}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeIndex}
                  src={galleryImages[activeIndex]}
                  alt={`Full view ${activeIndex + 1}`}
                  initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.97 }}
                  transition={{ type: "spring", bounce: 0, duration: 0.2 }}
                  draggable={false}
                />
              </AnimatePresence>
            </motion.div>

            <div className="viewer-filmstrip" ref={filmstripRef}>
              {galleryImages.map((img, index) => (
                <div
                  key={img}
                  className={`filmstrip-thumb ${
                    index === activeIndex ? "active" : ""
                  }`}
                  onClick={(e) => openImage(index, e)}
                >
                  <img src={img} alt={`Gallery image ${index + 1}`} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PictorialGallery;