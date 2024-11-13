import React from "react";

export default function Item({ name, quantity, category, onSelect }) {
  return (
    <ul>
      <li
        className="p-2 m-4 bg-slate-900 max-w-sm"
        onClick={() => onSelect(name)}
      >
        <h1 className="text-xl text-white font-bold">{name}</h1>
        <p className="text-white">
          Buy {quantity} in {category}
        </p>
      </li>
    </ul>
  );
}
