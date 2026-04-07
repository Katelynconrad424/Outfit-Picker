import { useNavigate } from "react-router-dom";
import { useOutfit } from "../context/OutfitContext";

function OutfitPreview() {
  const navigate = useNavigate();

  const {
    selectedTop,
    selectedBottom,
    selectedShoes,
    selectedExtra,
    clearOutfit,
    saveOutfit,
  } = useOutfit();

  const outfitComplete = selectedTop && selectedBottom && selectedShoes;

  function handleSaveOutfit() {
    saveOutfit();
    navigate("/favorites");
  }

  return (
    <section className="preview-box">
      <h2>Your Outfit</h2>

      <div className="preview-list">
        <p>
          <strong>Top:</strong>{" "}
          {selectedTop ? selectedTop.name : "None selected"}
        </p>
        <p>
          <strong>Bottom:</strong>{" "}
          {selectedBottom ? selectedBottom.name : "None selected"}
        </p>
        <p>
          <strong>Shoes:</strong>{" "}
          {selectedShoes ? selectedShoes.name : "None selected"}
        </p>
        <p>
          <strong>Extra:</strong>{" "}
          {selectedExtra ? selectedExtra.name : "None selected"}
        </p>
      </div>

      {!outfitComplete && (
        <p className="preview-note">
          Add a top, bottom, and shoes to complete your outfit.
        </p>
      )}

      {outfitComplete && (
        <p className="preview-success">
          Your outfit is complete and ready to save.
        </p>
      )}

      <div className="button-row">
        <button
          onClick={handleSaveOutfit}
          className={outfitComplete ? "button" : "button button-disabled"}
          disabled={!outfitComplete}
        >
          Save Outfit
        </button>

        <button onClick={clearOutfit} className="button button-light">
          Clear
        </button>
      </div>
    </section>
  );
}

export default OutfitPreview;
