import { useEffect, useState } from "react"

export const CleanUp = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const numCount = setInterval(() => {
            setCount((prev) => prev + 1)
        }, 1000)

        // Clean Up Function
        // The cleanup function ensures that only the intended interval runs
        return () => clearInterval(numCount);
    }, [])

    return (
        <h1>Count : {count}</h1>
    )
}