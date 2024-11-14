import { useState } from "react"

export const State = () => {
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count + 1);
    }
    return (
        <>
            <div className="w-1/2 h-1/2 flex justify-center items-center">
                <h1>{count}</h1>
                <button onClick={handleButtonClick} className="bg-blue-700 text-white rounded-md p-2">
                    Increment
                </button>
            </div>
        </>
    );
}