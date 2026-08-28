import { useState } from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const [magazineOpen, setMagazineOpen] = useState(false);

  const magazineCategories = [
    { label: "Digital", value: "digital" },
    { label: "Preview", value: "preview" },
    { label: "Picture Stories", value: "picture-stories" },
    { label: "Editorials", value: "editorials" },
  ];

  return (
    <nav>
      <div className="nav-brand">
        <Link to="/">Southerntrybe</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/faqs">FAQs</Link></li>
        <li><Link to="/contact">Contact</Link></li>

        <li
          className="nav-dropdown"
          onMouseEnter={() => setMagazineOpen(true)}
          onMouseLeave={() => setMagazineOpen(false)}
        >
          <Link to="/magazine">Southr Magazine</Link>
          {magazineOpen && (
            <ul className="dropdown-menu">
              {magazineCategories.map((cat) => (
                <li key={cat.value}>
                  <Link to={`/magazine?category=${cat.value}`}>
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li><Link to="/sessions">Tyrbe Sessions</Link></li>
        <li><Link to="/films">Trybe Films</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;