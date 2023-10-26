"use client";

import React from 'react';
import Item from './item.js';
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList({items, onItemSelect}) {
    const [sortBy, setSortBy] = useState("name");
    
    //map all objects in array 
    let theItems = itemsData.map((item =>({...item})));

    //creating sort item method
    const sortItem = ()=> {
        if (sortBy === 'name'){
            return items.sort((a, b)=>a.name.localeCompare(b.name))
        }
        if (sortBy ==='category'){
            return items.sort((a, b)=>a.category.localeCompare(b.category))
        }
        return items;
    }
    //Get sorted items constant
    const sortedItems = sortItem();

    return(
        <div>
            <div>
                <label> Sort by: 
                <button className={`${sortBy === 'name' ? 'bg-orange-300' : 'bg-orange-500'} p-1 m-2 w-28 rounded-md text-md font-bold text-white text-center drop-shadow-md`} onClick={()=> setSortBy('name')}>
                    Name
                </button>
                <button className={`${sortBy === 'category' ? 'bg-orange-300' : 'bg-orange-500'} p-1 m-2 w-28 rounded-md text-md font-bold text-white text-center drop-shadow-md`} onClick={()=> setSortBy('category')}>
                    Category
                </button>
                </label>
            </div>
            <div>
                {/* displaying all objects in item card component, use sortedItems array    */}
                {sortedItems.map((item) => (
                <Item item={item} key={item.id} onSelect={() => onItemSelect(item)} />
                ))}
            </div>
           
        </div>
        
    );
}
  