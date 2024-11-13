"use client";
import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  return data.meals;
}
export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]); //meal variable
  const loadMealIdeas = async () => {
    const fetchedMeal = await fetchMealIdeas(ingredient); //fetch based on shopping list ingredients
    setMeals(fetchedMeal); //meals state
  };
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas(); //fetch meals depending on the selected ingredient
    }
  }, [ingredient]);

  return (
    <div>
      <h2 className="font-semibold text-2xl">Meal Ideas</h2>
      <p>Here are some meal ideas using {ingredient}:</p>
      {meals === null ? (
        <p className="font-semibold text-xl">No meals found</p>
      ) : (
        <ul className="flex-col flex gap-4">
          {meals.map((meal) => (
            <li key={meal.idMeal}>{meal.strMeal}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
