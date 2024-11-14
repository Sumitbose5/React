import { useState } from "react";

export const LiftingState = () => {
    // Lifted up from InputComponent
    const [inputValue, setInputValue] = useState("");  
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
            <DisplayCompoment inputValue={inputValue}/>
        </>
    );
}

const InputComponent = ({ inputValue, setInputValue }) => {
    return (
        <>
            <input type="text" 
            placeholder="enter your name" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} />
        </>
    );
}

const DisplayCompoment = ({ inputValue }) => {
    return <p>The current input value is : {inputValue}</p>
}