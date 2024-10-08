"use client";
import {useState} from "react";
import Button from "../week-4/button";

export default function NewItems() {

  const [itemName, setItemName] = useState("");
  const [category, setCategory] = useState("Produce");
  const [quantity, setQuantity] = useState(1);
  const isDisabledDec = quantity === 1 ? true : false;
  const isDisabledInc = quantity === 20 ? true : false;

  const options = [
    "Produce",
    "Dairy",
    "Bakery",
    "Meat",
    "Frozen Foods",
    "Canned Goods",
    "Dry Foods",
    "Beverages",
    "Snacks",
    "Cleaning",
    "Household",
    "Others"
  ];

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    setQuantity(quantity - 1);
  }

  function reset() {
    setItemName("");
    setCategory("Produce");
    setQuantity(1);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      ItemName: itemName,
      Quantity: quantity,
      Category: category
    };
    console.log(item);
    alert(`Item Name: ${itemName} Category: ${category} Quantity: ${quantity}`);
    reset();
  }

  function selectCategory(e) {
    setCategory(e.target.value);
  }


  function QuantitySelector({ quantity, setQuantity }) {
    const isDisabledDec = quantity === 1 ? true : false;
    const isDisabledInc = quantity === 20 ? true : false;

    return (
      <div className="p-2 mt-1 mb-1 rounded-md bg-white ext-white w-36 h-15">
      <div className="flex justify-between">
        <span className="text-black">{quantity}</span>
        <div className="flex">
          <Button onClick={() => setQuantity(quantity - 1)} disabled={isDisabledDec}>-</Button>
          <Button onClick={() => setQuantity(quantity + 1)} disabled={isDisabledInc}>+</Button>
        </div>
      </div>
      </div>
    );
  }

 
  function Selection({ category, setCategory }) {
    return (
      <select
        className="p-2 mt-1 mb-1 rounded-md bg-white ext-white w-36 h-15"
        value={category}
        onChange={selectCategory}
      >
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    );
  }

  return (
    <main className="flex justify-center w-full">
      <form
        className="p-2 m-4 bg-slate-900 text-balck max-w-sm w-full"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          required
          onChange={(e) => setItemName(e.target.value)}
          className="w-full mt-1 border-2 border-gray-300 p-2 rounded-lg font-sans"
        />
        <div className="flex justify-between">
          <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
          <Selection category={category} setCategory={setCategory} />
        </div>
        <button
          type="submit"
          className="w-full mt-4 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
         +
        </button>
      </form>
    </main>
  );
}
