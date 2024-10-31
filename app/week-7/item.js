export default function Item(props) {
    return (
        <section className="m-3 p-2 bg-neutral-700 text-neutral-100 w-96">
            <h2 className="font-bold text-neutral-100 text-lg capitalize">{props.name}</h2>
            <p className="text-neutral-100">Buy {props.quantity} in {props.category}</p>
        </section>
    );
}