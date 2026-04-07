import { useState } from "react";
import { useOutfit } from "../context/OutfitContext";
import EmptyState from "../components/EmptyState";

function Favorites() {
  const { favorites, removeFavorite, updateOutfitName } = useOutfit();

  const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState("");

  if (favorites.length === 0) {
    return <EmptyState message="No saved outfits yet. Build one first." />;
  }

  function startEditing(outfit) {
    setEditingId(outfit.id);
    setEditedName(outfit.name);
  }

  function saveEditedName(id) {
    if (editedName.trim() === "") {
      return;
    }

    updateOutfitName(id, editedName);
    setEditingId(null);
    setEditedName("");
  }

  function cancelEditing() {
    setEditingId(null);
    setEditedName("");
  }

  return (
    <section>
      <div className="page-header">
        <h2>Favorites</h2>
        <p>Your saved outfit ideas.</p>
      </div>

      <div className="grid">
        {favorites.map((outfit) => {
          const isEditing = editingId === outfit.id;

          return (
            <div key={outfit.id} className="card">
              <div className="card-body">
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={editedName}
                      onChange={(event) => setEditedName(event.target.value)}
                      className="edit-input"
                      placeholder="Enter outfit name"
                    />

                    <div className="button-row">
                      <button
                        onClick={() => saveEditedName(outfit.id)}
                        className="button"
                      >
                        Save Name
                      </button>

                      <button
                        onClick={cancelEditing}
                        className="button button-light"
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3>{outfit.name}</h3>

                    <p>
                      <strong>Top:</strong>{" "}
                      {outfit.top ? outfit.top.name : "None"}
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

                    <div className="button-row">
                      <button
                        onClick={() => startEditing(outfit)}
                        className="button"
                      >
                        Edit Name
                      </button>

                      <button
                        onClick={() => removeFavorite(outfit.id)}
                        className="button button-light"
                      >
                        Delete Outfit
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Favorites;
