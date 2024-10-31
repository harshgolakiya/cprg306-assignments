"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [isActiveDecrement, setIsActiveDecrement] = useState(false);
    const [isActiveIncrement, setIsActiveIncrement] = useState(true);
    const [category, setCategory] = useState("Produce");

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const increment = () => {
        if (quantity < 20) {
            setQuantity(quantity + 1);
            setIsActiveDecrement(true);
        }
        else {
            alert("Quantity cannot be more than 20");
        }
        if (quantity == 19) {
            setIsActiveIncrement(false);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            setIsActiveIncrement(true);
        }
        else {
            alert("Quantity cannot be less than 1");
        }
        if (quantity == 2) {
            setIsActiveDecrement(false);
        }
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = { name, category, quantity };
        const id = generateRandomId();
        console.log(item);
        onAddItem(id, name, quantity, category);
        // alert(
        //     `You added ${quantity} ${name}${quantity > 1 ? "s" : ""
        //     } in the ${category} category.`
        // );

        // Clear the form
        setName("");
        setQuantity(1);
        setIsActiveDecrement(false);
        setIsActiveIncrement(true);
        setCategory("Produce");
    };

    function generateRandomId() {
        const LENGTH = 18;
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';

        for (let i = 0; i < LENGTH; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomId += characters[randomIndex];
        }

        return randomId;
    }

    return (
        <form
            onSubmit={(event) => handleSubmit(event)}
            className="flex flex-col w-96 my-4 p-4 bg-gray-700 rounded-lg shadow-lg"
        >
            {/* Name */}
            <input
                id="itemName"
                type="text"
                value={name}
                onChange={(event) => handleNameChange(event)}
                placeholder="Item name"
                className="p-2 my-2 border border-gray-400 rounded"
                required
            />
            {/* Name END*/}

            {/* Quantity  with + and - buttons*/}
            <div className="flex bg-gray-400 drop-shadow-2xl rounded w-48 h-12 mx-auto my-4 text-xl">
                <p className="flex-1 my-auto mx-3">{quantity}</p>
                <div className="my-auto mx-2 grid grid-cols-2 gap-2">
                    <button
                        id="decrementButton"
                        type="button"
                        onClick={decrement}
                        className={` ${isActiveDecrement
                            ? "bg-blue-500 hover:bg-blue-700"
                            : "bg-blue-200"
                            } w-8 h-8 text-white font-bold rounded`}
                    >
                        -
                    </button>
                    <button
                        id="incrementButton"
                        type="button"
                        onClick={increment}
                        className={` ${isActiveIncrement
                            ? "bg-blue-500 hover:bg-blue-700"
                            : "bg-blue-200"
                            } w-8 h-8 text-white font-bold rounded`}
                    >
                        +
                    </button>
                </div>
            </div>
            {/* Quantity  with + and - buttons END*/}

            {/* Category */}
            <select
                id="itemCategory"
                value={category}
                onChange={(event) => handleCategoryChange(event)}
            >
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
            {/* Category END */}

            {/* Add Button */}
            <input
                type="submit"
                value="+"
                className="p-2 my-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
            />
            {/* Add Button END*/}
        </form>
    );
}