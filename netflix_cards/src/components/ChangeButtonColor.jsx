import { useState } from "react"

export const ChangeButtonColor = () => {
    const[isBlue, setButtonColor] = useState(true);

    const handleColorChange = () => {
        // if(isBlue === true ? setButtonColor(false) : setButtonColor(true));    // Changes the button color everytime when clicked

        // Changes the button color only once
        if(isBlue === true){
            setButtonColor(false);   
        }
    }
    return <>
        <div>
            <button className={`p-2 rounded-md font-bold text-white ${isBlue ? 'bg-blue-500' : 'bg-yellow-500'}`}
                    onClick={handleColorChange}>
                Click Here To Change Button Color
            </button>
        </div>
    </>
}