import { useState } from "react";

export default function useCount(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
    const reset = () => setCount(initialValue);

    return { count, setCount, increment, decrement, reset };
}
