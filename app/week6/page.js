"use client";
import Link from 'next/link';
import ItemList from './item-list.js';
import Newitem from "./new-item.js";
import itemsData from "./items.json";
import {useState} from "react";

const allItems = [...itemsData];

export default function Week6page (){
    const [items, setItems] = useState(allItems);

    function handleSubmit (item){
        alert(`Adding ${item.name}, quantity ${item.quantity}, category ${item.category} to list`)
        setItems([...items, item])
    }
    return (
        <div className="flex-col">
            <h1 className="text-3xl font-bold text-center mt-5 mb-5"> Shopping List (week6)</h1>
            <Newitem onAddItem={(item)=> handleSubmit(item)}></Newitem>
            <div className="flex justify-center">
                <ItemList items ={items}></ItemList>
            </div>
            
            <div className="text-center hover:text-cyan-400 hover:underline p-2">
                <Link href="/">Home</Link>
            </div>
        </div>
    );
}
