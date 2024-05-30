import "./ItemCount.css";

export default function ItemCount({ stock, count, increment, decrement }) {
    return (
        <div className="Item_Count">
            <button className="Item_Count-Button" onClick={decrement} disabled={count <= 0}>
                -
            </button>
            <span className="Contador">{count}</span>
            <button className="Item_Count-Button" onClick={increment} disabled={count >= stock}>
                +
            </button>
        </div>
    );
}