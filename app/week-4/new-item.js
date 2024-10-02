"use client";
import {useState} from "react";
import Button from "./button";



export default function NewItems() {
  const [quatity, setQuantity] = useState(1);
  const isDisabledDec = quatity === 1? true : false;
  const isDisabledInc = quatity === 20? true : false;  
function increment() {
  setQuantity(quatity + 1);
}
function decrement() {
  setQuantity(quatity - 1);
}
  return (
    <main >
      <h1 className="text-[28px] font-bold ml-5 mt-5"></h1>
      <div className="flex justify-center items-center">
        <Button onClick={decrement} disabled={isDisabledDec}>-</Button>
        <p className="text-[28px] font-bold">{quatity}</p>
        <Button onClick={increment} disabled={isDisabledInc}>+</Button>
      </div>
      
    </main>
  );
}