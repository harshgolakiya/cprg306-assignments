"use client";
import { useState } from "react";

export default function NewItem()
{
    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");

    const handleSubmit =(event)=>
    {
        event.preventDefault();
        const item = {
            name: name,
            quantity: quantity,
            category: category
        }
        setName("");
        setQuantity(1);
        setCategory("produce");

        if(item.name != "")
        {
            alert("Added Item: " + item.name + " quantity: " + item.quantity + " category: " + item.category);
        }else
        {
            alert("Please enter Item Name");
        }
    }

    return(
        <div className="flex justify-center">
            <form className="p-2 m-4 bg-slate-950 text-black max-w-sm w-full">
                <div className="">
                    <input required className="mb-2 w-full p-2 mt-1 rounded-lg" placeholder="Item Name"type="text" value={name} onChange={(event)=>setName(event.target.value)}></input>  
                </div>
                <div>
                    <input className="p-2 rounded-lg ml-1 w-20" type="number" min={1} max={99} value={quantity} onChange={(event)=>setQuantity(+event.target.value)}></input>
                    <select className="p-2 rounded-lg float-right" value={category} onChange={(event)=>setCategory(event.target.value)}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen foods">Frozen Foods</option>
                        <option value="canned goods">Canned Goods</option>
                        <option value="dry goods">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit" className="mt-4 p-2 rounded-lg text-center w-full bg-blue-500 text-white font-bold" onClick={handleSubmit}>+</button>
            </form>
        </div>
    )
}