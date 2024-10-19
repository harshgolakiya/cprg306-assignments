'use client';

import { useState } from 'react';

export default function NewItem() {
  const [name, setName] = useState(''); 
  const [quantity, setQuantity] = useState(1); 
  const [category, setCategory] = useState('produce'); 

  const increment = () => {
    setQuantity(prev => Math.min(prev + 1, 20));
  };

  const decrement = () => {
    setQuantity(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    const item = {
      name,
      quantity,
      category
    };

    console.log(item);

    alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

    setName('');
    setQuantity(1);
    setCategory('produce');
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-lg flex flex-col items-center space-y-6">
      <h2 className="text-2xl font-bold text-white">Add New Item</h2>

      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        
        <div className="flex flex-col">
          <label className="text-white font-semibold">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="p-2 rounded-lg shadow-md border border-gray-300"
            placeholder="Enter item name"
          />
        </div>

        <div className="flex items-center space-x-6 bg-white rounded-lg p-4 shadow-md">
          <button
            type="button"
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg shadow hover:bg-red-400 transition duration-300 disabled:bg-red-200"
            disabled={quantity === 1}
          >
            -
          </button>
          <span className="text-xl font-bold text-gray-700">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-400 transition duration-300 disabled:bg-green-200"
            disabled={quantity === 20}
          >
            +
          </button>
        </div>

        <div className="flex flex-col">
          <label className="text-white font-semibold">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 rounded-lg shadow-md border border-gray-300 bg-gray-800 text-white focus:bg-gray-700 focus:text-white"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen-foods">Frozen Foods</option>
            <option value="canned-goods">Canned Goods</option>
            <option value="dry-goods">Dry Goods</option>
            <option value="beverages">Beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-blue-400 transition duration-300"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}