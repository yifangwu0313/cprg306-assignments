"use client";
import { useState } from "react";

export default function NewItems() {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  }

  function decrement() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <main className="flex justify-center items-center bg-gray-700 min-h-screen">
      <div className="text-center">
        <h1 className="text-3xl font-bold w-20">{quantity}</h1>
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 px-4 py-2 mx-1 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
        >
          -
        </button>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className="bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 px-4 py-2 mx-1 focus:outline-none focus:ring-2 disabled:bg-gray-400 focus:ring-blue-400 focus:ring-opacity-75"
        >
          +
        </button>
      </div>
    </main>
  );
}
