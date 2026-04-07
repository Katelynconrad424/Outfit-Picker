import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="not-found">
      <h2>Page not found</h2>
      <p>Sorry, that page does not exist.</p>
      <Link to="/" className="button link-button">
        Go Home
      </Link>
    </section>
  );
}

export default NotFound;
