import { useState } from "react";
import { useOutfit } from "../context/OutfitContext";
import ClothingCard from "../components/ClothingCard";

function Closet() {
  const { items } = useOutfit();
  const [filter, setFilter] = useState("all");

  let filteredItems = items;

  if (filter !== "all") {
    filteredItems = items.filter((item) => item.category === filter);
  }

  return (
    <section>
      <div className="page-header">
        <h2>Closet</h2>
        <p>Browse items and add them to your outfit.</p>
      </div>

      <div className="filters">
        <button onClick={() => setFilter("all")} className="filter-button">
          All
        </button>
        <button onClick={() => setFilter("top")} className="filter-button">
          Tops
        </button>
        <button onClick={() => setFilter("bottom")} className="filter-button">
          Bottoms
        </button>
        <button onClick={() => setFilter("shoes")} className="filter-button">
          Shoes
        </button>
        <button onClick={() => setFilter("extra")} className="filter-button">
          Extras
        </button>
      </div>

      <div className="grid">
        {filteredItems.map((item) => {
          return <ClothingCard key={item.id} item={item} />;
        })}
      </div>
    </section>
  );
}

export default Closet;
