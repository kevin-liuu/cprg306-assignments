"use client";
import {useState, useEffect} from "react";

async function fetchMealIdeas({ingredient}) {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals;
  }

  
export default function MealIdea (ingredient){
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            const fetchedMeals = await fetchMealIdeas(ingredient);
            console.log("Fetched Meals:", fetchedMeals);//testing
            console.log(ingredient);//testing 
            setMeals(fetchedMeals);
        }
        loadMealIdeas();
    }, [ingredient]);
    
    

    return(
        <div>
            <h1 className="p-2 m-4 bg-lime-500 max-w-sm rounded-md drop-shadow-lg text-xl font-bold text-white text-center">Meal Ideas </h1>
            {/* see if meals exist */}
            {meals && meals.length > 0 ? (
                <ul className="p-2 m-4 bg-lime-500 max-w-sm rounded-md drop-shadow-lg text-md text-white text-center">
                    {meals.map((meal) => (
                    <li key={meal.idMeal}>{meal.strMeal}</li>
                 ))}
                </ul>
) : (
    <p className="p-2 m-4 bg-lime-500 max-w-sm rounded-md drop-shadow-lg text-xl font-bold text-white text-center">No meals found for this ingredient.</p>
)}
        </div>
    );
}