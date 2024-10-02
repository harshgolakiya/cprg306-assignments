import ItemList from "./item-list";

const Item = ({ name, quantity, category }) => {
    return (
      <li className="p-4 mb-2 border rounded-lg  bg-white">
        <div className="font-bold text-xl">{name}</div>
        <div>Buy {quantity} in {category} </div>
      </li>
    );
  };

export default Item;