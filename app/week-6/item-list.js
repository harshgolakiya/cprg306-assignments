"use client";

import { useState } from 'react';
import items from "../week-6/items.json";
import Item from "./item";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedData = [...items].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "category") {
            return a.category.localeCompare(b.category);
        } else {
            return 0; 
        }
    });

    const groupedData = sortedData.reduce((grouped, item) => {
        const { category } = item;
        if (!grouped[category]) {
            grouped[category] = [];
        }
        grouped[category].push(item);
        return grouped;
    }, {});

    function handleClick(index) {
        const item = {
            name: sortedData[index].name,
            quantity: sortedData[index].quantity,
            category: sortedData[index].category,
        };
        console.log(item);
        alert(
            `You clicked on ${sortedData[index].name}, ${sortedData[index].quantity} ${sortedData[index].category}`
        );
    }

    return (
        <main>
            <div>
                <nav className="p-5 flex flex-row">
                    <h1 className="text-2xl py-4">Sort by</h1>
                    <button
                        onClick={() => setSortBy("name")}
                        className={`text-white px-6 py-3 font-bold rounded-lg mx-2 transition duration-300 ease-in-out ${sortBy === "name" ? "bg-red-300" : "bg-pink-500"}`}
                    >
                        Name
                    </button>
                    <button
                        onClick={() => setSortBy("category")}
                        className={`text-white px-6 py-3 font-bold rounded-lg mx-2 transition duration-300 ease-in-out ${sortBy === "category" ? "bg-red-300" : "bg-pink-500"}`}
                    >
                        Category
                    </button>
                    <button
                        onClick={() => setSortBy("grouped")}
                        className={`text-white px-6 py-3 font-bold rounded-lg mx-2 transition duration-300 ease-in-out ${sortBy === "grouped" ? "bg-red-300" : "bg-pink-500"}`}
                    >
                        Group by Category
                    </button>
                </nav>

                {/* Conditionally render based on sorting type */}
                {sortBy !== "grouped" ? (
                    <ul>
                        {sortedData.map((item, index) => (
                            <li key={item.id} onClick={() => handleClick(index)}>
                                <Item
                                    name={item.name}
                                    quantity={item.quantity}
                                    category={item.category}
                                />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div>
                        {Object.keys(groupedData).map((category) => (
                            <div key={category}>
                                <h2 className="text-xl font-bold capitalize mt-6">{category}</h2>
                                <ul>
                                    {groupedData[category].map((item) => (
                                        <li key={item.id}>
                                            <Item
                                                name={item.name}
                                                quantity={item.quantity}
                                                category={item.category}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}