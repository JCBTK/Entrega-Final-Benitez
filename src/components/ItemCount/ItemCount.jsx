
export default function ItemCount({ stock, count, increment, decrement }) {
    return (
        <div className="item-count">
            <button onClick={decrement} disabled={count <= 0}>
                -
            </button>
            <span>{count}</span>
            <button onClick={increment} disabled={count >= stock}>
                +
            </button>
        </div>
    );
}
