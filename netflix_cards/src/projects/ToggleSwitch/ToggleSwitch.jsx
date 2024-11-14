import { useState } from "react"
import "./ToggleSwitch.css"

export const ToggleSwitch = () => {
    const[isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    }

    const checkIsOn = isOn ? "On" : "Off";

    const toggleBGColor = { backgroundColor: isOn ? "#4caf50" : "" };


    return <>
      <div
        className="toggle-switch"
        style={toggleBGColor}
        onClick={handleToggle}
      >
        <div className={`switch ${checkIsOn}`}>
          <span className="switch-state">{checkIsOn}</span>
        </div>
      </div>

    </>
}