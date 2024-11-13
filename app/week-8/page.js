"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsJson from "./item.json";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsJson);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleAddItem = (newItem) => {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };
  const handleItemSelect = (item) => {
    setSelectedItem(item);
  };

  return (
    <main className="bg-[#020617] text-black-900">
      <h1 className="text-[28px] text-white font-bold ml-5">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} onClick={handleItemSelect} />
      <div>
        <MealIdeas ingredients={selectedItem} />
      </div>
    </main>
  );
}
