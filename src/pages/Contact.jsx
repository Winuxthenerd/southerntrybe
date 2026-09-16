import "./Contact.css";

const socialLinks = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/official_southerntrybe?stkn=MWFobDh2M21uZ2Z2cA==",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.35 2.68.94 3.35.63 4.14c-.3.76-.5 1.64-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C21.32 1.35 20.65.94 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0z" />
        <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
        <circle cx="18.41" cy="5.59" r="1.44" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://tiktok.com/@thesoutherntrybe",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82c-1.02-.9-1.66-2.2-1.66-3.66h-3.46v14.2a3.17 3.17 0 0 1-5.7 1.9 3.16 3.16 0 0 1 3.4-5.02v-3.5a6.67 6.67 0 0 0-5.36 11.02 6.67 6.67 0 0 0 11.36-4.76V9.2a8.16 8.16 0 0 0 4.76 1.52V7.26a4.85 4.85 0 0 1-3.34-1.44z" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <div className="page contact-page watermark-page">
      <h1>Let's Connect</h1>

      <div className="contact-copy">
        <p className="contact-intro">
          Got something to say, share, create or collaborate on?
        </p>
        <p>
          We're always open to connecting with young creatives, artists,
          brands, storytellers, personalities and people doing interesting
          things across the South.
        </p>
        <p>
          Whether you're looking to collaborate with SouthernTrybe, feature
          your work, partner with us, advertise, or simply say hello, we'd
          love to hear from you.
        </p>
        <p className="contact-tagline">Stay talking with the Trybe.</p>
      </div>

      <div className="contact-social">
        <h3>Follow us on our social platforms and get talking</h3>
        <div className="social-icons">
          {socialLinks.map((social) => (

            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon-link"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;