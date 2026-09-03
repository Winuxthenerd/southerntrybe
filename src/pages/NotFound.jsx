import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="page not-found">
      <h1>404</h1>
      <p>This page doesn't exist.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default NotFound;