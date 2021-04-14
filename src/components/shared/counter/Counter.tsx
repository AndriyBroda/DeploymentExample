import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(prev => prev + 1)}>Add</button>
            <div role='result'>{count}</div>
            <button onClick={() => setCount(prev => prev - 1)}>Remove</button>
        </>
    );
}