"use client";
import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");
  const [grouped, setGrouped] = useState(false);

  const itemsByCategory = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  // sort the list by name or category based on choice.
  if (sortBy == "name") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy == "category") {
    items.sort((a, b) => a.category.localeCompare(b.category));
  } else if (sortBy == "groupCategory") {
    items.sort((a, b) => a.name.localeCompare(b.name));
  }

  const handleSortByName = () => {
    setSortBy("name");
    setGrouped(false);
  };

  const handleSortByCategory = () => {
    setSortBy("category");
    setGrouped(false);
  };

  const handleGroupCategory = () => {
    setSortBy("groupCategory")
    setGrouped(true);
  };

  return (
    <main>
      <span className="text-neutral-100 flex gap-4 my-4 mx-2">
        <p>Sort by: </p>
        {/* Sort by Name */}
        <button
          className={`${sortBy == "name" ? "bg-blue-400" : "bg-blue-600"
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleSortByName}
        >
          Name
        </button>
        {/* Sort by Category */}
        <button
          className={`${sortBy == "category" ? "bg-blue-400" : "bg-blue-600"
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleSortByCategory}
        >
          Category
        </button>
        {/* Group by Category */}
        <button
          className={`${sortBy == "groupCategory" ? "bg-blue-400" : "bg-blue-600"
            } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
          onClick={handleGroupCategory}
        >
          Grouped Category
        </button>
      </span>

      {grouped
        ? // Render grouped items by category
        Object.entries(itemsByCategory).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold text-neutral-100 capitalize">
              {category}
            </h2>
            {items.map((item) => (
              <Item
                key={item.id}
                name={item.name}
                quantity={item.quantity}
                category={item.category}
                onSelect={onItemSelect}
              />
            ))}
          </div>
        ))
        : // Render items as normal
        items.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={onItemSelect}
          />
        ))}
    </main>
  );
}