"use client"
import { useState, useEffect } from "react";

const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
};

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async (ingredient) => {
        const fetchedMeals = await fetchMealIdeas(ingredient); // Await the fetchMealIdeas call
        setMeals(fetchedMeals); // Set meals or an empty array if no meals are returned
    };

    useEffect(() => {
        loadMealIdeas(ingredient);
    }, [ingredient]);

    return (
        <div className="bg-neutral-800 p-2 m-2 first-letter:capitalize">
            <h1 className="text-2xl font-bold text-neutral-100">{ingredient} Meal Ideas</h1>
            <div 
            >
                {meals.map(meal => (
                    <div key={meal.idMeal} className="bg-neutral-700 p-2 m-2 rounded-lg">
                        {/* <img src={meal.strMealThumb} alt={meal.strMeal} className="rounded-lg" /> */}
                        <h2 className="text-lg font-bold text-neutral-100"
                        >{meal.strMeal}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}