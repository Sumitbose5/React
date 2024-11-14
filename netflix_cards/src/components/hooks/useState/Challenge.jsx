// What I Learned ?? 
// There is a property in button element called 'disabled' which can be used with a condition
// to disable the button when ceratin conditions are met.


import { useState } from "react";


export const Challenge = () => {

    const [count, setCount] = useState(0);
    const [step, setSteps] = useState(1);

    const handleIncrement = () => {
        setCount(count + step)
    }

    const handleDecrement = () => {
        setCount(count - step)
    }

    const handleReset = () => {
        setCount(0);
        setSteps(1);
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="flex-col">
            <h1 className="text-3xl m-3 font-semibold">useState Challenge</h1>
            <section className="w-auto h-1/2 p-5 bg-blue-500 text-black rounded-lg shadow-lg shadow-black flex-col items-center justify-center">

                <div className="flex-col">
                    <p className="font-bold text-2xl">Count : {count}</p>
                    <br />

                    <label className="font-semibold">Steps : </label>
                    <input type="number"
                        min={0} max={100}
                        placeholder="Set Steps"
                        value={step}
                        onChange={(event) => setSteps(Number(event.target.value))}
                    />
                    

                    <div className="flex mt-10 ml-10">
                        <button 
                        onClick={handleIncrement}
                        className="border-2 rounded-md p-1
                        hover:bg-blue-600 hover:text-gray-200 
                        hover:shadow-md hover:shadow-black mr-16"
                        disabled={count >= 100}>
                            Increment
                        </button>

                        <button onClick={handleDecrement}
                        className="border-2 rounded-md p-1
                        hover:bg-blue-600 hover:text-gray-200 
                        hover:shadow-md hover:shadow-black mr-16"
                        disabled={count <= 0}>
                            Decrement
                        </button>

                        <button onClick={handleReset}
                        className="border-2 rounded-md p-1
                        hover:bg-blue-600 hover:text-gray-200 
                        hover:shadow-md hover:shadow-black mr-16">
                            Reset
                        </button>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
}