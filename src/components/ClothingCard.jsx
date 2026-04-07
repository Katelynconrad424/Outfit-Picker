import { useOutfit } from "../context/OutfitContext";

function ClothingCard({ item }) {
  const {
    addToOutfit,
    selectedTop,
    selectedBottom,
    selectedShoes,
    selectedExtra,
  } = useOutfit();

  let isAdded = false;

  if (item.category === "top" && selectedTop?.id === item.id) {
    isAdded = true;
  } else if (item.category === "bottom" && selectedBottom?.id === item.id) {
    isAdded = true;
  } else if (item.category === "shoes" && selectedShoes?.id === item.id) {
    isAdded = true;
  } else if (item.category === "extra" && selectedExtra?.id === item.id) {
    isAdded = true;
  }

  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-image" />

      <div className="card-body">
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
        <p>Color: {item.color}</p>
        <p>Occasion: {item.occasion}</p>

        <button
          onClick={() => addToOutfit(item)}
          className={isAdded ? "button button-added" : "button"}
        >
          {isAdded ? "Added to Outfit" : "Add to Outfit"}
        </button>
      </div>
    </div>
  );
}

export default ClothingCard;
