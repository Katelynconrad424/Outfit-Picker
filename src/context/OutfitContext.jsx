import { createContext, useContext, useState } from "react";
import starterItems from "../data/starterItems";

const OutfitContext = createContext();

export function OutfitProvider({ children }) {
  const [items] = useState(starterItems);

  const [selectedTop, setSelectedTop] = useState(null);
  const [selectedBottom, setSelectedBottom] = useState(null);
  const [selectedShoes, setSelectedShoes] = useState(null);
  const [selectedExtra, setSelectedExtra] = useState(null);

  const [favorites, setFavorites] = useState([]);

  function addToOutfit(item) {
    if (item.category === "top") {
      setSelectedTop(item);
    } else if (item.category === "bottom") {
      setSelectedBottom(item);
    } else if (item.category === "shoes") {
      setSelectedShoes(item);
    } else if (item.category === "extra") {
      setSelectedExtra(item);
    }
  }

  function clearOutfit() {
    setSelectedTop(null);
    setSelectedBottom(null);
    setSelectedShoes(null);
    setSelectedExtra(null);
  }

  function saveOutfit() {
    const newOutfit = {
      id: Date.now(),
      name: `Look #${favorites.length + 1}`,
      top: selectedTop,
      bottom: selectedBottom,
      shoes: selectedShoes,
      extra: selectedExtra,
    };

    setFavorites([...favorites, newOutfit]);
  }

  function removeFavorite(id) {
    const updatedFavorites = favorites.filter((outfit) => outfit.id !== id);
    setFavorites(updatedFavorites);
  }

  return (
    <OutfitContext.Provider
      value={{
        items,
        selectedTop,
        selectedBottom,
        selectedShoes,
        selectedExtra,
        favorites,
        addToOutfit,
        clearOutfit,
        saveOutfit,
        removeFavorite,
      }}
    >
      {children}
    </OutfitContext.Provider>
  );
}

export function useOutfit() {
  return useContext(OutfitContext);
}
