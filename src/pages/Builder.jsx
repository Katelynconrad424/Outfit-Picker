import { useOutfit } from "../context/OutfitContext";
import ClothingCard from "../components/ClothingCard";
import OutfitPreview from "../components/OutfitPreview";

function Builder() {
  const { items } = useOutfit();

  return (
    <section>
      <div className="page-header">
        <h2>Outfit Builder</h2>
        <p>Pick one item from each category to build a full look.</p>
      </div>

      <OutfitPreview />

      <h3 className="section-title">Choose Pieces</h3>

      <div className="grid">
        {items.map((item) => {
          return <ClothingCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Builder;
