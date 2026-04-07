import { useOutfit } from "../context/OutfitContext";

function ClothingCard({ item }) {
  const { addToOutfit } = useOutfit();

  return (
    <div className="card">
      <img src={item.image} alt={item.name} className="card-image" />

      <div className="card-body">
        <h3>{item.name}</h3>
        <p>Category: {item.category}</p>
        <p>Color: {item.color}</p>
        <p>Occasion: {item.occasion}</p>

        <button onClick={() => addToOutfit(item)} className="button">
          Add to Outfit
        </button>
      </div>
    </div>
  );
}

export default ClothingCard;
