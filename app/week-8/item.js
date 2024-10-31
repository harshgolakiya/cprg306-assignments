export default function Item({ name, quantity, category, onSelect }) {
    return (
        <section className="m-3 p-2 bg-neutral-700 text-neutral-100 w-96 hover:bg-orange-400 cursor-pointer" onClick={() => onSelect(name)}>
            <h2 className="font-bold text-neutral-100 text-lg capitalize">{name}</h2>
            <p className="text-neutral-100">Buy {quantity} in {category}</p>
        </section>
    );
}