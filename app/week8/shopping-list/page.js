
"use client";
import Link from 'next/link';
import ItemList from './item-list.js';
import Newitem from "./new-item.js";
import MealIdea from "./meal-ideas.js"; // Import the MealIdeas component
import itemsData from "./items.json";
import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";

const allItems = [...itemsData];

export default function Week7page() {
    const { user } = useUserAuth();

  // Check if the user is logged in
    if (!user) {
    // If the user is not logged in, do not render the shopping list page
        return <p>Please log in to access the shopping list.</p>;
    }     

    const [items, setItems] = useState(allItems);
    const [selectedItemName, setSelectedItemName] = useState(""); // New state variable

    function handleSubmit(item) {
        alert(`Adding ${item.name}, quantity ${item.quantity}, category ${item.category} to list`);
        setItems([...items, item]);
    }

    function handleItemSelect(item) {
        // Check if item.name is a string
        if (typeof item.name === "string") {
          // Clean up item name by removing size and emojis
          const cleanedItemName = item.name
            .split(',')[0] // Remove size information
            .replace(/[^A-Za-z\s]/g, '') // Remove emojis and non-alphabetic characters
            .trim(); // Trim extra spaces
            
          setSelectedItemName(cleanedItemName);
        } else {
          // Handle the case where item.name is not a string
          console.error("Invalid item name:", item.name);
          // Set a default or handle it in an appropriate way for your use case
          setSelectedItemName("");
        }
      }

    return (
        <div className="flex-col">
            <h1 className="text-3xl font-bold text-center mt-5 mb-5">{user.email}'s Shopping List (week8)</h1>
            <div className='mb-5'>
                <Newitem onAddItem={(item) => handleSubmit(item)}></Newitem>
            </div>
            <div className="flex justify-center">
                <div className="flex-1">
                    <ItemList items={items} onItemSelect={handleItemSelect}></ItemList>
                </div>
                <div className="flex-1">
                    <MealIdea ingredient={selectedItemName}></MealIdea>
                </div>
            </div>
            

            <div className="text-center hover:text-cyan-400 hover:underline p-2">
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}
