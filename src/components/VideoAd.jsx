import { useState, useRef, useEffect } from "react";
import "./BannerAd.css";

// Import your ad video files here when ready:
import ad1 from "../assets/videos/homepage_ad/ad-banner1.mp4";

const videoAds = [{ id: 1, video: ad1, link: "https://bizraa.com/", company: "Bizraa" }];

function VideoAd() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const goTo = (index) => {
    setCurrent(index);
  };

  const prev = () => {
    setCurrent((p) => (p - 1 + videoAds.length) % videoAds.length);
  };

  const next = () => {
    setCurrent((p) => (p + 1) % videoAds.length);
  };

  // Restart playback from the beginning every time the active ad changes,
  // whether that change came from a manual click or the video finishing.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  }, [current]);
  const handleEnded = () => {
    if (videoAds.length <= 1) {
      // Only one ad — just replay it instead of trying to "advance"
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      next();
    }
  };

  const currentAd = videoAds[current];

  return (
    <div className="banner-ad">
      <button className="banner-arrow banner-arrow-left" onClick={prev}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <a
        href={currentAd.link}
        target="_blank"
        rel="noreferrer"
        className="banner-content"
      >
        {currentAd.video ? (
          <video
            ref={videoRef}
            src={currentAd.video}
            className="banner-image"
            autoPlay
            muted
            playsInline
            onEnded={handleEnded}
          />
        ) : (
          <div className="banner-placeholder">
            <span className="banner-sponsored">Sponsored</span>
            <span className="banner-company">{currentAd.company}</span>
            <span className="banner-cta">Your video ad here</span>
          </div>
        )}
      </a>

      <button className="banner-arrow banner-arrow-right" onClick={next}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <div className="banner-dots">
        {videoAds.map((_, index) => (
          <span
            key={index}
            className={`banner-dot ${index === current ? "active" : ""}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default VideoAd;
