
export default function Item (props) {
    return (    
        <ul className= "flex flex-col justify-items-start p-4 bg-pink-600 shadow-md my-4">
            <div>
                <li className= "text-lg font-semibold text--300">{props.name} </li>
            </div>
            <ul className="flex items-center space-x-1 text-gray-300">
                <li>
                    Buy {props.quantity} in {props.category}
                    </li>
            </ul>
        </ul>
    );
}