"use client"
import ItemList from './item-list.js';
import NewItem from './new-item.js';
import itemsData from './items.json';
import { useState } from 'react';

export default function Page() {

    const handleAddItem = (id, name, quantity, category) => {
        setItems([...items, { id, name, quantity, category }]);
    }

    const [items, setItems] = useState([...itemsData]);

    return (
        <main className="p-2 bg-neutral-900">
            <h1 className="text-3xl font-bold text-neutral-100">Shopping List</h1>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} />
        </main>
    );
}