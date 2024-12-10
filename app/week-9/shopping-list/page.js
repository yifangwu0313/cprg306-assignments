"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsJson from "./item.json";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const [items, setItems] = useState(itemsJson); // use itemsJson as initial state
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();

  if (!user) {
    return (
      <main>
        <h1>Week 9 Assignment</h1>
        <p>You need to login to view this page. </p>
      </main>
    );
  }

  const handleAddItem = (newItem) => {
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  };

  const handleItemSelect = (name) => {
    name = name.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
      ""
    );
    setSelectedItemName(name);
  };

  return (
    <main className="bg-[#020617] text-black-900">
      <h1 className="text-[28px] text-white font-bold ml-5">Shopping List</h1>
      <div className="flex flex-row">
        <div>
          <NewItem onAddItem={handleAddItem} />

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
