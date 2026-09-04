import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Meet the Trybe",
    path: "/about",
    dropdown: [
      { label: "About", path: "/about" },
      { label: "FAQs", path: "/faqs" },
      { label: "Contact", path: "/contact" },
    ],
  },
  {
    label: "Southr Magazine",
    path: "/magazine",
    dropdown: [
      { label: "Preview", path: "/magazine?section=preview" },
      { label: "Full Edition", path: "/magazine?section=full-edition" },
    ],
  },
  {
    label: "Trybe Sessions",
    path: "/sessions",
    dropdown: [
      { label: "Episodes", path: "/sessions?type=episodes" },
      { label: "Clips", path: "/sessions?type=clips" },
    ],
  },
  {
    label: "Trybe Stories",
    path: "/stories",
    dropdown: [
      { label: "Editorial", path: "/stories?type=editorial" },
      { label: "Pictorial", path: "/stories?type=pictorial" },
    ],
  },
  {
    label: "Screen Kulture",
    path: "/screen-kulture",
    dropdown: [
      { label: "Top Rated", path: "/screen-kulture?section=top-rated" },
      { label: "YouTube Picks", path: "/screen-kulture?section=youtube-picks" },
    ],
  },
];

function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeAll = () => {
    setMobileOpen(false);
    setOpenDropdown(null);
  };

  const handleParentClick = (e, item) => {
    if (item.dropdown) {
      e.preventDefault();
      setOpenDropdown(openDropdown === item.label ? null : item.label);
    } else {
      closeAll();
    }
  };

  return (
    <div className="navbar-wrapper">
      <nav>
        <div className="nav-brand">
          <Link to="/" onClick={closeAll}>Southerntrybe</Link>
        </div>

        <button
          className="nav-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li className="mobile-close">
            <button onClick={closeAll} aria-label="Close menu">✕</button>
          </li>

          {navItems.map((item) => (
            <li
              key={item.label}
              className={item.dropdown ? "nav-dropdown" : ""}
            >
              <Link to={item.path} onClick={(e) => handleParentClick(e, item)}>
                {item.label}
              </Link>

              {item.dropdown && openDropdown === item.label && (
                <div className="dropdown-menu">
                  <ul className="dropdown-menu-inner">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.path} onClick={closeAll}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;