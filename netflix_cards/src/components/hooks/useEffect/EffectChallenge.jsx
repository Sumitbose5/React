import { useEffect, useState } from "react";
import "./index.css"

export const EffectChallenge = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("Name : ", name);
    }, [name])

    // Change the title of the web page  -> count : 0
    useEffect(() => {
        document.title = `count : ${count}`
    }, [count])

    return (
        <div className="container effect-container">
            <h1>useEffect Challenge</h1>
            <p>
                Count : {count}
            </p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <p>
                Name : {name}
            </p>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
    );

}