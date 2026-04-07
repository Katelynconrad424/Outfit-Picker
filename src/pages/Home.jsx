import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="small-label">Style planning made simple</p>
        <h2>Build cute outfits and save your favorite looks.</h2>
        <p>
          This app helps users browse clothing pieces, build outfit
          combinations, and save looks for different moods or occasions.
        </p>

        <div className="button-row">
          <Link to="/closet" className="button link-button">
            View Closet
          </Link>
          <Link to="/builder" className="button button-light link-button">
            Start Building
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
