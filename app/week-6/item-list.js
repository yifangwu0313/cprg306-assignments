"use client";
import { useState } from "react";
import Item from "./item.js";
import items from "./items.json";

export default function ItemList() {
  let itemJSON = [...items];
  const [sortBy, setSortBy] = useState("name");
  itemJSON.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  function handleGroup() {
    const groupedItems = [...items].reduce((acc, item) => {
      if (!acc[items.category]) {
        acc[items.category] = [];
      }
      acc[items.category].push(item);
      return acc;
    }, []);
    console.log(groupedItems);
  }

  return (
    <main>
      <div className="flex">
        <h1>Sort by:</h1>
        <button
          onClick={() => setSortBy("name")}
          className={`py-2 px-4 bg-blue-400 border-b-1 font-bold ml-2 hover:bg-blue-900 ${
            sortBy === "name"
              ? "bg-blue-600 text-black-500"
              : "bg-gray-300 text-black"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`py-4 px-6 bg-blue-400 border-b-1 font-bold ml-4 hover:bg-blue-900 ${
            sortBy === "category"
              ? "bg-blue-600 text-black-500"
              : "bg-gray-300 text-black"
          }`}
        >
          Category
        </button>

        <button
          onClick={handleGroup}
          className={`py-2 px-4 bg-blue-400 border-b-1 font-bold ml-4 hover:bg-blue-900 ${
            sortBy === "category"
              ? "bg-blue-600 text-black-500"
              : "bg-gray-300 text-black"
          }`}
        >
          Grouped Category
        </button>
      </div>
      <div>
        {itemJSON.map((item) => {
          return (
            <Item
              key={item.name}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          );
        })}
      </div>
    </main>
  );
}
