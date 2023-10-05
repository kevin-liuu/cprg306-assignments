"use client";
import { useState } from "react";

export default function Newitem (){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    //sets the target input value to the name
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents default
        
        //create item object
        const item = { 
            name,
            quantity,
            category,
        };
        //log item object to console
        console.log(item)
        //alert current state
        alert(`Name: ${name} Quantity: ${quantity} Category: ${category}`);
        
        //reset to default
        setName("");
        setQuantity(1);
        setCategory("produce");
    }
    return(
        <main className="flex justify-center w-full">
            <div>
                <form className ="mt-5 bg-cyan-300 rounded-lg p-3 drop-shadow-lg" onSubmit={handleSubmit}>
                    <label>Name:
                        <input 
                        type="text"
                        required
                        placeholder="Item Name"
                        onChange={handleNameChange}
                        value={name}
                        className="mt-1 p-1 block w-full rounded-lg text-black bg-gray-100 focus:bg-white">        
                        </input>

                       
                    </label>
                    <label>
                        Quanitity:
                    <input
                        type="number"
                        min={1}
                        max={99}
                        required
                        onChange={handleQuantityChange}
                        value={quantity}
                        className="mt-1 p-1 block w-full rounded-lg text-black bg-gray-100 focus:bg-white">
                        </input>
                    </label>

                    <label>
                        Category: 
                        <select
                        value={category}
                        onChange={handleCategoryChange}
                        className="mt-1 p-1 block w-full rounded-lg text-black bg-gray-100 focus:bg-white">
                            <option>Produce</option>
                            <option>Dairy</option>
                            <option>Bakery</option>
                            <option>Meat</option>
                            <option>Frozen Foods</option>
                            <option>Canned Goods</option>
                            <option>Dry Goods</option>
                            <option>Beverages</option>
                            <option>Snacks</option>
                            <option>Household</option>
                            <option>Other</option>

                        </select>
                    </label>
                    <button type="submit"
                    className="mt-3 w-full py-2 px-4 bg-sky-400 hover:bg-sky-500 rounded-md text-white">
                    +
                    </button>
                </form>
            </div>
        </main>
    );
}
