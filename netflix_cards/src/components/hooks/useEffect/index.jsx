import { useEffect, useState } from "react";
import "./index.css"

export const ReactUseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Count : ", count);
    }, [count])

    return (
        <>
            <h1>Count : {count}</h1>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    Increment
                </button>
            </div>
        </>
    );
}