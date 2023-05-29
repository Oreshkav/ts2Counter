import React, { useState } from "react";

const Counter = () => {
        // let count = 0;
    const [count, setCount] = useState(0);
    const [count10, setCount2] = useState(0); 

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
        <h2>Counter:{count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        
        <h2>Counter10:{count10}</h2>
        <button onClick={() => setCount2(count10 +10)}>Increment</button>
        <button onClick={() => setCount2(count10 - 10)}>Decrement</button>

        </>
    )
}
export default Counter;