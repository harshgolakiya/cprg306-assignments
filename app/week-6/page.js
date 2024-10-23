import React from "react";
import ItemList from "./item-list.js";  

export default function Page() {
    return (
        <main className="p-6 min-h-screen" style={{ backgroundColor: "#083344" }}>
            <h1 className="text-4xl font-bold text-pink-500 mb-6">Shopping List</h1>
            <section className="flex justify-between items-center">
                <ItemList />
            </section>
        </main>
    );
}