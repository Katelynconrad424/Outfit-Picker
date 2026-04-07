import { useOutfit } from "../context/OutfitContext";
import EmptyState from "../components/EmptyState";

function Favorites() {
  const { favorites, removeFavorite } = useOutfit();

  if (favorites.length === 0) {
    return <EmptyState message="No saved outfits yet. Build one first." />;
  }

  return (
    <section>
      <div className="page-header">
        <h2>Favorites</h2>
        <p>Your saved outfit ideas.</p>
      </div>

      <div className="grid">
        {favorites.map((outfit) => {
          return (
            <div key={outfit.id} className="card">
              <div className="card-body">
                <h3>{outfit.name}</h3>
                <p>
                  <strong>Top:</strong> {outfit.top ? outfit.top.name : "None"}
                </p>
                <p>
                  <strong>Bottom:</strong>{" "}
                  {outfit.bottom ? outfit.bottom.name : "None"}
                </p>
                <p>
                  <strong>Shoes:</strong>{" "}
                  {outfit.shoes ? outfit.shoes.name : "None"}
                </p>
                <p>
                  <strong>Extra:</strong>{" "}
                  {outfit.extra ? outfit.extra.name : "None"}
                </p>

                <button
                  onClick={() => removeFavorite(outfit.id)}
                  className="button button-light"
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Favorites;
