"use client"
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas.js';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {

    const handleAddItem = (id, name, quantity, category) => {
        setItems([...items, { id, name, quantity, category }]);
    };

    const handleItemSelect = (name) => {
        const cleanedName = name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(cleanedName);
    };

    const [items, setItems] = useState([...itemsData]);
    const [selectedItemName, setSelectedItemName] = useState("");

    return (
        <main className="p-2 bg-neutral-900">
            <h1 className="text-3xl font-bold text-neutral-100">Shopping List</h1>
            <div className="flex gap-4">
            <div>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}