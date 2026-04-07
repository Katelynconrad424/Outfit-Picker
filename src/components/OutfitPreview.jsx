import { useOutfit } from "../context/OutfitContext";

function OutfitPreview() {
  const {
    selectedTop,
    selectedBottom,
    selectedShoes,
    selectedExtra,
    clearOutfit,
    saveOutfit,
  } = useOutfit();

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

      <div className="button-row">
        <button onClick={saveOutfit} className="button">
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
