import { Link } from "react-router-dom";
import './Footer.css'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <h2>Southerntrybe</h2>
          <p>Stories, sessions, and films.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/magazine">Southr Magazine</Link></li>
              <li><Link to="/sessions">Tyrbe Sessions</Link></li>
              <li><Link to="/stories">Trybe Stories</Link></li>
              <li><Link to="/screen-kulture">Screen Kulture</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Site</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Follow</h4>
            <ul>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {year} Southerntrybe. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;